import Link from "next/link";
import { HOME_DREAMS } from "@/lib/data";
import { PHONE } from "@/lib/schema/constants";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export default function HomeDreams() {
  return (
    <section className="home-dreams home-final-cta" aria-label="Book a free consultation">
      <div className="home-dreams-slide">
        <OptImage
          src={HOME_DREAMS}
          alt={fileAlt("2025/07/P4-1.jpg")}
          fill
          sizes={SIZES.dreams}
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
        <div className="home-dreams-overlay" />
        <div className="home-dreams-copy home-final-cta-copy">
          <h2>Ready to Create a Home That Feels Like You?</h2>
          <p>Start with a free interior design consultation and tell us what you want to create.</p>
          <div className="home-final-cta-actions">
            <Link className="octf-btn octf-btn-light" href="/contact">Book a Free Consultation</Link>
            <a className="home-final-cta-call" href={`tel:${PHONE.replace(/\s/g, "")}`}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
