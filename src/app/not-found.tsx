import { GoldButton, WhatsAppButton } from "@/components/ui/Buttons";
import { waLink } from "@/data/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl text-cream">
        This page went offline. Your business shouldn’t.
      </h1>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <GoldButton href="/">Home</GoldButton>
        <GoldButton href="/packages">Packages</GoldButton>
        <WhatsAppButton href={waLink()}>WhatsApp</WhatsAppButton>
      </div>
    </section>
  );
}
