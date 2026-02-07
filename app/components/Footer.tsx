import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Churchtown<span className="text-blue-500">Media</span>
            </Link>
            <p className="text-sm leading-6 text-slate-400 max-w-sm">
              We build revenue engines, not just websites. Data-driven SEO and high-performance development for Southport businesses.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/web-design" className="text-sm leading-6 hover:text-blue-400 transition-colors">
                      Enterprise Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/search-engine-optimisation" className="text-sm leading-6 hover:text-blue-400 transition-colors">
                      Data-Driven SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-design/small-business" className="text-sm leading-6 hover:text-green-400 transition-colors">
                      Small Business Websites
                    </Link>
                  </li>
                  <li>
                    <Link href="/search-engine-optimisation/local" className="text-sm leading-6 hover:text-green-400 transition-colors">
                      Local SEO Starter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Agency</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/case-studies" className="text-sm leading-6 hover:text-white transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm leading-6 hover:text-white transition-colors">
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link href="/southport-business-growth" className="text-sm leading-6 hover:text-yellow-400 transition-colors">
                      Southport Growth Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 hover:text-white transition-colors">
                      Get Free Audit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                    <span className="text-sm leading-6">
                      5 Cambridge Avenue,<br/>Southport, PR9 9SA
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                    <a href="mailto:damian@churchtownmedia.co.uk" className="text-sm leading-6 hover:text-white">
                      damian@churchtownmedia.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {currentYear} Churchtown Media Ltd. All rights reserved. Company No: 16960442.
          </p>
          <p className="text-xs leading-5 text-slate-600">
            Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}