import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton, WhatsAppButton } from "@/components/ui/Buttons";
import { getService, services } from "@/data/services";
import { waLink } from "@/data/site";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return { title: s?.title ?? "Service", description: s?.short };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero eyebrow={`Service ${s.number}`} title={s.title} text={s.promise}>
        <WhatsAppButton href={waLink(`I want ${s.title} for my business.`)}>
          Discuss on WhatsApp
        </WhatsAppButton>
        <GoldButton href="/packages">See packages</GoldButton>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-cream">The problem</h2>
          <p className="mt-4 text-muted">{s.problem}</p>
          <h2 className="mt-10 font-serif text-3xl text-cream">What you get</h2>
          <ul className="mt-4 space-y-2 text-cream/80">
            {s.deliverables.map((d) => (
              <li key={d} className="gold-border rounded-xl px-4 py-3">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-cream">How it works</h2>
          <ol className="mt-4 space-y-3">
            {s.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-muted">
                <span className="text-gold">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-gold">Sits in the flow at: {s.flowStep}</p>
          <p className="mt-2 text-sm text-muted">Best for: {s.bestFor.join(", ")}</p>
          <p className="mt-2 text-sm text-muted">Included in: {s.levels.join(", ")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h3 className="font-serif text-2xl text-cream">Related</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {s.related.map((slugRel) => {
            const r = getService(slugRel);
            if (!r) return null;
            return (
              <Link
                key={slugRel}
                href={`/services/${slugRel}`}
                className="rounded-full gold-border px-4 py-2 text-sm text-cream hover:text-gold"
              >
                {r.title}
              </Link>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
