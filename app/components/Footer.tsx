import Link from "next/link";
import OutLink from "./OutLink";
import { NAP } from "@/lib/site";

/**
 * The foot of every page, as a letterhead prints it: the company's name, where it is registered, its number, its
 * registered office, its VAT and ICO numbers. Then the legal links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="row">
        <h2>Company</h2>
        <p className="body lines">
          <span>
            {NAP.legalName}, registered in England and Wales,{" "}
            <span className="nw">company number {NAP.companyNumber}.</span>
          </span>
          <span>
            Registered office: {NAP.streetAddress},{" "}
            <span className="nw">
              {NAP.addressLocality}, {NAP.postalCode}.
            </span>
          </span>
          <span>
            <span className="nw">VAT number {NAP.vatId}.</span>{" "}
            <span className="nw">ICO registration {NAP.icoNumber}.</span>
          </span>
        </p>
      </div>
      <div className="foot-base">
        <span>
          © {year} {NAP.legalName}
        </span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclosure">Disclosure</Link>
          <OutLink href="https://www.linkedin.com/in/damian-roche/" className="">
            LinkedIn
          </OutLink>
        </nav>
      </div>
    </footer>
  );
}
