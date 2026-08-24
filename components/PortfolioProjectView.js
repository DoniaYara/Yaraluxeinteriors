import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioProjectGallery from "@/components/PortfolioProjectGallery";
import { relatedPortfolioCards, getProjectPhotos } from "@/lib/portfolio-projects";
import { PROJECTS, U } from "@/lib/data";

const PORTFOLIO_NAV_THUMB = `${U}/${PROJECTS[0]?.thumb || PROJECTS[0]?.img || "brand/portfolio-page-banner.webp"}`;

export default function PortfolioProjectView({ project }) {
  const related = relatedPortfolioCards(project.slug, 3);
  const photos = getProjectPhotos(project);
  const hasContent = Boolean(
    project.intro?.length ||
      project.designDetails?.length ||
      project.result?.length ||
      project.meta
  );

  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "portfolio" },
    { label: project.cats?.[0] || "Interior" },
    { label: project.title }
  ];

  return (
    <div className="pf-page pf-single">
      <PageHero title={project.title} image={project.banner} crumbs={crumbs} />

      <section className="pf-single-band pf-single-band-grey">
        <div className="container">
          <PortfolioProjectGallery title={project.title} photos={photos} />
        </div>
      </section>

      {hasContent ? null : (
        <section className="pf-single-band pf-single-band-light">
          <div className="container">
            <div className="pf-single-nav" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
              <Link href="/portfolio" className="pf-single-nav-link">
                <div className="pf-single-nav-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PORTFOLIO_NAV_THUMB} alt="" />
                </div>
                <div className="pf-single-nav-info">
                  <span>Back to</span>
                  <h6>Portfolio</h6>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="pf-single-band pf-single-band-grey pf-single-related">
        <div className="container pf-single-related-wrap">
          <h2 className="pf-single-related-title">Related Projects</h2>
          <div className="pf-single-related-grid">
            {related.map((item) => (
              <article key={item.title} className="pf-single-related-card">
                <Link href={item.href}>
                  <div className="pf-single-related-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img ? `${U}/${item.img}` : item.banner}
                      alt={item.title}
                    />
                  </div>
                  <h5>{item.title}</h5>
                  <p className="portfolio-cates">
                    {(item.cats || []).map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
