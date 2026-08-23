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
  title: "Residential Interior Design Melbourne | Yara Luxe",
  description: "Residential interior design in Melbourne for renovations, new builds and complete homes. Bespoke, functional interiors backed by 19+ years of experience."
}, "/residential-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/residential-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/residential-interior-design-melbourne"]) });

function ExpCard({ n, title, desc, items, light }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className={light ? "bt" : "exp-desc"} style={{ marginBottom: 12 }}>{desc}</p> : null}
      <ul className="exp-card-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="ylp svc-res">
      <JsonLd data={servicePageGraph("/residential-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Residential Interior Design Melbourne</h1>
          <p className="hero-desc">Refine your home with stylish and practical residential interior design in Melbourne — created for contemporary living, luxury comfort and timeless interiors.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
            <li>Luxury Residential Interiors</li>
            <li>New Builds & Existing Homes</li>
            <li>Melbourne Interior Design Studio</li>
          </ul>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href="/commercial-interior-design-melbourne" className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <BookingBar />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="ylp-grid">
          <div>
            <h2 className="h2">Luxury Residential Interior Designers Melbourne</h2>
            <p className="bt">Yara Luxe Interiors crafts elegant, bespoke homes with luxury residential interior solutions designed for contemporary living in Melbourne. Our in-house designers have more than 19 years of experience and excel in creating interior spaces that are comfortable, functional and elegant.</p>
            <p className="bt">Whether you're planning a new apartment or a complete home remodel, our team delivers interiors that are carefully thought out for your lifestyle, your property and your future.</p>
            <p className="bt">From whole-home design concepts to styling upgrades for individual rooms, we develop interiors around your personal style and architectural vision — every space balanced, inviting and harmonious.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/residential-interior-design.webp`} alt={fileAlt("2026/06/residential-interior-design.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">What Makes Our Residential Interior Design Special</h2>
        <div className="cards-grid light-cards">
          <ExpCard light n="01" title="19+ Years Of Residential Design Experience" desc="Nearly two decades designing beautiful, thoughtful, functional and contemporary interiors for Melbourne homes across Australia." items={["Luxury residential interiors","Custom home design ideas","Apartment & townhouse interiors","Functional space planning","Premium styling solutions","Timeless interior aesthetics"]} />
          <ExpCard light n="02" title="Luxury Interiors With Functional Living" desc="We believe every space in the home should be accessible, comfortable, contemporary and beautiful — without compromising on function." items={["Open-plan living concepts","Practical furniture layouts","Elegant material selections","Warm & cosy interiors","Modern luxury styling","Comfortable living environments"]} />
          <ExpCard light n="03" title="Tailored Design Concepts" desc="Each project is designed to suit your property type, living requirements, space functions and vision for the future — so spaces feel truly yours." items={["Personalised design direction","Custom colour palettes","Furniture & decor styling","Bespoke interior concepts","Lifestyle-focused layouts","Cohesive room-to-room flow"]} />
        </div>
        <div className="cards-grid-2 light-cards">
          <ExpCard light n="04" title="Expertise In New Builds & Existing Homes" desc="We work on new construction projects as well as existing homes, designing interiors that are cohesive, elegant and highly functional." items={["Luxury new homes","Apartment interiors","Townhouse projects","Custom residential builds","Home transformations","Contemporary family homes"]} />
          <ExpCard light n="05" title="End-To-End Interior Design Solutions" desc="We coordinate every step from consultation to concept development, styling and project coordination — with creativity, accuracy and attention to detail." items={["Interior design consultation","Space planning & layouts","Material & finish selection","Lighting & styling concepts","Builder & contractor coordination","Final interior styling"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Our Residential Interior Design Services Melbourne</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Full Home Interior Design</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Living Room Interior Design</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Bedroom Interior Design</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Kitchen Interior Design</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Bathroom Interior Design</span></div>
          <div className="svc-item"><span className="sn">06</span><span className="st">Residential Building Interior Design</span></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Our Residential Interior Design Services</h2>
        <p className="dark-body">Sophisticated, functional interiors designed for modern family living and contemporary homes across Melbourne.</p>
        <div className="cards-grid">
          <ExpCard n="01" title="Full Home Interior Design" desc="Complete interior solutions that offer seamless flow and coherence across the entire home." items={["Whole-home design concepts","Furniture & decor styling","Colour palette coordination","Open-plan layout planning","Luxury material selections","Lighting & finish consultation"]} />
          <ExpCard n="02" title="Living Room Interior Design" desc="Well-planned, inviting living areas to entertain, relax and live a modern life." items={["Furniture layouts","Feature wall concepts","Decorative styling","Lighting placement","Texture layering","Modern living concepts"]} />
          <ExpCard n="03" title="Bedroom Interior Design" desc="Elegant bedroom interiors that feel comfortable, relaxing and luxurious." items={["Master bedroom styling","Wardrobe planning","Soft furnishing selections","Mood lighting concepts","Luxury finishes","Space optimisation"]} />
        </div>
        <div className="cards-grid">
          <ExpCard n="04" title="Kitchen Interior Design" desc="Modern kitchen interiors that merge functionality, beauty and everyday living." items={["Kitchen layout planning","Cabinetry concepts","Luxury finishes","Material selection","Lighting coordination","Storage optimisation"]} />
          <ExpCard n="05" title="Bathroom Interior Design" desc="Elegant bathroom interiors that create a calm, functional and luxurious atmosphere." items={["Bathroom styling concepts","Vanity & fixture selection","Tile & tiling consultation","Lighting placement","Space-saving layouts","Contemporary aesthetics"]} />
          <ExpCard n="06" title="Residential Building Interior Design" desc="Stylish, smart interiors for houses, townhouses and contemporary housing estates." items={["Compact space planning","House furniture layouts","Urban interior styling","Functional storage solutions","Contemporary living concepts","Luxury apartment interiors"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Choose Yara Luxe for Residential Interior Design</h2></div>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Tailored Design Concepts</h3><p>Every project is shaped around your property type, living needs and the way you want your home to feel and function.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Functional Space Planning</h3><p>Careful layout planning to ensure balance, comfort, utility and a cohesive flow from room to room.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Premium Material Selection</h3><p>We guide clients through high-quality finishes, furnishings, textures and fixtures that elevate every interior.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>New Builds & Existing Homes</h3><p>From new construction projects to full home renovations, we design interiors that are elegant and highly functional.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Luxury & Modern Expertise</h3><p>From minimalist modern interiors to warm natural textures and bespoke luxury styling, Yara Luxe delivers timeless results.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of designing premium residential interiors across Melbourne gives our designers a deep understanding of how Australians live, relax and entertain.</p></div>
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Best-residential-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Best-residential-interior-design-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Affordable-interior-designers-Melbourne.webp`} alt={fileAlt("2026/06/Affordable-interior-designers-Melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Best-interior-designers-Melbourne.webp`} alt={fileAlt("2026/06/Best-interior-designers-Melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/Affordable-residential-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Affordable-residential-interior-design-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/interior-design-for-residential-house.webp`} alt={fileAlt("2026/06/interior-design-for-residential-house.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Residential Design Tailored To Modern Living</h2>
            <p className="bt">Good design should enhance daily life at home. We create spaces that are well-balanced, effective, inviting and harmonious, collaborating with homeowners, builders and developers.</p>
            <span className="lbl">We develop:</span>
            <ul className="ul">
              <li>luxury home interiors</li>
              <li>modern apartment spaces</li>
              <li>custom family homes</li>
              <li>open-plan living environments</li>
              <li>elegant kitchen & bathroom interiors</li>
              <li>personalised styling concepts</li>
              <li>functional layouts & furniture planning</li>
              <li>traditional materials & colours</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Whether you need complete interior design for a residential home or style upgrades for certain spaces, we design around your style and architectural vision.</p>
          </div>
          <div className="card-dark">
            <h2>Unique Residential Interior Design Ideas</h2>
            <p className="lux-intro">Creating a memorable space is about more than picking furniture and colours. We develop ideas built around your architectural property, lifestyle requirements and personal style.</p>
            <span className="lux-label">Popular concepts include:</span>
            <ul className="ul-dark">
              <li>open-plan luxury living</li>
              <li>integrated indoor-outdoor spaces</li>
              <li>minimalist, contemporary styling</li>
              <li>statement lighting features</li>
              <li>bespoke cabinetry solutions</li>
              <li>warm natural textures</li>
              <li>layered lighting designs</li>
              <li>luxury neutral palettes</li>
              <li>functional family-friendly layouts</li>
              <li>timeless modern interiors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Sustainable & Functional Residential Interiors</h2>
            <p className="bt">Today's homeowners seek interiors that are not only beautiful, but functional and sustainable. Our process keeps longevity and everyday usability in mind.</p>
            <span className="lbl">Our approach includes:</span>
            <ul className="ul">
              <li>durable material selections</li>
              <li>efficient space utilisation</li>
              <li>timeless design choices</li>
              <li>natural lighting optimisation</li>
              <li>practical layouts</li>
              <li>long-lasting quality finishes</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>The result is homes that stay functional, elegant and useful for years to come.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Residential-interior-design-melbourne-cost.webp`} alt={fileAlt("2026/06/Residential-interior-design-melbourne-cost.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">High-End Residential Interior Design Melbourne</h2>
            <p className="bt">In our high-end residential interior design services, we create sophisticated homes that remain timeless, elegant and highly functional, carefully combining refined elements.</p>
            <span className="lbl">Features may include:</span>
            <div className="list-grid">
              <div className="list-grid-item">premium finishes</div>
              <div className="list-grid-item">bespoke styling</div>
              <div className="list-grid-item">layered textures</div>
              <div className="list-grid-item">luxury furnishings</div>
              <div className="list-grid-item">architectural harmony</div>
              <div className="list-grid-item">modern lighting concepts</div>
              <div className="list-grid-item">functional layouts</div>
              <div className="list-grid-item">refined colour palettes</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Unlike companies that create generic spaces for every client, we design interiors that are deeply unique to each client's lifestyle — how they live, relax, entertain and experience home.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/residential-interior-design-companies.webp`} alt={fileAlt("2026/06/residential-interior-design-companies.webp")} sizes={SIZES.feature} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Our Residential Interior Design Services Melbourne</h2>
            <p className="bt">A complete range of residential interior design services for new builds, renovations and home upgrades throughout Melbourne.</p>
            <span className="lbl">Our services include:</span>
            <ul className="ul">
              <li>Full Home Interior Design</li>
              <li>Living Room Interior Design</li>
              <li>Bedroom Interior Design</li>
              <li>Kitchen Interior Design</li>
              <li>Bathroom Interior Design</li>
              <li>Residential Building Interior Design</li>
              <li>High-End Residential Interior Design</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Our Experience In Residential Interior Design</h2>
            <p className="lux-intro">Our design team has deep experience across luxury homes, apartments, townhouses and custom residential design projects throughout Melbourne.</p>
            <span className="lux-label">Our expertise covers:</span>
            <ul className="ul-dark">
              <li>Space planning</li>
              <li>Luxury styling</li>
              <li>Residential building interior design</li>
              <li>Interior concepts for new construction</li>
              <li>Furniture coordination</li>
              <li>Premium material selection</li>
              <li>Modern home layouts</li>
              <li>High-end residential interiors</li>
            </ul>
            <p className="lux-outro">We work with each client personally, designing homes with a practical approach and timeless design elements built to last.</p>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Residential Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation & Lifestyle Discovery</div><p className="step-d">We gain a clear understanding of your goals, design preferences, lifestyle and how you want your home to feel and function.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Custom mood boards, colours, materials, furniture arrangement, style ideas and layout planning, tailored to your home and lifestyle.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Space Planning & Design Detailing</div><p className="step-d">Detailed planning brings harmony, utility and a cohesive overall conceptualisation of the interior.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Material & Styling Selections</div><p className="step-d">Furniture, finishes, textures, lighting and décor are carefully chosen for a refined, cohesive and timeless look.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Project Coordination & Final Styling</div><p className="step-d">We work closely with builders, suppliers and contractors so every detail is realised with precision and quality.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Why Yara Luxe Interiors Stands Out</h2>
            <p className="bt">We're different from many residential interior design firms — instead of matching generic styles to every home, we work personally with each client.</p>
            <span className="lbl">What makes us different:</span>
            <ul className="ul">
              <li>personalised client collaboration</li>
              <li>functional, practical planning</li>
              <li>luxury styling concepts</li>
              <li>premium material knowledge</li>
              <li>lifestyle-focused design</li>
              <li>modern Australian living solutions</li>
              <li>timeless interior aesthetics</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We design homes that make as much sense in how you live, relax, gather and experience daily life as they are beautiful to look at.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Small-residential-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Small-residential-interior-design-melbourne.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Residential Interior Designers Serving Melbourne Suburbs"
        intro="We proudly deliver interior design Melbourne services across the top residential suburbs, including the following:"
        items={[["Toorak","3142"],["Brighton","3186"],["Brighton East","3187"],["South Yarra","3141"],["Armadale","3143"],["Malvern","3144"],["Prahran","3181"],["Kew","3101"],["Hawthorn","3122"],["Camberwell","3124"],["Canterbury","3126"],["Balwyn","3103"],["Balwyn North","3104"],["Mont Albert","3127"],["Templestowe","3106"],["Albert Park","3206"],["Elwood","3184"]]}
        outro="Our design style aligns with the interior design trends of the contemporary Australian home across Melbourne and the surrounding premium residential markets."
      />

      <LocationFaqCta
        showServices={false}
        faqBg="#ffffff"
        faqs={[
          { q: "What is residential interior design?", a: "Residential interior design is about developing a comfortable, stylish and functional space for a home, apartment or living area suited to today's lifestyles." },
          { q: "Do you work on new homes or existing properties?", a: "Both. We offer interior design for luxurious new homes, apartments and townhouses, as well as renovations for existing homes all over Melbourne." },
          { q: "Do you help with furniture and interior decoration?", a: "Absolutely. We help with furniture and decor styling, colour schemes, lighting ideas and the rest of your interior decorating." },
          { q: "What sets high-end residential design apart?", a: "High-end interior design is about the quality of finishes, custom ideas, luxury styling and tailored interior solutions for a sophisticated modern lifestyle." },
          { q: "How much does residential interior design cost in Melbourne?", a: "Pricing depends on the scope of the project, the size of the property and your specific needs. We offer custom consultations to fit your objectives and vision." }
        ]}
        ctaTitle="Design Residential Interiors Melbourne for Everlasting Living Spaces"
        ctaBody="Collaborate with Melbourne interior designers experienced in creating beautiful, functional and luxurious homes built around your lifestyle, vision and the way you live."
      />
    </div>
  );
}
