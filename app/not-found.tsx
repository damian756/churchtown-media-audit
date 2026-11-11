import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="lead">
      <h1>Page not found</h1>
      <p>
        It may have moved when the site was rebuilt. The <Link href="/">home page</Link> has
        everything the company does, and the <Link href="/contact">contact page</Link> reaches{" "}
        <span className="nw">Damian Roche.</span>
      </p>
    </section>
  );
}
