import JsonLd from "@/components/JsonLd";
import { AreasWeServe, LocationFaqCta, LocationHero } from "@/components/LocationBits";
import { U } from "@/lib/data";
import { locationPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({
  title: "Interior Designer Templestowe | Yara Luxe",
  description: "Interior designer in Templestowe for family homes, renovations and complete interiors. Tailored design focused on comfort, function and refined living."
}, "/interior-designer-templestowe");

export default function TemplestowePage() {
  return (
    <div className="ylp loc-fh-c">
      <JsonLd data={locationPageGraph("/interior-designer-templestowe")} />
      <LocationHero
        eyebrow="Thoughtful Interior Design for Templestowe Homes & Modern Family Living"
        title="Interior Designer Templestowe"
        desc="We design interiors at Yara Luxe around the lifestyle. Our interior designers can make a space feel more functional, welcoming, and uniquely yours, whether you're renovating an existing family home or updating a modern home or planning a new build."
      />

      <section className="sp" style={{ background: "#fff" }}>
        <div className="tc">
          <div>
            <h2 className="h2">Making Homes Work Better for Everyday Life</h2>
            <p className="bt">A beautiful house should be much more than just impressive. It should be functional for your everyday life, safe for the family and comfortable to live in.</p>
            <p className="bt">There are a number of reasons why many homeowners seek our help:</p>
            <ul className="ul">
              <li>Their home no longer suits their lifestyle</li>
              <li>Living areas feel disconnected</li>
              <li>Storage is limited or poorly planned</li>
              <li>Renovation decisions feel overwhelming</li>
              <li>The property lacks a cohesive design direction</li>
            </ul>
            <p className="bt" style={{ marginTop: 20 }}>We should look for ways to improve and develop workable solutions to make the form and function better.</p>
          </div>
          <OptImage src={`${U}/2026/06/Full-Home-Renovation.webp`} alt={fileAlt("2026/06/Full-Home-Renovation.webp")} sizes={SIZES.contentCol} />
        </div>
      </section>

      <section className="dark-sp">
        <h2 className="h2w">Interior Design in Templestowe for a variety of property styles</h2>
        <p className="dark-body">Unlike many inner-city suburbs, Templestowe's reputation is for larger homes, large block sizes and family-friendly living. This affords special design opportunities that need careful consideration.</p>
        <div className="c4">
          <div className="card"><span className="cnum">01</span><div className="ctitle">Established Family Homes</div><p className="cdesc">There are many home improvement projects that will enhance many homes, including layout changes, new finishes, and improved indoor/outdoor connections.</p></div>
          <div className="card"><span className="cnum">02</span><div className="ctitle">Contemporary Residences</div><p className="cdesc">In today's modern houses, attention needs to be given to the selection of materials, lighting, and space balance to enhance the architectural advantages.</p></div>
          <div className="card"><span className="cnum">03</span><div className="ctitle">Luxury Homes</div><p className="cdesc">When decorating high-end homes, it's crucial to have interior decor that is befitting of the scale, quality, and lifestyle needs of the home.</p></div>
          <div className="card"><span className="cnum">04</span><div className="ctitle">New Builds</div><p className="cdesc">If there is input on the interior design during the planning phase, then a cohesive and complete result is achieved from the start.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <h2 className="h2">Designing a home that fits your life!</h2>
        <p className="bt">People's lifestyles are constantly changing in their homes.</p>
        <div className="role-grid">
          <div className="role-card"><h3>Multi-Functional Living Areas</h3><p>Space must allow for relaxation, entertainment, work, and family activities to be provided without being cluttered.</p></div>
          <div className="role-card"><h3>Home Offices and Study Zones</h3><p>Many modern homes have workstations as an important part of the design.</p></div>
          <div className="role-card"><h3>Indoor-Outdoor Connection</h3><p>There are numerous properties in Templestowe that have outdoor entertaining spaces which should be integrated with the indoor space.</p></div>
          <div className="role-card"><h3>Organised Family Living</h3><p>Smart storage solutions keep things neat and tidy and work well for busy homes.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Elements of a Well-Designed Interior</h2>
        <div className="spaces-grid">
          <div className="space-card"><h3>Balance</h3><p>Each room should be comfortable and aesthetically pleasing to be in.</p></div>
          <div className="space-card"><h3>Flow</h3><p>Good design allows for fluid movement or circulation from room to room.</p></div>
          <div className="space-card"><h3>Functionality</h3><p>The layouts should be designed to facilitate everyday functions and minimize frustration and inefficiency.</p></div>
          <div className="space-card"><h3>Personalisation</h3><p>A house should be built for the inhabitants – not for fashion.</p></div>
          <div className="space-card"><h3>Longevity</h3><p>The design elements in the space will be timeless, ensuring the space will be attractive for years to come.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "var(--yl-light)" }}>
        <div style={{ marginBottom: 52 }}><h2 className="h2">Why Templestowe Homeowners Choose Yara Luxe</h2></div>
        <div className="why-grid">
          <div className="why-card"><h3>Understanding Family-Focused Homes</h3><p>We recognize the special considerations and possibilities of building bigger homes for a family and multi-generational living.</p></div>
          <div className="why-card"><h3>Designs that reflect real life</h3><p>Interiors are designed to work for us and our families' daily living, growth and comfort for years to come.</p></div>
          <div className="why-card"><h3>Tailored Design Guidance</h3><p>Each project is treated as an individual project and not as a standard one.</p></div>
          <div className="why-card"><h3>Strong Focus on Functionality</h3><p>We consider more than appearance, making sure every space looks and performs as well as possible.</p></div>
          <div className="why-card"><h3>Collaborative Project Experience</h3><p>Clients are included in the process, and the outcome is personal and authentic.</p></div>
          <div className="why-card-dark"><h3>19 years of experience in industry</h3><p>We have worked with many different clients and can produce a sophisticated interior that will last the test of time and be practical.</p></div>
        </div>
      </section>

      <section className="sp" style={{ background: "#fff" }}>
        <h2 className="h2">Design Directions Popular Among Templestowe Homeowners</h2>
        <div className="styles-row-4">
          <div className="style-card"><div className="sct">Contemporary Family Design</div><p className="scd">Friendly and functional spaces, inspired by contemporary family needs.</p></div>
          <div className="style-card"><div className="sct">Modern Luxury</div><p className="scd">Clean lines; everything is spacious and well made.</p></div>
          <div className="style-card"><div className="sct">Organic Modern</div><p className="scd">Warmth and balance are added to the home with natural textures and colour palettes.</p></div>
          <div className="style-card"><div className="sct">Transitional Interiors</div><p className="scd">A mix of old and new styles and details brings timeless beauty.</p></div>
        </div>
        <div className="styles-row-2">
          <div className="style-card"><div className="sct">Light-Focused Design</div><p className="scd">Using natural light maximises light and makes spaces more inviting.</p></div>
        </div>
      </section>

      <AreasWeServe
        title="Areas We Serve"
        intro="In addition to Templestowe 3106, Yara Luxe works with homeowners throughout Melbourne's eastern and north-eastern suburbs, including:"
        items={[["Templestowe Lower",""],["Doncaster",""],["Doncaster East",""],["Balwyn North","3104"],["Bulleen",""],["Kew","3101"],["Ivanhoe",""],["Heidelberg",""],["Mont Albert","3127"],["Surrey Hills",""],["Camberwell","3124"],["Warrandyte",""]]}
      />

      <LocationFaqCta
        faqs={[
          { q: "Why is there a growing number of Templestowe residents investing in interior design?", a: "For many homeowners, the desire is to bring into the modern era the older family home and to make it more functional to meet the lifestyle and needs of today. Expert design advice maximises the potential of larger properties and growing family rooms." },
          { q: "Is interior design responsible for helping to make open-plan living better?", a: "While it's true that open-planned spaces can sometimes provide the advantages of better zoning, improved flow and better visual cohesion, the key is to ensure it still feels inviting. Good design can help assure a more comfortable and functional environment by making strategic decisions." },
          { q: "Are larger homes more challenging to design?", a: "If you're looking to build or move into a larger home, you'll need to get creative with how you lay out the rooms. If there is no specific design intent, it may be hard to create consistency throughout the property." },
          { q: "Is it good to have interior design first before construction of a new home in Templestowe?", a: "Yes, an interior designer can be involved from the beginning to assist with design decisions, layouts, finishes, and overall design direction. This often results in a more cohesive and successful outcome." },
          { q: "Does interior design enhance the relationship between the interiors and outdoor spaces?", a: "Yes, a smooth transition between indoor and outdoor living can be achieved in a thoughtful manner. This is especially beneficial for many Templestowe homes, which have large outdoor areas." },
          { q: "What styles of interior design work for Templestowe properties?", a: "Contemporary family design, modern luxury and organic modern interiors are popular choices amongst many homeowners. The style that best fits depends on the architecture of the property, lifestyle needs and preferences." }
        ]}
        ctaTitle="Start Your Templestowe Interior Design Journey"
        ctaBody="Yara Luxe can help you achieve your vision, be it to renovate your family home, build a new home or refresh key living spaces. We design interiors that are comfortable, functional and have a classic style that adds to your everyday life."
      />
    </div>
  );
}
