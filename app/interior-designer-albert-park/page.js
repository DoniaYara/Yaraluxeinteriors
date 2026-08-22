import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Albert Park | Yara Luxe",
  description: "Interior designer in Albert Park for tailored renovations and complete homes, from space planning and materials to furniture and refined final styling."
}, "/interior-designer-albert-park");

export default function AlbertParkPage() {
  return (
    <div className="ylp loc-nb-b">
      <JsonLd data={locationPageGraph("/interior-designer-albert-park")} />
      <LocationHero
        eyebrow="Interior Designer Albert Park 3206"
        title="Interior Designer Albert Park"
        desc="Albert Park's Coastal and Character Homes are beautifully done with interior design. Stylish, super functional and made just for people: This is how interiors are made at Yara Luxe."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Designing Spaces That Reflect the Albert Park Lifestyle</h2>
            <p className="bt">Albert Park is one of Melbourne's best bayside suburbs, featuring heritage streetscapes, period architecture, a village feel and close proximity to the waterfront. Many houses have historic character and also satisfy present-day living requirements.</p>
            <p className="bt">We blend style and substance so every part of the design enhances the property's architectural appeal while meeting modern lifestyle needs.</p>
          </div>
          <OptImage src={`${U}/2026/06/new-build-interior.webp`} alt={fileAlt("2026/06/new-build-interior.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/interior-design-new-build-homes.webp`} alt={fileAlt("2026/06/interior-design-new-build-homes.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">A Personalised Approach to Interior Design</h2>
            <p className="bt">Every homeowner dreams of a different home. We take the time to understand how you use your space before taking a design direction.</p>
            <span className="lbl">We consider:</span>
            <ul className="ul">
              <li>Daily routines and lifestyle needs</li>
              <li>Family requirements</li>
              <li>Entertaining preferences</li>
              <li>Storage challenges</li>
              <li>Long-term goals</li>
              <li>Design preferences and inspiration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Interior Design Services for Albert Park Homes</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Residential Interior Design — Unified interiors that enhance look, feel and function. Customised to each property and homeowner.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Renovation Design Support — Planning before construction minimises costly changes.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">New Home Interior Selections — Colours, materials, finishes and fixtures for uniformity throughout the home.</span></div>
        </div>
        <div className="svc-grid-2">
          <div className="svc-item"><span className="sn">04</span><span className="st">Furniture and Styling — Setups, artwork and decorative pieces that feel personal and welcoming.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Space Planning — Strategic design for function, flow and quality of life.</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior Design Solutions for Any Room</h2>
        <div className="rooms-grid">
          <div className="room-card"><h3>Living Rooms</h3><p>Welcoming areas for relaxation, entertaining and family connection.</p></div>
          <div className="room-card"><h3>Kitchens</h3><p>Functional layouts, smart storage and chosen finishes for everyday use.</p></div>
          <div className="room-card"><h3>Bathrooms</h3><p>Comfortable, functional and enduringly beautiful.</p></div>
          <div className="room-card"><h3>Bedrooms</h3><p>Quiet, comfortable, and ideal for everyday rest.</p></div>
          <div className="room-card"><h3>Home Offices</h3><p>Effective work areas that merge with the house.</p></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Design Principles That Guide Every Project</h2>
        <div className="c5">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Function First</div><p className="cdesc">Efficient spaces that are beautiful and conducive to daily life.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Timeless Design</div><p className="cdesc">Solutions that last, not the latest fad.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Attention to Detail</div><p className="cdesc">Details make a huge difference in the outcome.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Cohesive Interiors</div><p className="cdesc">A sense of continuity in each room.</p></div>
          <div className="card"><span className="cnum">05</span><div className="ctitle">Quality Materials</div><p className="cdesc">Finishes that contribute to durability and lasting value.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Choose Yara Luxe?</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Tailored Design Solutions</h3><p>Uniquely designed for your property, lifestyle and objectives.</p></div>
          <div className="why-card"><h3>Collaborative Design Process</h3><p>Your vision stays front and centre.</p></div>
          <div className="why-card"><h3>Strong Design Expertise</h3><p>Creative and adept at solving problems.</p></div>
          <div className="why-card"><h3>Focus on Everyday Living</h3><p>More comfortable, functional and pleasurable to use.</p></div>
          <div className="why-card"><h3>Clear and Transparent Guidance</h3><p>Professional assistance throughout the design process.</p></div>
          <div className="why-card-dark"><h3>19 years of industry experience</h3><p>From one room to a full home makeover.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Home decor ideas for Albert Park homes</h2>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Coastal Contemporary</div><p className="scd">Open spaces with muted colours and easy luxury.</p></div>
          <div className="style-card"><div className="sct">Modern Classic</div><p className="scd">A mix of old and new style details.</p></div>
          <div className="style-card"><div className="sct">Contemporary Luxury</div><p className="scd">Straight lines, high-quality materials and selected furniture.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Transitional Design</div><p className="scd">Heritage character with modern functionality.</p></div>
          <div className="style-card"><div className="sct">Minimalist Interiors</div><p className="scd">Simple spaces organised around quality and purpose.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Who We Work With</h2>
            <p className="bt">Our interior design services are perfect for:</p>
            <ul className="ul">
              <li>Homeowners</li>
              <li>Families renovating existing properties</li>
              <li>Apartment owners</li>
              <li>Downsizers</li>
              <li>Property investors</li>
              <li>New home builders</li>
              <li>Luxury homeowners</li>
            </ul>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/new-build-home-interior-design.webp`} alt={fileAlt("2026/06/new-build-home-interior-design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        intro="Yara Luxe offers interior design services in Albert Park 3206 and the following Melbourne areas:"
        items={[["South Melbourne","3205"],["Port Melbourne","3207"],["Middle Park","3206"],["St Kilda","3182"],["South Yarra","3141"],["Toorak","3142"],["Prahran","3181"],["Armadale","3143"],["Malvern","3144"],["Richmond","3121"],["Hawthorn","3122"],["Kew","3101"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you interested in renovating your heritage home?", a: "Yes. We regularly deal with period properties and heritage-style houses, retaining character while adding modern function." },
          { q: "Are you giving design guidance at the start of renovations?", a: "Yes. Early planning improves design quality and minimises unnecessary on-site changes." },
          { q: "Are you able to help decorate and furnish?", a: "Yes — furniture, lighting, art, rugs and decorative items that fit the overall scheme." },
          { q: "Do you work on interiors of apartments?", a: "Yes. Apartments, townhouses, family homes and luxury homes." },
          { q: "Is it possible to reuse some existing furniture?", a: "Yes, as appropriate we can incorporate existing furniture and décor into a new concept." },
          { q: "What is the amount of time it takes to complete a project in interior design?", a: "Timelines depend on size and complexity. A realistic timeframe is offered during consultation." }
        ]}
        ctaTitle="Create a Home You'll Love Living In"
        ctaBody="If you're looking for a professional interior designer in Albert Park 3206, Yara Luxe is ready to help — from conceptualizing and space planning to furniture and styling."
      />
    </div>
  );
}
