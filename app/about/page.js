import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { ABOUT_BANNER, ABOUT_BG, ABOUT_FAQS, U } from "@/lib/data";
import { aboutPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({ title: "About Us – Yara Luxe Interiors" }, "/about");

const FLIPS = [
  {
    title: "Our Mission",
    img: `${U}/2025/07/p6-1our-vision-Left-photo.jpg`,
    text: "To create elegant, functional spaces that elevate everyday living.we design with purpose, blending individuality with lasting beauty and sustainability."
  },
  {
    title: "Our Vision",
    img: `${U}/2025/07/p6-2our-mission-middle-photo.jpg`,
    text: "To create timeless spaces that inspire, uplift, and leave a lasting impression to tell meaningful stories through every design."
  },
  {
    title: "Our Values",
    img: `${U}/2025/07/P6-3our-values-right-photo.jpg`,
    text: "We are dedicated to excellence in design, detail, and execution, delivering thoughtful, functional spaces that reflect innovation, and a deep understanding of our clients’ vision."
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <JsonLd data={aboutPageGraph()} />
      <PageHero
        title="About Us"
        image={ABOUT_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "About Us" }
        ]}
      />

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-photo">
            <OptImage src={`${U}/2025/07/about-us2.jpg`} alt={fileAlt("2025/07/about-us2.jpg")} sizes={SIZES.contentCol} />
          </div>
          <div className="about-intro-copy">
            <p>With nearly two decades of industry experience, I bring a refined blend of architectural insight and interior design expertise to every project.</p>
            <p>My professional journey began with a Bachelor’s degree in Architecture, followed by a two-year postgraduate qualification in interior design, an education that laid the foundation for a thoughtful and holistic design approach. Born in Iran and proud of my Persian heritage, I developed a strong grounding in both the technical and creative aspects of design, an influence that continues to shape my design sensibility today.</p>
            <p>Since moving to Australia in 2008, I’ve had the privilege of working as an interior designer across a wide range of residential projects, blending timeless design principles with modern functionality to create spaces that feel both elegant and personal. In 2010, I established my own practice under the name Yara Design Services, driven by a passion to offer clients spaces that truly feel like home.</p>
            <p>As my work evolved and my connection with clients deepened, in 2024, I rebranded my business as <b>Yara Luxe Interiors Pty Ltd</b> a natural next step that reflects a growing focus on highly personalised interiors with a refined, luxurious edge. This shift wasn’t just about a new name; it marked a renewed commitment to crafting intimate, elevated environments that reflect individuality, celebrate craftsmanship, and enrich the everyday.</p>
            <p>My approach is guided by the belief that interiors should be as personal as they are practical, spaces that reflect your lifestyle, support your routines, and uplift your spirit. It’s at the heart of everything I do, and it’s why my design philosophy is simple:</p>
            <p><b>A Design That Loves You Back.</b></p>
            <Link className="octf-btn octf-btn-dark" href="/portfolio">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="container about-founder-grid">
          <div className="about-founder-photo">
            <OptImage src={`${U}/2025/07/P5-3.jpg`} alt={fileAlt("2025/07/P5-3.jpg")} sizes={SIZES.contentCol} />
          </div>
          <div className="about-founder-copy">
            <span className="ot-kicker">[ founder of company ]</span>
            <h2 className="ot-title">Donia Yara</h2>
            <p>Sustainable success is built not on shortcuts, but on consistent principles and long-term vision.</p>
          </div>
        </div>
      </section>

      <section className="about-sketch">
        <div className="container about-sketch-grid">
          <div>
            <div className="ot-heading is-dots">
              <span className="ot-kicker">[ how it works ]</span>
              <h2 className="ot-title">From Sketch to Life</h2>
            </div>
            <FaqList items={ABOUT_FAQS} className="about-acc" />
          </div>
          <div className="about-sketch-photo">
            <OptImage src={`${U}/2025/07/about-us-down.jpg`} alt={fileAlt("2025/07/about-us-down.jpg")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="about-philosophy" style={{ backgroundImage: `url('${ABOUT_BG}')` }}>
        <div className="container">
          <div className="ot-heading is-dots about-philosophy-head">
            <span className="ot-kicker">[ company strategy ]</span>
            <h2 className="ot-title">Our Philosophy</h2>
          </div>
          <div className="about-flips">
            {FLIPS.map((box) => (
              <div className="support-box" key={box.title}>
                <div className="inner-box">
                  <div className="overlay">
                    <p>{box.text}</p>
                  </div>
                  <div className="content-box">
                    <div className="icon-title">
                      <h5>{box.title}</h5>
                    </div>
                    <OptImage src={box.img} alt={fileAlt(box.img)} sizes={SIZES.feature} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeGoogleReviews />
    </div>
  );
}
