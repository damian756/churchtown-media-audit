export const SITE_URL = "https://www.churchtownmedia.co.uk";
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;

export const SITE_NAME = "Churchtown Media";
export const SITE_TITLE = "Churchtown Media | UK public sector intelligence";
export const SITE_DESCRIPTION =
  "Churchtown Media runs Institrace: what UK public bodies decide, buy and spend, cited to the source. Founded by Damian Roche in Southport.";

export const ABOUT_DESCRIPTION =
  "Damian Roche founded Churchtown Media in Southport. Army veteran, twenty years in information, publishing and search, and the builder of Institrace.";
export const CONSULTATION_DESCRIPTION =
  "One-to-one consultations on a question about UK public bodies, with a short written note. Plus Institrace reports, data feeds and dashboards.";
export const WORK_DESCRIPTION =
  "Institrace: new tenders, approvals before tender, contracts ending, buyer spend and supplier checks, from UK council and NHS papers.";
export const CONTACT_DESCRIPTION =
  "Write to Damian Roche at Churchtown Media about a consultation, Institrace for your team, or a report, data feed or dashboard.";

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
  streetAddress: "Suite RA01, 195-197 Wood Street",
  addressLocality: "London",
  postalCode: "E17 3NU",
  addressCountry: "GB",
  companyNumber: "16960442",
  vatId: "GB511024262",
} as const;

export function pageUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
