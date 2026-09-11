import JsonLd from "../components/JsonLd";
import { webPageGraph } from "@/lib/schema";

export default function TermsPage() {
  return (
    <article className="pt-16 pb-8 legal">
      <JsonLd
        data={webPageGraph({
          path: "/terms",
          name: "Terms",
          description:
            "Terms for Churchtown Media Ltd, the advisory practice behind SIBA Digital and Institrace.",
        })}
      />
      <p className="kicker mb-6">Legal</p>
      <h1 className="mb-6">Terms</h1>
      <p>Last updated: September 2026.</p>

      <h2>1. Acceptance</h2>
      <p>
        By using churchtownmedia.co.uk you accept these terms. If you do not, do not use
        the site. Professional work is also subject to a written scope agreed before it
        begins.
      </p>

      <h2>2. The practice</h2>
      <p>
        Churchtown Media Ltd provides public-records consultation and related advisory
        work. The joined index used in that work is{" "}
        <a href="https://www.institrace.co.uk" target="_blank" rel="noopener noreferrer" className="out">
          Institrace
        </a>
        . Commissioned governance audits are offered at{" "}
        <a href="https://www.siba.digital" target="_blank" rel="noopener noreferrer" className="out">
          SIBA Digital
        </a>
        . Verbal agreements are not binding until confirmed in writing.
      </p>

      <h2>3. Fees</h2>
      <p>
        Fees, timescale, and deliverable are agreed in the scope. Invoices are payable
        as stated there. Late payments may incur interest at 8% above the Bank of
        England base rate under the Late Payment of Commercial Debts (Interest) Act 1998.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Content on this website is the property of Churchtown Media Ltd unless otherwise
        stated. Written notes produced for a client belong to the client on full payment,
        except for methods, templates, and tools that pre-exist the engagement.
      </p>

      <h2>5. Client responsibilities</h2>
      <p>
        You are responsible for the accuracy of material you provide and for how you use
        the written note. Consultation is not legal advice.
      </p>

      <h2>6. Liability</h2>
      <p>
        Churchtown Media Ltd is not liable for indirect or consequential loss arising from
        use of the site or the work. Total liability for a given engagement will not
        exceed the fees paid for that engagement.
      </p>

      <h2>7. Ending an engagement</h2>
      <p>
        Either party may end a scoped engagement with written notice as set out in the
        scope. Work completed to date remains payable.
      </p>

      <h2>8. Other sites</h2>
      <p>
        Links to SIBA Digital, Institrace, and other sites are provided for reference.
        Those sites have their own terms.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. Disputes are subject
        to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>10. Contact</h2>
      <p>
        <a href="mailto:hello@churchtownmedia.co.uk" className="out">
          hello@churchtownmedia.co.uk
        </a>
        {" or "}
        <a href="mailto:damian@churchtownmedia.co.uk" className="out">
          damian@churchtownmedia.co.uk
        </a>
        . 01704 635785. 5 Cambridge Avenue, Churchtown, Southport, PR9 9SA.
      </p>
    </article>
  );
}
