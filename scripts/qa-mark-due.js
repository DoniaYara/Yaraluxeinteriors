import { loadEnvFile } from "./load-env.js";
import { getPrisma } from "../lib/cms/db.js";

loadEnvFile();
const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/qa-mark-due.js <slug>");
  process.exit(1);
}
const db = getPrisma();
const article = await db.article.findUnique({ where: { slug } });
if (!article) {
  console.error("Article not found");
  process.exit(1);
}
await db.article.update({
  where: { id: article.id },
  data: { status: "scheduled", publishAt: new Date("2020-01-01T00:00:00.000Z") }
});
console.log("marked due", slug);
