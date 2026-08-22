import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { createArticle, listArticles, serializeArticle } from "@/lib/cms/articles";

export async function GET(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "all";
  const q = searchParams.get("q") || "";
  const authorId = gate.author.role === "admin" ? searchParams.get("authorId") || "" : gate.author.id;
  const rows = await listArticles({ status, q, authorId: authorId || undefined });
  return NextResponse.json({ articles: rows.map(serializeArticle) });
}

export async function POST(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const body = await request.json().catch(() => ({}));
  const article = await createArticle(body, gate.author);
  return NextResponse.json({ article: serializeArticle(article) });
}
