import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const file = resolve(process.cwd(), ".env");
if (existsSync(file)) {
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

const { bootstrapCms } = await import("./cms-bootstrap.js");
await bootstrapCms();
const { importLegacyArticles } = await import("./import-legacy-articles.js");
await importLegacyArticles();
