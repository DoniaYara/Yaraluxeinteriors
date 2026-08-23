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
  title: "Free Interior Design Consultation Melbourne | Yara Luxe",
  description: "Book a free interior design consultation in Melbourne for expert guidance on layouts, colour, furniture, lighting and finishes, in-home or virtually."
}, "/interior-design-consultation-melbourne", { image: SERVICE_OG_IMAGE["/interior-design-consultation-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/interior-design-consultation-melbourne"]) });

function ExpCard({ n, title, desc }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
    </div>
  );
}

export default function ConsultationServicesPage() {
  return (
    <div className="ylp svc-cons">
      <JsonLd data={servicePageGraph("/interior-design-consultation-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Free Interior Design Consultation Melbourne</h1>
          <p className="hero-desc">No. 1 in Australia for interior design consultation. Yara Luxe offers a free interior design consultation in Melbourne for homeowners, apartment owners, renovators and commercial projects wanting to give their interior spaces a complete transformation with expert design advice.</p>
          <ul className="hero-checks">
            <li>Free Interior Design Consultation</li>
            <li>19+ Years Experience</li>
            <li>In-Home & Virtual Consultations</li>
            <li>Melbourne Interior Design Studio</li>
          </ul>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/residential-interior-design-melbourne" className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <BookingBar />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="ylp-grid">
          <div>
            <h2 className="h2">Expert Interior Design Consultation Services in Melbourne</h2>
            <p className="bt">Yara Luxe offers a free interior design consultation Melbourne service to homeowners, apartment owners, renovators and commercial projects just wanting to give their interior spaces a complete transformation with expert design advice.</p>
            <p className="bt">Our team of interior designers has more than 19 years in the industry, and we can help you make informed choices on layouts, colours, furniture, materials, lighting, styling and renovations while designing your interior to be functional, elegant and timeless.</p>
            <p className="bt">From a complete home redesign to advice on renovating, from a colour consultation to interior design services, Yara Luxe has the expert solutions you need to suit your lifestyle and vision.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/color-consultation-interior-design.webp`} alt={fileAlt("2026/06/color-consultation-interior-design.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">What is an Interior Design Consultation?</h2>
            <p className="bt">The first step to designing an interior space that is functional and well designed is to have a consultation with an interior designer. In the consultation, our interior designers will inspect your home, determine your objectives, talk with you about your style inclinations and then suggest expert advice on the grounds of your property.</p>
            <span className="lbl">Consultations are available for clients who need:</span>
            <div className="list-grid">
              <div className="list-grid-item">Space planning and layout ideas</div>
              <div className="list-grid-item">Furniture placement guidance</div>
              <div className="list-grid-item">Interior styling recommendations</div>
              <div className="list-grid-item">Renovation and redesign advice</div>
              <div className="list-grid-item">Colour consultation in interior design</div>
              <div className="list-grid-item">Lighting and materials used</div>
              <div className="list-grid-item">Flooring and finish recommendations</div>
              <div className="list-grid-item">Functional storage ideas</div>
              <div className="list-grid-item">Luxury home styling ideas</div>
              <div className="list-grid-item">Modern-day interior design solutions</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>From home updates to transforming a room or an entire space, our Interior Design Consultation service gives you direction and expert insight.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-consultation-australia.webp`} alt={fileAlt("2026/06/interior-design-consultation-australia.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Why Choose Yara Luxe for Interior Design Consultation Melbourne</h2>
        <div className="cards-grid light-cards">
          <ExpCard n="01" title="19 Years Of Designing Interiors" desc="With nearly two decades of design experience, our designers provide clients with stylish and highly functional interior design based on the Melbourne lifestyle." />
          <ExpCard n="02" title="Personalised Design Advice" desc="Each consultation is unique to your property, goals, budget and lifestyle." />
          <ExpCard n="03" title="Practical & Functional Solutions" desc="Our work concentrates on interior design that is not only aesthetically pleasing but also enhances comfort, functionality and organisation." />
        </div>
        <div className="cards-grid-2 light-cards">
          <ExpCard n="04" title="Luxury & Modern Design Expertise" desc="Our designers specialise in luxury interiors, modern homes, minimalism, and modern home renovation ideas." />
          <ExpCard n="05" title="End-to-End Interior Guidance" desc="Yara Luxe offers the full interior design solution from initial consultation through to full project implementation." />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Our Interior Design Consultation Services</h2>
        <p className="dark-intro">We offer interior design consultations in Melbourne for residential, apartment and commercial interior design.</p>
        <div className="cards-grid-2" style={{ marginTop: 0 }}>
          <ExpCard n="01" title="Home Interior Design Consultation" desc="Expert advice for living rooms, bedrooms, kitchens, bathrooms and home interiors." />
          <ExpCard n="02" title="Apartment Interior Design Consultation" desc="Our designers develop clever layout and styling ideas for apartments and tight spaces." />
          <ExpCard n="03" title="Commercial Interior Design Consultation" desc="We can make a practical, professional and eye-catching commercial interior for your business." />
          <ExpCard n="04" title="Luxury Interior Design Consultation" desc="Exclusive consultation is all about high-quality finishes, personal styling, design with finesse and luxury interiors." />
        </div>
        <div className="cards-grid">
          <ExpCard n="05" title="Colour Consultation Interior Design" desc="Selecting the right colours can make all the difference in a room. We offer professional colour and material advice to fit the interior design and lighting requirements." />
          <ExpCard n="06" title="Interior Design Paint Consultation" desc="We support clients in picking out wall colours, finishes, textures and paint colours to make harmonious and enduring interior spaces." />
          <ExpCard n="07" title="Consultation for Blinds & Window Styling" desc="Our team can offer you expert guidance on a selection of blinds, curtains, shutters and window styling solutions that will suit your interiors." />
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/online-consultation-interior-design.webp`} alt={fileAlt("2026/06/online-consultation-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/interior-design-consultation-price.webp`} alt={fileAlt("2026/06/interior-design-consultation-price.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/interior-design-consultation-services.webp`} alt={fileAlt("2026/06/interior-design-consultation-services.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/colour-consultation-interior-design.webp`} alt={fileAlt("2026/06/colour-consultation-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/interior-design-onsite-consultation.webp`} alt={fileAlt("2026/06/interior-design-onsite-consultation.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Online & Virtual Interior Design Consultation</h2>
            <p className="bt">Yara Luxe also offers online interior design consultation and virtual interior design consultation services throughout Australia.</p>
            <span className="lbl">Our virtual consultation services are:</span>
            <ul className="ul">
              <li>Online design advice</li>
              <li>Style suggestions for virtual rooms</li>
              <li>Colour and material guidance</li>
              <li>Advice on furniture and decor ideas</li>
              <li>Renovation planning support</li>
              <li>Space layout assistance</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Virtual interior design consultation is the process in which the client can get the proper advice conveniently from home.</p>
          </div>
          <div className="card-dark">
            <h2>What to Expect From a Consultation</h2>
            <p className="lux-intro">Interior design initial consultations are typically lengthy, and clients often want to know about the process. At the time of consultation we talk about the following:</p>
            <span className="lux-label">We discuss:</span>
            <ul className="ul-dark">
              <li>Your goals and vision</li>
              <li>Lifestyle and functionality needs</li>
              <li>Design preferences and inspiration</li>
              <li>Existing furniture and decor</li>
              <li>Budget considerations</li>
              <li>Renovation plans</li>
              <li>Colour palettes and finishes</li>
              <li>Layout and storage challenges</li>
            </ul>
            <p className="lux-outro">We aim to offer you practical suggestions and a straightforward design direction specifically for your project.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>What to Bring to an Interior Design Consultation</h2>
            <p className="bt">Some ideas to better understand your project would be helpful, including:</p>
            <span className="lbl">Helpful to bring:</span>
            <ul className="ul">
              <li>Floor plans or measurements</li>
              <li>Inspiration images or Pinterest boards</li>
              <li>Photos of your current interiors</li>
              <li>Renovation ideas</li>
              <li>Preferred colour palettes</li>
              <li>Budget expectations</li>
              <li>Questions about functionality or styling</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>This enables our designers to make tailored suggestions during the consultation.</p>
          </div>
          <div className="card-dark">
            <h2>Free Interior Design Consultation</h2>
            <p className="lux-intro">Yara Luxe offers a free interior design consultation for homeowners, renovators and commercial clients across Melbourne. Consultations are available in-home and virtually.</p>
            <span className="lux-label">Consultations can cover:</span>
            <ul className="ul-dark">
              <li>Residential or commercial projects</li>
              <li>Onsite or virtual consultations</li>
              <li>Single-room or full-home advice</li>
              <li>Luxury styling requirements</li>
              <li>Renovation planning</li>
            </ul>
            <p className="lux-outro">Looking for an interior design consultation near me? We offer personalised services both in person and online throughout high-end residential suburbs of Melbourne.</p>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Why Professional Interior Design Consultation Matters</h2>
            <p className="bt">A professional consultation can save homeowners from expensive missteps and help them make interiors more functional and aesthetically pleasing.</p>
            <span className="lbl">Benefits include:</span>
            <div className="list-grid">
              <div className="list-grid-item">Better space planning</div>
              <div className="list-grid-item">Professional colour coordination</div>
              <div className="list-grid-item">Improved furniture layouts</div>
              <div className="list-grid-item">Increased property appeal</div>
              <div className="list-grid-item">Smarter renovation decisions</div>
              <div className="list-grid-item">Enhanced functionality and comfort</div>
              <div className="list-grid-item">Cohesive interior styling</div>
              <div className="list-grid-item">Time and cost saving</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Being partnered with an experienced interior designer is a major source of clarity, confidence and expert creative direction for your project.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-consultation.webp`} alt={fileAlt("2026/06/interior-design-consultation.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Interior Design Consultation Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Initial Discovery</div><p className="step-d">We discuss your home, your life, your project and your design needs.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Site Assessment or Virtual Review</div><p className="step-d">Our designers consider the layout, lighting, existing finishes and functionality of the space.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Design Recommendations</div><p className="step-d">We offer customised guidance on layouts, colours, furnishings, style, lighting and materials.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Concept & Direction Planning</div><p className="step-d">Future implementation can be developed if necessary, with mood boards, styling ideas and renovations.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Ongoing Design Support</div><p className="step-d">Yara Luxe can help you continue with your project all the way through to a complete interior design and renovation.</p></div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Areas We Serve Across Melbourne"
        intro="Yara Luxe is proud to offer interior design consultation Melbourne services to Melbourne's premium neighbourhoods, such as the following:"
        outro="In-home and virtual consultation services are available to you per your property, design objectives and lifestyle."
      />

      <LocationFaqCta
        showServices={false}
        faqBg="#fff"
        faqs={[
          { q: "What do you expect to receive in an interior design consultation?", a: "An interior design consultation involves professional guidance in the areas of layout, colour schemes, furniture arrangement, style, lighting, materials, and renovating ideas uniquely suited for your space." },
          { q: "How much is an interior design consultation?", a: "Yara Luxe offers a free interior design consultation. In-home and virtual consultations are available." },
          { q: "Is interior design consultation service available online?", a: "Yes, Yara Luxe offers virtual and online interior design consultations in Australia." },
          { q: "Does your interior design company offer colour consultation?", a: "Yes, we provide professional colour consultation, colour selection, material coordination, and styling suggestions." },
          { q: "Do you offer an in-home appointment for interior design?", a: "Yes, we do offer in-home interior design services throughout Melbourne's high-end residential neighbourhoods." },
          { q: "Do you have a commercial interior design consultation?", a: "Yes, Yara Luxe offers commercial interior design services for offices, retail and professional spaces." }
        ]}
        ctaTitle="Book Your Free Interior Design Consultation"
        ctaBody="Whether you are about to renovate, redesign your home or just need a little styling help from the experts, Yara Luxe has got you covered — experts with 19+ years of interior design experience, offering a personalised free consultation with creativity, functionality and timeless design prowess."
        extraCta={{ href: "/contact", label: "Book a Free Consultation" }}
      />
    </div>
  );
}
