"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { site, waLink } from "@/data/site";

export function MobileCtaBar() {
  const path = usePathname();
  if (path === "/thank-you") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-green-950/95 p-2 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-1 rounded-full bg-white/5 py-3 text-xs font-semibold text-cream"
        >
          <Phone size={14} /> Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 rounded-full bg-[#25d366] py-3 text-xs font-semibold text-green-950"
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-1 rounded-full bg-gold py-3 text-xs font-semibold text-green-950"
        >
          <Sparkles size={14} /> Quote
        </a>
      </div>
    </div>
  );
}
