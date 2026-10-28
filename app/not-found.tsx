import type { Metadata } from "next";
import ButtonLink from "./components/ButtonLink";
import Tail from "./components/Tail";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="band-hero">
      <div className="page">
        <p className="kicker mb-4">404</p>
        <h1 className="mb-5">Sorry, we can&apos;t find that page.</h1>
        <p className="body-copy mb-7 max-w-xl">
          <Tail>
            It may have moved when the site was updated. These links should help you find your
            way.
          </Tail>
        </p>
        <div className="btn-row">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
