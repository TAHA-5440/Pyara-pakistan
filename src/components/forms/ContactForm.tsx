"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { industries } from "@/data/industries";
import { packages } from "@/data/packages";
import { site, waLink } from "@/data/site";

const cities = [...site.cities, "Other"];

export function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const preset = params.get("package") || "";
  const [loading, setLoading] = useState(false);

  function collect(form: FormData) {
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const city = String(form.get("city") || "");
    const industry = String(form.get("industry") || "");
    const presence = String(form.get("presence") || "");
    const pack = String(form.get("package") || "");
    const message = String(form.get("message") || "");
    const business = String(form.get("business") || "");
    return `Assalamualaikum, I am ${name} (${phone}) from ${city}.
Business: ${business || "—"}
Industry: ${industry}
Online now: ${presence}
Package: ${pack}
${message}`;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const text = collect(form);
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, ...Object.fromEntries(form) }),
    }).catch(() => {});
    router.push("/thank-you");
  }

  function onWhatsApp(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const text = collect(new FormData(form));
    window.open(waLink(text), "_blank");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-left">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" required placeholder="03xx..." />
        <label className="grid gap-1 text-sm">
          <span className="text-cream/80">City</span>
          <select name="city" required className="field">
            <option value="">Select</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <Field label="Business name" name="business" />
        <label className="grid gap-1 text-sm">
          <span className="text-cream/80">Industry</span>
          <select name="industry" required className="field">
            <option value="">Select</option>
            {industries.map((i) => (
              <option key={i.slug}>{i.title}</option>
            ))}
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-cream/80">Current online presence</span>
          <select name="presence" required className="field">
            <option value="">Select</option>
            <option>Nothing online</option>
            <option>Social only</option>
            <option>Website</option>
            <option>Already running ads</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="text-cream/80">Interested package</span>
        <select name="package" defaultValue={preset} className="field">
          <option value="Not sure">Not sure — help me choose</option>
          {packages.map((p) => (
            <option key={p.slug} value={`Level ${p.level} ${p.name}`}>
              Level {p.level} · {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-cream/80">Message</span>
        <textarea name="message" rows={4} required className="field min-h-28" />
      </label>
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-shimmer rounded-full px-6 py-3 text-sm font-semibold text-green-950"
        >
          {loading ? "Sending…" : "Request a callback"}
        </button>
        <button
          type="button"
          onClick={onWhatsApp}
          className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-green-950"
        >
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-cream/80">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="field"
      />
    </label>
  );
}
