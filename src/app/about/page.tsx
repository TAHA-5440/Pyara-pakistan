import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Pyara Pakistan — built for the businesses this country actually runs on.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The brand"
        title="Built for the businesses this country actually runs on"
        text="Shops, clinics, yards, classrooms, kitchens. Pyara Pakistan exists so they can look as serious online as they are in real life."
      />
      <section className="mx-auto max-w-3xl px-5 pb-16 text-lg leading-relaxed text-muted">
        <p>
          The name is affection — <span className="font-urdu text-gold" dir="rtl">پیارا پاکستان</span>{" "}
          — and the work is commercial. We do not sell virality. We sell a chain that ends in a
          customer.
        </p>
        <p className="mt-6">
          Most agencies sell posts. We install identity, presence, content, a page, ads, and
          follow-up so WhatsApp stops being a graveyard of unanswered chats.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 md:grid-cols-2">
        <div className="rounded-3xl gold-border p-8">
          <h2 className="font-serif text-3xl text-cream">Mission</h2>
          <p className="mt-3 text-muted">
            Take Pakistani offline businesses online with a system they can understand in one sitting.
          </p>
        </div>
        <div className="rounded-3xl gold-border p-8">
          <h2 className="font-serif text-3xl text-cream">Vision</h2>
          <p className="mt-3 text-muted">
            Every local business that deserves customers can be found, trusted, and messaged in
            minutes.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 md:grid-cols-4">
        {["Local", "Clear packages", "Follow-up", "Honest numbers"].map((v) => (
          <div key={v} className="rounded-3xl gold-border p-6 text-center font-serif text-2xl text-cream">
            {v}
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">We serve</p>
        <p className="mt-3 font-serif text-2xl text-cream">{site.cities.join(" · ")}</p>
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-gold">Follow us</p>
        <SocialLinks className="mt-4" />
      </section>
      <CtaBand />
    </>
  );
}
