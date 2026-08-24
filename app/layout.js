import "./style.css";
import "./hawthorn.css";
import AppShell from "@/components/AppShell";
import { DEFAULT_OG_ALT, DEFAULT_OG_IMAGE, METADATA_BASE } from "@/lib/seo";

export const metadata = {
  metadataBase: METADATA_BASE,
  title: "Yara Luxe Interiors",
  description: "Custom interior design in Melbourne — elegant, functional and personal spaces.",
  alternates: {
    canonical: "./"
  },
  icons: {
    icon: "/uploads/2024/11/cropped-web-app-manifest-512x512-1-32x32.png",
    apple: "/uploads/brand/apple-touch-icon-180.png"
  },
  openGraph: {
    siteName: "Yara Luxe Interiors",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_ALT
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQDXHMGS');`
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/uploads/2024/11/cropped-web-app-manifest-512x512-1-32x32.png" />
        <link rel="apple-touch-icon" href="/uploads/brand/apple-touch-icon-180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/uploads/brand/app-icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/uploads/brand/app-icon-512.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700|Titillium+Web:300,400,600,700|Josefin+Sans:300,400,500,600,700|Roboto:400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQDXHMGS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if("scrollRestoration" in history)history.scrollRestoration="manual";}catch(e){}var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&(n.type==="reload"||n.type==="navigate"))window.scrollTo(0,0);function u(){var y=window.scrollY||document.documentElement.scrollTop||0;document.documentElement.classList.toggle("show-back-top",y>120);document.documentElement.classList.toggle("is-scrolled",y>16);}u();window.addEventListener("scroll",u,{passive:true,capture:true});window.addEventListener("load",u);window.addEventListener("pageshow",u);})();`
          }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
