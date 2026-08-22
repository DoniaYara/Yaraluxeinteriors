import { NextResponse } from "next/server";
import { getSessionAuthor } from "./auth.js";
import { assertSameOrigin } from "./csrf.js";

export async function requireAuthor(request, { roles } = {}) {
  const csrf = assertSameOrigin(request);
  if (csrf) return { error: csrf };

  const author = await getSessionAuthor();
  if (!author) {
    return { error: NextResponse.json({ error: "Unauthorised." }, { status: 401 }) };
  }
  if (roles && !roles.includes(author.role)) {
    return { error: NextResponse.json({ error: "Forbidden." }, { status: 403 }) };
  }
  return { author };
}

export function jsonError(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
