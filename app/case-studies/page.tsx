import Link from "next/link";
import { posts } from "../lib/posts";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Case Studies | Churchtown Media",
  description: "Real results. See how we help Southport businesses dominate local search.",
};

export default function CaseStudies() {
  const caseStudies = posts.filter((post) => post.category === "Case Studies");

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-200 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We don't sell promises. We sell results. Here is the data to prove it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/blog/${study.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-blue-500"
            >
              {/* IMAGE ADDED HERE */}
              <div className="h-48 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3 text-sm font-medium text-blue-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>Result Delivered</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="mt-4 flex-1 text-slate-600 leading-relaxed">
                  {study.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
                  Read the full breakdown <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">More case studies are being written...</p>
          </div>
        )}
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <h2 className="text-3xl font-bold">Want results like this?</h2>
        <p className="mt-4 text-slate-400">Let's audit your current setup and find the gaps.</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all"
        >
          Get Your Free Audit
        </Link>
      </section>
    </main>
  );
}