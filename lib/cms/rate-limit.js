import { getPrisma } from "./db.js";
import { LOGIN_MAX_ATTEMPTS, LOGIN_WINDOW_MS } from "./constants.js";

export async function noteLoginAttempt(email, ip = "") {
  const db = getPrisma();
  if (!db) return;
  await db.loginAttempt.create({
    data: { email: String(email || "").toLowerCase(), ip: String(ip || "").slice(0, 80) }
  });
}

export async function isLoginRateLimited(email) {
  const db = getPrisma();
  if (!db) return false;
  const since = new Date(Date.now() - LOGIN_WINDOW_MS);
  const count = await db.loginAttempt.count({
    where: { email: String(email || "").toLowerCase(), createdAt: { gte: since } }
  });
  return count >= LOGIN_MAX_ATTEMPTS;
}

export async function resetLoginAttempts(email) {
  const db = getPrisma();
  if (!db) return 0;
  if (process.env.NODE_ENV === "production" && process.env.ALLOW_RATE_LIMIT_RESET !== "true") {
    throw new Error("Refusing to reset login rate limits in production.");
  }
  const result = await db.loginAttempt.deleteMany(
    email ? { where: { email: String(email).toLowerCase() } } : {}
  );
  return result.count;
}
