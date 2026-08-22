import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import HomeGoogleReviews from "@/components/HomeGoogleReviews";
import { CONTACT_BANNER, CONTACT_BG, MAP_EMBED } from "@/lib/data";
import { contactPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

export const metadata = withPageSeo({ title: "Contact – Yara Luxe Interiors" }, "/contact");

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/yara.luxe.interiors?igsh=MTdxazY2bmJxeGUzNQ==",
    vb: "0 0 448 512",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  },
  {
    name: "Linkedin",
    href: "http://linkedin.com/in/yara-luxe-interiors",
    vb: "0 0 448 512",
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/yara.luxe.interiors",
    vb: "0 0 512 512",
    d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/61433211875",
    vb: "0 0 448 512",
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  }
];

function Info({ icon, title, children }) {
  return (
    <div className="contact-info">
      {icon}
      <div className="info-text">
        <h6>{title}</h6>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <JsonLd data={contactPageGraph()} />
      <PageHero
        title="Contact"
        image={CONTACT_BANNER}
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="contact-split">
        <div className="contact-form-col">
          <h2 className="contact-h2">Get in Touch</h2>
          <ContactForm />
        </div>
        <div className="contact-side" style={{ backgroundImage: `url('${CONTACT_BG}')` }}>
          <div className="ot-heading">
            <span className="ot-kicker">[ our contact details ]</span>
            <h2 className="ot-title">Let&apos;s Start a Project</h2>
          </div>
          <p className="contact-lead">
            We’d love to hear from you! Whether you have a question, a project in mind, or simply want to connect, feel free to reach out. Book a free interior design consultation to discuss your project. We aim to respond to all enquiries within 24 hours on business days.
          </p>
          <Info
            title="OUR E-MAIL :"
            icon={
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
            }
          >
            <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
          </Info>
          <Info
            title="OUR OFFICE :"
            icon={
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
            }
          >
            853 Nepean Hwy, Bentleigh, Melbourne, 3204
          </Info>
          <Info
            title="OUR MOBILE :"
            icon={
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
            }
          >
            <a href="tel:0433211875"> +61 0433 211 875</a>
          </Info>
          <Info
            title="OUR PHONE :"
            icon={
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
              </svg>
            }
          >
            <a href="tel:0385293720"> +61 (03) 8529 3720</a>
          </Info>
          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <svg viewBox={s.vb} aria-hidden="true">
                  <path fill="currentColor" d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeGoogleReviews />

      <div className="contact-map">
        <iframe
          title="Yara Luxe Interiors Pty Ltd"
          loading="lazy"
          src={MAP_EMBED}
        />
      </div>
    </div>
  );
}
