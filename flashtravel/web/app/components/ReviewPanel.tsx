"use client";

import { useEffect, useState } from "react";
import type { Deal } from "@/lib/types";
import { StatusPill } from "./StatusPill";
import { CategoryPill } from "./CategoryPill";
import { AgentLog } from "./AgentLog";
import { PhoneBubble } from "./PhoneBubble";

type TabKey = "landing" | "email" | "sms" | "ads" | "guardrails";

export function ReviewPanel({
  deal,
  onClose,
}: {
  deal: Deal | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<TabKey>("landing");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (deal) {
      setTab("landing");
      // trigger slide-in on next frame
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [deal]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (deal) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [deal, onClose]);

  if (!deal) return null;

  const tabs: { key: TabKey; label: string; count?: number }[] = [
    { key: "landing", label: "Landing page" },
    { key: "email", label: "Email", count: deal.emails.length },
    { key: "sms", label: "SMS", count: deal.sms.length },
    { key: "ads", label: "Ads", count: deal.ads.length },
    { key: "guardrails", label: "Guardrails", count: deal.guardrails.length },
  ];

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink/35 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 bottom-0 flex w-full max-w-[760px] flex-col bg-sand shadow-[-24px_0_60px_rgba(26,37,64,0.14)] transition-transform duration-300 ${
          mounted ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label={`Review ${deal.title}`}
      >
        {/* Header */}
        <header className="flex items-start justify-between gap-4 border-b border-line bg-sand px-6 pt-6 pb-5">
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <StatusPill status={deal.status} size="sm" />
              <CategoryPill category={deal.category} />
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                {deal.supplier} · {deal.dates}
              </span>
            </div>
            <h2 className="font-headline text-[26px] leading-tight text-ink">
              {deal.title}
            </h2>
            <div className="mt-2 flex items-center gap-3 font-mono text-[12px] text-ink-mute">
              <span className="rounded-full bg-sand-deep px-2 py-0.5 text-ink">
                {deal.priceLabel}
              </span>
              <span>deal.slug · {deal.slug}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close review"
            className="h-9 w-9 flex-none rounded-full border border-line bg-white text-ink-soft hover:border-ink/40"
          >
            ✕
          </button>
        </header>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 pb-28 pt-5">
          <AgentLog log={deal.agentLog} />

          {/* Tabs */}
          <div className="sticky top-0 -mx-6 mt-6 mb-5 border-b border-line bg-sand/95 px-6 pb-0 backdrop-blur">
            <div className="flex gap-1 overflow-x-auto">
              {tabs.map((t) => {
                const active = tab === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={`relative flex items-center gap-2 whitespace-nowrap px-3 py-2.5 text-[13px] font-medium transition-colors ${
                      active ? "text-ink" : "text-ink-mute hover:text-ink"
                    }`}
                  >
                    {t.label}
                    {t.count != null && (
                      <span
                        className={`inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 font-mono text-[10px] ${active ? "bg-ink text-sand" : "bg-sand-deep text-ink-mute"}`}
                      >
                        {t.count}
                      </span>
                    )}
                    {active && (
                      <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-coral" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          {tab === "landing" && <LandingTab deal={deal} />}
          {tab === "email" && <EmailTab deal={deal} />}
          {tab === "sms" && <SmsTab deal={deal} />}
          {tab === "ads" && <AdsTab deal={deal} />}
          {tab === "guardrails" && <GuardrailsTab deal={deal} />}
        </div>

        {/* Sticky approve bar */}
        <footer className="absolute inset-x-0 bottom-0 border-t border-line bg-white px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">
              nothing goes live until you click approve
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink-soft hover:border-ink/40">
                Reject
              </button>
              <button className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink-soft hover:border-ink/40">
                Request changes
              </button>
              <button className="rounded-full bg-coral px-5 py-2 text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(255,91,58,0.35)] hover:bg-coral-deep">
                Approve &amp; schedule
              </button>
            </div>
          </div>
        </footer>
      </aside>
    </div>
  );
}

/* -------- tab panels -------- */

function LandingTab({ deal }: { deal: Deal }) {
  const l = deal.landing;
  return (
    <div className="space-y-6">
      {/* Hero preview */}
      <div
        className="relative overflow-hidden rounded-[20px] p-8 text-white shadow-[0_12px_32px_rgba(26,37,64,0.14)]"
        style={{ background: deal.hero.gradient }}
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
          {l.hero.eyebrow}
        </div>
        <h3 className="mt-2 font-headline text-[32px] leading-[1.08] text-white">
          <em>{l.hero.headline}</em>
        </h3>
        <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/90">
          {l.hero.sub}
        </p>
        <button className="mt-6 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-ink">
          {l.hero.cta}
        </button>
      </div>

      {l.trustStrip.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {l.trustStrip.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {l.highlights.length > 0 && (
        <div>
          <SectionLabel>Highlights</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {l.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-[16px] border border-line bg-white p-4"
              >
                <div className="font-headline text-[16px] text-ink">{h.title}</div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                  {h.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {l.itinerary && l.itinerary.length > 0 && (
        <div>
          <SectionLabel>Itinerary</SectionLabel>
          <ol className="divide-y divide-line/80 overflow-hidden rounded-[16px] border border-line bg-white">
            {l.itinerary.map((d) => (
              <li
                key={d.day}
                className="flex items-start gap-4 px-4 py-3"
              >
                <span className="w-28 flex-none font-mono text-[11px] uppercase tracking-wide text-ink-mute">
                  {d.day}
                </span>
                <span className="text-[13.5px] text-ink-soft">{d.body}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div>
        <SectionLabel>Fine print</SectionLabel>
        <p className="rounded-[12px] border border-line bg-white p-4 font-mono text-[11.5px] leading-[1.6] text-ink-mute">
          {l.fineprint}
        </p>
      </div>
    </div>
  );
}

function EmailTab({ deal }: { deal: Deal }) {
  if (deal.emails.length === 0)
    return <EmptyState text="No email variants generated yet." />;
  return (
    <div className="space-y-5">
      {deal.emails.map((e, i) => (
        <article
          key={i}
          className="overflow-hidden rounded-[16px] border border-line bg-white"
        >
          <header className="flex items-center justify-between gap-3 border-b border-line/70 bg-sand-deep/40 px-5 py-3">
            <span className="font-mono text-[11px] uppercase tracking-wide text-ink-mute">
              {e.label}
            </span>
            <span className="font-mono text-[11px] text-ink-mute">
              {e.subject.length} chars
            </span>
          </header>
          <div className="px-5 py-4">
            <div className="font-mono text-[11px] uppercase tracking-wide text-ink-mute">
              subject
            </div>
            <div className="font-headline text-[18px] text-ink">
              {e.subject}
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
              preheader
            </div>
            <div className="text-[13.5px] text-ink-soft">{e.preheader}</div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
              body
            </div>
            <pre className="whitespace-pre-wrap font-body text-[14px] leading-relaxed text-ink">
              {e.body}
            </pre>
          </div>
        </article>
      ))}
    </div>
  );
}

function SmsTab({ deal }: { deal: Deal }) {
  if (deal.sms.length === 0)
    return <EmptyState text="No SMS variants generated yet." />;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {deal.sms.map((s, i) => (
        <PhoneBubble key={i} variant={s} />
      ))}
    </div>
  );
}

function AdsTab({ deal }: { deal: Deal }) {
  if (deal.ads.length === 0)
    return <EmptyState text="No ads generated yet." />;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {deal.ads.map((a, i) => (
        <article
          key={i}
          className="overflow-hidden rounded-[16px] border border-line bg-white"
        >
          <div
            className="relative flex aspect-[4/3] items-end p-4 text-white"
            style={{ background: a.swatch }}
          >
            <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
              {a.platform}
            </div>
            <div>
              <div className="font-headline text-[20px] leading-tight text-white drop-shadow-sm">
                {a.headline}
              </div>
              <div className="mt-1 text-[12.5px] text-white/90">
                {a.primary}
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-wide text-ink-mute">
              image prompt
            </div>
            <div className="mt-1 font-mono text-[11.5px] leading-relaxed text-ink-soft">
              {a.imagePrompt}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function GuardrailsTab({ deal }: { deal: Deal }) {
  if (deal.guardrails.length === 0)
    return <EmptyState text="No guardrail checks run yet." />;
  return (
    <ul className="divide-y divide-line/80 overflow-hidden rounded-[16px] border border-line bg-white">
      {deal.guardrails.map((g, i) => {
        const color =
          g.status === "pass"
            ? "text-palm-deep"
            : g.status === "warn"
              ? "text-[#8a6a00]"
              : "text-coral-deep";
        const bg =
          g.status === "pass"
            ? "bg-[#dff5e8]"
            : g.status === "warn"
              ? "bg-[#fff7d6]"
              : "bg-[#fff0eb]";
        const mark = g.status === "pass" ? "✓" : g.status === "warn" ? "!" : "✕";
        return (
          <li key={i} className="flex items-start gap-4 px-4 py-3">
            <span
              className={`inline-flex h-6 w-6 flex-none items-center justify-center rounded-full ${bg} ${color} font-mono text-[12px]`}
            >
              {mark}
            </span>
            <div className="flex-1">
              <div className="font-medium text-ink">{g.rule}</div>
              <div className="mt-0.5 text-[13px] text-ink-soft">{g.detail}</div>
            </div>
            <span
              className={`flex-none font-mono text-[11px] uppercase tracking-wider ${color}`}
            >
              {g.status}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
      {children}
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-[16px] border border-dashed border-line/80 bg-white p-10 text-center">
      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">
        empty
      </div>
      <div className="mt-2 text-[13.5px] text-ink-soft">{text}</div>
    </div>
  );
}
