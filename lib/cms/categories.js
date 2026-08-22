import { getPrisma } from "./db.js";
import { slugify } from "./constants.js";
import { sanitizePlain } from "./sanitize.js";
import { writeAudit } from "./audit.js";

export async function listCategories() {
  const db = getPrisma();
  const rows = await db.category.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { articles: true } } }
  });
  return rows.map((row) => ({ ...row, articleCount: row._count.articles }));
}

export async function getCategory(id) {
  const db = getPrisma();
  return db.category.findUnique({
    where: { id },
    include: { _count: { select: { articles: true } } }
  });
}

export async function createCategory(input, actor) {
  const db = getPrisma();
  const name = sanitizePlain(input.name, 80);
  if (!name) return { error: "Category name is required." };
  let slug = slugify(input.slug || name);
  if (!slug) return { error: "Category slug is required." };
  const exists = await db.category.findUnique({ where: { slug } });
  if (exists) return { error: "That category slug is already in use." };
  const category = await db.category.create({
    data: {
      name,
      slug,
      description: sanitizePlain(input.description, 400),
      seoTitle: sanitizePlain(input.seoTitle, 80),
      metaDescription: sanitizePlain(input.metaDescription, 200)
    }
  });
  await writeAudit({ action: "category_created", actorId: actor.id, targetType: "category", targetId: category.id });
  return { category };
}

export async function updateCategory(id, input, actor) {
  const db = getPrisma();
  const name = sanitizePlain(input.name, 80);
  let slug = slugify(input.slug || name);
  const clash = await db.category.findUnique({ where: { slug } });
  if (clash && clash.id !== id) return { error: "That category slug is already in use." };
  const category = await db.category.update({
    where: { id },
    data: {
      name,
      slug,
      description: sanitizePlain(input.description, 400),
      seoTitle: sanitizePlain(input.seoTitle, 80),
      metaDescription: sanitizePlain(input.metaDescription, 200)
    }
  });
  await writeAudit({ action: "category_updated", actorId: actor.id, targetType: "category", targetId: id });
  return { category };
}

export async function deleteCategory(id, { reassignTo } = {}, actor) {
  const db = getPrisma();
  const category = await db.category.findUnique({
    where: { id },
    include: { _count: { select: { articles: true } } }
  });
  if (!category) return { error: "Category not found." };
  if (category._count.articles > 0) {
    if (!reassignTo) {
      return { error: "This category still has articles. Reassign them before deleting.", code: "has_articles", count: category._count.articles };
    }
    if (reassignTo === id) return { error: "Choose a different category." };
    const target = await db.category.findUnique({ where: { id: reassignTo } });
    if (!target) return { error: "Replacement category not found." };
    const links = await db.articleCategory.findMany({ where: { categoryId: id } });
    for (const link of links) {
      const already = await db.articleCategory.findUnique({
        where: { articleId_categoryId: { articleId: link.articleId, categoryId: reassignTo } }
      });
      if (!already) {
        await db.articleCategory.create({ data: { articleId: link.articleId, categoryId: reassignTo } });
      }
    }
    await db.articleCategory.deleteMany({ where: { categoryId: id } });
  }
  await db.category.delete({ where: { id } });
  await writeAudit({ action: "category_deleted", actorId: actor.id, targetType: "category", targetId: id });
  return { deleted: true };
}
