export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-line/70 bg-sand/80 px-6 py-5 backdrop-blur md:px-10">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-[0_6px_14px_rgba(255,91,58,0.35)]"
          style={{
            background:
              "linear-gradient(135deg,#ff5b3a 0%,#ffc83d 55%,#1090c2 100%)",
          }}
          aria-hidden
        >
          <span className="font-headline text-[18px] italic">F</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-headline text-[20px] text-ink">
            FlashTravel
          </span>
          <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
            creative agent
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-soft hover:border-ink/40 md:inline-block">
          brand voice
        </button>
        <button className="hidden rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-soft hover:border-ink/40 md:inline-block">
          audit log
        </button>
        <button className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-sand hover:bg-ink-soft">
          + New deal
        </button>
        <div
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-ocean font-mono text-[12px] font-semibold text-white"
          title="d.connolly203@gmail.com"
        >
          DC
        </div>
      </div>
    </header>
  );
}
