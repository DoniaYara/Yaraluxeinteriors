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
  title: "Kitchen Interior Design Melbourne | Yara Luxe",
  description: "Kitchen interior design in Melbourne for renovations and new builds, including bespoke cabinetry, layouts, lighting, storage and premium finishes."
}, "/kitchen-interior-design-melbourne", { image: SERVICE_OG_IMAGE["/kitchen-interior-design-melbourne"], imageAlt: fileAlt(SERVICE_OG_IMAGE["/kitchen-interior-design-melbourne"]) });

function ExpCard({ n, title, desc, items = [], light }) {
  return (
    <div className="exp-card">
      <span className="exp-num">{n}</span>
      <div className="exp-card-title">{title}</div>
      {desc ? <p className={light ? "bt" : "exp-desc"} style={{ marginBottom: 12 }}>{desc}</p> : null}
      {items.length > 0 ? (
        <ul className="exp-card-list">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
    </div>
  );
}

export default function KitchenServicesPage() {
  return (
    <div className="ylp svc-kit">
      <JsonLd data={servicePageGraph("/kitchen-interior-design-melbourne")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Kitchen Interior Design Melbourne</h1>
          <p className="hero-desc">Design a beautiful, functional and timeless kitchen in a luxurious, modern home, apartment and lifestyle with professional kitchen interior design Melbourne solutions.</p>
          <ul className="hero-checks">
            <li>19+ Years Experience</li>
            <li>Luxury & Modern Kitchen Interiors</li>
            <li>New Builds & Kitchen Renovations</li>
            <li>Melbourne Kitchen Design Studio</li>
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
            <h2 className="h2">Luxury Kitchen Interior Designer Melbourne</h2>
            <p className="bt">Our specialisation at Yara Luxe Interiors is in creating elegant kitchen interior design for contemporary homes in Melbourne. Our team has more than 19 years of experience designing kitchens that are all about functionality, aesthetics, storage efficiency and timeless design principles to improve the way you cook, entertain and live your life every day.</p>
            <p className="bt">Our designers pay attention to detail in every aspect of kitchen design, from layout to cabinetry, splashback to finishes, and everything in between, to ensure your kitchen is a timeless, functional and aesthetically pleasing space.</p>
            <p className="bt">If you are designing new kitchen spaces, remodelling your current kitchen or looking for some innovative kitchen interior design ideas, we provide you with one-on-one solutions which depend on your lifestyle and property objectives.</p>
          </div>
          <div className="ylp-media">
            <OptImage src={`${U}/2026/06/kitchen-interior-design.webp`} alt={fileAlt("2026/06/kitchen-interior-design.webp")} sizes={SIZES.contentCol} />
            <div className="ylp-badge"><span className="ylp-badge-num">19+</span><span className="ylp-badge-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why Choose Our Kitchen Interior Design</h2>
        <div className="cards-grid light-cards">
          <ExpCard light n="01" title="19+ Years Of Kitchen Design Experience" desc="With our experience in Melbourne homes, we can develop kitchen designs that are luxurious, functional, and suit contemporary lifestyles in Australia." items={["Luxury kitchen interiors","Functional kitchen layouts","Bespoke kitchen concepts","Premium material selections","Space optimisation solutions","Timeless kitchen aesthetics"]} />
          <ExpCard light n="02" title="Luxury Kitchens With Functional Living" desc="We feel that all kitchens should be beautiful, comfortable and functional while enjoying and enhancing modern living and entertaining." items={["Open-plan kitchen layouts","Smart storage solutions","Integrated appliances","Functional workflow planning","Modern kitchen styling","Elegant lighting concepts"]} />
          <ExpCard light n="03" title="Tailored Kitchen Design Concepts" desc="All kitchen projects are tailored to the home, lifestyle, eating habits and decorating tastes." items={["Personalised kitchen layouts","Custom cabinetry concepts","Kitchen island planning","Splashback/Benchtop Selection","Luxury colour palettes","Bespoke styling solutions"]} />
        </div>
        <div className="cards-grid-2 light-cards">
          <ExpCard light n="04" title="Expertise In New Kitchens & Renovations" desc="We undertake kitchen design and installation in new kitchen construction projects and kitchen fit-outs in Melbourne." items={["New kitchen concepts","Kitchen renovations Melbourne","House kitchen interiors","Kitchen extensions","Kitchen upgrades","Modern kitchen remodels"]} />
          <ExpCard light n="05" title="End-To-End Kitchen Interior Design Services" desc="We ensure precision and creativity in every step from consultation to planning to final styling and project coordination." items={["Kitchen design consultation","Layout and workflow planning","Material and finish selection","Cabinetry and joinery guidance","Lighting and styling concepts","Builder and contractor coordination"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Our Kitchen Interior Design Services Melbourne</h2>
        <div className="svc-grid">
          <div className="svc-item"><span className="sn">01</span><span className="st">Modern Kitchen Interior Design</span></div>
          <div className="svc-item"><span className="sn">02</span><span className="st">Luxury Kitchens Melbourne</span></div>
          <div className="svc-item"><span className="sn">03</span><span className="st">Small Kitchen Interior Design Melbourne</span></div>
          <div className="svc-item"><span className="sn">04</span><span className="st">Custom Kitchens Melbourne</span></div>
          <div className="svc-item"><span className="sn">05</span><span className="st">Commercial & Hospitality Kitchen Design</span></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Our Kitchen Interior Design Services Melbourne</h2>
        <p className="dark-intro">Sophisticated and functional kitchens designed for modern family living and contemporary homes.</p>
        <div className="cards-grid">
          <ExpCard n="01" title="Modern Kitchen Interior Design" items={["Modern kitchen layouts","Neo classic kitchen design","Minimalist kitchen styling","Functional kitchen storage","Integrated appliance planning","Contemporary kitchen finishes","Modern kitchen lighting"]} />
          <ExpCard n="02" title="Luxury Kitchens Melbourne" desc="Furniture for the interior of the kitchen, which is made with high-quality materials, stylistic ideas and finishes." items={["Luxury kitchen concepts","High-end cabinetry","Designer kitchen styling","Premium benchtop materials","Custom splashback designs","Luxury kitchen layouts"]} />
          <ExpCard n="03" title="Small Kitchen Interior Design Melbourne" desc="Efficient, attractive kitchen ideas that take advantage of limited areas and enhance their usability and visual appeal." items={["Small kitchen layouts","Compact storage solutions","Open-space optimisation","Functional cabinetry planning","Minimalist kitchen styling","Small apartment kitchens"]} />
        </div>
        <div className="cards-grid-2">
          <ExpCard n="04" title="Custom Kitchens Melbourne" desc="Customised kitchen cabinets designed uniquely for your home, living and style." items={["Custom kitchen cabinetry","Bespoke kitchen islands","Tailored storage concepts","Custom joinery solutions","Unique kitchen layouts","Personalised material selections"]} />
          <ExpCard n="05" title="Commercial & Hospitality Kitchen Design" desc="Ventilation in professional kitchen interiors for cafés, restaurants, hospitality and commercial spaces." items={["Hospitality kitchen concepts","Commercial kitchen layouts","Functional workspace planning","Restaurant kitchen interiors","Workflow optimisation","Commercial kitchen styling"]} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Why Choose Yara Luxe for Kitchen Interior Design</h2>
        <div className="why-grid">
          <div className="why-card"><span className="why-num">01</span><h3>Tailored Kitchen Design Concepts</h3><p>All kitchen projects are tailored to the home, lifestyle, eating habits and decorating tastes.</p></div>
          <div className="why-card"><span className="why-num">02</span><h3>Functional Workflow Planning</h3><p>Careful kitchen layout planning to ensure maximum cooking flow, storage access and everyday usability throughout the space.</p></div>
          <div className="why-card"><span className="why-num">03</span><h3>Premium Material Selection</h3><p>We guide clients through selecting high-quality benchtops, cabinetry finishes, splashbacks and fixtures that elevate every kitchen.</p></div>
          <div className="why-card"><span className="why-num">04</span><h3>New Kitchens & Renovations</h3><p>We undertake kitchen design and installation in new kitchen construction projects and kitchen fit-outs in Melbourne.</p></div>
          <div className="why-card"><span className="why-num">05</span><h3>Expertise in Luxury & Modern Design</h3><p>From minimalist modern kitchens to warm natural textures and bespoke luxury kitchen interiors, Yara Luxe delivers timeless results.</p></div>
          <div className="why-dark"><h3>19+ Years of Melbourne Experience</h3><p>Nearly two decades of designing premium kitchen interiors across Melbourne gives our designers a deep understanding of how Australians cook, entertain and live.</p></div>
        </div>
      </section>

      <div className="gallery-strip">
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/kitchen-designers-melbourne.webp`} alt={fileAlt("2026/06/kitchen-designers-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/kitchen-renovation-melbourne.webp`} alt={fileAlt("2026/06/kitchen-renovation-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/kitchen-remodelling-melbourne.webp`} alt={fileAlt("2026/06/kitchen-remodelling-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/melbourne-kitchen-renovations.webp`} alt={fileAlt("2026/06/melbourne-kitchen-renovations.webp")} sizes={SIZES.galleryStrip} /></div>
        <div className="gallery-strip-item"><OptImage src={`${U}/2026/06/kitchen-renovations-in-melbourne.webp`} alt={fileAlt("2026/06/kitchen-renovations-in-melbourne.webp")} sizes={SIZES.galleryStrip} /></div>
      </div>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Kitchen Renovations Melbourne & New Build Kitchens</h2>
            <p className="bt">We are experienced in the design and installation of new kitchens as well as kitchen renovations in Melbourne that are known for their functionality, luxury and value.</p>
            <span className="lbl">We work on:</span>
            <ul className="ul">
              <li>complete kitchen remodels</li>
              <li>apartment kitchen upgrades</li>
              <li>kitchen layout redesigns</li>
              <li>kitchen extensions</li>
              <li>custom kitchen renovations</li>
              <li>luxury kitchen transformations</li>
              <li>modern kitchen makeovers</li>
              <li>kitchen refurbishment projects</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>From building a brand new home to making kitchen improvements to your existing home, our team design kitchens for contemporary living in Australia.</p>
          </div>
          <div className="card-dark">
            <h2>Modern Kitchen Interior Design Ideas</h2>
            <p className="lux-intro">The successful kitchen should be functional, welcoming and aesthetically pleasing. Our team develops bespoke kitchen interior design ideas to match the practicality and luxury of modern Melbourne homes.</p>
            <span className="lux-label">Here are some popular kitchen ideas:</span>
            <ul className="ul-dark">
              <li>open-plan kitchen living</li>
              <li>kitchen islands seating</li>
              <li>butler's pantries</li>
              <li>integrated appliances</li>
              <li>minimalist cabinetry</li>
              <li>warm natural textures</li>
              <li>statement splashbacks</li>
              <li>contemporary lighting</li>
              <li>luxury stone alternatives</li>
              <li>modern storage solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Sustainable & Functional Kitchen Design</h2>
            <p className="bt">A modern kitchen should not only be visually appealing but also serve as a space that is functional and sustainable.</p>
            <span className="lbl">Our approach includes:</span>
            <ul className="ul">
              <li>durable material selections</li>
              <li>efficient space utilisation</li>
              <li>low-maintenance finishes</li>
              <li>practical workflow planning</li>
              <li>energy-conscious layouts</li>
              <li>functional family-friendly designs</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>This contributes to modern, efficient and functional kitchens that are designed for daily use.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/best-kitchen-renovations-melbourne.webp`} alt={fileAlt("2026/06/best-kitchen-renovations-melbourne.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">High-End Kitchen Design Features</h2>
            <p className="bt">The key to our Designer Kitchens Melbourne design method is to merge function with beautiful design features to produce elegant but efficient spaces.</p>
            <span className="lbl">Features may include:</span>
            <div className="list-grid">
              <div className="list-grid-item">bespoke kitchen islands</div>
              <div className="list-grid-item">luxury cabinetry</div>
              <div className="list-grid-item">integrated appliances</div>
              <div className="list-grid-item">marble-inspired surfaces</div>
              <div className="list-grid-item">engineered stone alternatives</div>
              <div className="list-grid-item">layered kitchen lighting</div>
              <div className="list-grid-item">modern kitchen benches</div>
              <div className="list-grid-item">custom splashbacks</div>
              <div className="list-grid-item">concealed storage solutions</div>
              <div className="list-grid-item">butler's pantry integration</div>
            </div>
            <p className="bt" style={{ marginTop: 20 }}>Additionally, we keep up to date with the newest in commercial interior design trends and contemporary residential kitchen advancements to build kitchens that will stay classics and functional.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/kitchen-renovations-melbourne.webp`} alt={fileAlt("2026/06/kitchen-renovations-melbourne.webp")} sizes={SIZES.feature} />
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Our Kitchen Interior Design Services Melbourne</h2>
            <p className="bt">We offer a complete range of kitchen interior design services for new builds, renovations and kitchen upgrades throughout Melbourne.</p>
            <span className="lbl">Our kitchen services include:</span>
            <ul className="ul">
              <li>Modern Kitchen Interior Design</li>
              <li>Luxury Kitchens Melbourne</li>
              <li>Small Kitchen Interior Design Melbourne</li>
              <li>Custom Kitchens Melbourne</li>
              <li>Commercial & Hospitality Kitchen Design</li>
              <li>Kitchen Renovations Melbourne</li>
              <li>New Build Kitchen Design</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Kitchen Splashbacks, Benchtops & Styling Ideas</h2>
            <p className="lux-intro">The right finishes and styling elements can go a long way in helping to achieve a cohesive, functional, and visually appealing kitchen. Our designers work with home owners to discover the newest materials, functional surfaces and evergreen design ideas for today's home in Melbourne.</p>
            <span className="lux-label">Our kitchen styling includes:</span>
            <ul className="ul-dark">
              <li>Kitchen Splashback Ideas</li>
              <li>Modern Kitchen Splashback Ideas</li>
              <li>Kitchen Benchtop Materials</li>
              <li>Best Kitchen Splashback Options</li>
              <li>Luxury Kitchen Styling Concepts</li>
              <li>Modern Kitchen Benchtop Designs</li>
              <li>Stone & Engineered Surface Alternatives</li>
              <li>Contemporary Kitchen Colour Palettes</li>
              <li>Integrated Lighting Concepts</li>
              <li>Premium Texture & Finish Combinations</li>
            </ul>
            <p className="lux-outro">We design kitchens to suit your style and cater to everyday use, from minimalist modern kitchens to warm natural textures and contemporary luxury styling to classic family-friendly interiors.</p>
          </div>
        </div>
      </section>

      <section className="process-sp">
        <h2 className="h2w">Our Kitchen Interior Design Process</h2>
        <div className="steps">
          <div className="step"><div className="step-c">01</div><div className="step-t">Consultation & Lifestyle Discovery</div><p className="step-d">We start by getting to know you, your lifestyle, your cooking habits, how you want your kitchen to be stored and your kitchen expectations to determine your design direction.</p></div>
          <div className="step"><div className="step-c">02</div><div className="step-t">Concept Development</div><p className="step-d">Our designers design bespoke kitchen concepts such as layouts, direction of cabinets, material palettes, lighting ideas, splashback inspiration and style tips.</p></div>
          <div className="step"><div className="step-c">03</div><div className="step-t">Space Planning & Workflow Design</div><p className="step-d">Thorough planning can make your kitchen feel efficient, well-balanced and maximised for cooking, entertaining and daily living.</p></div>
          <div className="step"><div className="step-c">04</div><div className="step-t">Material & Finish Selections</div><p className="step-d">Carefully chosen benchtops, cabinetry finishes, splashbacks, fixtures, lighting and styling elements combine to make a well-integrated kitchen interior.</p></div>
          <div className="step"><div className="step-c">05</div><div className="step-t">Coordination & Final Styling</div><p className="step-d">We work with builders, suppliers, contractors and trades to make sure that every detail is done right and in a quality manner.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-img">
          <div>
            <h2 className="h2">Why Yara Luxe Interiors Stands Out</h2>
            <p className="bt">We are different from many kitchen design companies as we do the following:</p>
            <span className="lbl">What makes us different:</span>
            <ul className="ul">
              <li>personalised client collaboration</li>
              <li>functional kitchen planning</li>
              <li>luxury styling concepts</li>
              <li>premium material knowledge</li>
              <li>practical workflow design</li>
              <li>modern Australian living solutions</li>
              <li>timeless kitchen aesthetics</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our kitchens are built to make just as much sense in terms of how homeowners cook, entertain, gather and experience their day-to-day lives as they are beautiful.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/full-home-interior-design-services-.webp`} alt={fileAlt("2026/06/full-home-interior-design-services-.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        bg="var(--yl-light)"
        title="Kitchen Design Serving Melbourne Suburbs"
        intro="We offer a range of kitchen interior design Melbourne services throughout the following:"
        outro="The area around Melbourne suburbs."
      />

      <LocationFaqCta
        showServices={false}
        faqBg="#fff"
        faqs={[
          { q: "What is kitchen interior design?", a: "Kitchen interior design is about helping to create a functional, stylish, and efficient kitchen space, which can be used for cooking, entertaining, storage and modern living." },
          { q: "Are you involved with new kitchens and renovations?", a: "Yes. We offer new kitchen design solutions in Melbourne, as well as whole-home kitchen renovation." },
          { q: "Do you have any ideas for the small kitchens?", a: "Absolutely. The Small Kitchen Interior Design Melbourne solutions concentrate on the smart layouts, efficient space planning, and functional storage options." },
          { q: "Are you a luxury kitchen design company?", a: "Yes. Our luxury kitchens in Melbourne are designed around custom layouts, top-quality finishes, designer styling and luxury kitchen interiors." },
          { q: "How much does kitchen interior design cost in Melbourne?", a: "The pricing will depend on the kitchen size, complexity of kitchen layout, materials, finishes and project scope. Tailored consultations, with your goals and vision in mind." }
        ]}
        ctaTitle="Create A Functional & Luxurious Kitchen With Expert Kitchen Interior Design Melbourne"
        ctaBody="Collaborate with the greater Melbourne kitchen interior designers who are experienced in creating elegant, practical and timeless kitchen interior designs with your lifestyle and modern living."
      />
    </div>
  );
}
