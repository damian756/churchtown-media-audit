import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { consultationGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Consultation",
  description:
    "Scoped public-records consultation from Churchtown Media. Working sessions that use Institrace. Full governance audits are commissioned at SIBA Digital.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={consultationGraph()} />

      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Consultation</p>
          <h1 className="mb-8">A working session on a real question.</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="lede">
            Not an open-ended retainer. Not a login. A defined piece of time, a defined
            question, and a written note at the end of it.
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="space-y-8">
        <Reveal>
          <h2>What it is</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            I sit with the organisation, usually a board, a firm, a newsroom, or a
            communications lead, and work one question through{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>. Company
            numbers, land titles, contract awards, committee papers, officer roles. What
            the public record already shows, and what it does not.
          </p>
          <p className="mt-4 text-[var(--ink-secondary)]">
            The deliverable is a short written note: the question, the sources, the map,
            and what I would do next. Implementation, if there is any, is a separate
            conversation.
          </p>
        </Reveal>

        <Reveal>
          <h2>What it is not</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            It is not a{" "}
            <OutLink href="https://www.siba.digital/services">SIBA audit</OutLink>. A
            health check, a forensic mapping, or ongoing monitoring is commissioned on{" "}
            <OutLink href="https://www.siba.digital">siba.digital</OutLink>. If that is
            the right engagement I will say so and send you there.
          </p>
          <p className="mt-4 text-[var(--ink-secondary)]">
            It is not an Institrace subscription. Self-serve access to the corpus lives
            on <OutLink href="https://www.institrace.co.uk">institrace.co.uk</OutLink>.
            If a team wants to work the index themselves, that is the door.
          </p>
          <p className="mt-4 text-[var(--ink-secondary)]">
            It is not SEO, a website rebuild, or a monthly report of impressions.
          </p>
        </Reveal>

        <Reveal>
          <h2>Who it is for</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Organisations that need to understand their own public trail before someone
            else maps it. Journalists and researchers who want a guided pass through the
            corpus before they subscribe. Firms that have a company, a board, or a
            transaction in front of them and want the public record read properly once.
          </p>
        </Reveal>

        <Reveal>
          <h2>Institrace for a team</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            A newsroom, a diligence desk, or a compliance team can be walked through
            the corpus: what is joined, what is not, how to ask a question that the
            index can answer. That is professional services around the product. It sits
            above self-serve. It does not replace it.
          </p>
          <p className="mt-4">
            <OutLink href="https://www.institrace.co.uk">Open Institrace</OutLink>
          </p>
        </Reveal>

        <Reveal>
          <h2>How it starts</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Write and say who you are, the question, and the timescale. If it fits, we
            agree a scope before any work begins. If it does not, I will say so.
          </p>
          <p className="mt-8">
            <Link href="/contact" className="out">
              Write to Damian
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/case-studies" className="quiet">
              See the work
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
