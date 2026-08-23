import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Balwyn | Yara Luxe",
  description: "Interior designer in Balwyn for luxury family homes, renovations and new builds. Bespoke design that balances refined style with everyday function."
}, "/interior-designer-balwyn");

export default function BalwynPage() {
  return (
    <div className="ylp loc-bath">
      <JsonLd data={locationPageGraph("/interior-designer-balwyn")} />
      <LocationHero
        eyebrow="Bespoke Interior Design for Homes in Balwyn"
        title="Interior Designer Balwyn"
        desc="We design beautiful, yet practical, spaces for homeowners in Yaraluxe, 3103. Having worked as an interior designer for more than 19 years, we know how to design and plan for families, professionals, renovators and property owners to transform homes."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Designing Homes That Reflect Balwyn Living</h2>
            <p className="bt">The eastern suburbs of Melbourne are a popular choice for home buyers and Balwyn 3103 is one of them, offering a mix of spacious family homes, heritage homes, luxury homes and community appeal.</p>
            <p className="bt">Interiors for Balwyn homes that include:</p>
            <ul className="ul">
              <li>Better functionality for growing families</li>
              <li>Open-plan living environments</li>
              <li>Increased storage solutions</li>
              <li>Modern luxury finishes</li>
              <li>Home office integration</li>
              <li>Improved natural light</li>
              <li>Sophisticated entertaining spaces</li>
              <li>Long-term property value</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our team designs interiors that will enhance the regular living of the home while preserving the character and architecture of the home.</p>
          </div>
          <OptImage src={`${U}/2026/06/bathroom-interior-designer-melbourne.webp`} alt={fileAlt("2026/06/bathroom-interior-designer-melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Choosing Yaraluxe for your home in Balwyn?</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Over 19 years of interior design experience</div><p className="cdesc">Having worked in Melbourne's top suburbs for more than 19 years, our designers have the knowledge and expertise of how to achieve style, functionality and longevity in your interior spaces.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Personalised Design Solutions</div><p className="cdesc">We don't do a one size fits all. All projects start with knowledge of your lifestyle, goals and vision.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Complete Design Management</div><p className="cdesc">We have the expertise to deal with all phases of consultation and concept through to project supervision and styling.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Strong Focus on Family Living</div><p className="cdesc">Balwyn 3103 family homes are designed for family life. Creating interiors that support activities of daily living while remaining elegant and sophisticated.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Our Interior Design Services in Balwyn</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Full Home Interior Design — We design connected interior spaces, tying together all rooms with careful planning, finishes, furnishings and style.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">New Build Interior Design — We collaborate with both builders and architects to implement all design considerations for your long-term vision.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Luxury Interior Design — Bespoke design, high-quality materials, a sophisticated colour palette and custom solutions for luxurious homes.</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Interior Design Consultation — Layout, renovations, materials, furniture, colours, lighting and design suggestions.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Interior Decorating & Styling — Furniture curation, artwork, decorative accessories, textiles and finishing details.</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Interior Design Project Supervision — We monitor implementation to assure that all design elements are properly and consistently implemented.</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/bathroom-interior.webp`} alt={fileAlt("2026/06/bathroom-interior.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">Interior design for family homes in Balwyn</h2>
            <p className="bt">Unlike other inner-city suburbs where apartment living prevails, Balwyn is recognised for its larger houses geared towards long-term family living.</p>
            <span className="lbl">Our interior design services for the home cover the following:</span>
            <ul className="ul">
              <li>Functional Living Areas — Comfortable environments for everyday activities, entertaining and relaxation.</li>
              <li>Multi-Generational Design — Adaptability for changing family needs, comfort and accessibility.</li>
              <li>Home Office Design — Specific work areas for remote and hybrid work.</li>
              <li>Smart Storage Solutions — Integrated storage and custom joinery to minimise clutter.</li>
              <li>Children's Bedrooms & Study Areas — Flexible areas that adapt as children grow.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Luxury Interior Design for Balwyn Residences</h2>
            <p className="bt">Throughout Balwyn 3103 there is a lot of space and room and a lot of detail in the architecture, which makes it easy to make it luxurious inside.</p>
            <span className="lbl">Our luxury design solutions are all centred around the following:</span>
            <ul className="ul">
              <li>Custom joinery</li>
              <li>Premium stone finishes</li>
              <li>Designer lighting</li>
              <li>Bespoke furniture</li>
              <li>Walk-in wardrobes</li>
              <li>Luxury bathroom design</li>
              <li>High-end kitchen styling</li>
              <li>Statement feature spaces</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>This creates a sophisticated, yet very practical, interior.</p>
          </div>
          <OptImage src={`${U}/2026/06/bathroom-interior-designer.webp`} alt={fileAlt("2026/06/bathroom-interior-designer.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Design Styles We Frequently Create</h2>
        <p className="bt">While there are multiple design styles, there are a few that are consistently popular across Balwyn.</p>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Contemporary Luxury</div><p className="scd">A mix of sophistication, comfort, and modernity.</p></div>
          <div className="style-card"><div className="sct">Modern Family Living</div><p className="scd">Realistic arrangements, classic finishes and quality materials.</p></div>
          <div className="style-card"><div className="sct">Scandinavian Design</div><p className="scd">Spaces full of light, practical and made with natural materials and clean lines.</p></div>
        </div>
        <div className="styles-row-3b">
          <div className="style-card"><div className="sct">Japandi Interiors</div><p className="scd">Japan meets Scandinavia in a soothing harmony.</p></div>
          <div className="style-card"><div className="sct">Transitional Design</div><p className="scd">Blending in traditional architecture with modern designs.</p></div>
          <div className="style-card"><div className="sct">Classic Modern Interiors</div><p className="scd">Designs that always fit and never fall out of style.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Custom Joinery & Storage Design</h2>
            <p className="bt">Having the storage system designed as carefully as possible is among the most beneficial investments in a home.</p>
            <span className="lbl">We can create custom joinery such as the following:</span>
            <ul className="ul">
              <li>Walk-in robes</li>
              <li>Built-in wardrobes</li>
              <li>Kitchen cabinetry</li>
              <li>Home office joinery</li>
              <li>Entertainment units</li>
              <li>Mudrooms</li>
              <li>Laundry storage</li>
              <li>Library shelving</li>
              <li>Display cabinets</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Colour Consultation, Lighting & Material Selection</h2>
            <p className="bt-w">Interior design involves balancing the colour, materials and finishes. We're here to support homeowners in the following ways:</p>
            <ul className="ul-dark">
              <li>Colour Planning — Palettes to suit the architecture and natural light.</li>
              <li>Lighting Design — Multiple lighting options to enhance function and ambiance.</li>
              <li>Material Coordination — Flooring, stone, tile, cabinetry finishes and decoration.</li>
              <li>Interior Styling — All design elements work together to create a unified whole.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Renovating in Balwyn? Start With a Design Strategy</h2>
            <p className="bt">Homeowners in Balwyn often opt to renovate their homes to make them more modern or to be more suitable for a growing family.</p>
            <span className="lbl">Pre-planning by a professional can help:</span>
            <ul className="ul">
              <li>Avoid expensive changes later</li>
              <li>Improve project efficiency</li>
              <li>Create better space utilisation</li>
              <li>Reduce renovation stress</li>
              <li>Increase long-term property value</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our team is here to assist homeowners prior to the work to help them make informed decisions.</p>
          </div>
          <OptImage src={`${U}/2026/06/bathroom-interior-designers.webp`} alt={fileAlt("2026/06/bathroom-interior-designers.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">The Yaraluxe Design Journey</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation & Discovery</div><p className="step-d">Knowing the requirements of your home, objectives and lifestyle.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Design Development</div><p className="step-d">Generating ideas, sketches and concepts, and establishing design intent.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Selections & Specifications</div><p className="step-d">Selecting finishes, fixtures, furniture and materials.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Coordination</div><p className="step-d">Collaborating with builders, trades and suppliers.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Styling & Completion</div><p className="step-d">Putting the final details into their home that make it a home.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why Professional Interior Design Is a Smart Investment</h2>
        <p className="bt">Professional interior design has an impact on more than just the look. It can help:</p>
        <div className="challenge-grid">
          <div className="challenge-card"><div className="ch-t">Increase resale value</div><p className="ch-d">Professional design yields long-lasting benefits for Balwyn homeowners.</p></div>
          <div className="challenge-card"><div className="ch-t">Improve functionality</div><p className="ch-d">Enhance comfort and maximise space.</p></div>
          <div className="challenge-card"><div className="ch-t">Create better flow</div><p className="ch-d">Improve storage and reduce costly mistakes.</p></div>
          <div className="challenge-card"><div className="ch-t">Cohesive design outcomes</div><p className="ch-d">A unified result across the whole home.</p></div>
          <div className="challenge-card"><div className="ch-t">Long-lasting benefits</div><p className="ch-d">In the eyes of many people who live in Balwyn, investing in professional design yields long-lasting benefits.</p></div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Balwyn"
        title="Areas Near Balwyn 3103 We Also Serve"
        intro="Yaraluxe proudly works with homeowners throughout Melbourne's eastern suburbs, including the following:"
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you a Balwyn interior designer?", a: "Yes. Yaraluxe has serviced homeowners in Balwyn and surrounding Eastern Melbourne suburbs." },
          { q: "Do you have the opportunity to work on home improvement projects with family?", a: "Absolutely. We see many projects which are to enhance functionality, storage and lifestyle for an expanding family." },
          { q: "Are you a luxury interior design company?", a: "Yes. Our specialities are luxury residential interior design and the choice of quality finishes." },
          { q: "Are you able to help with new-build homes?", a: "Yes. Complete new build interior design services from planning to styling." },
          { q: "Are you able to offer an interior design consultation?", a: "Yes. We offer homeowners consultation and advice to help them choose the right layout, colour, material, furniture and renovation." },
          { q: "Why choose Yaraluxe?", a: "Our designers bring 19+ years of interior design experience, with a commitment to providing personalised service and a love for timeless design, creating interior spaces for every home and family." }
        ]}
        ctaTitle="Start Your Interior Design Project in Balwyn"
        ctaBody="Whether you're renovating your family home, renovating your new luxury home or refreshing specific areas of your home, Yaraluxe can help make your dream a reality. Backed by 19+ years of interior design experience, we create functional, elegant and enduring interiors. Call Yaraluxe now to find out more about your project in Balwyn 3103."
      />
    </div>
  );
}
