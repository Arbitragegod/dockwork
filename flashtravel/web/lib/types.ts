export type DealStatus = "review" | "generating" | "live" | "draft";

export type DealCategory =
  | "cruise"
  | "all-inclusive"
  | "disney"
  | "sandals-beaches";

export type AgentLogEntry = {
  step: string;
  detail?: string;
  /** Seconds the step took. Omit while running. */
  durationSec?: number;
  /** "ok" | "warn" | "info" | "running" */
  level: "ok" | "warn" | "info" | "running";
};

export type EmailVariant = {
  label: string;
  subject: string;
  preheader: string;
  body: string;
};

export type SmsVariant = {
  label: string;
  text: string;
};

export type AdCreative = {
  label: string;
  platform: "Meta feed" | "Meta story" | "Google search" | "TikTok";
  headline: string;
  primary: string;
  imagePrompt: string;
  /** A CSS gradient or color used as the visual placeholder. */
  swatch: string;
};

export type GuardrailCheck = {
  rule: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};

export type LandingPageCopy = {
  hero: { eyebrow: string; headline: string; sub: string; cta: string };
  trustStrip: string[];
  highlights: { title: string; body: string }[];
  itinerary?: { day: string; body: string }[];
  fineprint: string;
};

export type Deal = {
  id: string;
  slug: string;
  status: DealStatus;
  category: DealCategory;
  supplier: string;
  title: string;
  /** "Sept 4–8, 2026" */
  dates: string;
  startsOn: string;
  /** Display price like "from $398/pp" */
  priceLabel: string;
  priceValue: number;
  /** Stylized hero — gradient + iconographic glyph (no external photos for Phase 1). */
  hero: { gradient: string; glyph: string; mood: string };
  footer: string;
  /** ISO timestamp of last status change */
  updatedAt: string;
  agentLog: AgentLogEntry[];
  landing: LandingPageCopy;
  emails: EmailVariant[];
  sms: SmsVariant[];
  ads: AdCreative[];
  guardrails: GuardrailCheck[];
};

export type DashboardStats = {
  awaitingReview: number;
  generating: number;
  liveThisWeek: number;
  bookings7d: { count: number; revenue: number };
  timeSavedHrs: number;
};
