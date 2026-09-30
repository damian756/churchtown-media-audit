import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { WORK_DESCRIPTION } from "@/lib/site";
import { workGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "What we've built",
  description: WORK_DESCRIPTION,
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={workGraph()} />
      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Our work</p>
          <h1 className="mb-8">What we&apos;ve built</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="lede">
            Our main work is{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>, a joined
            index of UK public records. Public information is often spread across many
            websites and formats, and we wanted it to be easier for everyone to find and
            to read.
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section id="institrace" className="scroll-mt-28 space-y-8 pb-8">
        <Reveal>
          <h2>What Institrace is</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Institrace brings UK public records together in one place and links them. You
            can follow a person, a company or a public body across different sources,
            rather than searching each one separately.
          </p>
        </Reveal>

        <Reveal>
          <h2>What it brings together</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Papers and minutes from councils and other public bodies. Company and officer
            records. Land titles. Contract awards. Court judgments. Everything in it is
            drawn from records that are already public.
          </p>
        </Reveal>

        <Reveal>
          <h2>Who it is for</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            Journalists and researchers, boards and governance teams, firms looking
            carefully at a company, and community groups who want to understand what is
            happening where they live. We have tried to make it calm, careful and easy to
            use.
          </p>
        </Reveal>

        <Reveal>
          <h2>Find out more</h2>
          <p className="mt-4 text-[var(--ink-secondary)]">
            You&apos;ll find more about Institrace, including how its records are
            gathered and linked, on its own website. If you&apos;d like a hand getting
            started, a consultation is a friendly way in.
          </p>
          <p className="mt-8">
            <OutLink href="https://www.institrace.co.uk">Visit Institrace</OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <OutLink href="https://www.institrace.co.uk/methodology" className="quiet">
              Methodology
            </OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/services" className="quiet">
              Consultation
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
