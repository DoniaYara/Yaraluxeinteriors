import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { createAuthor, listAuthors } from "@/lib/cms/authors";

export async function GET(request) {
  const gate = await requireAuthor(request, { roles: ["admin"] });
  if (gate.error) return gate.error;
  const authors = await listAuthors();
  return NextResponse.json({ authors });
}

export async function POST(request) {
  const gate = await requireAuthor(request, { roles: ["admin"] });
  if (gate.error) return gate.error;
  const body = await request.json().catch(() => ({}));
  const result = await createAuthor(body, gate.author);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}
