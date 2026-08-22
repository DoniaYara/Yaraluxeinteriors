import { NextResponse } from "next/server";
import { getSessionAuthor, revokeSession, clearSessionCookie } from "@/lib/cms/auth";
import { assertSameOrigin } from "@/lib/cms/csrf";

export async function POST(request) {
  const csrf = assertSameOrigin(request);
  if (csrf) return csrf;
  const author = await getSessionAuthor();
  if (author?.sessionId) await revokeSession(author.sessionId);
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
