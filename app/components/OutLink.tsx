import type { ReactNode } from "react";

type OutLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function OutLink({ href, children, className = "out" }: OutLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
