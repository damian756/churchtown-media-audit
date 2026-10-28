import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../components/ButtonLink";
import OutLink from "../components/OutLink";
import Tail from "../components/Tail";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { ABOUT_DESCRIPTION } from "@/lib/site";
import { aboutGraph } from "@/lib/schema";
import { INSTITRACE_URL } from "@/lib/institrace";

export const metadata = pageMeta({
  title: "About Damian Roche",
  description: ABOUT_DESCRIPTION,
  path: "/about",
});

const FACTS: { label: string; text: string }[] = [
  { label: "Based", text: "Southport, in Churchtown" },
  { label: "Before", text: "British Army, the Queen's Guards" },
  { label: "Since", text: "Twenty years in information, publishing and search" },
  { label: "Now", text: "Founder of Churchtown Media Ltd, which runs Institrace" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutGraph()} />

      <section className="band-hero">
        <div className="page grid gap-8 lg:grid-cols-[1fr_19rem] lg:gap-16">
          <aside className="lg:order-2">
            <figure className="mx-auto w-36 lg:mx-0 lg:w-full">
              <Image
                src="/images/damian-roche.webp"
                alt="Damian Roche"
                width={690}
                height={744}
                sizes="(min-width: 1024px) 304px, 144px"
                className="h-auto w-full rounded-md border border-[var(--rule)]"
                priority
              />
            </figure>
            <dl className="card mt-5 hidden space-y-3 text-[0.98rem] leading-snug lg:block">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="kicker mb-0.5 text-[var(--ink-muted)]">{f.label}</dt>
                  <dd className="text-[var(--ink-secondary)]">{f.text}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="max-w-[41rem] lg:order-1">
            <p className="kicker mb-4">Damian Roche</p>
            <h1 className="mb-6">About Damian</h1>
            <div className="body-copy">
              <p>
                I&apos;m Damian. I founded Churchtown Media in Southport, and I spend most of
                my days building <OutLink href={INSTITRACE_URL}>Institrace</OutLink>
                <Tail>: public sector intelligence, cited to the source.</Tail>
              </p>
              <p>
                <Tail>
                  Before all of this I served in the British Army with the Queen&apos;s Guards. I
                  still carry a lot from those years: a love of clear plans, careful work, and
                  looking after the people around me.
                </Tail>
              </p>
              <p>
                <Tail>
                  Since then I&apos;ve spent twenty years in information, publishing and search.
                  I&apos;m self-taught, and I like finding out how things fit together from the
                  ground up. Public sector records turned out to be the most rewarding puzzle
                  of all. Councils and the NHS publish what they decide, buy and spend. It is
                  spread across a great many websites. Institrace puts it in one place and
                  cites every record.
                </Tail>
              </p>
              <p>
                The company takes its name from Churchtown in Southport, where I&apos;ve lived
                most of my life and where this all began. I also publish a few local
                editorial sites about the Sefton Coast, which I look after separately and
                very much enjoy. My interests, past and present, are listed on the{" "}
                <Link href="/disclosure" className="out whitespace-nowrap">
                  disclosure page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-ruled">
        <div className="page grid items-center gap-8 lg:grid-cols-[1fr_19rem] lg:gap-16">
          <div className="max-w-[41rem]">
            <h2 className="mb-4">How I like to work</h2>
            <div className="body-copy">
              <p>
                <Tail>
                  I keep it simple. We start with what you want to know. Then I go through the
                  record, and I write up what it shows in plain words, with the source for each
                  fact.
                </Tail>
              </p>
              <p>
                <Tail>
                  I take on a small number of consultations at a time, so each one gets proper
                  care. If someone else is better placed to help, I&apos;ll say so and point you
                  their way.
                </Tail>
              </p>
            </div>
            <div className="btn-row mt-7">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary">
                What we&apos;ve built
              </ButtonLink>
            </div>
          </div>

          <figure className="shot mx-auto w-full max-w-[19rem] lg:mx-0">
            <Image
              src="/images/about/damian-rspb-marshside.webp"
              alt="Damian Roche at RSPB Marshside, Southport"
              width={480}
              height={480}
              sizes="304px"
            />
            <figcaption>RSPB Marshside, Southport.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
