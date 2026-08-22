import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { createCategory, listCategories } from "@/lib/cms/categories";

export async function GET(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const categories = await listCategories();
  return NextResponse.json({ categories });
}

export async function POST(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const body = await request.json().catch(() => ({}));
  const result = await createCategory(body, gate.author);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}
