import type { DealCategory } from "@/lib/types";

const map: Record<DealCategory, { label: string; bg: string; ink: string }> = {
  cruise: { label: "Cruise", bg: "bg-[#dff0f8]", ink: "text-ocean-deep" },
  "all-inclusive": { label: "All-inclusive", bg: "bg-[#fff0eb]", ink: "text-[#c83d20]" },
  disney: { label: "Disney", bg: "bg-[#fff7d6]", ink: "text-[#8a6a00]" },
  "sandals-beaches": { label: "Sandals / Beaches", bg: "bg-[#dff5e8]", ink: "text-palm-deep" },
};

export function CategoryPill({ category }: { category: DealCategory }) {
  const c = map[category];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${c.bg} ${c.ink}`}
    >
      {c.label}
    </span>
  );
}
