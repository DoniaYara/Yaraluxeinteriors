import { PROJECTS, PAGE_FAQS } from "../data";
import { articlePageGraph, blogIndexGraph } from "./article";
import { breadcrumbList } from "./breadcrumbs";
import { businessEntity } from "./business";
import {
  BUSINESS_ID,
  PERSON_ID,
  SITE_URL,
  absoluteUrl,
  assetUrl,
  graph,
  idRef
} from "./constants";
import { personEntity } from "./person";
import { locationPageGraph } from "./location-service";
import { servicePageGraph } from "./service";
import { homepageWebPage, webPageEntity } from "./webpage";
import { websiteEntity } from "./website";

export { articlePageGraph, blogIndexGraph, locationPageGraph, servicePageGraph };

function faqAnswerText(answer) {
  return Array.isArray(answer) ? answer.join(" ") : answer;
}

export function homepageGraph() {
  return graph([
    businessEntity(),
    websiteEntity(),
    homepageWebPage({
      name: "Luxury Interior Designer Melbourne | Yara Luxe",
      description:
        "Luxury interior design in Melbourne backed by 19+ years of experience. Bespoke interiors for renovations, new builds and full homes. Start your project."
    }),
    personEntity()
  ]);
}

export function aboutPageGraph() {
  const url = absoluteUrl("/about");
  return graph([
    webPageEntity({
      path: "/about",
      type: "AboutPage",
      name: "About",
      description:
        "With nearly two decades of industry experience, Donia Yara brings architectural insight and interior design expertise to Yara Luxe Interiors.",
      mainEntity: idRef(PERSON_ID)
    }),
    personEntity(),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" }
      ],
      url
    )
  ]);
}

export function contactPageGraph() {
  const url = absoluteUrl("/contact");
  return graph([
    webPageEntity({
      path: "/contact",
      type: "ContactPage",
      name: "Contact",
      description:
        "Contact Yara Luxe Interiors in Bentleigh, Melbourne to book a free interior design consultation or start your project.",
      mainEntity: idRef(BUSINESS_ID)
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" }
      ],
      url
    )
  ]);
}

export function processPageGraph() {
  const url = absoluteUrl("/process");
  return graph([
    webPageEntity({
      path: "/process",
      name: "Our Process",
      description:
        "The Yara Luxe Interiors design process — personalised design, project management and supervision from concept to completion."
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Our Process", path: "/process" }
      ],
      url
    )
  ]);
}

export function faqsPageGraph() {
  const url = absoluteUrl("/faqs");
  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: PAGE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item.a)
      }
    }))
  };

  return graph([
    webPageEntity({
      path: "/faqs",
      name: "FAQs",
      description: "Frequently asked questions about interior design with Yara Luxe Interiors.",
      mainEntity: idRef(faqPage["@id"])
    }),
    faqPage,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "FAQs", path: "/faqs" }
      ],
      url
    )
  ]);
}

export function portfolioPageGraph() {
  const url = absoluteUrl("/portfolio");
  const itemList = {
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        image: assetUrl(`/uploads/${project.img}`)
      }
    }))
  };

  return graph([
    webPageEntity({
      path: "/portfolio",
      type: "CollectionPage",
      name: "Portfolio",
      description: "Selected interior design works by Yara Luxe Interiors.",
      mainEntity: idRef(itemList["@id"])
    }),
    itemList,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" }
      ],
      url
    )
  ]);
}

export function testHomepageGraph() {
  const url = absoluteUrl("/test-homepage");
  return graph([
    webPageEntity({
      path: "/test-homepage",
      name: "Best Interior Designer in Melbourne | Yara Luxe Interiors",
      description:
        "Luxury interior designers in Melbourne — residential & commercial design, kitchen, bathroom, full home & new build services. Serving Toorak, Brighton, Hawthorn, South Yarra & across Melbourne."
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Test Homepage", path: "/test-homepage" }
      ],
      url
    )
  ]);
}

export function ourServicesPageGraph() {
  const url = absoluteUrl("/our-services");
  return graph([
    webPageEntity({
      path: "/our-services",
      name: "Our Services",
      description:
        "Interior design, decoration and styling services from concept to completion — design and planning, project management and finishes."
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Our Services", path: "/our-services" }
      ],
      url
    )
  ]);
}

export function ourServicesChildGraph({ path, name, description }) {
  const url = absoluteUrl(path);
  return graph([
    webPageEntity({
      path,
      name,
      description
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Our Services", path: "/our-services" },
        { name, path }
      ],
      url
    )
  ]);
}

export function legalPageGraph({ path, name, description }) {
  const url = absoluteUrl(path);
  return graph([
    webPageEntity({
      path,
      name,
      description
    }),
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name, path }
      ],
      url
    )
  ]);
}
