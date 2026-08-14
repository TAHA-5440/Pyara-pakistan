import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition will-change-transform active:scale-[0.98]";

export function GoldButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} btn-shimmer text-green-950 shadow-[0_10px_40px_-10px_rgba(224,195,106,0.7)] hover:brightness-110 ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} gold-border bg-white/5 text-cream hover:bg-white/10 ${className}`}
    >
      {children}
    </Link>
  );
}

export function WhatsAppButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-[#25d366] text-green-950 hover:bg-[#2ee075] ${className}`}
    >
      {children}
    </a>
  );
}
