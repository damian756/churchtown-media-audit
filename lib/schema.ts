import {
  NAP,
  OG_IMAGE,
  ORG_ID,
  PERSON_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  pageUrl,
} from "./site";

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
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
      "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
      "https://www.siba.digital",
      "https://www.institrace.co.uk",
      "https://find-and-update.company-information.service.gov.uk/company/16960442",
    ],
    knowsAbout: [
      "UK public records",
      "Public-records consultation",
      "Governance advisory",
      "Institrace",
      "SIBA Digital",
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
      "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
      "https://github.com/damian756",
      "https://www.siba.digital",
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
        description:
          "Scoped public-records consultation from Churchtown Media. Working sessions that use Institrace. Full governance audits are commissioned at SIBA Digital.",
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
          "Scoped working sessions and short engagements using Institrace and the SIBA method. Written note. Not a subscription and not a forensic audit.",
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
        name: "Work",
        description:
          "SIBA Digital and Institrace. The public method and the joined public-records index behind Churchtown Media consultation.",
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
            name: "SIBA Digital",
            url: "https://www.siba.digital",
          },
          {
            "@type": "ListItem",
            position: 2,
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
    description:
      "Damian Roche. Ex-British Army. Founder of Churchtown Media, SIBA Digital, and Institrace. Based in Churchtown, Southport.",
    type: "ProfilePage",
    extra: { mainEntity: { "@id": PERSON_ID }, url },
  });
}

export function contactGraph() {
  return webPageGraph({
    path: "/contact",
    name: "Contact",
    description:
      "Write to Damian Roche at Churchtown Media about public-records consultation, Institrace for a team, or a SIBA audit.",
    type: "ContactPage",
    extra: { mainEntity: { "@id": ORG_ID } },
  });
}
