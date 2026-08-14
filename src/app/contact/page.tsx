import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, waLink } from "@/data/site";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "WhatsApp, call or send a quote request to Pyara Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="Tell us the business. We’ll tell you the level."
        text="We reply within 15 minutes in business hours."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-28 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] gold-border bg-green-900/40 p-6 md:p-10">
          <h2 className="font-serif text-3xl text-cream">Request a quote</h2>
          <p className="mt-2 text-sm text-muted">
            Or skip the form and send the same details on WhatsApp.
          </p>
          <div className="mt-8">
            <Suspense fallback={<p className="text-muted">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
        <aside className="rounded-[2rem] bg-gradient-to-b from-gold/20 to-green-900/40 p-8 gold-border">
          <p className="font-urdu text-2xl text-green-950 md:text-cream" dir="rtl">
            پیارا پاکستان
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream">Reach us now</h2>
          <div className="mt-8 space-y-4 text-cream/90">
            <a href={waLink()} className="flex items-center gap-3 rounded-2xl bg-[#25d366] px-4 py-3 font-semibold text-green-950">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={site.phoneHref} className="flex items-center gap-3">
              <Phone size={18} className="text-gold" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3">
              <Mail size={18} className="text-gold" /> {site.email}
            </a>
            <p className="flex items-center gap-3">
              <Clock size={18} className="text-gold" /> {site.hours}
            </p>
          </div>
          <p className="mt-10 text-sm text-muted">
            Free audit of your current pages. Clear packages. No jargon.
          </p>
        </aside>
      </section>
    </>
  );
}
