"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { GoldButton, GhostButton, WhatsAppButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { LeadFlow } from "@/components/ui/LeadFlow";
import { CtaBand } from "@/components/ui/CtaBand";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { industries } from "@/data/industries";
import { faqs, outcomes } from "@/data/content";
import { caseStudies } from "@/data/work";
import { waLink } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          {reduce ? (
            <div className="h-full w-full bg-[radial-gradient(circle_at_70%_40%,#0f5138,transparent_45%),linear-gradient(#03150f,#06241a)]" />
          ) : (
            <HeroScene />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Offline business → Online growth
          </p>
          <p className="font-urdu mt-4 text-3xl text-gold/90 md:text-4xl" dir="rtl">
            پیارا پاکستان
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] text-cream md:text-6xl">
            Take your offline business online.{" "}
            <span className="gold-text">Get customers, not just views.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Identity, content, website, ads and WhatsApp follow-up — a complete
            growth system for shops, clinics, restaurants and companies across
            Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton href={waLink()}>WhatsApp us</WhatsAppButton>
            <GoldButton href="/packages">See 4 packages</GoldButton>
            <GhostButton href="/process">How it works</GhostButton>
          </div>
          <p className="mt-8 text-sm text-cream/60">
            For shops, clinics, restaurants, real estate & more.
          </p>
        </div>
      </section>

      <section className="border-y border-gold/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-xs uppercase tracking-[0.22em] text-gold/70">
          {["Karachi", "Lahore", "Islamabad", "Faisalabad", "Peshawar", "Multan"].map(
            (c) => (
              <span key={c}>{c}</span>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">The problem</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-cream md:text-5xl">
            Your business is real. Your online presence is not.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            "No Google listing people trust",
            "Dead or personal Instagram",
            "Ads with nowhere to land",
            "Leads lost in WhatsApp",
          ].map((t, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <TiltCard>
                <div className="h-full rounded-3xl gold-border bg-green-900/40 p-6">
                  <div className="font-serif text-3xl text-gold/50">0{i + 1}</div>
                  <p className="mt-4 text-lg text-cream">{t}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">The system</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
            Pyara Pakistan is the complete growth system.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.07}>
              <div className="rounded-3xl bg-gradient-to-b from-gold/15 to-transparent p-6 gold-border">
                <Star className="text-gold" size={18} />
                <h3 className="mt-4 font-serif text-2xl text-cream">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <Reveal>
            <h2 className="font-serif text-4xl text-cream md:text-5xl">
              Everything you need to go online
            </h2>
          </Reveal>
          <Link href="/services" className="hidden items-center gap-1 text-sm text-gold md:flex">
            All services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <TiltCard>
                <Link
                  href={`/services/${s.slug}`}
                  className="block h-full rounded-2xl gold-border bg-green-900/35 p-5 hover:bg-green-800/40"
                >
                  <div className="text-xs text-gold">{s.number}</div>
                  <h3 className="mt-2 font-serif text-xl text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.short}</p>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="font-serif text-4xl text-cream md:text-5xl">
            Start at your level. Upgrade when ready.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <TiltCard>
                <div
                  className={`flex h-full flex-col rounded-3xl p-6 gold-border ${
                    p.featured ? "bg-gold/15 ring-1 ring-gold/40" : "bg-green-900/40"
                  }`}
                >
                  {p.badge && (
                    <span className="mb-3 w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-950">
                      {p.badge}
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Level {p.level}</p>
                  <h3 className="mt-1 font-serif text-2xl text-cream">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{p.promise}</p>
                  <p className="mt-4 text-sm text-gold">{p.price}</p>
                  <GoldButton href={`/packages/${p.slug}`} className="mt-5 w-full">
                    {p.cta}
                  </GoldButton>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="mb-10 font-serif text-4xl text-cream md:text-5xl">
              How we get you customers
            </h2>
          </Reveal>
        </div>
        <LeadFlow />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="font-serif text-4xl text-cream">Who we help</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="rounded-full gold-border px-4 py-2 text-sm text-cream/80 hover:bg-gold/10 hover:text-gold"
            >
              {ind.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="font-serif text-4xl text-cream">Stories of going online</h2>
          <p className="mt-2 text-sm text-gold/80">Sample engagements — layout of real results to come.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/work/${c.slug}`}
                className="block rounded-3xl gold-border bg-green-900/40 p-6 hover:bg-green-800/40"
              >
                <p className="text-xs uppercase tracking-widest text-gold">{c.industry}</p>
                <p className="mt-4 font-serif text-5xl gold-text">{c.metric}</p>
                <p className="text-sm text-muted">{c.metricLabel}</p>
                <h3 className="mt-4 text-lg text-cream">{c.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <Reveal>
          <h2 className="mb-8 text-center font-serif text-4xl text-cream">Questions owners ask</h2>
        </Reveal>
        <div className="divide-y divide-gold/15 rounded-3xl gold-border">
          {faqs.slice(0, 6).map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="cursor-pointer list-none font-medium text-cream">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link href="/faq" className="text-sm text-gold">
            See all questions →
          </Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}
