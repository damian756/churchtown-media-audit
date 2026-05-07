import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Churchtown Media",
  description:
    "Get in touch with Churchtown Media. Specialist digital advisory practice founded by Damian Roche. Tell us about the challenge. If it is the right fit, we will respond directly.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/contact",
  },
  openGraph: {
    title: "Contact | Churchtown Media",
    description:
      "Tell us about your organisation and the challenge. We work with a small number of clients at any one time and we are selective about which engagements we take on.",
    url: "https://www.churchtownmedia.co.uk/contact",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Churchtown Media",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
