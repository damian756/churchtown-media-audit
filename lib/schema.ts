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
  SITE_URL,
  WEBSITE_ID,
  WORK_DESCRIPTION,
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
    email: [NAP.emailHello, NAP.emailDamian],
    telephone: NAP.telephone,
    address: postalAddress(),
    areaServed: { "@type": "Country", name: "United Kingdom" },
    founder: { "@id": PERSON_ID },
    vatID: NAP.vatId,
    taxID: NAP.companyNumber,
    sameAs: [
      "https://www.linkedin.com/in/damian-roche/",
      "https://www.institrace.co.uk",
      "https://find-and-update.company-information.service.gov.uk/company/16960442",
    ],
    knowsAbout: [
      "UK public records",
      "Public-records consultation",
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
    worksFor: { "@id": ORG_ID },
    url: pageUrl("/about"),
    image: `${SITE_URL}/images/about/damian-rspb-marshside.webp`,
    email: NAP.emailDamian,
    telephone: NAP.telephone,
    address: postalAddress(),
    sameAs: [
      "https://www.linkedin.com/in/damian-roche/",
      "https://github.com/damian756",
      "https://www.institrace.co.uk",
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

export function consultationGraph() {
  const url = pageUrl("/services");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Consultation",
        description: CONSULTATION_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${url}#service` },
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Public-records consultation",
        provider: { "@id": ORG_ID },
        url,
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description:
          "Friendly one-to-one sessions on a question about the UK public record, using Institrace, followed by a short, clear written note.",
      },
    ],
  };
}

export function workGraph() {
  const url = pageUrl("/case-studies");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "What we've built",
        description: WORK_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Institrace",
            url: "https://www.institrace.co.uk",
          },
        ],
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
