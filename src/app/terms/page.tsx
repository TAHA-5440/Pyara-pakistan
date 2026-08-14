import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <article className="mx-auto max-w-3xl space-y-4 px-5 pb-24 text-muted">
        <p>
          Quotes on this website are invitations to talk, not a contract. A package starts when
          both sides agree in writing or WhatsApp confirmation and payment terms are met.
        </p>
        <p>
          Ad spend on Meta, Google, TikTok or YouTube is paid by the client to the platform. Pages,
          domains and ad accounts should remain in the client’s name.
        </p>
        <p>Replace this page with a lawyer-reviewed version before taking large retainers.</p>
      </article>
    </>
  );
}
