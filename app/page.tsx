import Link from "next/link";
import { CheckCircle2, Factory, LineChart, ShieldCheck } from "lucide-react";
import AuditForm from "./components/AuditForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            Radical Transparency. Zero Fluff.
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            SEO for Businesses That <span className="text-blue-500">Build Things</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We don't sell "viral content." We build technical infrastructure that puts your products in front of procurement managers and decision-makers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/audit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Free Audit
            </Link>
            <Link href="/case-studies" className="text-sm font-semibold leading-6 text-white hover:text-blue-400">
              View Case Studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET SECTION (Your Audit Tool) */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Is Your Website Invisible to Google?
          </h2>
          <p className="mt-4 text-slate-600">
            Enter your URL below. Our AI will analyze your technical SEO, speed, and ranking gaps in 10 seconds.
          </p>
          <div className="mt-10">
            <AuditForm />
          </div>
        </div>
      </section>

      {/* FEATURES / USP */}
      <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Churchtown Media?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Don't Hide Behind Jargon
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most agencies send you a PDF once a month. We give you live dashboard access and fix technical problems that actually block revenue.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Factory className="h-5 w-5 flex-none text-blue-600" />
                  Industrial Specialization
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">We understand specs, catalogs, and B2B procurement cycles. We write content for engineers, not influencers.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <LineChart className="h-5 w-5 flex-none text-blue-600" />
                  Live Data Access
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">You own your data. We give you full access to live dashboards so you can watch your rankings climb in real-time.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <ShieldCheck className="h-5 w-5 flex-none text-blue-600" />
                  Technical Triage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">We fix the broken code that other agencies miss. Like the 359-page error log we fixed for EuroChems in 24 hours.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Case Study: Alotek Shelters
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                A local manufacturing business stuck with flat traffic. We implemented our "Sector Silo" strategy and technical fixes.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                <li className="flex gap-x-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-green-600" />
                  <span><strong>+85% Traffic Increase</strong> in first 30 days.</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-green-600" />
                  <span><strong>#1 Rankings</strong> for commercial keywords like "Parish Council Bus Shelters".</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-green-600" />
                  <span><strong>Zero Ad Spend</strong>. Pure organic growth.</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link href="/case-studies" className="text-blue-600 font-semibold hover:underline">
                  Read full case study →
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl bg-slate-100 p-8 shadow-sm ring-1 ring-slate-200">
               {/* Visual Placeholder for a graph */}
               <div className="flex flex-col gap-4">
                 <div className="h-64 w-full rounded-lg bg-white p-4 shadow-sm">
                   <div className="flex items-end justify-between gap-2 h-full pt-8">
                      <div className="w-full bg-blue-100 rounded-t-sm h-[20%]"></div>
                      <div className="w-full bg-blue-100 rounded-t-sm h-[25%]"></div>
                      <div className="w-full bg-blue-200 rounded-t-sm h-[40%]"></div>
                      <div className="w-full bg-blue-300 rounded-t-sm h-[55%]"></div>
                      <div className="w-full bg-blue-400 rounded-t-sm h-[75%]"></div>
                      <div className="w-full bg-blue-500 rounded-t-sm h-[85%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          +85%
                        </div>
                      </div>
                   </div>
                 </div>
                 <p className="text-center text-sm font-medium text-slate-500">Organic Traffic Growth (Month 1)</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to fix your SEO engine?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Get a comprehensive 24-point audit of your current website. No obligation, just data.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/audit"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Free Audit
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-100">
              Contact Sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}