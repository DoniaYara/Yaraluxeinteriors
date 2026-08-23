import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqList from "@/components/FaqList";
import { AreasWeServe, LocationServiceLinks } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { AREA_URLS, SERVICE_URLS } from "@/lib/urls";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import BookingBar from "@/components/BookingBar";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Hawthorn | Yara Luxe",
  description: "Interior designer in Hawthorn for Victorian, Edwardian and contemporary homes. Bespoke renovations and interiors backed by 19+ years of experience."
}, "/interior-designer-hawthorn");

const faqs = [
  { q: "Are you a Hawthorn Heritage homeowner?", a: "Yes. Regularly we're able to assist homeowners with the updating of their period properties whilst maintaining their original architectural features." },
  { q: "Is there any way you can help before renovation is done?", a: "Absolutely. Early design planning can help to make decisions and project execution smoother." },
  { q: "Have a discussion about furniture and style tips?", a: "Yes. We can help you with layouts, furniture selection, lighting, artwork and final touches." },
  { q: "Are there any existing furnishings you can work with?", a: "Existing furniture and décor can be used where appropriate in a reworked design concept." },
  { q: "What kinds of projects do you do?", a: "We provide our services for houses, apartments, townhouses, renovation projects and select commercial interiors." }
];

export default function HawthornPage() {
  return (
    <div className="ylp ylp-hawthorn loc-res">
      <JsonLd data={locationPageGraph("/interior-designer-hawthorn")} />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">Interior designer services in Hawthorn</div>
          <h1>Interior Designer Hawthorn</h1>
          <p className="hero-desc">Custom Interior Design at Hawthorn Homes and Contemporary Lifestyles. Our team at Yara Luxe creates simple spaces in a homeowner's interior that feel comfortable, functional and personal.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href={SERVICE_URLS.residential} className="btn-outline">View Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <BookingBar />

      <section className="sp book-next" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Bringing Vision, Function, and Style Together</h2>
            <p className="bt">Making a successful interior isn't just about picking colours or furniture. It's the concept of designing places that function smoothly for those who use them daily.</p>
            <p className="bt">Our job is to provide you with the direction on many of the design choices that need to be made on a project and to help you to develop an interior that feels unified, functional and well-proportioned from space to space.</p>
          </div>
          <OptImage src={`${U}/2026/06/residential-interior-design.webp`} alt={fileAlt("2026/06/residential-interior-design.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Designed for the Character of Hawthorn</h2>
        <p className="dark-body">Hawthorn is a city of old and new. From Victorian terraces to Edwardian houses to luxury townhouses and modern apartments, the suburb has it all. For every property there will be its own set of opportunities and challenges.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Heritage Properties</div><p className="cdesc">Period homes are frequently getting updates that preserve original features but enhance functionality for contemporary life.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Modern Homes</div><p className="cdesc">New properties provide flexibility for design, high-end finishes and a true indoor/outdoor experience.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Growing Family Homes</div><p className="cdesc">Family-focused design focuses on flexibility, storage, durability and comfort while keeping things looking good.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Downsizer Residences</div><p className="cdesc">There is the efficient use of space, comfort and convenience helped by smart planning.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Our Interior Design Expertise</h2>
        <div className="svc-grid">
          <div className="svc-item"><div className="si-t">Interior Planning</div><p className="si-d">We review layouts and determine what can be done to make them more efficient, easier to use and comfortable.</p></div>
          <div className="svc-item"><div className="si-t">Material and Finish Selection</div><p className="si-d">We assist you in choosing the right materials that'll match your style and needs.</p></div>
          <div className="svc-item"><div className="si-t">Furniture Planning</div><p className="si-d">The right furniture layout can make all the difference to the feel and function of a space.</p></div>
          <div className="svc-item"><div className="si-t">Lighting Design</div><p className="si-d">Stratified lighting provides ambience and enhances the use of the house.</p></div>
          <div className="svc-item"><div className="si-t">Colour Consultation</div><p className="si-d">We design palettes which accentuate architectural elements and build a unified visual character.</p></div>
          <div className="svc-item"><div className="si-t">Styling and Decoration</div><p className="si-d">The design is completed with artwork, accessories, textiles and decoration.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Spaces That Benefit Most From Professional Design</h2>
        <div className="spaces-grid">
          <div className="space-card"><h3>Open-Plan Living Areas</h3><p>Within modern open-plan houses, clear space is a key element while retaining visual continuity.</p></div>
          <div className="space-card"><h3><Link href={SERVICE_URLS.kitchen}>Kitchens</Link></h3><p>A well-designed kitchen enhances usability, storage and workflow.</p></div>
          <div className="space-card"><h3><Link href={SERVICE_URLS.bathroom}>Bathrooms</Link></h3><p>With some planning, bathrooms can be created to be beautiful and highly functional.</p></div>
          <div className="space-card"><h3>Bedrooms</h3><p>Bedrooms should be relaxing, comfortable and organised.</p></div>
          <div className="space-card"><h3>Home Offices</h3><p>Dedicated workspaces support productivity and work-life balance.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">What makes Yara Luxe so special?</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Tailored Design Solutions</h3><p>Each project is tailored to the client's lifestyle, home and their desires.</p></div>
          <div className="why-card"><h3>Detail-Focused Approach</h3><p>All elements of design are carefully considered to produce a finished and unified result.</p></div>
          <div className="why-card"><h3>Practical Creativity</h3><p>We have our interiors not only looking good, but they are extremely functional too.</p></div>
          <div className="why-card"><h3>Collaborative Experience</h3><p>We are very close to our clients and make sure that their vision is always in the centre of the project.</p></div>
          <div className="why-card"><h3>End-to-End Guidance</h3><p>We support you from the beginning of your idea to the end of the styling process.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>Thanks to our wealth of experience, we can overcome design challenges and confidently provide solutions.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-cards">
          <div className="card-light">
            <h2>Common Reasons Clients Hire an Interior Designer</h2>
            <p className="bt">When homeowners experience issues like these, they often call us:</p>
            <ul className="ul">
              <li>Unclear design direction</li>
              <li>Outdated interiors</li>
              <li>Inefficient room layouts</li>
              <li>Lack of storage</li>
              <li>Renovation overwhelm</li>
              <li>Inability to choose finishes and furnishings.</li>
            </ul>
          </div>
          <div className="card-dark">
            <h2>Our Approach to Interior Design</h2>
            <p style={{ fontFamily: "var(--yl-sans)", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 20 }}>A clear, collaborative process from the first conversation to the final styling.</p>
            <ul className="ul-dark">
              <li>Discover — First we discuss your objectives, lifestyle and how you use your space.</li>
              <li>Define — Concepts, inspiration and planning create a clear design direction.</li>
              <li>Develop — The layout, materials, furniture and styling are enhanced.</li>
              <li>Deliver — Careful coordination puts the final design together.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Hawthorn's most popular design preferences</h2>
        <p className="bt">Several Hawthorn residents are interested in:</p>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Modern Classic Interiors</div><p className="scd">Stylish rooms that blend traditional design with modern accents.</p></div>
          <div className="style-card"><div className="sct">Warm Contemporary Design</div><p className="scd">Comfortable and sophisticated environments with natural materials.</p></div>
          <div className="style-card"><div className="sct">Refined Minimalism</div><p className="scd">Simple lines and thoughtful furnishings create a classic look.</p></div>
          <div className="style-card"><div className="sct">Transitional Styling</div><p className="scd">A mix of old and new design styles.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Creating Homes That Feel Effortless</h2>
            <p className="bt">We don't follow the latest trends and instead aim to design spaces that are relevant and comfortable for the long term.</p>
            <h2 className="h2" style={{ marginTop: 40 }}>Designing Homes Across Melbourne's Inner East</h2>
            <p className="bt">We regularly complete projects in Hawthorn, Hawthorn East, <Link href={AREA_URLS.Kew}>Kew</Link>, <Link href={AREA_URLS.Camberwell}>Camberwell</Link>, <Link href={AREA_URLS.Canterbury}>Canterbury</Link>, <Link href={AREA_URLS.Balwyn}>Balwyn</Link>, <Link href={AREA_URLS.Toorak}>Toorak</Link>, <Link href={AREA_URLS["South Yarra"]}>South Yarra</Link>, Richmond, <Link href={AREA_URLS.Armadale}>Armadale</Link>, <Link href={AREA_URLS.Malvern}>Malvern</Link>, Glen Iris and neighbouring suburbs.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Best-residential-interior-design-melbourne.webp`} alt={fileAlt("2026/06/Best-residential-interior-design-melbourne.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        excludeSuburb="Hawthorn"
        title="Areas We Serve"
        intro="Based in Melbourne's inner east, we also design homes across these suburbs:"
      />

      <LocationServiceLinks />

      <HomeGoogleReviews />

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="sec-center faq-sec-head"><h2 className="h2">Frequently Asked Questions</h2></div>
        <FaqList items={faqs} />
      </section>

      <section className="cta-sec" id="ylp-contact">
        <div className="cta-bg" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Speak to a Hawthorn interior designer.</h2>
          <p className="cta-body">Whether you have a renovation project in mind, are decorating a new home, or just need some design advice, Yara Luxe can help to bring clarity and confidence to the project.</p>
          <div className="cta-actions">
            <a href="tel:0433211875" className="btn-dark">Call 0433 211 875</a>
          </div>
        </div>
      </section>
    </div>
  );
}
