# Header + Hero — implemented, browser validation pending

Date: 2026-09-15. This report supersedes the earlier asset-transfer blocker; the historical foundation report is retained below.

| Requested report item | Result |
| --- | --- |
| 1. Repository | `asilix-solutions/Miqwad_LandingPage`; origin verified. No other repository used. |
| 2. Base commit | `55c1e86cc3831efb8021487cefd6944054248d6e` on `origin/main`. |
| 3. Working branch | `feat/header-hero`. |
| 4. Assets identified | Four reference screenshots, original interior photo, white vector logo, three duplicate raster phone wrappers, duplicate inline store vectors. See source map. |
| 5. Production assets | `public/brand/miqwad-white.svg`, `public/brand/miqwad-blue.svg`, `public/images/hero/car-interior.png`, `public/images/hero/phones.png`, `public/store-badges/app-store.svg`, `public/store-badges/google-play.svg`. |
| 6. Header | `components/layout/SiteHeader.tsx`; fixed overlay, logo right, navigation center, CTA left; mobile at widths below 768px. |
| 7. Mobile menu | `components/layout/MobileNavigation.tsx`; white disclosure panel, blue logo, dividers, orange CTA. Named native trigger with expanded/controls states; Escape restores trigger focus; closes on navigation, outside pointer, focus leaving Header, and desktop resize. Tall-menu overflow is scrollable on short viewports. These interactions are implemented but not browser-verified. |
| 8. Hero | `components/sections/HeroSection.tsx`, composed from `app/page.tsx`; semantic h1/copy, store artwork, local car/phone assets. |
| 9. Scroll approach | Passive listener with 8px threshold; only sets boolean state when the threshold result changes. Cleanup on unmount. |
| 10. Surface/blur | At top: transparent. Scrolled: existing brand at 75% opacity, 8px backdrop blur, subtle white border. No foreground filter or shadow. 200ms visual-property transition; reduced motion disables it. |
| 11. Responsive approach | Flow-based content, max-width Header and artwork stages; desktop combined phones, separately cropped/rotated mobile phones; aspect ratios and percentage positions only within decorative stage. Local fonts and existing Tailwind tokens retained. |
| 12. Widths visually checked | None. Required 375, 390, 440, 768, 1024, 1280, 1440 remain pending in an accessible browser. |
| 13. Desktop Header comparison | Reference inspected; browser comparison not performed. |
| 14. Desktop Hero comparison | Reference inspected; browser comparison not performed. |
| 15. Mobile Hero comparison | Reference inspected; browser comparison not performed. |
| 16. Mobile menu comparison | Reference inspected; browser comparison not performed. |
| 17. Header top | Implemented, not browser-verified. |
| 18. Header scrolled | Implemented, not browser-verified. |
| 19. Return to top | Implemented, not browser-verified. |
| 20. Typecheck | PASS (`next typegen` and strict TypeScript). |
| 21. Lint | PASS. |
| 22. Production build | PASS, home statically prerendered. |
| 23. Runtime/browser | Production server starts with explicit loopback hostname. Browser navigation to local preview returned `net::ERR_BLOCKED_BY_CLIENT`; no console, hydration, missing-resource, keyboard or overflow browser assertion is claimed. |
| 24. Remaining differences | Visual match remains unmeasured, especially crop/gradient/phone alignment and intermediate widths. Blue logo is a fill-only derivative; menu and close are CSS strokes because separate original icon exports were not supplied. Store destinations remain null; Services/How It Works labels have no fake links. |
| 25. Git status | The user explicitly authorized committing the current implementation despite pending browser validation. Commit is local on `feat/header-hero`; no main changes, PR or merge. |
| 26. Commit | `feat: implement Miqwad header and hero`; based on `55c1e86`. This commit does not certify visual completion. |
| 27. Push | Not performed in this commit-only follow-up; browser validation remains pending. |

## Visual polish follow-up

Baseline: `cb5c0b2a87d8961528a0d097d66bb5fa7a1502bb`; branch: `feat/header-hero`.

- Replaced only the scrolled Header's brand-blue surface with white at 3% opacity. Retained the 8px backdrop blur and very light white 10% bottom border. Top state and mobile menu are unchanged; foreground content has no blur filter. The transparent surface naturally shows the underlying Hero colors without adding a blue tint of its own.
- Scaled the existing phone composition to 104% from its top center and translated it down 12px. The same stage dimensions, crop positions and rotation are retained. A clipped, masked artwork wrapper permits a 20px soft overlap beyond the Hero onto the existing white page background; the background image and existing Hero fade are unchanged.
- `npm run typecheck`, `npm run lint`, and `npm run build`: PASS after the refinement.
- Production server started successfully. Browser access to the local preview failed with `net::ERR_BLOCKED_BY_CLIENT`. Visual review at 1280px and 440px, top/scrolled appearance, border subtlety, overlap, and overflow remain unverified; no visual-completion claim is made.
- User explicitly requested exactly one refinement commit. No push or merge.

## Phone containment correction (current, uncommitted)

- Removed the previous 20px overflow extension and its extra edge mask. The artwork wrapper now uses `absolute inset-0 overflow-hidden` within the existing responsive, aspect-ratio stage; the Hero again clips overflow on both axes. Following content no longer shares an overflowing phone layer.
- Retained 104% artwork scale and the existing rotations/crops. Reduced the downward translation from 12px to 8px, still slightly below the original implementation. Hero height, internal flow spacing, background, glow and foreground fade are unchanged.
- Scrolled Header retains neutral white at 3% opacity and 8px backdrop blur. Its 1px bottom border is now exactly `#A6AABF` at 30% opacity. Top transparency and mobile menu behavior are unchanged.
- Available desktop 1280 × 692 and mobile 440 × 956 reference images were inspected. No new measurement attachment was available in this turn. Browser preview again returned `net::ERR_BLOCKED_BY_CLIENT`; rendered visual matching, responsive overflow, and top/scrolled appearance remain unverified.
- `npm run typecheck`, `npm run lint`, `npm run build`: PASS. Changes left uncommitted as requested; no push, merge, or rebase.

## Final layering and mobile composition refinement

Baseline: `b229ecbfda9234961ef62cfa01403dd18ee3a8ee`.

- Diagnosis: no `mask-image` remained at this baseline. The final foreground `.hero-fade` covered the phones; nested mobile rectangular viewports clipped device silhouettes. The outer Hero and an additional artwork wrapper both clipped overflow. The opaque Hero background did not expose a following white section through a mask.
- Background photography, black overlay, glow and bottom fade now share one clipped background layer behind real content and phones. No fade or opacity mask is applied to the artwork. The Hero remains bounded; its artwork stage reserves the complete transformed image bounds.
- Mobile: replaced crop boxes and redundant added rotation with two original-image layers isolated through the source's transparent gap, retaining native perspective. An alpha-pixel check confirms the separating polygons exclude zero nontransparent pixels from either device. Retained the mobile aspect-ratio stage, 4% enlargement, 8px downward shift and reference spacing. Subtitle has a centered 400px maximum width; its 20px font can wrap naturally at 375/390px without forced nowrap.
- Badge row explicitly uses LTR visual flow: Google Play left, App Store right on mobile and desktop. Page RTL, badge SVGs, header and mobile navigation are unchanged.
- Desktop containment trade-off: complete phones at their existing scale/top position need a 466px stage rather than the former 281px crop. The desktop Hero is therefore about 185px taller, and the cover-photo crop changes with its height. This prioritizes the explicit intact-phone requirement; the resulting desktop composition requires local approval and is not claimed equivalent to the previously approved cropped composition.
- Calculated artwork bounds fit at 375, 390, 440, 446, 768, 1024, 1280 and 1440px. At 440px, mobile artwork ends about 427px into its 454px stage; desktop ends about 458px into its 466px stage. These are geometric checks, not browser overflow assertions.
- `npm run typecheck`: PASS. `npm run lint`: PASS. `npm run build`: PASS.
- Actual browser preview remains blocked by `ERR_BLOCKED_BY_CLIENT`. Visual matching, background crop, text wrapping and rendered overflow require local QA; no browser approval is claimed.
- Exactly one requested commit and an external Git bundle export; no push, merge, rebase or next-section implementation.

## Responsive bottom composition — current correction

- The preceding desktop stage changed from 281px to 466px at its reference width to expose complete devices, adding 185px to the Hero. User has now explicitly approved the Figma desktop boundary crop instead.
- Restored the desktop bottom-region ratio to 426:281. Content remains in normal flow, giving approximately 692px Hero height at 1280px without a fixed Hero width/height. Desktop artwork is anchored with `bottom-0` inside this final region; its intrinsic image height can extend internally. Scale remains 104%, displacement 8px. Only the outer Hero shell crops the intended lower portions; no inner desktop clipping, opacity mask, or foreground fade is used.
- Desktop/mobile positioning wrappers are now distinct. Mobile retains its 440:454 stage, full device silhouettes, independent offsets and approximately 956px Hero at 440/446px when subtitle fits one line. Narrower widths allow text wrapping. Header and badge order remain unchanged.
- Lower multi-stop fade stays behind phones, flush with the Hero bottom: mobile height scales with viewport width up to 348px; desktop uses its separate 90px region. Radial glow is composed after the background fade, still behind artwork, restoring atmospheric light without fading screens or adding a rectangular patch. Glow placement/shape differs by breakpoint.
- Layout reasoning covers 375, 390, 440, 446, 768, 1024, 1280 and 1440px. Mobile device bounds remain inside their stage; desktop bottom crop is intentional and sides remain inside the viewport. No next section was introduced.
- `npm run typecheck`: PASS. `npm run lint`: PASS. `npm run build`: PASS. `git diff --check`: PASS.
- Production preview started, but browser access again returned `ERR_BLOCKED_BY_CLIENT`. No rendered width, overflow, or visual approval is claimed; desktop crop and mobile glow require local QA.
- One requested commit: `fix: align hero bottom composition across breakpoints`; verified bundle exported outside the repository. No push, merge or rebase.

## Verification and follow-up

No new dependency, generic replacement artwork, additional marketing section, or remote Figma URL was introduced. The original PNG artwork retains transparency and dimensions; Next Image provides responsive delivery. Background is eager/high priority; content and artwork reserve layout space. Temporary preview harness was removed.

To finish this phase: run the production site in a browser that can access it, compare all four reference images, review every requested width and keyboard interaction, check actual assets/console/hydration/overflow, tune visual differences, then rerun static checks and commit/push only `feat/header-hero`. For scroll QA on the isolated 692px desktop Hero, use a viewport shorter than the Hero rather than adding out-of-scope page content.

The production runtime in this environment requires `npm run start -- --hostname 127.0.0.1 --port 3002`; the default host discovery reported an OS network-interface error. No application configuration was changed to work around that environment issue.

---

# Earlier foundation report (historical)

Date: 2026-09-14.

## Scope and source control

1. Verified repository: `asilix-solutions/Miqwad_LandingPage` (GitHub ID 1369436562). Origin is `https://github.com/asilix-solutions/Miqwad_LandingPage.git`.
2. GitHub reports default branch `main`. Repository was genuinely empty: no remote branches, no commits, no tracked project files. Local unborn feature branch: `feat/project-foundation-hero`.
3. Nothing was changed in any other repository. No Figma nodes were created or edited.

## Completed foundation

- Next.js 16.3.5; React and React DOM 19.3.0; TypeScript 5.9.3 (strict); Tailwind CSS and its PostCSS integration 4.3.3; ESLint 10.10.0; eslint-config-next 16.3.5; @eslint/compat 2.1.1. npm lockfile retained.
- Runtime dependencies: Next.js and React/React DOM only. Development dependencies: TypeScript and type packages, Tailwind/PostCSS, ESLint/Next config. @eslint/compat is necessary because bundled React/import/accessibility rules still call older ESLint APIs; lint failed without the compatibility wrapper. npm emits peer-range warnings for those upstream plugins; compatibility requires review when upgrading them.
- Project structure: `app/`, `app/fonts/`, `config/`, `docs/`, root README and AGENTS. No unused component scaffolding or extra route was created.
- Root document has `lang="ar" dir="rtl"`. Layout and page are Server Components; no client JS component introduced.
- Small Tailwind token set: brand #043168, accent #f45e2b, Hero deep #011d41, ink #01142e, muted #a6aabe, border #a6aabe4d, surface #fff, app #f5f6fa; control/card radii, container max-width, fluid section spacing. Focus-visible styles established.
- Fonts: self-hosted IBM Plex Sans Arabic 400/500/700 and Tajawal 500, with Arabic/Latin subsets under `app/fonts/`, via next/font/local. OFL licenses included. Exact font files were extracted from Fontsource 5.3.0 packages; no Fontsource application dependency and no Google Fonts build request.
- Initial title, description, Open Graph and Twitter metadata use only Figma Hero copy. `metadataBase`, canonical URL, and social/store destinations are not invented. Missing destinations are isolated in `config/site.ts`.
- Default Next.js artwork/favicon and starter-page boilerplate removed. Current home route is intentionally empty and is NOT a completed landing page.

## Figma inspection and asset blocker

Read all three primary references via get_design_context: `8458:21357`, `8829:20958`, `9054:26958`. Read Desktop variables. Read only the Header/Hero descendants documented in figma-source.md; no optional detail, policy, or application screen exploration.

Exact asset URLs were returned for the car photography, phones, logos, menu icons, and badges. Downloads timed out after 60 seconds with zero bytes; a separate fetch attempt failed too. A read-only direct original-image byte export was truncated in the tool's text response. A binary export attempt did not expose a local/downloadable attachment. No incomplete bytes or fabricated replacement images have been placed in the repository.

**Figma assets downloaded successfully: none. Production asset paths: none yet.**

Required files to resume:
- Original car interior Hero photo (visible fill of `8417:42010`, also used in `8871:21369`; source 1672 × 941).
- Original transparent phones artwork (`8541:43222`; source 2017 × 2048), plus mobile source if a distinct asset.
- White and blue Miqwad logos, preserving SVG vectors.
- Menu and close SVG icons.
- Exact desktop and mobile App Store/Google Play badge exports.

Suggested future local destinations: `public/images/`, `public/brand/`, `public/icons/`, `public/store-badges/`. Temporary MCP URLs are not committed or referenced by application code.

## Remaining implementation and QA

Header: not implemented. Mobile navigation: not implemented. Hero: not implemented. Responsive composition: inspected and documented, not implemented or validated. No Services, How It Works, CTA, Footer, Policies, or unrelated pages implemented.

Desktop and mobile design differ in phone cropping/placement and gradients; preserve that intent with flow-based content and an isolated responsive decorative layer, not a fixed canvas. Missing future section anchors must not become fake navigation destinations.

Validation of the current foundation:
- `npm run typecheck`: PASS.
- `npm run lint`: PASS after ESLint compatibility wrapper.
- `npm run build`: PASS; home route statically prerendered.
- No browser runtime/hydration checks performed.
- No widths visually checked; no visual equivalence claimed; no review screenshots produced.
- Missing-asset and overflow checks for the final Header/Hero remain pending.

Product input still needed: verified production domain, App Store destination, Google Play destination. These are separate from the blocking need for actual image/vector files.

## Git status and continuation

At the end of the initial implementation attempt, all files were uncommitted and no remote mutation had occurred.

The user subsequently explicitly requested publishing this partial foundation to `main` (2026-09-14), overriding the earlier completion gate for this publication only. This foundation commit is prepared on `feat/project-foundation-hero` for publication to the empty `main` branch. Header/Hero and visual QA remain incomplete. No PR is required for this explicitly authorized initial publication.

Upload exact assets as a ZIP to resume asset organization, Header/Hero implementation, and required browser checks on the feature branch. Future development remains off `main`.
