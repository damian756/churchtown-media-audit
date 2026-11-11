import Image from "next/image";
import Link from "next/link";
import ButtonLink from "./components/ButtonLink";
import JsonLd from "./components/JsonLd";
import OutLink from "./components/OutLink";
import Tail from "./components/Tail";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { webPageGraph } from "@/lib/schema";
import { AUDIENCES, INSTITRACE_PRICING_URL, INSTITRACE_URL } from "@/lib/institrace";

export const metadata = pageMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

const DASHBOARD_ALT =
  "The Institrace dashboard: counts of new tenders, approvals with no tender yet, contracts ending and meetings, with tabs for opportunities, buyers and suppliers, papers, checks and data.";

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

      <section className="band-hero">
        <div className="page grid items-center gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:gap-14">
          <div>
            <p className="kicker mb-4">Churchtown Media, Southport</p>
            <h1 className="mb-5">Public sector intelligence.</h1>
            <p className="lede">
              <Tail>
                Churchtown Media runs Institrace. It shows what UK public bodies decide, buy and
                spend, and every record is cited to the source.
              </Tail>
            </p>
            <p className="body-copy mt-4">
              <Tail>
                A council approves a project in its committee papers. The tender notice often
                follows weeks or months later. Institrace reads those papers, so a bid team can
                see the approval, its value and its timetable early.
              </Tail>
            </p>
            <div className="btn-row mt-7">
              <ButtonLink href={INSTITRACE_URL} external>
                See Institrace
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>

          <figure className="shot">
            <Image
              src="/images/institrace/dashboard-wide.webp"
              alt={DASHBOARD_ALT}
              width={2064}
              height={1260}
              sizes="(min-width: 1024px) 560px, 704px"
              className="hidden md:block"
            />
            <Image
              src="/images/institrace/dashboard-narrow.webp"
              alt={DASHBOARD_ALT}
              width={1290}
              height={1308}
              sizes="358px"
              className="md:hidden"
            />
            <figcaption>The Institrace dashboard, set to a trade and a region.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="page">
          <h2 className="mb-6">What Churchtown Media does</h2>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="card flex flex-col">
              <span className="kicker">Product</span>
              <h3>Institrace</h3>
              <p>
                <Tail>
                  New tenders, approvals before tender, contracts ending, buyer spend and
                  supplier checks, from council and NHS papers and the registers. Alerts by
                  email, daily or weekly.
                </Tail>
              </p>
              <p className="mt-auto pt-4">
                <OutLink href={INSTITRACE_URL}>Visit Institrace</OutLink>
              </p>
            </article>
            <article className="card flex flex-col">
              <span className="kicker">Services</span>
              <h3>Reports, feeds and dashboards</h3>
              <p>
                <Tail>
                  Market snapshots, custom reports, data feeds and BI dashboards, built on the
                  same records. Prices are on the Institrace services page.
                </Tail>
              </p>
              <p className="mt-auto pt-4">
                <Link href="/services#institrace-services" className="out">
                  See the services
                </Link>
              </p>
            </article>
            <article className="card flex flex-col md:col-span-2 lg:col-span-1">
              <span className="kicker">Consultation</span>
              <h3>One-to-one help</h3>
              <p>
                <Tail>
                  Talk a question through with me. We look at the record together, and you get a
                  short, clear written note.
                </Tail>
              </p>
              <p className="mt-auto pt-4">
                <Link href="/services#consultation" className="out">
                  How a consultation works
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band-tint">
        <div className="page">
          <h2 className="mb-3">Who Institrace is for</h2>
          <p className="intro mb-6">
            <Tail>
              Built mainly for suppliers and bid teams. Also for public affairs teams,
              researchers, newsrooms and due diligence.
            </Tail>
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {AUDIENCES.map((a) => (
              <article key={a.title} className="card relative">
                <h3>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-stretch"
                  >
                    {a.title}
                  </a>
                </h3>
                <p>
                  <Tail>{a.text}</Tail>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-navy">
        <div className="page grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <h2 className="mb-3">A question? Write to me.</h2>
            <p className="max-w-2xl">
              <Tail>
                About Institrace, or one of your own. If I&apos;m not the right person to help,
                I&apos;ll say so and point you to someone who is.
              </Tail>
            </p>
          </div>
          <div className="btn-row">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href={INSTITRACE_PRICING_URL} external variant="secondary">
              Plans and pricing
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
