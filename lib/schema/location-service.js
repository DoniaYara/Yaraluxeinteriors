import { breadcrumbList } from "./breadcrumbs";
import { BUSINESS_ID, absoluteUrl, graph, idRef } from "./constants";
import { webPageEntity } from "./webpage";

export const LOCATIONS = [
  {
    path: "/interior-designer-hawthorn",
    suburb: "Hawthorn",
    postcode: "3122",
    breadcrumbName: "Interior Designer Hawthorn",
    description:
      "Interior designer in Hawthorn for Victorian, Edwardian and contemporary homes. Bespoke renovations and interiors backed by 19+ years of experience."
  },
  {
    path: "/interior-designer-kew",
    suburb: "Kew",
    postcode: "3101",
    breadcrumbName: "Interior Designer Kew",
    description:
      "Interior designer in Kew creating bespoke, functional interiors for family homes, renovations and new builds. Start your project with tailored design."
  },
  {
    path: "/interior-designer-toorak",
    suburb: "Toorak",
    postcode: "3142",
    breadcrumbName: "Interior Designer Toorak",
    description:
      "Interior designer in Toorak specialising in luxury homes, heritage residences and high-end apartments. Bespoke design backed by 19+ years of experience."
  },
  {
    path: "/interior-designer-south-yarra",
    suburb: "South Yarra",
    postcode: "3141",
    breadcrumbName: "Interior Designer South Yarra",
    description:
      "Interior designer in South Yarra for apartments, penthouses, heritage homes and renovations. Create a refined, functional interior tailored to you."
  },
  {
    path: "/interior-designer-brighton",
    suburb: "Brighton",
    postcode: "3186",
    breadcrumbName: "Interior Designer Brighton",
    description:
      "Interior designer in Brighton for luxury bayside homes, heritage renovations and new builds. Bespoke interiors backed by 19+ years of experience."
  },
  {
    path: "/interior-designer-brighton-east",
    suburb: "Brighton East",
    postcode: "3187",
    breadcrumbName: "Interior Designer Brighton East",
    description:
      "Interior designer in Brighton East for renovations, new builds and complete homes. Get bespoke, functional design tailored to your lifestyle."
  },
  {
    path: "/interior-designer-balwyn",
    suburb: "Balwyn",
    postcode: "3103",
    breadcrumbName: "Interior Designer Balwyn",
    description:
      "Interior designer in Balwyn for luxury family homes, renovations and new builds. Bespoke design that balances refined style with everyday function."
  },
  {
    path: "/interior-designer-balwyn-north",
    suburb: "Balwyn North",
    postcode: "3104",
    breadcrumbName: "Interior Designer Balwyn North",
    description:
      "Interior designer in Balwyn North for family homes, townhouses, apartments and renovations. Create a tailored interior designed around how you live."
  },
  {
    path: "/interior-designer-camberwell",
    suburb: "Camberwell",
    postcode: "3124",
    breadcrumbName: "Interior Designer Camberwell",
    description:
      "Interior designer in Camberwell for heritage homes, luxury family residences and new builds. Bespoke interiors backed by 19+ years of experience."
  },
  {
    path: "/interior-designer-canterbury",
    suburb: "Canterbury",
    postcode: "3126",
    breadcrumbName: "Interior Designer Canterbury",
    description:
      "Interior designer in Canterbury for Victorian and Edwardian homes, renovations and new builds. Preserve character while creating refined modern living."
  },
  {
    path: "/interior-designer-mont-albert",
    suburb: "Mont Albert",
    postcode: "3127",
    breadcrumbName: "Interior Designer Mont Albert",
    description:
      "Interior designer in Mont Albert creating bespoke interiors for renovations and complete homes. Thoughtful layouts, materials and finishes tailored to you."
  },
  {
    path: "/interior-designer-albert-park",
    suburb: "Albert Park",
    postcode: "3206",
    breadcrumbName: "Interior Designer Albert Park",
    description:
      "Interior designer in Albert Park for tailored renovations and complete homes, from space planning and materials to furniture and refined final styling."
  },
  {
    path: "/interior-designer-elwood",
    suburb: "Elwood",
    postcode: "3184",
    breadcrumbName: "Interior Designer Elwood",
    description:
      "Interior designer in Elwood for renovations, new builds and complete homes. Bespoke, functional interiors shaped around your lifestyle and personal style."
  },
  {
    path: "/interior-designer-armadale",
    suburb: "Armadale",
    postcode: "3143",
    breadcrumbName: "Interior Designer Armadale",
    description:
      "Interior designer in Armadale creating bespoke interiors for renovations, new builds and complete homes. Refined design tailored to the way you live."
  },
  {
    path: "/interior-designer-malvern",
    suburb: "Malvern",
    postcode: "3144",
    breadcrumbName: "Interior Designer Malvern",
    description:
      "Interior designer in Malvern for period homes, family residences and luxury apartments. Bespoke design for renovations, new builds and complete interiors."
  },
  {
    path: "/interior-designer-prahran",
    suburb: "Prahran",
    postcode: "3181",
    breadcrumbName: "Interior Designer Prahran",
    description:
      "Interior designer in Prahran for heritage terraces, warehouse conversions and luxury apartments. Bespoke interiors balancing character and modern living."
  },
  {
    path: "/interior-designer-templestowe",
    suburb: "Templestowe",
    postcode: "3106",
    breadcrumbName: "Interior Designer Templestowe",
    description:
      "Interior designer in Templestowe for family homes, renovations and complete interiors. Tailored design focused on comfort, function and refined living."
  }
];

export function areaServedPlace(location) {
  return {
    "@type": "Place",
    name: `${location.suburb} VIC ${location.postcode}`
  };
}

export function getLocation(path) {
  return LOCATIONS.find((l) => l.path === path);
}

export function locationServiceEntity(location) {
  const url = absoluteUrl(location.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Interior Design Services in ${location.suburb}`,
    serviceType: "Interior Design",
    url,
    description: location.description,
    provider: idRef(BUSINESS_ID),
    areaServed: areaServedPlace(location)
  };
}

export function locationPageGraph(path) {
  const location = getLocation(path);
  if (!location) throw new Error(`Unknown location page: ${path}`);

  const url = absoluteUrl(location.path);
  const entity = locationServiceEntity(location);

  return graph([
    webPageEntity({
      path: location.path,
      name: location.breadcrumbName,
      description: location.description,
      mainEntity: idRef(entity["@id"])
    }),
    entity,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: location.breadcrumbName, path: location.path }
      ],
      url
    )
  ]);
}
