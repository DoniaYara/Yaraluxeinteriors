import Link from "next/link";
import PageHero from "@/components/PageHero";
import OptImage from "@/components/OptImage";
import PortfolioProjectGallery from "@/components/PortfolioProjectGallery";
import { relatedPortfolioCards, getProjectPhotos } from "@/lib/portfolio-projects";
import { U } from "@/lib/data";
import { SAME_AS } from "@/lib/schema/constants";

const SOCIAL = {
  instagram: SAME_AS[0],
  facebook: SAME_AS[1],
  linkedin: SAME_AS[2]
};

function MetaItem({ label, value }) {
  return (
    <div className="pf-single-meta-item">
      <h6>{label}</h6>
      <p>{value}</p>
    </div>
  );
}

export default function PortfolioProjectView({ project }) {
  const related = relatedPortfolioCards(3);
  const shareUrl = `https://yaraluxeinteriors.com.au/portfolio/${project.slug}`;
  const shareText = encodeURIComponent(project.title);

  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "portfolio" },
    { label: project.cats[0] || "Interior" },
    { label: project.title }
  ];

  const photos = getProjectPhotos(project);
  const highlights = [
    project.meta?.duration && { value: project.meta.duration, label: "duration" },
    project.meta?.style && { value: project.meta.style, label: "style" },
    project.meta?.date && { value: project.meta.date, label: "date" }
  ].filter(Boolean);

  return (
    <div className="pf-page pf-single">
      <PageHero title={project.title} image={project.banner} crumbs={crumbs} />

      <section className="pf-single-band pf-single-band-grey">
        <div className="container">
          <PortfolioProjectGallery title={project.title} photos={photos} />
        </div>
      </section>

      <section className="pf-single-band pf-single-band-light">
        <div className="container">
          <div className="pf-single-intro">
            {project.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>

          {project.quote ? (
            <blockquote className="pf-single-quote">
              <p>
                {project.quoteLead ? <strong>{project.quoteLead} </strong> : null}
                {project.quote}
              </p>
            </blockquote>
          ) : null}
        </div>
      </section>

      <section className="pf-single-band pf-single-band-grey">
        <div className="container">
          <div className="pf-single-meta">
            <MetaItem label="designer:" value={project.meta.designer} />
            <MetaItem label="project type:" value={project.meta.projectType} />
            <MetaItem label="client:" value={project.meta.client} />
          </div>
        </div>
      </section>

      <section className="pf-single-band pf-single-band-light">
        <div className="container">
          <div className="pf-single-section">
            <h4 className="pf-single-heading">Design in Details</h4>
            {project.designDetails.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {highlights.length ? (
        <section className="pf-single-band pf-single-band-grey">
          <div className="container">
            <div className="pf-single-meta">
              {highlights.map((item) => (
                <MetaItem key={item.label} label={`${item.label}:`} value={item.value} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pf-single-band pf-single-band-light">
        <div className="container">
          <div className="pf-single-section">
            <h4 className="pf-single-heading">Incredible Result</h4>
            {project.result.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>

          <div className="pf-single-share">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
            >
              X
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>

          <div className="pf-single-nav">
            <Link href="/portfolio" className="pf-single-nav-link">
              <div className="pf-single-nav-thumb">
                <OptImage src={`${U}/brand/portfolio-page-banner.webp`} alt="" sizes="120px" />
              </div>
              <div className="pf-single-nav-info">
                <span>Back to</span>
                <h6>Portfolio</h6>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="pf-single-band pf-single-band-grey pf-single-related">
        <div className="container">
          <h2 className="pf-single-related-title">Related Projects</h2>
          <div className="pf-single-related-grid">
            {related.map((item) => (
              <article key={item.title} className="pf-single-related-card">
                <Link href="/portfolio">
                  <div className="pf-single-related-img">
                    <OptImage
                      src={`${U}/${item.thumb || item.img}`}
                      alt={item.title}
                      sizes="(max-width: 768px) 100vw, 33vw"
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
