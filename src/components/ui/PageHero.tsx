"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const AmbientScene = dynamic(() => import("@/components/three/AmbientScene"), {
  ssr: false,
});

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36">
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <AmbientScene />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl leading-tight text-cream md:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
