import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { OUR_SERVICES_BANNER } from "@/lib/data";

export default function OurServiceChild({ title, heading, schema, paragraphs }) {
  return (
    <div className="our-svc our-svc-child">
      <JsonLd data={schema} />
      <PageHero
        title={title}
        image={OUR_SERVICES_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/our-services", label: "Our Services" },
          { label: title }
        ]}
      />
      <section className="our-svc-child-body">
        <div className="container">
          <span className="ot-kicker">[ what we offer ]</span>
          <h2 className="ot-title">{heading}</h2>
          {paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
          <div className="mt-40">
            <Link className="octf-btn octf-btn-dark" href="/contact">Start Your Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
