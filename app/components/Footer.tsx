import Link from "next/link";
import OutLink from "./OutLink";
import { NAP } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 pb-16">
      <div className="page">
        <div className="h-px bg-[var(--rule)]" />
        <div className="mt-[3px] h-px bg-[var(--rule)]" />
      </div>

      <div className="page pt-12">
        <p
          className="text-[1.15rem] text-[var(--navy)]"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Churchtown Media
        </p>
        <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-[var(--ink-secondary)]">
          Advisory practice of Damian Roche. Consultation on the public record, using{" "}
          <OutLink href="https://www.institrace.co.uk">Institrace</OutLink> and the method
          developed in public at{" "}
          <OutLink href="https://www.siba.digital">SIBA Digital</OutLink>.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="kicker mb-3">Practice</p>
            <ul className="space-y-2 text-[0.98rem]">
              <li>
                <Link href="/about" className="quiet">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="quiet">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="quiet">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="quiet">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-3">Properties</p>
            <ul className="space-y-2 text-[0.98rem]">
              <li>
                <OutLink href="https://www.siba.digital">SIBA Digital</OutLink>
              </li>
              <li>
                <OutLink href="https://www.siba.digital/services">SIBA audits</OutLink>
              </li>
              <li>
                <OutLink href="https://www.institrace.co.uk">Institrace</OutLink>
              </li>
              <li>
                <OutLink href="https://www.institrace.co.uk/methodology">
                  Institrace methodology
                </OutLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-3">Write</p>
            <p className="text-[0.98rem]">
              <a href={`mailto:${NAP.emailHello}`} className="out">
                {NAP.emailHello}
              </a>
            </p>
            <p className="mt-2 text-[0.98rem]">
              <a href={`mailto:${NAP.emailDamian}`} className="out">
                {NAP.emailDamian}
              </a>
            </p>
            <p className="mt-2 text-[0.98rem]">
              <a href={`tel:${NAP.telephone}`} className="quiet">
                {NAP.telephoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-[0.98rem] text-[var(--ink-muted)]">
              {NAP.streetAddress}, Churchtown, {NAP.addressLocality} {NAP.postalCode}
            </p>
            <p className="mt-2 text-[0.98rem]">
              <a
                href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="quiet"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <p className="mt-12 text-[0.82rem] leading-relaxed text-[var(--ink-faint)]">
          © {year} {NAP.legalName}. Co. No. {NAP.companyNumber}. VAT No. 511024262.{" "}
          <Link href="/privacy" className="quiet">
            Privacy
          </Link>
          {" · "}
          <Link href="/terms" className="quiet">
            Terms
          </Link>
          {" · "}
          <OutLink href="https://www.siba.digital/disclosure" className="quiet">
            Disclosure
          </OutLink>
        </p>
      </div>
    </footer>
  );
}
