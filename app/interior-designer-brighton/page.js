import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Brighton | Yara Luxe",
  description: "Interior designer in Brighton for luxury bayside homes, heritage renovations and new builds. Bespoke interiors backed by 19+ years of experience."
}, "/interior-designer-brighton");

export default function BrightonPage() {
  return (
    <div className="ylp loc-kit">
      <JsonLd data={locationPageGraph("/interior-designer-brighton")} />
      <LocationHero
        eyebrow="Creating Beautiful Interiors for Brighton's Bayside Lifestyle"
        title="Interior Designer Brighton"
        desc="Throughout Brighton 3186, homeowners can look forward to designing beautiful, functional and personalised interiors to match the relaxed sophistication of Melbourne's premier bayside suburb, with the help of Yaraluxe."
      />

      <section className="dark-sp">
        <h2 className="h2w">Why Brighton Homeowners Work With Yaraluxe</h2>
        <p className="dark-body">Brighton is a diverse place, from heritage homes and Victorian properties through to architect-designed luxury properties with views of Port Phillip Bay. This variety demands an interior designer who knows architectural integrity and contemporary lifestyle needs.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Personalised design strategies</div><p className="cdesc">Interiors that feel timeless rather than trend-driven — tailored to your property and lifestyle.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Luxury residential expertise</div><p className="cdesc">Full project coordination, renovation design guidance and new build interior planning from concept through to completion.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Interior decoration and design</div><p className="cdesc">Proven industry experience and attention to detail at every stage of design and implementation.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Homeowners select Yaraluxe because we offer:</div><p className="cdesc">Personalised design, luxury residential expertise, full project coordination, renovation guidance, new build planning, decoration and proven experience.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">19 Years Designing Homes Across Melbourne</h2>
            <p className="bt">When designing a luxury residential property, experience also has an important part to play.</p>
            <p className="bt">With more than 19 years of interior design experience, our designers assist homeowners in many design decisions relating to:</p>
            <ul className="ul">
              <li>Space planning</li>
              <li>Interior architecture</li>
              <li>Furniture selection</li>
              <li>Colour palettes</li>
              <li>Lighting design</li>
              <li>Custom joinery</li>
              <li>Material specification</li>
              <li>Renovation planning</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We know what to look out for and create interiors that will last a long time and look great.</p>
          </div>
          <OptImage src={`${U}/2026/06/kitchen-interior-design.webp`} alt={fileAlt("2026/06/kitchen-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior Design Solutions Available in Brighton 3186</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Residential Interior Design — Spaces that reflect your family's lifestyle, daily lives and needs into the future.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Full Home Interior Design — Entryways to living areas, kitchens, bedrooms, bathrooms and outdoor entertaining with a cohesive feel.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">New Build Interior Design — We help builders and architects with every interior decision for a new home.</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Interior Decorating & Styling — Furniture, art, rugs, lights and accents selected to give each room unique character.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Interior Design Consultation — Layouts, finishes, colour schemes, furniture and renovation planning.</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Project Supervision — We monitor implementation so design elements are properly carried out.</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/kitchen-designers-melbourne.webp`} alt={fileAlt("2026/06/kitchen-designers-melbourne.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">Interior Design Inspired by Brighton's Coastal Character</h2>
            <p className="bt">Residing in Brighton 3186 is a distinctive experience and offers a blend of luxury living with relaxed bayside vibes.</p>
            <span className="lbl">When designing the interior of the home, many homeowners want it to reflect the following:</span>
            <ul className="ul">
              <li>Natural light</li>
              <li>Coastal influences</li>
              <li>Open-plan living</li>
              <li>Indoor-outdoor connection</li>
              <li>Entertaining spaces</li>
              <li>Family functionality</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Popular Interior Styles for Brighton Homes</h2>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Coastal Luxury</div><p className="scd">Natural materials, soft textures and relaxed elegance.</p></div>
          <div className="style-card"><div className="sct">Contemporary Design</div><p className="scd">Clean lines, high-quality finishes and functional living spaces.</p></div>
          <div className="style-card"><div className="sct">Hampton-Inspired Interiors</div><p className="scd">A mix of traditional and contemporary features, popular across Brighton.</p></div>
          <div className="style-card"><div className="sct">Modern Minimalism</div><p className="scd">Clear, clean spaces with simple, functional designs and quality materials.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Transitional Interiors</div><p className="scd">A fusion of old and new architecture and design.</p></div>
          <div className="style-card"><div className="sct">Scandinavian & Japandi Design</div><p className="scd">Soothing, high-quality natural materials and craftsmanship.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Bespoke Joinery & Storage Design</h2>
            <p className="bt">Ideally, storage should be natural and not an add-on.</p>
            <span className="lbl">Some of our custom design solutions are:</span>
            <ul className="ul">
              <li>Walk-in robes</li>
              <li>Wardrobe systems</li>
              <li>Entertainment units</li>
              <li>Home office cabinetry</li>
              <li>Kitchen storage</li>
              <li>Laundry solutions</li>
              <li>Library shelving</li>
              <li>Display cabinetry</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Colour, Finishes & Material Selection</h2>
            <p className="bt-w">Finishes are paramount in any interior project and play a critical role in making them harmonious.</p>
            <p className="bt-w">Our designers help you with:</p>
            <ul className="ul-dark">
              <li>Paint colours</li>
              <li>Flooring materials</li>
              <li>Stone selections</li>
              <li>Cabinet finishes</li>
              <li>Hardware selection</li>
              <li>Lighting specifications</li>
              <li>Textile coordination</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}>
          <h2 className="h2">Why Professional Interior Design Adds Value</h2>
          <p className="bt" style={{ maxWidth: 700 }}>Professional design is not all about looks.</p>
        </div>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Property value</h3><p>One of the most valuable investments many homeowners can make for a Brighton renovation or new house.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Functionality</h3><p>Storage efficiency and flow between spaces improved through thoughtful planning from the outset.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Natural light utilisation</h3><p>Clever layout and material choices create brighter, more inviting living spaces.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>Renovation outcomes</h3><p>Professional guidance reduces costly mistakes and aligns decisions with your long-term vision.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Long-term liveability</h3><p>Interiors that continue to function beautifully — timeless rather than trend-driven.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of designing premium interiors across Melbourne's bayside suburbs.</p></div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Collaborative Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Discovery Consultation</div><p className="step-d">Knowing your objectives, way of life and property needs.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Designing layouts, mood boards and design directions.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Detailed Design Planning</div><p className="step-d">Selection of materials, furniture specifications and documentation.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Implementation Support</div><p className="step-d">Cooperating with builders and suppliers.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling</div><p className="step-d">Furnishing, decorating, accessorising and finishing the home.</p></div>
        </div>
      </section>

      <AreasWeServe
        title="Serving Brighton 3186 & Surrounding Bayside Suburbs"
        intro="Yaraluxe proudly works with homeowners throughout the following:"
        items={[["Brighton","3186"],["Brighton East","3187"],["Hampton","3188"],["Sandringham","3191"],["Elwood","3184"],["Albert Park","3206"],["Toorak","3142"],["South Yarra","3141"],["Armadale","3143"],["Malvern","3144"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Do you provide interior design services throughout Brighton 3186?", a: "Yes. Yaraluxe caters to all homeowners in Brighton and the Bayside neighbourhood." },
          { q: "Can you assist with luxury beachfront properties?", a: "Absolutely. We provide interior design on a regular basis for high-end residences and luxury homes across Brighton." },
          { q: "Do you work on renovations?", a: "Yes. We offer renovation design, choosing materials, interior design and supervision of the project." },
          { q: "Can you help with new homes?", a: "Yes. Our new-build interior design service enables informed decisions during the planning phase." },
          { q: "What makes Yaraluxe different?", a: "Individual interiors for every client and property, luxury residential expertise and over 19 years of experience." }
        ]}
        ctaTitle="Start Your Brighton Interior Design Journey"
        ctaBody="From beachfront homes to family houses to luxury renovations, Yaraluxe is here to assist you in creating your dream home — beautiful, functional and uniquely yours."
      />
    </div>
  );
}
