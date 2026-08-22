import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Canterbury | Yara Luxe",
  description: "Interior designer in Canterbury for Victorian and Edwardian homes, renovations and new builds. Preserve character while creating refined modern living."
}, "/interior-designer-canterbury");

export default function CanterburyPage() {
  return (
    <div className="ylp loc-cons-b">
      <JsonLd data={locationPageGraph("/interior-designer-canterbury")} />
      <LocationHero
        eyebrow="Refined Interior Design for Canterbury's Prestigious Homes"
        title="Interior Designer Canterbury"
        desc="Whether you are looking to design a luxury home, a heritage home, a family home or a new home, at Yaraluce, we create bespoke interior design solutions for people in the Canterbury area to help make your home a beautiful and highly functional space to live in."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Interior Design Inspired by Canterbury's Architectural Character</h2>
            <p className="bt">Unlike many modern residential suburbs, Canterbury 3126 is known for its strong architectural identity.</p>
            <span className="lbl">The suburb features:</span>
            <ul className="ul">
              <li>Historic estates</li>
              <li>Victorian residences</li>
              <li>Edwardian homes</li>
              <li>Luxury contemporary rebuilds</li>
              <li>Architect-designed family homes</li>
              <li>Prestige residential streets</li>
              <li>Generous gardens and allotments</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>The "Golden Mile" precinct, with its namesake precinct streets Monomeath Avenue, Alexandra Avenue, Hopetoun Avenue and the surrounding streets, is one of Melbourne's most renowned residential pockets. The interior design philosophy hits a balance between the architectural quality of these homes and the new comfort, usability and elegant luxury.</p>
          </div>
          <OptImage src={`${U}/2026/06/online-consultation-interior-design.webp`} alt={fileAlt("2026/06/online-consultation-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Why Homeowners in Canterbury Choose Yaraluxe</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">More than 19 Years of Interior Design Experience</div><p className="cdesc">Our designers bring more than 19 years of interior design experience, creating living spaces that are elegant, functional and timeless for the homeowners of Melbourne.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Tailored Design Solutions</div><p className="cdesc">Each home in Canterbury is unique, with its own lifestyle needs, character and story. We do not use design formulas but design interiors that are very personalized.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Luxury Residential Design Experience</div><p className="cdesc">For many Canterbury houses, a more elegant strategy is needed and will involve the use of high-quality materials, custom-designed joinery, luxury finishes and sophisticated layouts.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">End-to-End Project Support</div><p className="cdesc">Yaraluxe takes charge of all the design processes from conception and materials selection to design and styling.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior design services we offered in Canterbury</h2>
        <p className="bt">We specialise in luxury residential properties and family homes across Canterbury.</p>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Full Home Interior Design — Our interiors are unified by coordinating each room's layout, finishes, materials and lighting fixtures and furnishings.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Luxury Interior Design — Timeless interiors with custom furniture, top materials, custom joinery and sophisticated styling.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">New Build Interior Design — Interior design that fits with the architecture and surrounding streetscape, often because of heritage overlay and neighbourhood character expectations.</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Interior Design Consultation — Layout, colour, materials, furniture or function.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Interior Decorating & Styling — Furniture, artwork, decorative lighting, textiles and accessories.</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Interior Design Project Supervision — We supervise implementation so all elements are implemented properly and in line with the approved design vision.</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Canterbury Residences Luxury Interior Design</h2>
            <p className="bt">Considered among Melbourne's most exclusive residential areas, some properties in Canterbury have premium values similar to Toorak or Brighton. Recent luxury renovations and prestigious property sales continue to consolidate this reputation and make Canterbury one of Melbourne's finest addresses.</p>
            <span className="lbl">Let us provide you with luxury interior design services such as:</span>
            <ul className="ul">
              <li>Custom furniture planning</li>
              <li>Premium stone specification</li>
              <li>Luxury kitchen design</li>
              <li>Designer bathroom interiors</li>
              <li>Bespoke wardrobe solutions</li>
              <li>Architectural lighting design</li>
              <li>Home office interiors</li>
              <li>Library and study design.</li>
              <li>Wine room styling</li>
              <li>Luxury entertaining spaces</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/interior-design-consultation-price.webp`} alt={fileAlt("2026/06/interior-design-consultation-price.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/interior-design-consultation-services.webp`} alt={fileAlt("2026/06/interior-design-consultation-services.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">Interior Design for Heritage Homes in Canterbury</h2>
            <p className="bt">There is a significant number of historic architectural details in many houses across Canterbury which require consideration when planning for their preservation.</p>
            <span className="lbl">Our staff collaborate closely with the following:</span>
            <ul className="ul">
              <li>Victorian homes</li>
              <li>Edwardian residences</li>
              <li>Period family homes</li>
              <li>Character properties</li>
              <li>Heritage-listed residences</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Preserving original architecture and blending in contemporary layouts, storage, functionality and comfort. This balance enables homeowners to live in the modern world without losing the character which makes Canterbury homes unique.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Creating Functional Family Homes</h2>
        <p className="bt">There are several reasons why a lot of families opt for Canterbury, which include its reputation, good schools, large homes and its long-term appeal. We're creating design strategies that will be family-friendly, such as:</p>
        <div className="spaces-grid">
          <div className="space-card"><h3>Open-Plan Living</h3><p>Implementing improved circulation of kitchen, dining and living areas.</p></div>
          <div className="space-card"><h3>Practical Storage Solutions</h3><p>Minimizing clutter with integrated cabinetry and custom storage design.</p></div>
          <div className="space-card"><h3>Multi-Use Spaces</h3><p>Planning rooms to grow with your family.</p></div>
          <div className="space-card"><h3>Home Office Integration</h3><p>Designing and furnishing work spaces that suit the total design of the house.</p></div>
          <div className="space-card"><h3>Indoor-Outdoor Living</h3><p>Enhancing the interconnections between indoor and outdoor living spaces.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Design Styles We Create</h2>
        <p className="bt">While each Yaraluxe project is customised, there are some styles that are particularly popular across Canterbury.</p>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Timeless Luxury</div><p className="scd">Lovely interiors with high-quality finishes and stylish detailing.</p></div>
          <div className="style-card"><div className="sct">Contemporary Family Living</div><p className="scd">Contemporary layouts with a focus on comfort, functionality and lifestyle.</p></div>
          <div className="style-card"><div className="sct">Transitional Design</div><p className="scd">Old architectural style and modern living spaces.</p></div>
        </div>
        <div className="styles-row-3b">
          <div className="style-card"><div className="sct">Modern Classic Interiors</div><p className="scd">A sophisticated blend of elegance and modernity.</p></div>
          <div className="style-card"><div className="sct">Scandinavian Design</div><p className="scd">Sunlit spaces with a natural touch and functional design.</p></div>
          <div className="style-card"><div className="sct">Japandi Design</div><p className="scd">A soothing mix of Japanese simplicity and Scandinavian coziness.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Custom Joinery & Bespoke Storage Solutions</h2>
            <p className="bt">If you have luxury homes, you will need storage space that seems to be a part of the home design and not an afterthought.</p>
            <ul className="ul">
              <li>Walk-in wardrobes</li>
              <li>Dressing rooms</li>
              <li>Kitchen cabinetry</li>
              <li>Entertainment units</li>
              <li>Home office joinery</li>
              <li>Mudrooms</li>
              <li>Laundry design</li>
              <li>Library shelving</li>
              <li>Display cabinetry</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Colour Consultation, Lighting & Material Selection</h2>
            <p className="bt-w">Often the little details can make the difference in the success of an interior. We assist homeowners to make informed decisions on the following:</p>
            <ul className="ul-dark">
              <li>Colour Selection — Palettes that accentuate architectural elements and natural light.</li>
              <li>Lighting Design — Different levels of light that enhance function and ambiance.</li>
              <li>Material Coordination — Flooring, stone, cabinetry finishes, hardware, and decoration.</li>
              <li>Interior Styling — All design elements work together to achieve a unified effect.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Discovery Consultation</div><p className="step-d">Knowing your objectives, your home, and your life and vision.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Planning</div><p className="step-d">Creating layouts, design direction, mood boards and concepts.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Material & Furniture Selections</div><p className="step-d">Completing finishes, fixtures, furniture and decorative elements.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Coordination</div><p className="step-d">Collaborating closely with builders, trades, architects and suppliers.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Styling & Completion</div><p className="step-d">Furniture layout, artwork choice and finishing touches.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Why Professional Interior Design Adds Long-Term Value</h2>
            <p className="bt">The best interior designer doesn't only provide benefits in terms of the physical look of your space. It helps:</p>
            <ul className="ul">
              <li>Improve functionality</li>
              <li>Maximise space efficiency</li>
              <li>Increase property value</li>
              <li>Reduce renovation mistakes</li>
              <li>Design room flow improvement</li>
              <li>Improve storage solutions</li>
              <li>Enhance everyday comfort</li>
              <li>Support long-term liveability</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Interior design can be one of the most useful investments for homeowners in Canterbury during their home renovation or new construction project.</p>
            <p className="bt">The suburb of Canterbury has several prominent interior design and architecture companies and is a hub for luxury residential design. Gallerie B Interiors, PMG Design, Let's Talk Kitchens & Interiors and Rptecture Architects are among the businesses that help to shape the area's reputation for design. At Yaraluxe, the same level of personalised service, luxury residential expertise and quality design outcomes are offered.</p>
          </div>
          <OptImage src={`${U}/2026/06/colour-consultation-interior-design.webp`} alt={fileAlt("2026/06/colour-consultation-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <AreasWeServe
        title="Around Canterbury We Also Serve"
        intro="Yaraluxe is available for homeowners in Melbourne's prestigious eastern suburbs, such as the following:"
        items={[["Balwyn","3103"],["Balwyn North","3104"],["Kew","3101"],["Hawthorn","3122"],["Camberwell","3124"],["Mont Albert","3127"],["Templestowe","3106"],["Toorak","3142"],["South Yarra","3141"],["Brighton","3186"],["Brighton East","3187"],["Armadale","3143"],["Malvern","3144"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you a Canterbury Heritage worker?", a: "Yes. Yaraluxe regularly works with Victorian, Edwardian and character houses across Canterbury and continues to work with and protect significant architectural features." },
          { q: "Do you want to help with luxurious home renovations?", a: "Absolutely. We do a lot of luxury refurbishments, luxury interiors and luxury residential redecoration projects." },
          { q: "Do you have new build interior design services?", a: "Yes. We work with homeowners, architects and builders to design unified interior spaces for new homes." },
          { q: "Will Yaraluxe offer furniture and styling?", a: "Yes. Furniture selection, interior decorating, artwork curation and complete furniture styling are provided." },
          { q: "Do you offer interior design consultations in Canterbury?", a: "Yes. Consultations for layouts, colours, material, renovation and interior planning are all personalised." }
        ]}
        ctaTitle="Begin Your Canterbury Interior Design Project"
        ctaBody="From a converted heritage home to a luxury renovation or a new family home, Yaraluxe can help make your dreams come true. Backed by 19+ years of industry experience, we design interiors which are architectural, functional and elegant. Call Yaraluxe today to talk to them about your project in Canterbury."
      />
    </div>
  );
}
