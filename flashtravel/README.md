# FlashTravel Creative Agent

A creative ops control panel for a 2-person flash-sale travel business. Drop a deal brief in, get back a launch package: landing page, emails, SMS, ad creative. You approve, then it goes live.

## Where we are right now

**Phase 1: UI shell with sample data.** No real agent, no database, no API calls yet. You can run the app and click around to see how the dashboard and review panel feel before we wire anything to a backend.

## Run it locally

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000.

You'll see:
- The dashboard with 8 hardcoded sample deals across different statuses
- Stat strip at the top
- Filter chips + search
- Click any card to open the slide-in review panel with sample landing page / email / SMS / ad / guardrail content

Nothing here talks to a real database. Everything is hardcoded sample data in `web/lib/sample-deals.ts`.

## What to do next

Open this folder in Claude Code and tell it: **"read CLAUDE.md and start phase 2."**

Phase 2 is wiring Supabase — you'll need a Supabase account and project before you start. Free tier is fine for now.

## Accounts you'll need eventually

| Service | Used for | When you need it |
|---|---|---|
| Anthropic API | Agent calls | Phase 2 (agent build) |
| Supabase | Deals, assets, approvals, audit log | Phase 2 (persistence) |
| Resend | Email send | Phase 4 (email writer) |
| Twilio (or similar) | SMS send | Phase 5 (SMS writer) |
| Replicate or DALL-E | Hero image generation | Phase 7 (ad creative) |
| Vercel | Hosting the web app + landing pages | Phase 9 (deploy) |
| Railway | Background agent jobs | Phase 9 (deploy) |

You don't need any of these to look at the Phase 1 UI.

## Folder layout

```
flashtravel/
├── CLAUDE.md                 # context Claude Code reads each run
├── README.md                 # this file
├── brand/
│   ├── voice.md              # how the brand sounds
│   ├── design-tokens.json    # colors, fonts
│   └── examples/             # drop screenshots of past approved creative here
├── agents/                   # agent code (empty until phase 2)
├── tools/                    # helper code (empty until phase 2)
├── web/                      # the Next.js dashboard you're looking at
├── deals/                    # drop deal briefs (.md files) here
└── output/                   # approved assets land here
```

## A note on the look

The dashboard is intentionally NOT shaped like enterprise SaaS. Warm sand background, coral and ocean accents, Fraunces serif italic for big headlines. Travel magazine meets Stripe dashboard. If something starts looking like generic AI software, push back.
