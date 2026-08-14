import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { site, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pb-24 pt-16 lg:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline} Offline businesses, online customers — across Pakistan.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-gold">
                All 10 services →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Packages</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {packages.map((p) => (
              <li key={p.slug}>
                <Link href={`/packages/${p.slug}`} className="hover:text-gold">
                  Level {p.level} · {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="hover:text-gold">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-gold">
                Work
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href={waLink()} className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li>{site.cities.slice(0, 4).join(" · ")}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-xs text-muted">
        <p>© {new Date().getFullYear()} Pyara Pakistan. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-gold">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-gold">
            Terms
          </Link>
          <Link href="/faq" className="hover:text-gold">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
