import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms",
  description:
    "Terms for Churchtown Media Ltd, the Southport company behind Institrace.",
  path: "/terms",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
