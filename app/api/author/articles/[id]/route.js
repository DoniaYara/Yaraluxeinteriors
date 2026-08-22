import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { getArticle, serializeArticle, updateArticle } from "@/lib/cms/articles";

export async function GET(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) return jsonError("Article not found.", 404);
  if (gate.author.role !== "admin" && article.authorId !== gate.author.id) {
    return jsonError("Forbidden.", 403);
  }
  return NextResponse.json({ article: serializeArticle(article) });
}

export async function PATCH(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const result = await updateArticle(id, body, gate.author);
  if (result.error) return jsonError(result.error, result.code === "slug_confirm" ? 409 : 400);
  return NextResponse.json({ article: serializeArticle(result.article) });
}
