import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Mont Albert | Yara Luxe",
  description: "Interior designer in Mont Albert creating bespoke interiors for renovations and complete homes. Thoughtful layouts, materials and finishes tailored to you."
}, "/interior-designer-mont-albert");

export default function MontAlbertPage() {
  return (
    <div className="ylp loc-nb">
      <JsonLd data={locationPageGraph("/interior-designer-mont-albert")} />
      <LocationHero
        eyebrow="Thoughtfully Designed Interiors for Modern Living in Mont Albert"
        title="Interior Designer Mont Albert 3127"
        desc="At Yara Luxe, we create interiors that enhance both the beauty and functionality of your home. From a character home to a family residence, a newly constructed home, and everything in between, our interior designers make every step of the design process clear, creative and purposeful."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Helping Homeowners Make Better Design Decisions</h2>
            <p className="bt">There are hundreds of decisions that must be made when designing a home. Whether it's choosing finishes or furnishings or designing layouts and lighting, it can be easy to get lost in the details without professional assistance.</p>
            <p className="bt">Our job is to take away the difficulty of these decisions and make sure each decision comes together to create a seamless and effective solution. We cater to your lifestyle, your likes and dislikes and your objectives, making spaces comfortable, functional and uniquely yours.</p>
            <p className="bt">We think that successful interior design should not only be impressive but also one that facilitates the life of the occupant.</p>
          </div>
          <OptImage src={`${U}/2026/06/new-build-interior-design.webp`} alt={fileAlt("2026/06/new-build-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Interior Design Tailored to Mont Albert Homes</h2>
        <p className="dark-body">Residential streets, period architecture, modern developments and an atmosphere that is family-friendly are features that are characteristic of Mont Albert. Each project will need an individual approach to design due to the variation in the style and layout of properties.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Heritage and Character Homes</div><p className="cdesc">There are always touches to give many charming and functional updates to older homes that preserve much of their original charm and architectural character.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Contemporary Residences</div><p className="cdesc">New homes offer the chance for cutting-edge layouts and materials and for incorporating stylish design elements.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Family Homes</div><p className="cdesc">We design adaptable interior spaces that accommodate evolving needs and lifestyles with a sophisticated and inviting aesthetic.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Townhouses and Apartments</div><p className="cdesc">Space planning is done efficiently to maximise comfort, storage and everyday usage.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">What Can an Interior Designer Help With?</h2>
        <p className="bt">Professional interior design is more than just choosing colours and furniture.</p>
        <div className="role-grid">
          <div className="role-card"><h3>Layout Planning</h3><p>A thoughtful design will enhance the movement, usability and comfort of the house.</p></div>
          <div className="role-card"><h3>Interior Styling</h3><p>Carefully chosen furnishings and decorative accents contribute to a sleek and welcoming ambiance.</p></div>
          <div className="role-card"><h3>Colour and Material Selection</h3><p>Selecting the perfect mix of finishes creates uniformity and harmony.</p></div>
          <div className="role-card"><h3>Lighting Design</h3><p>Strategic lighting improves atmosphere, functionality and architectural aspects.</p></div>
          <div className="role-card"><h3>Furniture Sourcing</h3><p>We guide you in the selection of furniture that blends in with the space and lifestyle needs.</p></div>
          <div className="role-card"><h3>Renovation Guidance</h3><p>Design knowledge can facilitate the decision-making process before and during renovation.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Areas of the Home We Commonly Transform</h2>
        <div className="spaces-grid">
          <div className="space-card"><h3>Kitchens</h3><p>A modern kitchen should possess a combination of functions, storage, beauty and sociability.</p></div>
          <div className="space-card"><h3>Living Spaces</h3><p>The layouts of the living spaces are planned to promote relaxation, entertainment and family bonding.</p></div>
          <div className="space-card"><h3>Bathrooms</h3><p>With some planning, bathrooms can be designed as functional and luxurious getaways.</p></div>
          <div className="space-card"><h3>Bedrooms</h3><p>Comfort, organisation and calm are all fostered by a well-designed bedroom.</p></div>
          <div className="space-card"><h3>Home Offices</h3><p>Workspaces can be designed to boost productivity and fit in with the home's design.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Homeowners Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Tailored Design Strategies</h3><p>Each project is tailored to meet the unique needs of the client and property.</p></div>
          <div className="why-card"><h3>Focus on Practical Living</h3><p>We are focused on designing something that is useful in daily life, but is stylish.</p></div>
          <div className="why-card"><h3>Clear Communication</h3><p>Fully transparent guidance along the process of design.</p></div>
          <div className="why-card"><h3>Creative Problem Solving</h3><p>Opportunities for layout, storage and usability improvements are identified.</p></div>
          <div className="why-card"><h3>Focus on all the details</h3><p>Everything is thought through from the big picture to the details.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>We can confidently design solutions for a variety of property types with our experience.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Creating Spaces That Feel Timeless</h2>
            <p className="bt">Fashion is ever-changing, but the best design will last for years.</p>
            <p className="bt">We work on the following aspects:</p>
            <div className="list-grid">
              <div className="list-grid-item">Timeless aesthetics</div>
              <div className="list-grid-item">Quality materials</div>
              <div className="list-grid-item">Functional layouts</div>
              <div className="list-grid-item">Comfortable living</div>
              <div className="list-grid-item">Personalised design solutions</div>
              <div className="list-grid-item">Long-term value</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>The end outcome is an interior that is authentic, sophisticated and lifestyle-orientated.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-for-new-build-homes.webp`} alt={fileAlt("2026/06/interior-design-for-new-build-homes.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation</div><p className="step-d">We start by grasping your vision, lifestyle needs and project goals.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Design Development</div><p className="step-d">Concepts, layouts and design suggestions prepared to set direction.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Selection Stage</div><p className="step-d">The materials, colours, furnishings and finishes are carefully selected and refined.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Support</div><p className="step-d">Guidance provided during implementation to maintain consistency of design.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling</div><p className="step-d">The space is completed with well-chosen details.</p></div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Mont Albert"
        title="Areas We Serve"
        intro="Yara Luxe's interior design services are complimentary and can be utilized in the eastern and inner-eastern suburbs of Melbourne, along with Mont Albert 3127."
      />

      <LocationFaqCta
        faqs={[
          { q: "Is there a need for a renovation and interior designer?", a: "A designer inside a designer can help start a vision prior to beginning renovation. This frequently results in a more unified and better decision-making process, including improved functionality and the final product." },
          { q: "Are you offer to redesign just one room?", a: "Yes, we do single-room jobs and complete home makeovers. One well-designed space can make all the difference in the overall atmosphere of a property." },
          { q: "Help to choose furniture?", a: "Yes, we can offer advice on furniture layouts, furniture sourcing and styles. Our aim is to pick pieces which will fit into your home and lifestyle." },
          { q: "Are you able to work with current furniture & decor?", a: "Yes, we can definitely integrate some of the current designs into the new design scheme. This will help them stay familiar and give it a new, unified appearance." },
          { q: "Are you involved with new homes?", a: "Absolutely, we help homeowners with the planning and finishing of new homes. Having a designer collaborate in the initial design phase can lead to a more cohesive and well-considered interior." },
          { q: "Approximately how long does it take to do the interior design work?", a: "Project duration is dependent on the size and complexity of the project itself. Clear expectations and timelines are communicated in the consultation process." }
        ]}
        ctaTitle="Start Your Mont Albert Interior Design Project"
        ctaBody="If you're looking to renovate, update, or design a new home or just need some advice, Yara Luxe can help you realize this vision. We want to make rooms that make everyday living better, beautiful and provide lasting comfort and style."
      />
    </div>
  );
}
