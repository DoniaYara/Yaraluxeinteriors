import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { HomeServices } from "@/components/HomeSeo";
import { OUR_SERVICES_BANNER, U } from "@/lib/data";
import { ourServicesPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({ title: "Our Services – Yara Luxe Interiors" }, "/our-services");

const BENEFITS = [
  {
    title: "Customer Focus",
    icon: "sphere",
    text: "Customers choose us for the simplicity of communication and an understanding of what it’s necessary to receive in the end."
  },
  {
    title: "Professionalism",
    icon: "measure",
    text: "We hold multiple meetings to fully understand our clients' needs , ensuring we provide a design project with all the necessary details and precision."
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

const SKETCH = [
  {
    n: "01.",
    title: "Design & Planning",
    intro: "Turning ideas into functional, beautiful spaces:",
    items: ["Space Planning", "Concept Development", "Room Design", "Kitchen & Bathroom Design", "Custom Joinery Design"]
  },
  {
    n: "02.",
    title: "Selections & Styling",
    intro: "Bringing life, texture, and personality to your space:",
    items: ["Colour Consultation", "Materials & Finishes Selection", "Furniture Selection & Customisation", "Styling & Decoration"]
  },
  {
    n: "03.",
    title: "Visualisation & Presentation",
    intro: "Helping you see the vision before it becomes reality.",
    items: ["3D Visualisation & Renderings", "Mood Boards & Sample Presentations"]
  },
  {
    n: "04.",
    title: "Project Coordination",
    intro: "Managing the process:",
    items: ["Renovation & Remodelling", "Project Management", "Pre-sale Property Styling (Home Staging)", "Contractor & Supplier Liaison (if applicable)"]
  }
];

const FEATURES = [
  { title: "MAKING IDEA", icon: "tip" },
  { title: "3D MODELING", icon: "cube" },
  { title: "STYLING", icon: "type" },
  { title: "PLANNING", icon: "plan" },
  { title: "DESIGNING", icon: "paint" },
  { title: "BUILDING", icon: "brush" }
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
  if (name === "diamond") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 8 40 20 24 40 8 20Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 20h32M16 14l8 26 8-26" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "box") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 16 24 8l16 8v20L24 44 8 36V16z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 16l16 8 16-8M24 24v20" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "model") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 30 24 8l14 22-14 10-14-10z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 30l14-8 14 8M24 22v16" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "tip") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 30h8v4h-8zM22 36h4v4h-4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  if (name === "cube") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 16 24 8l16 8v16L24 40 8 32V16z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 16l16 8 16-8M24 24v16" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "type") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 14h28M24 14v22M16 36h16" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "plan") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 20 24 10l14 10v16H10V20z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 36V26h8v10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "paint") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 32c0-8 6-14 10-20 4 6 10 12 10 20a10 10 0 0 1-20 0z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="20" cy="30" r="2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 34c8-2 14-10 16-20" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 18h8v20H14z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function OurServicesPage() {
  return (
    <div className="our-svc">
      <JsonLd data={ourServicesPageGraph()} />
      <PageHero
        title="Our Services"
        image={OUR_SERVICES_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Our Services" }
        ]}
      />

      <HomeServices />

      <section className="our-svc-benefits">
        <div className="container benefits">
          <div>
            <span className="ot-kicker">[ our benefits ]</span>
            <h2 className="ot-title">Ambitious Studio with a Successful Concept, Ideas &amp; Flawless Execution</h2>
            <div className="mt-40">
              <Link className="octf-btn octf-btn-dark" href="/portfolio">View Projects</Link>
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

      <section className="our-svc-strip">
        <div className="container our-svc-strip-grid">
          <div className="our-svc-strip-item">
            <BenefitIcon name="diamond" />
            <h5>Professionalism</h5>
          </div>
          <div className="our-svc-strip-item">
            <BenefitIcon name="box" />
            <h5>Experience &amp; Skills</h5>
          </div>
          <div className="our-svc-strip-item">
            <BenefitIcon name="model" />
            <h5>Customer Focus</h5>
          </div>
        </div>
      </section>

      <section className="our-svc-sketch" style={{ backgroundImage: `url('${U}/2020/05/bg1-service.png')` }}>
        <div className="our-svc-sketch-photo">
          <OptImage src={`${U}/2025/07/P7-2.jpg`} alt={fileAlt("2025/07/P7-2.jpg")} sizes={SIZES.contentCol} />
        </div>
        <div className="our-svc-sketch-copy">
          <div className="ot-heading is-dots">
            <span className="ot-kicker">[ main principes ]</span>
            <h2 className="ot-title">A Sketch of Each Detail</h2>
          </div>
          <div className="sketch">
            {SKETCH.map((col) => (
              <div key={col.n}>
                <div className="n">{col.n}</div>
                <h6>{col.title}</h6>
                <p>{col.intro}</p>
                <ul>
                  {col.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-svc-features">
        <div className="container our-svc-features-grid">
          <div className="our-svc-feature-tiles">
            {FEATURES.map((f) => (
              <div className="our-svc-feature-tile" key={f.title}>
                <div className="icon-main">
                  <BenefitIcon name={f.icon} />
                </div>
                <h5>{f.title}</h5>
              </div>
            ))}
          </div>
          <div className="our-svc-features-copy">
            <span className="ot-kicker">[ features ]</span>
            <h2 className="ot-title">Our Philosophy in Simply  and Quality Design</h2>
            <p>We believe great design should feel effortless-elegant, functional, and deeply personal. Every detail matters, and our focus is always on creating timeless spaces that elevate everyday living.</p>
          </div>
        </div>
      </section>

      <HomeGoogleReviews />
    </div>
  );
}
