import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import { FAQ_BANNER, PAGE_FAQS, U } from "@/lib/data";
import { faqsPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

export const metadata = withPageSeo({ title: "FAQs – Yara Luxe Interiors" }, "/faqs");

export default function FaqsPage() {
  return (
    <div className="faqs-page">
      <JsonLd data={faqsPageGraph()} />
      <PageHero
        title="FAQs"
        image={FAQ_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "FAQs" }
        ]}
      />

      <section className="faqs-list">
        <div className="container">
          <div className="quotes-head faqs-page-head">
            <span className="ot-kicker">[ FAQ`s ]</span>
            <h2 className="ot-title">Most Popular Questions</h2>
          </div>
          <FaqList items={PAGE_FAQS} className="about-acc" />
        </div>
      </section>

      <section className="faqs-cta" style={{ backgroundImage: `url('${U}/2020/05/bg1-home1.jpg')` }}>
        <div className="container faqs-cta-grid">
          <div>
            <h2>Get Incredible Interior Design Right Now!</h2>
            <p>At every stage, we could supervise your project – controlling all the details and consulting the builders.</p>
          </div>
          <div className="faqs-cta-btn">
            <Link className="octf-btn octf-btn-light" href="/contact">get in touch</Link>
          </div>
        </div>
      </section>

      <section className="faqs-spacer" style={{ backgroundImage: `url('${U}/2020/06/bg3-home2.png')` }} />
    </div>
  );
}
