import Image from "next/image";
import ButtonLink from "../components/ButtonLink";
import JsonLd from "../components/JsonLd";
import OutLink from "../components/OutLink";
import Tail from "../components/Tail";
import { pageMeta } from "@/lib/seo";
import { WORK_DESCRIPTION } from "@/lib/site";
import { workGraph } from "@/lib/schema";
import {
  FEATURES,
  INSTITRACE_METHODOLOGY_URL,
  INSTITRACE_PRICING_URL,
  INSTITRACE_URL,
} from "@/lib/institrace";

export const metadata = pageMeta({
  title: "What we've built",
  description: WORK_DESCRIPTION,
  path: "/case-studies",
});

const SEARCH_ALT =
  "An Institrace search for highways maintenance contract: council papers with the matching words highlighted, each naming its body and date.";

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={workGraph()} />

      <section className="band-hero">
        <div className="page grid items-center gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:gap-14">
          <div>
            <p className="kicker mb-4">Our work</p>
            <h1 className="mb-5">What we&apos;ve built</h1>
            <p className="lede">
              <Tail>
                Institrace is public sector intelligence, cited to the source. It reads what UK
                public bodies publish, and shows what they decide, buy and spend.
              </Tail>
            </p>
            <p className="body-copy mt-4">
              <Tail>
                Councils and the NHS put their papers, notices and spend files on many websites,
                in many formats. Institrace gathers them, reads them and links them, so you can
                search one place instead of each site in turn.
              </Tail>
            </p>
            <div className="btn-row mt-7">
              <ButtonLink href={INSTITRACE_URL} external>
                See Institrace
              </ButtonLink>
              <ButtonLink href={INSTITRACE_PRICING_URL} external variant="secondary">
                Plans and pricing
              </ButtonLink>
            </div>
          </div>

          <figure className="shot">
            <Image
              src="/images/institrace/search-papers.webp"
              alt={SEARCH_ALT}
              width={2064}
              height={1070}
              sizes="(min-width: 1024px) 600px, 704px"
              className="hidden md:block"
              priority
            />
            <Image
              src="/images/institrace/search-papers-narrow.webp"
              alt={SEARCH_ALT}
              width={1290}
              height={1360}
              sizes="358px"
              className="md:hidden"
            />
            <figcaption>A search of council papers, with the words highlighted and the body named.</figcaption>
          </figure>
        </div>
      </section>

      <section id="institrace" className="band scroll-mt-24">
        <div className="page">
          <h2 className="mb-3">What Institrace shows</h2>
          <p className="intro mb-6">
            <Tail>
              One search across council and NHS papers, notices, spend files and registers.
              Alerts by email, daily or weekly, and a dashboard set to your trades and regions.
            </Tail>
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article key={f.title} className="card">
                <h3>{f.title}</h3>
                <p>
                  <Tail>{f.text}</Tail>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-tint">
        <div className="page grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="max-w-[36rem]">
            <h2 className="mb-4">Every record names its file</h2>
            <div className="body-copy">
              <p>
                <Tail>
                  Each tender, contract, payment and paper names the file it came from, on the
                  body&apos;s own website. A buyer&apos;s page puts its contracts, its suppliers
                  and what it pays side by side, so you can follow the money to the paper
                  behind it.
                </Tail>
              </p>
              <p>
                How the records are gathered and read is on the{" "}
                <OutLink href={INSTITRACE_METHODOLOGY_URL}>methodology page</OutLink>.
              </p>
            </div>
          </div>

          <figure className="shot hidden md:block">
            <Image
              src="/images/institrace/body-contracts.webp"
              alt="A council's contracts on Institrace: notice title, supplier, value and published date for each."
              width={1552}
              height={1224}
              sizes="(min-width: 1024px) 600px, 704px"
            />
            <figcaption>A buyer&apos;s contracts, with the supplier, the value and the date.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band band-navy">
        <div className="page grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <h2 className="mb-3">Try it, or ask first</h2>
            <p className="max-w-2xl">
              <Tail>
                There is a 14-day trial, no card. If you would rather talk it through first,
                write to me, or book a consultation.
              </Tail>
            </p>
          </div>
          <div className="btn-row">
            <ButtonLink href={INSTITRACE_PRICING_URL} external>
              Plans and pricing
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
