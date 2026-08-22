import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { SESSION_COOKIE, SESSION_DAYS } from "./constants.js";
import { getPrisma } from "./db.js";
import { writeAudit } from "./audit.js";
import { hashPassword, verifyPassword } from "./password.js";

export { hashPassword, verifyPassword };

export function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export function parseSessionCookie(value) {
  if (!value || !value.includes(".")) return null;
  const i = value.indexOf(".");
  return { id: value.slice(0, i), token: value.slice(i + 1) };
}

export async function getSessionAuthor() {
  const db = getPrisma();
  if (!db) return null;
  const jar = await cookies();
  const raw = jar.get(SESSION_COOKIE)?.value;
  const parsed = parseSessionCookie(raw);
  if (!parsed) return null;

  const session = await db.session.findUnique({
    where: { id: parsed.id },
    include: { author: true }
  });
  if (!session || session.revokedAt) return null;
  if (session.expiresAt.getTime() < Date.now()) return null;
  if (session.tokenHash !== hashToken(parsed.token)) return null;
  if (!session.author || session.author.status !== "active") return null;
  const { passwordHash, ...author } = session.author;
  return { ...author, sessionId: session.id };
}

export async function createSession(authorId) {
  const db = getPrisma();
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  const session = await db.session.create({
    data: {
      authorId,
      tokenHash: hashToken(token),
      expiresAt
    }
  });
  return { cookie: `${session.id}.${token}`, expiresAt };
}

export async function revokeSession(sessionId) {
  const db = getPrisma();
  if (!db || !sessionId) return;
  await db.session.updateMany({
    where: { id: sessionId, revokedAt: null },
    data: { revokedAt: new Date() }
  });
}

export async function revokeAuthorSessions(authorId) {
  const db = getPrisma();
  await db.session.updateMany({
    where: { authorId, revokedAt: null },
    data: { revokedAt: new Date() }
  });
}

export async function setSessionCookie(cookie, expiresAt) {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, cookie, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
}

export async function recordLogin(authorId) {
  const db = getPrisma();
  await db.author.update({
    where: { id: authorId },
    data: { lastLoginAt: new Date() }
  });
  await writeAudit({ action: "author_login", actorId: authorId, targetType: "author", targetId: authorId });
}
