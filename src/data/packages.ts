export type Package = {
  slug: string;
  level: 1 | 2 | 3 | 4;
  name: string;
  promise: string;
  bestFor: string;
  price: string;
  featured?: boolean;
  badge?: string;
  includes: string[];
  notIncluded: string[];
  timeline: string;
  month: string;
  cta: string;
  wa: string;
};

export const packages: Package[] = [
  {
    slug: "digital-setup",
    level: 1,
    name: "Digital Setup",
    promise: "Create your online identity and basic presence.",
    bestFor: "New businesses and shops with almost nothing online.",
    price: "Starting quote",
    includes: [
      "Logo and brand basics",
      "WhatsApp Business setup",
      "Professional email",
      "Digital visiting card",
      "Social profiles (FB, IG, TikTok, YouTube, Google, LinkedIn)",
      "Google Maps / Business Profile",
      "Simple landing or link page",
    ],
    notIncluded: ["Paid ads", "Monthly content shoot", "Full CRM"],
    timeline: "7–14 days",
    month: "You leave with live profiles, a card, and a page you can share.",
    cta: "Start with Digital Setup",
    wa: "I want Level 1 Digital Setup for my business.",
  },
  {
    slug: "content-branding",
    level: 2,
    name: "Content & Branding",
    promise: "Look professional and start attracting attention.",
    bestFor: "Businesses that exist online but look amateur or inactive.",
    price: "Starting quote",
    includes: [
      "Everything missing from Level 1",
      "Professional photos",
      "Reels / Shorts",
      "Educational and offer content",
      "Testimonials and behind-the-scenes",
      "Owner personal branding",
      "Google review kickoff",
    ],
    notIncluded: ["Heavy ad spend management", "Full CRM pipeline"],
    timeline: "2–4 weeks",
    month: "Your pages look alive. People start trusting the face behind the shop.",
    cta: "Upgrade to Content & Branding",
    wa: "I want Level 2 Content & Branding for my business.",
  },
  {
    slug: "marketing-lead-generation",
    level: 3,
    name: "Marketing & Leads",
    promise: "Run ads that bring qualified inquiries.",
    bestFor: "Owners ready to spend on ads and need customers now.",
    price: "Custom quote",
    featured: true,
    badge: "Get customers",
    includes: [
      "Conversion landing page / WhatsApp funnel",
      "Meta, Google, TikTok or YouTube ads (as relevant)",
      "Local targeting and retargeting",
      "Lead capture system",
      "Weekly optimisation",
      "Lead reporting",
    ],
    notIncluded: [
      "Ad spend (you pay Facebook/Google directly)",
      "Full CRM install (that’s Level 4)",
    ],
    timeline: "Funnel in ~10–14 days, then ongoing ads",
    month: "Inquiries arrive. We tell you cost per lead, not likes.",
    cta: "Get Leads",
    wa: "I want Level 3 Marketing & Lead Generation for my business.",
  },
  {
    slug: "complete-transformation",
    level: 4,
    name: "Complete Transformation",
    promise: "The full growth system — branding to CRM to monthly reviews.",
    bestFor: "Serious owners who want the whole offline-to-online engine.",
    price: "Flagship quote",
    badge: "Complete system",
    includes: [
      "Branding + content + social + website",
      "Ads and lead generation",
      "CRM and WhatsApp follow-up",
      "Reputation management",
      "Analytics and monthly growth reviews",
      "Owner branding",
    ],
    notIncluded: ["Ad media spend", "Printing / outdoor"],
    timeline: "30-day install, then monthly partnership",
    month: "A machine: Ad → WhatsApp → Lead → Follow-up → Meeting → Sale.",
    cta: "Book a transformation consult",
    wa: "I want Level 4 Complete Digital Transformation for my business.",
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export const comparisonRows = [
  { service: "Business setup", l1: "Yes", l2: "If missing", l3: "If missing", l4: "Yes" },
  { service: "Social setup", l1: "Yes", l2: "If missing", l3: "If missing", l4: "Yes" },
  { service: "Content creation", l1: "Light", l2: "Yes", l3: "Ad creative", l4: "Yes" },
  { service: "Website / page", l1: "Basic", l2: "Improved", l3: "Landing", l4: "Full funnel" },
  { service: "Paid ads", l1: "—", l2: "—", l3: "Yes", l4: "Yes" },
  { service: "Lead system", l1: "Buttons", l2: "Organic", l3: "Yes", l4: "Yes" },
  { service: "CRM & follow-up", l1: "Hygiene", l2: "Templates", l3: "Simple", l4: "Full" },
  { service: "Personal branding", l1: "Optional", l2: "Yes", l3: "As needed", l4: "Yes" },
  { service: "Reputation", l1: "Google", l2: "Reviews", l3: "On pages", l4: "Ongoing" },
  { service: "Analytics", l1: "Basic", l2: "Content", l3: "Ads + leads", l4: "Full growth" },
] as const;
