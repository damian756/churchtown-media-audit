import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Churchtown Media',
  description: 'Privacy policy for Churchtown Media. How we collect, use, and safeguard your information.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Churchtown Media',
    description: 'Privacy policy for Churchtown Media. How we collect, use, and safeguard your information.',
    url: 'https://www.churchtownmedia.co.uk/privacy',
    type: 'website',
    siteName: 'Churchtown Media',
    images: [{ url: 'https://www.churchtownmedia.co.uk/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media' }],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
