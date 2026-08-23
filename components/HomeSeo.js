import Link from "next/link";
import OptImage from "@/components/OptImage";
import FaqList from "@/components/FaqList";
import { MAP_EMBED, U } from "@/lib/data";
import { fileAlt, SIZES } from "@/lib/image-alts";
import { LOCATIONS } from "@/lib/schema/location-service";
import { SERVICE_URLS } from "@/lib/urls";

export function HomeHero() {
  return (
    <div className="ylp">
      <section className="hero" aria-label="Luxury interior designer Melbourne">
        <video
          className="hero-desk"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}
        >
          <source src={`${U}/2025/07/NEW-video-for-DESKTOP.mp4`} type="video/mp4" />
        </video>
        <video
          className="hero-mob"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}
        >
          <source src={`${U}/2025/07/NEW-video-for-MOBILE.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Luxury Interior Designer Melbourne</h1>
          <p className="hero-desc">
            Luxury interior design for residential and commercial spaces across Melbourne, shaped by 19+ years of design experience. Start with a free consultation.
          </p>
          <ul className="hero-checks">
            <li>19+ Years Design Experience</li>
            <li>Residential &amp; Commercial Interiors</li>
            <li>Luxury Interior Styling</li>
            <li>Melbourne Interior Design Studio</li>
          </ul>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/portfolio" className="btn-outline">View Our Projects</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>
    </div>
  );
}

const FEATURED_AREAS = [
  "Toorak",
  "Brighton",
  "Hawthorn",
  "South Yarra",
  "Kew",
  "Camberwell",
  "Balwyn",
  "Malvern"
];

const HOME_SERVICES = [
  { title: "Residential Interior Design Melbourne", desc: "Beautiful, practical interior spaces for luxury homes, apartments and modern family living.", href: SERVICE_URLS.residential, img: "2026/06/residential-interior-design.webp" },
  { title: "Commercial Interior Design Melbourne", desc: "Sophisticated commercial interiors for offices, retail and hospitality with strong brand presence.", href: SERVICE_URLS.commercial, img: "2026/06/Luxury-commercial-interior-design-melbourne.webp" },
  { title: "Kitchen Design Melbourne", desc: "Practical, timeless kitchen concepts designed for everyday living and entertaining.", href: SERVICE_URLS.kitchen, img: "2026/06/kitchen-interior-design.webp" },
  { title: "Bathroom Design Melbourne", desc: "Contemporary bathroom ideas with luxury finishes, smart layouts and refined styling.", href: SERVICE_URLS.bathroom, img: "2026/06/bathroom-interior-design.webp" },
  { title: "Full Home Interior Design Melbourne", desc: "Complete home planning for cohesive interiors across every room in your property.", href: SERVICE_URLS.fullHome, img: "2026/06/Full-Home-Interior-Design-Melbourne.webp" },
  { title: "Interior Design Consultation Melbourne", desc: "Expert guidance on layout, colour, materials and styling for your project goals.", href: SERVICE_URLS.consultation, img: "2026/06/interior-design-consultation.webp" },
  { title: "New Build Interior Design Melbourne", desc: "Interior concepts for new homes with builder collaboration and finish selection.", href: SERVICE_URLS.newBuild, img: "2026/06/new-build-interior-design.webp" },
  { title: "Interior Design Project Supervision", desc: "On-site supervision to ensure every design detail is delivered with quality and precision.", href: SERVICE_URLS.supervision, img: "2026/06/supervision1.webp" }
];

export function HomeServices({
  heading = "Our interior design services Melbourne",
  intro = "Our customised design solutions are designed to improve functionality, comfort, and timeless beauty. Whether it's an interior fit-out or a new build project, Yara Luxe Interiors provides custom designs that are based on your lifestyle, vision and space."
}) {
  return (
    <div className="ylp">
      <section className="sp test-home-services" id="services" style={{ background: "#1A1A1A" }}>
        <h2 className="h2">{heading}</h2>
        <p className="bt">{intro}</p>
        <div className="svc-cards svc-cards-final">
          {HOME_SERVICES.map((s) => (
            <article className="svc-card-a" key={s.href}>
              <Link href={s.href} className="svc-card-a-link">
                <div className="svc-card-a-img">
                  <OptImage src={`${U}/${s.img}`} alt={fileAlt(s.img, s.title)} sizes={SIZES.homeSvc} />
                </div>
                <div className="svc-card-a-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="svc-card-link">View service</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const WHY = [
  {
    title: "Tailored Design Solutions",
    text: "Design concepts shaped around the client's lifestyle, property and practical needs."
  },
  {
    title: "Luxury with Everyday Function",
    text: "Refined interiors that balance aesthetics with comfortable, functional living."
  },
  {
    title: "19+ Years of Design Experience",
    text: "Donia Yara and the design team bring 19+ years of interior design and industry experience."
  },
  {
    title: "Residential & Commercial Expertise",
    text: "Experience across homes, apartments, offices, retail and hospitality interiors."
  },
  {
    title: "End-to-End Design Support",
    text: "From space planning, finishes and lighting through to styling and project supervision where included in the agreed scope."
  }
];

const HOME_FAQS = [
  { q: "How much does interior design cost in Melbourne?", a: "Interior design pricing depends on project size, scope, finishes, furniture and styling needs. We provide tailored guidance after a free consultation based on your goals and property." },
  { q: "Do you work on residential and commercial interiors?", a: "Yes. We design interiors for homes, apartments, offices, retail spaces and hospitality projects across Melbourne." },
  { q: "What does a free consultation include?", a: "A free consultation is an opportunity to discuss your property, design goals, requirements and overall project scope so we can advise on the right approach." },
  { q: "Can you help with renovations and space planning?", a: "Yes. We can support renovations, layout planning and functional design ideas suited to how you live or work in the space." },
  { q: "How long does an interior design project take?", a: "Timelines vary with scope and complexity. Smaller projects may take a few weeks, while larger renovations or full-home work can extend over several months." }
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Free Consultation",
    text: "Discuss the property, design goals, requirements and overall project scope."
  },
  {
    n: "02",
    title: "Concept & Planning",
    text: "Develop the direction for layout, style, materials, colours and key design elements."
  },
  {
    n: "03",
    title: "Design Development",
    text: "Refine the selected direction through detailed selections, documentation and visual planning where included in the project scope."
  },
  {
    n: "04",
    title: "Implementation & Final Details",
    text: "Coordinate approved design elements, styling or project supervision according to the agreed service scope."
  }
];

const EXCELLENCE_IMG = "2026/06/Interior-Design-Excellence.webp";

export function HomeWhyChoose() {
  return (
    <div className="ylp seo-final test-home-seo">
      <section className="sp home-why-dark" id="why-us">
        <h2 className="h2">Why Choose Yara Luxe Interiors?</h2>
        <p className="bt">
          Yara Luxe Interiors combines thoughtful space planning, refined aesthetics and practical design to create interiors tailored to the way each client lives or works.
        </p>
        <div className="why-timeline-split">
          <ul className="why-timeline">
            {WHY.map((w, i) => (
              <li key={w.title}>
                <span className="why-timeline-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="why-timeline-media">
            <OptImage src={`${U}/${EXCELLENCE_IMG}`} alt={fileAlt(EXCELLENCE_IMG)} sizes={SIZES.aboutPhoto} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function HomeProcess() {
  return (
    <section className="home-process" id="process">
      <div className="container">
        <div className="home-process-head">
          <div className="ot-heading is-dots">
            <span className="ot-kicker">[ our process ]</span>
            <h2 className="ot-title">Our Interior Design Process</h2>
          </div>
          <p className="home-process-intro">
            A clear design process helps turn ideas into a considered, cohesive interior.
          </p>
        </div>
        <ol className="home-process-steps">
          {PROCESS_STEPS.map((step) => (
            <li className="home-process-step" key={step.n}>
              <div className="home-process-marker" aria-hidden="true">
                <span className="home-process-num">{step.n}</span>
              </div>
              <span className="home-process-label">Step {step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="home-process-cta">
          <Link className="octf-btn octf-btn-dark" href="/process">View Our Process</Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <div className="ylp seo-final test-home-seo">
      <section className="sp" id="faq" style={{ background: "#fff" }}>
        <div className="sec-center faq-sec-head"><h2 className="h2">Frequently Asked Questions</h2></div>
        <FaqList items={HOME_FAQS} className="faq-single" />
      </section>
    </div>
  );
}

/** @deprecated Use HomeWhyChoose + HomeFaq */
export function HomeWhyQualityFaq() {
  return (
    <>
      <HomeWhyChoose />
      <HomeFaq />
    </>
  );
}

export function HomeAreas() {
  const featured = FEATURED_AREAS.map((name) => LOCATIONS.find((area) => area.suburb === name)).filter(Boolean);
  const rest = LOCATIONS.filter((area) => !FEATURED_AREAS.includes(area.suburb));
  const areas = [...featured, ...rest];

  return (
    <section className="home-seo home-areas" id="areas">
      <div className="container">
        <div className="home-areas-layout">
          <div className="home-areas-map">
            <iframe
              src={MAP_EMBED}
              title="Yara Luxe Interiors, 853 Nepean Hwy, Bentleigh"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="home-areas-copy">
            <div className="ot-heading is-dots">
              <span className="ot-kicker">[ areas we serve ]</span>
              <h2 className="ot-title">Interior Design Services Across Melbourne</h2>
            </div>
            <p className="home-seo-intro">
              Based in Bentleigh, we design homes across Melbourne&apos;s inner east, bayside and surrounding suburbs.
            </p>
          </div>
          <div className="home-area-grid">
            {areas.map((area) => (
              <Link className="home-area-item" href={area.path} key={area.path}>
                <span className="home-area-name">{area.suburb}</span>
                <span className="home-area-post">{area.postcode}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
