import type { Metadata } from "next";
import Link from "next/link";

// 1. Define the parameters type as a Promise (Next.js 15/16 requirement)
type Props = {
  params: Promise<{ city: string }>;
};

const CITIES: Record<string, { name: string; region: string }> = {
  southport: { name: "Southport", region: "Merseyside" },
  preston: { name: "Preston", region: "Lancashire" },
  liverpool: { name: "Liverpool", region: "Merseyside" },
  manchester: { name: "Manchester", region: "Greater Manchester" },
  london: { name: "London", region: "Greater London" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params here too
  const { city } = await params;
  const cityData = CITIES[city.toLowerCase()];
  const cityName = cityData ? cityData.name : city;
  
  return {
    title: `SEO Consultant in ${cityName} | Churchtown Media`,
    description: `Drive measurable growth with Enterprise SEO strategies tailored for ${cityName} businesses.`,
  };
}

export default async function LocationPage({ params }: Props) {
  // 2. Await the params before using them
  const { city } = await params;
  const slug = city.toLowerCase();
  const cityData = CITIES[slug];

  if (!cityData) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Location Not Found</h1>
        <p className="mt-2 text-slate-600">We currently don't have a specific page for {city}.</p>
        <Link href="/" className="mt-4 text-blue-600 hover:underline font-medium">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Premier SEO Consulting for <span className="text-blue-500">{cityData.name}</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Stop guessing. Start dominating the {cityData.region} market with data-driven, enterprise-grade SEO.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/audit"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Get Free Audit
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-700 bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900">
          Why {cityData.name} Businesses Choose Churchtown
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900">Technical Speed</h3>
            <p className="mt-3 text-slate-600">
              We build on Next.js, ensuring your site loads in under 200ms—faster than 99% of your competitors in {cityData.region}.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900">Radical Transparency</h3>
            <p className="mt-3 text-slate-600">
              No hidden deliverables. You see exactly what we do, when we do it, and how it impacts your bottom line.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900">Local Dominance</h3>
            <p className="mt-3 text-slate-600">
              We understand the {cityData.name} market landscape, helping you capture high-intent local leads.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">Serving {cityData.region} & Beyond</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {Object.entries(CITIES).map(([key, data]) => (
              <Link
                key={key}
                href={`/locations/${key}`}
                className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors"
              >
                SEO {data.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}