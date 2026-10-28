import ButtonLink from "../components/ButtonLink";
import JsonLd from "../components/JsonLd";
import OutLink from "../components/OutLink";
import Tail from "../components/Tail";
import { pageMeta } from "@/lib/seo";
import { CONSULTATION_DESCRIPTION } from "@/lib/site";
import { consultationGraph } from "@/lib/schema";
import {
  INSTITRACE_PRICING_URL,
  INSTITRACE_SERVICES_URL,
  INSTITRACE_URL,
  SERVICES,
} from "@/lib/institrace";

export const metadata = pageMeta({
  title: "Consultation and services",
  description: CONSULTATION_DESCRIPTION,
  path: "/services",
});

const GLANCE: { label: string; text: string }[] = [
  { label: "Format", text: "One to one, with Damian" },
  { label: "Length", text: "One sitting, or a short piece of work over a few weeks" },
  { label: "You receive", text: "A short, clear written note" },
  { label: "Fee", text: "Agreed with you in writing before any work begins" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={consultationGraph()} />

      <section className="band-hero">
        <div className="page grid items-center gap-8 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="max-w-[41rem]">
            <p className="kicker mb-4">Consultation and services</p>
            <h1 className="mb-5">Talk it through with Damian.</h1>
            <p className="lede">
              <Tail>
                A consultation is a working session built around your question. We look at the
                public record together, and afterwards you get a short written note. It&apos;s
                one to one, and it&apos;s yours to keep.
              </Tail>
            </p>
            <div className="btn-row mt-7">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href={INSTITRACE_SERVICES_URL} external variant="secondary">
                Institrace services
              </ButtonLink>
            </div>
          </div>

          <dl className="card space-y-3 text-[0.98rem] leading-snug">
            {GLANCE.map((g) => (
              <div key={g.label}>
                <dt className="kicker mb-0.5 text-[var(--ink-muted)]">{g.label}</dt>
                <dd className="text-[var(--ink-secondary)]">
                  <Tail>{g.text}</Tail>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="consultation" className="band scroll-mt-24">
        <div className="page">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <article className="card">
              <h3>What a session is</h3>
              <p>
                We start with your question. It might be about a company, a public body, a
                contract, a piece of land or a decision made in committee. I then go through
                the record with you in <OutLink href={INSTITRACE_URL}>Institrace</OutLink>
                <Tail>: council and NHS papers, contracts and spend, the legal record and land.</Tail>
              </p>
            </article>
            <article className="card">
              <h3>Who it helps</h3>
              <p>
                <Tail>
                  Bid and sales teams who want to know what a buyer plans to buy. Public affairs
                  teams following a patch. Researchers and newsrooms starting a new piece of
                  work. Firms checking a supplier or a company. And anyone with a question who
                  isn&apos;t sure where to begin.
                </Tail>
              </p>
            </article>
            <article className="card">
              <h3>What you receive</h3>
              <p>
                <Tail>
                  A short, clear written note. It sets out your question, what the record shows,
                  the file each fact comes from, and a few suggestions for next steps. It is
                  yours to keep and to share.
                </Tail>
              </p>
            </article>
            <article className="card">
              <h3>Institrace for a team</h3>
              <p>
                <Tail>
                  If your team would like to use Institrace day to day, I&apos;m glad to walk you
                  through it and set up the dashboard and alerts for your trades and regions. You
                  can also try it yourselves first. There is a 14-day trial, no card.
                </Tail>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="institrace-services" className="band band-tint scroll-mt-24">
        <div className="page">
          <h2 className="mb-3">Institrace services</h2>
          <p className="intro mb-6">
            <Tail>
              For work beyond a conversation, Institrace offers four services built on the same
              records. Prices are plus VAT, and the services page has the detail.
            </Tail>
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.title} className="card flex flex-col">
                <h3>{s.title}</h3>
                <p>
                  <Tail>{s.text}</Tail>
                </p>
                <div className="mt-auto pt-4">
                  {s.prices.map((price) => (
                    <p key={price} className="price-line">
                      {price}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="price mt-5 max-w-3xl">
            Invoiced on order. Builds over £2,000 are paid half up front and half on delivery.
            Data is licensed for your own organisation&apos;s use.
          </p>
          <div className="btn-row mt-6">
            <ButtonLink href={INSTITRACE_SERVICES_URL} external>
              See the services
            </ButtonLink>
            <ButtonLink href={INSTITRACE_PRICING_URL} external variant="secondary">
              Plans and pricing
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="band band-navy">
        <div className="page grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <h2 className="mb-3">How to start</h2>
            <p className="max-w-2xl">
              <Tail>
                Send a short message with a little about yourself, your question, and any timings
                that matter. I&apos;ll reply to talk it through, and we&apos;ll agree what would
                be most helpful before any work begins.
              </Tail>
            </p>
          </div>
          <div className="btn-row">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href="/case-studies" variant="secondary">
              What we&apos;ve built
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
