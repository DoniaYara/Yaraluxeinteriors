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
  title: "New Build Interior Design Melbourne | Yara Luxe",
  description: "New build interior design in Melbourne for layouts, lighting, joinery, materials and finishes from early planning. Start your project with expert support."
}, "/new-build-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/new-build-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/new-build-interior-design-melbourne"]) });

function ExpCard({ n, title, desc }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
    </div>
  );
}

export default function NewBuildServicesPage() {
  return (
    <div className="ylp svc-nb">
      <JsonLd data={servicePageGraph("/new-build-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>New Build Interior Design Melbourne</h1>
          <p className="hero-desc">Premium new build interior design Melbourne services. When you're building a new home, you have a great opportunity to design a space to reflect your lifestyle, personality and long-term vision — designed for modern living, luxury interior design and family home functionality.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
            <li>Luxury & Modern New Build Interiors</li>
            <li>Homes, Apartments & Townhouses</li>
            <li>Melbourne Interior Design Studio</li>
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
            <h2 className="h2">Premium New Build Interior Design Melbourne Services</h2>
            <p className="bt">Yara Luxe specialises in new-build interior design in Melbourne that is designed for modern living, luxury interior design and family home functionality.</p>
            <p className="bt">Our interior design team has more than 19 years of experience, and we work with homeowners, builders and architects to develop and design interiors that are elegant, functional and both enduring and contemporary from the outset.</p>
            <p className="bt">From luxury homes and family houses to new apartments and contemporary townhouses, Yara Luxe brings new-build interior design to your existing project, ensuring the home's layout, materials, finishes, furniture, lighting and styling are expertly planned.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/new-build-interior-design.webp`} alt={fileAlt("2026/06/new-build-interior-design.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Customized Interior Design for New Homes</h2>
            <p className="bt">An ideal new build house interior design project involves more than just choosing finishes and furniture. Each design element needs to complement each other and form a harmonious, functional, and aesthetically pleasing home.</p>
            <span className="lbl">Our new build interior design services are:</span>
            <div className="list-grid">
              <div className="list-grid-item">Space planning and layout optimisation</div>
              <div className="list-grid-item">Living room interior design</div>
              <div className="list-grid-item">Kitchen and dining room design</div>
              <div className="list-grid-item">Bathroom interior styling</div>
              <div className="list-grid-item">Bedroom and wardrobe design</div>
              <div className="list-grid-item">Lighting and electrical planning</div>
              <div className="list-grid-item">Flooring and material selection</div>
              <div className="list-grid-item">Colour consultation and paint selection</div>
              <div className="list-grid-item">Handcrafted cabinetry and storage</div>
              <div className="list-grid-item">Furniture & decor styling</div>
              <div className="list-grid-item">Window furnishing consultation</div>
              <div className="list-grid-item">Luxury home interior styling</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>We design interiors that are cohesive, comfortable and modern.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-for-new-build-homes.webp`} alt={fileAlt("2026/06/interior-design-for-new-build-homes.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Why Choose Yara Luxe for New Build Interior Design Melbourne</h2>
        <div className="cards-grid light-cards">
          <ExpCard n="01" title="19 Years of Industry Experience" desc="Our designers bring nearly two decades of industry experience, providing beautiful and practical fit-outs to new homes throughout Melbourne." />
          <ExpCard n="02" title="Tailored Interior Design Solutions" desc="Each house has its own characteristics. Our designers create concepts customised to your lifestyle, architectural style and long-term goals." />
          <ExpCard n="03" title="Functional & Practical Design" desc="Intelligent layouts, natural flows, optimised storage solutions and convenient living spaces are all our focus." />
        </div>
        <div className="cards-grid-2 light-cards">
          <ExpCard n="04" title="Luxury & Modern Design Expertise" desc="Whether it's a simple home or a grand luxury home, Yara Luxe designs timeless interiors that are suitable for today's lifestyle." />
          <ExpCard n="05" title="End-to-End Design Coordination" desc="We co-operate closely with builders, architects and trades to ensure interior design goes smoothly from planning through to completion." />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">New Build Home Interior Design Ideas</h2>
        <p className="dark-intro">When you're designing a new home, you have the chance to design the interior to suit your lifestyle and your tastes. Some popular new build home interior design ideas include:</p>
        <div className="cards-grid">
          <ExpCard n="01" title="Open-Plan Living Spaces" desc="Contemporary designs which make use of natural light, usefulness and family engagement." />
          <ExpCard n="02" title="Minimalist & Contemporary Interiors" desc="Neutral colours, clean lines and uncluttered layouts establish modern interiors that are timeless." />
          <ExpCard n="03" title="Luxury Kitchen & Bathroom Styling" desc="A high quality of materials, great fixtures and custom cabinetry adds to comfort and style." />
        </div>
        <div className="cards-grid">
          <ExpCard n="04" title="Smart Storage Solutions" desc="Custom wardrobes, hidden storage and built-in cabinetry enhance the functionality of the house." />
          <ExpCard n="05" title="Layered Lighting Design" desc="Strategic lighting can add to the ambiance, usability and architectural character." />
          <ExpCard n="06" title="Indoor-Outdoor Flow" desc="The interior/exterior connection creates a more open and unified space." />
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/new-build-interior.webp`} alt={fileAlt("2026/06/new-build-interior.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/interior-design-new-build-homes.webp`} alt={fileAlt("2026/06/interior-design-new-build-homes.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/new-build-home-interior-design.webp`} alt={fileAlt("2026/06/new-build-home-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/new-build-interior-designers.webp`} alt={fileAlt("2026/06/new-build-interior-designers.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/new-build-flat-interior-design.webp`} alt={fileAlt("2026/06/new-build-flat-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Living Room New Build Interior Design</h2>
            <p className="bt">One of the most significant rooms in a new house is the living room. Our new living room interior design services help you achieve comfort, style and relaxation — for entertaining and day-to-day life.</p>
            <span className="lbl">We assist with:</span>
            <ul className="ul">
              <li>Furniture layout planning</li>
              <li>TV and feature wall styling</li>
              <li>Lighting placement</li>
              <li>Colour coordination</li>
              <li>Flooring and rug selection</li>
              <li>Decor and artwork styling</li>
              <li>Custom storage solutions</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our goal is to create living spaces that feel elegant, practical and welcoming.</p>
          </div>
          <div className="card-dark">
            <h2>New Build Kitchen & Dining Interior Design</h2>
            <p className="lux-intro">In modern family life, the kitchen/dining area is frequently the hub of the home. Yara Luxe produces chic and extremely functional areas for everyday living and entertaining.</p>
            <span className="lux-label">Our services include:</span>
            <ul className="ul-dark">
              <li>Kitchen layout planning</li>
              <li>Cabinets & storage ideas</li>
              <li>Materials and stone selection</li>
              <li>Dining room styling</li>
              <li>Lighting recommendations</li>
              <li>Furniture coordination</li>
              <li>Open-plan design concepts</li>
            </ul>
            <p className="lux-outro">Aesthetic and functional elements are emphasised throughout.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Luxury Interior Design For New Build Homes</h2>
            <p className="bt">Luxury interiors are all about providing a luxurious living experience with a refined layout, luxurious finishes and elegant styling.</p>
            <span className="lbl">Our new-build luxury services include:</span>
            <ul className="ul">
              <li>Bespoke furniture styling</li>
              <li>Quality materials and flooring</li>
              <li>Designer lighting concepts</li>
              <li>Classy kitchen and bathroom designs</li>
              <li>Sophisticated colour palettes</li>
              <li>Quality fittings and fixtures</li>
              <li>Seamless room-to-room aesthetics</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Yara Luxe designs luxurious interiors that are both timeless and practical.</p>
          </div>
          <div className="card-dark">
            <h2>Modern New Build Interior Design Styles</h2>
            <p className="lux-intro">Our new build interior designers specialise in a wide range of styles for various homes and lifestyles.</p>
            <span className="lux-label">We create:</span>
            <ul className="ul-dark">
              <li>Modern interior design</li>
              <li>Contemporary interiors</li>
              <li>Minimalist home interiors</li>
              <li>Scandinavian-inspired spaces</li>
              <li>Japandi interiors</li>
              <li>Luxury modern homes</li>
              <li>Functional family interiors</li>
            </ul>
            <p className="lux-outro">Each and every interior is designed to meet your vision, lifestyle and architectural design.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Interior Design for New Build Homes</h2>
            <p className="bt">Interior design for new houses makes certain that your home is thoughtfully designed and visually linked by room.</p>
            <span className="lbl">We assist clients with:</span>
            <ul className="ul">
              <li>Interior layouts and flow</li>
              <li>Room functionality planning</li>
              <li>Kitchen and bathroom styling</li>
              <li>Furniture and decor coordination</li>
              <li>Colour palette development</li>
              <li>Flooring and finish selection</li>
              <li>Lighting design recommendations</li>
              <li>Space-saving storage ideas</li>
              <li>Luxury styling concepts</li>
              <li>Open-plan living design</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Planning interiors early prevents design blunders and ensures your home looks cohesive and functional.</p>
          </div>
          <div className="card-dark">
            <h2>Lighting, Colour & Material Selection</h2>
            <p className="lux-intro">The proper materials and finishes are a significant part of the interior design of a new building.</p>
            <span className="lux-label">Our team guides you through:</span>
            <ul className="ul-dark">
              <li>Interior lighting design</li>
              <li>Flooring selection</li>
              <li>Wall paint recommendations</li>
              <li>Coordinating of material and texture</li>
              <li>Colour palette consultation</li>
              <li>Decorative finishes and styling</li>
            </ul>
            <p className="lux-outro">Every detail of your design is coordinated with the rest of the aesthetics of your home.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Why Professional New Build Interior Design Matters</h2>
            <p className="bt">New build projects benefit greatly from working with a professional interior designer to make the houses being created feel more functional, cohesive and visually refined.</p>
            <span className="lbl">Benefits include:</span>
            <div className="list-grid">
              <div className="list-grid-item">Better space planning</div>
              <div className="list-grid-item">Increased storage efficiency</div>
              <div className="list-grid-item">Improved lighting functionality</div>
              <div className="list-grid-item">Cohesive room-to-room aesthetics</div>
              <div className="list-grid-item">Smarter material selections</div>
              <div className="list-grid-item">Reduced renovation mistakes</div>
              <div className="list-grid-item">Increased property value</div>
              <div className="list-grid-item">Improved daily living conditions</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Professional interior design ensures that your home starts out designed with thought.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/new-build-homes-interior-design.webp`} alt={fileAlt("2026/06/new-build-homes-interior-design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our New Build Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">We share your objectives, living needs, design tastes and construction plans.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Our designers prepare layouts, mood boards and colour palettes, developing design concepts tailored to the project.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Material & Finish Selection</div><p className="step-d">We assist in the selection of flooring, cabinetry, fixtures, lighting, furniture and finishes.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Builder & Trade Coordination</div><p className="step-d">Yara Luxe collaborates closely with builders and contractors for successful project execution.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling & Completion</div><p className="step-d">The last phase is dedicated to furniture positioning, decoration style and final touches to make the home beautiful.</p></div>
        </div>
      </section>

      <AreasWeServe
        title="Areas We Serve Across Melbourne"
        intro="Yara Luxe is proud to offer new-build interior design Melbourne services in Melbourne's prestigious residential suburbs such as:"
        outro="Interior design for luxury homes, family homes, renovation apartments and modern new homes in Melbourne."
      />

      <LocationFaqCta
        showServices={false}
        faqBg="#fff"
        faqs={[
          { q: "What are interior design services for new builds?", a: "Services offered are space planning, colour consultation, material selection, light design, furniture styling, storage solutions and total interior coordination." },
          { q: "Why would I need an interior designer for a new construction?", a: "A professional interior designer helps develop consistent interiors, increase functionality, work out layouts and prevent costly design mistakes in the construction process." },
          { q: "Does Yara Luxe work with builders and architects?", a: "Yes, we communicate with builders, architects and contractors to make sure that projects are well-coordinated." },
          { q: "Could Yara Luxe assist with luxury new-build interiors?", a: "Yes, we specialise in luxury new-build interior design specifically for high-end residential properties and modern lifestyles." },
          { q: "Do you offer modern and minimalist interior design?", a: "Yes, we specialise in modern, contemporary, minimalist, Scandinavian, Japandi and luxury interior designs." },
          { q: "Can you help with furniture and décor of new homes?", a: "Absolutely, Yara Luxe can offer a complete solution, including furnishing the new build property, decorative styling and finishing." }
        ]}
        ctaTitle="Get Your New Build Interior Design Off and Running Today"
        ctaBody="From the outset, build interiors that are elegant, functional and beautifully designed with the help and expertise of Yara Luxe's new build interior design Melbourne services. Our team has 19+ years' experience providing your lifestyle, architectural vision and modern living needs with personalised interiors."
      />
    </div>
  );
}
