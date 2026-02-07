import Link from "next/link";
import { Zap, Layout, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Web Design Southport | SEO-First Website Development",
  description: "We build fast, mobile-responsive websites designed to rank on Google. Next.js development for Southport businesses.",
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-300">
            For Growth-Focused Brands
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Web Design with an <span className="text-blue-500">SEO-First</span> Mindset
          </h1>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed">
            Stop paying for "static" 5-page sites. We build high-performance digital engines that rank from Day 1.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:bg-blue-700 transition-all">
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* The Enterprise Value Prop */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Most agencies focus on how it looks. We focus on how it works.</h2>
            <p className="mt-6 text-lg text-slate-600">
              In 2026, a beautiful website that nobody visits is a liability. At Churchtown Media, we reject "vanity design."
            </p>
            <p className="mt-4 text-lg text-slate-600">
              We use <strong>Next.js</strong> (not slow WordPress templates) to ensure your site loads instantly, passing Google's Core Web Vitals with flying colors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Zap className="h-8 w-8 text-yellow-500 mb-4" />
              <h3 className="font-bold text-slate-900">Lightning Speed</h3>
              <p className="text-sm text-slate-600 mt-2">Sub-second load times keep mobile users engaged.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Layout className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-900">Semantic HTML</h3>
              <p className="text-sm text-slate-600 mt-2">Clean code that Google's bots love to crawl.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Smartphone className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-slate-900">Mobile First</h3>
              <p className="text-sm text-slate-600 mt-2">Designed for the 60% of traffic that uses phones.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="font-bold text-slate-900">Secure</h3>
              <p className="text-sm text-slate-600 mt-2">Bank-grade security standards as default.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Small Business Path --- */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 text-center">
            <h3 className="text-2xl font-bold text-slate-900">Just getting started?</h3>
            <p className="mt-4 text-slate-600">
                You might not need an enterprise-grade Next.js application just yet. We offer specialized WordPress packages for small local businesses including CMS training and setup.
            </p>
            <Link href="/web-design/small-business" className="mt-8 inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                View Small Business Packages <ArrowRight className="h-5 w-5"/>
            </Link>
        </div>
      </section>
      {/* -------------------------------------- */}

      {/* CTA */}
      <section className="bg-white px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to transform your digital presence?</h2>
        <p className="mt-4 text-slate-600 mb-8">We treat your website as a revenue generator, not a digital brochure.</p>
        <Link href="/contact" className="rounded-lg bg-slate-900 px-8 py-4 font-bold text-white hover:bg-slate-800 transition-all">
          Start Your Project
        </Link>
      </section>
    </main>
  );
}