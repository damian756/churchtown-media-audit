import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy",
  description:
    "Privacy notice for Churchtown Media Ltd. How we collect, use, and safeguard information.",
  path: "/privacy",
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
