import LegalPage, { LegalContactBlock, LegalUpdated, StudioAddress } from "@/components/LegalPage";
import { legalPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

const PATH = "/terms-and-conditions";
const TITLE = "Terms & Conditions";
const DESCRIPTION =
  "Read the website and service terms for Yara Luxe Interiors, a Melbourne studio providing residential and commercial interior design services.";

export const metadata = withPageSeo(
  {
    title: "Terms & Conditions | Yara Luxe Interiors",
    description: DESCRIPTION
  },
  PATH
);

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title={TITLE} graph={legalPageGraph({ path: PATH, name: TITLE, description: DESCRIPTION })}>
      <LegalUpdated />
      <p>
        These Terms &amp; Conditions apply to the use of the Yara Luxe Interiors website and provide general information about our services.
      </p>
      <p>
        Specific interior design projects may also be governed by a separate proposal, quotation, scope of work or service agreement.
      </p>
      <p>
        Where a specific written project agreement applies, its project-specific terms should be read together with these Terms &amp; Conditions.
      </p>

      <h2>1. About Yara Luxe Interiors</h2>
      <p>Yara Luxe Interiors Pty Ltd is a Melbourne-based interior design studio.</p>
      <p>Our services may include:</p>
      <ul>
        <li>residential interior design</li>
        <li>commercial interior design</li>
        <li>kitchen interior design</li>
        <li>bathroom interior design</li>
        <li>new build interior design</li>
        <li>full home interior design</li>
        <li>interior design consultation</li>
        <li>interior design project supervision</li>
      </ul>
      <p>Our business address is:</p>
      <StudioAddress />
      <p>
        Website:
        <br />
        <a href="https://yaraluxeinteriors.com.au">https://yaraluxeinteriors.com.au</a>
      </p>

      <h2>2. Website Use</h2>
      <p>You may use this website for lawful purposes, including:</p>
      <ul>
        <li>learning about our services</li>
        <li>viewing our portfolio</li>
        <li>reading our interior design resources</li>
        <li>contacting us</li>
        <li>requesting a consultation</li>
      </ul>
      <p>You must not deliberately:</p>
      <ul>
        <li>interfere with the operation or security of the website</li>
        <li>attempt to gain unauthorised access to website systems</li>
        <li>submit malicious code</li>
        <li>use the website for unlawful activity</li>
        <li>reproduce protected content in a way that infringes intellectual property rights</li>
      </ul>

      <h2>3. Information on This Website</h2>
      <p>We aim to keep website information useful and accurate.</p>
      <p>Interior design, renovation and construction projects vary significantly depending on factors such as:</p>
      <ul>
        <li>property condition</li>
        <li>site constraints</li>
        <li>project scope</li>
        <li>client requirements</li>
        <li>materials</li>
        <li>suppliers</li>
        <li>trades</li>
        <li>approvals</li>
        <li>construction requirements</li>
        <li>timing</li>
      </ul>
      <p>
        General information on this website should therefore not be treated as a project-specific quotation, construction specification or guarantee.
      </p>
      <p>A project becomes subject to an agreed scope only when the relevant details are confirmed with Yara Luxe Interiors.</p>

      <h2>4. Free Interior Design Consultation</h2>
      <p>Yara Luxe Interiors offers a free initial interior design consultation.</p>
      <p>The free consultation is an opportunity to:</p>
      <ul>
        <li>discuss your project</li>
        <li>understand your design needs</li>
        <li>discuss potential scope</li>
        <li>determine whether Yara Luxe Interiors is suitable for the project</li>
      </ul>
      <p>A free consultation does not automatically create an ongoing paid service agreement.</p>
      <p>Any subsequent professional services, scope, deliverables and fees will be communicated separately where applicable.</p>

      <h2>5. Interior Design Services</h2>
      <p>The exact services provided for a client project will depend on the agreed project scope.</p>
      <p>A project may involve services such as:</p>
      <ul>
        <li>space planning</li>
        <li>design concepts</li>
        <li>material and finish selections</li>
        <li>colour selections</li>
        <li>furniture selections</li>
        <li>lighting concepts</li>
        <li>kitchen or bathroom design</li>
        <li>joinery concepts</li>
        <li>3D visualisation</li>
        <li>documentation</li>
        <li>supplier coordination</li>
        <li>trade coordination</li>
        <li>styling</li>
        <li>project supervision</li>
      </ul>
      <p>Not every service listed on the website is automatically included in every project.</p>
      <p>The agreed proposal or project documentation determines the actual scope.</p>

      <h2>6. Quotes, Fees and Payment</h2>
      <p>Website content is not a fixed quotation unless expressly stated otherwise.</p>
      <p>Fees for paid interior design services will depend on the agreed scope and will be communicated to the client separately.</p>
      <p>Any applicable:</p>
      <ul>
        <li>design fees</li>
        <li>payment schedule</li>
        <li>deposits</li>
        <li>supplier costs</li>
        <li>third-party costs</li>
        <li>variations</li>
        <li>reimbursement arrangements</li>
      </ul>
      <p>should be governed by the relevant proposal, quotation or project agreement.</p>

      <h2>7. Client Responsibilities</h2>
      <p>Clients are responsible for providing accurate and reasonably complete information relevant to the project.</p>
      <p>This may include:</p>
      <ul>
        <li>property information</li>
        <li>dimensions</li>
        <li>plans</li>
        <li>construction information</li>
        <li>access arrangements</li>
        <li>budget considerations</li>
        <li>requirements and preferences</li>
        <li>approvals or decisions required from the client</li>
      </ul>
      <p>Delays in receiving necessary information, approvals or decisions may affect a project&apos;s timing.</p>

      <h2>8. Designs, Concepts and Client Approval</h2>
      <p>Interior design involves professional judgement and creative interpretation.</p>
      <p>Where client approval is required for:</p>
      <ul>
        <li>layouts</li>
        <li>colours</li>
        <li>finishes</li>
        <li>furniture</li>
        <li>fixtures</li>
        <li>joinery</li>
        <li>materials</li>
        <li>design concepts</li>
      </ul>
      <p>clients should review the relevant information carefully before providing approval.</p>
      <p>Changes requested after approval may affect scope, timing or fees where set out in the relevant project agreement.</p>

      <h2>9. Colours, Materials and Product Variations</h2>
      <p>Images displayed on screens may not reproduce colours, finishes and textures exactly.</p>
      <p>Natural products and materials may also vary.</p>
      <p>Examples can include:</p>
      <ul>
        <li>timber</li>
        <li>stone</li>
        <li>marble</li>
        <li>fabrics</li>
        <li>tiles</li>
        <li>handmade products</li>
        <li>natural finishes</li>
      </ul>
      <p>Where material selection is important, physical samples and supplier specifications should be considered where available.</p>

      <h2>10. Suppliers, Trades and Other Third Parties</h2>
      <p>Interior design projects may involve independent third parties, including:</p>
      <ul>
        <li>builders</li>
        <li>trades</li>
        <li>manufacturers</li>
        <li>suppliers</li>
        <li>architects</li>
        <li>engineers</li>
        <li>consultants</li>
        <li>delivery providers</li>
        <li>installers</li>
      </ul>
      <p>
        Unless expressly agreed otherwise in writing, third-party products and services remain subject to the relevant third party&apos;s own availability, workmanship, warranties, schedules and terms.
      </p>
      <p>Nothing in this section limits rights that cannot legally be excluded.</p>

      <h2>11. Project Timing</h2>
      <p>Any timeframes discussed before or during a project may depend on matters outside Yara Luxe Interiors&apos; direct control, including:</p>
      <ul>
        <li>client approvals</li>
        <li>supplier availability</li>
        <li>manufacturing lead times</li>
        <li>deliveries</li>
        <li>trades</li>
        <li>construction progress</li>
        <li>permits or approvals</li>
        <li>unexpected site conditions</li>
      </ul>
      <p>Project-specific timing commitments, where applicable, should be set out in the relevant project agreement.</p>

      <h2>12. Portfolio and Website Images</h2>
      <p>Unless otherwise stated, photographs, designs, graphics, branding and other original website content are owned by or licensed to Yara Luxe Interiors.</p>
      <p>You may view website content for personal and informational purposes.</p>
      <p>
        You must not reproduce, republish, commercially exploit or claim ownership of our original designs, photographs, written content or branding without permission, except where permitted by law.
      </p>
      <p>Any additional intellectual property rights relating to a specific client&apos;s project may be governed by that project&apos;s agreement.</p>

      <h2>13. Third-Party Links</h2>
      <p>The website may contain links to third-party websites or services.</p>
      <p>These may include:</p>
      <ul>
        <li>Google Maps</li>
        <li>social media platforms</li>
        <li>suppliers</li>
        <li>external services</li>
      </ul>
      <p>Yara Luxe Interiors is not responsible for third-party website content, availability or privacy practices.</p>

      <h2>14. Australian Consumer Law</h2>
      <p>
        Nothing in these Terms &amp; Conditions is intended to exclude, restrict or modify any guarantee, right or remedy that cannot lawfully be excluded under the Australian Consumer Law or other applicable Australian legislation.
      </p>
      <p>Where the Australian Consumer Law provides a consumer with rights or remedies in relation to services, those rights continue to apply.</p>

      <h2>15. Liability</h2>
      <p>To the maximum extent permitted by law, Yara Luxe Interiors is not responsible for loss arising solely from:</p>
      <ul>
        <li>inaccurate information supplied by a client</li>
        <li>unauthorised changes made by others to approved designs</li>
        <li>third-party products or services outside our reasonable control</li>
        <li>use of general website information as a substitute for project-specific professional advice</li>
      </ul>
      <p>This clause does not exclude liability or rights where exclusion is prohibited by law.</p>

      <h2>16. Changes to Services or Website Information</h2>
      <p>We may update:</p>
      <ul>
        <li>website content</li>
        <li>service descriptions</li>
        <li>portfolio content</li>
        <li>operating information</li>
        <li>these Terms &amp; Conditions</li>
      </ul>
      <p>from time to time.</p>
      <p>Project agreements already entered into are governed by the terms applicable to those agreements.</p>

      <h2>17. Governing Law</h2>
      <p>These Terms &amp; Conditions are governed by the laws applicable in Victoria, Australia.</p>
      <p>
        Any dispute will be subject to applicable Australian law and the jurisdiction of courts or tribunals having authority in Victoria, subject to any rights available under applicable consumer law.
      </p>

      <h2>18. Contact</h2>
      <p>Questions about these Terms &amp; Conditions can be sent to:</p>
      <LegalContactBlock />
    </LegalPage>
  );
}
