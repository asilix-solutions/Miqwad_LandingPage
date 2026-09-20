# Figma source map

File key: `nyDHvMMyddJ3MAQCaud9An`.

| Reference | Node |
| --- | --- |
| Home Desktop | `8458:21357` |
| Home Mobile | `8829:20958` |
| Mobile navigation, open | `9054:26958` |
| Policies Desktop, future route | `8743:22338` |
| Policies Mobile, future route | `8898:23148` |
| Desktop Hero details | `9100:24468`, `9100:21969`, `9100:21973`, `9100:21970` |
| Mobile Hero details | `9100:22641`, `9100:22645`, `9100:22642` |

Home nodes are authoritative for the public landing/home page. Inspect the Home frames first; use detail nodes only when necessary. Policies belong to a separate future route. The mobile menu is a state reference, not a page. Unrelated Admin, Provider, and Customer application screens are out of scope.

Figma determines visual intent, hierarchy, composition, typography, colors, spacing relationships, gradients, and exact artwork. Web standards determine responsive behavior. Do not paste generated coordinate layouts into production.

## Inspected during the earlier foundation phase

`get_design_context`: all three Home/menu primary references above. `get_variable_defs`: Desktop Home. No policy or optional Hero detail references inspected.

Read-only descendants used to inspect or attempt asset export:
- Desktop Hero: `8417:42010`; phone artwork: `8541:43222`.
- Mobile Hero: `8871:21369`.
- Desktop badge nodes: `8425:21531`, `8425:21532`.
- Mobile badge nodes: `8874:23178`, `8874:23187`.
- White logo: `8745:47593`.
- Closed menu icon: `I9034:26805;9034:26898`.
- Blue logo: `I9054:26959;9034:26721`.
- Close icon: `I9054:26959;9034:26906`.

All Figma calls were read-only; no canvas nodes were created or modified.

## Observed intent for implementation

Desktop: 1280px reference, 102px header overlay, centered title/supporting copy and store badges, centered overlapping phone composition cropped by a roughly 692px Hero. Mobile: 440px reference, 68px closed header and 427px open white menu panel; roughly 956px Hero with separately cropped/staggered phones and a radial highlight plus bottom fade. These are reference measurements, not fixed webpage dimensions.

Header labels: الرئيسية، الخدمات، آلية العمل، تحميل التطبيق. Services and How It Works are not implemented in this phase; do not create nonexistent section destinations or add those sections without approval.

Typography: IBM Plex Sans Arabic 700 for the 32px Hero title; Tajawal 500 for the 20px supporting copy; IBM 400/500 for controls/navigation. Metadata copy is taken from the Hero.

Verified colors: brand `#043168`, accent `#f45e2b`, Hero deep `#011d41`, ink `#01142e`, app background `#f5f6fa`, muted `#a6aabe`, border `#a6aabe4d`, surface white.

Assets must be saved locally before implementation. Never commit MCP asset URLs. See implementation-status.md for asset provenance and the outstanding browser validation gate.

## Header + Hero attachment authority — 2026-09-15

For this phase, the user explicitly prohibited further Figma MCP calls. The attached implementation brief and original assets supersede the earlier download blocker. No Figma call was made for this implementation.

- Desktop Hero reference: `Hero Section(1).png`, 1280 × 692.
- Desktop Header reference: `Frame 5991 (1)(1).png`, 1280 × 102.
- Mobile Hero reference: `Hero section (1)(1).png`, 440 × 956.
- Open navigation reference: `Frame 5991(1).png`, 440 × 427.
- Original interior photo: `الداخليه(1).png`, 1672 × 941.
- Vector logo: `Pasted text (2)(2).txt`, 100 × 36; white artwork with orange accents. Blue version uses identical paths with white fills replaced by the existing brand blue.
- The three phone SVG wrappers in `Pasted text (3)(2).txt`, `(4)(1).txt`, `(5)(1).txt` contain the same original 2017 × 2048 transparent PNG; extracted once, without committing base64 wrappers.
- App Store and Google Play SVGs were supplied inline, each duplicated. One vector file per store is used. Desktop clips only surrounding blank padding to fit the observed 120 × 40 containers; mobile uses 160 × 48 originals.

Reference screenshots are comparison inputs only and are not rendered by the website. Header menu/close strokes are CSS control glyphs; proprietary artwork is never recreated. Exact separate menu/close vector files were not included, so those glyphs are an explicit approximation pending visual review.
