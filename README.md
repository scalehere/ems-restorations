# ems-restorations-funnel

Landing page funnel for Voda Cleaning & Restoration (Jersey Shore — mold remediation).

## Stack

- Next.js 16 (App Router, React 19, Turbopack, TypeScript strict)
- Tailwind CSS v4 with OKLCH design tokens
- shadcn/ui primitives (Radix + Base UI)
- Lucide React icons + custom inline-SVG icon set
- GoHighLevel (LeadConnector) embedded quote form

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # lint + typecheck + build
```

## Project layout

```
src/
  app/            # routes (single landing page at /)
  components/     # section components (Hero, FaqSection, ...)
    ui/           # shadcn primitives
    icons.tsx     # inline SVG icon set
  lib/            # cn() + content data
  types/          # shared TS interfaces
public/
  images/         # site imagery + logos + badges
  seo/            # favicons + apple-touch-icon
```

## Deploy

Vercel — connect this repo and accept the Next.js defaults.

## License

Proprietary — internal client work.
