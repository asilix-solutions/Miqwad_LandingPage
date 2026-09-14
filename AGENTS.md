# Miqwad public website

- Work only in `asilix-solutions/Miqwad_LandingPage`; inspect repository identity, branch, and existing files before changing anything.
- Never develop directly on `main`. Current phase branch: `feat/project-foundation-hero`.
- Do not merge final PRs without explicit user authorization. Do not create a PR for this phase unless requested.
- Figma visual intent is authoritative. Follow `docs/figma-source.md`; unrelated product screens are out of scope.
- Reconstruct visual intent using normal flow, Grid/Flex, responsive containers, and content-driven breakpoints. Never translate canvas coordinates into a fixed page.
- RTL-first: retain root `lang="ar" dir="rtl"`, logical spacing, semantic markup, keyboard access, and visible focus.
- Reuse exact local assets, fonts, tokens, and components. No generic AI redesign, substitute logo, or phone artwork.
- Never commit temporary Figma asset URLs or embedded base64 artwork. Preserve actual vectors as SVG.
- Tailwind is primary; Server Components by default. Client Components only for real interaction. No unnecessary dependencies.
- Implement one approved section at a time. This phase is foundation, Header, and Hero only.
- Validate actual rendered desktop/mobile layouts against Figma and widths 375, 440, 768, 1024, 1280, and 1440. Check overflow, menu keyboard behavior, hydration, and assets.
- `npm run typecheck`, `npm run lint`, and the production build must pass before declaring completion.
- Do not claim visual completion without browser inspection. Record blockers honestly in `docs/implementation-status.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
