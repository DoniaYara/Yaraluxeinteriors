import { NextResponse } from "next/server";
import { getSessionAuthor } from "@/lib/cms/auth";

export async function GET() {
  const author = await getSessionAuthor();
  if (!author) return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  return NextResponse.json({ author });
}
