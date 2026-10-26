"use client";

import { useEffect, useMemo, useState } from "react";
import type { DashboardStats, Deal } from "@/lib/types";
import { TopBar } from "./TopBar";
import { StatStrip } from "./StatStrip";
import {
  FilterBar,
  type StatusFilter,
  type CategoryFilter,
} from "./FilterBar";
import { DealCard } from "./DealCard";
import { ReviewPanel } from "./ReviewPanel";

export function Dashboard({
  deals,
  stats,
}: {
  deals: Deal[];
  stats: DashboardStats;
}) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    );
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return deals.filter((d) => {
      if (statusFilter !== "all" && d.status !== statusFilter) return false;
      if (categoryFilter !== "all" && d.category !== categoryFilter)
        return false;
      if (q) {
        const hay = `${d.title} ${d.supplier} ${d.dates} ${d.priceLabel}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [deals, statusFilter, categoryFilter, query]);

  const openDeal = deals.find((d) => d.id === openId) ?? null;

  return (
    <>
      <TopBar />

      <main className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        {/* Hero */}
        <section className="pt-10 pb-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            {today || " "}
          </div>
          <h1 className="mt-2 font-headline text-[44px] leading-[1.05] text-ink md:text-[56px]">
            <em>Today&rsquo;s flash sales</em>
          </h1>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
            Every deal in flight across your creative pipeline. The agent drafts,
            you approve, nothing ships without a click.
          </p>
        </section>

        {/* Stats */}
        <section className="pb-6">
          <StatStrip stats={stats} />
        </section>

        {/* Filters */}
        <section className="pb-5">
          <FilterBar
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            query={query}
            onQueryChange={setQuery}
          />
        </section>

        {/* Grid */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              {filtered.length} deal{filtered.length === 1 ? "" : "s"}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">
              sorted by: most recent
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-line/80 bg-white p-12 text-center">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                no matches
              </div>
              <div className="mt-2 text-[14px] text-ink-soft">
                try widening the filters or clearing the search.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filtered.map((d) => (
                <DealCard
                  key={d.id}
                  deal={d}
                  onOpen={() => setOpenId(d.id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Footer tip */}
        <section className="mt-16 flex items-center justify-between border-t border-line/70 pt-6 font-mono text-[11px] uppercase tracking-wider text-ink-mute">
          <span>FlashTravel · creative agent · phase 1 preview</span>
          <span>
            drop a brief in <span className="text-ink">/deals/*.md</span>
          </span>
        </section>
      </main>

      <ReviewPanel deal={openDeal} onClose={() => setOpenId(null)} />
    </>
  );
}
