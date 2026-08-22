import Link from "next/link";
import FaqList from "@/components/FaqList";
import { MAP_EMBED, U } from "@/lib/data";
import { AREA_URLS } from "@/lib/urls";

export function ConceptBlock({ label, children, className = "" }) {
  return (
    <div className={`seo-concept ${className}`.trim()}>
      <span className="seo-concept-label">{label}</span>
      {children}
    </div>
  );
}

const ABOUT_IMG = `${U}/2026/06/Best-interior-designers-Melbourne.webp`;
const ABOUT_IMG_2 = `${U}/2026/06/residential-interior-design.webp`;
const QUALITY_IMG = `${U}/2026/06/Interior-Design-Excellence.webp`;

const ABOUT_H2 = "Luxury Interior Designers Melbourne";
const ABOUT_P1 = "At Yara Luxe we create elegant designs with a focus on comfort, function and elegance. Melbourne homeowners and business clients rely on interior designers who excel at creating a beautiful, modern, functional and timeless interior for any home, apartment, office or commercial space.";
const ABOUT_H2B = "About Us";
const ABOUT_P2 = "Our team has about 20 years of experience to provide you with personalised design Melbourne solutions to suit your lifestyle, property and vision. Whether you're looking for luxury living rooms, modern interiors or professional Interior Styling Melbourne services, each project is meticulously planned with detail and high-quality finishes and designed with a cohesive concept.";

const WHY_ITEMS = [
  { title: "Tailored Design Solutions", text: "Each project is tailored to suit your home style, lifestyle requirements, spatial requirements and design preferences." },
  { title: "Luxury Interiors With Functional Living", text: "We create interiors that combine elegant aesthetics with practical layouts designed for comfortable everyday living." },
  { title: "Experienced Designers in Melbourne", text: "Our team has a combined 20 years of experience in design and decoration and offers high-end residences and commercial interiors in Melbourne." },
  { title: "Full-Service Interior Design Studio", text: "Whether it's space planning, furniture, colour, lighting, styling or finishes, we handle all the details with ease." },
  { title: "Residential & Commercial Interior Expertise", text: "Our design services Melbourne clients can rely on include homes, apartments, offices, retail and hospitality interior design." }
];

const QUALITY_LIST = [
  "warm and inviting homes",
  "elegant luxury interiors",
  "functional commercial spaces",
  "modern apartment styling",
  "timeless interior environments"
];

export function HeroConcepts({ checks, checksAlt }) {
  return (
    <>
      <ConceptBlock label="Concept 1 — centered (current)">
        <div className="hero-demo hero-demo--1">
          <div className="hero-demo-inner">
            <h2>Best Interior Designer in Melbourne</h2>
            <p className="hero-desc">Design a sophisticated, practical and enduring environment for Melbourne interior designers who specialise in luxury residential and commercial interiors for modern living.</p>
            <ul className="hero-checks">{checks}</ul>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/portfolio" className="btn-outline">View Our Projects</Link>
            </div>
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — left aligned">
        <div className="hero-demo hero-demo--2">
          <div className="hero-demo-inner hero-demo-left">
            <span className="hero-eyebrow">[ melbourne interior design ]</span>
            <h2>Best Interior Designer in Melbourne</h2>
            <p className="hero-desc">Design a sophisticated, practical and enduring environment for luxury residential and commercial interiors.</p>
            <ul className="hc-pills">{checksAlt}</ul>
            <div className="hero-actions hero-actions-left">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/portfolio" className="btn-outline">View Our Projects</Link>
            </div>
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — split with stats">
        <div className="hero-demo hero-demo--3">
          <div className="hero-demo-split">
            <div>
              <h2>Best Interior Designer in Melbourne</h2>
              <p className="hero-desc">Sophisticated, practical and enduring environments for modern living across Melbourne.</p>
              <div className="hero-actions hero-actions-left">
                <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              </div>
            </div>
            <ul className="hero-stat-grid">
              <li><strong>19+</strong><span>Years</span></li>
              <li><strong>Res &amp; Com</strong><span>Interiors</span></li>
              <li><strong>Luxury</strong><span>Styling</span></li>
              <li><strong>Melbourne</strong><span>Studio</span></li>
            </ul>
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — minimal single CTA">
        <div className="hero-demo hero-demo--4">
          <div className="hero-demo-inner">
            <h2>Best Interior Designer in Melbourne</h2>
            <p className="hero-desc">Luxury residential and commercial interiors for modern living.</p>
            <Link href="/contact" className="btn-primary btn-primary-lg">Book a Free Consultation</Link>
            <ul className="hero-checks hero-checks-compact">{checks}</ul>
          </div>
        </div>
      </ConceptBlock>
    </>
  );
}

export function AboutConcepts() {
  return (
    <>
      <ConceptBlock label="Concept 1 — two image cards">
        <div className="about-cards about-cards-a">
          <article className="about-card">
            <div className="about-card-img">
              <img src={ABOUT_IMG} alt="Luxury interior designers Melbourne — Yara Luxe Interiors" />
            </div>
            <div className="about-card-body">
              <h2 className="h2">{ABOUT_H2}</h2>
              <p className="bt">{ABOUT_P1}</p>
            </div>
          </article>
          <article className="about-card">
            <div className="about-card-img">
              <img src={ABOUT_IMG_2} alt="About Yara Luxe Interiors Melbourne" />
              <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
            </div>
            <div className="about-card-body">
              <h2 className="h2">{ABOUT_H2B}</h2>
              <p className="bt">{ABOUT_P2}</p>
            </div>
          </article>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — two split cards">
        <div className="about-cards about-cards-b">
          <article className="about-card about-card-split">
            <div className="about-card-img">
              <img src={ABOUT_IMG} alt="Luxury interior designers Melbourne — Yara Luxe Interiors" />
            </div>
            <div className="about-card-body">
              <h2 className="h2">{ABOUT_H2}</h2>
              <p className="bt">{ABOUT_P1}</p>
            </div>
          </article>
          <article className="about-card about-card-split">
            <div className="about-card-img">
              <img src={QUALITY_IMG} alt="About Yara Luxe Interiors Melbourne" />
            </div>
            <div className="about-card-body">
              <h2 className="h2">{ABOUT_H2B}</h2>
              <p className="bt">{ABOUT_P2}</p>
            </div>
          </article>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — two overlay cards">
        <div className="about-cards about-cards-c">
          <article className="about-card about-card-overlay">
            <img src={ABOUT_IMG} alt="Luxury interior designers Melbourne — Yara Luxe Interiors" />
            <div className="about-card-overlay-body">
              <h2 className="h2">{ABOUT_H2}</h2>
              <p className="bt">{ABOUT_P1}</p>
            </div>
          </article>
          <article className="about-card about-card-overlay">
            <img src={ABOUT_IMG_2} alt="About Yara Luxe Interiors Melbourne" />
            <div className="about-card-overlay-body">
              <span className="about-card-years">19+ Years Experience</span>
              <h2 className="h2">{ABOUT_H2B}</h2>
              <p className="bt">{ABOUT_P2}</p>
            </div>
          </article>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — two white cards">
        <div className="about-cards about-cards-d">
          <article className="about-card about-card-plain">
            <h2 className="h2">{ABOUT_H2}</h2>
            <p className="bt">{ABOUT_P1}</p>
          </article>
          <article className="about-card about-card-plain">
            <span className="about-card-years about-card-years-dark">19+ Years Experience</span>
            <h2 className="h2">{ABOUT_H2B}</h2>
            <p className="bt">{ABOUT_P2}</p>
          </article>
        </div>
      </ConceptBlock>
    </>
  );
}

export function WhyConcepts() {
  return (
    <>
      <ConceptBlock label="Concept 1 — white grid">
        <div className="why-grid">
          {WHY_ITEMS.map((w) => (
            <div className="why-card" key={w.title}><h3>{w.title}</h3><p>{w.text}</p></div>
          ))}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — numbered cards">
        <div className="why-grid">
          {WHY_ITEMS.map((w, i) => (
            <div className="why-card why-card-num" key={w.title}>
              <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w.title}</h3><p>{w.text}</p>
            </div>
          ))}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — dark blocks">
        <div className="why-dark-grid">
          {WHY_ITEMS.map((w) => (
            <div className="why-dark-item" key={w.title}><h3>{w.title}</h3><p>{w.text}</p></div>
          ))}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — two column list">
        <ul className="why-list-cols">
          {WHY_ITEMS.map((w) => (
            <li key={w.title}><strong>{w.title}</strong><span>{w.text}</span></li>
          ))}
        </ul>
      </ConceptBlock>

      <ConceptBlock label="Concept 5 — timeline stack">
        <div className="why-timeline-split">
          <ul className="why-timeline">
            {WHY_ITEMS.map((w, i) => (
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
            <img src={QUALITY_IMG} alt="Luxury interior design Melbourne — Yara Luxe Interiors" loading="lazy" />
          </div>
        </div>
      </ConceptBlock>
    </>
  );
}

export function QualityConcepts() {
  const copy = (
    <>
      <p className="bt">When selecting the best interior designer Melbourne homeowners can rely on, it&apos;s important to look for a group that understands design and functionality.</p>
      <ul className="ul">
        {QUALITY_LIST.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );

  return (
    <>
      <ConceptBlock label="Concept 1 — text left, image right">
        <div className="two-col-img">
          <div><h3 className="h3-demo">We Focused on Quality &amp; detail in Melbourne</h3>{copy}</div>
          <div className="col-img"><img src={QUALITY_IMG} alt="" /></div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — image left">
        <div className="two-col-img two-col-reverse">
          <div className="col-img"><img src={QUALITY_IMG} alt="" /></div>
          <div><h3 className="h3-demo">We Focused on Quality &amp; detail in Melbourne</h3>{copy}</div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — dark split">
        <div className="quality-dark-split">
          <div><h3 className="h3-demo h3-light">We Focused on Quality &amp; detail in Melbourne</h3>{copy}</div>
          <div className="col-img"><img src={QUALITY_IMG} alt="" /></div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — image top, text below">
        <div className="quality-stack">
          <div className="quality-stack-img"><img src={QUALITY_IMG} alt="" /></div>
          <div><h3 className="h3-demo h3-center">We Focused on Quality &amp; detail in Melbourne</h3>{copy}</div>
        </div>
      </ConceptBlock>
    </>
  );
}

export function FaqConcepts({ faqs }) {
  return (
    <>
      <ConceptBlock label="Concept 1 — two column (current)">
        <FaqList items={faqs} className="faq-grid" />
      </ConceptBlock>
      <ConceptBlock label="Concept 2 — single column">
        <FaqList items={faqs} className="faq-single" />
      </ConceptBlock>
      <ConceptBlock label="Concept 3 — dark background">
        <div className="faq-dark-wrap">
          <FaqList items={faqs} className="faq-single faq-dark" />
        </div>
      </ConceptBlock>
    </>
  );
}

export function CtaConcepts() {
  const body = (
    <>
      <p className="cta-body">Collaborate with a Melbourne company specialising in luxurious interior layouts, functional furniture and evergreen interior designs that match your lifestyle.</p>
      <p className="cta-body">Make an appointment for your consultation today!</p>
    </>
  );
  const actions = (
    <div className="cta-actions">
      <Link href="/contact" className="btn-dark">Book a Free Consultation</Link>
      <Link href="/portfolio" className="btn-wa">View Our Projects</Link>
    </div>
  );

  return (
    <>
      <ConceptBlock label="Concept 1 — image background (current)">
        <div className="cta-demo cta-demo--1">
          <div className="cta-bg" /><div className="cta-overlay" />
          <div className="cta-content">
            <h2>Make the most out of your place with professional interior designers in Melbourne.</h2>
            {body}{actions}
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — solid dark">
        <div className="cta-demo cta-demo--2">
          <div className="cta-content">
            <h2>Make the most out of your place with professional interior designers in Melbourne.</h2>
            {body}{actions}
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — light cream">
        <div className="cta-demo cta-demo--3">
          <div className="cta-content">
            <h2>Make the most out of your place with professional interior designers in Melbourne.</h2>
            {body}
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/portfolio" className="btn-outline-dark">View Our Projects</Link>
            </div>
          </div>
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — split layout">
        <div className="cta-demo cta-demo--4">
          <div className="cta-split">
            <div>
              <h2>Professional interior designers in Melbourne.</h2>
              {body}
            </div>
            <div className="cta-split-actions">{actions}</div>
          </div>
        </div>
      </ConceptBlock>
    </>
  );
}

export function AreasConcepts({ areas, intro, outro }) {
  return (
    <>
      <ConceptBlock label="Concept 1 — map + grid (current)">
        <div className="areas-layout">
          <div className="map-wrap">
            <iframe src={MAP_EMBED} title="Yara Luxe Interiors map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="areas-grid">
            {areas.map(([name, post]) => {
              const href = AREA_URLS[name];
              const inner = <><span className="an">{name}</span><span className="ap">{post}</span></>;
              return href
                ? <Link className="area-item" href={href} key={name}>{inner}</Link>
                : <div className="area-item" key={name}>{inner}</div>;
            })}
          </div>
        </div>
        {outro ? <p className="bt" style={{ marginTop: 32 }}>{outro}</p> : null}
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — grid only">
        <div className="areas-grid areas-grid-full">
          {areas.map(([name, post]) => {
            const href = AREA_URLS[name];
            const inner = <><span className="an">{name}</span><span className="ap">{post}</span></>;
            return href
              ? <Link className="area-item" href={href} key={name}>{inner}</Link>
              : <div className="area-item" key={name}>{inner}</div>;
          })}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — simple two columns">
        <ul className="areas-simple-cols">
          {areas.map(([name, post]) => (
            <li key={name}><span>{name}</span><em>{post}</em></li>
          ))}
        </ul>
      </ConceptBlock>

      <ConceptBlock label="Concept 4 — dark strip list">
        <div className="areas-dark-strip">
          {areas.map(([name, post]) => (
            <span key={name}>{name} <em>{post}</em></span>
          ))}
        </div>
        <p className="bt" style={{ marginTop: 24 }}>{intro}</p>
      </ConceptBlock>
    </>
  );
}

export function ServiceCardD({ s }) {
  return (
    <Link className="svc-card-d" href={s.href}>
      <img src={`${U}/${s.img}`} alt="" />
      <div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
        <span>View service →</span>
      </div>
    </Link>
  );
}

export function DetailServiceConcepts({ services }) {
  const sample = services.slice(0, 3);
  return (
    <>
      <ConceptBlock label="Concept 1 — dark exp cards (current)">
        <div className="cards-grid">
          {sample.map((s, i) => (
            <div className="exp-card" key={s.href}>
              <span className="exp-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="exp-card-title"><Link href={s.href}>{s.title}</Link></div>
              <p className="exp-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 2 — light bordered cards">
        <div className="detail-light-grid">
          {sample.map((s) => (
            <Link className="detail-light-card" href={s.href} key={s.href}>
              <img src={`${U}/${s.img}`} alt="" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </ConceptBlock>

      <ConceptBlock label="Concept 3 — horizontal rows">
        <div className="detail-rows">
          {sample.map((s) => (
            <Link className="detail-row" href={s.href} key={s.href}>
              <img src={`${U}/${s.img}`} alt="" />
              <div><h3>{s.title}</h3><p>{s.desc}</p></div>
            </Link>
          ))}
        </div>
      </ConceptBlock>
    </>
  );
}
