import Image from "next/image";
import Link from "next/link";
import OutLink from "../components/OutLink";
import Tail from "../components/Tail";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { ABOUT_DESCRIPTION, NAP } from "@/lib/site";
import { aboutGraph } from "@/lib/schema";
import { INSTITRACE_LAUNCHED, INSTITRACE_URL } from "@/lib/institrace";

export const metadata = pageMeta({
  title: "About Damian Roche",
  description: ABOUT_DESCRIPTION,
  path: "/about",
});

const FACTS: { label: string; text: string }[] = [
  { label: "Based", text: "Churchtown, Southport" },
  { label: "Before", text: "British Army, the Queen's Guards" },
  { label: "Since", text: "Twenty years in information, publishing and search" },
  { label: "Now", text: "Director, Churchtown Media Ltd" },
];

/** The Sefton Coast sites (disclosure page; Damian, 11 Nov 2026: named here, not on the home page). */
const SITES: { name: string; href: string; text: string }[] = [
  {
    name: "SouthportGuide.co.uk",
    href: "https://www.southportguide.co.uk",
    text: "a visitor guide and business directory for Southport. It carries paid listings; its editorial does not depend on them.",
  },
  {
    name: "FormbyGuide.co.uk",
    href: "https://www.formbyguide.co.uk",
    text: "Formby Beach, the National Trust pinewoods and the red squirrels.",
  },
  {
    name: "SeftonLinks.com",
    href: "https://www.seftonlinks.com",
    text: "the links golf courses of the Sefton Coast.",
  },
  {
    name: "SeftonCoastWildlife.co.uk",
    href: "https://www.seftoncoastwildlife.co.uk",
    text: "the coast's birds, plants and animals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutGraph()} />

      <section className="about-top">
        <div className="side">
          <Image
            src="/images/damian-roche.webp"
            alt="Damian Roche"
            width={690}
            height={744}
            sizes="(min-width: 1101px) 240px, (min-width: 901px) 208px, 150px"
            priority
          />
          <dl className="facts">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  <Tail>{f.text}</Tail>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="text">
          <h1>Damian Roche</h1>
          <p className="role">
            Founder and director of Churchtown <span className="nw">Media Ltd</span>
          </p>
          <p>
            I started Churchtown Media in Southport. Most of my working week goes on{" "}
            <OutLink href={INSTITRACE_URL}>Institrace</OutLink>, which the{" "}
            <span className="nw">company runs.</span>
          </p>
          <p>
            <Tail>
              Before this I served in the British Army with the Queen&apos;s Guards. Since then I have spent twenty years in information, publishing and search, most of it self-taught.
            </Tail>
          </p>
          <p>
            <Tail>
              {`Councils and NHS bodies publish what they decide, buy and spend, each on its own website and in its own format. Institrace, which launched in ${INSTITRACE_LAUNCHED}, reads those papers, notices and spend files, joins them up, and names the file every record came from.`}
            </Tail>
          </p>
          <p>
            The company is named after Churchtown, the part of Southport where I have lived most of
            my life. I also publish four local sites about the Sefton Coast, listed below. My
            interests, past and present, are on the{" "}
            <Link href="/disclosure" className="nw">
              disclosure page
            </Link>
            .
          </p>
          <p>
            Write to me at <a href={`mailto:${NAP.emailDamian}`}>{NAP.emailDamian}</a>, call{" "}
            <a href={`tel:${NAP.telephone}`} className="nw">
              {NAP.telephoneDisplay}
            </a>
            , or find me{" "}
            <span className="nw">
              on <OutLink href="https://www.linkedin.com/in/damian-roche/">LinkedIn</OutLink>.
            </span>
          </p>
        </div>
      </section>

      <section className="row">
        <h2>Also published</h2>
        <div className="body">
          <ul className="sites">
            {SITES.map((s) => (
              <li key={s.name}>
                <OutLink href={s.href}>{s.name}</OutLink>: <Tail>{s.text}</Tail>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="row">
        <h2>Outside work</h2>
        <div className="body">
          <figure className="photo">
            <Image
              src="/images/about/damian-rspb-marshside.webp"
              alt="Damian Roche at RSPB Marshside, Southport"
              width={480}
              height={480}
              sizes="320px"
            />
            <figcaption>RSPB Marshside, Southport.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
