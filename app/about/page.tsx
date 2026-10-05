import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { ABOUT_DESCRIPTION } from "@/lib/site";
import { aboutGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "About Damian Roche",
  description: ABOUT_DESCRIPTION,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutGraph()} />

      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Damian Roche</p>
          <h1 className="mb-10">About Damian</h1>
        </Reveal>

        <Reveal delay={60}>
          <div className="space-y-5 text-[var(--ink-secondary)] after:content-[''] after:table after:clear-both">
            {/* The portrait floats right beside the opening paragraphs; the text below it runs the full width. */}
            <figure className="mx-auto mb-6 w-[140px] md:float-right md:mx-0 md:mb-4 md:ml-10 md:mt-1 md:w-[200px]">
              <Image
                src="/images/damian-roche.webp"
                alt="Damian Roche"
                width={690}
                height={744}
                className="w-full h-auto rounded-md border border-[var(--rule)]"
                priority
              />
            </figure>
            <p>
              Hello, I&apos;m Damian. I founded Churchtown Media, and I spend
              most of my days building{" "}
              <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>,
              a joined index of UK public records.
            </p>
            <p>
              Before all of this I served in the British Army with the
              Queen&apos;s Guards. I still carry a lot from those years: a love
              of clear plans, careful work, and looking after the people around
              me.
            </p>
            <p>
              Since then I&apos;ve spent twenty years working with information,
              publishing and search. I&apos;m self-taught, and I&apos;ve always
              enjoyed understanding how things fit together from the ground up.
              Public records turned out to be the most rewarding puzzle of all.
            </p>
            <p>
              The company takes its name from Churchtown in Southport, where
              I&apos;ve lived most of my life and where this all began. I also
              publish a few local editorial sites about the Sefton Coast, which
              I look after separately and very much enjoy. My interests, past
              and present, are listed on the{" "}
              <Link href="/disclosure" className="out">
                disclosure page
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-5">How I like to work</h2>
          <p className="text-[var(--ink-secondary)] mb-4">
            I keep things simple and friendly. We start with a conversation
            about what you&apos;d like to understand. Then we look at the record
            together, and I write up what it shows in plain language.
          </p>
          <p className="text-[var(--ink-secondary)] mb-8">
            I take on a small number of consultations at a time, so each one
            gets proper care. If someone else is better placed to help,
            I&apos;ll happily point you their way.
          </p>
          <p>
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

      <section className="pt-2 pb-8">
        <Reveal>
          <figure className="max-w-[480px]">
            <Image
              src="/images/about/damian-rspb-marshside.webp"
              alt="Damian Roche at RSPB Marshside, Southport"
              width={480}
              height={480}
              className="w-full border border-[var(--rule)]"
            />
            <figcaption className="mt-2 text-[0.78rem] text-[var(--ink-faint)]">
              RSPB Marshside, Southport.
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </>
  );
}
