import type { Deal, DashboardStats } from "./types";

/**
 * Phase 1 sample data. Everything here is static / local; no backend.
 * Two deals ("royal-caribbean-caribbean-7" and "sandals-south-coast-5")
 * are fully fleshed out to show the review panel at its best.
 * The others are lighter so the dashboard looks populated.
 */

export const dashboardStats: DashboardStats = {
  awaitingReview: 3,
  generating: 2,
  liveThisWeek: 4,
  bookings7d: { count: 141, revenue: 112_460 },
  timeSavedHrs: 38,
};

const royalCaribbean: Deal = {
  id: "deal-01",
  slug: "royal-caribbean-caribbean-7",
  status: "review",
  category: "cruise",
  supplier: "Royal Caribbean",
  title: "7-night Eastern Caribbean · Allure of the Seas",
  dates: "Jan 11 – 18, 2027",
  startsOn: "2027-01-11",
  priceLabel: "from $649/pp",
  priceValue: 649,
  hero: {
    gradient:
      "linear-gradient(135deg, #0a6e96 0%, #1090c2 55%, #5ec6e8 100%)",
    glyph: "🚢",
    mood: "deep ocean, sun on water",
  },
  footer: "READY · click to review",
  updatedAt: "2026-10-26T14:12:00Z",
  agentLog: [
    { step: "Read brief · deals/royal-caribbean-caribbean-7.md", level: "ok", durationSec: 0.4 },
    { step: "Loaded brand voice", detail: "voice.md · 428 tokens", level: "ok", durationSec: 0.2 },
    { step: "Fetched 3 past approved examples", detail: "cruise · last 90 days", level: "ok", durationSec: 1.1 },
    { step: "Landing page draft", detail: "hero + 4 highlights + itinerary + fineprint", level: "ok", durationSec: 11.3 },
    { step: "Email variants · 3 of 3", level: "ok", durationSec: 7.8 },
    { step: "SMS variants · 5 of 5", level: "ok", durationSec: 3.6 },
    { step: "Ad creative · 4 of 4", detail: "Meta feed · Meta story · Google · TikTok", level: "ok", durationSec: 6.2 },
    { step: "Guardrail scan", detail: "6 checks · 1 warning", level: "warn", durationSec: 0.9 },
    { step: "Awaiting human review", level: "info" },
  ],
  landing: {
    hero: {
      eyebrow: "7 nights · Eastern Caribbean · from Fort Lauderdale",
      headline: "Sail the Caribbean for less than a Disney weekend",
      sub: "Allure of the Seas · Jan 11–18, 2027 · kids sail free on select dates",
      cta: "Grab a cabin — from $649/pp",
    },
    trustStrip: [
      "Royal Caribbean · official partner",
      "ASTA accredited",
      "Price-drop guarantee",
      "24/7 travel desk",
    ],
    highlights: [
      {
        title: "Kids sail free",
        body: "Third and fourth guests under 18 pay $0 cruise fare in select cabins. Taxes extra.",
      },
      {
        title: "4 stops, 3 beaches",
        body: "St. Thomas, St. Maarten, and Perfect Day at CocoCay — Royal's private island with the tallest waterslide in North America.",
      },
      {
        title: "Dining included",
        body: "Main dining room, Windjammer buffet, Solarium Bistro, Café Promenade, and room service breakfast — all in.",
      },
      {
        title: "Pack light",
        body: "No airport two-step with the kids. Drive to Port Everglades, drop the car, you're on the ship by lunch.",
      },
    ],
    itinerary: [
      { day: "Mon · Day 1", body: "Board in Fort Lauderdale, FL. Sail at 4:30 PM." },
      { day: "Tue · Day 2", body: "At sea. Flowrider, water slides, Broadway's Mamma Mia! on board." },
      { day: "Wed · Day 3", body: "St. Thomas, USVI. Beach day at Magens Bay or snorkel at Coki Point." },
      { day: "Thu · Day 4", body: "St. Maarten. Dutch and French side in one afternoon." },
      { day: "Fri · Day 5", body: "At sea. Spa day for the grownups, teen club for the kids." },
      { day: "Sat · Day 6", body: "Perfect Day at CocoCay. Private island. Taco bar is free." },
      { day: "Sun · Day 7", body: "At sea. Pack between pool breaks." },
      { day: "Mon · Day 8", body: "Return to Fort Lauderdale. Off the ship by 10 AM." },
    ],
    fineprint:
      "Price per person based on double occupancy, inside cabin. Taxes, port fees ($189/pp), gratuities not included. Kids-sail-free promo applies to guests 3 and 4 in select cabin categories. Deposit $200/pp refundable until Nov 15, 2026.",
  },
  emails: [
    {
      label: "A · straight offer",
      subject: "$649 Caribbean, kids sail free",
      preheader: "7 nights, 4 stops, no flights needed. Jan 11.",
      body: "Hey —\n\nQuick one. We got a hold on cabins for the Allure of the Seas, 7-night Eastern Caribbean, Jan 11–18. $649 per person. Kids sail free in select cabins (third and fourth guest under 18).\n\nFour stops. Three beaches. One of them is Perfect Day at CocoCay, which if you haven't been — it's the one with the tallest waterslide in North America.\n\nDrive to Fort Lauderdale, drop the car, you're on the ship by lunch. No airport.\n\nI've got cabins held for 72 hours. First come, first served.\n\nGrab one here →\n\n— Dan + Pop\nFlashTravel",
    },
    {
      label: "B · story lede",
      subject: "the week we didn't pack a swimsuit",
      preheader: "turns out all you really need is a passport",
      body: "Last January, Pop forgot his swim trunks.\n\nIt was a 7-night Caribbean cruise. We realized at the first port. He bought a pair in St. Thomas for $8. Wore them every day. Still has them.\n\nThat's kind of the pitch for this one.\n\nAllure of the Seas, 7 nights, Jan 11–18. Fort Lauderdale round trip. $649 per person. Kids sail free in select cabins.\n\nIf you've been putting off the big family thing because of flights with little ones — this is the version where you drive. Three beaches, four stops, the island with the waterslide.\n\n72 hours on these cabins.\n\nGrab one →\n\n— Dan\nFlashTravel",
    },
    {
      label: "C · urgency / short",
      subject: "cabins on hold — 72 hrs",
      preheader: "7-night Caribbean · $649 · kids free",
      body: "Allure of the Seas. Jan 11–18. $649/pp. Kids sail free (3rd & 4th guest, select cabins).\n\nFt. Lauderdale round trip. No flights.\n\nI'm holding cabins for 72 hours. After that they go back.\n\n→ Book\n\n— Dan + Pop\nFlashTravel",
    },
  ],
  sms: [
    { label: "A · lead with price", text: "FlashTravel: $649 7-night Caribbean on Allure of the Seas, Jan 11. Kids sail free. Cabins on hold 72hrs → fla.sh/alrcb. Reply STOP to opt out" },
    { label: "B · lead with kids", text: "FlashTravel: Kids sail free. 7 nights Caribbean, Allure of the Seas, from $649. Fort Lauderdale, no flights → fla.sh/alrcb. STOP to opt out" },
    { label: "C · lead with time", text: "FlashTravel: 72hrs on these cabins. 7-nt Caribbean, Jan 11, from $649, kids free → fla.sh/alrcb. STOP to opt out" },
    { label: "D · personal", text: "Dan at FlashTravel: Got Royal Caribbean cabins at $649/pp for Jan 11. Kids free. Grab one → fla.sh/alrcb. STOP to opt out" },
    { label: "E · ultra short", text: "FlashTravel: $649 Caribbean. Jan 11. Kids free. 72hrs → fla.sh/alrcb. STOP to opt out" },
  ],
  ads: [
    {
      label: "Ad 1",
      platform: "Meta feed",
      headline: "$649 Caribbean · kids free",
      primary: "7 nights, 4 stops, no flights. Allure of the Seas, Jan 11. Cabins on hold 72 hrs.",
      imagePrompt:
        "Overhead shot of a cruise ship pool deck at golden hour, warm film grain, kids blurred jumping into pool. No ship name visible. Shot on 35mm, Portra 400 tones.",
      swatch: "linear-gradient(135deg,#1090c2,#5ec6e8 60%,#ffc83d)",
    },
    {
      label: "Ad 2",
      platform: "Meta story",
      headline: "pack the kids. drive to the ship.",
      primary: "No flights. 7 nights. $649/pp.",
      imagePrompt:
        "Vertical 9:16. Family unloading a car at a Florida port, suitcases, sun. Shot from behind. Warm, documentary, early morning.",
      swatch: "linear-gradient(180deg,#ffc83d 0%,#ff5b3a 60%,#c83d20 100%)",
    },
    {
      label: "Ad 3",
      platform: "Google search",
      headline: "Caribbean Cruise · $649",
      primary: "7 nights · Allure of the Seas · Jan 11 · Kids sail free · 72 hrs only",
      imagePrompt: "n/a — search ad",
      swatch: "linear-gradient(135deg,#1a2540,#3a4661)",
    },
    {
      label: "Ad 4",
      platform: "TikTok",
      headline: "Mom math: $649 beats Disney week",
      primary: "7 nights, 4 ports, kids eat free. The one you drive to.",
      imagePrompt:
        "Vertical. Hand-held, mom holding up calculator on cruise ship pool deck. Text overlay: '$649 x 2 adults, kids free'. Caption cards: 'drive, don't fly'.",
      swatch: "linear-gradient(135deg,#2da76b,#1f8453)",
    },
  ],
  guardrails: [
    { rule: "Price match (brief vs output)", status: "pass", detail: "$649/pp matches brief exactly in all 12 copy artifacts." },
    { rule: "Dates in future", status: "pass", detail: "All dates ≥ 2027-01-11 (brief) and ≥ today." },
    { rule: "SMS ≤ 160 chars + STOP", status: "pass", detail: "All 5 variants include 'STOP to opt out', longest is 142 chars." },
    { rule: "Brand voice ban-list", status: "pass", detail: "No instances of luxury / exclusive / VIP / curated / world-class." },
    { rule: "Subject-line spam words", status: "warn", detail: "Variant C uses 'cabins on hold' — close to urgency flag. Review." },
    { rule: "Required legal line", status: "pass", detail: "Fineprint includes deposit, taxes, and cancellation terms." },
  ],
};

const sandals: Deal = {
  id: "deal-02",
  slug: "sandals-south-coast-5",
  status: "live",
  category: "sandals-beaches",
  supplier: "Sandals Resorts",
  title: "5-night Sandals South Coast · adults-only Jamaica",
  dates: "Feb 22 – 27, 2027",
  startsOn: "2027-02-22",
  priceLabel: "from $1,398/pp",
  priceValue: 1398,
  hero: {
    gradient:
      "linear-gradient(135deg, #1f8453 0%, #2da76b 60%, #ffc83d 100%)",
    glyph: "🌴",
    mood: "palm, sand, late sun",
  },
  footer: "47 booked · $38,912",
  updatedAt: "2026-10-21T18:30:00Z",
  agentLog: [
    { step: "Read brief · deals/sandals-south-coast-5.md", level: "ok", durationSec: 0.3 },
    { step: "Landing + 3 emails + 5 SMS + 4 ads", level: "ok", durationSec: 24.1 },
    { step: "Approved by d.connolly203 at 10/21 2:14 PM", level: "ok" },
    { step: "Deployed landing · fla.sh/sndlsc", level: "ok", durationSec: 4.2 },
    { step: "Email batch 1 · 4,812 sends", level: "ok" },
    { step: "SMS batch 1 · 1,106 sends · 94% delivered", level: "ok" },
    { step: "47 bookings · 42% of segment target", level: "info" },
  ],
  landing: {
    hero: {
      eyebrow: "5 nights · adults only · all in",
      headline: "Jamaica, you two. Nothing else.",
      sub: "Sandals South Coast · Feb 22–27, 2027 · from $1,398/pp",
      cta: "Book your week →",
    },
    trustStrip: ["Sandals Resorts · official", "ASTA accredited", "Butler-level upgrades"],
    highlights: [
      { title: "Everything is in", body: "Flights, transfers, meals, drinks, tips, taxes. One price." },
      { title: "You two only", body: "No kids. No pool floats shaped like dinosaurs. Just you two." },
      { title: "Private white sand", body: "Two miles of beach the resort owns. Over-water bungalows if you want them." },
      { title: "Scuba included", body: "If you're PADI certified, boat dives are on the house. Up to 2 per day." },
    ],
    fineprint:
      "Price per person based on double occupancy, Caribbean Deluxe room. Includes round-trip flights from MIA, FLL, ATL, JFK, EWR, BOS. Transfers, meals, drinks, tips, taxes all included.",
  },
  emails: [
    {
      label: "A · all-in",
      subject: "Jamaica, 5 nights, $1,398 all-in",
      preheader: "flights, drinks, tips — all of it",
      body: "Feb 22–27. Sandals South Coast. Two of you, five nights, flights from Miami/Fort Lauderdale/Atlanta/NYC/Boston included.\n\n$1,398 per person. That's the full number. No airfare on top, no transfers on top, no 'resort fee' at check-in.\n\nAdults only. Over-water bungalows available for +$340/night if you want to go all in.\n\n→ Book\n\n— Dan + Pop",
    },
    {
      label: "B · romantic",
      subject: "a week where no one asks you for anything",
      preheader: "Sandals South Coast, Feb 22",
      body: "Five nights. No kids. No work. No pool deck DJ.\n\nSandals South Coast, Jamaica. All-in from $1,398/pp — flights included from six cities. Feb 22–27.\n\nBook →",
    },
    {
      label: "C · short",
      subject: "Feb 22 · $1,398 · all in",
      preheader: "Sandals, Jamaica, you two",
      body: "Sandals South Coast. Feb 22–27. $1,398/pp. Flights, meals, drinks, tips — all in.\n\nAdults only. 2 miles of private beach.\n\n→ Grab a room",
    },
  ],
  sms: [
    { label: "A", text: "FlashTravel: Jamaica all-in. 5 nts Sandals South Coast, Feb 22, flights incl, from $1,398/pp → fla.sh/sndlsc. STOP to opt out" },
    { label: "B", text: "FlashTravel: Adults only. 5-nt Sandals Jamaica, Feb 22, all-in from $1,398 → fla.sh/sndlsc. STOP to opt out" },
    { label: "C", text: "FlashTravel: $1,398 includes flights. Sandals South Coast, Feb 22-27 → fla.sh/sndlsc. STOP to opt out" },
    { label: "D", text: "FlashTravel: You two + Jamaica + no bills + 5 nts = $1,398 all-in, Feb 22 → fla.sh/sndlsc. STOP to opt out" },
    { label: "E", text: "FlashTravel: Last cabins at this rate. Sandals Jamaica Feb 22, $1,398 all-in → fla.sh/sndlsc. STOP to opt out" },
  ],
  ads: [
    { label: "Ad 1", platform: "Meta feed", headline: "Jamaica all-in · $1,398", primary: "Flights, meals, drinks, tips. Feb 22. Adults only.", imagePrompt: "Over-water bungalow at Sandals South Coast at sunset, calm sea, no people.", swatch: "linear-gradient(135deg,#2da76b,#ffc83d)" },
    { label: "Ad 2", platform: "Meta story", headline: "no kids. 5 nights. all-in.", primary: "Feb 22 · $1,398/pp", imagePrompt: "Vertical. Two beach chairs facing the sea, drinks on side table, no people.", swatch: "linear-gradient(180deg,#1f8453,#2da76b)" },
    { label: "Ad 3", platform: "Google search", headline: "Sandals Jamaica · All-In", primary: "5 nights · flights incl · $1,398 · Feb 22", imagePrompt: "n/a — search", swatch: "linear-gradient(135deg,#1a2540,#1f8453)" },
    { label: "Ad 4", platform: "TikTok", headline: "the all-in math beats a long weekend", primary: "flights + 5 nts + tips + drinks = $1,398", imagePrompt: "Vertical. Hand holding boarding pass next to tropical cocktail.", swatch: "linear-gradient(135deg,#ff5b3a,#ffc83d)" },
  ],
  guardrails: [
    { rule: "Price match", status: "pass", detail: "$1,398/pp verified across 12 artifacts." },
    { rule: "Dates in future", status: "pass", detail: "Feb 22, 2027 ≥ today." },
    { rule: "SMS ≤ 160 + STOP", status: "pass", detail: "All variants compliant." },
    { rule: "Voice ban-list", status: "pass", detail: "Clean." },
    { rule: "Spam-word scan", status: "pass", detail: "All subject lines clean." },
    { rule: "Legal fineprint", status: "pass", detail: "Includes 6 origin cities, scope of inclusions." },
  ],
};

const disneyDream: Deal = {
  id: "deal-03",
  slug: "disney-dream-bahamas-4",
  status: "generating",
  category: "disney",
  supplier: "Disney Cruise Line",
  title: "4-night Bahamas · Disney Dream · spring break",
  dates: "Mar 29 – Apr 2, 2027",
  startsOn: "2027-03-29",
  priceLabel: "from $1,089/pp",
  priceValue: 1089,
  hero: {
    gradient:
      "linear-gradient(135deg, #1090c2 0%, #ffc83d 60%, #ff5b3a 100%)",
    glyph: "🏰",
    mood: "spring sun, pastel",
  },
  footer: "generating · 3 of 12 artifacts",
  updatedAt: "2026-10-26T15:04:00Z",
  agentLog: [
    { step: "Read brief · deals/disney-dream-bahamas-4.md", level: "ok", durationSec: 0.4 },
    { step: "Loaded brand voice", level: "ok", durationSec: 0.2 },
    { step: "Landing page draft", level: "ok", durationSec: 10.1 },
    { step: "Email variants · 2 of 3", level: "running" },
    { step: "SMS variants · queued", level: "info" },
    { step: "Ad creative · queued", level: "info" },
  ],
  landing: {
    hero: {
      eyebrow: "4 nights · Bahamas · spring break",
      headline: "Disney Dream, spring break week",
      sub: "Mar 29 – Apr 2, 2027 · from $1,089/pp",
      cta: "Hold a stateroom",
    },
    trustStrip: ["Disney Cruise Line · partner"],
    highlights: [
      { title: "Castaway Cay", body: "Disney's private Bahamian island. The one with the trams." },
      { title: "Characters daily", body: "Breakfast with Mickey. For real." },
    ],
    fineprint: "Draft — not yet reviewed.",
  },
  emails: [
    { label: "A", subject: "spring break on the Disney Dream", preheader: "4 nts, Castaway Cay, $1,089/pp", body: "Draft generating…" },
    { label: "B", subject: "the Mickey one · spring break", preheader: "Disney Dream, Mar 29", body: "Draft generating…" },
  ],
  sms: [],
  ads: [],
  guardrails: [],
};

const riuPalace: Deal = {
  id: "deal-04",
  slug: "riu-palace-costa-mujeres-7",
  status: "review",
  category: "all-inclusive",
  supplier: "RIU Hotels",
  title: "7-night RIU Palace Costa Mujeres · Cancún",
  dates: "May 10 – 17, 2027",
  startsOn: "2027-05-10",
  priceLabel: "from $1,189/pp",
  priceValue: 1189,
  hero: {
    gradient:
      "linear-gradient(135deg, #e84a2a 0%, #ff5b3a 55%, #ffc83d 100%)",
    glyph: "🍹",
    mood: "coral, agave, sunset",
  },
  footer: "READY · click to review",
  updatedAt: "2026-10-26T11:48:00Z",
  agentLog: [
    { step: "Read brief", level: "ok", durationSec: 0.3 },
    { step: "Landing + emails + SMS + ads", level: "ok", durationSec: 23.9 },
    { step: "Guardrail scan", detail: "6 checks · all pass", level: "ok", durationSec: 0.7 },
    { step: "Awaiting human review", level: "info" },
  ],
  landing: {
    hero: {
      eyebrow: "7 nights · all-inclusive · Riviera Maya",
      headline: "Cancún, no cooking, no credit card at the swim-up bar",
      sub: "RIU Palace Costa Mujeres · May 10–17 · from $1,189/pp",
      cta: "Grab a room",
    },
    trustStrip: ["RIU Hotels · official", "AAA 4-Diamond"],
    highlights: [
      { title: "All in, really all in", body: "Food, drinks (including top-shelf), tips, taxes, kids club. No wristband weirdness." },
      { title: "6 pools, 1 lazy river", body: "One of them has a swim-up bar. Guess which one Pop lives at." },
      { title: "15 minutes from CUN", body: "Transfers included both ways." },
      { title: "Kids under 12 free", body: "Promo rate on dates listed. Max two kids per room." },
    ],
    fineprint:
      "Per person based on double occupancy, Jr. Suite Ocean View. Flights not included — add from $294 r/t MIA / FLL / ATL / JFK.",
  },
  emails: [
    { label: "A", subject: "Cancún, 7 nts, kids free, $1,189", preheader: "RIU Palace, all-in, May 10", body: "RIU Palace Costa Mujeres. 7 nights all-in from $1,189/pp. Kids under 12 free. May 10-17.\n\nTop-shelf included. Swim-up bar. 15 min from the airport.\n\nFlights add from $294 r/t.\n\n→ Book" },
    { label: "B", subject: "pack sunscreen, nothing else", preheader: "7 nts Cancún all-in · $1,189", body: "Everything on the menu is yours. Including the tequila on the top shelf." },
    { label: "C", subject: "May 10 · RIU Palace · $1,189", preheader: "all-in, kids free", body: "Short version: 7 nts, Cancún, RIU Palace, all-in, $1,189/pp, kids under 12 free. May 10. → Book" },
  ],
  sms: [
    { label: "A", text: "FlashTravel: $1,189 7-nt Cancún RIU Palace all-in, kids free. May 10 → fla.sh/riupcm. STOP to opt out" },
    { label: "B", text: "FlashTravel: Cancún all-in. 7 nts, top-shelf, kids free, $1,189 → fla.sh/riupcm. STOP to opt out" },
    { label: "C", text: "FlashTravel: Kids under 12 FREE. 7 nts Cancún, May 10, from $1,189 → fla.sh/riupcm. STOP to opt out" },
    { label: "D", text: "FlashTravel: Swim-up bar, 6 pools, all-in. 7 nts Cancún from $1,189 → fla.sh/riupcm. STOP to opt out" },
    { label: "E", text: "FlashTravel: Flights from $294. 7 nts RIU Palace all-in $1,189, May 10 → fla.sh/riupcm. STOP to opt out" },
  ],
  ads: [
    { label: "Ad 1", platform: "Meta feed", headline: "Cancún all-in · $1,189", primary: "7 nts, kids free, May 10. Top-shelf. 6 pools.", imagePrompt: "Overhead of a swim-up bar at golden hour, two cocktails, no people.", swatch: "linear-gradient(135deg,#ff5b3a,#ffc83d)" },
    { label: "Ad 2", platform: "Meta story", headline: "kids under 12 free", primary: "7 nts Cancún RIU Palace", imagePrompt: "Kids running toward infinity pool, back view.", swatch: "linear-gradient(180deg,#ffc83d,#ff5b3a)" },
    { label: "Ad 3", platform: "Google search", headline: "RIU Palace Cancún · All-In", primary: "7 nts · $1,189/pp · kids free · May 10", imagePrompt: "n/a", swatch: "linear-gradient(135deg,#1a2540,#c83d20)" },
    { label: "Ad 4", platform: "TikTok", headline: "the top shelf is on the menu", primary: "Cancún all-in $1,189, kids free", imagePrompt: "POV at swim-up bar ordering top-shelf tequila.", swatch: "linear-gradient(135deg,#1090c2,#ff5b3a)" },
  ],
  guardrails: [
    { rule: "Price match", status: "pass", detail: "$1,189/pp matches brief." },
    { rule: "Dates", status: "pass", detail: "May 10-17, 2027 — future." },
    { rule: "SMS ≤ 160 + STOP", status: "pass", detail: "All 5 compliant." },
    { rule: "Voice ban-list", status: "pass", detail: "Clean." },
    { rule: "Spam-words", status: "pass", detail: "Subjects clean." },
    { rule: "Fineprint", status: "pass", detail: "Includes flight exclusion disclosure." },
  ],
};

const beachesTCI: Deal = {
  id: "deal-05",
  slug: "beaches-turks-caicos-6",
  status: "draft",
  category: "sandals-beaches",
  supplier: "Beaches Resorts",
  title: "6-night Beaches Turks & Caicos · summer kickoff",
  dates: "Jun 7 – 13, 2027",
  startsOn: "2027-06-07",
  priceLabel: "from $2,490/pp",
  priceValue: 2490,
  hero: {
    gradient:
      "linear-gradient(135deg, #5ec6e8 0%, #1090c2 55%, #0a6e96 100%)",
    glyph: "🏝️",
    mood: "turquoise, bright",
  },
  footer: "draft · not yet generated",
  updatedAt: "2026-10-25T09:00:00Z",
  agentLog: [{ step: "Brief saved · not yet queued", level: "info" }],
  landing: {
    hero: {
      eyebrow: "Draft",
      headline: "Beaches Turks & Caicos · June",
      sub: "Draft — not generated yet",
      cta: "Generate →",
    },
    trustStrip: [],
    highlights: [],
    fineprint: "Draft only.",
  },
  emails: [],
  sms: [],
  ads: [],
  guardrails: [],
};

const carnival: Deal = {
  id: "deal-06",
  slug: "carnival-celebration-western-6",
  status: "live",
  category: "cruise",
  supplier: "Carnival Cruise Line",
  title: "6-day Western Caribbean · Carnival Celebration",
  dates: "Nov 15 – 21, 2026",
  startsOn: "2026-11-15",
  priceLabel: "from $539/pp",
  priceValue: 539,
  hero: {
    gradient:
      "linear-gradient(135deg, #0a6e96 0%, #ff5b3a 70%, #ffc83d 100%)",
    glyph: "⚓",
    mood: "sunset deck",
  },
  footer: "94 booked · $73,548",
  updatedAt: "2026-10-19T13:12:00Z",
  agentLog: [
    { step: "Approved 10/19 1:12 PM", level: "ok" },
    { step: "Landing deployed · fla.sh/crncl", level: "ok" },
    { step: "Email 1 · 5,210 sends · 42% open", level: "ok" },
    { step: "SMS 1 · 1,890 sends · 93% delivered", level: "ok" },
    { step: "94 bookings · 112% of segment target", level: "ok" },
  ],
  landing: {
    hero: { eyebrow: "6 days · Western Caribbean", headline: "6 days, $539. Carnival Celebration.", sub: "Miami round trip · Nov 15", cta: "Grab a cabin" },
    trustStrip: ["Carnival · official"],
    highlights: [{ title: "4 ports", body: "Ocho Rios, Grand Cayman, Cozumel, sea day." }],
    fineprint: "Per person, double occupancy, interior.",
  },
  emails: [{ label: "A", subject: "$539 6-day Caribbean · Nov 15", preheader: "Carnival Celebration", body: "Short version. Nov 15. 6 days. 4 ports. $539/pp. Miami round trip. →" }],
  sms: [{ label: "A", text: "FlashTravel: $539 6-day Caribbean Nov 15 Carnival → fla.sh/crncl. STOP to opt out" }],
  ads: [{ label: "Ad 1", platform: "Meta feed", headline: "$539 · 6 days · 4 ports", primary: "Nov 15. Carnival Celebration. Miami round trip.", imagePrompt: "Sunset on cruise deck.", swatch: "linear-gradient(135deg,#ff5b3a,#ffc83d)" }],
  guardrails: [
    { rule: "Price match", status: "pass", detail: "$539 verified." },
    { rule: "Dates", status: "pass", detail: "Nov 15, 2026 future." },
    { rule: "SMS compliance", status: "pass", detail: "Clean." },
  ],
};

const wdw: Deal = {
  id: "deal-07",
  slug: "wdw-5day-package",
  status: "generating",
  category: "disney",
  supplier: "Walt Disney World",
  title: "5-day Walt Disney World · 4-park magic ticket",
  dates: "Feb 14 – 19, 2027",
  startsOn: "2027-02-14",
  priceLabel: "from $1,849/family of 4",
  priceValue: 1849,
  hero: {
    gradient:
      "linear-gradient(135deg, #ff5b3a 0%, #ffc83d 55%, #1090c2 100%)",
    glyph: "🎢",
    mood: "theme park dusk",
  },
  footer: "generating · 7 of 12 artifacts",
  updatedAt: "2026-10-26T14:58:00Z",
  agentLog: [
    { step: "Read brief", level: "ok", durationSec: 0.3 },
    { step: "Landing page", level: "ok", durationSec: 12.4 },
    { step: "Emails · 3 of 3", level: "ok", durationSec: 8.1 },
    { step: "SMS · 3 of 5", level: "running" },
    { step: "Ad creative · queued", level: "info" },
  ],
  landing: {
    hero: { eyebrow: "5 days · 4 parks · family of 4", headline: "WDW, 5 days, under $2k for the family", sub: "Feb 14–19 · hotel + tickets", cta: "Hold a package" },
    trustStrip: ["Walt Disney World · authorized agency"],
    highlights: [{ title: "4-park magic", body: "Hop any day, every day." }],
    fineprint: "Based on family of 4, moderate resort.",
  },
  emails: [{ label: "A", subject: "WDW family of 4 · under $2k", preheader: "5 days, 4 parks, hotel + tix", body: "Draft generating…" }],
  sms: [{ label: "A", text: "FlashTravel: WDW 5-day pkg family of 4 $1,849 Feb 14 → fla.sh/wdw. STOP to opt out" }],
  ads: [],
  guardrails: [],
};

const hardRock: Deal = {
  id: "deal-08",
  slug: "hard-rock-riviera-maya-6",
  status: "review",
  category: "all-inclusive",
  supplier: "Hard Rock Hotels",
  title: "6-night Hard Rock Riviera Maya · all-in",
  dates: "Apr 18 – 24, 2027",
  startsOn: "2027-04-18",
  priceLabel: "from $1,549/pp",
  priceValue: 1549,
  hero: {
    gradient:
      "linear-gradient(135deg, #1a2540 0%, #c83d20 60%, #ffc83d 100%)",
    glyph: "🎸",
    mood: "neon dusk, rock",
  },
  footer: "READY · click to review",
  updatedAt: "2026-10-26T10:22:00Z",
  agentLog: [
    { step: "Read brief", level: "ok", durationSec: 0.3 },
    { step: "Full artifact batch", level: "ok", durationSec: 26.5 },
    { step: "Guardrails · all pass", level: "ok", durationSec: 0.6 },
    { step: "Awaiting human review", level: "info" },
  ],
  landing: {
    hero: { eyebrow: "6 nights · all-inclusive · Riviera Maya", headline: "Riviera Maya, all-in, with a stage", sub: "Hard Rock · Apr 18–24 · $1,549/pp", cta: "Grab a room" },
    trustStrip: ["Hard Rock Hotels · official"],
    highlights: [
      { title: "Live music every night", body: "Resident house band plus 2 ticketed shows during stay." },
      { title: "All-in, really all-in", body: "Food, drinks, tips, non-motorized water sports." },
      { title: "Kids under 12 free", body: "Max 2, per adult pair." },
      { title: "15 min from Playa", body: "Shuttle to town twice daily." },
    ],
    fineprint: "Based on double occupancy, Deluxe Diamond. Flights not included.",
  },
  emails: [
    { label: "A", subject: "Riviera Maya · all-in · $1,549", preheader: "Hard Rock, 6 nts, Apr 18", body: "6 nts Hard Rock Riviera Maya. All in. $1,549/pp. Kids under 12 free. Live music every night. →" },
    { label: "B", subject: "the one with the stage", preheader: "6 nts all-in Riviera Maya", body: "Draft content…" },
    { label: "C", subject: "Apr 18 · Hard Rock · $1,549", preheader: "all-in, kids free", body: "Short. 6 nts. All in. Kids free. →" },
  ],
  sms: [
    { label: "A", text: "FlashTravel: Hard Rock Riviera Maya 6 nts all-in $1,549 Apr 18 kids free → fla.sh/hrrm. STOP to opt out" },
    { label: "B", text: "FlashTravel: Live music + all-in + Riviera Maya. 6 nts $1,549 → fla.sh/hrrm. STOP to opt out" },
    { label: "C", text: "FlashTravel: Kids under 12 free. 6 nts Hard Rock Riviera Maya $1,549 → fla.sh/hrrm. STOP to opt out" },
    { label: "D", text: "FlashTravel: Apr 18. 6 nts all-in. Hard Rock. $1,549 → fla.sh/hrrm. STOP to opt out" },
    { label: "E", text: "FlashTravel: 2 shows + all-in. Hard Rock Riviera Maya 6 nts $1,549 → fla.sh/hrrm. STOP to opt out" },
  ],
  ads: [
    { label: "Ad 1", platform: "Meta feed", headline: "Riviera Maya · all-in · $1,549", primary: "Hard Rock. 6 nts. Live music. Apr 18.", imagePrompt: "Resort pool at dusk, stage lights on.", swatch: "linear-gradient(135deg,#1a2540,#c83d20)" },
    { label: "Ad 2", platform: "Meta story", headline: "live music nightly", primary: "6 nts all-in · Apr 18", imagePrompt: "Vertical. Crowd silhouette watching outdoor stage, warm lights.", swatch: "linear-gradient(180deg,#1a2540,#ff5b3a)" },
    { label: "Ad 3", platform: "Google search", headline: "Hard Rock Riviera Maya · All-In", primary: "6 nts · $1,549 · kids free · Apr 18", imagePrompt: "n/a", swatch: "linear-gradient(135deg,#1a2540,#ffc83d)" },
    { label: "Ad 4", platform: "TikTok", headline: "the one with the actual band", primary: "all-in Riviera Maya, kids free, $1,549", imagePrompt: "POV at outdoor stage, drink in hand.", swatch: "linear-gradient(135deg,#c83d20,#ffc83d)" },
  ],
  guardrails: [
    { rule: "Price match", status: "pass", detail: "$1,549 verified." },
    { rule: "Dates", status: "pass", detail: "Apr 18-24, 2027." },
    { rule: "SMS ≤ 160 + STOP", status: "pass", detail: "All compliant." },
    { rule: "Voice ban-list", status: "pass", detail: "Clean." },
    { rule: "Spam-words", status: "pass", detail: "Clean." },
    { rule: "Fineprint", status: "pass", detail: "Flights exclusion disclosed." },
  ],
};

export const sampleDeals: Deal[] = [
  royalCaribbean,
  hardRock,
  riuPalace,
  disneyDream,
  wdw,
  sandals,
  carnival,
  beachesTCI,
];
