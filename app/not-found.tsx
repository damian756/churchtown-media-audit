import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Churchtown Media",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
          404
        </p>
        <h1 className="mb-6">Page not found.</h1>
        <p className="text-[15px] leading-relaxed text-[#3d3d3d] mb-10">
          This page does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
          >
            Go home <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
