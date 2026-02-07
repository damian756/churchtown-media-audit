import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, BarChart3, Factory } from "lucide-react";

export default function AlotekCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-slate-900 px-6 py-6 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
            <Link href="/case-studies" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            <Factory className="h-4 w-4" /> Manufacturing SEO
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            From Invisible to #1 for "Bus Shelters"
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            How we used Technical SEO and Semantic HTML to drive an <span className="text-white font-bold">85% traffic increase</span> for a UK manufacturer in just 30 days.
          </p>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Challenge</h2>
          <p className="mt-4 text-lg text-slate-600">
            Alotek manufactures high-quality municipal infrastructure. Their product was excellent, but their digital footprint was non-existent.
          </p>
          <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4">
            <p className="font-medium text-red-900">
                The Problem: Zero organic visibility for high-intent keywords like "Parish Council Bus Shelters."
            </p>
          </div>

          <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-900">The Technical Fix</h2>
          <p className="mt-4 text-slate-600">
            We didn't just write blog posts. We re-engineered the site architecture to match the buying behavior of local councils.
          </p>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
              <span><strong>Semantic HTML Structure:</strong> We rebuilt product pages to speak "Google's Language," using correct Schema markup for industrial products.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
              <span><strong>Programmatic Internal Linking:</strong> We created a "Hub & Spoke" model linking products to specific buyer personas (Schools, Councils, Architects).</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
              <span><strong>Speed Optimisation:</strong> We reduced LCP (Largest Contentful Paint) to under 1.2s, passing Core Web Vitals immediately.</span>
            </li>
          </ul>
        </div>
        
        {/* The Results Box (The "Graph to the Right") */}
        <div className="mt-12 lg:mt-0">
           <div className="sticky top-24 rounded-2xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
             <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
               <TrendingUp className="h-6 w-6 text-green-600" />
               30-Day Impact
             </h3>
             <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
               <div className="flex flex-col gap-1">
                 <dt className="text-sm font-medium text-slate-500">Organic Traffic</dt>
                 <dd className="text-4xl font-bold tracking-tight text-slate-900 text-green-600">+85%</dd>
               </div>
               <div className="flex flex-col gap-1">
                 <dt className="text-sm font-medium text-slate-500">Keyword Rankings</dt>
                 <dd className="text-4xl font-bold tracking-tight text-slate-900">#1</dd>
                 <dd className="text-xs text-slate-500">for "Bus Shelters UK"</dd>
               </div>
               <div className="flex flex-col gap-1">
                 <dt className="text-sm font-medium text-slate-500">Quote Requests</dt>
                 <dd className="text-4xl font-bold tracking-tight text-slate-900">3x</dd>
                 <dd className="text-xs text-slate-500">Increase in Leads</dd>
               </div>
               <div className="flex flex-col gap-1">
                 <dt className="text-sm font-medium text-slate-500">Ad Spend</dt>
                 <dd className="text-4xl font-bold tracking-tight text-slate-900">£0</dd>
                 <dd className="text-xs text-slate-500">Pure Organic Growth</dd>
               </div>
             </dl>
             
             <div className="mt-10 border-t border-slate-200 pt-8">
               <p className="text-lg italic text-slate-600">
                 "Churchtown Media didn't just build a website; they built a sales engine. We had to hire more staff to handle the inquiries."
               </p>
               <div className="mt-4 flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">MD</div>
                   <div>
                       <p className="text-sm font-bold text-slate-900">Managing Director</p>
                       <p className="text-xs text-slate-500">Alotek Shelters Ltd.</p>
                   </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Want results like Alotek?</h2>
            <p className="mt-4 text-blue-100">
                We can run a free audit on your manufacturing or industrial website right now to see if you have the same technical blockers they did.
            </p>
            <div className="mt-8 flex justify-center gap-4">
            <Link href="/audit" className="rounded-lg bg-white px-8 py-4 font-bold text-blue-600 hover:bg-blue-50 transition-colors shadow-lg">
                Run Free Audit
            </Link>
            <Link href="/contact" className="rounded-lg border border-blue-400 px-8 py-4 font-bold text-white hover:bg-blue-500 transition-colors">
                Book Consultation
            </Link>
            </div>
        </div>
      </section>
    </main>
  );
}