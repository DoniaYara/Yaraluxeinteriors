import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import BlogSlider from "@/components/BlogSlider";
import PartnerSlider from "@/components/PartnerSlider";
import { PROCESS_BANNER, U } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";
import { getPublishedPosts } from "@/lib/cms/public";
import { processPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export const metadata = withPageSeo({ title: "Our Process – Yara Luxe Interiors" }, "/process");

export default async function ProcessPage() {
  const posts = await getPublishedPosts();
  const slider = (posts.length ? posts : BLOG_POSTS).slice(0, 5).map(({ content, ...p }) => p);
  return (
    <div className="process-page">
      <JsonLd data={processPageGraph()} />
      <PageHero
        title="Our Process"
        image={PROCESS_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Our Process" }
        ]}
      />

      <section className="process-adv" style={{ backgroundImage: `url('${U}/2020/05/bg1-process.png')` }}>
        <div className="container">
          <div className="quotes-head">
            <span className="ot-kicker">[ interior design ]</span>
            <h2 className="ot-title">Our Advantages in Design</h2>
          </div>
          <div className="process-adv-grid">
            <div className="process-adv-col process-adv-left">
              <div className="process-adv-item">
                <h6 className="process-adv-num">01.</h6>
                <h6>Personalised Design Approach</h6>
                <p>We take the time to truly understand your lifestyle, needs, and personal taste.</p>
                <p>Every project is custom-tailored, ensuring your space not only looks beautiful but also functions perfectly for the way you live.</p>
              </div>
              <div className="process-adv-item">
                <h6 className="process-adv-num">02.</h6>
                <h6>Seamless Project Management</h6>
                <p>From concept to completion, we manage every detail with care and professionalism.</p>
                <p>You’ll have one clear point of contact who coordinates trades, timelines, and quality control-making the process stress-free and smooth.</p>
              </div>
            </div>
            <div className="process-adv-photo">
              <OptImage src={`${U}/brand/interior-design-process-illustration.webp`} alt={fileAlt("brand/interior-design-process-illustration.webp")} sizes={SIZES.contentCol} />
            </div>
            <div className="process-adv-col process-adv-right">
              <div className="process-adv-item">
                <h6 className="process-adv-num">03.</h6>
                <h6>Thoughtful Material Selection</h6>
                <p>We curate finishes and materials that are not only stylish but also practical, durable, and suited to your space.</p>
                <p>Our expertise ensures every detail, from flooring to fittings-works in harmony with the overall design.</p>
              </div>
              <div className="process-adv-item">
                <h6 className="process-adv-num">04.</h6>
                <h6>Timeless, Functional Interiors</h6>
                <p>Our designs balance form and function, creating interiors that stand the test of time.</p>
                <p>We focus on flow, proportion, and comfort, so your space feels as good as it looks, today and for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-work" style={{ backgroundImage: `url('${U}/2020/05/bg2-process.jpg')` }}>
        <div className="container">
          <div className="quotes-head process-work-head">
            <span className="ot-kicker">[ working steps ]</span>
            <h2 className="ot-title">Our Working Process</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="process-values">
        <div className="container process-values-grid">
          <div className="process-values-photos">
            <OptImage src={`${U}/2025/07/P15-1.jpg`} alt={fileAlt("2025/07/P15-1.jpg")} sizes={SIZES.processPhoto} />
            <OptImage src={`${U}/2025/07/P15-2.jpg`} alt={fileAlt("2025/07/P15-2.jpg")} sizes={SIZES.processPhoto} />
          </div>
          <div>
            <div className="ot-heading is-dots">
              <h2 className="ot-title">The Core Company Values</h2>
            </div>
            <ul>
              <li>Creativity with Purpose</li>
              <li>Client-Centred Design</li>
              <li>Integrity and Transparency</li>
              <li>Quality and Detail</li>
              <li>Collaboration and Trust</li>
              <li>Timeless Style</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-partners">
        <PartnerSlider />
      </section>

      <section className="process-blog" style={{ backgroundImage: `url('${U}/2020/05/bg2-process.png')` }}>
        <div className="container">
          <div className="process-blog-head">
            <div className="quotes-head">
              <span className="ot-kicker">[ our blog ]</span>
              <h2 className="ot-title">Read Our Latest News</h2>
            </div>
            <Link className="octf-btn octf-btn-dark" href="/blog">View all</Link>
          </div>
          <BlogSlider items={slider} />
        </div>
      </section>
    </div>
  );
}
