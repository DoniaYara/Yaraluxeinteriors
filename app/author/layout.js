import { redirect } from "next/navigation";
import { headers } from "next/headers";
import AuthorShell from "@/components/cms/AuthorShell";
import { getSessionAuthor } from "@/lib/cms/auth";
import "./author.css";

export const metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AuthorLayout({ children }) {
  const headerStore = await headers();
  const path = headerStore.get("x-pathname") || "";
  const isLogin = path === "/author/login" || path.endsWith("/author/login");
  const author = await getSessionAuthor();

  if (!isLogin && !author) redirect("/author/login");

  return <AuthorShell author={author}>{children}</AuthorShell>;
}
