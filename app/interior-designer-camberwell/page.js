import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Camberwell | Yara Luxe",
  description: "Interior designer in Camberwell for heritage homes, luxury family residences and new builds. Bespoke interiors backed by 19+ years of experience."
}, "/interior-designer-camberwell");

export default function CamberwellPage() {
  return (
    <div className="ylp loc-cons">
      <JsonLd data={locationPageGraph("/interior-designer-camberwell")} />
      <LocationHero
        eyebrow="Designed bespoke interiors for Camberwell's Character Homes and Contemporary Residences."
        title="Interior Designer Camberwell"
        desc="We help you with homeowners, making interiors that feel considered, practical and effortless to be beautiful at Yara Luxe. From a period residence to a family home or a new build, our interior designers combine creativity, practicality and thoughtful design to create spaces that reflect the way you live."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Transforming Houses Into Homes That Feel Complete</h2>
            <p className="bt">There are a large number of properties which have excellent potential but don't support optimal modern lifestyles. Rooms may feel disconnected, room layouts become outdated and design decisions may be disjointed.</p>
            <p className="bt">Professional interior design helps to integrate everything.</p>
            <p className="bt">We don't just consider each room in isolation; we think about the whole home experience as well and how each space can fit into the mix to create a comfortable, functional, and well-balanced home.</p>
          </div>
          <OptImage src={`${U}/2026/06/color-consultation-interior-design.webp`} alt={fileAlt("2026/06/color-consultation-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Interior Design for Camberwell's Distinctive Homes</h2>
        <p className="dark-body">Camberwell 3124 is famous for the elegance of its streets, its heritage homes, luxury family houses and architect-designed homes. Every project is unique, and thus, a customised design strategy is required, since no two houses are identical.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Period and Heritage Homes</div><p className="cdesc">There are many fine original architectural features to be found in Camberwell houses. This provides help when incorporating modern functionality whilst retaining the character that makes these properties special.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Contemporary Family Homes</div><p className="cdesc">For contemporary households, open-plan living, multi-purpose areas and functional storage facilities are important features.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Luxury Residences</div><p className="cdesc">Sofisticated living spaces are brought to life with the use of premium materials, bespoke joinery, designer furnishings and refined finishes.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">New Build Projects</div><p className="cdesc">Having an interior designer involved in the design process of the interior of the building as early as possible in the construction will help you to make sure that every selection fits into a finished whole.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Common Design Challenges We Help Solve</h2>
        <div className="challenge-grid">
          <div className="challenge-card"><div className="ch-t">Spaces That No Longer Suit Your Lifestyle</div><p className="ch-d">Families evolve and their needs change over time, often making their homes need redesigns and added functions.</p></div>
          <div className="challenge-card"><div className="ch-t">Too Many Design Decisions</div><p className="ch-d">It can be difficult to select the right colours, finishes, furniture, lighting and materials.</p></div>
          <div className="challenge-card"><div className="ch-t">Lack of Flow Between Rooms</div><p className="ch-d">A house is not a fragmented place to be. We aid in establishing uniformity around the property.</p></div>
          <div className="challenge-card"><div className="ch-t">Underutilised Areas</div><p className="ch-d">Areas which have left corners and structure which are not being used to their full potential can often be converted to very functional areas.</p></div>
          <div className="challenge-card"><div className="ch-t">Outdated Interiors</div><p className="ch-d">With a little planning, it's possible to add features that will enhance both comfort and aesthetics without needing to start from scratch.</p></div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Design Approach</h2>
        <p className="dark-body" style={{ color: "rgba(255,255,255,0.75)" }}>All successful projects start with the knowledge and understanding of how people would like to live in their space.</p>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Discovery and Consultation</div><p className="step-d">We spend time to learn about your objectives, preferences and long-term vision.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Mood boards, layouts and creative direction form the basis of the project.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Design Refinement</div><p className="step-d">The selection and refinement of materials, furnishings, finishes and details are carefully considered.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Implementation Support</div><p className="step-d">Guidance is given at every project stage to help ensure that the design vision is successfully realised.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling</div><p className="step-d">The finishing touches add warmth, character and personality to the finished area.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Creating Interiors That Work Beautifully Every Day</h2>
        <p className="bt">The interior of the house should make every day easier yet look good. We tend to concentrate on the following aspects of our design solutions:</p>
        <div className="spaces-grid">
          <div className="space-card"><h3>Better Space Planning</h3><p>Optimising room layout for maximum usability and comfort.</p></div>
          <div className="space-card"><h3>Custom Storage Opportunities</h3><p>Developing self-help solutions to decrease clutter and organize.</p></div>
          <div className="space-card"><h3>Natural Light Enhancement</h3><p>The use of colour, material and layout changes to enhance the lightness and openness of the space.</p></div>
          <div className="space-card"><h3>Material Selection</h3><p>Selecting finishes that offer durability, beauty and longevity.</p></div>
          <div className="space-card"><h3>Furniture Integration</h3><p>Furnishing to meet room and user needs</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Clients Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Personalised Design Direction</h3><p>Each suggestion is designed specially for your home and life objectives.</p></div>
          <div className="why-card"><h3>Collaborative Process</h3><p>We collaborate closely with clients to ensure the resulting product is as they wish.</p></div>
          <div className="why-card"><h3>Functional Design Solutions</h3><p>The interior designs we create are intended to enhance the functionality of a space, rather than simply its aesthetics.</p></div>
          <div className="why-card"><h3>Attention to Detail</h3><p>All aspects, from concept to detail, are carefully considered.</p></div>
          <div className="why-card"><h3>Transparent Communication</h3><p>Each client is provided with instructions on the project's different stages.</p></div>
          <div className="why-card-dark"><h3>19 years of interior design experience</h3><p>With our past experience, we can handle projects of various styles, sizes and complexities with confidence.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Popular Interior Design Styles in Camberwell</h2>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Modern Classic</div><p className="scd">The blend of classic architectural elements and modern amenities.</p></div>
          <div className="style-card"><div className="sct">Contemporary Luxury</div><p className="scd">Highly designed areas with high-quality materials and straight design lines.</p></div>
          <div className="style-card"><div className="sct">Scandinavian-Inspired Design</div><p className="scd">Light-filled interiors with a focus on simplicity, functionality, and warmth.</p></div>
          <div className="style-card"><div className="sct">Transitional Interiors</div><p className="scd">A combination of old and new styles.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Minimalist Design</div><p className="scd">Carefully designed areas with quality rather than quantity.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Who We Work With</h2>
            <p className="bt">Our interior design services can be used for:</p>
            <ul className="ul">
              <li>Homeowners</li>
              <li>Families renovating existing homes</li>
              <li>Property investors</li>
              <li>Downsizers</li>
              <li>New home builders</li>
              <li>Apartment owners</li>
              <li>Luxury property owners</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Whatever the scale of the project, our objective is to produce spaces that are true to the people who will inhabit them and are comfortable and authentic.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-consultation-australia.webp`} alt={fileAlt("2026/06/interior-design-consultation-australia.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Camberwell"
        title="Areas We Serve"
        intro="Yara Luxe operates in Melbourne's eastern and inner-eastern suburbs, including the following areas:"
      />

      <LocationFaqCta
        faqs={[
          { q: "When is it time to hire an interior designer?", a: "Ideally an interior designer should be put on the team before renovations or construction. Having this in mind, early planning helps to ensure that decisions on design, layout and material selection are in synch with the beginning." },
          { q: "Have any single room redesign help?", a: "Yes, we do individual rooms for renovating the whole house. We can design a solution that fits your living room, bedroom, home office or kitchen." },
          { q: "Do you offer furniture and styling suggestions?", a: "Yes, we help you with furniture ideas, lights, artwork, rugs and decorative accessories! We want to make sure all the elements blend and create a pleasant environment." },
          { q: "Are you able to work in an already established design style?", a: "Yes, we can make improvements and tweaks to your existing interior style and add to it, but with the added benefit of improving functionality and beauty. New design elements can also be added that can work perfectly with your existing furnishings and architectural elements." },
          { q: "Are you involved in new construction?", a: "Absolutely, I do regularly work with homeowners on interior planning of new construction. By participating in the process we can contribute to the development of an integrated design scheme and make the selection process easier during the entire process." },
          { q: "Will I be involved in the design process or not?", a: "We value the input from our clients and foster collaboration at all stages of the project. The final design outcome is dependent on your preferences, lifestyle needs and feedback." },
          { q: "Help select finishes and materials?", a: "Yes, we do offer advice on flooring, cabinetry, paint colours, stone surfaces, tiles and other interior finishes. All of our recommendations are grounded in your design needs, budget and the overall design style of your home." },
          { q: "What are the time scales of an interior design project?", a: "Project timelines will be determined by the size and complexity of the project. At the first appointment we give you a realistic time frame depending on your needs." }
        ]}
        ctaTitle="Establish Your Interior Design Project in Camberwell."
        ctaBody="From simple renovations to full interior design, Yara Luxe offers customizable interior design solutions with a focus on style, function and value. We can assist Camberwell residents in designing interiors that not only look great but also make living more enjoyable."
      />
    </div>
  );
}
