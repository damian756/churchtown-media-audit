import AuditForm from "../components/AuditForm";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Free Technical SEO Audit
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Get a 24-point technical analysis of your website in under 10 seconds.
          We check speed, Core Web Vitals, and on-page SEO factors.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <AuditForm />
        </div>
      </div>
    </main>
  );
}