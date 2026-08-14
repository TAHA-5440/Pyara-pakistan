export const site = {
  name: "Pyara Pakistan",
  urdu: "پیارا پاکستان",
  tagline: "We don't just get you views. We get you customers.",
  description:
    "Pyara Pakistan takes offline businesses online — branding, social, content, websites, ads, CRM and follow-up — so local shops, clinics and companies get real customers.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567",
  phone: process.env.NEXT_PUBLIC_PHONE || "+92 300 1234567",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "tel:+923001234567",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@pyarapakistan.com",
  hours: "Mon–Sat · 11am–8pm PKT",
  cities: [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Peshawar",
    "Multan",
    "Quetta",
  ],
  social: {
    tiktok: "https://www.tiktok.com/@pyaarpakistan",
    facebook: "https://www.facebook.com/share/19Y5CKmpfz/",
    instagram: "https://www.instagram.com/pyaarpakistan",
    youtube: "https://www.youtube.com/@pyaarapakistan6961",
  },
} as const;

export const socialLinks = [
  { name: "TikTok", href: site.social.tiktok },
  { name: "Facebook", href: site.social.facebook },
  { name: "Instagram", href: site.social.instagram },
  { name: "YouTube", href: site.social.youtube },
] as const;

export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ||
      "Assalamualaikum, I want to know about Pyara Pakistan packages for my business.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;
