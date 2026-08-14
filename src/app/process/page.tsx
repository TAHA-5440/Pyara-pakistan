import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { LeadFlow } from "@/components/ui/LeadFlow";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/Buttons";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Process",
  description: "How Pyara Pakistan takes a business from first WhatsApp to a customer system.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From first WhatsApp to a system that brings customers"
      >
        <WhatsAppButton href={waLink()}>Start with a discovery chat</WhatsAppButton>
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="rounded-3xl gold-border bg-green-900/40 p-5">
                <div className="font-serif text-4xl text-gold/40">{s.n}</div>
                <h2 className="mt-3 font-serif text-2xl text-cream">{s.title}</h2>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 font-serif text-4xl text-cream">The customer engine</h2>
        </div>
        <LeadFlow />
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2">
        <div className="rounded-3xl gold-border p-8">
          <h2 className="font-serif text-3xl text-cream">What we need from you</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>— Access to existing pages</li>
            <li>— Photos of the shop / clinic / office</li>
            <li>— Your offer and prices</li>
            <li>— Who replies on WhatsApp</li>
          </ul>
        </div>
        <div className="rounded-3xl gold-border p-8">
          <h2 className="font-serif text-3xl text-cream">Timelines</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>— Level 1: 7–14 days</li>
            <li>— Level 2: 2–4 weeks</li>
            <li>— Level 3: funnel then ongoing ads</li>
            <li>— Level 4: 30-day install, then monthly</li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
