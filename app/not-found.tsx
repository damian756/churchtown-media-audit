import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="pt-20 pb-24">
      <p className="kicker mb-6">404</p>
      <h1 className="mb-6">This page is not here.</h1>
      <p className="text-[var(--ink-secondary)] mb-8">
        It may have moved when the practice site was refocused. The work still lives
        on the pages below.
      </p>
      <p>
        <Link href="/" className="out">
          Home
        </Link>
        <span className="mx-3 text-[var(--rule-strong)]">/</span>
        <Link href="/contact" className="quiet">
          Contact
        </Link>
      </p>
    </section>
  );
}
