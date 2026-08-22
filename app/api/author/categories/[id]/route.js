import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { deleteCategory, updateCategory } from "@/lib/cms/categories";

export async function PATCH(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const result = await updateCategory(id, body, gate.author);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const reassignTo = new URL(request.url).searchParams.get("reassignTo") || "";
  const result = await deleteCategory(id, { reassignTo: reassignTo || undefined }, gate.author);
  if (result.error) return jsonError(result.error, result.code === "has_articles" ? 409 : 400);
  return NextResponse.json(result);
}
