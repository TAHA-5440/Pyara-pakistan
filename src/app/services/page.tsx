import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton, GhostButton } from "@/components/ui/Buttons";
import { TiltCard } from "@/components/motion/TiltCard";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "10 ways Pyara Pakistan takes your offline business online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The catalogue"
        title="10 ways we take your business online"
        text="These modules combine into 4 clear packages. Start where you are."
      >
        <GoldButton href="/packages">Compare packages</GoldButton>
        <GhostButton href="/contact">Help me choose</GhostButton>
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <TiltCard>
                <Link
                  href={`/services/${s.slug}`}
                  className="block h-full rounded-3xl gold-border bg-green-900/40 p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-3xl text-gold/50">{s.number}</span>
                    <span className="text-xs text-gold">{s.levels.join(" · ")}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl text-cream">{s.title}</h2>
                  <p className="mt-2 text-muted">{s.short}</p>
                  <ul className="mt-4 space-y-1 text-sm text-cream/70">
                    {s.deliverables.slice(0, 3).map((d) => (
                      <li key={d}>— {d}</li>
                    ))}
                  </ul>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { t: "I have nothing online", href: "/packages/digital-setup" },
            { t: "I look unprofessional", href: "/packages/content-branding" },
            { t: "I need leads now", href: "/packages/marketing-lead-generation" },
          ].map((x) => (
            <Link
              key={x.t}
              href={x.href}
              className="rounded-2xl gold-border p-5 text-center text-cream hover:bg-gold/10"
            >
              {x.t} →
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
