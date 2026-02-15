import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service | Churchtown Media',
  description: 'Terms of service for Churchtown Media web design and SEO services.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
