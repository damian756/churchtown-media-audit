import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Churchtown<span className="text-blue-600">Media</span>
        </Link>

        {/* Desktop Navigation - UPDATED */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {/* Specific Service Links */}
          <Link href="/web-design" className="hover:text-blue-600 transition-colors">
            Web Design
          </Link>
          <Link href="/search-engine-optimisation" className="hover:text-blue-600 transition-colors">
            Local SEO
          </Link>
          
          {/* Divider */}
          <span className="h-4 w-px bg-slate-200"></span>

          <Link href="/southport-business-growth" className="hover:text-blue-600 transition-colors">
            Growth Hub
          </Link>
          <Link href="/case-studies" className="hover:text-blue-600 transition-colors">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>

          {/* CTA */}
          <Link href="/contact" className="ml-4 rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors shadow-sm">
            Get Audit
          </Link>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden text-slate-500">
          <Link href="/contact">Menu</Link>
        </div>
      </div>
    </nav>
  );
}