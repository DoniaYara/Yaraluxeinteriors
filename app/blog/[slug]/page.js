import { notFound, redirect } from "next/navigation";
import BlogPostView from "@/components/BlogPostView";
import { getArticleRedirect, getPublicPost, getPublishedPosts, getRelatedPublicPosts, getSidebarData, postImageSrc } from "@/lib/cms/public";
import { blogImageAlt } from "@/lib/image-alts";
import { withPageSeo } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublicPost(slug);
  if (!post) return { title: "Blog – Yara Luxe Interiors", robots: { index: false, follow: false } };
  const canonicalPath = post.canonicalUrl || `/blog/${post.slug}`;
  return withPageSeo(
    {
      title: { absolute: post.seoTitle || post.title },
      description: post.seoDescription || post.excerpt
    },
    canonicalPath.startsWith("http") ? `/blog/${post.slug}` : canonicalPath,
    {
      type: "article",
      image: postImageSrc(post),
      imageAlt: blogImageAlt(post)
    }
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const bounced = await getArticleRedirect(slug);
  if (bounced) redirect(bounced.toPath);
  const post = await getPublicPost(slug);
  if (!post) notFound();

  const posts = await getPublishedPosts();
  const i = posts.findIndex((p) => p.slug === post.slug);
  const newer = i > 0 ? posts[i - 1] : null;
  const older = i < posts.length - 1 ? posts[i + 1] : null;
  const related = await getRelatedPublicPosts(post);
  const sidebar = await getSidebarData();

  return <BlogPostView post={post} related={related} older={older} newer={newer} sidebar={sidebar} />;
}
