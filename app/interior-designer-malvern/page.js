import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Malvern | Yara Luxe",
  description: "Interior designer in Malvern for period homes, family residences and luxury apartments. Bespoke design for renovations, new builds and complete interiors."
}, "/interior-designer-malvern");

export default function MalvernPage() {
  return (
    <div className="ylp loc-fh">
      <JsonLd data={locationPageGraph("/interior-designer-malvern")} />
      <LocationHero
        eyebrow="Thoughtful Interior Design for Malvern's Established Homes"
        title="Interior Designer Malvern"
        desc="We help homeowners in Malvern design welcoming, functional, beautifully thought-out interiors at Yara Luxe. We create bespoke design solutions in a wide array of styles for your home, whether you're updating a period property, refurbishing a family home, or furnishing a luxurious apartment."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Why Malvern Homes Require a Tailored Design Approach</h2>
            <p className="bt">Malvern is one of Melbourne's most established residential suburbs, featuring tree-lined streets, elegant period homes, luxury homes and great family value. There are many properties which have distinctive architectural elements which are worth maintaining and accommodating for the needs of modern living.</p>
            <p className="bt">We design interiors which are specific to the property and the space available and to the character of the light and to the function of the household.</p>
          </div>
          <OptImage src={`${U}/2026/06/Full-Home-Interior-Design-Melbourne.webp`} alt={fileAlt("2026/06/Full-Home-Interior-Design-Melbourne.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">The Spaces That Matter Most</h2>
        <p className="bt">Each homeowner uses his/her home in a different manner. It is our job to see what areas will make the biggest difference in your life and enjoyment of your home.</p>
        <div className="spaces-grid">
          <div className="space-card"><h3>Open-Plan Living Areas</h3><p>Today's homeowners are looking for improved interaction in the living, dining and kitchen areas. We assist to enhance flow while keeping individuality and comfort.</p></div>
          <div className="space-card"><h3>Primary Suites</h3><p>The perfect bedroom is a sanctuary. The comfort, storage, light and overall ambience is our priority.</p></div>
          <div className="space-card"><h3>Everyday Living Kitchens</h3><p>The kitchen is still one of the most-used rooms in a house. Layout efficiency, storage and material selection are all very important.</p></div>
          <div className="space-card"><h3>Home Offices</h3><p>With the rise of flexible working options, special workrooms are a must in numerous homes.</p></div>
          <div className="space-card"><h3>Outdoor Connections</h3><p>There are lots of lovely gardens and outdoor entertaining spaces on many Malvern homes. We promote better indoor/outdoor linkages, both visually and functionally.</p></div>
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Our Design Philosophy</h2>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Lifestyle Before Trends</div><p className="cdesc">Designs are in and out of fashion, but your home should work for you for years to come.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Practical Luxury</div><p className="cdesc">Interiors should also be comfortable, functional and easy to live in; beautiful.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Personalisation</div><p className="cdesc">Each project is custom-designed to the homeowner's tastes, habits and future plans.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">Timeless Design</div><p className="cdesc">Our emphasis is on spaces which will be both relevant and appealing over the long-term.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">How we add value to your home</h2>
        <div className="role-grid">
          <div className="role-card"><h3>Improving Functionality</h3><p>A home's layout can have a significant impact on a home's performance and feel.</p></div>
          <div className="role-card"><h3>Enhancing Property Appeal</h3><p>A good interior design makes a home comfortable and enhances the value of the property.</p></div>
          <div className="role-card"><h3>Creating Design Consistency</h3><p>A unified design language unifies all rooms and makes them intentional.</p></div>
          <div className="role-card"><h3>Simplifying Complex Decisions</h3><p>We help to simplify the process from finishes and colours to furnishings and layouts.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Choose Yara Luxe?</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Client-Focused Design</h3><p>All the recommendations are tailored to your personal needs and way of life.</p></div>
          <div className="why-card"><h3>Strong Design Expertise</h3><p>Creative thinking and problem-solving.</p></div>
          <div className="why-card"><h3>Attention to Detail</h3><p>Every detail is given careful consideration, resulting in a polished finish.</p></div>
          <div className="why-card"><h3>Collaborative Process</h3><p>We value clients' feedback and ensure effective communication during the project.</p></div>
          <div className="why-card"><h3>End-to-End Support</h3><p>We guide you from start to finish with ideas and finish styling.</p></div>
          <div className="why-card-dark"><h3>19 Years of Industry Experience</h3><p>We have a wide breadth of experience, so we're confident in handling projects within a variety of property types.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Popular Design Preferences in Malvern</h2>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Modern Heritage</div><p className="scd">Keeping the original architectural features and adding to it with modern convenience.</p></div>
          <div className="style-card"><div className="sct">Sophisticated Family Living</div><p className="scd">Interiors for flexibility, durability and practicality in everyday use.</p></div>
          <div className="style-card"><div className="sct">Contemporary Elegance</div><p className="scd">Simple lines, quality materials and simple luxury.</p></div>
          <div className="style-card"><div className="sct">Light-Filled Interiors</div><p className="scd">Optimising daylight to maximise open and warm spaces.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Custom Joinery Solutions</div><p className="scd">Specially made storage and cabinetry to suit the home.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div className="two-col-list">
          <div>
            <h2 className="h2">Working With Different Property Types</h2>
            <p className="bt">We regularly help our clients in the following cases:</p>
            <ul className="ul">
              <li>Victorian and Edwardian homes</li>
              <li>Contemporary family residences</li>
              <li>Luxury apartments</li>
              <li>Townhouses</li>
              <li>Renovation projects</li>
              <li>Newly constructed homes</li>
              <li>Downsized properties</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>Our design process is flexible to each property and each opportunity.</p>
          </div>
          <div className="col-img">
            <OptImage src={`${U}/2026/06/Modern-Interior-Design.webp`} alt={fileAlt("2026/06/Modern-Interior-Design.webp")} sizes={SIZES.contentCol} />
          </div>
        </div>
      </section>

      <AreasWeServe
        title="Areas We Serve"
        intro="Yara Luxe also serves the inner-east and south-east Melbourne suburbs such as:"
        items={[["Armadale","3143"],["Toorak","3142"],["South Yarra","3141"],["Glen Iris",""],["Prahran","3181"],["Caulfield",""],["Hawthorn","3122"],["Kew","3101"],["Camberwell","3124"],["Balwyn","3103"],["Brighton","3186"],["Elwood","3184"]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Are you available to modernise a Malvern home?", a: "Yes, there are homes in Malvern with fine period features which can be complemented with strategic improvements. We work towards enhancing the property's functionality whilst maintaining its original character and charm." },
          { q: "Which interior design style is the most suitable for homes in Malvern?", a: "Every house has its own architectural style and preferences of a homeowner, so no single style will work best for each property. Many clients prefer elegant, contemporary and ‘classic' interiors, as well as heritage-inspired spaces that respect the character of the suburb." },
          { q: "Are you involved in planning changes while renovations are being done?", a: "Yes, one of the most beneficial parts of a project can be the layout planning phase. Effective space utilisation and minimization of additional changes required during construction can be achieved through early design input." },
          { q: "What can interior design do to make family living a better experience?", a: "Designing thoughtfully can assist in optimizing storage, streamlining space layouts and making space more versatile and flexible to meet changing needs. This creates a more orderly, comfortable and pleasant place to live." },
          { q: "Do you have any ideas for finishes on a new construction?", a: "Yes, we specialize in picking out your flooring, cabinetry, stone surfaces, paint colours, lighting and more. We are looking for each selection to be a part of the whole design." },
          { q: "What is the reason why a lot of Malvern homeowners are investing in interior designing?", a: "For many homeowners, the desire to enhance their home's potential and make it more responsive to the needs of contemporary living are closely intertwined. Professional design advice can be used to create comfortable, functional and long-lasting spaces." }
        ]}
        ctaTitle="Let's design a beautiful home that's just right for you!"
        ctaBody="From updating a classic home to a fresh new build or updating the interior of the room you want to make the most of, Yara Luxe can help you bring your ideas to life and create an interior that's both unified and functional. We build thoughtfully designed homes that are a true image of your lifestyle, your property and stand the test of time."
      />
    </div>
  );
}
