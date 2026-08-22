import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { CONTACT_BANNER } from "@/lib/data";

export default function LegalPage({ title, graph, children }) {
  return (
    <div className="legal-page">
      <JsonLd data={graph} />
      <PageHero
        title={title}
        image={CONTACT_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: title }
        ]}
      />
      <section className="legal-body">
        <div className="container">
          <article className="legal-wrap">{children}</article>
        </div>
      </section>
    </div>
  );
}

export function LegalUpdated() {
  return <p className="legal-updated">Last updated: 21 August 2026</p>;
}

export function StudioAddress() {
  return (
    <p>
      853 Nepean Hwy
      <br />
      Bentleigh VIC 3204
      <br />
      Australia
    </p>
  );
}

export function LegalContactBlock() {
  return (
    <>
      <p>Yara Luxe Interiors Pty Ltd</p>
      <StudioAddress />
      <p>
        Email:{" "}
        <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
      </p>
      <p>
        Phone: <a href="tel:+61433211875">+61 433 211 875</a>
      </p>
    </>
  );
}
