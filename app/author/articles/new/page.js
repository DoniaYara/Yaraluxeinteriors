import ArticleEditor from "@/components/cms/ArticleEditor";
import { getSessionAuthor } from "@/lib/cms/auth";
import { listAuthors } from "@/lib/cms/authors";
import { listCategories } from "@/lib/cms/categories";

export default async function NewArticlePage() {
  const currentAuthor = await getSessionAuthor();
  const [authors, categories] = await Promise.all([
    currentAuthor.role === "admin" ? listAuthors() : Promise.resolve([currentAuthor]),
    listCategories()
  ]);
  return (
    <>
      <h1>New article</h1>
      <p className="cms-lead">Create a draft or a planned calendar item. Planned items never auto-publish.</p>
      <ArticleEditor currentAuthor={currentAuthor} authors={authors} categories={categories} />
    </>
  );
}
