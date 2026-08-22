import { notFound } from "next/navigation";
import ArticleEditor from "@/components/cms/ArticleEditor";
import { getArticle, serializeArticle } from "@/lib/cms/articles";
import { getSessionAuthor } from "@/lib/cms/auth";
import { listAuthors } from "@/lib/cms/authors";
import { listCategories } from "@/lib/cms/categories";

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  const currentAuthor = await getSessionAuthor();
  const article = await getArticle(id);
  if (!article) notFound();
  if (currentAuthor.role !== "admin" && article.authorId !== currentAuthor.id) notFound();
  const [authors, categories] = await Promise.all([
    currentAuthor.role === "admin" ? listAuthors() : Promise.resolve([currentAuthor]),
    listCategories()
  ]);
  return (
    <>
      <h1>{article.status === "planned" ? "Start writing" : "Edit article"}</h1>
      <ArticleEditor article={serializeArticle(article)} currentAuthor={currentAuthor} authors={authors} categories={categories} />
    </>
  );
}
