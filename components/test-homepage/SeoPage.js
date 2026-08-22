import Link from "next/link";
import { SERVICE_URLS } from "@/lib/urls";
import {
  AboutConcepts,
  AreasConcepts,
  ConceptBlock,
  CtaConcepts,
  DetailServiceConcepts,
  FaqConcepts,
  HeroConcepts,
  QualityConcepts,
  ServiceCardD,
  WhyConcepts
} from "@/components/test-homepage/SeoConcepts";
import { U } from "@/lib/data";

const FAQS = [
  { q: "How much does interior design cost in Melbourne?", a: "The prices of interior design Melbourne services vary according to the project size, design scope, finishes, furniture choices and styling needs. We offer customized consultation according to your project objectives." },
  { q: "Is residential & commercial interior design your speciality?", a: "Yes. We have projects in Melbourne in homes, apartments, offices, retail spaces, hospitality projects and commercial interiors." },
  { q: "Do you have an in-house styling programme?", a: "Absolutely. Furniture sourcing, colour consultancy, décor styling, lighting concepts and finishing touches are all included in our interior styling Melbourne service." },
  { q: "Are you willing to work on the renovations and layout design?", a: "Yes. Space planning, space renovations, interior decorating and functional layout ideas for your property." },
  { q: "What's the duration of an interior design project?", a: "Project timelines can be different from one project to the next based on scope and complexity. In smaller projects, it might take a couple of weeks; for a complete overhaul, the time frame may be several months." }
];

const AREAS = [
  ["Toorak", "3142"], ["Brighton", "3186"], ["Balwyn", "3103"], ["Canterbury", "3126"],
  ["South Yarra", "3141"], ["Kew", "3101"], ["Hawthorn", "3122"], ["Balwyn North", "3104"],
  ["Camberwell", "3124"], ["Mont Albert", "3127"], ["Albert Park", "3206"], ["Elwood", "3184"],
  ["Armadale", "3143"], ["Malvern", "3144"], ["Prahran", "3181"], ["Templestowe", "3106"],
  ["Brighton East", "3187"]
];

const CHECKS = [
  "19+ Years Experience",
  "Residential & Commercial Interiors",
  "Luxury Interior Styling",
  "Melbourne Interior Design Studio"
];

const SERVICES = [
  { title: "Residential Interior Design Melbourne", desc: "Beautiful, practical interior spaces for luxury homes, apartments and modern family living.", href: SERVICE_URLS.residential, img: "2026/06/residential-interior-design.webp" },
  { title: "Commercial Interior Design Melbourne", desc: "Sophisticated commercial interiors for offices, retail and hospitality with strong brand presence.", href: SERVICE_URLS.commercial, img: "2026/06/Luxury-commercial-interior-design-melbourne.webp" },
  { title: "Kitchen Design Melbourne", desc: "Practical, timeless kitchen concepts designed for everyday living and entertaining.", href: SERVICE_URLS.kitchen, img: "2026/06/kitchen-interior-design.webp" },
  { title: "Bathroom Design Melbourne", desc: "Contemporary bathroom ideas with luxury finishes, smart layouts and refined styling.", href: SERVICE_URLS.bathroom, img: "2026/06/bathroom-interior-design.webp" },
  { title: "Full Home Interior Design Melbourne", desc: "Complete home planning for cohesive interiors across every room in your property.", href: SERVICE_URLS.fullHome, img: "2026/06/Full-Home-Interior-Design-Melbourne.webp" },
  { title: "Interior Design Consultation Melbourne", desc: "Expert guidance on layout, colour, materials and styling for your project goals.", href: SERVICE_URLS.consultation, img: "2026/06/interior-design-consultation.webp" },
  { title: "New Build Interior Design Melbourne", desc: "Interior concepts for new homes with builder collaboration and finish selection.", href: SERVICE_URLS.newBuild, img: "2026/06/new-build-interior-design.webp" },
  { title: "Interior Design Project Supervision", desc: "On-site supervision to ensure every design detail is delivered with quality and precision.", href: SERVICE_URLS.supervision, img: "2026/06/supervision1.webp" }
];

function ServiceCardA({ s }) {
  return (
    <Link className="svc-card-a" href={s.href}>
      <div className="svc-card-a-img"><img src={`${U}/${s.img}`} alt="" /></div>
      <div className="svc-card-a-body"><h3>{s.title}</h3><p>{s.desc}</p><span className="svc-card-link">View service</span></div>
    </Link>
  );
}

function ServiceCardB({ s }) {
  return (
    <Link className="svc-card-b" href={s.href}>
      <div className="svc-card-b-img">
        <img src={`${U}/${s.img}`} alt="" />
        <div className="svc-card-b-cap"><h3>{s.title}</h3><span>View service →</span></div>
      </div>
      <p>{s.desc}</p>
    </Link>
  );
}

function ServiceCardC({ s }) {
  return (
    <Link className="svc-card-c" href={s.href}>
      <div className="svc-card-c-img"><img src={`${U}/${s.img}`} alt="" /></div>
      <div className="svc-card-c-body"><h3>{s.title}</h3><p>{s.desc}</p><span className="svc-card-c-more">Learn more</span></div>
    </Link>
  );
}

export default function SeoPage() {
  const checks = CHECKS.map((item) => <li key={item}>{item}</li>);
  const checksAlt = CHECKS.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="ylp test-home-seo">
      <section className="sp seo-concepts-wrap" style={{ background: "#0A0A0A", paddingTop: 60 }}>
        <p className="seo-concepts-intro">Design concepts — pick one per section, baqi remove karenge</p>
      </section>

      <section className="sp seo-section" style={{ background: "#111" }}>
        <h2 className="h2 h2-light">Hero</h2>
        <HeroConcepts checks={checks} checksAlt={checksAlt} />
      </section>

      <section className="sp seo-section" style={{ background: "#fff" }}>
        <h2 className="h2">Luxury Interior Designers Melbourne</h2>
        <AboutConcepts />
      </section>

      <section className="sp seo-section" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why choose our interior design company in Melbourne?</h2>
        <p className="bt">Clients in Melbourne trust us as a reputable design company, and we work to ensure that the interiors we design not only look impressive but also enhance the way they live, work and enjoy their interior space daily.</p>
        <WhyConcepts />
      </section>

      <section className="sp seo-section test-home-services" style={{ background: "#fff" }}>
        <h2 className="h2">Our interior design services Melbourne</h2>
        <p className="bt">Our customised design solutions are designed to improve functionality, comfort, and timeless beauty.</p>
        <ConceptBlock label="Concept 1 — classic cards">
          <div className="svc-cards">{SERVICES.map((s) => <ServiceCardA key={s.href} s={s} />)}</div>
        </ConceptBlock>
        <ConceptBlock label="Concept 2 — image caption overlay">
          <div className="svc-cards">{SERVICES.map((s) => <ServiceCardB key={s.href} s={s} />)}</div>
        </ConceptBlock>
        <ConceptBlock label="Concept 3 — minimal dark footer">
          <div className="svc-cards">{SERVICES.map((s) => <ServiceCardC key={s.href} s={s} />)}</div>
        </ConceptBlock>
        <ConceptBlock label="Concept 4 — horizontal list">
          <div className="svc-cards svc-cards-d">{SERVICES.map((s) => <ServiceCardD key={s.href} s={s} />)}</div>
        </ConceptBlock>
      </section>

      <section className="sp seo-section dark-sp">
        <h2 className="h2w">Service detail layout (sample 3)</h2>
        <p className="dark-body">Detailed service blocks — concepts below use first 3 services as preview.</p>
        <DetailServiceConcepts services={SERVICES} />
      </section>

      <section className="sp seo-section" style={{ background: "#fff" }}>
        <h2 className="h2">We Focused on Quality &amp; detail in Melbourne</h2>
        <QualityConcepts />
      </section>

      <section className="sp seo-section" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Frequently Asked Questions</h2>
        <FaqConcepts faqs={FAQS} />
      </section>

      <section className="sp seo-section" style={{ background: "#fff" }}>
        <h2 className="h2">Call to action</h2>
        <CtaConcepts />
      </section>

      <section className="sp seo-section" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Areas We Serve Across Melbourne</h2>
        <p className="bt">Yara Luxe Interiors is proud to offer top-notch interior design Melbourne services throughout some of Melbourne&apos;s most sought-after suburbs.</p>
        <AreasConcepts
          areas={AREAS}
          intro="We have interior designers in Melbourne who can design beautiful interiors for residential and commercial spaces."
          outro="From a full-scale home makeover to styling an apartment, our team brings personalised design solutions, creativity, attention to detail and timeless aesthetics."
        />
      </section>
    </div>
  );
}
