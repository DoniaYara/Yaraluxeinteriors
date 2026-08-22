import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/cms/db";
import { verifyPassword, createSession, setSessionCookie, recordLogin } from "@/lib/cms/auth";
import { isLoginRateLimited, noteLoginAttempt } from "@/lib/cms/rate-limit";
import { assertSameOrigin } from "@/lib/cms/csrf";

export async function POST(request) {
  const csrf = assertSameOrigin(request);
  if (csrf) return csrf;
  const db = getPrisma();
  if (!db) return NextResponse.json({ error: "CMS database is not configured." }, { status: 503 });

  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const ip = request.headers.get("x-forwarded-for") || "";

  if (await isLoginRateLimited(email)) {
    return NextResponse.json({ error: "Too many login attempts. Try again in 15 minutes." }, { status: 429 });
  }

  const author = await db.author.findUnique({ where: { email } });
  const ok = author && author.status === "active" && await verifyPassword(password, author.passwordHash);
  if (!ok) {
    await noteLoginAttempt(email, ip);
    return NextResponse.json({ error: "Those details were not recognised." }, { status: 401 });
  }

  const session = await createSession(author.id);
  await setSessionCookie(session.cookie, session.expiresAt);
  await recordLogin(author.id);
  return NextResponse.json({ ok: true, name: author.name, role: author.role });
}
