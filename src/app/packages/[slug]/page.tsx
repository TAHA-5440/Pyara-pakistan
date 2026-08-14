import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton, WhatsAppButton } from "@/components/ui/Buttons";
import { LeadFlow } from "@/components/ui/LeadFlow";
import { getPackage, packages } from "@/data/packages";
import { waLink } from "@/data/site";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  return { title: p ? `Level ${p.level} · ${p.name}` : "Package" };
}

export default async function PackageDetail({ params }: Props) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();
  const next = packages.find((x) => x.level === p.level + 1);

  return (
    <>
      <PageHero
        eyebrow={`Level ${p.level}`}
        title={p.name}
        text={p.promise}
      >
        <WhatsAppButton href={waLink(p.wa)}>WhatsApp this package</WhatsAppButton>
        <GoldButton href={`/contact?package=${encodeURIComponent(`Level ${p.level} ${p.name}`)}`}>
          Request this package
        </GoldButton>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-cream">What’s included</h2>
          <ul className="mt-4 space-y-2">
            {p.includes.map((inc) => (
              <li key={inc} className="gold-border rounded-xl px-4 py-3 text-cream/85">
                {inc}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-cream">Best for</h2>
          <p className="mt-4 text-muted">{p.bestFor}</p>
          <h2 className="mt-8 font-serif text-3xl text-cream">Timeline</h2>
          <p className="mt-4 text-muted">{p.timeline}</p>
          <p className="mt-3 text-cream/80">{p.month}</p>
          <h2 className="mt-8 font-serif text-3xl text-cream">Not included</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {p.notIncluded.map((n) => (
              <li key={n}>— {n}</li>
            ))}
          </ul>
        </div>
      </section>
      {(p.level === 3 || p.level === 4) && (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="mb-8 font-serif text-3xl text-cream">The customer engine</h2>
          </div>
          <LeadFlow />
        </section>
      )}
      {next && (
        <section className="mx-auto max-w-6xl px-5 pb-10">
          <Link
            href={`/packages/${next.slug}`}
            className="block rounded-3xl gold-border p-8 hover:bg-gold/10"
          >
            <p className="text-xs uppercase tracking-widest text-gold">Upgrade next</p>
            <p className="mt-2 font-serif text-3xl text-cream">
              Level {next.level} · {next.name}
            </p>
            <p className="mt-2 text-muted">{next.promise}</p>
          </Link>
        </section>
      )}
      <CtaBand title={`Ready for Level ${p.level}?`} />
    </>
  );
}
