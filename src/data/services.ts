export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  promise: string;
  problem: string;
  deliverables: string[];
  steps: string[];
  flowStep: string;
  bestFor: string[];
  levels: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "business-setup",
    number: "01",
    title: "Business Setup",
    short: "Logo, WhatsApp Business, email and a digital visiting card.",
    promise: "Look like a real brand from the first WhatsApp message.",
    problem:
      "Many Pakistani businesses still share a personal number, a blurry logo, and no email. Customers hesitate before they even ask a price.",
    deliverables: [
      "Logo and basic brand colours / fonts",
      "WhatsApp Business profile, greeting and labels",
      "Professional business email",
      "Digital visiting card with QR",
    ],
    steps: [
      "We collect your name, offer and city",
      "We design identity that feels local and premium",
      "We set up WhatsApp Business and email",
      "You receive a shareable digital card",
    ],
    flowStep: "Identity",
    bestFor: ["New shops", "Clinics", "Family businesses"],
    levels: ["L1", "L4"],
    related: ["social-media-setup", "online-presence", "personal-branding"],
  },
  {
    slug: "social-media-setup",
    number: "02",
    title: "Social Media Setup",
    short: "Facebook, Instagram, TikTok, YouTube, Google and LinkedIn — done properly.",
    promise: "Own every platform where Pakistani customers already search.",
    problem:
      "Pages are half-made, named wrong, or sitting on an ex-employee’s phone. Google cannot even find the shop.",
    deliverables: [
      "Facebook and Instagram business profiles",
      "TikTok and YouTube channels",
      "Google Business Profile",
      "LinkedIn company page",
      "Matching bios, covers and NAP (name, address, phone)",
    ],
    steps: [
      "Audit what you already have",
      "Create or recover official pages",
      "Brand every profile the same way",
      "Connect WhatsApp and Maps",
    ],
    flowStep: "Presence",
    bestFor: ["Retail", "Restaurants", "Professional services"],
    levels: ["L1", "L4"],
    related: ["business-setup", "content-creation", "online-reputation"],
  },
  {
    slug: "content-creation",
    number: "03",
    title: "Content Creation",
    short: "Photos, reels, educational posts, testimonials and owner branding.",
    promise: "Replace random phone photos with content that actually sells.",
    problem:
      "Feeds look empty or messy. Competitors with average reels still win because they show up every week.",
    deliverables: [
      "Professional photos of the shop / team / product",
      "Reels, Shorts and video clips",
      "Educational and offer explainers",
      "Customer testimonials",
      "Behind-the-scenes and founder content",
    ],
    steps: [
      "Plan a content set around your offer",
      "Shoot or source visuals",
      "Edit for Reels, feed and WhatsApp status",
      "Give you a posting rhythm",
    ],
    flowStep: "Trust",
    bestFor: ["Salons", "Restaurants", "Gyms", "Boutiques"],
    levels: ["L2", "L4"],
    related: ["personal-branding", "social-media-setup", "digital-marketing"],
  },
  {
    slug: "online-presence",
    number: "04",
    title: "Online Presence",
    short: "Website or landing page, catalogue, forms, Maps and WhatsApp chat.",
    promise: "A digital shopfront that can take inquiries at 1am.",
    problem:
      "No website, no catalogue, no Maps pin. Ads have nowhere professional to land.",
    deliverables: [
      "Website or high-converting landing page",
      "Digital catalogue / services list",
      "WhatsApp click-to-chat",
      "Contact forms",
      "Google Maps listing",
      "Online inquiry system",
    ],
    steps: [
      "Write a clear offer page",
      "Design mobile-first (most clients are on Android)",
      "Connect WhatsApp, forms and Maps",
      "Launch and test the inquiry path",
    ],
    flowStep: "Landing page / WhatsApp",
    bestFor: ["Clinics", "Real estate", "Manufacturers"],
    levels: ["L1", "L3", "L4"],
    related: ["lead-generation", "business-setup", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    short: "Meta, Google, TikTok and YouTube ads with local targeting.",
    promise: "Buy attention from the right people in your city — not the whole internet.",
    problem:
      "Boosting a random post wastes money. No targeting, no retargeting, no landing page.",
    deliverables: [
      "Meta (Facebook + Instagram) campaigns",
      "Google Ads",
      "TikTok and YouTube ads where they fit",
      "Retargeting",
      "Local area targeting",
      "Creative testing",
    ],
    steps: [
      "Define audience, city and offer",
      "Build campaigns and creatives",
      "Send traffic to a page or WhatsApp",
      "Optimise weekly from the numbers",
    ],
    flowStep: "Ad",
    bestFor: ["Real estate", "Car dealers", "Education", "Clinics"],
    levels: ["L3", "L4"],
    related: ["lead-generation", "content-creation", "analytics-growth"],
  },
  {
    slug: "lead-generation",
    number: "06",
    title: "Lead Generation System",
    short: "Audience, ads, landing page and capture — a machine for inquiries.",
    promise: "Named, reachable people asking for your service. Not empty reach.",
    problem:
      "Pages get views. The phone stays quiet. There is no system from click to lead.",
    deliverables: [
      "Target audience definition",
      "Ad + landing / WhatsApp funnel",
      "Lead capture (form, click-to-chat, call)",
      "Basic qualification questions",
    ],
    steps: [
      "Map who should inquire",
      "Build the funnel",
      "Launch and capture",
      "Hand leads to follow-up",
    ],
    flowStep: "Lead",
    bestFor: ["High-ticket local services", "B2B", "Admissions"],
    levels: ["L3", "L4"],
    related: ["digital-marketing", "crm-follow-up", "online-presence"],
  },
  {
    slug: "crm-follow-up",
    number: "07",
    title: "CRM & Follow-Up",
    short: "Customer database, WhatsApp templates, pipeline and lead status.",
    promise: "Stop leads dying in unread chats.",
    problem:
      "Ten people messaged yesterday. Nobody knows who was answered. The sale went to a competitor who replied.",
    deliverables: [
      "Customer database",
      "Lead tracking and statuses",
      "WhatsApp follow-up templates",
      "Sales pipeline",
      "Reminder rhythm",
    ],
    steps: [
      "See how you currently handle chats",
      "Set statuses: new / contacted / meeting / won / lost",
      "Write templates in simple Urdu-English",
      "Train whoever picks up the phone",
    ],
    flowStep: "Follow-up",
    bestFor: ["Real estate", "Clinics", "Construction"],
    levels: ["L4"],
    related: ["lead-generation", "analytics-growth", "personal-branding"],
  },
  {
    slug: "personal-branding",
    number: "08",
    title: "Personal Branding",
    short: "Make the owner the face of trust.",
    promise: "People buy from people — especially in Pakistan.",
    problem:
      "The business has a logo, but nobody knows the owner. Trust stays with whoever posts more.",
    deliverables: [
      "Owner profile positioning",
      "Authority content plan",
      "Audience-building on key platforms",
    ],
    steps: [
      "Find the owner’s story and expertise",
      "Shoot talking-head and day-in-the-life content",
      "Post a simple, consistent rhythm",
    ],
    flowStep: "Trust",
    bestFor: ["Real estate", "Clinics", "Education", "Consultants"],
    levels: ["L2", "L4"],
    related: ["content-creation", "online-reputation", "business-setup"],
  },
  {
    slug: "online-reputation",
    number: "09",
    title: "Online Reputation",
    short: "Google reviews, testimonials and profiles that make people feel safe.",
    promise: "New customers should feel you are the obvious choice.",
    problem:
      "Two bad reviews or zero reviews. New people pick the clinic with 200 ratings.",
    deliverables: [
      "Google review strategy",
      "Testimonials for site and social",
      "Professional public profiles",
      "Credibility assets",
    ],
    steps: [
      "Fix profiles and NAP",
      "Ask happy customers the right way",
      "Show proof on landing pages",
    ],
    flowStep: "Sale",
    bestFor: ["Clinics", "Restaurants", "Salons"],
    levels: ["L2", "L4"],
    related: ["social-media-setup", "content-creation", "online-presence"],
  },
  {
    slug: "analytics-growth",
    number: "10",
    title: "Analytics & Growth",
    short: "Reach, cost per lead, conversions and the ads that actually work.",
    promise: "Monthly decisions from numbers, not opinions.",
    problem:
      "Agencies send screenshot of likes. You still do not know what a customer cost.",
    deliverables: [
      "Reach and impressions",
      "Clicks and cost per lead",
      "Conversion tracking",
      "Best-performing ads",
      "Meetings and sales (when you share them)",
    ],
    steps: [
      "Connect pixels and basic tracking",
      "Agree which numbers matter",
      "Review monthly and scale what works",
    ],
    flowStep: "Growth",
    bestFor: ["Anyone running ads", "Multi-location businesses"],
    levels: ["L3", "L4"],
    related: ["digital-marketing", "lead-generation", "crm-follow-up"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
