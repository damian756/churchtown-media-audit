import Link from "next/link";
import Reveal from "./components/Reveal";
import OutLink from "./components/OutLink";
import JsonLd from "./components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { webPageGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageGraph({
          path: "/",
          name: SITE_TITLE,
          description: SITE_DESCRIPTION,
        })}
      />

      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">A practice</p>
          <h1 className="mb-8">Know what the public record already shows.</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="lede mb-6">
            Churchtown Media is the advisory practice of Damian Roche. The work is consultation
            on a real question, using a joined UK public-records index and a method that has
            already been tested in public.
          </p>
          <p className="text-[var(--ink-secondary)] mb-10">
            The index is{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>. The public
            method is{" "}
            <OutLink href="https://www.siba.digital">SIBA Digital</OutLink>. This site is
            the firm: scoped time, a written note, and a straight answer about whether the
            work belongs here at all.
          </p>
          <p>
            <Link href="/contact" className="out">
              Write to Damian
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/services" className="quiet">
              How consultation works
            </Link>
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section>
        <Reveal>
          <p className="kicker mb-8">Two properties</p>
        </Reveal>

        <Reveal delay={40}>
          <article className="pb-12">
            <h2 className="mb-4">Institrace</h2>
            <p className="text-[var(--ink-secondary)] mb-4">
              A joined index of UK public records. Committee papers, land titles, contract
              awards, company filings, and the people who appear across them. Published is
              not the same as findable. Institrace is the infrastructure that makes a
              question askable of the whole.
            </p>
            <p className="text-[var(--ink-secondary)] mb-5">
              Consultation uses it in the room. Teams that want to work the corpus themselves
              go to the product.
            </p>
            <p>
              <OutLink href="https://www.institrace.co.uk">institrace.co.uk</OutLink>
              <span className="mx-3 text-[var(--rule-strong)]">/</span>
              <OutLink href="https://www.institrace.co.uk/methodology" className="quiet">
                Methodology
              </OutLink>
            </p>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article>
            <h2 className="mb-4">SIBA Digital</h2>
            <p className="text-[var(--ink-secondary)] mb-4">
              Strategic Intelligence and Business Audits. Governance investigations and
              commissioned audits built from the same public records. The journalism is
              public. The commercial work is confidential. The two are not linked.
            </p>
            <p className="text-[var(--ink-secondary)] mb-5">
              A full forensic audit is commissioned on SIBA, not here. This practice will
              say so if that is the right engagement.
            </p>
            <p>
              <OutLink href="https://www.siba.digital">siba.digital</OutLink>
              <span className="mx-3 text-[var(--rule-strong)]">/</span>
              <OutLink href="https://www.siba.digital/services" className="quiet">
                Commission an audit
              </OutLink>
            </p>
          </article>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-5">What you are buying</h2>
          <p className="text-[var(--ink-secondary)] mb-4">
            Time. A scoped working session or a short engagement. I sit with the
            organisation, work the question through Institrace, and write down what the
            record shows. That is the consultation.
          </p>
          <p className="text-[var(--ink-secondary)] mb-8">
            It is not an SEO retainer, not a website rebuild, and not a subscription to
            Institrace. Those are different doors.
          </p>
          <p>
            <Link href="/contact" className="out">
              Start a conversation
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/case-studies" className="quiet">
              Read the work
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
