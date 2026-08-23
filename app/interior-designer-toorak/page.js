import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Toorak | Yara Luxe",
  description: "Interior designer in Toorak specialising in luxury homes, heritage residences and high-end apartments. Bespoke design backed by 19+ years of experience."
}, "/interior-designer-toorak");

export default function ToorakPage() {
  return (
    <div className="ylp loc-com">
      <JsonLd data={locationPageGraph("/interior-designer-toorak")} />
      <LocationHero
        eyebrow="Luxury Interior Design Services in Toorak 3142"
        title="Interior Designer Toorak 3142"
        desc="Yaraluxe specialises in creating sophisticated, functional and timeless interiors for homeowners in Toorak 3142. Our team has more than 19 years of experience working in interior design."
      />

      <section className="dark-sp">
        <h2 className="h2w">Why Choose Yaraluxe for Interior Design in Toorak</h2>
        <p className="dark-body">One of the most crucial decisions to make while making over your house is selecting the suitable interior designer. We use creativity and design skills at Yaraluxe to provide interiors which are both beautiful and very functional.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">More than 19 years of interior design excellence</div><p className="cdesc">Our designers bring more than 19 years of interior design experience, assisting Melbourne homeowners to build beautiful, timeless interiors. We understand luxury homes, family residences, apartments and architectural properties.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Tailored Design Solutions</div><p className="cdesc">Toorak houses are all different. Our design concepts are customised according to your lifestyle, architectural style and long-term vision.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">End-to-End Interior Design Services</div><p className="cdesc">We handle all the design process from consultation and conceptualisation through to project supervision and styling.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Luxury Interior Design Expertise</div><p className="cdesc">We specialize in designing luxurious homes that feature high-end finishes, innovative designs, and classic styles.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior Design Services in Toorak 3142</h2>
        <p className="bt">Toorak residents and those in neighbouring suburbs can access interior design solutions from Yaraluxe.</p>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Complete Interior Design of a House — Full home interior design so all rooms are connected. Layouts, materials, colours, furniture, lighting and styling for a cohesive finish.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Luxury Interior Design — Custom furniture, quality finishes, designer lighting and refined styling in harmony with luxury homes.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">New Build Interior Design — We work closely with homeowners, architects and builders so interiors are planned from the outset.</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Interior Design Consultation — Space planning, colour schemes, materials, furniture selection and renovation planning.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Interior Decorating & Styling — Art, furniture, accessories and textiles selected to complement your taste.</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Interior Design Project Supervision — Quality, consistency and attention to detail throughout the project.</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Interior Design for Luxury Homes in Toorak 3142</h2>
            <p className="bt">Toorak is one of Australia's most exclusive residential areas, around five kilometres from Melbourne's CBD. Huge homes, tree-lined streets and historic buildings call for a more refined style of interior design.</p>
            <span className="lbl">Throughout Toorak you will see many homes with the following:</span>
            <ul className="ul">
              <li>Victorian architecture</li>
              <li>Edwardian residences</li>
              <li>Art Deco homes</li>
              <li>Contemporary luxury properties</li>
              <li>Architect-designed residences</li>
              <li>High-end apartments</li>
              <li>Modern family homes</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our design philosophy takes into account the distinct nature of every site and adds a fresh sense of utilitarianism and modern luxury.</p>
          </div>
          <OptImage src={`${U}/2026/06/Luxury-commercial-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Luxury-commercial-interior-design-melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/commercial-interior-design-near-me.webp`} alt={fileAlt("2026/06/commercial-interior-design-near-me.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">Full Home Interior Design for Toorak Families</h2>
            <p className="bt">A property should enable one to live comfortably and enjoy a comfortable lifestyle.</p>
            <span className="lbl">Our comprehensive home interior design solutions include attention to:</span>
            <ul className="ul">
              <li>Space planning and optimisation</li>
              <li>Family-friendly layouts</li>
              <li>Functional living spaces</li>
              <li>Open-plan design concepts</li>
              <li>Storage integration</li>
              <li>Furniture selection</li>
              <li>Lighting design</li>
              <li>Material coordination</li>
              <li>Interior styling</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Whether you reside in Toorak Village, Albany Road, Irving Road, St Georges Road, or other pockets of postcode 3142, we design interiors for today's family living.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Luxury Interior Design Tailored to Toorak Living</h2>
            <p className="bt">Luxury design goes beyond just the high-quality finishes. It's thoughtful design that makes spaces more comfortable, functional and liveable.</p>
            <span className="lbl">We provide luxury interior design services, such as the following:</span>
            <ul className="ul">
              <li>Bespoke furniture selection</li>
              <li>High-quality stone and material specification.</li>
              <li>Custom joinery design</li>
              <li>Designer lighting concepts</li>
              <li>Luxury kitchen styling</li>
              <li>Bathroom interior design</li>
              <li>Walk-in wardrobe design</li>
              <li>Home office design</li>
              <li>Living room styling</li>
              <li>Art and decor curation.</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/Hospitality-interior-design-Melbourne.webp`} alt={fileAlt("2026/06/Hospitality-interior-design-Melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior Design Styles We Create</h2>
        <p className="bt">Every homeowner has their own vision. Our designers specialize in a variety of interior designs.</p>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Modern Interior Design</div><p className="scd">Elegant lines, little clutter and efficient, modern living areas.</p></div>
          <div className="style-card"><div className="sct">Contemporary Interior Design</div><p className="scd">Modern interiors with contemporary style and classic appearance.</p></div>
          <div className="style-card"><div className="sct">Luxury Interior Design</div><p className="scd">Quality materials, custom finishes and sophisticated styling.</p></div>
          <div className="style-card"><div className="sct">Minimalist Interiors</div><p className="scd">Elegant and simple spaces with visual balance and functionality.</p></div>
        </div>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Scandinavian Design</div><p className="scd">Inviting spaces designed using natural materials and practical solutions.</p></div>
          <div className="style-card"><div className="sct">Japandi Interiors</div><p className="scd">A harmonious blend of Japanese simplicity and Scandinavian functionality.</p></div>
          <div className="style-card"><div className="sct">Transitional Design</div><p className="scd">A harmonious blend of classic and modern design.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Custom Furniture, Joinery & Storage Solutions</h2>
            <p className="bt">To keep the interior beautiful and organised, it is essential to have well-designed storage.</p>
            <span className="lbl">We offer custom solutions, such as:</span>
            <ul className="ul">
              <li>Walk-in wardrobes</li>
              <li>Built-in cabinetry</li>
              <li>Custom entertainment units</li>
              <li>Home office joinery</li>
              <li>Bedroom storage</li>
              <li>Kitchen storage solutions</li>
              <li>Display shelving</li>
              <li>Mudroom design</li>
              <li>Laundry storage</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/commercial-interior-design.webp`} alt={fileAlt("2026/06/commercial-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Colour Consultation, Lighting & Material Selection</h2>
        <p className="bt">Well-coordinated finishes and materials are key to successful interiors. We offer the following types of consultations:</p>
        <div className="consult-grid">
          <div className="consult-box"><h3>Colour Consultation</h3><p>Colour schemes that match architecture, furnishings and natural light.</p></div>
          <div className="consult-box"><h3>Lighting Design</h3><p>Layered lighting designs for every space to improve function and ambiance.</p></div>
          <div className="consult-box"><h3>Material Selection</h3><p>Flooring, stone, cabinetry finishes and decorative accents chosen with care.</p></div>
          <div className="consult-box"><h3>Flooring Recommendations</h3><p>Hardwood, engineered wood, stone, tile and luxury finishes that support lifestyle and property.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Why Professional Interior Design Matters</h2>
            <p className="bt">Collaborating with an interior designer has numerous benefits from the outset of design through to the renovation.</p>
            <span className="lbl">Benefits include:</span>
            <ul className="ul">
              <li>Better space utilisation</li>
              <li>Improved functionality</li>
              <li>Increased property value</li>
              <li>Enhanced visual appeal</li>
              <li>Smarter renovation decisions</li>
              <li>Reduced design mistakes</li>
              <li>Cohesive room-to-room flow</li>
              <li>Time & cost savings</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/Best-interior-designers-Melbourne-1.webp`} alt={fileAlt("2026/06/Best-interior-designers-Melbourne-1.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Process</h2>
        <div className="steps steps-6">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">We learn about your aims, lifestyle needs and design tastes.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Mood boards, layouts, colour schemes and design ideas.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Design Documentation</div><p className="step-d">Comprehensive plans and specifications to guide implementation.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Material & Furniture Selection</div><p className="step-d">Finishes, fixtures, furniture and style.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Project Coordination</div><p className="step-d">Collaboration with architects, builders, suppliers and contractors.</p></div>
          <div className="step"><div className="step-c">06</div><div className="step-t">Final Styling</div><p className="step-d">Furniture, art, styling and finishing details.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Why Homeowners in Toorak Trust Yaraluxe</h2>
            <p className="bt">Homeowners opt for Yaraluxe because we know what luxury living in Toorak entails.</p>
            <span className="lbl">Our clients value:</span>
            <ul className="ul">
              <li>Personalised service</li>
              <li>Transparent communication</li>
              <li>Design expertise</li>
              <li>Attention to detail</li>
              <li>Premium design solutions</li>
              <li>Proven experience</li>
              <li>Professional project management</li>
              <li>Long-term design value</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/Interior-design-services-Melbourne.webp`} alt={fileAlt("2026/06/Interior-design-services-Melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Toorak"
        title="Interior Designer Near Toorak 3142"
        intro="Toorak is part of the services that Yaraluxe offers for interior design in Melbourne's exclusive eastern and bayside suburbs."
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you a luxury interior designer in Toorak?", a: "Yes. Yaraluxe has a special interest in luxury residential interior design, planning of renovations, interior decorating and bespoke styling throughout Toorak 3142." },
          { q: "Would you like to contribute to Toorak's heritage homes?", a: "Absolutely. We regularly work with Victorian, Edwardian, Art Deco and heritage properties, maintaining their architectural character." },
          { q: "Have you done interior design consultations?", a: "Yes. We offer floor plans, colours, fabrics, furniture, renovations, and styles tailored to your needs." },
          { q: "Do you work with architects and builders?", a: "Yes. Yaraluxe works closely with architects, builders, contractors and suppliers, from concept through to completion." },
          { q: "Do you have expertise in new build interior design?", a: "Yes. We offer the whole package of new build interior design from concept to styling." },
          { q: "What is Yaraluxe's experience?", a: "With more than 19 years of professional interior design experience, our designers help Melbourne homeowners create a beautiful and functional home." }
        ]}
        ctaTitle="Start Your Interior Design Project in Toorak Today"
        ctaBody="From renovating a heritage home to creating a luxury residence or refreshing interiors, Yaraluxe offers personalised design solutions based on lifestyle and property objectives. Get in touch to see how we can change your home in Toorak 3142."
      />
    </div>
  );
}
