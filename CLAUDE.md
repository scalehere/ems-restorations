# CLAUDE.md — ems-restorations-funnel

## Role
Senior front-end developer. Mold-remediation landing page funnel; clean, modern, premium feel.

## Project
A single-page lead-gen funnel currently mirroring `myvoda.com/jersey-shore/mold-remediation/`. The eventual destination is an EMS Restorations (or other) rebrand — see HANDOFF for the rebrand checklist.

Live: https://ems-restorations.vercel.app (private)
Repo: https://github.com/scalehere/ems-restorations (private)

## Tech Stack
- **Next.js 16** (App Router, React 19, TypeScript strict, Turbopack)
- **Tailwind CSS v4** — tokens live in `src/app/globals.css` via `@theme inline {}` and `:root`. No `tailwind.config.js`.
- **shadcn/ui** + `@base-ui/react` primitives. `<Button>` does NOT support `asChild` here.
- **`next/font/google`** — Outfit (headings) + Barlow (body), wired in `src/app/layout.tsx`.
- **GoHighLevel (LeadConnector)** — Hero quote form is a live embedded iframe, form ID `EEJ792UCw3hfLSrTfLyQ`. The `form_embed.js` script that auto-resizes the iframe is loaded via `next/script` with `strategy="afterInteractive"`.

## Build Commands
```bash
npm run dev      # local preview at http://localhost:3000
npm run build    # production build (this is what Vercel runs)
npm run typecheck
npm run lint
npm run check    # lint + typecheck + build
```

The owner runs `npm run dev` themselves in their own terminal — do not start it.

## Key Directories
- `src/app/` — `layout.tsx` (root html + fonts + metadata), `page.tsx` (just imports + arranges sections), `globals.css` (color tokens, base styles).
- `src/components/` — one file per section (Header, Hero, Overview, WhyEMSTabs, Gallery, MoldRemediation, FireSmoke, Process, Testimonials, FaqSection, MoreServicesGrid, FinalCta, MapEmbed, Footer, MobileTopBar, Breadcrumb). Plus `icons.tsx` (all inline SVG icons) and `ui/button.tsx` (shadcn).
- `src/lib/content.ts` — **text content lives here.** Testimonials, FAQs, nav links, service cards, footer columns, phone/location constants. This is the primary file to touch for copy changes and (eventually) the rebrand.
- `src/types/content.ts` — TypeScript shapes for the content data.
- `public/images/` — site imagery + logos + badges.
- `public/seo/` — favicons + apple-touch-icon.

## Reference Files

Trigger-load (only when the task touches the area):
- Active task tracker → `my_references/my_files/HANDOFF.md` (read the priority queue section by default)
- Mid-session continuation / dirty working tree → `my_references/my_files/session-log.md` (last entry only)
- Navigation map for `my_references/my_files/` → `my_references/my_files/INDEX.md`
- UI bug reference → `my_references/screenshots/`
- Colors, fonts, spacing, card style, legacy variable map → `.claude/docs/design-tokens.md`

> **Note to fresh clones / external collaborators:** `my_references/` is gitignored — it's personal/local refs only. The committed code + this CLAUDE.md are the canonical project state. The user-level `~/.claude/CLAUDE.md` + `~/.claude/PLAYBOOK.md` cover universal rules (commit conventions, voice input, parallel sessions, etc.) and are also outside this repo.

## Design Direction

EMS Restoration brand (updated 2026-05-22).

- **Colors:** charcoal `#1F2937` (primary text + dark CTAs), green `#1E8E3E` (primary CTA bg + all interactive), orange `#F57C20` (section bubble label pills, named token `--orange-accent`), warm cream `#F5F1EB` (alt section bg). Defined in `src/app/globals.css` `:root`. **Note:** CSS variable names (`--navy`, `--cyan`) were kept from the Voda template to avoid touching 60+ Tailwind class references — the values are EMS, the names are legacy. `--cyan` = green `#1E8E3E`; `--orange-accent` = orange `#F57C20`.
- **Fonts:** Outfit (headings, 700–800 weights), Barlow (body, 400–600).
- **Sections alternate** between white and muted bg for visual rhythm. ~70px vertical padding per section on desktop.
- **Max content width:** 1200px.
- **Card style:** rounded (8–16px), subtle shadow, hover lift / image zoom on interactive cards.

## Brand Voice (EMS Restoration)

Direct, trust-forward, urgency-driven. Core angles: handles insurance claims start to finish, veteran-owned and disciplined, 24/7 emergency response, zero out-of-pocket goal on covered damage. Key proof points: 1,000+ insurance claims handled, Licensed CA #1081134, IICRC-certified, serves all San Diego County.

## Coding Behavior
- Never break working features — ask before large changes.
- Ask owner to check in browser before committing any UI change.
- Keep components reusable; favor data-driven (drive from `content.ts`) over hard-coded text.
- Explain in plain English — owner is a beginner.
- Don't start `npm run dev` — owner runs it themselves.

## Workflow Notes
- Before every task: restate interpretation in plain English and ask for confirmation before touching any files.
- Always branch before any task — `git checkout -b type/scope` off `master`. Direct commits to `master` only for trivial one-liners.
- Update `my_references/my_files/session-log.md` after each meaningful change.
- Never push unless explicitly asked to.
- After completing a UI change: ask owner to check in browser before committing.

## Session start / end + commit / PR rules

Use the `/start` and `/end` slash commands (defined at `~/.claude/commands/`). Universal commit and PR rules live in `~/.claude/CLAUDE.md` and auto-load every session — not duplicated here.
