import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { deleteAuthor, updateAuthor } from "@/lib/cms/authors";

export async function PATCH(request, { params }) {
  const gate = await requireAuthor(request, { roles: ["admin"] });
  if (gate.error) return gate.error;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const result = await updateAuthor(id, body, gate.author);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  const gate = await requireAuthor(request, { roles: ["admin"] });
  if (gate.error) return gate.error;
  const { id } = await params;
  const result = await deleteAuthor(id, gate.author);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}
