import {
  BUSINESS_ID,
  BUSINESS_NAME,
  EMAIL,
  LEGAL_NAME,
  LOGO_PATH,
  MELBOURNE,
  PHONE,
  POSTAL_ADDRESS,
  SAME_AS,
  SITE_URL,
  assetUrl,
  idRef
} from "./constants";
import { areaServedPlace, LOCATIONS } from "./location-service";
import { personRef } from "./person";
import { SERVICES } from "./service";

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function businessRef() {
  return idRef(BUSINESS_ID);
}

export function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Interior Design Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${SITE_URL}${service.path}#service`,
        name: service.catalogName,
        url: `${SITE_URL}${service.path}`
      }
    }))
  };
}

export function openingHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: WEEKDAYS,
      opens: "10:00",
      closes: "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00"
    }
  ];
}

export function areaServed() {
  return [MELBOURNE, ...LOCATIONS.map(areaServedPlace)];
}

export function businessEntity() {
  const logo = assetUrl(LOGO_PATH);

  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo,
    image: assetUrl("/uploads/2025/07/P1-1.jpg"),
    description:
      "Yara Luxe Interiors is a luxury interior design studio in Melbourne, offering bespoke residential and commercial interiors including kitchen, bathroom, new build, full home and project supervision, with in-home and virtual consultations.",
    address: POSTAL_ADDRESS,
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: areaServed(),
    founder: personRef(),
    sameAs: SAME_AS,
    hasOfferCatalog: offerCatalog()
  };
}
