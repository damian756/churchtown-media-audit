import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";

export const metadata: Metadata = {
  title: "About Damian Roche",
  description:
    "Damian Roche. Ex-British Army. Founder of Churchtown Media, SIBA Digital, and Institrace. Based in Churchtown, Southport.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/about",
  },
  openGraph: {
    title: "About Damian Roche | Churchtown Media",
    description:
      "Ex-British Army. Founder of Churchtown Media, SIBA Digital, and Institrace.",
    url: "https://www.churchtownmedia.co.uk/about",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.churchtownmedia.co.uk/#organization",
        name: "Churchtown Media",
        url: "https://www.churchtownmedia.co.uk",
        sameAs: ["https://www.siba.digital", "https://www.institrace.co.uk"],
        founder: { "@id": "https://www.churchtownmedia.co.uk/about#founder" },
      },
      {
        "@type": "Person",
        "@id": "https://www.churchtownmedia.co.uk/about#founder",
        name: "Damian Roche",
        jobTitle: "Founder",
        worksFor: { "@id": "https://www.churchtownmedia.co.uk/#organization" },
        url: "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
        sameAs: [
          "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
          "https://github.com/damian756",
          "https://www.siba.digital",
          "https://www.institrace.co.uk",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Damian Roche</p>
          <h1 className="mb-10">The biography is the qualification.</h1>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1fr_240px] items-start">
          <Reveal delay={60}>
            <div className="space-y-5 text-[var(--ink-secondary)]">
              <p>
                Ex-British Army, Queen&apos;s Guards. The discipline from that career
                is still how this one runs. Clear objective. No waffle. Accountable
                outcome.
              </p>
              <p>
                Twenty years building for the web. Fifteen of those on how records,
                search, and publication actually compound. Self-taught. That is how I
                understand a stack from first principles rather than from someone
                else&apos;s curriculum.
              </p>
              <p>
                I founded Churchtown Media as the firm. The public method is{" "}
                <OutLink href="https://www.siba.digital">SIBA Digital</OutLink>. The
                infrastructure is{" "}
                <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>.
                Consultation is what I sell here: time on a question, using both.
              </p>
              <p>
                The name comes from Churchtown in Southport, where this started. I have
                lived here most of my life. I also publish a handful of local editorial
                sites on the Sefton Coast. That work is separate from this practice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <figure>
              <Image
                src="/images/about/damian-rspb-marshside.webp"
                alt="Damian Roche at RSPB Marshside, Southport"
                width={480}
                height={480}
                className="w-full border border-[var(--rule)]"
                priority
              />
              <figcaption className="mt-2 text-center text-[0.78rem] text-[var(--ink-faint)]">
                RSPB Marshside, Southport.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-5">How I work</h2>
          <p className="text-[var(--ink-secondary)] mb-4">
            Every engagement starts with one question: what does this organisation
            need to know that it cannot see clearly now? The answer determines the
            scope. If the right answer is a{" "}
            <OutLink href="https://www.siba.digital/services">SIBA audit</OutLink> or
            an{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink> login,
            that is where I send you.
          </p>
          <p className="text-[var(--ink-secondary)] mb-8">
            I take a small number of consultations at a time. Agree the scope, do the
            work, write it down. That is it.
          </p>
          <p>
            <Link href="/contact" className="out">
              Write to Damian
            </Link>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/case-studies" className="quiet">
              The work
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
