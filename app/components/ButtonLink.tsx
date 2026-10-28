import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** Opens in a new tab with rel noopener: for institrace.co.uk and other sites. */
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

/** A call to action: one height, one line. Primary plus secondary. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonLinkProps) {
  const cls = `btn btn-${variant}${size === "sm" ? " btn-sm" : ""}${className ? ` ${className}` : ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
