import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { TiltCard } from "@/components/motion/TiltCard";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Pyara Pakistan for restaurants, clinics, real estate, salons and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we help"
        title="Built for Pakistani businesses that still run offline"
        text="Don’t see your trade? WhatsApp us anyway — the system still fits."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04}>
              <TiltCard>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="block h-full rounded-3xl gold-border bg-green-900/40 p-6"
                >
                  <h2 className="font-serif text-2xl text-cream">{ind.title}</h2>
                  <p className="mt-3 text-sm text-muted">{ind.hero}</p>
                  <p className="mt-4 text-xs text-gold">Start: {ind.start}</p>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
