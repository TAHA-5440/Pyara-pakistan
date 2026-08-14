import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton, WhatsAppButton } from "@/components/ui/Buttons";
import { TiltCard } from "@/components/motion/TiltCard";
import { Reveal } from "@/components/motion/Reveal";
import { packages, comparisonRows } from "@/data/packages";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Packages",
  description: "Four levels from digital setup to complete transformation.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="4 levels"
        title="One path from shop to growth system"
        text="Start small. Upgrade anytime. WhatsApp us if you are not sure."
      >
        <WhatsAppButton href={waLink("Help me choose a Pyara Pakistan package.")}>
          Help me choose
        </WhatsAppButton>
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <TiltCard>
                <div
                  className={`flex h-full flex-col rounded-3xl p-6 gold-border ${
                    p.featured ? "bg-gold/15" : "bg-green-900/40"
                  }`}
                >
                  {p.badge && (
                    <span className="mb-3 w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase text-green-950">
                      {p.badge}
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Level {p.level}</p>
                  <h2 className="mt-1 font-serif text-2xl text-cream">{p.name}</h2>
                  <p className="mt-3 text-sm text-muted">{p.promise}</p>
                  <ul className="mt-4 flex-1 space-y-1 text-sm text-cream/75">
                    {p.includes.slice(0, 6).map((inc) => (
                      <li key={inc}>• {inc}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted">Best for: {p.bestFor}</p>
                  <GoldButton href={`/packages/${p.slug}`} className="mt-5 w-full">
                    {p.cta}
                  </GoldButton>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="mb-6 font-serif text-3xl text-cream">Compare everything</h2>
        <div className="overflow-x-auto rounded-3xl gold-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-gold/10 text-gold">
              <tr>
                <th className="p-4">Service</th>
                <th className="p-4">L1</th>
                <th className="p-4">L2</th>
                <th className="p-4">L3</th>
                <th className="p-4">L4</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.service} className="border-t border-gold/10 text-cream/80">
                  <td className="p-4">{row.service}</td>
                  <td className="p-4">{row.l1}</td>
                  <td className="p-4">{row.l2}</td>
                  <td className="p-4">{row.l3}</td>
                  <td className="p-4">{row.l4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted">
          Ad spend is yours. We do not mark up Facebook or Google media.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gold">
          {packages.map((p, i) => (
            <span key={p.slug}>
              L{p.level} {p.name}
              {i < packages.length - 1 ? " → " : ""}
            </span>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
