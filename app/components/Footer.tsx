import Link from "next/link";
import { BarChart3, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <BarChart3 className="h-6 w-6" />
              <span className="text-xl font-bold">Churchtown Media</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Data-driven SEO for businesses that build things. No retainers for "effort"—only results.
            </p>
            <div className="pt-4">
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-500" />
                Southport, UK
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-blue-500" />
                hello@churchtownmedia.co.uk
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-blue-400">Technical SEO</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Industrial Content</Link></li>
              <li><Link href="/locations/southport" className="hover:text-blue-400">Local Domination</Link></li>
              <li><Link href="/audit" className="hover:text-blue-400">Free SEO Audit</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Areas Served
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/southport" className="hover:text-blue-400">SEO Southport</Link></li>
              <li><Link href="/locations/preston" className="hover:text-blue-400">SEO Preston</Link></li>
              <li><Link href="/locations/liverpool" className="hover:text-blue-400">SEO Liverpool</Link></li>
              <li><Link href="/locations/manchester" className="hover:text-blue-400">SEO Manchester</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Churchtown Media Ltd. Built with Next.js & Radical Transparency.
        </div>
      </div>
    </footer>
  );
}