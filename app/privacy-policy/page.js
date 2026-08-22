import Link from "next/link";
import LegalPage, { LegalContactBlock, LegalUpdated, StudioAddress } from "@/components/LegalPage";
import { legalPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

const PATH = "/privacy-policy";
const TITLE = "Privacy Policy";
const DESCRIPTION =
  "Read how Yara Luxe Interiors collects, uses, stores and protects personal information when you contact us or use our Melbourne interior design website.";

export const metadata = withPageSeo(
  {
    title: "Privacy Policy | Yara Luxe Interiors",
    description: DESCRIPTION
  },
  PATH
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title={TITLE} graph={legalPageGraph({ path: PATH, name: TITLE, description: DESCRIPTION })}>
      <LegalUpdated />
      <p>Yara Luxe Interiors Pty Ltd respects your privacy and is committed to handling personal information responsibly.</p>
      <p>
        This Privacy Policy explains how Yara Luxe Interiors may collect, use, store and disclose personal information when you visit yaraluxeinteriors.com.au, contact us, book a consultation, enquire about an interior design project or otherwise interact with our business.
      </p>
      <p>
        This policy is intended to be read alongside any project proposal, service agreement or other terms that may apply when you engage Yara Luxe Interiors for interior design services.
      </p>

      <h2>1. Who We Are</h2>
      <p>Yara Luxe Interiors Pty Ltd is an interior design studio based in Melbourne, Victoria.</p>
      <p>Business address:</p>
      <StudioAddress />
      <p>
        Email:
        <br />
        <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
      </p>
      <p>
        Phone:
        <br />
        <a href="tel:+61433211875">+61 433 211 875</a>
      </p>
      <p>
        Our website is:
        <br />
        <a href="https://yaraluxeinteriors.com.au">https://yaraluxeinteriors.com.au</a>
      </p>

      <h2>2. Personal Information We May Collect</h2>
      <p>Depending on how you interact with us, we may collect information such as:</p>
      <ul>
        <li>your name</li>
        <li>email address</li>
        <li>telephone number</li>
        <li>residential or project address</li>
        <li>information provided through contact or enquiry forms</li>
        <li>details about your proposed interior design project</li>
        <li>preferred consultation details</li>
        <li>property type</li>
        <li>design requirements and preferences</li>
        <li>correspondence between you and Yara Luxe Interiors</li>
        <li>information you voluntarily provide during consultations</li>
        <li>technical information relating to your use of our website where collected by the website or its service providers</li>
      </ul>
      <p>We only ask for information reasonably relevant to responding to your enquiry, operating our website or providing our services.</p>

      <h2>3. How We Collect Information</h2>
      <p>We may collect personal information when you:</p>
      <ul>
        <li>complete a website enquiry or contact form</li>
        <li>book or request a free consultation</li>
        <li>email or telephone us</li>
        <li>contact us through WhatsApp or social media</li>
        <li>meet with us regarding a project</li>
        <li>engage Yara Luxe Interiors for interior design services</li>
        <li>provide project documents, photographs, plans or specifications</li>
        <li>otherwise communicate with us</li>
      </ul>
      <p>
        Some technical information may also be collected automatically when you use the website, depending on the technologies currently enabled on the site.
      </p>

      <h2>4. Why We Collect Personal Information</h2>
      <p>We may use personal information to:</p>
      <ul>
        <li>respond to enquiries</li>
        <li>arrange free consultations</li>
        <li>understand your project requirements</li>
        <li>prepare proposals or quotations</li>
        <li>communicate about interior design projects</li>
        <li>provide interior design and related services</li>
        <li>coordinate project-related activities</li>
        <li>manage our relationship with clients</li>
        <li>maintain business and administrative records</li>
        <li>improve our website and services</li>
        <li>protect our website and business from misuse</li>
        <li>meet legal, regulatory or accounting obligations</li>
      </ul>
      <p>We will not sell your personal information.</p>

      <h2>5. Interior Design Project Information</h2>
      <p>Interior design projects may require clients to provide information such as:</p>
      <ul>
        <li>floor plans</li>
        <li>property photographs</li>
        <li>architectural drawings</li>
        <li>dimensions</li>
        <li>project addresses</li>
        <li>renovation or construction information</li>
        <li>design preferences</li>
        <li>budget or scope information</li>
      </ul>
      <p>We use this information for legitimate project-related purposes.</p>
      <p>
        Project information may also need to be shared with relevant third parties where reasonably necessary to carry out an agreed project, such as suppliers, trades, contractors, consultants or other project participants.
      </p>
      <p>The exact parties involved will depend on the project.</p>

      <h2>6. Third-Party Service Providers</h2>
      <p>We may use third-party providers to support the operation of our website and business.</p>
      <p>These can include services for:</p>
      <ul>
        <li>website hosting</li>
        <li>email</li>
        <li>communications</li>
        <li>website security</li>
        <li>cloud storage</li>
        <li>professional administration</li>
        <li>project coordination</li>
        <li>embedded maps</li>
        <li>social media links or integrations</li>
      </ul>
      <p>These providers may process information only to the extent necessary for the relevant service.</p>

      <h2>7. Google Maps and External Platforms</h2>
      <p>
        Our website may provide links to or embeds from third-party platforms such as Google Maps, Instagram, Facebook, LinkedIn and WhatsApp.
      </p>
      <p>When you use an external platform, that provider may collect information according to its own privacy terms.</p>
      <p>Yara Luxe Interiors does not control the privacy practices of third-party websites or applications.</p>

      <h2>8. Cookies and Similar Technologies</h2>
      <p>Our website may use cookies or similar browser technologies required for website functionality.</p>
      <p>
        We have not identified first-party analytics or advertising cookies in the current production website. Third-party services such as the Google Maps embed may use their own technologies when loaded.
      </p>
      <p>
        For more information, see our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>9. How We Store and Protect Information</h2>
      <p>
        We take reasonable steps to protect personal information from misuse, interference, loss and unauthorised access, modification or disclosure.
      </p>
      <p>
        However, no website, email system, electronic storage system or internet transmission can be guaranteed to be completely secure.
      </p>

      <h2>10. How Long We Keep Information</h2>
      <p>We retain personal information only for as long as reasonably required for:</p>
      <ul>
        <li>the purpose for which it was collected</li>
        <li>ongoing client or project administration</li>
        <li>legitimate business record keeping</li>
        <li>accounting requirements</li>
        <li>resolving disputes</li>
        <li>complying with applicable legal obligations</li>
      </ul>
      <p>
        Information that is no longer reasonably required may be deleted, de-identified or securely disposed of where appropriate.
      </p>

      <h2>11. Access and Correction</h2>
      <p>You may contact us if you would like to:</p>
      <ul>
        <li>request access to personal information we hold about you</li>
        <li>ask us to correct inaccurate or outdated personal information</li>
      </ul>
      <p>We may need to verify your identity before processing a request.</p>
      <p>
        Contact:
        <br />
        <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
      </p>

      <h2>12. Privacy Concerns or Complaints</h2>
      <p>If you believe your personal information has been handled incorrectly, please contact us first so we can review your concern.</p>
      <p>
        Email:
        <br />
        <a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a>
      </p>
      <p>Please provide enough detail for us to understand and investigate the issue.</p>
      <p>We will take reasonable steps to respond to privacy concerns appropriately.</p>

      <h2>13. Overseas Disclosure</h2>
      <p>Some technology, hosting, communications or cloud service providers may process or store information outside Australia.</p>
      <p>
        Where applicable, information may therefore be processed outside Australia subject to the relevant provider&apos;s privacy and security arrangements.
      </p>

      <h2>14. Links to Other Websites</h2>
      <p>Our website may contain links to websites operated by third parties.</p>
      <p>We are not responsible for the content, security or privacy practices of websites that we do not operate.</p>

      <h2>15. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy when our business, website, technology or legal obligations change.</p>
      <p>The current version will be published on this page together with its latest update date.</p>

      <h2>16. Contact</h2>
      <p>For privacy-related enquiries:</p>
      <LegalContactBlock />
    </LegalPage>
  );
}
