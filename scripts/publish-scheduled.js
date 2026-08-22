import { loadEnvFile } from "./load-env.js";
import { publishDueArticles } from "../lib/cms/articles.js";
import { getPrisma } from "../lib/cms/db.js";

loadEnvFile();
if (!getPrisma()) {
  console.error("DATABASE_URL must be a PostgreSQL URL.");
  process.exit(1);
}
const result = await publishDueArticles();
console.log(JSON.stringify({ ok: true, ...result }));
