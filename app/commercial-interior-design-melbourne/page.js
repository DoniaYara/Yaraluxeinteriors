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
  title: "Commercial Interior Design Melbourne | Yara Luxe",
  description: "Commercial interior design in Melbourne for offices, retail, hospitality and showrooms. Create a polished, functional space tailored to your business."
}, "/commercial-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/commercial-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/commercial-interior-design-melbourne"]) });

function ExpCard({ n, title, desc, items }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className="exp-desc">{desc}</p> : null}
      <ul className="exp-card-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function CommercialServicesPage() {
  return (
    <div className="ylp svc-com">
      <JsonLd data={servicePageGraph("/commercial-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Best Commercial Interior Design Melbourne</h1>
          <p className="hero-desc">Design efficient, elegant and aesthetically engaging spaces for the commercial world for modern businesses, offices, hospitality and retail settings in Melbourne with the best commercial interior design services.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
            <li>Commercial & Hospitality Interiors</li>
            <li>Office, Retail & Restaurant Design</li>
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
            <h2 className="h2">Affordable Commercial Interior Designers Melbourne</h2>
            <p className="bt">We provide high-quality commercial interior design services to companies looking for a modern, functional, and appealing interior. Our expert designers specialise in developing and designing commercial spaces to enhance the customer experience, improve customer productivity and increase the spatial functionality of the space whilst also strengthening the brand.</p>
            <p className="bt">We are one of the reputed commercial interior design companies in Melbourne, working closely with business owners, developers, architects and project managers to develop interiors that meet requirements and operational demands as well as aesthetic and long-term commercial needs.</p>
            <p className="bt">Whether you're looking for commercial interior design in Melbourne for a luxury retail store, office spaces, restaurant design, café design or hospitality services, we can deliver design solutions that are both functional and innovative while incorporating the timeless elements.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/Luxury-commercial-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Luxury-commercial-interior-design-melbourne.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="exp-two">
          <div>
            <h2 className="h2">Luxury Commercial Interior Design Melbourne</h2>
            <p className="bt">Our luxury commercial design Melbourne services are dedicated to providing high-end interior spaces that are both professionally functional and sophisticated.</p>
            <span className="lbl">We design:</span>
            <ul className="ul">
              <li>luxury office interiors</li>
              <li>premium hospitality spaces</li>
              <li>high-end retail stores</li>
              <li>elegant commercial showrooms</li>
              <li>contemporary business environments</li>
              <li>bespoke customer-facing interiors</li>
            </ul>
            <span className="lbl" style={{ marginTop: 24 }}>Every design concept is well thought out to incorporate a balance of:</span>
            <ul className="ul">
              <li>visual appeal</li>
              <li>customer experience</li>
              <li>functionality</li>
              <li>workflow efficiency</li>
              <li>brand consistency</li>
              <li>long-term durability</li>
            </ul>
          </div>
          <div className="exp-img">
            <OptImage src={`${U}/2026/06/commercial-interior-design-near-me.webp`} alt={fileAlt("2026/06/commercial-interior-design-near-me.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Why Businesses Choose Our Commercial Interior Designers</h2>
        <div className="cards-grid">
          <ExpCard n="01" title="Unique Commercial Interior Solutions" desc="Each of your commercial projects is tailored to your operations, expectations for customer experience, brand identity and space needs." items={["Personalised commercial layouts","Brand-focused interior concepts","Functional workflow planning","Customer experience optimisation","Modern business aesthetics","Practical space utilisation"]} />
          <ExpCard n="02" title="Expertise Across Multiple Industries" desc="We have staff at work across all commercial sectors in Melbourne and all are highly experienced." items={["Office interiors","Hospitality venues","Retail spaces","Cafés and restaurants","Clinics and wellness areas","Commercial developments"]} />
          <ExpCard n="03" title="Modern & Functional Commercial Design" desc="We blend all the practical needs with a high level of design concepts and produce interiors that will be very successful commercially for the long term." items={["Practical layouts","Premium finishes","Functional planning","Modern aesthetics","Efficient workflow concepts","Timeless styling principles"]} />
        </div>
        <div className="cards-grid-2">
          <ExpCard n="04" title="Experienced Commercial Interior Design Firms Melbourne" desc="Our designers have more than 19 years of experience and develop commercial spaces with a professional, welcoming, attractive and very functional appearance." items={["Luxury commercial interiors","Professional workspace design","Customer-focused environments","Modern business styling","Commercial space optimisation","Long-term functional solutions"]} />
          <ExpCard n="05" title="End-To-End Commercial Interior Design Services" desc="Whether it's a consultation, planning, coordinating the project or styling at the end, we take care of all the details with creativity and accuracy." items={["Commercial design consultation","Space planning and layouts","Material and finish selection","Lighting and styling concepts","Builder and contractor coordination","Final commercial styling"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Our Commercial Interior Design Services Melbourne</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Commercial Office Interior Design</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Commercial Retail Interior Design</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Hospitality Interior Design Melbourne</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Commercial Restaurant Interior Design</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Commercial Shop Interior Design</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Small Commercial Interior Design Melbourne</span></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Our Commercial Interior Design Services Melbourne</h2>
        <div className="cards-grid">
          <ExpCard n="01" title="Commercial Office Interior Design" desc="Create functional and inspiring office interiors to enhance productivity, workflow and employee experience." items={["Office layout planning","Inspect reception and meeting areas","Collaborative workspace concepts","Executive office styling","Planning of light and acoustics","Modern workplace interiors"]} />
          <ExpCard n="02" title="Commercial Retail Interior Design" desc="Stylish retail environments to increase customer engagement, visual merchandising and shopping experience." items={["Retail store layouts","Concept of the display and shelving","Luxury showroom interiors","Customer flow optimisation","Branding integration","Product presentation styling"]} />
          <ExpCard n="03" title="Hospitality Interior Design Melbourne" desc="Sophisticated interior designs for restaurants, cafes, bars and customer-oriented interiors." items={["Restaurant interior concepts","Café layout planning","Bar / Lounge Styling","Customer seating arrangements","Lighting and ambience design","Functional hospitality layouts"]} />
        </div>
        <div className="cards-grid-2">
          <ExpCard n="04" title="Commercial Restaurant Interior Design" desc="Modern restaurant interiors that are designed to be functional, atmospheric, comfortable and efficient." items={["Restaurant seating layouts","Dining space planning","Luxury restaurant styling","Concepts for commercial kitchen flows","Decorative lighting solutions","Hospitality-focused interiors"]} />
          <ExpCard n="05" title="Commercial Shop Interior Design" desc="Brand-integrated commercial interior solutions that create better customer experiences." items={["Boutique shop layouts","Luxury retail concepts","Display optimisation","Feature wall styling","Lighting coordination","Customer-focused layouts"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}>
          <h2 className="h2">Commercial & Hospitality Interior Design Solutions</h2>
          <p className="bt" style={{ maxWidth: 700 }}>We have a proven track record of commercial and hospitality interior design and can make spaces that are welcoming, functional, and in line with your business objectives.</p>
        </div>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Small Commercial Interior Design Melbourne</h3><p>Bright and effective space planning solutions specifically developed for smaller business properties, boutique spaces, studios and small business spaces.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Customer-Focused Interiors</h3><p>We specialise in customer-focused interiors, hospitality environments, modern office spaces, retail design concepts and functional commercial layouts.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Interior Styling for Business Interiors</h3><p>Each project is designed in a comprehensive and thoughtful manner to meet both aesthetic and functional requirements.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>Luxury Business Interiors</h3><p>Luxury commercial interior design with high-end finishes, modern design and functional layouts for premium business environments.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Branded Customer Experiences</h3><p>We design branded customer experiences and modern branding integration that strengthen your business identity throughout every commercial space.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of designing premium commercial interiors across Melbourne gives our designers a deep understanding of what makes businesses thrive through great design.</p></div>
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Hospitality-interior-design-Melbourne.webp`} alt={fileAlt("2026/06/Hospitality-interior-design-Melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/commercial-interior-design.webp`} alt={fileAlt("2026/06/commercial-interior-design.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Best-interior-designers-Melbourne-1.webp`} alt={fileAlt("2026/06/Best-interior-designers-Melbourne-1.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Interior-design-services-Melbourne.webp`} alt={fileAlt("2026/06/Interior-design-services-Melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Affordable-interior-designers-Melbourne-1.webp`} alt={fileAlt("2026/06/Affordable-interior-designers-Melbourne-1.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Commercial Interior Design Ideas For Modern Businesses</h2>
            <p className="bt">Beautiful finishes are not enough for successful commercial interiors. Our team creates innovative and unique commercial interior design ideas that will help enhance the usability, customer engagement and the overall presentation of your company.</p>
            <span className="lbl">Popular modern ideas are the following:</span>
            <ul className="ul">
              <li>Open collaborative office spaces</li>
              <li>luxury reception spaces</li>
              <li>integrated branding features</li>
              <li>statement lighting concepts</li>
              <li>minimalist commercial styling</li>
              <li>functional hospitality seating</li>
              <li>premium material combinations</li>
              <li>customer-experience-focused layouts</li>
              <li>flexible workspace planning</li>
              <li>Modern retail display systems</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We also develop bespoke commercial building interior design ideas for large developments and multi-functional commercial spaces.</p>
          </div>
          <div className="card-dark">
            <h2>Commercial Interior Design Trends</h2>
            <p className="lux-intro">Modern commercial interior design trends are concerned with designing spaces that seem adaptable, inviting and experience-driven.</p>
            <span className="lux-label">Current trends include:</span>
            <ul className="ul-dark">
              <li>biophilic design elements</li>
              <li>warm natural materials</li>
              <li>flexible workspaces</li>
              <li>minimalist luxury interiors</li>
              <li>layered commercial lighting</li>
              <li>acoustic-focused office layouts</li>
              <li>sustainable materials</li>
              <li>multifunctional commercial environments</li>
              <li>wellness-inspired design concepts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Commercial Projects in Interior Design Around Melbourne</h2>
            <p className="bt">We've worked on a variety of commercial interior design projects, such as these, throughout Melbourne:</p>
            <ul className="ul">
              <li>offices</li>
              <li>retail stores</li>
              <li>cafés</li>
              <li>restaurants</li>
              <li>wellness studios</li>
              <li>showrooms</li>
              <li>hospitality spaces</li>
              <li>boutique commercial environments</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Being an experienced commercial interior design firm, we know how to design interiors that boost the business identity, make it more functional, and enhance customer interaction.</p>
          </div>
          <div className="card-dark">
            <h2>Affordable Interior Designers Melbourne For Commercial Spaces</h2>
            <p className="lux-intro">Hiring a Melbourne interior designer's solution is not just about the design; it's also about the quality, the function and the professionalism that is expected. We offer a commercial interior solution tailored to fit your project, business needs and investment needs without sacrificing design excellence.</p>
            <span className="lux-label">Whether you need:</span>
            <ul className="ul-dark">
              <li>office interior upgrades</li>
              <li>restaurant styling</li>
              <li>retail fit-outs</li>
              <li>hospitality interiors</li>
              <li>workspace planning</li>
              <li>customer-facing environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Why Yara Luxe Interiors Stands Out</h2>
            <p className="bt">We take a unique approach to commercial interior design companies that incorporates combining the following:</p>
            <span className="lbl">What makes us different:</span>
            <div className="list-grid">
              <div className="list-grid-item">personalised client collaboration</div>
              <div className="list-grid-item">practical workflow planning</div>
              <div className="list-grid-item">luxury commercial styling</div>
              <div className="list-grid-item">customer experience optimisation</div>
              <div className="list-grid-item">operational functionality</div>
              <div className="list-grid-item">modern branding integration</div>
              <div className="list-grid-item">timeless design principles</div>
              <div className="list-grid-item">long-term commercial results</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>We design commercial interiors that will not only look stunning but also enhance business operations, employee productivity and customer engagement.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/interior-design-for-commercial.webp`} alt={fileAlt("2026/06/interior-design-for-commercial.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Commercial Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation & Business Discovery</div><p className="step-d">We start with getting to know your business, your work processes, your expectations for your customer's experience and your design vision.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Interior Concept Development</div><p className="step-d">Our designers design custom solutions such as space planning, mood boards, material palettes, branding integration, layout concepts and customer flow planning.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Commercial Space Planning</div><p className="step-d">Through detailed planning, your commercial space will look cohesive, functional and efficient.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Material & Styling Selection</div><p className="step-d">Finishes, furniture, lighting, textures and styling are all thoughtfully chosen to mirror your brand and business environment.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Project Execution</div><p className="step-d">Our team works closely with contractors, builders and suppliers to ensure that all details are handled in a professional and efficient manner.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Commercial Interior Designers Serving Melbourne</h2>
            <p className="bt">We are happy to offer commercial interior design Melbourne services in the following areas. Businesses searching for Commercial Interior Design Near Me, Commercial Interior Design Service Near Me, Commercial Interior Design Companies Melbourne and Best Interior Designers Melbourne — we are here to help.</p>
            <p className="bt">Trust Yara Luxe Interiors with bespoke design ideas, luxurious aesthetics, and functional business usability.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/commercial-office-interior-design.webp`} alt={fileAlt("2026/06/commercial-office-interior-design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        title="Commercial Interior Designers Serving Melbourne"
        intro="We are happy to offer commercial interior design Melbourne services in:"
        outro="In and around Melbourne commercial areas. Interior design services in Melbourne are provided by the company."
        items={[["Toorak","3142"],["Brighton","3186"],["South Yarra","3141"],["Hawthorn","3122"],["Camberwell","3124"],["Kew","3101"],["Armadale","3143"],["Malvern","3144"],["Prahran","3181"],["Brighton East","3187"]]}
      />

      <LocationFaqCta
        showServices={false}
        faqs={[
          { q: "What is commercial interior design?", a: "Commercial interior design involves creating functional and aesthetically pleasing interiors that are suitable for offices, shops, hotels, restaurants and business spaces." },
          { q: "Are you an interior designer for the hospitality or restaurant sector?", a: "Yes. Cafés, restaurants, lounges, bars and hospitality environments designed for your customers are included in our Hospitality Interior Design Melbourne services." },
          { q: "Do you have any desire to help with the office interior design?", a: "Absolutely. Expert office interior design consultants that focus on productivity, workflow efficiency, employee comfort and professional presentation in the commercial office environment." },
          { q: "Do you do luxury commercial interior design?", a: "Yes. The Luxury Commercial Interior Design Melbourne service takes care of more upscale commercial interior design with high-end finishes, modern design and functional layouts." },
          { q: "What is the price tag for the commercial interior design in Melbourne?", a: "The price is determined by the size of the project, its scope, its design, its finishes and its business needs. Scheduling consultations as well as project recommendations in a manner that is tailored to your individual needs." }
        ]}
        ctaTitle="Design Creative & Complex Work Environments"
        ctaBody="Collaborate with professional commercial interior designers in Melbourne who are passionate about designing spaces that are professional, contemporary and appealing, that meet your business needs and customer expectations. Don't delay getting your interior decorating consultation for your business space. Please schedule your commercial interior design consultation today."
      />
    </div>
  );
}
