import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center">
        <span className="absolute inset-0 rounded-full bg-gold/20 blur-md" />
        <svg viewBox="0 0 40 40" className="relative h-10 w-10">
          <circle cx="20" cy="20" r="18" fill="#06241a" stroke="#e0c36a" strokeWidth="1.2" />
          <path
            d="M20 8.5 L22.1 16.2 L30 14 L23.6 20 L30 26 L22.1 23.8 L20 31.5 L17.9 23.8 L10 26 L16.4 20 L10 14 L17.9 16.2 Z"
            fill="#e0c36a"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg tracking-wide text-cream group-hover:text-gold transition-colors">
          Pyara Pakistan
        </span>
        <span className="block font-urdu text-[11px] text-gold/80" dir="rtl">
          پیارا پاکستان
        </span>
      </span>
    </Link>
  );
}
