import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import OutLink from "./components/OutLink";
import { pageMeta } from "@/lib/seo";
import { NAP, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { homeGraph } from "@/lib/schema";
import {
  INSTITRACE_LAUNCHED,
  INSTITRACE_SERVICES_URL,
  INSTITRACE_SETUP_URL,
  INSTITRACE_SIGNUP_URL,
  INSTITRACE_URL,
  PRICE_ROWS,
  SETUP,
  HOME_RECORD as R,
  seatTerms,
} from "@/lib/institrace";

export const metadata = pageMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

/** Regenerated hourly, so the seat's price changes over by itself on 1 January 2027 (lib/institrace.ts seatTerms). */
export const revalidate = 3600;

/**
 * The home page (Damian's pick, 11 Nov 2026: version 1 of mocks/home-v1.html). The letterhead's masthead and foot,
 * a full-width body: the opening with two buttons, one record from Institrace as a card, what you can buy (the seat
 * and the set-up first, the other services as a compact list), and who runs it. /services lands on #services.
 */
export default function Home() {
  const seat = seatTerms();

  return (
    <>
      <JsonLd data={homeGraph()} />

      <section className="open has-fig">
        <h1>Churchtown Media builds and runs Institrace.</h1>
        <div className="open-words">
          <p className="say">
            Institrace, launched in {INSTITRACE_LAUNCHED}, shows what UK councils and NHS bodies
            plan to buy, who holds each contract and when it ends, and what each body pays, read
            from their own papers and linked to the source. The company is based in Southport.
            Damian Roche founded it and <span className="nw">runs it.</span>
          </p>
          <div className="btns">
            <a className="btn" href={INSTITRACE_URL} target="_blank" rel="noopener noreferrer">
              Open Institrace
            </a>
            <Link className="btn btn-2" href="/contact">
              Write to Damian
            </Link>
          </div>
        </div>
        {/* Damian marked this space, 11 Nov 2026: "put an image here, something nice". Beside the words on a
            desk, as tall as they are (the record card does not move); under the buttons at 900px and below.
            The photograph is Damian Roche's own: he confirmed on 11 Nov 2026 that it is his and that it goes on
            the Churchtown Media home page. */}
        <figure className="open-fig">
          <div className="open-ph">
            <Image
              src="/images/churchtown-village-evening.jpg"
              alt="The Hesketh Arms in Churchtown village, Southport, on a winter evening."
              width={2000}
              height={896}
              sizes="(min-width: 901px) 320px, 100vw"
              preload
            />
          </div>
          <figcaption>
            Churchtown, Southport: the village the company is <span className="nw">named after.</span>
          </figcaption>
        </figure>
      </section>

      <figure className="record" aria-label="One record from Institrace">
        <p className="record-kind">From Institrace: an approval to procure, in a council paper</p>
        <p className="record-title">{R.title}</p>
        <p className="record-where">
          {R.body.name}, {R.summary}
        </p>
        <div className="tl">
          <p className="tl-d">
            {R.decided.short}
            <small>In the papers</small>
          </p>
          <p className="tl-gap">
            <b>
              {R.leadDays} days<small>before the tender</small>
            </b>
          </p>
          <p className="tl-d tl-end">
            {R.tender.short}
            <small>Tender notice</small>
          </p>
        </div>
        <blockquote>{`“${R.quote}”`}</blockquote>
        <p className="record-src">
          Sources: <OutLink href={R.body.href}>{R.body.name}</OutLink>,{" "}
          <OutLink href={R.paper.href}>{R.paper.title}</OutLink>, page {R.paper.page}; the tender
          notice, <OutLink href={R.tender.href}>{R.tender.ref}</OutLink>, on{" "}
          <span className="nw">Find a Tender.</span>
        </p>
        <p className="record-finding">
          In Institrace&apos;s report <OutLink href={R.report.href}>{R.report.title}</OutLink>,{" "}
          {R.finding}
        </p>
      </figure>

      <section className="sec" id="services">
        <h2>What you can buy</h2>
        <div className="offers">
          <article className="offer">
            <h3>An Institrace seat</h3>
            <p className="offer-price">
              £{seat.individual} <small>a month, plus VAT</small>
            </p>
            <p className="offer-terms">{seat.terms}</p>
            <ul className="offer-what">
              <li>
                Approvals in council and NHS papers, before <span className="nw">the tender</span>
              </li>
              <li>
                New tenders in your trades and regions, daily <span className="nw">or weekly</span>
              </li>
              <li>
                Contracts ending, with the supplier that holds <span className="nw">each one</span>
              </li>
              <li>
                Teams of three to ten: £{seat.team} a person <span className="nw">a month</span>
              </li>
            </ul>
            <div className="btns">
              <a className="btn" href={INSTITRACE_SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                Start the free trial
              </a>
            </div>
          </article>
          <article className="offer">
            <h3>Set up for you, by hand</h3>
            <p className="offer-price">
              £{SETUP.price} <small>once, plus VAT</small>
            </p>
            <p className="offer-terms">{SETUP.freeTerms}</p>
            <ul className="offer-what">
              <li>
                Tell Damian what you sell, in a <span className="nw">few words</span>
              </li>
              <li>
                Free: what your words would have caught <span className="nw">in 12 months</span>
              </li>
              <li>
                He runs the year through them; you mark <span className="nw">yes or no</span>
              </li>
              <li>
                Then your alerts, each morning or <span className="nw">once a week</span>
              </li>
            </ul>
            <div className="btns">
              <a className="btn btn-2" href={INSTITRACE_SETUP_URL} target="_blank" rel="noopener noreferrer">
                Get the free count
              </a>
            </div>
          </article>
        </div>

        <div className="more">
          <h3>Also from Institrace</h3>
          <ul>
            {PRICE_ROWS.map((r) => (
              <li key={r.title}>
                <b>{r.title}</b>
                <span>{r.text}</span>
                <em>{r.price}</em>
              </li>
            ))}
          </ul>
          <p className="more-note">
            Prices are plus VAT; the detail is on{" "}
            <OutLink href={INSTITRACE_SERVICES_URL}>Institrace&apos;s services page</OutLink>. A
            consultation with Damian on a question about the public record, with a written note, is
            priced in writing before any work begins:{" "}
            <Link href="/contact" className="nw">
              write to Damian
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="sec" id="contact">
        <h2>Who runs it</h2>
        <div className="who">
          <div className="who-ph">
            <Image
              src="/images/damian-roche.webp"
              alt="Damian Roche"
              width={690}
              height={744}
              sizes="(min-width: 721px) 176px, 144px"
            />
          </div>
          <div>
            <p>
              Damian Roche founded Churchtown Media and is its director. He served in the British
              Army with the Queen&apos;s Guards, then spent twenty years in information, publishing and
              search. He lives in Churchtown, the part of Southport the company is{" "}
              <span className="nw">named after.</span>
            </p>
            <p>
              He sets up every Institrace customer himself, <span className="nw">by hand.</span>
            </p>
            <p className="who-reach">
              <a href={`mailto:${NAP.emailDamian}`}>{NAP.emailDamian}</a>,{" "}
              <a className="nw" href={`tel:${NAP.telephone}`}>
                {NAP.telephoneDisplay}
              </a>
              , or the <Link href="/contact">contact form</Link>.{" "}
              <Link href="/about" className="nw">
                About Damian
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
