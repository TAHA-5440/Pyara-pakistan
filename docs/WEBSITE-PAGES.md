# Pyara Pakistan — Website Pages Spec

**Product:** Pyara Pakistan website  
**Version:** 1.0  
**Date:** 14 August 2026  
**Companion doc:** [PRD.md](./PRD.md)

This file is the **page-by-page build guide**. It answers: how many pages, what each page is for, what sits on it, and how it should look.

Design direction is taken from high-converting agency sites on **Dribbble**, **Behance**, and **Awwwards** — not copied shot-for-shot. Use the linked searches at the end of this file while designing.

---

## 1. How many pages?

### Launch total: **41 pages**

| Group | Count | Notes |
| --- | --- | --- |
| Core pages | 11 | Unique layouts |
| Service detail pages | 10 | Same template, different content |
| Package detail pages | 4 | Same template, different content |
| Industry landing pages | 11 | Same template, different content |
| Case study pages | 3 | Same template; placeholders OK at launch |
| System pages | 2 | Thank-you + 404 |
| **Total** | **41** | |

Legal pages (Privacy, Terms) are included in the 11 core pages.

### What is *not* in v1 (do not build yet)

- Blog / insights
- City pages (Karachi, Lahore, Islamabad)
- Careers
- Client login / dashboard
- Urdu full-site version
- Online checkout

Those are listed in **Section 8** as later pages.

---

## 2. Full sitemap

```
pyarapakistan.com
│
├── /                          Home
├── /services                  All 10 services
│   ├── /services/business-setup
│   ├── /services/social-media-setup
│   ├── /services/content-creation
│   ├── /services/online-presence
│   ├── /services/digital-marketing
│   ├── /services/lead-generation
│   ├── /services/crm-follow-up
│   ├── /services/personal-branding
│   ├── /services/online-reputation
│   └── /services/analytics-growth
│
├── /packages                  4 levels compared
│   ├── /packages/digital-setup              Level 1
│   ├── /packages/content-branding           Level 2
│   ├── /packages/marketing-lead-generation  Level 3
│   └── /packages/complete-transformation    Level 4
│
├── /industries
│   ├── /industries/real-estate
│   ├── /industries/restaurants
│   ├── /industries/salons
│   ├── /industries/car-dealers
│   ├── /industries/construction
│   ├── /industries/clinics
│   ├── /industries/education
│   ├── /industries/boutiques
│   ├── /industries/manufacturers
│   ├── /industries/gyms
│   └── /industries/photography
│
├── /process                   How the system works
├── /work                      Results / case studies hub
│   ├── /work/sample-1
│   ├── /work/sample-2
│   └── /work/sample-3
├── /about
├── /faq
├── /contact
├── /thank-you
├── /privacy
├── /terms
└── 404
```

---

## 3. Navigation (every page)

### Desktop header (sticky)

```
[Logo: Pyara Pakistan]   Services ▾   Packages ▾   Industries   Work   About     [WhatsApp]  [Get a quote]
```

- **Services ▾** mega-menu: 10 service names in 2 columns + “View all services”
- **Packages ▾**: Level 1–4 short names + “Compare packages”
- Right side: green WhatsApp button + gold/navy **Get a quote** button
- Header stays thin. Do not put 10 links in the top bar.

### Mobile header

```
[Logo]                              [WhatsApp icon]  [☰]
```

Drawer: Services, Packages, Industries, Work, Process, About, FAQ, Contact, Get a quote.

### Mobile sticky bottom bar (all pages except thank-you)

```
[ Call ]     [ WhatsApp us ]     [ Get a quote ]
```

This is a Dribbble / local-business pattern that converts on Pakistani phones. Keep it always visible.

### Footer (all pages)

Four columns:

1. Brand + one-line promise + social icons (FB, IG, TikTok, YouTube, LinkedIn)
2. Services (10 links)
3. Packages + Industries
4. Contact: phone, WhatsApp, email, city, map pin

Bottom strip: Privacy · Terms · © Pyara Pakistan

### Floating WhatsApp button

Round button, bottom-right on desktop. Hidden on mobile if the sticky bar already has WhatsApp (avoid two WhatsApp buttons).

---

## 4. Global look (so every page feels like one site)

Inspired by premium agency shots on Dribbble (navy corporate sites, gold accent CTAs, big type, icon grids, numbered process).

| Element | Direction |
| --- | --- |
| Background | Off-white / cream, not pure grey SaaS |
| Primary | Deep navy |
| Accent | Gold / warm amber (CTAs, highlights, Level 4 badge) |
| Success / chat | WhatsApp green only on chat buttons |
| Type | Large confident headlines, short body copy |
| Cards | Soft shadow, rounded 16–24px, icon on top |
| Imagery | Pakistani shops, clinics, owners, phones — not Silicon Valley stock |
| Motif | Shop → laptop/phone → customers (from the reference infographic) |
| Motion | Light: fade-up on sections, number counters, no heavy 3D hero |

**Page rhythm that Dribbble agency sites repeat:**  
Hero → proof strip → offer → process → proof → FAQ → big CTA.

Every core page should end with the same **Final CTA band**:

> We don’t just get you views. We get you customers.  
> [WhatsApp us] [See packages]

---

## 5. Core pages (11)

---

### PAGE 01 — Home `/`

**Job:** In 10 seconds, a shop/clinic owner understands: *these people take offline businesses online and get customers.* Then they tap WhatsApp or view packages.

**Layout style:** Long scrolling landing page (Dribbble “marketing agency homepage” — full-width hero, icon bento, 4 pricing cards, horizontal process).

**Sections, top to bottom:**

| # | Section | What is in it |
| --- | --- | --- |
| 1 | Hero | Eyebrow: “Offline business → Online growth”. H1: *Take your offline business online. Get customers, not just views.* Sub: one sentence about identity, content, website, ads, follow-up. Two buttons: **WhatsApp us** / **See 4 packages**. Right side: illustration or photo of a Pakistani shop + phone mockup. Tiny trust line: “For shops, clinics, restaurants, real estate & more.” |
| 2 | Logo / proof strip | “Trusted by local businesses in” + city chips (Karachi, Lahore, Islamabad…) or 6 industry icons scrolling. If no clients yet, use industry icons, not fake logos. |
| 3 | Problem | Heading: *Your business is real. Your online presence is not.* 4 pain cards: no Google listing, dead Instagram, ads with no follow-up, leads lost on WhatsApp. |
| 4 | Solution | Heading: *Pyara Pakistan is the complete growth system.* Short paragraph. 4 outcome pills: More visibility · Quality leads · More customers · Higher growth. |
| 5 | 10 services | Heading: *Everything your business needs to go online.* 10 icon cards in a 5×2 or 2-column mobile grid. Each card: icon, name, 8-word line, “Learn more →”. Links to service pages. |
| 6 | 4 packages | Heading: *Start at your level. Upgrade when ready.* 4 stacked/side cards. Level 4 gets a “Complete system” gold badge. Each card: name, 4 bullets, “Starting from / Get a quote”, CTA. Link to package pages. Comparison link: “See full comparison →” |
| 7 | Lead flow | Heading: *How we get you customers.* Horizontal steps: **Ad → Landing / WhatsApp → Lead → Follow-up → Meeting → Sale.** This is the hero diagram of the brand. Numbered 01–06, connected by a line. Desktop: one row. Mobile: vertical timeline. |
| 8 | Industries | Heading: *Who we help.* 11 small tiles with icons. Link to `/industries`. |
| 9 | Results teaser | 3 case-study cards (or “sample outcomes” if real work is not ready): industry, one metric, one sentence, “Read story”. |
| 10 | Testimonials | 3 quotes. Photo + name + business type. If empty at launch: skip this section rather than invent reviews. |
| 11 | FAQ | 6–8 accordions. Link “See all questions →” to `/faq`. |
| 12 | Final CTA | Full-width navy band + WhatsApp + Get a quote. |

**Primary CTA:** WhatsApp  
**Secondary CTA:** Packages

---

### PAGE 02 — Services overview `/services`

**Job:** Show all 10 modules as a catalogue. Visitor picks one to learn more, or jumps to packages.

**Layout style:** Dribbble “services grid / bento” pages — large H1, then a generous card grid, not a long essay.

**Sections:**

1. **Hero** — H1: *10 ways we take your business online.* Sub: these modules combine into 4 packages. CTA: Compare packages.
2. **Service grid** — 10 large cards. Each: numbered 01–10, icon, title, 2-line description, 3 bullet deliverables, link.
3. **How they fit packages** — small table or diagram: L1 uses setup + social; L4 uses all 10.
4. **“Not sure where to start?”** — 3 buttons: I have nothing online → L1 · I look unprofessional → L2 · I need leads now → L3.
5. **Final CTA**

---

### PAGE 03 — Packages `/packages`

**Job:** Help the owner choose Level 1, 2, 3, or 4. This is the money page.

**Layout style:** Dribbble / SaaS pricing pages — 4 columns on desktop, stacked cards on mobile, one column highlighted, FAQ under the table.

**Sections:**

1. **Hero** — H1: *4 levels. One path from shop to growth system.* Sub: start small, upgrade anytime. CTA: WhatsApp “Help me choose”.
2. **Package cards (main)** — 4 cards:

   | Card | Highlight | Show |
   | --- | --- | --- |
   | Level 1 Digital Setup | Quiet / foundation | Identity, WhatsApp, social, Google, basic page |
   | Level 2 Content & Branding | Popular for existing pages | Photos, reels, owner brand, reviews |
   | Level 3 Marketing & Leads | Highlight as “Get customers” | Ads, landing, targeting, lead capture |
   | Level 4 Complete Transformation | Gold border + badge | Everything + CRM + analytics |

   Each card: price or “Custom quote”, 6–8 inclusions, “Best for…”, button **Request this package** (pre-fills contact form), text link **See full details**.

3. **Comparison table** — rows = 10 service areas. Columns = L1 L2 L3 L4. Check / dash / “Full”. On mobile: horizontal scroll inside a card, or accordion per level (do not squeeze 5 columns onto a 360px screen).
4. **Upgrade path** — visual: L1 → L2 → L3 → L4 with one line each.
5. **“What’s not included”** — honesty block (ad spend is client’s budget, printing, etc.).
6. **FAQ** — pricing, timeline, who owns the accounts.
7. **Final CTA**

**Do not** hide prices forever if you have starting PKR amounts. If not locked, write “Starting from — get a quote in 15 minutes.”

---

### PAGE 04 — Industries `/industries`

**Job:** “They work with businesses like mine.”

**Layout style:** Dribbble industry / “who we serve” icon galleries — 11 equal tiles, not a blog.

**Sections:**

1. **Hero** — H1: *Built for Pakistani businesses that still run offline.*
2. **Industry grid** — 11 cards: icon, name, 1 pain line, 1 result line, “See plan for [industry] →”.
3. **Note** — “Don’t see your business? We still help. WhatsApp us.”
4. **Final CTA**

---

### PAGE 05 — Process `/process`

**Job:** Remove fear. Show how work starts, what the client must do, and the customer-getting flow.

**Layout style:** Dribbble “how it works” numbered timelines (AS Genius / ONYX style: 4–6 big steps, then a second timeline for the lead funnel).

**Sections:**

1. **Hero** — H1: *From first WhatsApp to a system that brings customers.*
2. **Working with us (onboarding)** — 5 steps:  
   01 Discover call · 02 We audit your current online presence · 03 You pick a level · 04 We build (X days) · 05 You get leads + a monthly review (L3/L4).
3. **The customer engine** — the 6-step flow again, larger, with a one-line explanation under each step. This page is the canonical home of that diagram.
4. **What we need from you** — access to pages, photos of the shop, offer/prices, who replies on WhatsApp.
5. **Timelines** — simple: L1 7–14 days, L2 2–4 weeks, L3 setup then ongoing ads, L4 30-day install then monthly.
6. **Final CTA** — Book a discovery call / WhatsApp.

---

### PAGE 06 — Work `/work`

**Job:** Proof. Even with 3 placeholder case studies, the layout must look like a real results hub.

**Layout style:** Dribbble case-study grids — large image, industry tag, one giant metric (`+40 leads / month`), short title.

**Sections:**

1. **Hero** — H1: *Results, not just posts.* Sub: visibility, leads, customers, growth.
2. **Filter chips** — All · Real estate · Clinics · Restaurants · etc. (can be visual only at launch).
3. **Case study grid** — 3+ cards. Image, industry, metric, 1 sentence, link.
4. **Metrics band** — 4 big numbers (use real ones when you have them; until then use outcome labels without fake stats).
5. **Final CTA**

If there is zero real work at launch: keep the grid but label cards as **“Example engagement”** or show **before/after mockups of profiles** clearly marked as samples. Never fake client names.

---

### PAGE 07 — About `/about`

**Job:** Make Pyara Pakistan feel like a real Pakistani team, not a nameless agency.

**Layout style:** Dribbble about pages — oversized founder photo, short story, values in 4 tiles, optional team row.

**Sections:**

1. **Hero** — H1: *Pyara Pakistan. Built for the businesses this country actually runs on.* Photo of founder/team or a strong brand still (shop + flag motif, tasteful).
2. **Story** — 3 short paragraphs: why the name, why offline-to-online, why customers not views.
3. **Mission / vision** — two cards.
4. **Values** — 4 tiles: Local · Clear packages · Follow-up · Honest numbers.
5. **Team** — photos, names, roles. If solo at launch: founder + “specialist partners” (design, ads, video) without fake staff.
6. **Pakistan strip** — cities you serve.
7. **Final CTA**

---

### PAGE 08 — FAQ `/faq`

**Job:** SEO + objection handling. Sales team can send this link.

**Layout style:** Two-column: categories left, accordions right (desktop). Mobile: stacked categories.

**Categories:**

- About Pyara Pakistan
- Packages & pricing
- Timelines
- Ads & leads
- WhatsApp / CRM
- Who owns the accounts

**Minimum 12 questions.** Include the 10 from the PRD plus:

- Do I pay for Facebook/Google ads separately? (**Yes. Ad spend is yours.**)
- Will you post every day forever? (depends on level)
- Can I start with Level 1 and upgrade?

CTA under the list: still stuck? WhatsApp.

---

### PAGE 09 — Contact `/contact`

**Job:** Convert high-intent visitors. This is the form destination from every “Get a quote”.

**Layout style:** Dribbble split contact pages — **left: form**, **right: WhatsApp / call / address**. Dark navy right panel is a common pattern.

**Left — form fields:**

| Field | Required |
| --- | --- |
| Full name | Yes |
| Phone (PK) | Yes |
| City | Yes (dropdown + Other) |
| Business name | No |
| Industry | Yes (11 + Other) |
| Current online presence | Yes (None / Social only / Website / Already running ads) |
| Interested package | Yes (L1 / L2 / L3 / L4 / Not sure) |
| Monthly ad budget | No (ranges) |
| Instagram or Facebook URL | No |
| Message | Yes |

Submit → `/thank-you` + notify team.

**Right — contact card:**

- WhatsApp (big)
- Call
- Email
- Hours (e.g. Mon–Sat 11am–8pm PKT)
- City / map embed if you have an office
- Line: *We reply within 15 minutes in business hours.*

**Below:** 3 reasons to contact (free audit, clear packages, no jargon).

If the user arrived from a package page, **pre-select that package**.

---

### PAGE 10 — Privacy `/privacy`

Standard privacy page. Plain language.

Must say: we collect form data to contact you; we do not sell leads; WhatsApp/phone used for follow-up; cookies/analytics if enabled.

---

### PAGE 11 — Terms `/terms`

Service website terms: quotes are not contracts; ad spend is client-paid; client owns accounts; payment/refund policy placeholder until legal review.

---

## 6. Template pages

These are not 25 unique designs. They are **3 templates** reused with different copy, icons, and examples.

---

### TEMPLATE A — Service detail (10 pages) `/services/[slug]`

**Job:** Rank for “WhatsApp Business setup Pakistan”, “CRM for local business”, etc., and send the reader to the right package.

**Layout style:** Dribbble service inner pages — icon + H1, deliverables list, “included in levels”, related case, CTA.

**Same sections on all 10:**

1. **Hero** — service name, 1-line promise, which packages include it, CTA WhatsApp + See packages.
2. **Problem** — what the offline business lacks today.
3. **What you get** — 5–8 deliverable bullets (from PRD catalogue).
4. **How it works** — 3–4 steps.
5. **Where it sits in the 6-step flow** — highlight the relevant step (e.g. Digital Marketing = “Ad”).
6. **Best for** — 3 industries.
7. **Included in** — L1/L2/L3/L4 chips.
8. **Related services** — 3 cards.
9. **Final CTA**

**The 10 pages and their hero focus:**

| URL | H1 focus | Push toward |
| --- | --- | --- |
| `/services/business-setup` | Logo, WhatsApp Business, email, digital card | Level 1 |
| `/services/social-media-setup` | FB, IG, TikTok, YouTube, Google, LinkedIn | Level 1 |
| `/services/content-creation` | Photos, reels, education, testimonials, BTS, owner | Level 2 |
| `/services/online-presence` | Website, catalogue, forms, Maps, inquiry | Level 1–3 |
| `/services/digital-marketing` | Meta, Google, TikTok, YouTube, retargeting, local ads | Level 3 |
| `/services/lead-generation` | Audience → ads → page → capture | Level 3 |
| `/services/crm-follow-up` | Database, templates, pipeline, no lost chats | Level 4 |
| `/services/personal-branding` | Owner as the face of trust | Level 2 / 4 |
| `/services/online-reputation` | Google reviews, testimonials, credibility | Level 2 / 4 |
| `/services/analytics-growth` | Reach, CPL, conversions, best ads | Level 4 |

---

### TEMPLATE B — Package detail (4 pages) `/packages/[slug]`

**Job:** Close that specific level. Repeat the inclusions until there is no confusion.

**Layout style:** Dribbble “single plan” / product landing — hero, what’s included, who it’s for, timeline, related services, quote CTA.

**Same sections on all 4:**

1. **Hero** — Level number + name. Promise line. Price or “Get a quote”. Buttons: Request this package · WhatsApp.
2. **Best for** — 3 bullets + 3 industries.
3. **What’s included** — checklist grouped by service area.
4. **What’s not included**
5. **Timeline**
6. **Sample week / month** (what the client will see)
7. **Upgrade next** — one card pointing to the next level
8. **FAQ** (3 questions unique to this level)
9. **Final CTA** with package name in WhatsApp prefill  
   Example: `I want Level 4 Complete Digital Transformation for my business.`

**Page-specific emphasis:**

| Page | Must show |
| --- | --- |
| Level 1 | Identity kit mockup (logo, card, WhatsApp profile) |
| Level 2 | Content examples: reel frames, photo grid, testimonial card |
| Level 3 | The 6-step lead flow, large. Ad mockups. |
| Level 4 | “Complete growth system” diagram combining all 10 areas + CRM screenshot-style UI + monthly report sample |

---

### TEMPLATE C — Industry landing (11 pages) `/industries/[slug]`

**Job:** Paid ads and Google can land here. Copy must feel like that industry, not generic.

**Layout style:** Dribbble niche landing pages — industry photo in hero, 3 pains, recommended package, 3 deliverables, CTA.

**Same sections on all 11:**

1. **Hero** — *Get more [patients / diners / buyers / students] — not just followers.* Industry photo. CTA.
2. **3 pains** specific to that trade.
3. **What we set up for you** — 5 bullets tailored (do not paste the same 10 services blindly).
4. **Recommended starting level** — one highlighted package + why.
5. **Lead flow** — short version using their language (e.g. clinic: Ad → WhatsApp → appointment).
6. **Mini proof** — 1 case or 1 hypothetical labelled as example.
7. **Final CTA** — `I run a [salon] and want Pyara Pakistan packages.`

**Industry copy cheat-sheet:**

| Industry | Hero outcome | Start them on |
| --- | --- | --- |
| Real estate | Buyer / tenant inquiries | L3 or L4 (personal brand + CRM) |
| Restaurants | More tables, Maps, food photos | L2 then L3 |
| Salons | Bookings on WhatsApp | L2 |
| Car dealers | Walk-ins + serious buyers | L3 |
| Construction | Tender / project leads | L3 / L4 |
| Clinics | Appointments, trust, reviews | L2 + reputation, then L3 |
| Education | Admissions inquiries | L3 |
| Boutiques | DMs and orders | L2 |
| Manufacturers | B2B inquiries, LinkedIn, catalogue | L1 then L3 |
| Gyms | Memberships | L2 + local ads |
| Photography | Bookings for events | L2 |

---

### TEMPLATE D — Case study (3 pages) `/work/[slug]`

**Job:** One story, one metric, one CTA.

**Layout style:** Dribbble case-study articles — huge metric, before/after, 3-column Challenge / Work / Result.

**Sections:**

1. Hero: client/industry, metric, timeframe
2. Challenge
3. What we did (map to service areas)
4. Before / after (profiles, website, ads)
5. Results (leads, CPL, customers — only real numbers)
6. Quote
7. CTA: “Want this for your [industry]?”

Launch with 3 slots. Hide the page from nav if a slot is empty; do not publish “Lorem ipsum” studies.

---

## 7. System pages (2)

### Thank you `/thank-you`

After form submit.

- “We got your request.”
- “WhatsApp us now if you want a faster reply.”
- What happens next: we call/WhatsApp within 15 minutes (business hours).
- No header CTA spam; keep WhatsApp.

### 404

On-brand: “This page went offline. Your business shouldn’t.”  
Buttons: Home · Packages · WhatsApp.

---

## 8. Later pages (not in the 41)

Build after launch if needed:

| Page | Why later |
| --- | --- |
| `/blog` + articles | SEO engine |
| `/karachi` `/lahore` `/islamabad` | Local SEO |
| `/careers` | Hiring |
| `/quiz` | “Which level do I need?” |
| Urdu home `/ur` | Language split |
| Client portal | v2 product |

---

## 9. What every page must have (checklist)

A page is not done unless it has:

- [ ] Unique H1 and meta title/description
- [ ] One primary CTA (WhatsApp or Get a quote)
- [ ] One secondary CTA
- [ ] Mobile layout that does not require pinch-zoom
- [ ] Sticky mobile action bar
- [ ] Footer
- [ ] No fake testimonials or fake metrics
- [ ] Prefill-aware WhatsApp text where relevant
- [ ] Final CTA band (except legal, thank-you, 404)

---

## 10. Suggested build order

Build **templates first**, then clone content.

1. Layout, header, footer, sticky bar, design tokens
2. Home
3. Packages + 4 package templates
4. Contact + thank-you
5. Services overview + 10 service templates
6. Industries overview + 11 industry templates
7. Process, About, FAQ
8. Work + 3 case-study slots
9. Privacy, Terms, 404
10. SEO, sitemap, analytics

That order matches how buyers move: understand → pick a level → contact.

---

## 11. Design references (use while designing)

Open these searches and steal **structure**, not branding:

**Dribbble**

- [Digital marketing agency website](https://dribbble.com/search/shots/popular/web-design?q=digital%20marketing%20agency%20website)
- [Agency homepage](https://dribbble.com/search/shots/popular/web-design?q=agency%20homepage)
- [Services page website](https://dribbble.com/search/shots/popular/web-design?q=services%20page%20website)
- [Pricing page 4 plans](https://dribbble.com/search/shots/popular/web-design?q=pricing%20page%20four%20plans)
- [How it works timeline](https://dribbble.com/search/shots/popular/web-design?q=how%20it%20works%20timeline%20website)
- [Contact page split form](https://dribbble.com/search/shots/popular/web-design?q=contact%20page%20split%20form)
- [Case study page](https://dribbble.com/search/shots/popular/web-design?q=case%20study%20page%20website)
- [About us agency](https://dribbble.com/search/shots/popular/web-design?q=about%20us%20page%20agency)
- [WhatsApp sticky bar mobile](https://dribbble.com/search/shots/popular/web-design?q=mobile%20bottom%20navigation%20whatsapp)

**Patterns to copy from those shots**

| Pattern | Use on |
| --- | --- |
| Huge headline + dual CTA + device mockup | Home, industry, Level 3 |
| Icon card grid | Services, industries |
| 4 pricing columns, one featured | Packages |
| Numbered 01–06 process line | Home, Process, L3, L4 |
| Split form / contact panel | Contact |
| Giant metric + before/after | Work, case study |
| Dark full-width end CTA | Every marketing page |
| Gold “recommended” badge | Level 3 or 4 |

**Do not copy**

- Dark cyberpunk agency aesthetics with no Pakistani context
- Fake 3D robot heroes
- Endless parallax that is slow on low-end Androids
- English-only tiny text

Pyara Pakistan should feel **warm, local, premium, and clear** — navy + gold, big type, icons, WhatsApp always one tap away.

---

## 12. Page count recap

| You are building | Number |
| --- | --- |
| Unique core pages | 11 |
| Repeated service pages | 10 |
| Repeated package pages | 4 |
| Repeated industry pages | 11 |
| Repeated case studies | 3 |
| System pages | 2 |
| **Launch website** | **41 pages** |
| Unique layouts to design | **~12** (home + 11 core/system + 4 templates; legal is simple) |

Design 12 layouts. Fill the rest from data files. That is how the Next.js app should be built.

---

*End of Website Pages Spec v1.0*
