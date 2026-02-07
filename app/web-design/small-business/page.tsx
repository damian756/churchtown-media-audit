import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Small Business Web Design | Southport & Churchtown",
  description: "Affordable, professional WordPress websites for local businesses. SEO-first design with full CMS training included.",
};

export default function SmallBusinessDesign() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Bespoke Web Design for <span className="text-blue-600">Local Business</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Stop paying for a "static" 5-page site. We focus on performance. Because we are SEO experts first and designers second, your site is built from day one to be found by customers in Southport.
          </p>
        </div>
      </section>

      {/* Original Content Services */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Choose Us?</h2>
            <p className="mt-4 text-slate-600">
              We pride ourselves on being a flexible, local partner for UK businesses. Unlike large agencies that lock you in, we give you the keys.
            </p>
            
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Full SEO Integration</h3>
                  <p className="text-sm text-slate-600">Built-in keyword research and search engine indexing from launch.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">CMS Training</h3>
                  <p className="text-sm text-slate-600">Free coaching so you can update your own site without paying designer fees for basic tasks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Project Rescue</h3>
                  <p className="text-sm text-slate-600">Professional intervention for bespoke development projects that have fallen through with other agencies.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Image Placeholder - Replaces the drawing from original site */}
          <div className="rounded-2xl bg-slate-100 p-8 border border-slate-200 text-center">
             <div className="aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center">
                <span className="text-slate-400 font-medium">Your Site Preview</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-4 text-slate-400">Get a site that actually ranks.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all">
          Get a Quote
        </Link>
      </section>
    </main>
  );
}