import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { servicePageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import BookingBar from "@/components/BookingBar";
import { SERVICE_OG_IMAGE, fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Bathroom Interior Design Melbourne | Yara Luxe",
  description: "Bathroom interior design in Melbourne for refined, functional spaces with tailored layouts, fixtures, lighting, flooring and material selections."
}, "/bathroom-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/bathroom-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/bathroom-interior-design-melbourne"]) });

function ExpCard({ n, title, desc }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
    </div>
  );
}

export default function BathroomServicesPage() {
  return (
    <div className="ylp svc-bath">
      <JsonLd data={servicePageGraph("/bathroom-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Bathroom Interior Design Melbourne</h1>
          <p className="hero-desc">Transform your bathroom into a stylish & functional space. Your bathroom must be comfortable, contemporary and well designed but remain functional for everyday living — our Melbourne bathroom interior designer team produces beautiful, personalised bathroom spaces to suit your lifestyle, home style and renovation objectives.</p>
          <ul className="hero-checks">
            <li>19 Years Experience</li>
            <li>Luxury Bathroom Interiors</li>
            <li>Bathroom Renovations & Design</li>
            <li>Melbourne Bathroom Designers</li>
          </ul>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href="/residential-interior-design-melbourne" className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <BookingBar />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="ylp-grid">
          <div>
            <h2 className="h2">Personalised Bathroom Renovation & Design Services</h2>
            <p className="bt">We can provide a luxury ensuite bathroom, compact powder room renovation or entire bathroom renovation interiors designer Melbourne solution as needed for an outdated bathroom space, to enhance it with smart layouts, quality finishes and contemporary design features.</p>
            <p className="bt">We take the time to plan your bathroom interior design concept, as well as select the finishes and fittings, all with attention to detail and creativity.</p>
            <p className="bt">We are highly trained bathroom interior designers, aiming to balance aesthetics and functionality. Each bathroom is meticulously designed to optimise space usage, storage, lighting and comfort.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/bathroom-interior-designer-melbourne.webp`} alt={fileAlt("2026/06/bathroom-interior-designer-melbourne.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why Homeowners Choose Our Bathroom Interior Designer</h2>
        <p className="bt" style={{ maxWidth: 760, marginBottom: 40 }}>Choosing the right interior designer for bathroom remodel projects is essential for achieving both beauty and functionality. We design and create a bespoke interior bathroom solution to complement your home.</p>
        <div className="cards-grid-2 light-cards" style={{ marginTop: 0 }}>
          <ExpCard n="01" title="Customised Bathroom Designs" desc="Each client has their own tastes, needs and budgets. We design your bathroom interiors to be according to your life and vision." />
          <ExpCard n="02" title="Smart Space Planning" desc="We maximise space planning for enhanced movement, storage, light and use, particularly in small bathroom interior design jobs." />
          <ExpCard n="03" title="Premium Material Selection" desc="Whether it's selecting high-quality tiles and vanities or choosing fixtures and flooring, we assist in choosing materials that will enhance the overall interior of the bathroom." />
          <ExpCard n="04" title="Modern & Luxury Concepts" desc="We specialise in contemporary bathroom interior design and luxury bathroom interior design ideas that not only boost your home's worth but also improve its comfort and liveability." />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Professional Bathroom Interior Design Services in Melbourne</h2>
        <p className="bt" style={{ maxWidth: 760, marginBottom: 32 }}>We are highly trained bathroom interior designers, aiming at balancing aesthetics and functionality. Each bathroom is meticulously designed to optimise space usage, storage, lighting and comfort.</p>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Bathroom layout planning</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Vanity cabinetry design</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Bathroom interior flooring selection</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Interior bathroom lighting design</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Selecting tiles and materials</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Planning the shower and/or bathtub area</span></div>
          <div className="svc-item"><span className="sn">07</span><span className="st">Choosing fixtures and fittings</span></div>
          <div className="svc-item"><span className="sn">08</span><span className="st">Space-saving storage solutions</span></div>
          <div className="svc-item"><span className="sn">09</span><span className="st">Luxury bathroom styling</span></div>
          <div className="svc-item"><span className="sn">10</span><span className="st">Small bathroom interior design ideas</span></div>
        </div>
        <p className="svc-note">Whether you prefer contemporary, minimalist, Japandi, classic, or luxury interior design bathroom styles, we create customised solutions tailored to your home.</p>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Modern Bathroom Interior Design Ideas</h2>
        <p className="dark-intro">Today, bathrooms are designed to be simple, elegant and functional. A few popular bathroom interior design ideas are:</p>
        <div className="cards-grid">
          <ExpCard n="01" title="Floating Vanities" desc="To achieve a clean, simple and large look along with high floor visibility." />
          <ExpCard n="02" title="Frameless Glass Showers" desc="A very common addition to the modern bathroom interior design that makes it clean and luxurious." />
          <ExpCard n="03" title="Natural Textures & Japandi Styling" desc="Minimalism and natural materials create a peaceful ambiance in Japandi interior design bathroom ideas." />
        </div>
        <div className="cards-grid-2">
          <ExpCard n="04" title="Statement Lighting" desc="Designing interior bathroom lighting carefully enhances aesthetic and functional features of the bathroom." />
          <ExpCard n="05" title="Neutral Colour Palettes" desc="Timeless bathroom interior decoration styles are created by soft tones and textured finishes." />
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/bathroom-interior.webp`} alt={fileAlt("2026/06/bathroom-interior.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/bathroom-interior-designer.webp`} alt={fileAlt("2026/06/bathroom-interior-designer.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/bathroom-interior-designers.webp`} alt={fileAlt("2026/06/bathroom-interior-designers.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/modern-bathroom-interior-design.webp`} alt={fileAlt("2026/06/modern-bathroom-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/small-bathroom-interior-design.webp`} alt={fileAlt("2026/06/small-bathroom-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Bathroom Renovation Interior Design Melbourne Solutions</h2>
            <p className="bt">A bathroom renovation isn't merely about picking out tile and paint colours. Throughout a professional bathroom renovation, an interior designer Melbourne service is a matter where all the elements of the design play together in perfect harmony.</p>
            <span className="lbl">We assist with:</span>
            <ul className="ul">
              <li>Renovation planning</li>
              <li>Design concepts and mood boards</li>
              <li>Material coordination</li>
              <li>Bathroom styling</li>
              <li>Functional layouts</li>
              <li>Storage optimisation</li>
              <li>Lighting placement</li>
              <li>Interior bathroom wall paint recommendations</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>The objective is to design a bathroom that is updated, calming and functional.</p>
          </div>
          <div className="card-dark">
            <h2>Small Bathroom Interior Design Solutions</h2>
            <p className="lux-intro">There is no need to settle for a plain utility box when it comes to style. Our interior bathroom designers have expertise in designing functional layouts in small bathrooms.</p>
            <span className="lux-label">We employ intelligent technologies including:</span>
            <ul className="ul-dark">
              <li>Wall-mounted storage</li>
              <li>Large mirrors for visual space</li>
              <li>Light colour palettes</li>
              <li>Space-efficient vanities</li>
              <li>Vertical storage concepts</li>
              <li>Minimalist fittings</li>
            </ul>
            <p className="lux-outro">The following design methods can make the smaller bathroom appear brighter, bigger, and more efficient.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Luxury Bathroom Interior Design</h2>
            <p className="bt">Luxury bathrooms combine comfort, timelessness and luxurious finishes. For luxury bathroom designs, we specialise in producing bathroom interiors that evoke a spa atmosphere with a focus on relaxation and refinement.</p>
            <span className="lbl">Features may include:</span>
            <ul className="ul">
              <li>Custom vanities</li>
              <li>Premium stone surfaces</li>
              <li>Designer lighting</li>
              <li>Freestanding bathtubs</li>
              <li>Walk-in showers</li>
              <li>Elegant feature walls</li>
              <li>Exclusive fittings and finishes</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>The most luxurious bathroom should not only be a pretty place but also a place that will make everyday life more comfortable and will enhance the value of the property.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-designer-for-bathroom-remodel.webp`} alt={fileAlt("2026/06/interior-designer-for-bathroom-remodel.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Interior Bathroom Lighting & Flooring Selection</h2>
            <p className="bt">Lighting and flooring are key elements to the successful design of your bathroom interior in Melbourne.</p>
            <span className="lbl">Interior bathroom lighting — layered solutions:</span>
            <div className="list-grid">
              <div className="list-grid-item">Ambient lighting</div>
              <div className="list-grid-item">Vanity lighting</div>
              <div className="list-grid-item">Accent lighting</div>
              <div className="list-grid-item">Task lighting</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>This provides both usability and ambiance. For bathroom interior flooring, choosing the right flooring will enhance its durability, protection and beauty. We assist clients with the selection of materials that are appropriate for a bathroom that is prone to moisture and appropriate to the overall bathroom interior design.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/bathroom-interior-design.webp`} alt={fileAlt("2026/06/bathroom-interior-design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Bathroom Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation & Discovery</div><p className="step-d">We talk about your style choices, space needs and renovation objectives.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Design Planning</div><p className="step-d">Our interior designer for bathrooms makes layouts and concepts and suggests materials.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Material & Fixture Selection</div><p className="step-d">Assists in selecting tiles, fittings, colours, lighting and finishes.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Coordination</div><p className="step-d">We guarantee a well-managed design process, paying close attention to details.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling</div><p className="step-d">The final step is to put the finishing touches on the bathroom interior.</p></div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Bathroom Interior Designer Near Me in Melbourne"
        intro="We liaise closely with homeowners to design bathrooms that are elegant, comfortable and practical and meet the interior styling trends of the times in Australia. Our team is proud to offer modern bathroom interior design and renovation services throughout Melbourne's top-end residential suburbs, such as:"
        outro="Our team provides customised solutions for luxury bathroom interior design, small bathroom interior design, or complete bathroom renovation interior designer Melbourne services to suit your home, lifestyle and renovation objectives."
      />

      <LocationFaqCta
        showServices={false}
        faqBg="#fff"
        faqs={[
          { q: "Are there bathroom interior design Melbourne services for small bathrooms?", a: "Absolutely, we are experts in small bathroom interior design ideas that make the most out of space, function and style." },
          { q: "Can you help with bathroom renovations?", a: "Absolutely! Our bathroom renovation interior designer Melbourne services cover all aspects of planning, styling, selecting materials and design management." },
          { q: "What is your experience with luxury bathroom interior design?", a: "With 19 years of experience, we do indeed design luxury bathroom interior ideas for luxury and modern homes." },
          { q: "Are there any awkward lighting or flooring in the bathroom?", a: "Yes, we can give you expert advice on interior bathroom lighting and bathroom interior flooring options." },
          { q: "What types of bathrooms do you create?", a: "Modern, minimalist, Japandi, contemporary, classic and luxury bathroom designs are created according to your preferences." }
        ]}
        ctaTitle="Transform Your Bathroom Into a Stylish & Functional Space"
        ctaBody="Our team provides customised solutions for luxury bathroom interior design, small bathroom interior design, or complete bathroom renovation interior designer Melbourne services to suit your home, lifestyle and renovation objectives."
      />
    </div>
  );
}
