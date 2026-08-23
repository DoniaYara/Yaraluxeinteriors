import { HOME_DREAMS } from "@/lib/data";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export default function HomeDreams() {
  return (
    <section className="home-dreams" aria-label="We build your dreams">
      <div className="home-dreams-slide">
        <OptImage
          src={HOME_DREAMS}
          alt={fileAlt("2025/07/P4-1.jpg")}
          fill
          sizes={SIZES.dreams}
          style={{ objectFit: "cover", objectPosition: "50% 25%" }}
        />
        <div className="home-dreams-copy">
          <p>We Build Your Dreams...</p>
        </div>
      </div>
    </section>
  );
}
