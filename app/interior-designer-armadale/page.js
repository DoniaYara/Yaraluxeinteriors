import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Armadale | Yara Luxe",
  description: "Interior designer in Armadale creating bespoke interiors for renovations, new builds and complete homes. Refined design tailored to the way you live."
}, "/interior-designer-armadale");

export default function ArmadalePage() {
  return (
    <div className="ylp loc-sup-b">
      <JsonLd data={locationPageGraph("/interior-designer-armadale")} />
      <LocationHero
        eyebrow="Interior Designer Armadale 3143"
        title="Interior Designer Armadale"
        desc="Luxury Interior Design for Armadale's Most Distinctive Homes. At Yara Luxe, we create interiors that reflect the elegance, sophistication, and individuality that define Armadale living."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Designed for the Armadale Lifestyle</h2>
            <p className="bt">Armadale is one of Melbourne's most well-known residential localities, known for its heritage architecture, boutique retail precincts, leafy streets and elegant ambience. Many properties have Victorian and Edwardian characteristics and may incorporate modern additions — interesting possibilities for imaginative interior design.</p>
            <p className="bt">We are dedicated to interior design that respects the architectural style of a building and the tastes of its residents.</p>
          </div>
          <OptImage src={`${U}/2026/06/supervision3.webp`} alt={fileAlt("2026/06/supervision3.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/supervision6.webp`} alt={fileAlt("2026/06/supervision6.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">When Good Design Goes Beyond Appearance</h2>
            <p className="bt">While beautiful interiors are essential, it's equally crucial to have a space that also enhances functionality. Advanced interior design can assist:</p>
            <ul className="ul">
              <li>Improve spatial flow</li>
              <li>Maximise natural light</li>
              <li>Increase storage efficiency</li>
              <li>Enhance connections between rooms</li>
              <li>Improve comfort and ease of use</li>
              <li>Provide long-term property values.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Interior Design for Every Stage of Homeownership</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Renovating a Period Home</div><p className="cdesc">We help bring modern living needs in without compromising the character of the home.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Updating a Family Residence</div><p className="cdesc">Layout, storage and flexibility redesigned for a changing lifestyle.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Furnishing a New Home</div><p className="cdesc">Build a unified space from the start.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Preparing an Investment Property</div><p className="cdesc">Presentation, function and market appeal enhanced through strategic improvement.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Signature Elements of Exceptional Interiors</h2>
        <div className="sig-grid">
          <div className="sig-card"><h3>Intelligent Space Planning</h3><p>A home that is designed well is easy to live in and easy to love.</p></div>
          <div className="sig-card"><h3>Bespoke Joinery</h3><p>Custom cabinetry and storage that maximise function and aesthetics.</p></div>
          <div className="sig-card"><h3>Layered Lighting</h3><p>Ambient, task and feature lighting for warmth, depth and versatility.</p></div>
          <div className="sig-card"><h3>Curated Furnishings</h3><p>Furniture that fits the architecture and the use of a space.</p></div>
          <div className="sig-card"><h3>Material Harmony</h3><p>Finishes chosen to give consistency throughout the house.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Armadale Homeowners Work With Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Tailored Design Direction</h3><p>Every project starts with the client's vision and lifestyle needs.</p></div>
          <div className="why-card"><h3>Refined Attention to Detail</h3><p>The smallest design decisions make the biggest difference.</p></div>
          <div className="why-card"><h3>Collaborative Approach</h3><p>The client is included so the design is never generic or impersonal.</p></div>
          <div className="why-card"><h3>Practical Luxury</h3><p>Elegance and utility are brought together.</p></div>
          <div className="why-card"><h3>End-to-End Guidance</h3><p>From initial ideas through to styling.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>Confidence across different styles and complexities.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Design Styles Popular in Armadale</h2>
        <p className="bt">A combination of traditional and modern architecture and lifestyle.</p>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Contemporary Luxury</div><p className="scd">High-quality materials and attention to detail.</p></div>
          <div className="style-card"><div className="sct">Transitional Design</div><p className="scd">Historic character meeting contemporary needs.</p></div>
          <div className="style-card"><div className="sct">European-Inspired Interiors</div><p className="scd">Classic proportions, texture and craftsmanship.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Minimalist Luxury</div><p className="scd">Clean lines, curation, and quality materials.</p></div>
          <div className="style-card"><div className="sct">Modern Classic</div><p className="scd">A timeless blend of classic and contemporary.</p></div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation and Discovery</div><p className="step-d">Get to know your goals, challenges and aspirations.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Creation</div><p className="step-d">Ideas, mood boards and layouts set creative direction.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Design Development</div><p className="step-d">Elements are polished into a unified design plan.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Collaboration</div><p className="step-d">We collaborate with builders, suppliers and contractors.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Styling and Completion</div><p className="step-d">Furnishings, decor and accents wrap up the transformation.</p></div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Armadale"
        intro="Interior design services are available for Armadale 3143, as well as luxurious inner-east and bayside suburbs including:"
      />

      <LocationFaqCta
        faqs={[
          { q: "How do I know if my home would benefit from an interior designer?", a: "When you're struggling with layout, material choices, or a cohesive look, professional design brings clarity and confidence." },
          { q: "How can you modernise an old house without destroying its character?", a: "Original features and contemporary finishes are carefully balanced with living requirements." },
          { q: "What is the most significant thing about having an interior designer before you renovate?", a: "Early involvement sets the tone before construction and frequently minimises expensive modifications." },
          { q: "Can you design around pieces I already own?", a: "Yes. Furnishings, artwork and heirlooms can be integrated into a fresh, cohesive design." },
          { q: "Why is Armadale such a unique suburb for interior design projects?", a: "Historic houses, boutique residences and architectural interest allow flexible, history-sensitive solutions." }
        ]}
        ctaTitle="Create a Home That Reflects Your Lifestyle"
        ctaBody="Yara Luxe offers custom interior design whether you're renovating, upgrading an original residence or designing a luxury home from scratch."
      />
    </div>
  );
}
