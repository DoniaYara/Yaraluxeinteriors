import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer South Yarra | Yara Luxe",
  description: "Interior designer in South Yarra for apartments, penthouses, heritage homes and renovations. Create a refined, functional interior tailored to you."
}, "/interior-designer-south-yarra");

export default function SouthYarraPage() {
  return (
    <div className="ylp loc-com-b">
      <JsonLd data={locationPageGraph("/interior-designer-south-yarra")} />
      <LocationHero
        eyebrow="Interior Designer Service South Yarra"
        title="Interior Designer South Yarra"
        desc="Makeover your home, apartment, office or investment property with top-tier interior design in South Yarra 3141. We develop elegant, practical and enduring interior design and decor solutions that match the lifestyles of South Yarra residents."
      />

      <section className="dark-sp">
        <h2 className="h2w">Why pick our interior designer's service in South Yarra?</h2>
        <p className="dark-body">It is not just about picking furniture and colours. It requires extensive knowledge of architecture, spatial organization, lifestyle needs and local architectural forms.</p>
        <div className="c5">
          <div className="card"><span className="cnum">01</span><div className="ctitle">19 Years of Proven Experience</div><p className="cdesc">Luxury, residential and commercial interiors across Melbourne's most desirable suburbs.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Tailored Design Solutions</div><p className="cdesc">Unique concepts that fit your needs, function and budget.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">End-to-End Project Management</div><p className="cdesc">From conceptualization and furniture selection to final styling.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Local Knowledge of South Yarra</div><p className="cdesc">Apartments, penthouses, heritage properties and commercial spaces designed to meet the market.</p></div>
          <div className="card"><span className="cnum">05</span><div className="ctitle">Transparent Process</div><p className="cdesc">Clients are informed throughout the project with no surprises.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Our Interior Design Services in South Yarra</h2>
        <p className="bt">Residential Interior Design — Your house should be a representation of you and be comfortable and functional.</p>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Complete interior design of the home</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Apartment interior design</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Luxury penthouse design</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Townhouse interiors</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Heritage home renovations</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Home interior planning for new construction</span></div>
        </div>
        <p className="bt" style={{ marginTop: 32 }}>We focus on maximizing space, improving functionality and ensuring timeless aesthetics.</p>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Luxury Apartment Interior Design</h2>
            <p className="bt">South Yarra boasts some of the best apartment developments in the city. We specialize in creating apartments that:</p>
            <ul className="ul">
              <li>Make the best use of the available space on the floor.</li>
              <li>Enhance light flow in nature</li>
              <li>Design an open-plan living area.</li>
              <li>Use smart storage solutions on a regular basis.</li>
              <li>Provide high-quality furnishings and finishes.</li>
            </ul>
            <h2 className="h2" style={{ marginTop: 40 }}>Heritage Home Interior Design</h2>
            <p className="bt">Lots of homes in South Yarra are famous for their period architecture. We ensure a careful balance of:</p>
            <ul className="ul">
              <li>Original architectural features</li>
              <li>Modern lifestyle requirements</li>
              <li>Contemporary functionality</li>
              <li>Timeless interior styling</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/Affordable-interior-designers-Melbourne-1.webp`} alt={fileAlt("2026/06/Affordable-interior-designers-Melbourne-1.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Room-by-Room Interior Design South Yarra</h2>
        <p className="bt">We design each room with the same level of care, precision and personalised attention to detail.</p>
        <div className="room-grid">
          <div className="room-card"><h3>Kitchen Interior Design</h3><p>Layout optimization, cabinet design, material selection, lighting plans, appliance integration and storage solutions.</p></div>
          <div className="room-card"><h3>Bathroom Interior Design</h3><p>Luxury finishes, space optimization, modern fixtures and elegant lighting — a private sanctuary.</p></div>
          <div className="room-card"><h3>Living Room Design</h3><p>Spaces that encourage relaxation, support entertaining, improve visual flow and enhance natural lighting.</p></div>
          <div className="room-card"><h3>Bedroom Interior Design</h3><p>Custom storage, premium furnishings, soft lighting, functional layouts and luxury styling.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <OptImage src={`${U}/2026/06/interior-design-for-commercial.webp`} alt={fileAlt("2026/06/interior-design-for-commercial.webp")} sizes={SIZES.contentCol} />
          <div>
            <h2 className="h2">Commercial Interior Design South Yarra</h2>
            <p className="bt">We offer interior design solutions to:</p>
            <ul className="ul">
              <li>Offices</li>
              <li>Retail stores</li>
              <li>Cafés</li>
              <li>Restaurants</li>
              <li>Medical practices</li>
              <li>Professional service businesses</li>
              <li>Hospitality venues</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our commercial interiors create an enhanced customer experience and operate efficiently.</p>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Process</h2>
        <div className="steps steps-6">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">Goals, vision, budget and lifestyle needs.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Site Assessment</div><p className="step-d">Layout, architectural elements, lighting and structure.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Concept Development</div><p className="step-d">Design ideas, mood boards, colour palettes and space planning.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Design Presentation</div><p className="step-d">Layouts, finishes, furniture options and styling suggestions.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Project Coordination</div><p className="step-d">Suppliers, contractors, tradespeople and installation schedules.</p></div>
          <div className="step"><div className="step-c">06</div><div className="step-t">Final Styling</div><p className="step-d">Furniture, decorative items, art and finishing.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Interior Design Styles We Specialize In</h2>
        <p className="bt">We have a number of different design styles, as every client is different.</p>
        <div className="styles-row-3">
          <div className="style-card"><div className="sct">Contemporary Design</div><p className="scd">Elegant lines, exquisite details and contemporary functionality.</p></div>
          <div className="style-card"><div className="sct">Modern Luxury</div><p className="scd">High-quality materials, luxurious finishes and chic furnishings.</p></div>
          <div className="style-card"><div className="sct">Minimalist Interiors</div><p className="scd">Clean, simple, functional, and balanced designs.</p></div>
        </div>
        <div className="styles-row-3b">
          <div className="style-card"><div className="sct">Scandinavian Design</div><p className="scd">Bright, open spaces, rustic finishes and functional home ideas.</p></div>
          <div className="style-card"><div className="sct">Industrial Design</div><p className="scd">Raw materials, exposure and urban design.</p></div>
          <div className="style-card"><div className="sct">Transitional Style</div><p className="scd">A harmonious blend of classic style and modern comfort.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Benefits of Professional Interior Design</h2>
            <p className="bt">There are more than just aesthetic benefits to using an experienced interior designer.</p>
            <span className="lbl">Key benefits include:</span>
            <ul className="ul">
              <li>Better Space Utilization — Every square metre is utilized.</li>
              <li>Increased Property Value — Designed with resale and rental in mind.</li>
              <li>Reduced Renovation Mistakes — Costly design and construction mistakes are avoided.</li>
              <li>Access to Industry Resources — Trusted suppliers, contractors and exclusive products.</li>
              <li>Time Savings — We take care of the details.</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Designing for South Yarra's Lifestyle</h2>
            <p className="bt-w">Luxury shopping, fine dining, chic apartments and prestigious streets around Chapel Street, Toorak Road and the Domain precinct.</p>
            <p className="bt-w">Our interior design philosophy is in line with the expectations of people who live in South Yarra:</p>
            <ul className="ul-dark">
              <li>Luxury finishes</li>
              <li>Smart storage solutions</li>
              <li>Functional open-plan layouts</li>
              <li>High-end furnishings</li>
              <li>Contemporary styling</li>
              <li>Sustainable design principles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Sustainable Interior Design Solutions</h2>
            <p className="bt">Nowadays, many homeowners are concerned with designing their homes in an eco-friendly way.</p>
            <span className="lbl">Our sustainable design approaches are:</span>
            <ul className="ul">
              <li>Energy-efficient lighting</li>
              <li>Eco-friendly materials</li>
              <li>Sustainable furniture sourcing</li>
              <li>Low-VOC finishes</li>
              <li>Long-lasting design solutions</li>
            </ul>
            <h2 className="h2" style={{ marginTop: 40 }}>Why South Yarra Homeowners Trust Our Team</h2>
            <p className="bt">Our designers bring 19+ years of industry experience supporting clients to turn residential and commercial spaces into functional, beautiful, unique interiors. Clients select us because we offer:</p>
            <ul className="ul">
              <li>Personalized service</li>
              <li>Extensive industry experience</li>
              <li>High-quality design outcomes</li>
              <li>Excellent attention to detail</li>
              <li>Transparent communication</li>
              <li>Reliable project management</li>
            </ul>
          </div>
          <OptImage src={`${U}/2026/06/commercial-office-interior-design.webp`} alt={fileAlt("2026/06/commercial-office-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="South Yarra"
        title="Areas We Serve"
        intro="Alongside South Yarra 3141, Yara Luxe provides interior design across Melbourne's inner east, bayside and surrounding suburbs:"
      />

      <LocationFaqCta
        includeCommercial={true}
        faqs={[
          { q: "What is the price of interior design in South Yarra?", a: "Costs depend on project size, scope, property type and design requirements. After initial consultation, we provide a personalized quotation." },
          { q: "Are you an apartment interior designer?", a: "Yes. We regularly create apartments, high-rise residential properties and penthouses across South Yarra." },
          { q: "Are you willing to do some renovations?", a: "Absolutely. We help plan renovations and space redesign, find materials, and coordinate projects." },
          { q: "Do you provide furniture and styling services?", a: "Yes. Complete furniture sourcing, styling and final installation services are provided." },
          { q: "What is the timeline of an interior design project?", a: "Schedules depend on complexity, property size and construction needs. A detailed timeline is provided during planning." }
        ]}
        ctaTitle="Need the perfect interior design? Contact us for your South Yarra interior design consultation."
        ctaBody="Our team in South Yarra 3141 has 19 years of experience creating interiors that are elegant, functional and high-value — from home renovations to apartment makeovers and office fit-outs."
      />
    </div>
  );
}
