import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Engineers in a Room Full of Artists
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Churchtown Media is a <strong>Technical Performance Studio</strong> based in Southport. We don't have venture capital; we have Revenue. We don't have fancy offices; we invest in Enterprise Infrastructure.
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">The "Eat Your Own Dog Food" Standard</h2>
              <p className="mt-4 text-slate-600">
                We cannot sell £10k performance sites to Liverpool corporations if our own site scores a 65/100.
              </p>
              <p className="mt-4 text-slate-600">
                That is why this website is built on the <strong>"Ferrari Engine"</strong> of the web: Next.js 14 and Vercel. We operate with zero black boxes. If a campaign fails, we explain why. If it wins, we show exactly how.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-slate-900">Our Operational Logic</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-slate-600"><strong>Zero Fluff:</strong> No corporate waffle. We speak in Data and ROI.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-slate-600"><strong>Lean & Hungry:</strong> We are bootstrapped. We only get paid if you win.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-slate-600"><strong>Code = Revenue:</strong> We build assets that function as 24/7 sales employees.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}