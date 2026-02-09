import Link from "next/link";
import { Zap, Server, ShieldCheck, LayoutTemplate } from "lucide-react";

export default function HeadlessDev() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
            <Zap className="h-4 w-4" />
            Next.js Architecture
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Headless Development
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Stop losing customers to loading screens. We migrate slow WordPress sites to the "Ferrari Engine" of the web: Next.js + Vercel.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-sm">
                <Zap className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Sub-100ms Loads</h3>
                <p className="mt-2 text-slate-300">
                    We use Static Site Generation (SSG). Your pages are pre-built and served from the Edge, making them instant globally.
                </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-sm">
                <ShieldCheck className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Un-Hackable</h3>
                <p className="mt-2 text-slate-300">
                    No database to hack. No plugins to update. By decoupling the frontend from the backend, we eliminate 99% of security vulnerabilities.
                </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-sm">
                <LayoutTemplate className="h-10 w-10 text-purple-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Sanity CMS</h3>
                <p className="mt-2 text-slate-300">
                    We give you a custom dashboard (Sanity) to manage your content. It's easier than WordPress but outputs pure JSON data for speed.
                </p>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-slate-900 px-6 py-12 text-center border border-slate-700">
            <h2 className="text-2xl font-bold text-white">Is your current site slowing you down?</h2>
            <div className="mt-8 flex justify-center gap-4">
                <Link href="/audit" className="rounded-lg bg-slate-800 px-6 py-3 font-bold text-white hover:bg-slate-700">
                    Test My Site Speed
                </Link>
                <Link href="/contact" className="rounded-lg border border-slate-600 px-6 py-3 font-bold text-white hover:bg-slate-800">
                    Discuss Migration
                </Link>
            </div>
        </div>
      </section>
    </main>
  );
}