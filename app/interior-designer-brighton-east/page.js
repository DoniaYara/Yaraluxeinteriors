import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Brighton East | Yara Luxe",
  description: "Interior designer in Brighton East for renovations, new builds and complete homes. Get bespoke, functional design tailored to your lifestyle."
}, "/interior-designer-brighton-east");

export default function BrightonEastPage() {
  return (
    <div className="ylp loc-kit-b">
      <JsonLd data={locationPageGraph("/interior-designer-brighton-east")} />
      <LocationHero
        eyebrow="Interior Designer Brighton East"
        title="Interior Designer Brighton East 3187"
        desc="Sophisticated Interior Design for Brighton East Homes. At Yara Luxe, we design interiors that are sophisticated and relaxed — functional, elegant and designed for modern living."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Creating for Today's Living Ways</h2>
            <p className="bt">How families utilize their homes is quite different from what it used to be. Today's lifestyle demands rooms that can be used for work, rest, entertaining and family life.</p>
            <ul className="ul">
              <li>Better connections between living zones</li>
              <li>Improved functionality throughout the home</li>
              <li>Flexible spaces that evolve with changing needs</li>
              <li>Stronger indoor-outdoor integration</li>
              <li>Up-to-date designs that will last for years.</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/kitchen-renovation-melbourne.webp`} alt={fileAlt("2026/06/kitchen-renovation-melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Why Brighton East Properties Present Unique Opportunities</h2>
        <p className="dark-body">Brighton East has larger homes for families, more space on blocks and a focus on lifestyle living. It mixes period-style houses, architect-designed houses and modern family houses.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Family-Oriented Homes</div><p className="cdesc">Better zoning, circulation, and living areas in larger homes.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Contemporary Residences</div><p className="cdesc">Interior choices that improve the design of today's homes.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Renovated Character Homes</div><p className="cdesc">Old-world charm combined with modern needs.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">New Luxury Builds</div><p className="cdesc">Planning-stage input for a more cohesive, elegant result.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Where Interior Design Creates the Greatest Impact</h2>
        <div className="impact-grid">
          <div className="impact-card"><h3>Living Zones, Entertaining Zones</h3><p>Welcoming places suitable for family and social use.</p></div>
          <div className="impact-card"><h3>Kitchen-Centred Living</h3><p>Kitchens as the central area of the house, planned smartly.</p></div>
          <div className="impact-card"><h3>Private Retreats</h3><p>Bedrooms and ensuites that are comfortable and relaxing.</p></div>
          <div className="impact-card"><h3>Work and Study Spaces</h3><p>Dedicated areas for productivity without compromising the rest of the home.</p></div>
          <div className="impact-card"><h3>Indoor-Outdoor Flow</h3><p>Better integration of outdoor entertaining with indoor living.</p></div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">A Design Process Built Around Clarity</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Understanding Your Goals</div><p className="step-d">Lifestyle, priorities and vision first.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Identifying Opportunities</div><p className="step-d">Evaluate current use and areas for enhancement.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Creating a Design Direction</div><p className="step-d">A vision that is both clear and coherent.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Refining the Details</div><p className="step-d">Layouts, materials, finishes coordinated.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Bringing Everything Together</div><p className="step-d">Functional, cohesive, and distinctive.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Brighton East Homeowners Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Experience With Large Family Homes</h3><p>Roomy homes that connect, feel comfortable and function well.</p></div>
          <div className="why-card"><h3>Lifestyle-Focused Design Thinking</h3><p>Designed around modern families, not the latest fashions.</p></div>
          <div className="why-card"><h3>Attention for Spatial Planning</h3><p>Layouts that make the most of all the spaces.</p></div>
          <div className="why-card"><h3>Comprehensive and Elegant Solutions</h3><p>Beauty with practicality for a well-balanced interior.</p></div>
          <div className="why-card"><h3>Collaborative Client Experience</h3><p>Communication throughout so every decision matches the desired outcome.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>Interiors that stay functional, elegant and relevant.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Design Influences Popular in Brighton East</h2>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Coastal Contemporary</div><p className="scd">Relaxed bayside Melbourne ambiance.</p></div>
          <div className="style-card"><div className="sct">Modern Family Luxury</div><p className="scd">Comfort, durability, and everyday living.</p></div>
          <div className="style-card"><div className="sct">Organic Modern</div><p className="scd">Natural materials and neutral colour schemes.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Architectural Minimalism</div><p className="scd">Clean lines that accentuate architecture.</p></div>
          <div className="style-card"><div className="sct">Timeless Transitional Design</div><p className="scd">A combination of old and new that will continue to appeal.</p></div>
        </div>
      </section>

      <AreasWeServe
        intro="Yara Luxe's interior design services, in addition to Brighton East 3187, cover Melbourne's inner eastern and bayside suburbs, including:"
        items={[["Brighton","3186"],["Hampton","3188"],["Hampton East","3188"],["Elwood","3184"],["St Kilda","3182"],["Albert Park","3206"],["Caulfield","3162"],["Malvern","3144"],["Armadale","3143"],["Toorak","3142"],["South Yarra","3141"],["Bentleigh","3204"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Why is Brighton East popular for family-focused interior design projects?", a: "Larger homes, developed communities and a family-friendly environment enable better function, living areas and indoor-outdoor connection." },
          { q: "Which designs are best for Brighton East homes?", a: "Coastal contemporary, modern luxury and organic modern interiors suit large houses and bayside living." },
          { q: "Is there a way to enhance older Brighton East homes with interior design?", a: "Yes. Layout, look and organisation can be remodelled while retaining original features." },
          { q: "Why must there be indoor/outdoor flow in Brighton East properties?", a: "Ample gardens, courtyards and entertaining areas benefit from stronger interior-exterior relationships." },
          { q: "Would it be helpful to have an interior designer's input before starting new construction?", a: "Yes. Early engagement informs layout, finishes, lighting and spatial planning." },
          { q: "What can interior design offer a Brighton East property?", a: "Easier use, better cohesion, and long-term appeal as well as day-to-day enjoyment." }
        ]}
        ctaTitle="Design your home to suit your lifestyle"
        ctaBody="From upgrading a home for a growing family to remodelling a character home or designing a new build, Yara Luxe helps bring your ideas to life for Brighton East living."
      />
    </div>
  );
}
