import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { faqs } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/Buttons";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions Pakistani business owners ask before going online with Pyara Pakistan.",
};

const cats = [...new Set(faqs.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you spend"
      >
        <WhatsAppButton href={waLink("I have a question about Pyara Pakistan.")}>
          Still stuck? WhatsApp
        </WhatsAppButton>
      </PageHero>
      <section className="mx-auto max-w-3xl px-5 pb-16">
        {cats.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">{cat}</h2>
            <div className="divide-y divide-gold/15 rounded-3xl gold-border">
              {faqs
                .filter((f) => f.category === cat)
                .map((f) => (
                  <details key={f.q} className="px-6 py-4">
                    <summary className="cursor-pointer text-cream">{f.q}</summary>
                    <p className="mt-2 text-sm text-muted">{f.a}</p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
