import type { SmsVariant } from "@/lib/types";

export function PhoneBubble({ variant }: { variant: SmsVariant }) {
  const chars = variant.text.length;
  const over = chars > 160;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink-mute">
          {variant.label}
        </span>
        <span
          className={`font-mono text-[11px] tabular-nums ${over ? "text-coral-deep" : "text-ink-mute"}`}
        >
          {chars}/160
        </span>
      </div>
      <div className="phone-frame w-full max-w-[260px]">
        <div className="notch" />
        <div className="px-2 pb-1">
          <div className="mb-2 text-center font-mono text-[10px] uppercase tracking-wider text-white/40">
            Messages · now
          </div>
          <div className="flex">
            <div className="bubble">{variant.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
