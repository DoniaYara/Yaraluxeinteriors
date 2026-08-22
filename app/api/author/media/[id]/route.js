import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { deleteMedia, updateMediaAlt } from "@/lib/cms/media";

export async function PATCH(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const media = await updateMediaAlt(id, body.alt || "", gate.author);
  return NextResponse.json({ media });
}

export async function DELETE(request, { params }) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const { id } = await params;
  const confirm = new URL(request.url).searchParams.get("confirm") === "1";
  const result = await deleteMedia(id, { confirm }, gate.author);
  if (result.error) return jsonError(result.error, result.code === "in_use" ? 409 : 400);
  return NextResponse.json({ deleted: true });
}
