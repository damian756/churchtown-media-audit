import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Churchtown Media',
  description: 'Privacy policy for Churchtown Media. How we collect, use, and safeguard your information.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
