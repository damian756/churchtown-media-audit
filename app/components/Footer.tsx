import Link from "next/link";
import OutLink from "./OutLink";
import { NAP } from "@/lib/site";
import {
  INSTITRACE_METHODOLOGY_URL,
  INSTITRACE_PRICING_URL,
  INSTITRACE_SERVICES_URL,
  INSTITRACE_URL,
} from "@/lib/institrace";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="band-tint">
      <div className="page pt-10 pb-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-[0.8fr_0.9fr_1.6fr] lg:grid-cols-[1.5fr_0.75fr_1fr_1.35fr] lg:gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <p
              className="text-[1.2rem] text-[var(--navy)]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Churchtown Media
            </p>
            <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-[var(--ink-secondary)]">
              Churchtown Media Ltd runs{" "}
              <OutLink href={INSTITRACE_URL}>Institrace</OutLink>: public sector intelligence,
              cited to the source. Founded by Damian Roche in Southport.
            </p>
          </div>

          <div>
            <p className="kicker mb-3">Pages</p>
            <ul className="space-y-2 text-[0.98rem]">
              <li>
                <Link href="/about" className="quiet whitespace-nowrap">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="quiet whitespace-nowrap">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="quiet whitespace-nowrap">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="quiet whitespace-nowrap">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker mb-3">Institrace</p>
            <ul className="space-y-2 text-[0.98rem]">
              <li>
                <OutLink href={INSTITRACE_URL} className="quiet whitespace-nowrap">
                  Institrace
                </OutLink>
              </li>
              <li>
                <OutLink href={INSTITRACE_PRICING_URL} className="quiet whitespace-nowrap">
                  Pricing
                </OutLink>
              </li>
              <li>
                <OutLink href={INSTITRACE_SERVICES_URL} className="quiet whitespace-nowrap">
                  Services
                </OutLink>
              </li>
              <li>
                <OutLink href={INSTITRACE_METHODOLOGY_URL} className="quiet whitespace-nowrap">
                  Methodology
                </OutLink>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="kicker mb-3">Get in touch</p>
            <ul className="space-y-2 text-[0.98rem]">
              <li>
                <a href={`mailto:${NAP.emailHello}`} className="out whitespace-nowrap">
                  {NAP.emailHello}
                </a>
              </li>
              <li>
                <a href={`mailto:${NAP.emailDamian}`} className="out whitespace-nowrap">
                  {NAP.emailDamian}
                </a>
              </li>
              <li>
                <a href={`tel:${NAP.telephone}`} className="quiet whitespace-nowrap">
                  {NAP.telephoneDisplay}
                </a>
              </li>
              <li>
                <address className="not-italic leading-snug text-[var(--ink-muted)]">
                  <span className="block whitespace-nowrap">{NAP.streetAddress}</span>
                  <span className="block whitespace-nowrap">
                    {NAP.addressLocality} {NAP.postalCode}
                  </span>
                </address>
              </li>
              <li>
                <OutLink href="https://www.linkedin.com/in/damian-roche/" className="quiet whitespace-nowrap">
                  LinkedIn
                </OutLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-[var(--rule)] pt-5 text-[0.85rem] leading-relaxed text-[var(--ink-muted)] md:flex-row md:items-baseline md:justify-between md:gap-8">
          <p className="max-w-xl">
            <span className="whitespace-nowrap">
              © {year} {NAP.legalName}.
            </span>{" "}
            <span className="whitespace-nowrap">Registered in England and Wales,</span>{" "}
            <span className="whitespace-nowrap">company number {NAP.companyNumber}.</span>{" "}
            <span className="whitespace-nowrap">VAT number {NAP.vatId}.</span>{" "}
            <span className="whitespace-nowrap">ICO registration {NAP.icoNumber}.</span>
          </p>
          <nav aria-label="Legal" className="flex shrink-0 gap-x-5 whitespace-nowrap">
            <Link href="/privacy" className="quiet">
              Privacy
            </Link>
            <Link href="/terms" className="quiet">
              Terms
            </Link>
            <Link href="/disclosure" className="quiet">
              Disclosure
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
