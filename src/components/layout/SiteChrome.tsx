"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const home = usePathname() === "/";
  return (
    <div className="relative min-h-full">
      {home ? <header className="boutique-header"><Link href="/" className="boutique-wordmark">pyara<span>pakistan<span className="brand-dot">●</span></span></Link><nav aria-label="Main navigation"><a href="#our-services">Our services</a><Link href="/packages">Packages</Link><Link href="/about">Our story</Link></nav><Link className="boutique-header-cta" href="/contact">Let’s talk <span>↗</span></Link></header> : <Header />}
      <main className="relative flex-1">{children}</main>
      <Footer />
      {!home && <MobileCtaBar />}
    </div>
  );
}
