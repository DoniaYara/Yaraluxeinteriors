import LegalPage, { LegalContactBlock, LegalUpdated } from "@/components/LegalPage";
import { legalPageGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

const PATH = "/cookie-policy";
const TITLE = "Cookie Policy";
const DESCRIPTION =
  "Learn how cookies and similar website technologies may be used when you visit the Yara Luxe Interiors website.";

export const metadata = withPageSeo(
  {
    title: "Cookie Policy | Yara Luxe Interiors",
    description: DESCRIPTION
  },
  PATH
);

export default function CookiePolicyPage() {
  return (
    <LegalPage title={TITLE} graph={legalPageGraph({ path: PATH, name: TITLE, description: DESCRIPTION })}>
      <LegalUpdated />
      <p>This Cookie Policy explains how cookies and similar technologies may be used when you visit the Yara Luxe Interiors website.</p>
      <p>
        Website:
        <br />
        <a href="https://yaraluxeinteriors.com.au">https://yaraluxeinteriors.com.au</a>
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small pieces of information that a website may store in your browser or device.</p>
      <p>They can be used for purposes such as:</p>
      <ul>
        <li>remembering preferences</li>
        <li>enabling website functionality</li>
        <li>maintaining security</li>
        <li>understanding website performance</li>
        <li>supporting embedded third-party services</li>
      </ul>
      <p>Not every website uses every type of cookie.</p>

      <h2>2. Cookies Used by This Website</h2>
      <p>
        We inspected the current production website code. Yara Luxe Interiors does not currently set first-party cookies that we have identified.
      </p>
      <p>
        The table below lists technologies that are actually present in the website. We have not invented cookie names or expiry periods. Where a third-party service may set cookies, those cookies are controlled by that provider.
      </p>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cookie / Technology</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Maps embed</td>
              <td>Google</td>
              <td>Display the Bentleigh studio location on the homepage</td>
              <td>Functional</td>
              <td>Set by Google, if any</td>
            </tr>
            <tr>
              <td>Google Fonts stylesheet</td>
              <td>Google</td>
              <td>Load the website fonts</td>
              <td>Functional</td>
              <td>Set by Google, if any</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        These are third-party technologies. This website does not currently set its own named first-party cookies for preferences, analytics or advertising.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>The website contains third-party services and outbound links confirmed in the current code:</p>
      <ul>
        <li>an embedded Google Maps iframe on the homepage</li>
        <li>a Google Fonts stylesheet in the site layout</li>
        <li>links to Instagram, Facebook, LinkedIn and WhatsApp</li>
        <li>a Google Maps search link in the footer</li>
      </ul>
      <p>
        An embedded third-party service may collect information or use its own technologies according to that provider&apos;s policies.
      </p>

      <h2>4. Analytics</h2>
      <p>Yara Luxe Interiors does not currently use website analytics cookies that we have identified in the production website.</p>

      <h2>5. Advertising Cookies</h2>
      <p>We have not identified advertising or behavioural tracking pixels on the current production website.</p>

      <h2>6. Managing Cookies</h2>
      <p>Most browsers allow you to:</p>
      <ul>
        <li>view stored cookies</li>
        <li>block cookies</li>
        <li>delete cookies</li>
        <li>restrict third-party cookies</li>
      </ul>
      <p>Blocking some technologies may affect website functionality where those technologies are required.</p>

      <h2>7. External Websites</h2>
      <p>Links from this website may take you to external services such as social-media platforms.</p>
      <p>Cookies used after visiting another website are controlled by that website and are subject to its own policies.</p>

      <h2>8. Changes to This Cookie Policy</h2>
      <p>We may update this Cookie Policy if the website&apos;s technology or third-party services change.</p>
      <p>The latest version will be available on this page.</p>

      <h2>9. Contact</h2>
      <p>For questions about this Cookie Policy:</p>
      <LegalContactBlock />
    </LegalPage>
  );
}
