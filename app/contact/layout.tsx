import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Churchtown Media | Start Your Project',
  description: 'Ready to grow? Contact Southport\'s leading digital agency. Book a strategy call or get a quote for Web Design & SEO.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/contact',
  },
  openGraph: {
    title: 'Contact Churchtown Media | Start Your Project',
    description: 'Ready to grow? Contact Southport\'s leading digital agency for Next.js web design and data-driven SEO.',
    url: 'https://www.churchtownmedia.co.uk/contact',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - Contact Us',
    }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}