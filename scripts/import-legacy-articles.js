import RAW_POSTS from "../lib/blog-posts.json" with { type: "json" };
import { loadEnvFile } from "./load-env.js";
import { getPrisma } from "../lib/cms/db.js";
import { slugify } from "../lib/cms/constants.js";
import { BLOG_IMAGE_ALTS } from "../lib/image-alts.js";

loadEnvFile();

const MONTHS = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
  July: "07", August: "08", September: "09", October: "10", November: "11", December: "12"
};

function parseDisplayDate(value) {
  const match = String(value || "").match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/);
  if (!match) return undefined;
  const month = MONTHS[match[1]];
  if (!month) return undefined;
  return `${match[3]}-${month}-${String(match[2]).padStart(2, "0")}`;
}

function parseDate(value) {
  const iso = parseDisplayDate(value);
  return iso ? new Date(`${iso}T00:00:00.000Z`) : new Date();
}

export async function importLegacyArticles() {
  const db = getPrisma();
  if (!db) throw new Error("DATABASE_URL is required");
  const author = await db.author.findFirst({ where: { role: "admin" } }) || await db.author.findFirst();
  if (!author) throw new Error("Create an admin author before importing articles.");

  const cats = new Map();
  for (const post of RAW_POSTS) {
    for (const name of post.cats || []) {
      if (cats.has(name)) continue;
      const slug = slugify(name);
      const row = await db.category.upsert({
        where: { slug },
        update: { name },
        create: { name, slug }
      });
      cats.set(name, row);
    }
  }

  let created = 0;
  let skipped = 0;
  for (const post of RAW_POSTS) {
    const existing = await db.article.findFirst({
      where: { OR: [{ legacyId: String(post.id) }, { slug: post.slug }] }
    });
    if (existing) {
      skipped += 1;
      continue;
    }
    await db.article.create({
      data: {
        legacyId: String(post.id),
        title: post.title,
        slug: post.slug,
        content: post.content || "",
        excerpt: post.excerpt || "",
        featuredImage: post.img ? `/uploads/${post.img}` : "",
        featuredImageAlt: post.img ? BLOG_IMAGE_ALTS[post.img] || "" : "",
        seoTitle: post.seoTitle || post.title,
        metaDescription: post.seoDescription || post.excerpt || "",
        tags: (post.tags || []).join(", "),
        authorId: author.id,
        status: "published",
        publishedAt: parseDate(post.date),
        createdBy: author.id,
        updatedBy: author.id,
        categories: {
          create: (post.cats || []).map((name) => ({ categoryId: cats.get(name).id }))
        }
      }
    });
    created += 1;
  }
  console.log(`Legacy import: created ${created}, skipped ${skipped}.`);
  return { created, skipped };
}

const isDirect = process.argv[1] && process.argv[1].includes("import-legacy-articles");
if (isDirect) {
  importLegacyArticles().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
