import { WhatsAppButton, GoldButton } from "@/components/ui/Buttons";
import { waLink } from "@/data/site";

export const metadata = { title: "Thank you" };

export default function ThankYouPage() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="font-urdu text-3xl text-gold" dir="rtl">
        شکریہ
      </p>
      <h1 className="mt-4 font-serif text-5xl text-cream">We got your request.</h1>
      <p className="mt-4 text-muted">
        WhatsApp us now if you want a faster reply. In business hours we come back within 15
        minutes.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <WhatsAppButton href={waLink()}>WhatsApp us now</WhatsAppButton>
        <GoldButton href="/">Back home</GoldButton>
      </div>
    </section>
  );
}
