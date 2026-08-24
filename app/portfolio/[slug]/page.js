import { notFound } from "next/navigation";
import PortfolioProjectView from "@/components/PortfolioProjectView";
import { getAllPortfolioSlugs, getPortfolioProject } from "@/lib/portfolio-projects";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} – Yara Luxe Interiors`,
    description: project.intro[0],
    robots: { index: false, follow: false },
    alternates: { canonical: absoluteUrl(`/portfolio/${slug}`) }
  };
}

export default async function PortfolioProjectPage({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  return <PortfolioProjectView project={project} />;
}
