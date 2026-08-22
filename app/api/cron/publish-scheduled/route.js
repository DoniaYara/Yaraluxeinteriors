import { NextResponse } from "next/server";
import { publishDueArticles } from "@/lib/cms/articles";

export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization") || "";
  const query = new URL(request.url).searchParams.get("secret") || "";
  if (!secret || (auth !== `Bearer ${secret}` && query !== secret)) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }
  const result = await publishDueArticles();
  return NextResponse.json({ ok: true, ...result });
}

export const POST = GET;
