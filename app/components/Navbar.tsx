"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLink from "./ButtonLink";
import { INSTITRACE_URL } from "@/lib/institrace";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  // The menu is open only on the path where it was opened, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const isOpen = openOn === pathname;
  const setIsOpen = (open: boolean) => setOpenOn(open ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-[var(--paper)]/95 backdrop-blur-[2px]">
        <div className="page flex items-center justify-between gap-6 pt-4 pb-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block no-underline">
            <span
              className="block whitespace-nowrap text-[1.1rem] text-[var(--navy)] leading-none"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Churchtown Media
            </span>
            <span className="mt-1 block text-[0.72rem] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
              Southport
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`whitespace-nowrap text-[1rem] no-underline pb-0.5 ${
                  pathname === link.href
                    ? "text-[var(--ink)] border-b border-[var(--navy)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ButtonLink href={INSTITRACE_URL} external size="sm">
              Institrace
            </ButtonLink>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[1rem] text-[var(--navy)] pb-0.5 border-b border-[var(--rule-strong)]"
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
        <div id="mobile-menu" className="fixed inset-0 z-[90] bg-[var(--paper)] md:hidden">
          <div className="page flex flex-col gap-5 pt-28">
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
            <div className="mt-4">
              <ButtonLink href={INSTITRACE_URL} external className="w-full">
                Open Institrace
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
