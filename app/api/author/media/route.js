import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { deleteMedia, listMedia, storeImageFile, updateMediaAlt } from "@/lib/cms/media";

export async function GET(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const q = new URL(request.url).searchParams.get("q") || "";
  const media = await listMedia({ q });
  return NextResponse.json({ media });
}

export async function POST(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const form = await request.formData();
  const file = form.get("file");
  const alt = String(form.get("alt") || "");
  const result = await storeImageFile(file, gate.author);
  if (result.error) return jsonError(result.error);
  if (alt) await updateMediaAlt(result.media.id, alt, gate.author);
  return NextResponse.json({ media: { ...result.media, alt: alt || result.media.alt } });
}
