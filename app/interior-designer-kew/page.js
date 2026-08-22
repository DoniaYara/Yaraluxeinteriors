import JsonLd from "@/components/JsonLd";
import { LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Kew | Yara Luxe",
  description: "Interior designer in Kew creating bespoke, functional interiors for family homes, renovations and new builds. Start your project with tailored design."
}, "/interior-designer-kew");

export default function KewPage() {
  return (
    <div className="ylp loc-res-b">
      <JsonLd data={locationPageGraph("/interior-designer-kew")} />
      <LocationHero
        eyebrow="Interior designer services in Kew"
        title="Interior Designer Kew 3101"
        desc="Professional Interior Design Guidance for Homes That Deserve More Than a Generic Approach. In Yara Luxe, we design the interior of your home to match your lifestyle and make your home look and feel beautiful and functional."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">The Value of Professional Interior Design</h2>
            <p className="bt">Many people start off with some pictures to help them get their ideas flowing, but when it comes to finishing the project, they can't seem to tie the pieces together.</p>
            <p className="bt">An experienced interior designer can help fill that gap with the following:</p>
            <ul className="ul">
              <li>Clear design direction</li>
              <li>Professional recommendations</li>
              <li>Design of materials and finishes.</li>
              <li>Layout improvements</li>
              <li>Furniture planning</li>
              <li>Styling expertise</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>This systematic process ensures that you do not make unnecessary mistakes and produces a more finished product.</p>
          </div>
          <OptImage src={`${U}/2026/06/Affordable-interior-designers-Melbourne.webp`} alt={fileAlt("2026/06/Affordable-interior-designers-Melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Interior Solutions for Kew's Diverse Property Styles</h2>
        <p className="dark-body">Kew is renowned for its variety of properties, including exquisite heritage houses, Federation houses, family homes and luxury developments. There are different design considerations for each type of property.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Period Homes</div><p className="cdesc">Uphold original features while ensuring contemporary living needs are met.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Contemporary Residences</div><p className="cdesc">Fine materials, functionality and styling enhance modern properties.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Family Properties</div><p className="cdesc">Flexibility and adaptability as families expand, without losing visual appeal.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Investment Properties</div><p className="cdesc">Marketability and perceived value enhanced by strategic interior upgrades.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">What Does an Interior Designer Actually Do?</h2>
        <p className="bt">Many people think that interior designers just do furniture and colour schemes. In fact, it's a much wider role:</p>
        <div className="role-grid">
          <div className="role-card"><h3>Space Planning</h3><p>Layouts that enhance how the home is used and how you move through the house.</p></div>
          <div className="role-card"><h3>Design Concepts</h3><p>Creating a visual direction before making any major decisions.</p></div>
          <div className="role-card"><h3>Material Specification</h3><p>Floor, tiles, cabinetry, benchtops, wall finishes and fixtures.</p></div>
          <div className="role-card"><h3>Furniture Selection</h3><p>Furnishings that match the property and lifestyle needs.</p></div>
          <div className="role-card"><h3>Lighting Design</h3><p>Enhancing conditions, usability and aesthetics.</p></div>
          <div className="role-card"><h3>Styling and Finishing Touches</h3><p>Adding personal touches and character to the space.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Interior Design Challenges We Help Homeowners to Solve</h2>
        <div className="challenge-grid">
          <div className="challenge-card"><div className="ch-t">Rooms That Feel Disconnected</div><p className="ch-d">A unified design language is developed throughout the property.</p></div>
          <div className="challenge-card"><div className="ch-t">Lack of Storage</div><p className="ch-d">Real-world solutions can make real-world life better.</p></div>
          <div className="challenge-card"><div className="ch-t">Poor Furniture Layouts</div><p className="ch-d">Even large rooms can feel cramped with the wrong furniture.</p></div>
          <div className="challenge-card"><div className="ch-t">Outdated Interiors</div><p className="ch-d">A property can be modernised without a major refurbishment.</p></div>
          <div className="challenge-card"><div className="ch-t">Renovation Decision Fatigue</div><p className="ch-d">Professional advice makes hundreds of options easier.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Design Consultations Tailored to Your Goals</h2>
            <p className="bt">Every project is preceded by knowledge of the desired use of the space. We consider:</p>
            <ul className="ul">
              <li>Lifestyle requirements</li>
              <li>Design preferences</li>
              <li>Existing challenges</li>
              <li>Budget considerations</li>
              <li>Long-term objectives</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Areas Where Interior Design Creates the Greatest Impact</h2>
            <p style={{ fontFamily: "var(--yl-sans)", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 20 }}>Interior design has the greatest impact in the rooms you use most.</p>
            <ul className="ul-dark">
              <li>Kitchens — Storage, workflow, use and social interaction.</li>
              <li>Living Areas — Entertaining, relaxing, and family connection.</li>
              <li>Bedrooms — Comfort, organisation and wellbeing.</li>
              <li>Bathrooms — Functional and attractive with careful planning.</li>
              <li>Home Offices — Productivity and work-life balance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Why Homeowners in Kew Choose Professional Design Support</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Clarity Before Construction Begins</div><p className="cdesc">A detailed design plan minimises uncertainty and enhances the outcome.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Smarter Budget Allocation</div><p className="cdesc">Prioritise spending based on maximum return.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Improved Property Presentation</div><p className="cdesc">Liveability and aesthetics improved together.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Access to Industry Knowledge</div><p className="cdesc">Recommendations supported by years of project experience.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Work With Our Interior Designers?</h2></div>
        <div className="why-grid-3">
          <div className="why-card"><h3>Personalised Recommendations</h3><p>No one-size-fits-all — decisions based on your property, lifestyle and goals.</p></div>
          <div className="why-card"><h3>Strong Attention to Detail</h3><p>Small details help create a polished and unified effect.</p></div>
          <div className="why-card"><h3>Collaborative Design Process</h3><p>Client feedback is valued at important stages of the project.</p></div>
          <div className="why-card"><h3>Practical Design Thinking</h3><p>Perfect interiors should also work in the real world.</p></div>
          <div className="why-card"><h3>Reliable Project Guidance</h3><p>Support from concept to completion.</p></div>
          <div className="why-card-dark"><h3>19 years of industry experience</h3><p>A broad range of experience to identify and solve design problems.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Creating Interiors That Feel Authentic</h2>
            <p className="bt">The best interior is not just beautiful; it is natural, comfortable and reflects the people that inhabit it.</p>
            <p className="bt">Instead of chasing short-lived fashions, we're interested in places that:</p>
            <div className="list-grid">
              <div className="list-grid-item">Support daily routines</div>
              <div className="list-grid-item">Reflect individual personalities</div>
              <div className="list-grid-item">Enhance property value</div>
              <div className="list-grid-item">Stay looking good for many years</div>
              <div className="list-grid-item">Strike the right balance between comfort and sophistication</div>
              <div className="list-grid-item">Feel timeless rather than trend-driven</div>
            </div>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Best-interior-designers-Melbourne.webp`} alt={fileAlt("2026/06/Best-interior-designers-Melbourne.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <LocationFaqCta
        faqs={[
          { q: "Should I hire a small project interior designer?", a: "Yes. Small changes can be improved with expert guidance on planning and design." },
          { q: "Can you assist prior to the remodelling?", a: "Absolutely. Getting involved early can result in improved project results and fewer costly changes later." },
          { q: "Help in choosing furniture and styles?", a: "Yes. We can assist with furniture, lighting, artwork and decorative accessories." },
          { q: "Is there any existing furniture that can be utilised?", a: "In many cases, yes. Existing pieces can sit within a new design concept." },
          { q: "How do I start my project?", a: "The first step is scheduling a consultation to get to know your property and design goals." }
        ]}
        ctaTitle="Call An Interior Designer in Kew 3101"
        ctaBody="From renovating to furnishing a new home or seeking professional design advice, our interior designers offer solutions custom-tailored to your lifestyle and home."
      />
    </div>
  );
}
