import Link from "next/link";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact Us | Churchtown Media",
  description: "Get your free local SEO audit. Contact Southport's leading digital agency for web design and growth strategies.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Talk Growth
          </h1>
          <p className="mt-4 text-xl text-slate-400">
            Ready to upgrade? Fill out the form below for a <strong>Free Video Audit</strong> of your current website and SEO rankings.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2">
        
        {/* Left Column: Contact Info & Value Prop */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
            <p className="mt-4 text-slate-600">
              Based in Southport (Churchtown), serving businesses across the North West.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email Us</p>
                  <a href="mailto:damian@churchtownmedia.co.uk" className="text-lg font-semibold text-slate-900 hover:text-blue-600">
                    damian@churchtownmedia.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Southport, PR9 9SA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-slate-900">What you get in your Free Audit:</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Competitor Analysis (Who is outranking you?)",
                "Speed & Performance Score",
                "Missing Keyword Opportunities",
                "Actionable 'Quick Wins' Plan"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:p-12">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-semibold leading-6 text-slate-900">
                Website URL (So we can audit it)
              </label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="https://example.com"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Free Audit <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-slate-500">
              Zero obligation. We usually reply with your video audit within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}