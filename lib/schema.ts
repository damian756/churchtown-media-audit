import { INSTITRACE_URL, TAGLINE } from "./institrace";
import {
  ABOUT_DESCRIPTION,
  CONSULTATION_DESCRIPTION,
  CONTACT_DESCRIPTION,
  NAP,
  OG_IMAGE,
  ORG_ID,
  PERSON_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  WEBSITE_ID,
  pageUrl,
} from "./site";

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  };
}

export function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: NAP.name,
    legalName: NAP.legalName,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    image: OG_IMAGE,
    email: NAP.emailDamian,
    telephone: NAP.telephone,
    address: postalAddress(),
    areaServed: { "@type": "Country", name: "United Kingdom" },
    founder: { "@id": PERSON_ID },
    vatID: NAP.vatId,
    taxID: NAP.companyNumber,
    sameAs: [
      "https://www.linkedin.com/in/damian-roche/",
      INSTITRACE_URL,
      "https://find-and-update.company-information.service.gov.uk/company/16960442",
    ],
    slogan: TAGLINE,
    knowsAbout: [
      "UK public sector intelligence",
      "UK council and NHS papers",
      "Public sector tenders and contracts",
      "Buyer spend",
      "Supplier checks",
      "Institrace",
    ],
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Damian Roche",
    jobTitle: "Founder",
    description:
      "Founder of Churchtown Media Ltd, which runs Institrace. Army veteran with twenty years in information, publishing and search.",
    knowsAbout: ["UK public sector intelligence", "Public sector tenders and contracts", "Search"],
    worksFor: { "@id": ORG_ID },
    url: pageUrl("/about"),
    image: `${SITE_URL}/images/about/damian-rspb-marshside.webp`,
    email: NAP.emailDamian,
    telephone: NAP.telephone,
    address: postalAddress(),
    sameAs: [
      "https://www.linkedin.com/in/damian-roche/",
      "https://github.com/damian756",
      INSTITRACE_URL,
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), personNode(), websiteNode()],
  };
}

export function webPageGraph(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  extra?: Record<string, unknown>;
}) {
  const url = pageUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": opts.type ?? "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
        ...opts.extra,
      },
    ],
  };
}

/**
 * The home page: the page itself, the consultation (its Services row, which replaced /services on 11 Nov 2026) and
 * Institrace (its Institrace row, which replaced /case-studies).
 */
export function homeGraph() {
  const url = SITE_URL;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "Service",
        "@id": `${url}/#consultation`,
        name: "Consultation on UK public bodies",
        serviceType: "Consultation",
        provider: { "@id": ORG_ID },
        url: `${url}/#services`,
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description: CONSULTATION_DESCRIPTION,
      },
      {
        "@type": "WebApplication",
        "@id": `${url}/#institrace`,
        name: "Institrace",
        url: INSTITRACE_URL,
        description: TAGLINE,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        provider: { "@id": ORG_ID },
      },
    ],
  };
}

export function aboutGraph() {
  const url = pageUrl("/about");
  return webPageGraph({
    path: "/about",
    name: "About Damian Roche",
    description: ABOUT_DESCRIPTION,
    type: "ProfilePage",
    extra: { mainEntity: { "@id": PERSON_ID }, url },
  });
}

export function contactGraph() {
  return webPageGraph({
    path: "/contact",
    name: "Contact",
    description: CONTACT_DESCRIPTION,
    type: "ContactPage",
    extra: { mainEntity: { "@id": ORG_ID } },
  });
}
