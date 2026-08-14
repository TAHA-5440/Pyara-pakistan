export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  timeframe: string;
  challenge: string;
  work: string[];
  result: string;
  quote: string;
  sample?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinic-appointments",
    industry: "Clinics",
    title: "A neighbourhood clinic that was invisible on Google",
    metric: "3×",
    metricLabel: "appointment inquiries",
    timeframe: "First 45 days of the system",
    challenge:
      "The doctor was excellent. The Google profile was empty, Instagram was personal, and WhatsApp was a family group.",
    work: [
      "Google Business + review rhythm",
      "Simple treatment landing page",
      "WhatsApp appointment script",
      "Local ads after the page was ready",
    ],
    result:
      "Inquiries became appointments because someone always replied with a time slot — not a thumbs-up emoji two days later.",
    quote: "People now find us the way they find everything else — on the phone.",
    sample: true,
  },
  {
    slug: "real-estate-followup",
    industry: "Real Estate",
    title: "An agency drowning in unread WhatsApp leads",
    metric: "0 lost",
    metricLabel: "chats in the first week of CRM",
    timeframe: "Level 4 install",
    challenge:
      "Ads were already running. Leads arrived. Half of them never got a second message.",
    work: [
      "Lead statuses and pipeline",
      "Urdu-English WhatsApp templates",
      "Landing page cleanup",
      "Weekly cost-per-lead review",
    ],
    result:
      "The same ad budget produced meetings because follow-up finally existed.",
    quote: "The problem was never traffic. It was what happened after the ping.",
    sample: true,
  },
  {
    slug: "restaurant-maps",
    industry: "Restaurants",
    title: "A restaurant that looked closed online",
    metric: "Maps",
    metricLabel: "photos, menu, reviews live",
    timeframe: "Level 2 in 3 weeks",
    challenge:
      "Food was good. Google showed a dark doorway and the wrong phone number.",
    work: [
      "Menu and interior shoot",
      "Reels of service and signature dishes",
      "Google profile rebuilt",
      "WhatsApp for catering and bookings",
    ],
    result:
      "Nearby people could finally see the table they were about to sit at.",
    quote: "We stopped explaining the restaurant. The phone started explaining it for us.",
    sample: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
