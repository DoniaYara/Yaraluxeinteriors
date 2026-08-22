import { BLOG_POSTS, postMonth } from "@/lib/blog";
import { parseDisplayDate } from "@/lib/schema/article";
import { getPrisma } from "./db.js";
import { parseTags } from "./constants.js";
import { sanitizeArticleHtml } from "./sanitize.js";

export function postImageSrc(post) {
  const img = post?.img || post?.featuredImage || "";
  if (!img) return "/uploads/brand/yara-luxe-social-1200x630.jpg";
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) return img;
  return `/uploads/${img}`;
}

function formatDate(value) {
  if (!value) return "";
  if (typeof value === "string" && /^[A-Za-z]+ \d{1,2}, \d{4}$/.test(value)) return value;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function cmsToPublicPost(article) {
  const cats = (article.categories || []).map((row) => row.category?.name || row.name).filter(Boolean);
  const published = article.publishedAt || article.createdAt;
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    img: article.featuredImage || "",
    date: formatDate(published),
    excerpt: article.excerpt || "",
    cats: cats.length ? cats : ["Interior"],
    tags: parseTags(article.tags),
    content: sanitizeArticleHtml(article.content || ""),
    seoTitle: article.seoTitle || article.title,
    seoDescription: article.metaDescription || article.excerpt,
    featuredImageAlt: article.featuredImageAlt || "",
    authorName: article.author?.name || "Donia Yara",
    authorImage: article.author?.imageUrl || "",
    authorBio: article.author?.bio || "",
    canonicalUrl: article.canonicalUrl || "",
    modified: article.updatedAt ? new Date(article.updatedAt).toISOString().slice(0, 10) : undefined,
    source: "cms"
  };
}

export async function getPublishedCmsArticles() {
  const db = getPrisma();
  if (!db) return [];
  try {
    return await db.article.findMany({
      where: { status: "published" },
      include: {
        author: { select: { name: true, imageUrl: true, bio: true } },
        categories: { include: { category: true } }
      },
      orderBy: { publishedAt: "desc" }
    });
  } catch {
    return [];
  }
}

export async function getPublishedPosts() {
  const cms = (await getPublishedCmsArticles()).map(cmsToPublicPost);
  const slugs = new Set(cms.map((p) => p.slug));
  const legacy = BLOG_POSTS.filter((p) => !slugs.has(p.slug)).map((p) => ({ ...p, source: "legacy" }));
  return [...cms, ...legacy].sort((a, b) => {
    const da = parseDisplayDate(a.date) || "";
    const dbDate = parseDisplayDate(b.date) || "";
    return dbDate.localeCompare(da);
  });
}

export async function getPublicPost(slug) {
  const db = getPrisma();
  if (db) {
    try {
      const article = await db.article.findUnique({
        where: { slug },
        include: {
          author: { select: { name: true, imageUrl: true, bio: true } },
          categories: { include: { category: true } }
        }
      });
      if (article?.status === "published") return cmsToPublicPost(article);
      if (article) return null;
    } catch {
      /* fall through to JSON */
    }
  }
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export async function getArticleRedirect(pathOrSlug) {
  const db = getPrisma();
  if (!db) return null;
  const fromPath = pathOrSlug.startsWith("/") ? pathOrSlug : `/blog/${pathOrSlug}`;
  try {
    return await db.articleRedirect.findUnique({ where: { fromPath } });
  } catch {
    return null;
  }
}

export async function filterPublishedPosts({ q = "", cat = "", tag = "", month = "" } = {}) {
  const posts = await getPublishedPosts();
  const query = q.trim().toLowerCase();
  const catQ = cat.trim().toLowerCase();
  const tagQ = tag.trim().toLowerCase();
  const monthQ = month.trim().toLowerCase();
  return posts.filter((p) => {
    if (query) {
      const hay = `${p.title} ${p.excerpt} ${(p.cats || []).join(" ")}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    if (catQ && !(p.cats || []).some((c) => c.toLowerCase() === catQ)) return false;
    if (tagQ && !(p.tags || []).some((t) => t.toLowerCase() === tagQ)) return false;
    if (monthQ && postMonth(p).toLowerCase() !== monthQ) return false;
    return true;
  });
}

export async function getRelatedPublicPosts(post, limit = 3) {
  const posts = await getPublishedPosts();
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score: (p.cats || []).filter((c) => (post.cats || []).includes(c)).length
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

export async function getSidebarData() {
  const posts = await getPublishedPosts();
  const countBy = (list) => {
    const map = new Map();
    list.forEach((item) => map.set(item, (map.get(item) || 0) + 1));
    return [...map.entries()].map(([name, count]) => ({ name, count }));
  };
  return {
    recent: posts.slice(0, 5),
    categories: countBy(posts.flatMap((p) => p.cats || [])).sort((a, b) => a.name.localeCompare(b.name)),
    tags: countBy(posts.flatMap((p) => p.tags || [])).sort((a, b) => b.count - a.count)
  };
}
