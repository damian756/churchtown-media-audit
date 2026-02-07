import { Mail, MapPin, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 sm:p-12 backdrop-blur-sm">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* The Filter */}
          <div>
            <div className="flex items-center gap-3 text-blue-400">
              <Terminal className="h-6 w-6" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">System Ready</span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Ambitious Businesses Only.
            </h1>
            <p className="mt-4 text-lg text-slate-400">
              We do not work with "tyre kickers." We partner with companies in Liverpool and Manchester who understand that code is a revenue multiplier.
            </p>
            
            <dl className="mt-8 space-y-6 text-base text-slate-300">
              <div className="flex gap-x-4">
                <dt className="flex-none"><Mail className="h-6 w-6 text-blue-500" /></dt>
                <dd><a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-blue-400">hello@churchtownmedia.co.uk</a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none"><MapPin className="h-6 w-6 text-blue-500" /></dt>
                <dd>Southport, UK<br /><span className="text-sm text-slate-500">Global Tech Stack. Local Roots.</span></dd>
              </div>
            </dl>
          </div>

          {/* The Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Work Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">What is your revenue goal?</label>
              <textarea id="message" rows={4} placeholder="e.g. We want to add £50k MRR via organic search..." className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="mt-2 rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              Initialize Project
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}