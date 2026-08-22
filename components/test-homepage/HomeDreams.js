import { HOME_DREAMS } from "@/lib/data";

export default function HomeDreams() {
  return (
    <section className="home-dreams">
      <div className="home-dreams-slide">
        <img src={HOME_DREAMS} alt="" />
        <div className="home-dreams-copy">
          <span className="home-dreams-vline" />
          <span className="home-dreams-hline" />
          <p>We Build Your Dreams...</p>
        </div>
      </div>
    </section>
  );
}
