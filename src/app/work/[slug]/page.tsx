import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton } from "@/components/ui/Buttons";
import { caseStudies, getCaseStudy } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return { title: c?.title };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow={c.industry} title={c.title} text={c.timeframe}>
        <GoldButton href="/contact">Want this for your business?</GoldButton>
      </PageHero>
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <p className="font-serif text-6xl gold-text">{c.metric}</p>
        <p className="text-muted">{c.metricLabel}</p>
        {c.sample && (
          <p className="mt-4 text-xs uppercase tracking-widest text-gold">
            Sample engagement
          </p>
        )}
        <h2 className="mt-10 font-serif text-3xl text-cream">Challenge</h2>
        <p className="mt-3 text-muted">{c.challenge}</p>
        <h2 className="mt-10 font-serif text-3xl text-cream">What we did</h2>
        <ul className="mt-3 space-y-2 text-cream/80">
          {c.work.map((w) => (
            <li key={w}>— {w}</li>
          ))}
        </ul>
        <h2 className="mt-10 font-serif text-3xl text-cream">Result</h2>
        <p className="mt-3 text-muted">{c.result}</p>
        <blockquote className="mt-10 border-l-2 border-gold pl-5 font-serif text-2xl text-cream">
          “{c.quote}”
        </blockquote>
      </section>
      <CtaBand />
    </>
  );
}
