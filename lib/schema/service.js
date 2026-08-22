import { breadcrumbList } from "./breadcrumbs";
import { BUSINESS_ID, MELBOURNE, absoluteUrl, graph, idRef } from "./constants";
import { webPageEntity } from "./webpage";

export const SERVICES = [
  {
    key: "residential",
    path: "/residential-interior-design-melbourne",
    name: "Residential Interior Design Melbourne",
    serviceType: "Residential Interior Design",
    catalogName: "Residential Interior Design",
    description:
      "Residential interior design in Melbourne for renovations, new builds and complete homes. Bespoke, functional interiors backed by 19+ years of experience."
  },
  {
    key: "commercial",
    path: "/commercial-interior-design-melbourne",
    name: "Commercial Interior Design Melbourne",
    serviceType: "Commercial Interior Design",
    catalogName: "Commercial Interior Design",
    description:
      "Commercial interior design in Melbourne for offices, retail, hospitality and showrooms. Create a polished, functional space tailored to your business."
  },
  {
    key: "kitchen",
    path: "/kitchen-interior-design-melbourne",
    name: "Kitchen Interior Design Melbourne",
    serviceType: "Kitchen Interior Design",
    catalogName: "Kitchen Interior Design",
    description:
      "Kitchen interior design in Melbourne for renovations and new builds, including bespoke cabinetry, layouts, lighting, storage and premium finishes."
  },
  {
    key: "bathroom",
    path: "/bathroom-interior-design-melbourne",
    name: "Bathroom Interior Design Melbourne",
    serviceType: "Bathroom Interior Design",
    catalogName: "Bathroom Interior Design",
    description:
      "Bathroom interior design in Melbourne for refined, functional spaces with tailored layouts, fixtures, lighting, flooring and material selections."
  },
  {
    key: "consultation",
    path: "/interior-design-consultation-melbourne",
    name: "Free Interior Design Consultation Melbourne",
    serviceType: "Interior Design Consultation",
    catalogName: "Free Interior Design Consultation",
    description:
      "Book a free interior design consultation in Melbourne for expert guidance on layouts, colour, furniture, lighting and finishes, in-home or virtually."
  },
  {
    key: "newBuild",
    path: "/new-build-interior-design-melbourne",
    name: "New Build Interior Design Melbourne",
    serviceType: "New Build Interior Design",
    catalogName: "New Build Interior Design",
    description:
      "New build interior design in Melbourne for layouts, lighting, joinery, materials and finishes from early planning. Start your project with expert support."
  },
  {
    key: "supervision",
    path: "/interior-design-project-supervision-melbourne",
    name: "Interior Design Project Supervision Melbourne",
    serviceType: "Interior Design Project Supervision",
    catalogName: "Interior Design Project Supervision",
    description:
      "Interior design project supervision in Melbourne to coordinate trades, materials and styling while keeping your approved design vision on track."
  },
  {
    key: "fullHome",
    path: "/full-home-interior-design-melbourne",
    name: "Full Home Interior Design Melbourne",
    serviceType: "Full Home Interior Design",
    catalogName: "Full Home Interior Design",
    description:
      "Full home interior design in Melbourne from space planning and finishes to furniture, storage, lighting and styling. Create one cohesive, refined home."
  }
];

export function getService(pathOrKey) {
  return SERVICES.find((s) => s.path === pathOrKey || s.key === pathOrKey);
}

export function serviceId(path) {
  return `${absoluteUrl(path)}#service`;
}

export function serviceEntity(service) {
  const url = absoluteUrl(service.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    serviceType: service.serviceType,
    url,
    description: service.description,
    provider: idRef(BUSINESS_ID),
    areaServed: MELBOURNE
  };
}

export function servicePageGraph(pathOrKey) {
  const service = getService(pathOrKey);
  if (!service) throw new Error(`Unknown service: ${pathOrKey}`);

  const url = absoluteUrl(service.path);
  const entity = serviceEntity(service);

  return graph([
    webPageEntity({
      path: service.path,
      name: service.name,
      description: service.description,
      mainEntity: idRef(entity["@id"])
    }),
    entity,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: service.name, path: service.path }
      ],
      url
    )
  ]);
}
