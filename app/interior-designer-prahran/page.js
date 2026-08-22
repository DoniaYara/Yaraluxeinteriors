import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Prahran | Yara Luxe",
  description: "Interior designer in Prahran for heritage terraces, warehouse conversions and luxury apartments. Bespoke interiors balancing character and modern living."
}, "/interior-designer-prahran");

export default function PrahranPage() {
  return (
    <div className="ylp loc-fh-b">
      <JsonLd data={locationPageGraph("/interior-designer-prahran")} />
      <LocationHero
        eyebrow="Interior Design That Matches Prahran's Creative and Urban Character"
        title="Interior Designer Prahran"
        desc="Interiors designed by Yara Luxe are true to the space and its inhabitants. Prahran 3181 is one of the most heterogeneous and liveliest suburbs in Melbourne, where there are a variety of heritage terraces, warehouse conversions, luxury apartments and architect-designed residences."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Every property has untapped potential</h2>
            <p className="bt">A lot of homeowners know their homes are not functioning as well as they should but are unable to determine what needs to be modified.</p>
            <p className="bt">At times, it's just a lack of flow between spaces. In other instances, rooms can seem outdated, underused or isolated from current living requirements.</p>
            <p className="bt">There are times when opportunities are not seen without the help of a professional interior designer, and spaces are more functional, integrated and liveable.</p>
          </div>
          <OptImage src={`${U}/2026/06/luxury-home-interior-design-Melbourne-company.webp`} alt={fileAlt("2026/06/luxury-home-interior-design-Melbourne-company.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Designed for the Way Prahran Residents Live</h2>
        <p className="dark-body">Convenience, connectivity and lifestyle are key considerations in life in Prahran. Homes must be functional for the busy professional, the expanding family, the downsizer, and the apartment dweller and yet have a definite sense of style.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Flexible Living Spaces</div><p className="cdesc">Designing rooms that meet the needs of the day.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Efficient Use of Space</div><p className="cdesc">Optimising functionality whilst retaining a pleasing appearance.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Contemporary Comfort</div><p className="cdesc">A fusion of contemporary aesthetics and everyday functionality.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Strong Visual Identity</div><p className="cdesc">Making each house a person's house.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Where Thoughtful Design Makes the Biggest Difference</h2>
        <div className="role-grid">
          <div className="role-card"><h3>The older houses in need of modernisation are also included.</h3><p>Prahran properties can be stunning original buildings but need updating for contemporary living.</p></div>
          <div className="role-card"><h3>Compact Urban Residences</h3><p>For those living in smaller homes and apartments, there are many advantages to strategic planning and design solutions.</p></div>
          <div className="role-card"><h3>Renovation Projects</h3><p>All aspects of the renovation can be aligned with a clear design strategy prior to work.</p></div>
          <div className="role-card"><h3>Newly Acquired Properties</h3><p>When relocating to a new home, it's a great chance to get a unified design style right from the beginning.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">The Value of Professional Design Planning</h2>
            <p className="bt">Making an interior work well is not a random occurrence.</p>
            <p className="bt">Planning is an effective tool to help:</p>
            <ul className="ul">
              <li>Improve room functionality</li>
              <li>Create better flow throughout the home</li>
              <li>Increase storage opportunities</li>
              <li>Enhance natural light</li>
              <li>Establish design consistency</li>
              <li>Reduce renovation uncertainty</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>When these elements are taken care of early, homeowners can reap the benefits in the long run.</p>
          </div>
          <OptImage src={`${U}/2026/06/Luxury-Home-Interior-Design-Melbourne.webp`} alt={fileAlt("2026/06/Luxury-Home-Interior-Design-Melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Approach to Creating Exceptional Interiors</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Listen first.</div><p className="step-d">All projects start with understanding your objectives, issues and dreams for the space.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Explore Possibilities</div><p className="step-d">Opportunities for improvement in the functioning of the home are identified, as well as improvements in its visual appeal.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Refine the Details</div><p className="step-d">Plans, finishes, colours and materials are carefully thought out and used to achieve a cohesive result.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Connect the Vision together</div><p className="step-d">All elements of design support the concept and lifestyle needs.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Homeowners Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Tailored Design Solutions</h3><p>Every project is bespoke-designed due to the variety of homes available.</p></div>
          <div className="why-card"><h3>Lifestyle-Focused Thinking</h3><p>Interiors are based on the true manner of living, rather than on the appearance of the space.</p></div>
          <div className="why-card"><h3>Strong Design Direction</h3><p>We guide your clients to make confident decisions all the way along the project.</p></div>
          <div className="why-card"><h3>Practical Creativity</h3><p>All designs are a combination of innovation and practicality.</p></div>
          <div className="why-card"><h3>Clear Communication</h3><p>The client is kept in the loop and engaged all the way through the design process.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>We are able to provide careful, considered design solutions for diverse property types because of our experience.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Interior Trends Influencing Prahran Homes</h2>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Contemporary Urban Living</div><p className="scd">Elegant interior design that makes use of space and optimises its use.</p></div>
          <div className="style-card"><div className="sct">Industrial-Inspired Design</div><p className="scd">A good choice for conversions in warehouses and modern apartments.</p></div>
          <div className="style-card"><div className="sct">Modern Heritage</div><p className="scd">A blend of classic architecture and modern features.</p></div>
          <div className="style-card"><div className="sct">Textural Minimalism</div><p className="scd">Layers of materials and gentle contrasts add depth with minimal clutter.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Sustainable Design Choices</div><p className="scd">Homeowners are focusing on the materials that will last them a long time and on styles that will never go out of style.</p></div>
        </div>
      </section>

      <AreasWeServe
        title="Areas We Serve"
        intro="Yara Luxe operates in the inner-city and inner-eastern suburbs of Melbourne in partnership with Prahran 3181; these include the following:"
        items={[["South Yarra","3141"],["Windsor",""],["Armadale","3143"],["Toorak","3142"],["Malvern","3144"],["St Kilda",""],["Albert Park","3206"],["Elwood","3184"],["Richmond",""],["Hawthorn","3122"],["Kew","3101"],["Camberwell","3124"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Can modern interior renovations be done to a heritage house in Prahran?", a: "Yes, there are many heritage homes that can be modernized to still function with today's lifestyles. By planning carefully, modern functionality and the architectural features can be balanced." },
          { q: "Is it beneficial to have professional interior design for apartment owners in Prahran?", a: "Yes, the design of an apartment can be strategic and make a big difference in how it functions and how it feels. Smart planning can help maximise space, storage and overall liveability." },
          { q: "Which style of design do you think is most commonly used in Prahran?", a: "Prahran's property market is incredibly diverse with a variety of styles, ranging from modern heritage to industrial chic to contemporary urban design. It will depend on the lifestyle of the homeowner and the architecture of the property." },
          { q: "Is it possible to make the interior design of a Prahran property attractive prior to sale?", a: "Strategic upgrades can make a home more appealing to prospective homebuyers. Good interior design can make a powerful first impression and add to value." },
          { q: "Why are lots of Prahran houses needing customised design solutions?", a: "The suburb is a blend of Victorian houses, apartments, warehouse conversion and modern development. With this variety comes the need to produce design solutions that will have to address the particular qualities of each property." },
          { q: "In the context of small urban dwellings, does interior design make sense?", a: "Indeed, homes that are smaller are often most suited to the help of a professional planner. Smart layouts and design choices can make a huge difference in terms of the comfort, functionality and space efficiency." }
        ]}
        ctaTitle="Design a home to suit your lifestyle"
        ctaBody="For Prahran home owners, Yara Luxe can deliver bespoke interior design solutions as part of any renovation, apartment refurbishment or a recently purchased home to be reimagined. We aim to design interiors that not only make it a modern home to live in but also capture the essence of the environment and its home."
      />
    </div>
  );
}
