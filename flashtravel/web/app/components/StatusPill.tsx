import type { DealStatus } from "@/lib/types";

const map: Record<
  DealStatus,
  { label: string; bg: string; ink: string; dot: string; pulse: boolean }
> = {
  review: {
    label: "Awaiting review",
    bg: "bg-[#fff0eb]",
    ink: "text-[#c83d20]",
    dot: "bg-coral",
    pulse: false,
  },
  generating: {
    label: "Generating",
    bg: "bg-[#fff7d6]",
    ink: "text-[#8a6a00]",
    dot: "bg-sunshine",
    pulse: false,
  },
  live: {
    label: "Live",
    bg: "bg-[#dff5e8]",
    ink: "text-palm-deep",
    dot: "bg-palm live-dot",
    pulse: true,
  },
  draft: {
    label: "Draft",
    bg: "bg-[#eef2f7]",
    ink: "text-ink-mute",
    dot: "bg-[#9aa3b5]",
    pulse: false,
  },
};

export function StatusPill({
  status,
  size = "md",
}: {
  status: DealStatus;
  size?: "sm" | "md";
}) {
  const s = map[status];
  const padding = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono uppercase tracking-wide ${padding} ${s.bg} ${s.ink}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
