import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="pattern-star relative min-h-full">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(224,195,106,0.12),transparent_40%),radial-gradient(circle_at_100%_30%,rgba(1,65,28,0.55),transparent_45%)]" />
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
