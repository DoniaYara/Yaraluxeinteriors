import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Balwyn North | Yara Luxe",
  description: "Interior designer in Balwyn North for family homes, townhouses, apartments and renovations. Create a tailored interior designed around how you live."
}, "/interior-designer-balwyn-north");

export default function BalwynNorthPage() {
  return (
    <div className="ylp loc-bath-b">
      <JsonLd data={locationPageGraph("/interior-designer-balwyn-north")} />
      <LocationHero
        eyebrow="Creating Beautiful, Functional Interiors for Balwyn North Homes"
        title="Interior Designer in Balwyn North"
        desc="Here at Yara Luxe, we feel that 'great design should make great lives'. Homeowners, renovators and property investors all come to our interior designers in Balwyn North 3104 seeking to create interior spaces that make them feel welcome, practical and truly individual."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Why Balwyn North Homeowners Choose Professional Interior Design</h2>
            <p className="bt">With its generous family homes, established residential streets, good schools and emerging array of modern residences, Balwyn North is a town that is renowned. With changing family dynamics and lifestyle, homeowners are seeking to optimize the use of their space while maintaining a beautiful interior.</p>
            <p className="bt">Professional interior design skills can be used to maximize the efficiency of an interior, to make it presentable and to make the home more personal for the people that live in it.</p>
          </div>
          <OptImage src={`${U}/2026/06/modern-bathroom-interior-design.webp`} alt={fileAlt("2026/06/modern-bathroom-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Designing Spaces Around Everyday Living</h2>
        <p className="bt">Each home is unique in how it's used. We begin our design process by understanding how you use your space, which is why.</p>
        <div className="role-grid">
          <div className="role-card"><h3>Family-Centred Design</h3><p>We design and create interiors that are functional, efficient and useful for families who are busy.</p></div>
          <div className="role-card"><h3>Entertaining Spaces</h3><p>We create spaces to connect and feel comfortable, whether for guests or family.</p></div>
          <div className="role-card"><h3>Multi-Purpose Rooms</h3><p>Today's homes frequently require adaptable areas which can be used for working, studying, relaxing and entertaining.</p></div>
          <div className="role-card"><h3>Lifestyle-Driven Interiors</h3><p>All decisions are based on your routines, preferences and long-term goals.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Interior Design Services for Balwyn North Properties</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Home Renovation Design — Layouts, finishes, lighting and functionality carefully considered. Before work commences we help establish a clear design direction.</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">New Home Interior Design — Make sure that all of your interior spaces are connected together. Helps you make choices and plan along the way.</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Furniture and Styling Consultation — Furniture arrangements or decorative accents that add personality and style.</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Entertaining Spaces — It can be tricky to pick finishes. We make it easy for you with expert suggestions customized for your property.</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Interior Design for Property Investors — Changes to the building's design can improve its marketability and value.</span></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Popular Design Features Among Balwyn North Homeowners</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Open and Connected Living Spaces</div><p className="cdesc">Homeowners often want layouts to facilitate more room connectivity between living, dining and kitchen spaces.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Custom Storage Solutions</div><p className="cdesc">Having a functional and clean space with an organized storage makes it easier to work with.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Natural Materials</div><p className="cdesc">Warmth and character are still a strong focus in both timber and stone, as well as textured fabrics and organic finishes.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Layered Lighting</div><p className="cdesc">Ambient, task, and accent lighting can be used together to achieve comfortable and versatile living environments.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Our Design Philosophy</h2>
            <p className="bt">We don't follow trends; we build an interior that will be both relevant and fun for years.</p>
            <span className="lbl">Our approach prioritises the following:</span>
            <ul className="ul">
              <li>Functionality</li>
              <li>Comfort</li>
              <li>Timeless aesthetics</li>
              <li>Quality materials</li>
              <li>Personalisation</li>
              <li>Long-term value</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>This is your home that is real and that suits your lifestyle.</p>
          </div>
          <div className="card-dark">
            <h2>What Makes Yara Luxe Different?</h2>
            <ul className="ul-dark">
              <li>Personalised Design Advice — Customised for your particular property and design requirements.</li>
              <li>Client-Focused Process — Our first step is to get to know you and what is important.</li>
              <li>Thoughtful Space Planning — Layouts to make your home more functional on a daily basis.</li>
              <li>Strong Attention to Detail — Details in design can make the biggest difference.</li>
              <li>Seamless Project Support — Clarity and confidence when making design decisions.</li>
              <li>19 Years of Industry Experience — Creative and knowledgeable interiors.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">The journey from concept to completion</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">Talk about your vision, problems and expectations for the project.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Design Direction</div><p className="step-d">Mood boards, concepts and design suggestions set the clear path.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Detailed Selections</div><p className="step-d">Materials, furnishings, colours and finishes.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Coordination</div><p className="step-d">We collaborate with relevant suppliers and professionals for consistency.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Finishing Touches</div><p className="step-d">The transformation is completed with styling and final details.</p></div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Balwyn North"
        title="Areas We Serve"
        intro="Apart from Balwyn North 3104, Yara Luxe offers interior design services to all areas of Melbourne's eastern and inner eastern suburbs, including:"
      />

      <LocationFaqCta
        faqs={[
          { q: "Can you help with a partial home renovation?", a: "Yes. We can help with either individual rooms or a larger renovation depending on your needs." },
          { q: "Do you provide design advice before construction begins?", a: "Absolutely. When planning starts early, design can benefit, and the risk of expensive changes is reduced." },
          { q: "Can you work with existing furniture?", a: "Yes. Selected pieces can be used in a new interior design scheme as appropriate." },
          { q: "What types of homes do you work on?", a: "Yes. Advise on flooring, cabinetry, paint colours, stone surfaces, tiles and more." },
          { q: "What kind of houses do you build?", a: "We service family homes, luxury homes, townhouses, apartments and investment properties." }
        ]}
        ctaTitle="Take your Balwyn North home to the next level of style and elegance with design experts"
        ctaBody="Whether you're decorating a single room, undertaking a refurbishment project or creating a grand interior overhaul, Yara Luxe brings a design approach that takes into account the individual needs of your home and lifestyle. We aim to design interior spaces that are beautiful, functional and distinctly your own."
      />
    </div>
  );
}
