import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for Churchtown Media Ltd, the advisory practice behind SIBA Digital and Institrace.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
