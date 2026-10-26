import type { Deal } from "@/lib/types";
import { StatusPill } from "./StatusPill";
import { CategoryPill } from "./CategoryPill";

export function DealCard({
  deal,
  onOpen,
}: {
  deal: Deal;
  onOpen: () => void;
}) {
  const isGenerating = deal.status === "generating";
  const isLive = deal.status === "live";
  const isReview = deal.status === "review";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left relative flex flex-col overflow-hidden rounded-[20px] border border-line/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(26,37,64,0.06),0_18px_40px_rgba(26,37,64,0.1)] shadow-[0_1px_2px_rgba(26,37,64,0.04),0_8px_24px_rgba(26,37,64,0.06)]"
    >
      {/* Hero */}
      <div
        className={`relative aspect-[16/10] overflow-hidden ${isGenerating ? "shimmer" : ""}`}
        style={{ background: deal.hero.gradient }}
      >
        <div className="absolute inset-0 flex items-end p-4">
          <div className="flex flex-1 items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">
                {deal.supplier}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-wider text-white/60"
                aria-hidden
              >
                {deal.hero.mood}
              </span>
            </div>
            <span className="text-4xl drop-shadow-sm" aria-hidden>
              {deal.hero.glyph}
            </span>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <StatusPill status={deal.status} size="sm" />
        </div>
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-white/95 px-2.5 py-1 font-mono text-[11px] font-semibold text-ink shadow-sm">
            {deal.priceLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <CategoryPill category={deal.category} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">
            {deal.dates}
          </span>
        </div>

        <h3 className="font-headline text-[17px] leading-[1.25] text-ink line-clamp-2">
          {deal.title}
        </h3>

        {/* Footer line */}
        <div className="mt-auto flex items-center justify-between pt-2 hair-b border-b-0 border-t border-line/70">
          <span
            className={`font-mono text-[11px] tracking-wide ${
              isLive
                ? "text-palm-deep"
                : isReview
                  ? "text-coral-deep"
                  : "text-ink-mute"
            }`}
          >
            {deal.footer.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] text-ink-mute opacity-0 transition-opacity group-hover:opacity-100">
            open →
          </span>
        </div>
      </div>
    </button>
  );
}
