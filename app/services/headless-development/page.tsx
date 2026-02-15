import Link from "next/link";
import { Zap, Server, ShieldCheck, LayoutTemplate } from "lucide-react";

export const metadata = {
  title: "Headless Development | Next.js Architecture | Churchtown Media",
  description: "Stop losing customers to loading screens. We migrate slow WordPress sites to the Ferrari Engine of the web: Next.js + Vercel.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/headless-development',
  },
};

export default function HeadlessDev() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 px-6 pt-32 pb-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
            <Zap className="h-4 w-4" />
            Next.js Architecture
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Headless Development
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Stop losing customers to loading screens. We migrate slow WordPress sites to the "Ferrari Engine" of the web: Next.js + Vercel. The result? Sub-second page loads, 90+ Lighthouse scores, and websites that Google rewards with higher rankings.
          </p>
        </div>
      </section>

      {/* What is Headless */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">What is Headless Development?</h2>
        <p className="text-lg text-slate-300 mb-4">
          Traditional websites like WordPress bundle everything together — your content, your design, your database, and your plugins all live on one server. Every time someone visits your site, that server has to assemble the page from scratch. It is slow, vulnerable to hackers, and difficult to scale.
        </p>
        <p className="text-lg text-slate-300 mb-4">
          Headless development separates the frontend (what visitors see) from the backend (where content is managed). Your website's pages are pre-built as static HTML and served from a global CDN — the same technology used by Netflix, Nike, and Shopify. The content management system runs independently, feeding data to the frontend via APIs.
        </p>
        <p className="text-lg text-slate-300">
          The result is a website that loads in under 100 milliseconds, scores 90+ on Google's Core Web Vitals, and is virtually impossible to hack. No PHP vulnerabilities. No plugin conflicts. No 3am security patches.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Businesses Switch to Headless</h2>
        <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
                <Zap className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Sub-100ms Loads</h3>
                <p className="mt-2 text-slate-300">
                    We use Static Site Generation (SSG). Your pages are pre-built and served from the Edge, making them instant globally. Google's research shows 53% of visitors leave if a page takes over 3 seconds to load. Our sites load in under one.
                </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
                <ShieldCheck className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Un-Hackable</h3>
                <p className="mt-2 text-slate-300">
                    No database to hack. No plugins to update. By decoupling the frontend from the backend, we eliminate 99% of security vulnerabilities. WordPress powers 43% of the web — and is targeted by 90% of all CMS attacks.
                </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
                <LayoutTemplate className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Content Management</h3>
                <p className="mt-2 text-slate-300">
                    We give you a custom content dashboard to manage your pages, blog posts, and media. It is easier than WordPress, works from any device, and outputs pure structured data for maximum speed and SEO performance.
                </p>
            </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="bg-slate-900 px-6 py-16 border-t border-slate-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Migration Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">1</div>
              <div>
                <h3 className="text-lg font-bold text-white">Audit Your Current Site</h3>
                <p className="text-slate-300 mt-1">We run a full performance and SEO audit of your existing site, documenting every page, URL, redirect, and piece of content that needs migrating.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">2</div>
              <div>
                <h3 className="text-lg font-bold text-white">Design and Build in Next.js</h3>
                <p className="text-slate-300 mt-1">We rebuild your site using Next.js and React, implementing modern design patterns, automatic image optimisation, and server-side rendering where needed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">3</div>
              <div>
                <h3 className="text-lg font-bold text-white">301 Redirects and SEO Preservation</h3>
                <p className="text-slate-300 mt-1">We set up 301 redirects for every URL to preserve your existing Google rankings. No traffic lost. No broken links. Your domain authority carries over completely.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">4</div>
              <div>
                <h3 className="text-lg font-bold text-white">Deploy to the Edge</h3>
                <p className="text-slate-300 mt-1">Your new site goes live on Vercel's Edge Network — served from data centres worldwide. We monitor performance for 30 days post-launch and handle any issues that arise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-center border border-slate-700">
            <h2 className="text-2xl font-bold text-white">Is your current site slowing you down?</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">Run our free speed test to see how your site performs, or book a call to discuss migrating to Next.js.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/audit" className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-500 transition-colors">
                    Test My Site Speed
                </Link>
                <Link href="/contact" className="rounded-lg border border-slate-600 px-6 py-3 font-bold text-white hover:bg-slate-800 transition-colors">
                    Discuss Migration
                </Link>
            </div>
        </div>
      </section>
    </main>
  );
}