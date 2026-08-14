"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { GoldButton } from "@/components/ui/Buttons";
import { nav, waLink } from "@/data/site";
import { services } from "@/data/services";
import { packages } from "@/data/packages";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            <div className="group relative">
              <Link href="/services" className="text-sm text-cream/80 hover:text-gold">
                Services
              </Link>
              <div className="invisible absolute left-1/2 top-full z-20 mt-4 w-[540px] -translate-x-1/2 rounded-2xl gold-border bg-green-950/95 p-4 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-xl px-3 py-2 text-left text-sm text-cream/80 hover:bg-white/5 hover:text-gold"
                    >
                      {s.number} {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/packages" className="text-sm text-cream/80 hover:text-gold">
                Packages
              </Link>
              <div className="invisible absolute left-0 top-full z-20 mt-4 w-72 rounded-2xl gold-border bg-green-950/95 p-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                {packages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/packages/${p.slug}`}
                    className="block rounded-xl px-3 py-2 text-sm text-cream/80 hover:bg-white/5 hover:text-gold"
                  >
                    Level {p.level} · {p.name}
                  </Link>
                ))}
              </div>
            </div>
            {nav.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream/80 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-green-950"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <GoldButton href="/contact" className="!py-2 !px-4">
              Get a quote
            </GoldButton>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={waLink()}
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#25d366] text-green-950"
            >
              <MessageCircle size={18} />
            </a>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full gold-border text-cream"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-3xl gold-border bg-green-950/95 p-5 lg:hidden">
            <div className="grid gap-3 text-cream">
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/packages" onClick={() => setOpen(false)}>Packages</Link>
              <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
              <Link href="/process" onClick={() => setOpen(false)}>Process</Link>
              <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-gold">
                Get a quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
