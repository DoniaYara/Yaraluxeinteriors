import { PrismaClient } from "@prisma/client";
import { isPostgresUrl } from "./db-url.js";

export { isPostgresUrl };

const globalForPrisma = globalThis;

function databaseUrlError() {
  const url = process.env.DATABASE_URL || "";
  if (!url) return "DATABASE_URL is required. Use a PostgreSQL URL (Neon or compatible).";
  if (url.startsWith("file:") || /mode=memory/i.test(url) || !isPostgresUrl(url)) {
    return "SQLite DATABASE_URL is not supported. Set DATABASE_URL to a PostgreSQL connection string.";
  }
  return null;
}

export function assertDatabaseUrl() {
  const error = databaseUrlError();
  if (error) throw new Error(error);
}

export function getPrisma() {
  const error = databaseUrlError();
  if (error) {
    console.error("[cms]", error);
    return null;
  }
  if (!globalForPrisma.__yaraPrisma) {
    globalForPrisma.__yaraPrisma = new PrismaClient();
  }
  return globalForPrisma.__yaraPrisma;
}

export async function withDb(fn, fallback = null) {
  const db = getPrisma();
  if (!db) return fallback;
  try {
    return await fn(db);
  } catch (error) {
    console.warn("[cms] database unavailable:", error.message);
    return fallback;
  }
}
