import type { DashboardStats } from "@/lib/types";

type StatCard = {
  label: string;
  value: string;
  sub?: string;
  accent: string; // text color token for the accent bar
};

function fmtMoney(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function StatStrip({ stats }: { stats: DashboardStats }) {
  const cards: StatCard[] = [
    {
      label: "Awaiting review",
      value: stats.awaitingReview.toString(),
      sub: "need your eyes",
      accent: "text-coral",
    },
    {
      label: "Generating now",
      value: stats.generating.toString(),
      sub: "agent working",
      accent: "text-sunshine",
    },
    {
      label: "Live this week",
      value: stats.liveThisWeek.toString(),
      sub: "approved + out",
      accent: "text-palm",
    },
    {
      label: "Bookings · 7d",
      value: stats.bookings7d.count.toString(),
      sub: fmtMoney(stats.bookings7d.revenue) + " revenue",
      accent: "text-ocean",
    },
    {
      label: "Time saved",
      value: `${stats.timeSavedHrs}h`,
      sub: "vs. hand-building",
      accent: "text-ink-soft",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-[20px] border border-line/70 bg-white p-5 shadow-[0_1px_2px_rgba(26,37,64,0.04)]"
        >
          <div className={`stat-accent ${c.accent}`} />
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
            {c.label}
          </div>
          <div className="mt-1 font-headline text-[32px] leading-none text-ink tabular-nums">
            {c.value}
          </div>
          {c.sub && (
            <div className="mt-2 text-[12px] text-ink-mute">{c.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}
