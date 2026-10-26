# Agent definitions (Phase 2+)

This folder holds the agent code that produces launch packages. Empty until Phase 2.

Planned files (don't create ahead of time):

- `creative-director.ts` — orchestrator. Reads the brief, kicks off the four writers in parallel, waits, assembles the review package, runs guardrails, updates deal status.
- `landing-page.ts` — produces the landing page copy + layout plan.
- `email-writer.ts` — 3 subject/preheader/body variants.
- `sms-writer.ts` — 5 variants, each ≤ 160 chars, each with "Reply STOP to opt out."
- `ad-creative.ts` — 4 ad units across platforms (headline, primary, image prompt).

Each agent uses the Anthropic SDK (`@anthropic-ai/sdk`) and `claude-sonnet-4-6`. The orchestrator passes shared context: deal brief, brand voice (`brand/voice.md`), 2-3 approved past examples.

Guardrails are enforced in `tools/guardrails.ts`, not in prompts.
