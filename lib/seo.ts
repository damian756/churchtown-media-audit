import type { Metadata } from "next";
import {
  OG_IMAGE,
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  pageUrl,
} from "./site";

export const ogImage = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: "Churchtown Media. Know what the public record already shows.",
};

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = pageUrl(opts.path);
  const isHome = opts.path === "/";
  const ogTitle = isHome ? SITE_TITLE : `${opts.title} | ${SITE_NAME}`;

  return {
    title: isHome ? { absolute: SITE_TITLE } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Damian Roche", url: SITE_URL }],
  keywords: [
    "public records consultation",
    "governance advisory",
    "Institrace",
    "SIBA Digital",
    "Churchtown Media",
    "Damian Roche",
    "OSINT advisory",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
