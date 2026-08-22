import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PortfolioMetro from "@/components/PortfolioMetro";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { PORTFOLIO_BANNER } from "@/lib/data";
import { portfolioPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

export const metadata = withPageSeo({ title: "Portfolio – Yara Luxe Interiors" }, "/portfolio");

export default function PortfolioPage() {
  return (
    <div className="pf-page">
      <JsonLd data={portfolioPageGraph()} />
      <PageHero
        title="Portfolio"
        image={PORTFOLIO_BANNER}
        crumbs={[{ href: "/", label: "Home" }, { label: "Portfolio" }]}
      />
      <section className="pf-section">
        <div className="container">
          <div className="ot-heading is-dots">
            <span>[ our portfolio ]</span>
            <h2 className="main-heading">
              Some of Our Works
              <br /> and Case Studies for Clients
            </h2>
          </div>
        </div>
        <PortfolioMetro />
      </section>
      <HomeGoogleReviews />
    </div>
  );
}
