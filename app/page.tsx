import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import OutLink from "./components/OutLink";
import Tail from "./components/Tail";
import { pageMeta } from "@/lib/seo";
import { NAP, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { homeGraph } from "@/lib/schema";
import {
  INSTITRACE_LAUNCHED,
  INSTITRACE_PRICING_URL,
  INSTITRACE_SERVICES_URL,
  INSTITRACE_URL,
  PRICE_ROWS,
  SLOUGH_RECORD as R,
} from "@/lib/institrace";

export const metadata = pageMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

/**
 * The home page, set as a letterhead (Damian's pick, 11 Nov 2026): a heading and a paragraph, then rows with hanging
 * labels. The services page is folded in as the Services row (/services redirects to /#services); the company's
 * details are the footer's row on every page.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={homeGraph()} />

      <section className="lead">
        <h1>Churchtown Media builds and runs Institrace.</h1>
        <p>
          <Tail>
            The company is based in Southport. Damian Roche founded it and runs it. Institrace is a
            searchable record of what UK councils and NHS bodies decide, buy and spend, with every
            record linked to the paper it came from.
          </Tail>
        </p>
      </section>

      <section className="row" id="institrace">
        <h2>Institrace</h2>
        <div className="body">
          <p>
            <Tail>
              {`Institrace launched in ${INSTITRACE_LAUNCHED}. It reads council and NHS committee papers, contract notices, spend files and the public registers. It is built mainly for suppliers and bid teams, who want to see what a council plans to buy before the tender notice goes out, and also for public affairs teams, researchers, newsrooms and due diligence.`}
            </Tail>
          </p>

          <figure className="record">
            <p className="record-title">The tender came {R.leadDays} days later</p>
            <p>
              {R.body.name}&apos;s papers recorded this on{" "}
              <span className="nw">{R.decided.long}.</span> The tender notice went out on{" "}
              <span className="nw">{R.tender.long}.</span>
            </p>
            <blockquote>
              <p>
                <Tail>{`“${R.quote}”`}</Tail>
              </p>
            </blockquote>
            <figcaption>
              <OutLink href={R.body.href}>{R.body.name}</OutLink>,{" "}
              <OutLink href={R.paper.href}>{R.paper.title}</OutLink>,{" "}
              <span className="nw">page {R.paper.page}</span>
            </figcaption>
            <ol className="record-steps" aria-label="From the paper to the tender notice">
              <li>
                <span className="when">{R.decided.short}</span>
                <span className="what">In the papers</span>
              </li>
              <li>
                <span className="when">{R.tender.short}</span>
                <span className="what">
                  <OutLink href={R.tender.href}>{R.tender.title}</OutLink>
                  <small>
                    , tender notice on <span className="nw">Find a Tender</span>
                  </small>
                </span>
              </li>
            </ol>
            <p className="small">
              In Institrace&apos;s report <OutLink href={R.report.href}>{R.report.title}</OutLink>,{" "}
              <Tail>{R.finding}</Tail>
            </p>
          </figure>

          <p>
            Alerts by email, daily or weekly. 14 days free, no card.{" "}
            <OutLink href={INSTITRACE_URL}>institrace.co.uk</OutLink>,{" "}
            <OutLink href={INSTITRACE_PRICING_URL}>plans and pricing</OutLink>.
          </p>
        </div>
      </section>

      <section className="row" id="services">
        <h2>Services</h2>
        <div className="body">
          <table className="prices">
            <tbody>
              {PRICE_ROWS.map((r) => (
                <tr key={r.title}>
                  <th scope="row">{r.title}</th>
                  <td className="desc">{r.text}</td>
                  <td className="price">{r.price}</td>
                </tr>
              ))}
              <tr id="consultation">
                <th scope="row">Consultation</th>
                <td className="desc">
                  One to one with Damian on a question about the public record, with a <span className="nw">written note</span>
                </td>
                <td className="price">Agreed in writing first</td>
              </tr>
            </tbody>
          </table>
          <p>
            <Tail>
              A consultation starts with your question: a company, a public body, a contract, a piece of land or a decision made in committee. Damian goes through the record with you in Institrace, then sends a short note that sets out what the record shows and the file each fact comes from.
            </Tail>
          </p>
          <p>
            <Tail>
              For a team that wants to use Institrace day to day, he can set up the dashboard and alerts for your trades and regions.
            </Tail>
          </p>
          <p className="small">
            Prices are plus VAT. Invoiced on order; builds over £2,000 are paid half up front and half
            on delivery. Data is licensed for your own organisation&apos;s use. The detail is on{" "}
            <OutLink href={INSTITRACE_SERVICES_URL}>
              <span className="nw">Institrace&apos;s services page</span>
            </OutLink>
            .
          </p>
        </div>
      </section>

      <section className="row">
        <h2>Who runs it</h2>
        <div className="body person">
          <Image
            src="/images/damian-roche.webp"
            alt="Damian Roche"
            width={690}
            height={744}
            sizes="112px"
          />
          <p>
            <Tail>
              Damian Roche founded the company and is its director. He served in the British Army with the Queen&apos;s Guards, then spent twenty years in information, publishing and search. He lives in Churchtown, the part of Southport the company is named after.
            </Tail>
          </p>
          <p>
            <Link href="/about">About Damian</Link>. His interests, past and present, are on the{" "}
            <Link href="/disclosure" className="nw">
              disclosure page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="row" id="contact">
        <h2>Contact</h2>
        <div className="body">
          <dl className="dl">
            <dt>Damian Roche</dt>
            <dd>
              <a href={`mailto:${NAP.emailDamian}`}>{NAP.emailDamian}</a>
            </dd>
            <dt>General</dt>
            <dd>
              <a href={`mailto:${NAP.emailHello}`}>{NAP.emailHello}</a>
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${NAP.telephone}`}>{NAP.telephoneDisplay}</a>
            </dd>
            <dt>Online</dt>
            <dd>
              <Link href="/contact">The contact form</Link>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
}
