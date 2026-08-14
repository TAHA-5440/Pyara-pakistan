import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pyarapakistan.com";
  const now = new Date();
  const paths = [
    "",
    "/services",
    "/packages",
    "/industries",
    "/process",
    "/work",
    "/about",
    "/faq",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...packages.map((p) => `/packages/${p.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...caseStudies.map((c) => `/work/${c.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
