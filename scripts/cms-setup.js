import { existsSync, readFileSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";
import path from "path";
import { isPostgresUrl } from "../lib/cms/db-url.js";

function loadEnv() {
  const file = path.join(process.cwd(), ".env");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

function ensureEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (existsSync(envPath)) return;
  const example = path.join(process.cwd(), ".env.example");
  if (!existsSync(example)) throw new Error("Missing .env.example");
  writeFileSync(envPath, readFileSync(example, "utf8"));
  console.log("Created .env from .env.example — set DATABASE_URL and AUTHOR_BOOTSTRAP_PASSWORD.");
}

loadEnv();
ensureEnv();
loadEnv();

if (!isPostgresUrl(process.env.DATABASE_URL)) {
  console.error("Set DATABASE_URL to a PostgreSQL URL before running cms:setup.");
  console.error("Local: docker compose up -d   then postgresql://yara:yara@localhost:5432/yara_cms");
  console.error("Production: Neon / Vercel Postgres connection string.");
  process.exit(1);
}

const prisma = process.platform === "win32" ? "npx.cmd" : "npx";
const generate = spawnSync(prisma, ["prisma", "generate"], { stdio: "inherit", shell: true, env: process.env });
if (generate.status) process.exit(generate.status);
const migrate = spawnSync(prisma, ["prisma", "migrate", "deploy"], { stdio: "inherit", shell: true, env: process.env });
if (migrate.status) process.exit(migrate.status);

const { bootstrapCms } = await import("./cms-bootstrap.js");
await bootstrapCms();
const { importLegacyArticles } = await import("./import-legacy-articles.js");
await importLegacyArticles();
console.log("CMS setup complete.");
