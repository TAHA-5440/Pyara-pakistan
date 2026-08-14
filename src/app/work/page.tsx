import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { caseStudies } from "@/data/work";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "Results, not just posts — Pyara Pakistan case studies.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="Results, not just posts"
        text="Sample stories showing the kind of work we do. Real client names appear with permission."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/work/${c.slug}`}
                className="block rounded-3xl gold-border bg-green-900/40 p-7"
              >
                <p className="text-xs uppercase tracking-widest text-gold">{c.industry}</p>
                <p className="mt-6 font-serif text-5xl gold-text">{c.metric}</p>
                <p className="text-sm text-muted">{c.metricLabel}</p>
                <h2 className="mt-5 text-xl text-cream">{c.title}</h2>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
