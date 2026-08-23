import Link from "next/link";
import FaqList from "@/components/FaqList";
import BookingBar from "@/components/BookingBar";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { MAP_EMBED } from "@/lib/data";
import { LOCATIONS } from "@/lib/schema/location-service";
import { AREA_URLS, RESIDENTIAL_SERVICE_KEYS, SERVICE_LINKS, SERVICE_URLS } from "@/lib/urls";

/** Same suburbs as the homepage — only location pages that exist. */
export function getPublishedAreaItems(excludeSuburb = "") {
  return LOCATIONS.filter(
    (loc) => AREA_URLS[loc.suburb] && loc.suburb !== excludeSuburb
  ).map((loc) => [loc.suburb, loc.postcode]);
}

export function LocationHero({ eyebrow, title, desc }) {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="hero-desc">{desc}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href={SERVICE_URLS.residential} className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>
      <BookingBar />
    </>
  );
}

export function AreasWeServe({
  title = "Areas We Serve",
  intro,
  excludeSuburb = "",
  bg = "#fff",
  outro
}) {
  const items = getPublishedAreaItems(excludeSuburb);

  return (
    <section className="sp" style={{ background: bg }}>
      <div className="sec-center">
        <h2 className="h2">{title}</h2>
        {intro ? <p className="bt" style={{ maxWidth: 700 }}>{intro}</p> : null}
      </div>
      <div className="areas-layout">
        <div className="map-wrap">
          <iframe src={MAP_EMBED} title="Yara Luxe Interiors map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="areas-grid">
          {items.map(([name, post]) => (
            <Link className="area-item" href={AREA_URLS[name]} key={name}>
              <span className="an">{name}</span>
              <span className="ap">{post}</span>
            </Link>
          ))}
        </div>
      </div>
      {outro ? <p className="bt" style={{ marginTop: 32 }}>{outro}</p> : null}
    </section>
  );
}

export function LocationServiceLinks({ includeCommercial = false, includeSupervision = true }) {
  const keys = new Set(RESIDENTIAL_SERVICE_KEYS);
  if (includeCommercial) keys.add("commercial");
  if (includeSupervision) keys.add("supervision");
  const items = SERVICE_LINKS.filter((service) => keys.has(service.key));

  return (
    <section className="sp loc-services" style={{ background: "#fff" }}>
      <div className="sec-center">
        <h2 className="h2">Interior Design Services</h2>
        <p className="bt" style={{ maxWidth: 700 }}>
          Related design services we provide for homes in this area — from first consultation through to a finished interior.
        </p>
      </div>
      <div className="svc-grid loc-svc-links">
        {items.map((service, i) => (
          <Link className="svc-item" href={service.href} key={service.href}>
            <span className="sn">{String(i + 1).padStart(2, "0")}</span>
            <span className="st">{service.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function LocationFaqCta({ faqs, ctaTitle, ctaBody, faqBg = "var(--yl-light)", extraCta, includeCommercial = false, showServices = true }) {
  return (
    <>
      {showServices ? <LocationServiceLinks includeCommercial={includeCommercial} /> : null}
      <HomeGoogleReviews />
      <section className="sp" style={{ background: faqBg }}>
        <div className="sec-center faq-sec-head"><h2 className="h2">Frequently Asked Questions</h2></div>
        <FaqList items={faqs} />
      </section>
      <section className="cta-sec">
        <div className="cta-bg" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>{ctaTitle}</h2>
          <p className="cta-body">{ctaBody}</p>
          <div className="cta-actions">
            {extraCta ? (
              <Link href={extraCta.href} className="btn-dark">{extraCta.label}</Link>
            ) : null}
            <a href="tel:0433211875" className="btn-dark">Call 0433 211 875</a>
          </div>
        </div>
      </section>
    </>
  );
}
