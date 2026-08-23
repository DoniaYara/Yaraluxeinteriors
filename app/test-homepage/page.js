import Link from "next/link";
import PortfolioMetro, { HOME_FILTERS } from "@/components/PortfolioMetro";
import HomeTestimonials from "@/components/test-homepage/HomeTestimonials";
import HomePartners from "@/components/test-homepage/HomePartners";
import HomeDreams from "@/components/test-homepage/HomeDreams";
import SeoPageFinal from "@/components/test-homepage/SeoPageFinal";
import BlogSlider from "@/components/BlogSlider";
import { BLOG_POSTS, shortExcerpt } from "@/lib/blog";
import {
  HOME_BLOG_BG,
  HOME_CTA,
  HOME_FEATURE_BG,
  HOME_PORTFOLIO_BG,
  U
} from "@/lib/data";

export const metadata = {
  title: "Best Interior Designer in Melbourne | Yara Luxe Interiors",
  description: "Luxury interior designers in Melbourne — residential & commercial design, kitchen, bathroom, full home & new build services. Serving Toorak, Brighton, Hawthorn, South Yarra & across Melbourne.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/test-homepage" }
};

const FEATURES = [
  { n: "01.", title: "TIMELESS ELEGANCE", img: "2025/07/P1-1.jpg" },
  { n: "02.", title: "Unique Concept", img: "2025/07/P1-2.jpg" },
  { n: "03.", title: "Attention to Detail", img: "2025/07/P1-33.jpg" }
];

const BENEFITS = [
  {
    title: "Customer Focus",
    icon: "sphere",
    text: "Customers choose us for the simplicity of communication and an understanding of what it’s necessary to receive in the end."
  },
  {
    title: "Professionalism",
    icon: "measure",
    text: "We hold multiple meetings to fully understand our clients' needs, ensuring we provide a design project with all the necessary details and precision."
  },
  {
    title: "Multi Experience",
    icon: "home",
    text: "We provide a wide range of services, we work in different styles, we project commercial and residential properties."
  },
  {
    title: "Author`s Supervision",
    icon: "house",
    text: "We work closely with our clients throughout the entire process, selecting materials and colours together, coordinating with suppliers and trades, and carefully supervising every stage of the project to ensure the design is brought to life exactly as envisioned."
  }
];

function BenefitIcon({ name }) {
  if (name === "sphere") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="24" cy="24" rx="7" ry="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 24h32M10 16h28M10 32h28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "measure") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="20" width="32" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 20v4M20 20v6M26 20v4M32 20v6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  if (name === "home") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 22 24 10l16 12v16H8V22z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 38V28h8v10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 38V20l14-10 14 10v18H10z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 38V26h12v12" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const LATEST = BLOG_POSTS.slice(0, 3).map((p) => ({
  slug: p.slug,
  title: p.title,
  img: p.img,
  date: p.date,
  cats: p.cats,
  excerpt: shortExcerpt(p)
}));

export default function TestHomePage() {
  return (
    <>
    <div className="home-page test-homepage">
      <section className="hero">
        <video className="hero-desk" muted loop playsInline preload="none" poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}>
          <source src={`${U}/2025/07/NEW-video-for-DESKTOP.mp4`} type="video/mp4" />
        </video>
        <video className="hero-mob" muted loop playsInline preload="none" poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}>
          <source src={`${U}/2025/07/NEW-video-for-MOBILE.mp4`} type="video/mp4" />
        </video>
        <div className="hero-copy">
          <h2>Welcome to Yara luxe interiors</h2>
          <Link className="btn btn-light" href="/portfolio">View our work</Link>
        </div>
      </section>

      <section className="home-features">
        <div className="container-wide features-grid">
          {FEATURES.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="features-image">
                <span className="overlay"><span className="plus">+</span></span>
                <img src={`${U}/${f.img}`} alt="" />
              </div>
              <div className="features-content" style={{ backgroundImage: `url('${HOME_FEATURE_BG}')` }}>
                <h6><span>{f.n}</span> {f.title}</h6>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-benefits">
        <div className="container benefits">
          <div>
            <span className="ot-kicker">[ our benefits ]</span>
            <h2 className="ot-title">Ambitious Studio with a Successful Concept, Ideas &amp; Flawless Execution</h2>
            <div className="mt-40">
              <Link className="octf-btn octf-btn-light" href="/portfolio">View Projects</Link>
            </div>
          </div>
          <div className="icon-grid">
            {BENEFITS.map((b) => (
              <div className="icon-box" key={b.title}>
                <div className="icon-main">
                  <BenefitIcon name={b.icon} />
                </div>
                <h5>{b.title}</h5>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-portfolio" style={{ backgroundImage: `url('${HOME_PORTFOLIO_BG}')` }}>
        <div className="container">
          <div className="ot-heading is-dots">
            <span className="ot-kicker">[ our portfolio ]</span>
            <h2 className="ot-title">Introduce Our Projects</h2>
          </div>
        </div>
        <PortfolioMetro
          filters={HOME_FILTERS}
          gridClass="projects-grid pf_4_cols style-1 img-scale w-auto"
          limit={12}
          href="/portfolio"
        />
        <div className="center mt-40">
          <Link className="octf-btn octf-btn-light" href="/portfolio">all Projects</Link>
        </div>
      </section>

      <section className="home-about">
        <div className="container split">
          <div className="home-about-photo">
            <img className="main" src={`${U}/2026/03/P2-1.jpg`} alt="" />
            <img className="signature" src={`${U}/2025/07/ONLY-Donia-Yara-W-no-dot-1-scaled.png`} alt="Donia Yara" />
          </div>
          <div>
            <span className="ot-kicker">[ about our company ]</span>
            <h2 className="ot-title">Our Philosophy in Simply  and Quality Design</h2>
            <p>We believe great design should feel effortless-elegant, functional, and deeply personal. Every detail matters, and our focus is always on creating timeless spaces that elevate everyday living.</p>
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

      <HomeTestimonials />
      <HomePartners />

      <section className="home-blog" style={{ backgroundImage: `url('${HOME_BLOG_BG}')` }}>
        <div className="container">
          <div className="home-blog-head">
            <div className="ot-heading is-dots">
              <span className="ot-kicker">[ our blog ]</span>
              <h2 className="ot-title">Read Our Latest News</h2>
            </div>
            <Link className="octf-btn octf-btn-light" href="/blog">View all</Link>
          </div>
          <BlogSlider items={LATEST} />
        </div>
      </section>

      <HomeDreams />
    </div>
    <SeoPageFinal />
    </>
  );
}
