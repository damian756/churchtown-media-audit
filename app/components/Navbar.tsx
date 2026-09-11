"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Consultation", href: "/services" },
  { name: "Work", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-[var(--paper)]/95 backdrop-blur-[2px]">
        <div className="page flex items-end justify-between gap-6 pt-5 pb-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="group block no-underline">
            <span
              className="block text-[1.05rem] text-[var(--navy)] leading-none"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Churchtown Media
            </span>
            <span className="mt-1 block text-[0.72rem] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
              A practice
            </span>
          </Link>

          <nav className="hidden md:flex items-baseline gap-7 pb-0.5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[0.95rem] no-underline ${
                  pathname === link.href
                    ? "text-[var(--ink)] border-b border-[var(--navy)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[0.95rem] text-[var(--navy)] pb-0.5 border-b border-[var(--rule)]"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className="page">
          <div className="h-px bg-[var(--rule)]" />
          <div className="mt-[3px] h-px bg-[var(--rule)]" />
        </div>
      </header>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[110] bg-[var(--paper)] md:hidden">
          <div className="page flex flex-col gap-6 pt-28">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[1.7rem] text-[var(--ink)] no-underline"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 text-[1.05rem]">
              <a href="https://www.siba.digital" target="_blank" rel="noopener noreferrer" className="out">
                SIBA Digital
              </a>
              <a href="https://www.institrace.co.uk" target="_blank" rel="noopener noreferrer" className="out">
                Institrace
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
