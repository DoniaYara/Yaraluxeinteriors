import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import { updateOwnProfile } from "@/lib/cms/authors";

export async function PATCH(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const body = await request.json().catch(() => ({}));
  const result = await updateOwnProfile(gate.author, body);
  if (result.error) return jsonError(result.error);
  return NextResponse.json(result);
}
