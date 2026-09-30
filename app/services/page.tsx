import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { CONSULTATION_DESCRIPTION } from "@/lib/site";
import { consultationGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Consultation",
  description: CONSULTATION_DESCRIPTION,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={consultationGraph()} />

      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Consultation</p>
          <h1 className="mb-8">Help with a question, one to one.</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="lede">
            A consultation is a relaxed working session with Damian, built around
            something you&apos;d like to understand. We look at the public record
            together, and afterwards you receive a short, clear written note.
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="space-y-8">
        <Reveal>
          <h2>What a session is</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            We start with your question. It might be about a company, a public body, a
            piece of land or a decision made in committee. I then look through the record
            with you using{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>, which
            brings together council papers, company records, land titles, contract awards
            and court judgments.
          </p>
          <p className="mt-4 text-[var(--ink-secondary)]">
            A session can be a single sitting or a short piece of work over a few weeks,
            whichever suits you best.
          </p>
        </Reveal>

        <Reveal>
          <h2>Who it helps</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Boards who would like a clear picture of their own organisation&apos;s public
            record. Newsrooms and researchers starting a new piece of work. Firms looking
            carefully at a company or a transaction. Community groups who want to
            understand a local decision.
          </p>
          <p className="mt-4 text-[var(--ink-secondary)]">
            If you have a question and aren&apos;t sure where to begin, you&apos;re very
            welcome too.
          </p>
        </Reveal>

        <Reveal>
          <h2>What you receive</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            A short, clear written note. It sets out your question, what the record shows,
            where each piece of information comes from, and a few suggestions for next
            steps. It is yours to keep and to share.
          </p>
        </Reveal>

        <Reveal>
          <h2>Institrace for a team</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            If your team would like to use Institrace day to day, I&apos;m glad to walk
            you through it and help you get the most from it. You can also explore it
            yourselves at{" "}
            <OutLink href="https://www.institrace.co.uk">institrace.co.uk</OutLink>.
          </p>
        </Reveal>

        <Reveal>
          <h2>How to start</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Just send a short message with a little about yourself, your question, and
            any timings that matter. I&apos;ll reply to talk it through, and we&apos;ll
            agree together what would be most helpful before any work begins.
          </p>
          <p className="mt-8">
            <Link href="/contact" className="out">
              Get in touch
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/case-studies" className="quiet">
              What we&apos;ve built
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
