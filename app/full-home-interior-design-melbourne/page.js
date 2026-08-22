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
  title: "Full Home Interior Design Melbourne | Yara Luxe",
  description: "Full home interior design in Melbourne from space planning and finishes to furniture, storage, lighting and styling. Create one cohesive, refined home."
}, "/full-home-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/full-home-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/full-home-interior-design-melbourne"]) });

function ExpCard({ n, title, desc }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
    </div>
  );
}

const MELBOURNE_AREAS = [
  ["Toorak","3142"],["Brighton","3186"],["Balwyn","3103"],["Canterbury","3126"],
  ["South Yarra","3141"],["Kew","3101"],["Hawthorn","3122"],["Balwyn North","3104"],
  ["Camberwell","3124"],["Mont Albert","3127"],["Albert Park","3206"],["Elwood","3184"],
  ["Armadale","3143"],["Malvern","3144"],["Prahran","3181"],["Templestowe","3106"],["Brighton East","3187"]
];

export default function FullHomeServicesPage() {
  return (
    <div className="ylp svc-fh">
      <JsonLd data={servicePageGraph("/full-home-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">Transform Your Home With Elegant & Functional Interior Design</div>
          <h1>Full Home Interior Design Melbourne</h1>
          <p className="hero-desc">With more than 19 years of industry experience providing high-end full home interior design Melbourne solutions for contemporary living, classic style and function, our designers bring deep expertise to every project.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href="/residential-interior-design-melbourne" className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <BookingBar />

      <section className="sp" style={{ background: "#fff" }} id="ylp-services">
        <div className="ylp-grid">
          <div>
            <h2 className="h2">Complete Home Interior Design Solutions</h2>
            <p className="bt">We offer complete home interior design solutions to establish a harmonious, functional and aesthetically satisfying interior throughout your home.</p>
            <p className="bt">Your house should feel elegant, inviting and aesthetically pleasing to the lifestyle you live in it each day. If you're looking to renovate an existing home or create a new one, or just looking for a makeover for certain areas, our experienced interior designers can offer a personalized interior to suit your lifestyle, your personality and your vision.</p>
            <p className="bt">Designing concepts, planning spaces, choosing furnishings, lighting, coordinating renovations, and styling are all handled with creativity, accuracy and attention to detail at Yara Luxe.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/Full-Home-Interior-Design-Melbourne.webp`} alt={fileAlt("2026/06/Full-Home-Interior-Design-Melbourne.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">We specialise in:</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Interior design for living room</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Bedroom interior design</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Kitchen interior design</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Bathroom interior design</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Dining room design</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Wardrobe and storage solutions</span></div>
          <div className="svc-item"><span className="sn">07</span><span className="st">The decor and styling of the interior</span></div>
          <div className="svc-item"><span className="sn">08</span><span className="st">The choice of furniture and decor</span></div>
          <div className="svc-item"><span className="sn">09</span><span className="st">Lighting design consultation</span></div>
          <div className="svc-item"><span className="sn">10</span><span className="st">Flooring and material selection</span></div>
          <div className="svc-item"><span className="sn">11</span><span className="st">Colour consultation services</span></div>
          <div className="svc-item"><span className="sn">12</span><span className="st">Made to order cabinetry and fittings</span></div>
          <div className="svc-item"><span className="sn">13</span><span className="st">Interior architectural design</span></div>
          <div className="svc-item"><span className="sn">14</span><span className="st">Luxury home interior design</span></div>
          <div className="svc-item"><span className="sn">15</span><span className="st">Modern home interior design</span></div>
        </div>
        <p className="svc-note">Each design is created to fit your property type, lifestyle needs and future goals.</p>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="exp-two">
          <div>
            <h2 className="h2">19 Years of Interior Design Excellence</h2>
            <p className="bt">With nearly two decades of industry experience, our designers have established a reputation for creating elegant, practical and high-end interior spaces throughout Melbourne.</p>
            <span className="lbl">Based on our experience, we can:</span>
            <ul className="ul">
              <li>Design very functional layouts</li>
              <li>Provide hassle-free coordination for renovations.</li>
              <li>Advise top quality materials and finishes</li>
              <li>Have an understanding of the demands of contemporary living</li>
              <li>Create timeless interior designs that add value to the property.</li>
              <li>Deliver customised designed solutions for all clients</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>With our dedication to craftsmanship, our elegant designs, and focus on the client, Yara Luxe has become a trusted name in Melbourne interior design.</p>
          </div>
          <div className="exp-img">
            <OptImage src={`${U}/2026/06/Interior-Design-Excellence.webp`} alt={fileAlt("2026/06/Interior-Design-Excellence.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="dark-sp">
        <div style={{ marginBottom: 52 }}>
          <h2 className="h2w">Why Professional Full Home Interior Design Matters</h2>
          <p className="dark-intro" style={{ marginBottom: 0 }}>Professional home interior design Melbourne services can totally transform your way of living and the long value of your property. Professional interior design aids in the following:</p>
        </div>
        <div className="cards-grid-4">
          <ExpCard n="01" title="Better space utilisation" desc="Improved home functionality and enhanced natural lighting throughout every room." />
          <ExpCard n="02" title="Increased storage efficiency" desc="Cohesive room-to-room styling with a modern and classic style." />
          <ExpCard n="03" title="More comfort and functionality" desc="Improved home appearance and value through professional design." />
          <ExpCard n="04" title="Orderly & elegant living" desc="An expertly developed house makes for a more orderly, elegant, and pleasurable living area." />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}>
          <h2 className="h2">Why Choose Yara Luxe Interiors</h2>
        </div>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Personalised Interior Concepts</h3><p>Each client is different and has different preferences and lifestyle requirements. Yara Luxe designs concepts unique to you, combining functionality and comfort.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Functional Space Planning</h3><p>We have a team that provides careful design planning to ensure maximum flow, storage, usage and natural light throughout the house.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Premium Material & Furniture Selection</h3><p>Whether it's flooring, fixtures, furniture or decor, we can help our client work through the selection process of high-quality materials to raise the standards in each space.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>Complete Design Coordination</h3><p>We oversee all the design process to guarantee consistency, quality and a smooth experience throughout the design process, from concept to completion.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Expertise in Luxury & Modern Design</h3><p>From contemporary interior designs, minimalist design principles, and Japandi design touches to luxury interior design, Yaraluxe provides elegant spaces for contemporary life.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of designing premium residential interiors across Melbourne's most sought-after suburbs gives our designers a deep understanding of the local market.</p></div>
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Modern-Interior-Design.webp`} alt={fileAlt("2026/06/Modern-Interior-Design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/luxury-home-interior-design-Melbourne-company.webp`} alt={fileAlt("2026/06/luxury-home-interior-design-Melbourne-company.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Luxury-Home-Interior-Design-Melbourne.webp`} alt={fileAlt("2026/06/Luxury-Home-Interior-Design-Melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Full-Home-Renovation.webp`} alt={fileAlt("2026/06/Full-Home-Renovation.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Interior-Design-Excellence.webp`} alt={fileAlt("2026/06/Interior-Design-Excellence.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Full Home Renovation & Interior Design Solutions</h2>
            <p className="bt">Beautiful finishes are just not enough for a successful renovation. Our home interior design Melbourne services offer a blend of style, functionality, and design acumen.</p>
            <span className="lbl">We assist with:</span>
            <ul className="ul">
              <li>Complete home renovations plans</li>
              <li>Open-plan living concepts</li>
              <li>Interior architectural design</li>
              <li>Space optimisation</li>
              <li>Storage and Cabinetry Solutions</li>
              <li>The choice of fixture and fittings.</li>
              <li>Interior painting consultation</li>
              <li>Flooring systems and wall finishes.</li>
              <li>Home decor and furniture coordination</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Luxury Home Interior Design Melbourne</h2>
            <p className="lux-intro">Luxury interiors are the result of creating a luxurious living experience through their layout, luxurious finishes and styling. Yaraluxe creates timeless interiors, which offer luxury and everyday functionality.</p>
            <span className="lux-label">Our luxury home interior design Melbourne services consist of:</span>
            <ul className="ul-dark">
              <li>Bespoke furniture styling</li>
              <li>Premium material selection</li>
              <li>Elegant lighting concepts</li>
              <li>Designed kitchens and bathrooms.</li>
              <li>Special high-design fixtures and finishes.</li>
              <li>Sophisticated colour palettes</li>
              <li>Seamless room-to-room aesthetics</li>
              <li>Customised interior design concepts</li>
              <li>Timeless luxury finishes and detailing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Modern Interior Design for Contemporary Homes</h2>
            <p className="bt">The design of modern houses needs intelligent design solutions that combine simplicity, comfort and functionality.</p>
            <span className="lbl">We use a contemporary home interior design style that includes:</span>
            <ul className="ul">
              <li>Clean and minimal layouts</li>
              <li>Natural light optimisation</li>
              <li>Smart storage solutions</li>
              <li>Neutral and earthy colour palettes</li>
              <li>Functional furniture arrangements</li>
              <li>Contemporary textures and finishes</li>
              <li>Stylish yet practical living environments</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We design beautiful interiors that are always classy, classic and appropriate to contemporary living.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Interior-design-for-living-room.webp`} alt={fileAlt("2026/06/Interior-design-for-living-room.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Interior Design Styles We Create</h2>
            <p className="bt">Yaraluxe has expertise in a variety of interior designs for different homes and tastes.</p>
            <span className="lbl">We create:</span>
            <div className="list-grid">
              <div className="list-grid-item">Modern interior design</div>
              <div className="list-grid-item">Neo classic Interior design</div>
              <div className="list-grid-item">Contemporary interiors</div>
              <div className="list-grid-item">Minimalist home interiors</div>
              <div className="list-grid-item">Scandinavian-inspired interiors</div>
              <div className="list-grid-item">Japandi interior design</div>
              <div className="list-grid-item">Glam interior design</div>
              <div className="list-grid-item">Luxury interior styling</div>
              <div className="list-grid-item">Elegant classic interiors</div>
              <div className="list-grid-item">Functional family home designs</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Each interior is designed to suit your lifestyle and aesthetic.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/home-interior-design.webp`} alt={fileAlt("2026/06/home-interior-design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Custom Furniture, Wardrobes & Storage Solutions</h2>
            <p className="bt">Storage is a key aspect of designing well-functioning spaces and rooms that are visually pleasing.</p>
            <span className="lbl">Our services include:</span>
            <ul className="ul">
              <li>Custom wardrobe design</li>
              <li>Built-in cabinetry solutions</li>
              <li>Living room storage design</li>
              <li>Bedroom storage optimisation</li>
              <li>Kitchen cabinetry styling</li>
              <li>Functional home organisation</li>
              <li>Bespoke furniture selection</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We develop functional storage solutions with a smart design.</p>
          </div>
          <div className="card-dark">
            <h2>Lighting, Colour & Material Selection</h2>
            <p className="lux-intro">Lighting and material is an important part in the proper interior design.</p>
            <span className="lux-label">Our team can expertly guide you in the following:</span>
            <ul className="ul-dark">
              <li>Interior lighting design</li>
              <li>Flooring selection</li>
              <li>Wall paint recommendations</li>
              <li>Colour palette coordination</li>
              <li>Material and texture selection</li>
              <li>Decorative finishes and styling</li>
            </ul>
            <p className="lux-outro">We make sure all the design aspects complement each other and produce beautiful and harmonious interiors.</p>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our complete home interior design process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Consultation</div><p className="step-d">You share your ideas, aspirations, lifestyle requirements and project concepts.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Our designers produce layouts, mood boards, colour palettes and customised interior ideas.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Material & Furniture Selection</div><p className="step-d">We help choose finishes, lighting, furniture, flooring, and styling accessories that complement the overall design direction.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Project Coordination</div><p className="step-d">Yara Luxe oversees the implementation process to guarantee quality, uniformity and detailed work during the project.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Final Styling & Completion</div><p className="step-d">The last part is about styling and finishing elements that tie the entire house up together in a good way.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Our Approach to Interior Design</h2>
            <p className="bt">We feel the quality of interior design should enhance both the beauty and functionality of everyday life at Yaraluxe.</p>
            <span className="lbl">Our design philosophy is based on:</span>
            <ul className="ul">
              <li>Personalised design solutions</li>
              <li>Functional luxury interiors</li>
              <li>Attention to detail</li>
              <li>Timeless styling concepts</li>
              <li>Lifestyle-focused layouts</li>
              <li>Comfortable and practical spaces</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We design interior spaces which are not only aesthetically pleasing but also comfortable, functional and inspiring.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/full-home-interior-design-services-.webp`} alt={fileAlt("2026/06/full-home-interior-design-services-.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Service Areas throughout Melbourne"
        intro="Yara Luxe are proud to offer full home interior design Melbourne services throughout Melbourne's premium residential neighbourhoods, such as:"
        outro="From luxurious interiors to modern designs and comprehensive home makeovers, Yara Luxe offers personalised interior design solutions for your home and lifestyle."
        items={MELBOURNE_AREAS}
      />

      <LocationFaqCta
        showServices={false}
        faqs={[
          { q: "What does full home interior design services include?", a: "Space planning, furniture selection, lighting design, colour consultation, styling, material selection and complete interior coordination are all services we offer." },
          { q: "Is Yara Luxe a luxury home interior design Melbourne company?", a: "Yes, Yara Luxe is a company specialising in luxury home interior design and solutions that are suitable for modern lifestyles and luxurious residential properties." },
          { q: "Is Yara Luxe able to assist with home renovations?", a: "Yes, we are available to give you interior design Melbourne solutions for your home renovation project, covering planning, styling and project co-ordination." },
          { q: "Are you working on contemporary and modern interior design?", a: "Yes, we are experts in modern, contemporary, minimalist, Scandinavian, Japandi and luxury interior design styles." },
          { q: "Are you able to design a room for a larger home project?", a: "Yes, Yara Luxe can provide you with partial and/or full home interior design solutions depending on your needs." }
        ]}
        ctaTitle="Start Your Full Home Interior Design Project Today"
        ctaBody="Enjoy a stunning, functional interior design with Yara Luxe's expert full home interior designer in Melbourne. Backed by 19+ years of interior design expertise, we design personalised interiors that are elegant, functional and timeless."
      />
    </div>
  );
}
