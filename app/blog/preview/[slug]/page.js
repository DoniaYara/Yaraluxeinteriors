import { notFound } from "next/navigation";
import { getSessionAuthor } from "@/lib/cms/auth";
import { getArticleBySlug, serializeArticle } from "@/lib/cms/articles";
import { cmsToPublicPost } from "@/lib/cms/public";
import { isPreviewable } from "@/lib/cms/status";
import BlogPostView from "@/components/BlogPostView";
import { withPageSeo } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return withPageSeo(
    {
      title: `Preview: ${slug}`,
      robots: { index: false, follow: false }
    },
    `/blog/preview/${slug}`
  );
}

export default async function BlogPreviewPage({ params }) {
  const author = await getSessionAuthor();
  if (!author) notFound();
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !isPreviewable(article)) notFound();
  if (author.role !== "admin" && article.authorId !== author.id) notFound();
  const post = cmsToPublicPost(serializeArticle(article));
  return <BlogPostView post={post} preview />;
}
