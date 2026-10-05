export const SITE_URL = "https://www.churchtownmedia.co.uk";
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;

export const SITE_NAME = "Churchtown Media";
export const SITE_TITLE = "Churchtown Media | The public record, made easier to read";
export const SITE_DESCRIPTION =
  "Churchtown Media is a small company in Southport, founded by Damian Roche. We build Institrace, a joined index of UK public records, and offer friendly one-to-one help with questions about the record.";

export const ABOUT_DESCRIPTION =
  "Damian Roche founded Churchtown Media in Southport. Army veteran, twenty years working with information, publishing and search, and the builder of Institrace.";
export const CONSULTATION_DESCRIPTION =
  "Friendly one-to-one help with a question about the UK public record. A relaxed working session with Damian Roche, followed by a short, clear written note.";
export const WORK_DESCRIPTION =
  "Institrace, the joined index of UK public records built by Churchtown Media: what it brings together, and who it is for.";
export const CONTACT_DESCRIPTION =
  "Get in touch with Damian Roche at Churchtown Media about a consultation, Institrace for your team, or anything else.";

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
