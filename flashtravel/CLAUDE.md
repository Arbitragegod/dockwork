# FlashTravel Creative Agent — context for Claude Code

Read this file at the start of every session.

## What this project is
An AI agent that takes a 1-paragraph deal brief and produces a full launch package: landing page, 3 email variants, 5 SMS variants, 4 ad creatives. A human reviews everything in a dashboard before anything goes live.

## Who runs it
A 2-person flash-sale travel business. Mainstream family travel — cruises, all-inclusives, Disney, Sandals/Beaches. NOT ultra-luxury. The owner is non-technical: explain in plain English, recommend instead of asking, default to the simpler option.

## Where we are in the build
**Phase 1 complete (UI scaffold):** dashboard + slide-in review panel with hardcoded sample data. No agent, no DB, no API calls yet.

**Next phases (in order):**
1. Wire Supabase persistence for deals + assets + audit log
2. Build the landing-page generator agent against one real test deal
3. Add email writer (3 variants)
4. Add SMS writer (5 variants, ≤160 chars)
5. Add ad creative generator (copy + image prompts)
6. Add orchestrator (Creative Director) that runs them in parallel
7. Add guardrail validation layer (enforced in code, not just prompts)
8. Wire the approve-and-deploy flow (preview URL + email/SMS queue)

## Stack
- Next.js 15 (App Router) + Tailwind CSS 4 (CSS-first config in `app/globals.css`)
- Supabase (deals, assets, approval state, audit log)
- Anthropic API with Claude Sonnet 4.6 (`claude-sonnet-4-6`) for agent calls
- Resend for sending email previews to a single inbox
- Deploy targets: Vercel (web) + Railway (background jobs)

## Hard guardrails (enforce in code, never via prompt alone)
- Never mark approved without explicit human action in the dashboard
- Prices in output must exactly match prices in the deal brief (regex validation)
- All travel dates must be future-dated
- SMS ≤160 chars and must include "Reply STOP to opt out"
- Subject lines screened against a spam-trigger word list (`tools/guardrails.ts`)
- Brand voice ban-list: no "luxury," "exclusive elite," "VIP only" — favor "family," "vacation," "deal," "getaway"

## Visual direction (non-negotiable)
- Background: warm sand `#fdf8f1`
- Accents: coral `#ff5b3a`, ocean `#1090c2`, sunshine `#ffc83d`, palm `#2da76b`
- Ink: deep navy `#1a2540` (not pure black)
- Headline font: Fraunces (italic for emphasis like "Today's flash sales")
- Body font: Inter Tight
- Mono font (logs, stat labels): JetBrains Mono
- Feel: travel magazine meets Stripe dashboard — bright, vacation-forward, a little editorial. NOT generic AI SaaS.

## Project layout
```
flashtravel/
├── CLAUDE.md                 # this file
├── README.md                 # plain-English explainer for the owner
├── brand/
│   ├── voice.md              # tone, words to use/avoid
│   ├── design-tokens.json    # colors, fonts, spacing
│   └── examples/             # screenshots of past approved creative
├── agents/                   # agent definitions (creative-director, landing-page, email-writer, sms-writer, ad-creative)
├── tools/                    # supabase, image-gen, guardrails, preview helpers
├── web/                      # Next.js app (dashboard + review panel)
├── deals/                    # markdown deal briefs (input)
└── output/                   # approved assets exported here
```

## Working rules for Claude Code
- Use the `frontend-design` skill from github.com/anthropics/skills for ALL UI work. The dashboard and landing pages must not look AI-generated.
- Use the Supabase MCP for all DB operations (don't hand-roll the client when MCP is faster).
- Use the Vercel MCP at deploy time. Don't deploy anything until the owner explicitly says "deploy it."
- Build in the order above. After each numbered phase, STOP and let the owner test.
- When in doubt: pick the simpler path and tell the owner why.
- Don't add features beyond what the current phase requires.
