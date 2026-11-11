import JsonLd from "../components/JsonLd";
import OutLink from "../components/OutLink";
import Tail from "../components/Tail";
import { pageMeta } from "@/lib/seo";
import { CONTACT_DESCRIPTION, NAP } from "@/lib/site";
import { contactGraph } from "@/lib/schema";
import { INSTITRACE_CONTACT_URL } from "@/lib/institrace";
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

      <section className="lead">
        <h1>Contact</h1>
        <p>
          <Tail>
            Write to Damian Roche about Institrace for your team, a report, a data feed or dashboard, or a consultation. A line about you, your question and any dates that matter is enough to start.
          </Tail>
        </p>
      </section>

      <section className="row">
        <h2>Direct</h2>
        <div className="body">
          <dl className="dl">
            <dt>Damian Roche</dt>
            <dd>
              <a href={`mailto:${NAP.emailDamian}`}>{NAP.emailDamian}</a>
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${NAP.telephone}`}>{NAP.telephoneDisplay}</a>
            </dd>
          </dl>
        </div>
      </section>

      <section className="row">
        <h2>Message</h2>
        <div className="body">
          <ContactForm />
        </div>
      </section>

      <section className="row">
        <h2>Institrace</h2>
        <div className="body">
          <p>
            For a demo or a sample of Institrace, use Institrace&apos;s own{" "}
            <OutLink href={INSTITRACE_CONTACT_URL}>
              <span className="nw">contact page</span>
            </OutLink>
            .
          </p>
        </div>
      </section>
    </>
  );
}
