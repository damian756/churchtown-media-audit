import Link from "next/link";
import Reveal from "../components/Reveal";
import OutLink from "../components/OutLink";
import JsonLd from "../components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { workGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Work",
  description:
    "SIBA Digital and Institrace. The public method and the joined public-records index behind Churchtown Media consultation.",
  path: "/case-studies",
});

const milestones = [
  {
    date: "April 2026",
    event:
      "River Law Limited sent a letter before action. SIBA filed an SRA report on 30 April 2026.",
  },
  {
    date: "May 2026",
    event:
      "Formal complaint filed with Sefton Council Chief Executive. Acknowledged within 30 minutes. Separate complaint filed with the Monitoring Officer.",
  },
  {
    date: "May 2026",
    event:
      "Report 12 published. National journalists engaged within hours. House of Commons and MHCLG professionals later reached the BID governance guide.",
  },
  {
    date: "June 2026",
    event:
      "Investigations running in Rochdale, Leicester, and Ripon alongside the founding Southport work.",
  },
  {
    date: "September 2026",
    event:
      "Birmingham investigation published on SIBA, mapped from Contracts Finder and committee papers held in Institrace.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={workGraph()} />
      <section className="pt-16 pb-2">
        <Reveal>
          <p className="kicker mb-6">Work</p>
          <h1 className="mb-8">Two bodies of work. Both live. Both mine.</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="lede">
            No anonymised client results. No projected figures. The method is public at{" "}
            <OutLink href="https://www.siba.digital">SIBA Digital</OutLink>. The
            infrastructure is public at{" "}
            <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>.
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section id="siba" className="scroll-mt-28">
        <Reveal>
          <p className="kicker mb-4">The method</p>
          <h2 className="mb-5">SIBA Digital</h2>
          <p className="text-[var(--ink-secondary)] mb-4">
            A public-interest investigation practice covering governance in Business
            Improvement Districts and local public bodies. Active work in Southport,
            Rochdale, Leicester, Ripon, and Birmingham. Every factual claim sourced to
            a primary public record. No allegation of personal misconduct.
          </p>
          <p className="text-[var(--ink-secondary)] mb-4">
            Companies House. Land Registry. Supplier spend. Freedom of Information.
            Committee papers. The same trail, joined. A single published analysis
            reached professionals from the House of Commons, MHCLG, Savills, and
            AtkinsRéalis. Over half the audience held senior, director, or executive
            positions. Formal regulatory complaints followed. Solicitors acting for
            named parties made contact.
          </p>
          <p className="text-[var(--ink-secondary)] mb-8">
            Commissioned audits use the same method and are delivered confidentially.
            Journalism and commercial work are not linked.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <p className="kicker mb-4">Recent record</p>
          <ol className="mb-8 space-y-4">
            {milestones.map((m) => (
              <li key={m.date + m.event} className="text-[var(--ink-secondary)]">
                <span className="text-[var(--ink)]">{m.date}.</span> {m.event}
              </li>
            ))}
          </ol>
          <p>
            <OutLink href="https://www.siba.digital">Visit SIBA Digital</OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <OutLink href="https://www.siba.digital/birmingham" className="quiet">
              Birmingham investigation
            </OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <OutLink href="https://www.siba.digital/services" className="quiet">
              Commission an audit
            </OutLink>
          </p>
        </Reveal>
      </section>

      <hr className="rule" />

      <section id="institrace" className="scroll-mt-28 pb-8">
        <Reveal>
          <p className="kicker mb-4">The infrastructure</p>
          <h2 className="mb-5">Institrace</h2>
          <p className="text-[var(--ink-secondary)] mb-4">
            Institrace is a UK public-records index. Papers from councils and other
            public bodies, land titles, contract awards, company and officer records,
            joined so a person, a company, or a body can be read across holdings.
            Fragmentation is a form of obscurity. The product exists to undo that.
          </p>
          <p className="text-[var(--ink-secondary)] mb-4">
            Consultation uses Institrace in the room. A newsroom or a diligence desk
            can also work the corpus themselves. The{" "}
            <OutLink href="https://www.siba.digital/birmingham">
              Birmingham investigation
            </OutLink>{" "}
            on SIBA is one public example of what the joined record looks like when
            it is put to work. Southport was the first.
          </p>
          <p className="text-[var(--ink-secondary)] mb-8">
            Self-serve access, methodology, and the catalogue live on the product
            site. This practice does not resell the login.
          </p>
          <p>
            <OutLink href="https://www.institrace.co.uk">Visit Institrace</OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <OutLink href="https://www.institrace.co.uk/methodology" className="quiet">
              Methodology
            </OutLink>
            <span className="mx-3 text-[var(--rule-strong)]">/</span>
            <Link href="/services" className="quiet">
              Consultation
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
