import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqList from "@/components/FaqList";
import { AREA_PAGES, MAP_EMBED, U } from "@/lib/data";
import { SERVICE_URLS } from "@/lib/urls";
import { testHomepageGraph } from "@/lib/schema";

const FAQS = [
  { q: "How much does interior design cost in Melbourne?", a: "The prices of interior design Melbourne services vary according to the project size, design scope, finishes, furniture choices and styling needs. We offer customized consultation according to your project objectives." },
  { q: "Is residential & commercial interior design your speciality?", a: "Yes. We have projects in Melbourne in homes, apartments, offices, retail spaces, hospitality projects and commercial interiors." },
  { q: "Do you have an in-house styling programme?", a: "Absolutely. Furniture sourcing, colour consultancy, décor styling, lighting concepts and finishing touches are all included in our interior styling Melbourne service." },
  { q: "Are you willing to work on the renovations and layout design?", a: "Yes. Space planning, space renovations, interior decorating and functional layout ideas for your property." },
  { q: "What's the duration of an interior design project?", a: "Project timelines can be different from one project to the next based on scope and complexity. In smaller projects, it might take a couple of weeks; for a complete overhaul, the time frame may be several months." }
];

const POSTCODES = {
  Toorak: "3142", Brighton: "3186", "Brighton East": "3187", Balwyn: "3103", Canterbury: "3126",
  "South Yarra": "3141", Kew: "3101", Hawthorn: "3122", "Balwyn North": "3104", Camberwell: "3124",
  "Mont Albert": "3127", "Albert Park": "3206", Elwood: "3184", Armadale: "3143", Malvern: "3144",
  Prahran: "3181", Templestowe: "3106"
};

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

const WHY = [
  { title: "Tailored Design Solutions", text: "Each project is tailored to suit your home style, lifestyle requirements, spatial requirements and design preferences." },
  { title: "Luxury Interiors With Functional Living", text: "We create interiors that combine elegant aesthetics with practical layouts designed for comfortable everyday living." },
  { title: "Experienced Designers in Melbourne", text: "Our team has 19+ years of industry experience in design and decoration and offers high-end residences and commercial interiors in Melbourne." },
  { title: "Full-Service Interior Design Studio", text: "Whether it's space planning, furniture, colour, lighting, styling or finishes, we handle all the details with ease." },
  { title: "Residential & Commercial Interior Expertise", text: "Our design services Melbourne clients can rely on include homes, apartments, offices, retail and hospitality interior design." }
];

const LOCAL_AREAS = AREA_PAGES.map(({ name, href }) => ({
  name,
  href,
  post: POSTCODES[name] || ""
}));

function ServiceCard({ s }) {
  return (
    <article className="svc-card-a">
      <Link href={s.href} className="svc-card-a-link">
        <div className="svc-card-a-img">
          <img src={`${U}/${s.img}`} alt={s.title} loading="lazy" />
        </div>
        <div className="svc-card-a-body">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <span className="svc-card-link">View service</span>
        </div>
      </Link>
    </article>
  );
}

export default function SeoPageFinal() {
  return (
    <div className="ylp test-home-seo seo-final">
      <JsonLd data={testHomepageGraph()} />

      <section className="hero" aria-label="Best interior designer in Melbourne">
        <video className="hero-desk" autoPlay muted loop playsInline preload="metadata" poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}>
          <source src={`${U}/2025/07/NEW-video-for-DESKTOP.mp4`} type="video/mp4" />
        </video>
        <video className="hero-mob" autoPlay muted loop playsInline preload="metadata" poster={`${U}/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg`}>
          <source src={`${U}/2025/07/NEW-video-for-MOBILE.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Best Interior Designer in Melbourne</h1>
          <p className="hero-desc">Design a sophisticated, practical and enduring environment for Melbourne interior designers who specialise in luxury residential and commercial interiors for modern living.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
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

      <section className="home-page home-benefits seo-about" id="about">
        <div className="container seo-about-row">
          <div className="seo-about-intro">
            <span className="ot-kicker">[ about us ]</span>
            <h2 className="ot-title">Luxury Interior Designers Melbourne</h2>
            <div className="seo-about-badge">
              <span className="seo-about-badge-num">19+</span>
              <span className="seo-about-badge-label">Years Experience</span>
            </div>
          </div>
          <article className="seo-about-card">
            <span className="seo-about-card-num">01</span>
            <p>At Yara Luxe we create elegant designs with a focus on comfort, function and elegance. Melbourne homeowners and business clients rely on interior designers who excel at creating a beautiful, modern, functional and timeless interior for any home, apartment, office or commercial space.</p>
          </article>
          <article className="seo-about-card">
            <span className="seo-about-card-num">02</span>
            <h3>About Us</h3>
            <p>Our team has 19+ years of industry experience to provide you with personalised design Melbourne solutions to suit your lifestyle, property and vision. Whether you&apos;re looking for luxury living rooms, modern interiors or professional Interior Styling Melbourne services, each project is meticulously planned with detail and high-quality finishes and designed with a cohesive concept.</p>
          </article>
        </div>
      </section>

      <section className="sp" id="why-us" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why choose our interior design company in Melbourne?</h2>
        <p className="bt">Clients in Melbourne trust us as a reputable design company, and we work to ensure that the interiors we design not only look impressive but also enhance the way they live, work and enjoy their interior space daily.</p>
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
            <img src={`${U}/2026/06/Interior-Design-Excellence.webp`} alt="Luxury interior design Melbourne — Yara Luxe Interiors" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="sp test-home-services" id="services" style={{ background: "#fff" }}>
        <h2 className="h2">Our interior design services Melbourne</h2>
        <p className="bt">Our customised design solutions are designed to improve functionality, comfort, and timeless beauty. Whether it&apos;s an interior fit-out or a new build project, Yara Luxe Interiors provides custom designs that are based on your lifestyle, vision and space.</p>
        <div className="svc-cards svc-cards-final">
          {SERVICES.map((s) => <ServiceCard key={s.href} s={s} />)}
        </div>
      </section>

      <section className="sp" id="quality" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">We Focused on Quality &amp; detail in Melbourne</h2>
            <p className="bt">When selecting the best interior designer Melbourne homeowners can rely on, it&apos;s important to look for a group that understands design and functionality. We know that at Yara Luxe Interiors, every space must be visually refined, and once you set up, it needs to enhance how you live and work in your space on a daily basis.</p>
            <p className="bt">Our interior designer services are crafted to bring about the following:</p>
            <ul className="ul">
              <li>warm and inviting homes</li>
              <li>elegant luxury interiors</li>
              <li>functional commercial spaces</li>
              <li>modern apartment styling</li>
              <li>timeless interior environments</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Whether you&apos;re looking for a complete overhaul or just a stylistic refresh, we can design interiors that will be beautiful, comfortable and productive for years to come.</p>
          </div>
          <div className="col-img">
            <img src={`${U}/2026/06/Interior-Design-Excellence.webp`} alt="Quality interior design Melbourne — Yara Luxe Interiors" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="sp" id="faq" style={{ background: "#fff" }}>
        <div className="sec-center"><h2 className="h2">Frequently Asked Questions</h2></div>
        <FaqList items={FAQS} className="faq-single" />
      </section>

      <section className="cta-sec" id="contact-cta" aria-label="Book a Free Consultation">
        <div className="cta-bg" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Make the most out of your place with professional interior designers in Melbourne.</h2>
          <p className="cta-body">Collaborate with a Melbourne company specialising in luxurious interior layouts, functional furniture and evergreen interior designs that match your lifestyle.</p>
          <p className="cta-body">Make an appointment for your consultation today!</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-dark">Book a Free Consultation</Link>
            <Link href="/portfolio" className="btn-wa">View Our Projects</Link>
          </div>
        </div>
      </section>

      <section className="sp" id="areas" style={{ background: "var(--yl-light)" }}>
        <div className="sec-center">
          <h2 className="h2">Areas We Serve Across Melbourne</h2>
          <p className="bt" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            Yara Luxe Interiors is proud to offer top-notch interior design Melbourne services throughout some of Melbourne&apos;s most sought-after suburbs. From a full-scale home makeover to styling an apartment, our team brings personalised design solutions, creativity, attention to detail and timeless aesthetics.
          </p>
        </div>
        <div className="seo-local-nap">
          <p><strong>Yara Luxe Interiors</strong> — 853 Nepean Hwy, Bentleigh VIC 3204</p>
          <p>
            <a href="tel:0433211875">0433 211 875</a>
            {" · "}
            <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
          </p>
        </div>
        <div className="areas-layout">
          <div className="map-wrap">
            <iframe src={MAP_EMBED} title="Yara Luxe Interiors — interior designer Melbourne map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="areas-grid">
            {LOCAL_AREAS.map(({ name, href, post }) => (
              <Link className="area-item area-item-link" href={href} key={href}>
                <span className="an">{name}</span>
                {post ? <span className="ap">{post}</span> : null}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
