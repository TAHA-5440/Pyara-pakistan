export type Industry = {
  slug: string;
  title: string;
  hero: string;
  pain: string[];
  setup: string[];
  start: string;
  startWhy: string;
  flow: string;
  wa: string;
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    hero: "Get buyer and tenant inquiries — not just property views.",
    pain: [
      "Listings sit on Facebook with no follow-up.",
      "Leads go cold in WhatsApp overnight.",
      "The agent’s personal brand is weaker than the competitor’s reels.",
    ],
    setup: [
      "Owner / agency personal branding",
      "Listing landing pages",
      "Meta + Google lead ads",
      "WhatsApp CRM so no lead is lost",
      "Google profile for the office",
    ],
    start: "Level 3 or 4",
    startWhy: "Real estate lives on leads and follow-up. Ads without CRM waste money.",
    flow: "Ad → WhatsApp → Lead → Follow-up → Site visit → Deal",
    wa: "I run a real estate business and want Pyara Pakistan packages.",
  },
  {
    slug: "restaurants",
    title: "Restaurants & Cafes",
    hero: "Fill more tables with Maps, food photos and local ads.",
    pain: [
      "Google Maps is incomplete or has old photos.",
      "Instagram looks tasty but does not convert to bookings.",
      "Nearby people never see you.",
    ],
    setup: [
      "Menu photography and reels",
      "Google Business + reviews",
      "WhatsApp for bookings / catering",
      "Local area ads",
      "Simple landing page",
    ],
    start: "Level 2, then 3",
    startWhy: "Food sells on visuals first. Then we put those visuals in front of nearby hungry people.",
    flow: "Reel / Ad → Maps or WhatsApp → Booking → Table",
    wa: "I run a restaurant and want Pyara Pakistan packages.",
  },
  {
    slug: "salons",
    title: "Salons & Beauty",
    hero: "Turn DMs into appointments on WhatsApp.",
    pain: [
      "Work is beautiful, the page is not.",
      "No booking path except a personal number.",
      "Reviews live only in the owner’s chat.",
    ],
    setup: [
      "Signature look content (bridal, hair, skin)",
      "Instagram + TikTok setup",
      "WhatsApp catalogue / booking message",
      "Google reviews",
      "Offer landing pages for bridal season",
    ],
    start: "Level 2",
    startWhy: "Salons win on image. We make the brand look as expensive as the work.",
    flow: "Reel → Profile → WhatsApp → Appointment",
    wa: "I run a salon and want Pyara Pakistan packages.",
  },
  {
    slug: "car-dealers",
    title: "Car Dealers",
    hero: "Bring serious buyers to the yard — not tyre-kickers from the wrong city.",
    pain: [
      "Stock photos of cars with no system behind them.",
      "Calls from people who cannot buy.",
      "No retargeting after someone viewed a car.",
    ],
    setup: [
      "Inventory-style pages or catalogue",
      "Targeted ads by city and budget",
      "WhatsApp inquiry forms",
      "Follow-up templates",
      "Google presence for the showroom",
    ],
    start: "Level 3",
    startWhy: "Dealers need qualified interest. We filter with targeting and a clear next step.",
    flow: "Ad → Landing / WhatsApp → Lead → Yard visit → Sale",
    wa: "I run a car dealership and want Pyara Pakistan packages.",
  },
  {
    slug: "construction",
    title: "Construction Companies",
    hero: "Look bid-ready online and attract project inquiries.",
    pain: [
      "The company is big on ground, invisible on Google.",
      "No project portfolio site.",
      "B2B buyers check LinkedIn and find nothing.",
    ],
    setup: [
      "Corporate identity and website",
      "Project photography",
      "LinkedIn + Google",
      "Lead forms for estimates",
      "Owner / director branding",
    ],
    start: "Level 3 or 4",
    startWhy: "Construction sales are high-ticket. Presence plus a serious follow-up system.",
    flow: "Search / Ad → Website → Inquiry → Meeting → Project",
    wa: "I run a construction company and want Pyara Pakistan packages.",
  },
  {
    slug: "clinics",
    title: "Clinics & Healthcare",
    hero: "Book more appointments with trust, reviews and WhatsApp.",
    pain: [
      "Patients Google the doctor and see a weak profile.",
      "No review system.",
      "Ads feel medical-spammy instead of trustworthy.",
    ],
    setup: [
      "Doctor / clinic personal branding",
      "Google reviews and Maps",
      "Educational content (not scare ads)",
      "Appointment WhatsApp flow",
      "Landing pages per treatment",
    ],
    start: "Level 2, then 3",
    startWhy: "Healthcare is trust first. Then we run careful local ads.",
    flow: "Ad / Google → Landing → WhatsApp → Appointment",
    wa: "I run a clinic and want Pyara Pakistan packages.",
  },
  {
    slug: "education",
    title: "Education Businesses",
    hero: "Fill batches with admission inquiries, not random page likes.",
    pain: [
      "Facebook page exists, admissions still come from relatives.",
      "No landing page per course.",
      "Counsellors lose WhatsApp leads.",
    ],
    setup: [
      "Course landing pages",
      "Student testimonial content",
      "Admission lead ads",
      "Counsellor WhatsApp CRM",
      "YouTube / Reels for faculty",
    ],
    start: "Level 3",
    startWhy: "Education has seasons. We build a lead machine before the intake.",
    flow: "Ad → Course page → Lead → Counsellor follow-up → Admission",
    wa: "I run an education business and want Pyara Pakistan packages.",
  },
  {
    slug: "boutiques",
    title: "Boutiques & Fashion",
    hero: "Turn scroll-stops into DMs and orders.",
    pain: [
      "Beautiful clothes, inconsistent grid.",
      "No catalogue on WhatsApp.",
      "No retargeting of people who watched the reel.",
    ],
    setup: [
      "Lookbook photography and reels",
      "Instagram + TikTok branding",
      "WhatsApp catalogue",
      "Drop / sale landing pages",
      "Light local ads",
    ],
    start: "Level 2",
    startWhy: "Fashion is content. We make the boutique feel like a brand, then add ads.",
    flow: "Reel → DM / WhatsApp → Order",
    wa: "I run a boutique and want Pyara Pakistan packages.",
  },
  {
    slug: "manufacturers",
    title: "Manufacturers",
    hero: "Get B2B inquiries with a catalogue, LinkedIn and a serious website.",
    pain: [
      "The factory is real. The internet thinks you do not exist.",
      "No English/Urdu catalogue online.",
      "Export or wholesale buyers cannot find you.",
    ],
    setup: [
      "Corporate identity",
      "Product catalogue site",
      "LinkedIn + Google",
      "Inquiry forms",
      "Targeted B2B campaigns",
    ],
    start: "Level 1, then 3",
    startWhy: "First look export-ready. Then we put the catalogue in front of buyers.",
    flow: "Search / Ad → Catalogue → Inquiry → Meeting",
    wa: "I run a manufacturing business and want Pyara Pakistan packages.",
  },
  {
    slug: "gyms",
    title: "Gyms & Fitness",
    hero: "Fill memberships with local ads, transformations and WhatsApp.",
    pain: [
      "Only members’ stories, no system.",
      "Nearby people join a flashier gym.",
      "Trial offers are not landing anywhere.",
    ],
    setup: [
      "Trainer and transformation content",
      "Google Maps + reviews",
      "Trial offer landing page",
      "Local ads",
      "WhatsApp follow-up for trials",
    ],
    start: "Level 2 + local ads",
    startWhy: "Gyms sell energy and proof. Then we target the 3–5km radius.",
    flow: "Ad → Trial page → WhatsApp → Walk-in → Membership",
    wa: "I run a gym and want Pyara Pakistan packages.",
  },
  {
    slug: "photography",
    title: "Photography Studios",
    hero: "Book more weddings and shoots from the work you already do.",
    pain: [
      "Portfolio is on a Google Drive link.",
      "Couples book whoever posts more reels.",
      "No package page to send in DMs.",
    ],
    setup: [
      "Cinematic reel edit of existing work",
      "Package landing pages",
      "Instagram + YouTube + Google",
      "WhatsApp booking flow",
      "Seasonal wedding ads",
    ],
    start: "Level 2",
    startWhy: "You already have the art. We turn it into a booking machine.",
    flow: "Reel → Package page → WhatsApp → Booking",
    wa: "I run a photography studio and want Pyara Pakistan packages.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
