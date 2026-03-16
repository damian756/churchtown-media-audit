import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service | Churchtown Media',
  description: 'Terms of service for Churchtown Media web design and SEO services.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/terms',
  },
  openGraph: {
    title: 'Terms of Service | Churchtown Media',
    description: 'Terms of service for Churchtown Media web design and SEO services.',
    url: 'https://www.churchtownmedia.co.uk/terms',
    type: 'website',
    siteName: 'Churchtown Media',
    images: [{ url: 'https://www.churchtownmedia.co.uk/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media' }],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
