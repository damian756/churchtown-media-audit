import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { CONTACT_DESCRIPTION } from "@/lib/site";
import { contactGraph } from "@/lib/schema";
import ContactForm from "./ContactForm";

export const metadata = pageMeta({
  title: "Contact",
  description: CONTACT_DESCRIPTION,
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
