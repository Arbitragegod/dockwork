"use client";

import type { DealCategory, DealStatus } from "@/lib/types";

export type StatusFilter = "all" | DealStatus;
export type CategoryFilter = "all" | DealCategory;

const statusChips: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "review", label: "Awaiting review" },
  { key: "generating", label: "Generating" },
  { key: "live", label: "Live" },
];

const categoryChips: { key: CategoryFilter; label: string }[] = [
  { key: "cruise", label: "Cruises" },
  { key: "all-inclusive", label: "All-inclusives" },
  { key: "disney", label: "Disney" },
  { key: "sandals-beaches", label: "Sandals / Beaches" },
];

export function FilterBar({
  statusFilter,
  onStatusChange,
  categoryFilter,
  onCategoryChange,
  query,
  onQueryChange,
}: {
  statusFilter: StatusFilter;
  onStatusChange: (s: StatusFilter) => void;
  categoryFilter: CategoryFilter;
  onCategoryChange: (c: CategoryFilter) => void;
  query: string;
  onQueryChange: (q: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {statusChips.map((c) => {
          const active = statusFilter === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => onStatusChange(c.key)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                active
                  ? "bg-ink text-sand"
                  : "bg-white text-ink-soft border border-line/80 hover:border-ink/30"
              }`}
            >
              {c.label}
            </button>
          );
        })}

        <span className="mx-1 hidden h-5 w-px bg-line sm:inline-block" />

        {categoryChips.map((c) => {
          const active = categoryFilter === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() =>
                onCategoryChange(active ? "all" : c.key)
              }
              className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                active
                  ? "bg-ocean text-white"
                  : "bg-white text-ink-soft border border-line/80 hover:border-ink/30"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="relative w-full lg:w-80">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="search suppliers, destinations, dates…"
          className="w-full rounded-full border border-line/80 bg-white py-2 pl-9 pr-3 text-[13px] placeholder:text-ink-mute focus:border-ink/40 focus:outline-none"
        />
      </div>
    </div>
  );
}
