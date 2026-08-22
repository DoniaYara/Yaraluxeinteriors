import { getPrisma } from "./db.js";
import { slugify } from "./constants.js";
import { sanitizeArticleHtml, sanitizePlain } from "./sanitize.js";
import { assertPublishable, canTransition, isDueForAutoPublish } from "./status.js";
import { writeAudit } from "./audit.js";

function include() {
  return {
    author: { select: { id: true, name: true, email: true, imageUrl: true, bio: true } },
    categories: { include: { category: true } }
  };
}

export function serializeArticle(article) {
  if (!article) return null;
  return {
    ...article,
    categories: (article.categories || []).map((row) => row.category),
    categoryIds: (article.categories || []).map((row) => row.categoryId || row.category?.id)
  };
}

export async function listArticles({ status, q, authorId } = {}) {
  const db = getPrisma();
  const where = {};
  if (status && status !== "all") where.status = status;
  else if (!status || status === "all") where.status = { not: "trash" };
  if (status === "trash") where.status = "trash";
  if (authorId) where.authorId = authorId;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { slug: { contains: q, mode: "insensitive" } }
    ];
  }
  return db.article.findMany({
    where,
    include: include(),
    orderBy: { updatedAt: "desc" }
  });
}

export async function articleCounts() {
  const db = getPrisma();
  const [total, published, planned, scheduled, drafts, trash] = await Promise.all([
    db.article.count({ where: { status: { not: "trash" } } }),
    db.article.count({ where: { status: "published" } }),
    db.article.count({ where: { status: "planned" } }),
    db.article.count({ where: { status: "scheduled" } }),
    db.article.count({ where: { status: "draft" } }),
    db.article.count({ where: { status: "trash" } })
  ]);
  return { total, published, planned, scheduled, drafts, trash };
}

export async function getArticle(id) {
  const db = getPrisma();
  return db.article.findUnique({ where: { id }, include: include() });
}

export async function getArticleBySlug(slug) {
  const db = getPrisma();
  if (!db) return null;
  return db.article.findUnique({ where: { slug }, include: include() });
}

export async function slugTaken(slug, excludeId) {
  const db = getPrisma();
  const found = await db.article.findUnique({ where: { slug } });
  if (!found) return false;
  return found.id !== excludeId;
}

function categoryConnect(categoryIds = []) {
  const ids = [...new Set((categoryIds || []).filter(Boolean))];
  return {
    deleteMany: {},
    create: ids.map((categoryId) => ({ categoryId }))
  };
}

export async function createArticle(input, actor) {
  const db = getPrisma();
  const title = sanitizePlain(input.title, 180) || "Untitled";
  let slug = slugify(input.slug || title) || `article-${Date.now()}`;
  if (await slugTaken(slug)) slug = `${slug}-${Date.now().toString(36)}`;
  const status = ["planned", "draft"].includes(input.status) ? input.status : "draft";
  const article = await db.article.create({
    data: {
      title,
      slug,
      content: sanitizeArticleHtml(input.content || ""),
      excerpt: sanitizePlain(input.excerpt, 400),
      featuredImage: sanitizePlain(input.featuredImage, 500),
      featuredImageAlt: sanitizePlain(input.featuredImageAlt, 180),
      seoTitle: sanitizePlain(input.seoTitle, 80),
      metaDescription: sanitizePlain(input.metaDescription, 200),
      canonicalUrl: sanitizePlain(input.canonicalUrl, 300),
      tags: sanitizePlain(input.tags, 200),
      notes: sanitizePlain(input.notes, 500),
      authorId: actor.role === "admin" && input.authorId ? input.authorId : actor.id,
      status,
      intendedPublishOn: input.intendedPublishOn || null,
      createdBy: actor.id,
      updatedBy: actor.id,
      categories: {
        create: [...new Set((input.categoryIds || []).filter(Boolean))].map((categoryId) => ({ categoryId }))
      }
    },
    include: include()
  });
  await writeAudit({
    action: status === "planned" ? "article_planned" : "article_created",
    actorId: actor.id,
    targetType: "article",
    targetId: article.id
  });
  return article;
}

export async function updateArticle(id, input, actor) {
  const db = getPrisma();
  const current = await getArticle(id);
  if (!current) return { error: "Article not found." };
  if (actor.role !== "admin" && current.authorId !== actor.id) return { error: "Forbidden." };

  const data = {
    title: sanitizePlain(input.title, 180) || current.title,
    excerpt: sanitizePlain(input.excerpt, 400),
    featuredImage: sanitizePlain(input.featuredImage, 500),
    featuredImageAlt: sanitizePlain(input.featuredImageAlt, 180),
    seoTitle: sanitizePlain(input.seoTitle, 80),
    metaDescription: sanitizePlain(input.metaDescription, 200),
    canonicalUrl: sanitizePlain(input.canonicalUrl, 300),
    tags: sanitizePlain(input.tags, 200),
    notes: sanitizePlain(input.notes, 500),
    intendedPublishOn: input.intendedPublishOn === undefined ? current.intendedPublishOn : input.intendedPublishOn || null,
    updatedBy: actor.id
  };

  if (input.content !== undefined) data.content = sanitizeArticleHtml(input.content);

  if (input.slug && input.slug !== current.slug) {
    const nextSlug = slugify(input.slug);
    if (!nextSlug) return { error: "Invalid slug." };
    if (await slugTaken(nextSlug, current.id)) return { error: "That slug is already in use." };
    if (current.status === "published") {
      if (!input.confirmSlugChange) {
        return { error: "Changing a published slug requires confirmation so a redirect can be created.", code: "slug_confirm" };
      }
      await db.articleRedirect.create({
        data: {
          fromPath: `/blog/${current.slug}`,
          toPath: `/blog/${nextSlug}`,
          articleId: current.id
        }
      });
    }
    data.slug = nextSlug;
  }

  if (actor.role === "admin" && input.authorId) data.authorId = input.authorId;

  if (input.categoryIds) {
    data.categories = categoryConnect(input.categoryIds);
  }

  const article = await db.article.update({
    where: { id },
    data,
    include: include()
  });
  await writeAudit({ action: "article_updated", actorId: actor.id, targetType: "article", targetId: id });
  if (article.status === "published") revalidateArticle(article.slug);
  return { article };
}

export function revalidateArticle(slug) {
  import("next/cache")
    .then(({ revalidatePath }) => {
      revalidatePath("/blog");
      revalidatePath(`/blog/${slug}`);
      revalidatePath("/sitemap.xml");
    })
    .catch(() => {});
}

export async function applyArticleAction(id, action, input, actor) {
  const db = getPrisma();
  const current = await getArticle(id);
  if (!current) return { error: "Article not found." };
  if (actor.role !== "admin" && current.authorId !== actor.id) return { error: "Forbidden." };

  const next = { ...current, ...input };
  if (input?.content !== undefined) next.content = sanitizeArticleHtml(input.content);

  if (action === "save-draft") {
    if (!canTransition(current.status, "draft") && current.status !== "draft" && current.status !== "scheduled") {
      return { error: "Cannot save this article as a draft." };
    }
    const status = current.status === "scheduled" ? "scheduled" : "draft";
    const article = await db.article.update({
      where: { id },
      data: {
        ...(input ? serializeUpdate(input, actor) : {}),
        status,
        deletedAt: null,
        updatedBy: actor.id
      },
      include: include()
    });
    return { article };
  }

  if (action === "schedule") {
    const problem = assertPublishable(next);
    if (problem) return { error: problem };
    if (!input?.publishAt) return { error: "Choose a publication date and time." };
    const publishAt = new Date(input.publishAt);
    if (Number.isNaN(publishAt.getTime())) return { error: "Invalid schedule time." };
    if (publishAt.getTime() <= Date.now()) return { error: "Schedule time must be in the future." };
    const article = await db.article.update({
      where: { id },
      data: {
        ...serializeUpdate(input, actor),
        status: "scheduled",
        publishAt,
        deletedAt: null,
        updatedBy: actor.id
      },
      include: include()
    });
    await writeAudit({ action: current.status === "scheduled" ? "schedule_changed" : "article_scheduled", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "cancel-schedule") {
    const article = await db.article.update({
      where: { id },
      data: { status: "draft", publishAt: null, updatedBy: actor.id },
      include: include()
    });
    await writeAudit({ action: "schedule_cancelled", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "publish") {
    const problem = assertPublishable(next);
    if (problem) return { error: problem };
    const article = await db.article.update({
      where: { id },
      data: {
        ...serializeUpdate(input, actor),
        status: "published",
        publishedAt: current.publishedAt || new Date(),
        publishAt: null,
        deletedAt: null,
        updatedBy: actor.id
      },
      include: include()
    });
    revalidateArticle(article.slug);
    await writeAudit({ action: "published", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "unpublish") {
    const article = await db.article.update({
      where: { id },
      data: { status: "draft", updatedBy: actor.id },
      include: include()
    });
    revalidateArticle(current.slug);
    await writeAudit({ action: "unpublished", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "trash") {
    const article = await db.article.update({
      where: { id },
      data: { status: "trash", deletedAt: new Date(), updatedBy: actor.id },
      include: include()
    });
    revalidateArticle(current.slug);
    await writeAudit({ action: "trashed", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "restore") {
    const article = await db.article.update({
      where: { id },
      data: { status: "draft", deletedAt: null, updatedBy: actor.id },
      include: include()
    });
    await writeAudit({ action: "restored", actorId: actor.id, targetType: "article", targetId: id });
    return { article };
  }

  if (action === "delete") {
    if (current.status !== "trash") return { error: "Move the article to trash first." };
    if (!input?.confirm) return { error: "Permanent delete requires confirmation." };
    await db.article.delete({ where: { id } });
    await writeAudit({ action: "permanently_deleted", actorId: actor.id, targetType: "article", targetId: id });
    return { deleted: true };
  }

  return { error: "Unknown action." };
}

function serializeUpdate(input, actor) {
  if (!input) return {};
  const data = { updatedBy: actor.id };
  if (input.title !== undefined) data.title = sanitizePlain(input.title, 180) || "Untitled";
  if (input.content !== undefined) data.content = sanitizeArticleHtml(input.content);
  if (input.excerpt !== undefined) data.excerpt = sanitizePlain(input.excerpt, 400);
  if (input.featuredImage !== undefined) data.featuredImage = sanitizePlain(input.featuredImage, 500);
  if (input.featuredImageAlt !== undefined) data.featuredImageAlt = sanitizePlain(input.featuredImageAlt, 180);
  if (input.seoTitle !== undefined) data.seoTitle = sanitizePlain(input.seoTitle, 80);
  if (input.metaDescription !== undefined) data.metaDescription = sanitizePlain(input.metaDescription, 200);
  if (input.canonicalUrl !== undefined) data.canonicalUrl = sanitizePlain(input.canonicalUrl, 300);
  if (input.tags !== undefined) data.tags = sanitizePlain(input.tags, 200);
  if (input.notes !== undefined) data.notes = sanitizePlain(input.notes, 500);
  if (input.intendedPublishOn !== undefined) data.intendedPublishOn = input.intendedPublishOn || null;
  if (input.categoryIds) data.categories = categoryConnect(input.categoryIds);
  return data;
}

export async function publishDueArticles() {
  const db = getPrisma();
  if (!db) return { published: 0, skipped: 0 };
  const now = new Date();
  const due = await db.article.findMany({
    where: { status: "scheduled", publishAt: { lte: now } }
  });
  let published = 0;
  let skipped = 0;
  for (const article of due) {
    if (!isDueForAutoPublish(article, now)) {
      skipped += 1;
      continue;
    }
    if (assertPublishable(article)) {
      skipped += 1;
      continue;
    }
    const result = await db.article.updateMany({
      where: { id: article.id, status: "scheduled" },
      data: {
        status: "published",
        publishedAt: article.publishedAt || now,
        publishAt: null
      }
    });
    if (result.count === 1) {
      published += 1;
      revalidateArticle(article.slug);
      await writeAudit({ action: "published", targetType: "article", targetId: article.id, meta: { via: "scheduled_job" } });
    }
  }
  return { published, skipped, examined: due.length };
}
