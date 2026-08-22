import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { applyArticleAction, serializeArticle } from "@/lib/cms/articles";

export async function POST(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const result = await applyArticleAction(id, body.action, body, gate.author);
  if (result.error) return jsonError(result.error);
  if (result.deleted) return NextResponse.json({ deleted: true });
  return NextResponse.json({ article: serializeArticle(result.article) });
}
