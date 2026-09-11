import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { contactGraph } from "@/lib/schema";
import ContactForm from "./ContactForm";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Write to Damian Roche at Churchtown Media about public-records consultation, Institrace for a team, or a SIBA audit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactGraph()} />
      <ContactForm />
    </>
  );
}
