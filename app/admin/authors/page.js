import { redirect } from "next/navigation";

export default function AdminAuthorsRedirect() {
  redirect("/author/authors");
}
