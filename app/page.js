import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PortfolioMetro, { HOME_FILTERS } from "@/components/PortfolioMetro";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import HomePartners from "@/components/HomePartners";
import HomeDreams from "@/components/HomeDreams";
import BlogSlider from "@/components/BlogSlider";
import { shortExcerpt } from "@/lib/blog";
import { getPublishedPosts } from "@/lib/cms/public";
import { homepageGraph } from "@/lib/schema";
import {
  HomeAreas,
  HomeFaq,
  HomeHero,
  HomeProcess,
  HomeServices,
  HomeWhyChoose
} from "@/components/HomeSeo";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";
import {
  HOME_BLOG_BG,
  HOME_CTA,
  HOME_FEATURE_BG,
  HOME_PORTFOLIO_BG,
  U
} from "@/lib/data";

export const metadata = withPageSeo({
  title: "Luxury Interior Designer Melbourne | Yara Luxe",
  description: "Luxury interior design in Melbourne backed by 19+ years of experience. Bespoke interiors for renovations, new builds and full homes. Start your project."
}, "/");

const FEATURES = [
  { n: "01.", title: "TIMELESS ELEGANCE", img: "2025/07/P1-1.jpg" },
  { n: "02.", title: "Unique Concept", img: "2025/07/P1-2.jpg" },
  { n: "03.", title: "Attention to Detail", img: "2025/07/P1-33.jpg" }
];

export default async function HomePage() {
  const posts = await getPublishedPosts();
  const latest = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    img: p.img,
    date: p.date,
    cats: p.cats,
    excerpt: shortExcerpt(p)
  }));

  return (
    <div className="home-page">
      <JsonLd data={homepageGraph()} />
      <HomeHero />

      <section className="home-features">
        <div className="container-wide features-grid">
          {FEATURES.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="features-image">
                <span className="overlay"><span className="plus">+</span></span>
                <OptImage src={`${U}/${f.img}`} alt={fileAlt(f.img)} sizes={SIZES.feature} />
              </div>
              <div className="features-content" style={{ backgroundImage: `url('${HOME_FEATURE_BG}')` }}>
                <p className="feature-title"><span>{f.n}</span> {f.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HomeServices
        heading="Our Interior Design Services in Melbourne"
        intro="From full-home planning to kitchens, bathrooms and commercial interiors, each service is shaped around how you live or work in the space."
      />

      <section className="home-portfolio" style={{ backgroundImage: `url('${HOME_PORTFOLIO_BG}')` }}>
        <div className="container">
          <div className="ot-heading is-dots">
            <span className="ot-kicker">[ our portfolio ]</span>
            <h2 className="ot-title">Selected Interior Design Projects</h2>
          </div>
        </div>
        <PortfolioMetro
          filters={HOME_FILTERS}
          gridClass="projects-grid pf_4_cols style-1 img-scale w-auto"
          limit={12}
        />
        <div className="center mt-40">
          <Link className="octf-btn octf-btn-light" href="/portfolio">View All Projects</Link>
        </div>
      </section>

      <HomeWhyChoose />

      <section className="home-about">
        <div className="container split">
          <div className="home-about-photo">
            <OptImage className="main" src={`${U}/2026/03/P2-1.jpg`} alt={fileAlt("2026/03/P2-1.jpg")} sizes={SIZES.aboutPhoto} />
            <OptImage className="signature" src={`${U}/2025/07/ONLY-Donia-Yara-W-no-dot-1-scaled.png`} alt="Donia Yara" sizes="280px" />
          </div>
          <div>
            <span className="ot-kicker">[ founder &amp; interior designer ]</span>
            <h2 className="ot-title">Meet Donia Yara</h2>
            <p>
              Donia Yara is the founder and lead designer behind Yara Luxe Interiors. With a background in architecture and interior design, she brings 19+ years of industry experience to residential and commercial projects.
            </p>
            <p>
              Her approach combines thoughtful planning, refined aesthetics and practical design to create spaces that feel personal, functional and enduring.
            </p>
            <div className="mt-40">
              <Link className="octf-btn octf-btn-light" href="/about">Learn More About Donia</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" style={{ backgroundImage: `url('${HOME_CTA}')` }}>
        <div className="cta-inner">
          <h2>Your Dream Home</h2>
          <p>You deserve a space that not only looks beautiful, but truly functional,</p>
          <p>A Design That Loves You Back!</p>
          <div className="mt-40 ot-button">
            <Link className="octf-btn octf-btn-light" href="/contact">Book a Free Consultation</Link>
          </div>
        </div>
      </section>

      <HomeProcess />
      <HomeAreas />
      <HomeGoogleReviews />
      <HomeFaq />

      <HomePartners />

      <section className="home-blog" style={{ backgroundImage: `url('${HOME_BLOG_BG}')` }}>
        <div className="container">
          <div className="home-blog-head">
            <div className="ot-heading is-dots">
              <span className="ot-kicker">[ our blog ]</span>
              <h2 className="ot-title">Interior Design Insights</h2>
            </div>
            <Link className="octf-btn octf-btn-light" href="/blog">View all</Link>
          </div>
          <BlogSlider items={latest} />
        </div>
      </section>

      <HomeDreams />
    </div>
  );
}
