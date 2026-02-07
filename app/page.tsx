import AuditForm from "./components/AuditForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Section 1: Hero */}
      <section className="bg-white px-6 py-20 sm:py-28 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-6xl">
            Data-Driven Digital Growth
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            We migrate businesses from WordPress to high-performance custom
            platforms.
          </p>
        </div>
      </section>

      {/* Section 2: SEO Audit Tool (MVP) */}
      <section className="px-6 pb-24 pt-8 sm:pb-32">
        <div className="mx-auto flex max-w-md justify-center">
          <AuditForm />
        </div>
      </section>
    </div>
  );
}
