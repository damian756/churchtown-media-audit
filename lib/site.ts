export const SITE_URL = "https://www.churchtownmedia.co.uk";
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;

export const SITE_NAME = "Churchtown Media";
export const SITE_TITLE = "Churchtown Media | Public-records consultation";
export const SITE_DESCRIPTION =
  "Advisory practice of Damian Roche. Consultation on the UK public record, using Institrace and the method developed in public at SIBA Digital.";

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/about#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const NAP = {
  name: SITE_NAME,
  legalName: "Churchtown Media Ltd",
  emailHello: "hello@churchtownmedia.co.uk",
  emailDamian: "damian@churchtownmedia.co.uk",
  telephoneDisplay: "01704 635785",
  telephone: "+441704635785",
  streetAddress: "5 Cambridge Avenue",
  addressLocality: "Southport",
  addressRegion: "Merseyside",
  postalCode: "PR9 9SA",
  addressCountry: "GB",
  companyNumber: "16960442",
  vatId: "GB511024262",
} as const;

export function pageUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
