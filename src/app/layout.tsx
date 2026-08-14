import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Noto_Nastaliq_Urdu } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Offline business to online customers`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://pyarapakistan.com"),
  openGraph: {
    title: site.name,
    description: site.tagline,
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${urdu.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
