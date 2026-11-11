"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INSTITRACE_URL } from "@/lib/institrace";

/** Services is a row on the home page (Damian, 11 Nov 2026: the services page folded into home). */
const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

/**
 * The masthead, set like a letterhead: CHURCHTOWN | MEDIA (drawn the way Institrace draws INSTI | TRACE), the town,
 * and four plain links. Four short links fit on a phone, so there is no menu to open.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mast">
      <Link href="/" className="mast-name" aria-label="Churchtown Media, home">
        <span className="wm" aria-hidden="true">
          <span>Churchtown</span>
          <span className="wm-bar" />
          <span>Media</span>
        </span>
        <span className="mast-place" aria-hidden="true">
          Southport
        </span>
      </Link>
      <nav aria-label="Main">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.name}
          </Link>
        ))}
        <a href={INSTITRACE_URL} target="_blank" rel="noopener noreferrer">
          Institrace
        </a>
      </nav>
    </header>
  );
}
