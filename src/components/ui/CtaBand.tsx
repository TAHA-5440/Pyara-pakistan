import Image from "next/image";
import { GoldButton, WhatsAppButton } from "@/components/ui/Buttons";
import { waLink } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand({
  title = "We don’t just get you views. We get you customers.",
  subtitle = "Tell us your city and your business. We’ll tell you which level to start on.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] gold-border px-8 py-14 text-center md:px-16">
          <Image
            src="/cta-3d.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover object-center"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-green-950/72" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/45 to-green-950/55" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-flag/50 blur-3xl" />
          <div className="relative">
            <p className="font-urdu text-2xl text-gold/90" dir="rtl">
              پیارا پاکستان
            </p>
            <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton href={waLink()}>WhatsApp us</WhatsAppButton>
              <GoldButton href="/contact">Get a quote</GoldButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
