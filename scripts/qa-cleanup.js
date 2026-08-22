import { loadEnvFile } from "./load-env.js";
import { getPrisma } from "../lib/cms/db.js";

loadEnvFile();
const db = getPrisma();
if (!db) process.exit(0);
const articles = await db.article.findMany({ where: { slug: { startsWith: "cms-qa-" } } });
for (const article of articles) {
  await db.article.delete({ where: { id: article.id } });
}
const cats = await db.category.findMany({ where: { slug: { startsWith: "cms-qa-" } } });
for (const cat of cats) {
  await db.articleCategory.deleteMany({ where: { categoryId: cat.id } });
  await db.category.delete({ where: { id: cat.id } }).catch(() => {});
}
const media = await db.media.findMany({ where: { filename: { startsWith: "qa" } } });
for (const item of media) {
  await db.media.delete({ where: { id: item.id } }).catch(() => {});
}
console.log(`Cleaned ${articles.length} QA articles, ${cats.length} QA categories.`);
