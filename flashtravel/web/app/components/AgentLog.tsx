import type { AgentLogEntry } from "@/lib/types";

const levelColor: Record<AgentLogEntry["level"], string> = {
  ok: "text-log-success",
  warn: "text-log-warn",
  info: "text-log-mute",
  running: "text-log-warn",
};

const levelMark: Record<AgentLogEntry["level"], string> = {
  ok: "✓",
  warn: "!",
  info: "·",
  running: "…",
};

export function AgentLog({ log }: { log: AgentLogEntry[] }) {
  return (
    <div className="rounded-[16px] bg-log-bg p-5 shadow-inner">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-log-mute">
          agent log
        </div>
        <div className="font-mono text-[10px] text-log-mute">
          creative-director · claude-sonnet-4-6
        </div>
      </div>
      <div className="log-scroll max-h-72 overflow-y-auto pr-2">
        <ol className="space-y-2 font-mono text-[12.5px] leading-[1.5]">
          {log.map((e, i) => (
            <li key={i} className="flex items-start gap-3 text-log-ink">
              <span
                className={`mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center ${levelColor[e.level]}`}
                aria-hidden
              >
                {levelMark[e.level]}
              </span>
              <span className="flex-1">
                <span className="text-log-ink">{e.step}</span>
                {e.detail && (
                  <span className="ml-2 text-log-mute">· {e.detail}</span>
                )}
              </span>
              {e.durationSec != null && (
                <span className="flex-none text-log-mute tabular-nums">
                  {e.durationSec.toFixed(1)}s
                </span>
              )}
              {e.level === "running" && (
                <span className="flex-none text-log-warn tabular-nums">
                  running…
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
