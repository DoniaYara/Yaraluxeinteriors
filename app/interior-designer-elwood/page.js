import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Elwood | Yara Luxe",
  description: "Interior designer in Elwood for renovations, new builds and complete homes. Bespoke, functional interiors shaped around your lifestyle and personal style."
}, "/interior-designer-elwood");

export default function ElwoodPage() {
  return (
    <div className="ylp loc-sup">
      <JsonLd data={locationPageGraph("/interior-designer-elwood")} />
      <LocationHero
        eyebrow="Interior Designer Elwood 3184"
        title="Interior Designer Elwood"
        desc="Elwood Homes create relaxed, sophisticated interiors. We know that great interior design should be easy at Yara Luxe — comfortable, practical, and elegant spaces tailored to your lifestyle."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Interior Design Inspired by the Elwood Lifestyle</h2>
            <p className="bt">Elwood is known for its leafy streets, period architecture, relaxed atmosphere in the bayside and its coastal charm. The suburb is home to a variety of residential styles, from Art Deco apartments and Edwardian homes to modern townhouses and luxurious residences, each requiring a unique design solution.</p>
            <p className="bt">We aim to design interiors that enhance and support the life, entertainment and relaxation that you enjoy, whilst adding to the character of your property.</p>
          </div>
          <OptImage src={`${U}/2026/06/supervision1.webp`} alt={fileAlt("2026/06/supervision1.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>More Than Just Beautiful Spaces</h2>
            <p className="bt">The essence of great interior design is to bring about better conditions for living. A well-designed house can:</p>
            <ul className="ul">
              <li>Improve functionality</li>
              <li>Enhance comfort</li>
              <li>Maximise available space</li>
              <li>Increase storage efficiency</li>
              <li>Create visual harmony</li>
              <li>Add long-term property value</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Interior Design Services for Elwood Homeowners</h2>
            <ul className="ul-dark">
              <li>Complete Home Design — From renovation to redevelopment, we design each space in harmony with the others.</li>
              <li>Renovation Design Consultation — Pre-construction planning sets the design direction and helps avoid costly changes.</li>
              <li>Apartment Interior Design — Best use of space, more functional interiors that feel open and welcoming.</li>
              <li>Furniture and Styling Services — Furniture layouts, artwork and accessories that feel complete and personal.</li>
              <li>Material and Finish Selection — Options depending on the style and practicality of your home.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Create Spaces to Support Everyday Living</h2>
        <div className="rooms-grid">
          <div className="room-card"><h3>Living Areas, Entertaining Areas</h3><p>We design spaces that are inviting, relaxing and spontaneous for entertainment.</p></div>
          <div className="room-card"><h3>Kitchens</h3><p>A well-designed kitchen can enhance usability, efficiency and ease of use.</p></div>
          <div className="room-card"><h3>Bathrooms</h3><p>Bathroom designs centred around comfort, functionality and classic luxury.</p></div>
          <div className="room-card"><h3>Bedrooms</h3><p>A place of quiet refuge, with comfort and function harmonizing.</p></div>
          <div className="room-card"><h3>Home Offices & Study Areas</h3><p>Effective workspaces that blend seamlessly into family lifestyle.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Elwood Homeowners Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Personalised Design Approach</h3><p>Each project starts with the vision, goals and lifestyle of the space.</p></div>
          <div className="why-card"><h3>Innovative and functional ideas</h3><p>Visually appealing designs that remain functional for everyday living.</p></div>
          <div className="why-card"><h3>Excellent focus on detail</h3><p>Purposeful selection of materials, finishes and furnishings.</p></div>
          <div className="why-card"><h3>Collaborative Process</h3><p>We work closely so the finished product matches your personality and taste.</p></div>
          <div className="why-card"><h3>End-to-End Design Guidance</h3><p>From initial concepts to final styling, support throughout the journey.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>Interiors that last for years — stylish and functional.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">A wide selection of popular interior styles in Elwood.</h2>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Coastal Contemporary</div><p className="scd">Natural materials, a soft colour palette and relaxed sophistication.</p></div>
          <div className="style-card"><div className="sct">Modern Minimalist</div><p className="scd">Clean lines and space that create calming, balanced interiors.</p></div>
          <div className="style-card"><div className="sct">Modern Classic</div><p className="scd">A classic combination of classic and modern comfort.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Scandinavian Design</div><p className="scd">Open, inviting spaces with simple, warm and functional design.</p></div>
          <div className="style-card"><div className="sct">Eclectic Contemporary</div><p className="scd">Textures, colours and furnishings designed to suit personality.</p></div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">We grasp your goals, lifestyle requirements and project needs.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Layouts, mood boards and design ideas set the direction.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Design Planning</div><p className="step-d">Materials, finishes, colours and furnishings are considered carefully.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Support</div><p className="step-d">Guidance during implementation for a cohesive end result.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling</div><p className="step-d">Finishing touches add character, warmth and personality.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">The Benefits of Working With an Interior Designer</h2>
            <p className="bt">Professional design support can make the process easier and the final product better.</p>
            <span className="lbl">Benefits include:</span>
            <ul className="ul">
              <li>Improve the use of space</li>
              <li>Reduced renovation stress</li>
              <li>Improved design cohesion</li>
              <li>More confident decision-making</li>
              <li>Ability to interact with professionals</li>
              <li>Interiors designed to your lifestyle.</li>
            </ul>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/supervision2.webp`} alt={fileAlt("2026/06/supervision2.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Elwood"
        intro="Yara Luxe has its offices in Elwood 3184 and provides services to clients across Melbourne's bayside and inner-city suburbs, including:"
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you looking for help with apartment interior design?", a: "Yes, we regularly work on apartment projects throughout Melbourne. We prioritise space, functionality and aesthetics." },
          { q: "Would you require an interior designer for a remodel?", a: "Before beginning any renovation, an interior designer can help set a vision in place for better planning and a more unified result." },
          { q: "Help with furniture and styling choices?", a: "Yes. We advise on furniture, lighting, artwork, rugs and decorative elements." },
          { q: "What types of properties do you work on?", a: "Apartments, townhouses, family homes, heritage homes and luxury residences." },
          { q: "What is the design process time?", a: "Duration depends on size and complexity. We give a specific time frame during consultation." }
        ]}
        ctaTitle="Create a homey environment for your Elwood!"
        ctaBody="From home makeovers, single-room renovations or complete house refurbishments, Yara Luxe offers bespoke interior design solutions tailored to your lifestyle."
      />
    </div>
  );
}
