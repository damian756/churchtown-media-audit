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
          <p className="kicker mb-6">Welcome</p>
          <h1 className="mb-8">Making the public record easier to read.</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="lede mb-6">
            Churchtown Media is a small company in Southport, founded by Damian Roche. We
            build Institrace, a joined index of UK public records, and we offer friendly,
            one-to-one help for anyone trying to understand what the record shows.
          </p>
          <p className="text-[var(--ink-secondary)] mb-10">
            Public records are published in many places, by many bodies, in many formats.
            We think they should be easier for everyone to find and to understand. That
            simple idea sits behind everything we do.
          </p>
          <p>
            <Link href="/contact" className="out">
              Get in touch
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/services" className="quiet">
              How a consultation works
            </Link>
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section>
        <Reveal>
          <p className="kicker mb-8">What we do</p>
        </Reveal>

        <Reveal delay={40}>
          <article className="pb-12">
            <h2 className="mb-4">Institrace</h2>
            <p className="text-[var(--ink-secondary)] mb-4">
              Institrace is a joined index of UK public records. Council and committee
              papers, company records, land titles, contract awards and court judgments
              are brought together, so a person, a company or a public body can be read
              in one place.
            </p>
            <p className="text-[var(--ink-secondary)] mb-5">
              It is for anyone who works with the record: newsrooms, researchers, boards,
              firms and community groups.
            </p>
            <p>
              <OutLink href="https://www.institrace.co.uk">institrace.co.uk</OutLink>
              <span className="mx-3 text-[var(--rule-strong)]">/</span>
              <OutLink href="https://www.institrace.co.uk/methodology" className="quiet">
                How it works
              </OutLink>
            </p>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article>
            <h2 className="mb-4">One-to-one consultation</h2>
            <p className="text-[var(--ink-secondary)] mb-4">
              Sometimes it helps to talk a question through with someone who knows the
              record well. Damian offers friendly one-to-one sessions. We look at your
              question together, and you come away with a short, clear written note.
            </p>
            <p>
              <Link href="/services" className="out">
                About consultation
              </Link>
            </p>
          </article>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-5">We&apos;d love to hear from you</h2>
          <p className="text-[var(--ink-secondary)] mb-8">
            If you have a question about the public record, or you&apos;d like to know
            whether Institrace could help your team, please get in touch. No question is
            too small, and if we&apos;re not the right people to help, we&apos;ll gladly
            point you to someone who is.
          </p>
          <p>
            <Link href="/contact" className="out">
              Start a conversation
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
