import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Churchtown<span className="text-blue-600">Media</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-blue-600 transition-colors">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">
            Get Audit
          </Link>
        </div>

        {/* Mobile Menu Icon (Simple Placeholder) */}
        <div className="md:hidden text-slate-500">
          <Link href="/blog">Menu</Link>
        </div>
      </div>
    </nav>
  );
}