import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Damian Roche at Churchtown Media about public-records consultation, Institrace for a team, or a SIBA audit.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/contact",
  },
  openGraph: {
    title: "Contact | Churchtown Media",
    description:
      "Say who you are, the question, and the timescale. If it is the right fit, Damian will respond.",
    url: "https://www.churchtownmedia.co.uk/contact",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
