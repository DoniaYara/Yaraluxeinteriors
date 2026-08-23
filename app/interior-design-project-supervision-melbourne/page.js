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
  title: "Interior Design Project Supervision Melbourne | Yara Luxe",
  description: "Interior design project supervision in Melbourne to coordinate trades, materials and styling while keeping your approved design vision on track."
}, "/interior-design-project-supervision-melbourne", { image: SERVICE_OG_IMAGE["/interior-design-project-supervision-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/interior-design-project-supervision-melbourne"]) });

function ExpCard({ n, title, desc }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
    </div>
  );
}

export default function SupervisionServicesPage() {
  return (
    <div className="ylp svc-sup">
      <JsonLd data={servicePageGraph("/interior-design-project-supervision-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">Professional Interior Design Project Supervision Melbourne</div>
          <h1>Interior Design Project Supervision Melbourne</h1>
          <p className="hero-desc">At Yara Luxe we offer interior design project supervision in Melbourne, which guarantees your interior project is completed to the highest design specifications in a timely and streamlined manner.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
            <li>Luxury & Modern Interior Expertise</li>
            <li>Renovations & New Builds</li>
            <li>Full Project Coordination</li>
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
            <h2 className="h2">Professional Interior Design Project Supervision Melbourne</h2>
            <p className="bt">At Yara Luxe we offer interior design project supervision in Melbourne, which guarantees your interior project is completed to the highest design specifications in a timely and streamlined manner.</p>
            <p className="bt">Our team has more than 19 years of experience in the industry and can handle any aspect of the interior design implementation process, assisting homeowners, builders, and contractors to make their beautifully designed spaces a reality.</p>
            <p className="bt">Whether you are renovating or building new, from interior to exterior, Yara Luxe provides you with the highest quality and the most functional and consistent design throughout the project.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/supervision1.webp`} alt={fileAlt("2026/06/supervision1.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="exp-two">
          <div>
            <h2 className="h2">What Is Interior Design Project Supervision?</h2>
            <p className="bt">Interior design project supervision is the supervision that heads the execution of an interior design project to guarantee the outcome is in line with the approved interior design concept, layout, materials and styling vision.</p>
            <span className="lbl">These are supervision services that we offer:</span>
            <ul className="ul">
              <li>Site inspections and progress monitoring</li>
              <li>Builder and contractor coordination</li>
              <li>Design implementation management</li>
              <li>Material and finish verification</li>
              <li>Furniture and fixture placement supervision</li>
              <li>Lighting and layout coordination</li>
              <li>Quality control inspections</li>
              <li>Styling and final detailing</li>
              <li>Timeline and workflow coordination</li>
              <li>Design consistency management</li>
            </ul>
          </div>
          <div className="exp-img">
            <OptImage src={`${U}/2026/06/supervision2.webp`} alt={fileAlt("2026/06/supervision2.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Why Choose Yara Luxe for Interior Design Project Supervision</h2>
        <div className="cards-grid">
          <ExpCard n="01" title="19 Years of Industry Experience" desc="With nearly two decades of interior design expertise, our team understands how to manage projects efficiently while maintaining premium design quality." />
          <ExpCard n="02" title="Attention to Detail" desc="We carefully monitor every stage of the project to ensure materials, finishes, layouts, and installations match the approved design concept." />
          <ExpCard n="03" title="Seamless Coordination" desc="Our team works closely with builders, architects, suppliers, and trades to keep the project organised and running smoothly." />
        </div>
        <div className="cards-grid-2">
          <ExpCard n="04" title="Luxury & Modern Interior Expertise" desc="From contemporary homes to luxury residences, we supervise projects with a strong focus on elegant and functional design outcomes." />
          <ExpCard n="05" title="Stress-Free Project Management" desc="We help clients avoid unnecessary delays, miscommunication, and costly design errors during implementation." />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Our Interior Design Project Supervision Services</h2>
        <p className="bt">Professional project supervision in interior design will make sure that your project is efficiently functioning and will preserve the essence of your vision. Yara Luxe provides complete supervision services for residential and luxury interior projects across Melbourne.</p>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Residential Interior Design Supervision</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">New Build Interior Supervision</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Luxury Interior Project Supervision</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Renovation Project Coordination</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Furniture & Styling Supervision</span></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">What We Supervise During Interior Projects</h2>
            <p className="bt">Whether you're doing a renovation or building a new home, professional supervision makes sure that all design details are done right.</p>
            <span className="lbl">Our services support:</span>
            <ul className="ul">
              <li>Flooring installation</li>
              <li>Cabinetry and joinery work</li>
              <li>Paint colours and finishes</li>
              <li>Lighting placement and fixtures</li>
              <li>Bathroom and kitchen finishes</li>
              <li>Furniture delivery and placement</li>
              <li>Decorative styling elements</li>
              <li>Window furnishings and blinds</li>
              <li>Wall finishes and textures</li>
              <li>Spatial layouts and functionality</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Yara Luxe has a collaborative approach with all project stakeholders to achieve a seamless implementation from concept to completion.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/supervision3.webp`} alt={fileAlt("2026/06/supervision3.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Why Interior Design Project Supervision Matters</h2>
            <p className="bt">Professional interior design project supervision helps maintain the integrity of your design vision while ensuring the project runs efficiently.</p>
            <span className="lbl">Benefits include:</span>
            <ul className="ul">
              <li>Better project organisation</li>
              <li>Reduced construction mistakes</li>
              <li>Improved communication between trades</li>
              <li>Consistent design implementation</li>
              <li>Better quality control</li>
              <li>Time and cost efficiency</li>
              <li>Smoother project workflow</li>
              <li>Higher-quality final results</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>The final stage focuses on furniture placement, styling oversight, and other details to make the interior look beautiful.</p>
          </div>
          <div className="card-dark">
            <h2>Luxury Interior Project Supervision Melbourne</h2>
            <p className="lux-intro">When it comes to luxury interiors, there is a great need for attention to detail, premium craftsmanship and coordination.</p>
            <span className="lux-label">Our luxury interior project supervision in Melbourne focuses on:</span>
            <ul className="ul-dark">
              <li>Top quality finishes and materials</li>
              <li>Bespoke cabinetry installations</li>
              <li>Premium lighting design implementation</li>
              <li>Designer furniture coordination</li>
              <li>Sophisticated interior styling</li>
              <li>Architectural feature integration</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/supervision6.webp`} alt={fileAlt("2026/06/supervision6.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/supervision7.webp`} alt={fileAlt("2026/06/supervision7.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/supervision8.webp`} alt={fileAlt("2026/06/supervision8.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/supervision9.webp`} alt={fileAlt("2026/06/supervision9.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/supervision10.webp`} alt={fileAlt("2026/06/supervision10.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Interior Design Supervision for Renovations & New Builds</h2>
            <p className="bt">Whether you are renovating an existing home or building a new property, professional supervision ensures every design detail is completed correctly.</p>
            <span className="lbl">Our services support:</span>
            <ul className="ul">
              <li>Full home renovations</li>
              <li>Luxury residential projects</li>
              <li>Apartment renovations</li>
              <li>Kitchen and bathroom upgrades</li>
              <li>New build homes</li>
              <li>Interior styling projects</li>
              <li>Modern and contemporary interiors</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Yara Luxe works closely with all project stakeholders to ensure seamless implementation from concept to completion.</p>
          </div>
          <div className="card-dark">
            <h2>Our Interior Design Project Supervision Services</h2>
            <p className="lux-intro">Our team has more than 19 years of experience in the industry and can handle any aspect of the interior design implementation process.</p>
            <span className="lux-label">We oversee:</span>
            <ul className="ul-dark">
              <li>Residential Interior Design Supervision</li>
              <li>New Build Interior Supervision</li>
              <li>Luxury Interior Project Supervision</li>
              <li>Renovation Project Coordination</li>
              <li>Furniture & Styling Supervision</li>
              <li>Site inspections and progress monitoring</li>
              <li>Quality control inspections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Luxury Interior Design Project Supervision in Melbourne</h2>
            <p className="bt">When it comes to luxury interiors, there is a great need for attention to detail, premium craftsmanship and coordination.</p>
            <span className="lbl">Our luxury supervision focuses on:</span>
            <div className="list-grid">
              <div className="list-grid-item">Top quality finishes and materials</div>
              <div className="list-grid-item">Bespoke cabinetry installations</div>
              <div className="list-grid-item">Premium lighting design implementation</div>
              <div className="list-grid-item">Designer furniture coordination</div>
              <div className="list-grid-item">Sophisticated interior styling</div>
              <div className="list-grid-item">Architectural feature integration</div>
              <div className="list-grid-item">Seamless design consistency</div>
              <div className="list-grid-item">Quality control at every stage</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Yara Luxe provides luxury projects with the highest design standards during every stage.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/supervision4.webp`} alt={fileAlt("2026/06/supervision4.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Project Supervision Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Project Review</div><p className="step-d">We evaluate the accepted plans, layouts, finishes and project requirements.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Builder & Contractor Coordination</div><p className="step-d">Our team liaises with trades and suppliers to ensure that all are working to the design set.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Site Inspections & Monitoring</div><p className="step-d">We carry out site visits regularly to monitor progress and ensure good workmanship.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Material & Finish Verification</div><p className="step-d">Selected materials, fixtures, colours and finishes are installed correctly, we confirm.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Styling & Final Completion</div><p className="step-d">The last phases involve setting up furniture, arranging the interior and handling the finishing touches to make the interior look stunning.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}>
          <h2 className="h2">Our Approach to Interior Design Project Supervision</h2>
          <p className="bt" style={{ maxWidth: 700 }}>We feel that the quality of interior design project supervision should protect both the design vision and the investment of our clients throughout every stage of the project.</p>
        </div>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Attention to Detail at Every Stage</h3><p>We carefully monitor every stage of the project to ensure materials, finishes, layouts, and installations match the approved design concept.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Seamless Builder & Contractor Coordination</h3><p>Our team works closely with builders, architects, suppliers, and trades to keep the project organised and running smoothly.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Consistent Design Implementation</h3><p>We ensure all design elements are executed to the approved specifications with precision and care throughout the project.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>Quality Control Throughout</h3><p>Regular site inspections and quality checks ensure the highest standard of workmanship at every stage of the project.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Timely & Efficient Project Delivery</h3><p>We help clients avoid unnecessary delays, miscommunication, and costly design errors during implementation.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of interior design expertise gives our team the ability to manage projects efficiently while maintaining premium design quality.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Our Approach to Interior Design Project Supervision</h2>
            <p className="bt">We feel that the quality of interior design project supervision should protect both the design vision and the investment of our clients throughout every stage of the project.</p>
            <span className="lbl">Our supervision philosophy is based on:</span>
            <ul className="ul">
              <li>Attention to detail at every stage</li>
              <li>Seamless builder and contractor coordination</li>
              <li>Consistent design implementation</li>
              <li>Quality control throughout the project</li>
              <li>Clear communication with all stakeholders</li>
              <li>Timely and efficient project delivery</li>
              <li>Premium craftsmanship standards</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We design and supervise interior spaces that are not only aesthetically pleasing but also delivered on time, on budget and to the highest quality standards.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/supervision5jpg.webp`} alt={fileAlt("2026/06/supervision5jpg.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Across Melbourne, we serve the following areas"
        intro="At Yara Luxe, we are proud to offer Interior Design Project Supervision Melbourne services throughout Melbourne's top residential suburbs, such as:"
        outro="We deliver bespoke supervision services for luxury homes, renovations, apartments and contemporary residential developments throughout Melbourne."
      />

      <LocationFaqCta
        showServices={false}
        faqs={[
          { q: "What is interior design project supervision?", a: "The supervision of an interior design project refers to the supervision of interior design plans to ensure that the layout, material, finishing and styling are completed correctly." },
          { q: "Why is it essential to have project supervision in interior design?", a: "With professional supervision, mistakes are less likely to occur, communication between trades is enhanced, quality control is better maintained and there will be a better end result that will line up with the design vision." },
          { q: "Are Yara Luxe projects supervised?", a: "Yes, we do oversee home improvement projects, kitchen renovation, bathroom remodels, and full interior home renovation projects." },
          { q: "Are you able to oversee luxury interior works?", a: "Yes, Yara Luxe is an expert in luxury residential interior supervision, where they concentrate on the high-quality finishes and stylish decorations." },
          { q: "Do you deal with builders and contractors?", a: "Yes, we work closely with builders, architects, suppliers and trades throughout the project." },
          { q: "What types of projects do you supervise?", a: "Oversee new constructions, refurbishments, luxury residences, apartments, decorating projects and modern living interior ideas." }
        ]}
        ctaTitle="Start Your Interior Design Project Supervision in Melbourne Today"
        ctaBody="Partner with Yara Luxe's expert project supervision team to ensure your interior design project is completed to the highest specifications — on time, on budget and with exceptional attention to detail throughout every stage."
      />
    </div>
  );
}
