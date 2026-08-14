import { leadFlow } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

export function LeadFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "mx-auto max-w-6xl px-5"}>
      <div className="grid gap-4 md:grid-cols-6">
        {leadFlow.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.06}>
            <div className="relative h-full overflow-hidden rounded-2xl gold-border bg-green-900/50 p-5">
              <div className="font-serif text-4xl text-gold/40">{step.n}</div>
              <h3 className="mt-2 font-serif text-xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              {i < leadFlow.length - 1 && (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-6 bg-gold/40 md:block" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
