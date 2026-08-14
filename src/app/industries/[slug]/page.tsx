import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { WhatsAppButton, GoldButton } from "@/components/ui/Buttons";
import { getIndustry, industries } from "@/data/industries";
import { waLink } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  return { title: i?.title, description: i?.hero };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  return (
    <>
      <PageHero eyebrow={i.title} title={i.hero}>
        <WhatsAppButton href={waLink(i.wa)}>WhatsApp for {i.title}</WhatsAppButton>
        <GoldButton href="/packages">See packages</GoldButton>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-cream">Where it hurts</h2>
          <ul className="mt-4 space-y-3">
            {i.pain.map((p) => (
              <li key={p} className="gold-border rounded-xl p-4 text-muted">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-cream">What we set up</h2>
          <ul className="mt-4 space-y-2 text-cream/80">
            {i.setup.map((s) => (
              <li key={s}>— {s}</li>
            ))}
          </ul>
          <p className="mt-8 text-gold">Recommended start: {i.start}</p>
          <p className="mt-2 text-muted">{i.startWhy}</p>
          <p className="mt-6 rounded-2xl gold-border p-4 font-serif text-xl text-cream">
            {i.flow}
          </p>
        </div>
      </section>
      <CtaBand title={`Want this for your ${i.title.toLowerCase()}?`} />
    </>
  );
}
