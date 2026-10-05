import JsonLd from "../components/JsonLd";
import OutLink from "../components/OutLink";
import { pageMeta } from "@/lib/seo";
import { webPageGraph } from "@/lib/schema";

const DESCRIPTION =
  "The interests of Churchtown Media Ltd and its director, Damian Roche: Institrace, the Sefton Coast sites, and former projects.";

export const metadata = pageMeta({
  title: "Disclosure",
  description: DESCRIPTION,
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <article className="pt-16 pb-8 legal">
      <JsonLd
        data={webPageGraph({
          path: "/disclosure",
          name: "Disclosure",
          description: DESCRIPTION,
        })}
      />
      <p className="kicker mb-6">Transparency</p>
      <h1 className="mb-6">Disclosure</h1>
      <p>Last updated: 5 October 2026.</p>

      <h2>The company</h2>
      <p>
        Churchtown Media Ltd is a company registered in England and Wales, company number
        16960442. Damian Roche founded it and is its director. He lives in Southport.
      </p>

      <h2>Current interests</h2>
      <ul>
        <li>
          <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>, a public records
          index run by Churchtown Media Ltd.
        </li>
        <li>
          The Sefton Coast Network, local editorial sites published by Churchtown Media Ltd:
          SouthportGuide.co.uk, FormbyGuide.co.uk, SeftonLinks.com and
          SeftonCoastWildlife.co.uk. SouthportGuide carries paid listings from local
          businesses. Its editorial coverage does not depend on whether a business pays for a
          listing.
        </li>
      </ul>

      <h2>Former interests</h2>
      <ul>
        <li>SIBA Digital (closed October 2026).</li>
        <li>The Sandgrounder (closed September 2026).</li>
      </ul>

      <h2>BID levy</h2>
      <p>
        Churchtown Media Ltd does not occupy rateable premises inside a Business Improvement
        District and does not pay a BID levy.
      </p>

      <h2>Politics</h2>
      <p>
        Damian Roche has no political affiliation. Churchtown Media Ltd has no link to any
        political party.
      </p>

      <h2>Changes</h2>
      <p>
        We update this page when any of these interests change. The date at the top shows the
        last update.
      </p>
    </article>
  );
}
