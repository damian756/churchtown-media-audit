import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms",
  description:
    "Terms for Churchtown Media Ltd, the advisory practice behind SIBA Digital and Institrace.",
  path: "/terms",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
