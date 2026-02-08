import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Churchtown Media | Start Your Project',
  description: 'Ready to grow? Contact Southport\'s leading digital agency. Book a strategy call or get a quote for Web Design & SEO.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}