# Tools (Phase 2+)

Helper modules the agents and the web app share. Empty until Phase 2.

Planned files:

- `supabase.ts` — read/write deals, assets, approvals, audit log.
- `image-gen.ts` — call Replicate (or DALL-E) to produce hero images from an ad's `imagePrompt`.
- `guardrails.ts` — validation that cannot be bypassed by the agent:
  - Price regex match (output prices vs. brief)
  - Future-date check on all travel dates
  - SMS length ≤ 160 and must include "Reply STOP to opt out"
  - Subject-line spam-trigger scan
  - Brand voice ban-list
- `preview.ts` — rendering helpers (markdown → landing-page JSX, email → inlined HTML, SMS → preview strings).
