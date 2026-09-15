# Miqwad public website

Standalone Arabic public marketing website for Miqwad. This repository is separate from the Miqwad product application; application screens, business logic, and state libraries do not belong here.

**Status: Header + Hero implemented from supplied assets; browser visual and interaction validation remains blocked by local-preview access. This phase is not yet declared complete.** See `docs/implementation-status.md`.

## Development

Use Node.js 22 or newer and npm. Node 24 was used during setup.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Validation commands:

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Stack and structure

Next.js App Router, React, strict TypeScript, Tailwind CSS, and ESLint. The root layout and page are Server Components. Only the interactive Header is a client boundary; Hero and page remain Server Components. No application state dependency was added. ESLint 10 uses the official @eslint/compat wrapper for older rule APIs in Next’s bundled plugins; see the status report for upstream peer-range warnings.

| Path | Responsibility |
| --- | --- |
| `app/layout.tsx` | Arabic/RTL root and initial SEO metadata |
| `app/page.tsx` | Header and Hero composition |
| `components/layout/` | Responsive Header and mobile navigation |
| `components/sections/HeroSection.tsx` | Server-rendered Hero and supplied artwork |
| `app/globals.css` | Tailwind, shared website tokens, focus behavior |
| `app/fonts.ts`, `app/fonts/` | Self-hosted IBM Plex Sans Arabic and Tajawal WOFF2 fonts and licenses |
| `config/site.ts` | Verified copy and nullable external destinations |
| `docs/figma-source.md` | Authoritative design map and observed composition |
| `docs/implementation-status.md` | Current progress, validation, and blocker |
| `AGENTS.md` | Scope and future development rules |

Production assets are organized under `public/brand/`, `public/images/hero/`, and `public/store-badges/`. Asset provenance and derivations are recorded in the status report.

Fonts were extracted from Fontsource packages version 5.3.0, retaining their SIL OFL licenses. Arabic and Latin subsets are separate font faces; only needed weights are included. `next/font/local` serves them from the site, removing build-time dependency on Google Fonts. Fontsource is not an application dependency.

## Design and contribution workflow

Figma is authoritative for appearance; normal responsive web flow is authoritative for behavior. Preserve the distinct mobile Hero composition. See `docs/figma-source.md` before editing.

Work on `feat/header-hero`, never directly on `main`. Implement and visually review one section at a time. This phase ends at Header + Hero; do not add Services, How It Works, CTA, Footer, or Policies. Run static checks, production build, and browser checks at the required widths before committing the phase. Commit and push the feature branch only after phase completion. No PR creation or merge without explicit request.

Production domain and store destinations are unknown and nullable in `config/site.ts`. No canonical URL, metadataBase, social account, store link, or business claim is invented. Wire verified destinations to metadata and links when product provides them.
