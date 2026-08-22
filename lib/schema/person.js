import {
  BUSINESS_ID,
  FOUNDER_IMAGE_PATH,
  FOUNDER_NAME,
  PERSON_ID,
  SITE_URL,
  assetUrl,
  idRef
} from "./constants";

export function personRef() {
  return idRef(PERSON_ID);
}

export function personEntity() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER_NAME,
    jobTitle: "Interior Designer",
    url: `${SITE_URL}/about`,
    image: assetUrl(FOUNDER_IMAGE_PATH),
    worksFor: idRef(BUSINESS_ID),
    description:
      "Interior designer and founder of Yara Luxe Interiors. Donia Yara holds a Bachelor's degree in Architecture and a two-year postgraduate qualification in interior design, with 19+ years of industry experience.",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor's degree in Architecture"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Two-year postgraduate qualification in Interior Design"
      }
    ],
    knowsAbout: [
      "Interior Design",
      "Architecture",
      "Residential Interior Design",
      "Commercial Interior Design",
      "Kitchen Interior Design",
      "Bathroom Interior Design"
    ]
  };
}
