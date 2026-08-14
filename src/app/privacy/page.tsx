import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <article className="mx-auto max-w-3xl space-y-4 px-5 pb-24 text-muted">
        <p>
          Pyara Pakistan collects the name, phone, city and business details you submit so we can
          contact you about services. We do not sell lead data.
        </p>
        <p>
          WhatsApp and phone are used for follow-up. Analytics cookies may be used to understand
          which pages and buttons help owners find the right package.
        </p>
        <p>To ask for your data to be deleted, email us from the contact page.</p>
      </article>
    </>
  );
}
