# Royal IHC homepage POC

Proof-of-concept for [royalihc.com](https://www.royalihc.com) in Next.js and shadcn. Two routes:

| URL | What you see |
| --- | --- |
| [`/`](https://jdkstr.github.io/royal-ihc/) | Proposal redesign (SaaS product site, IHC red as accent) |
| [`/parity`](https://jdkstr.github.io/royal-ihc/parity/) | Faithful recreation of the current Drupal homepage |

Live: [https://jdkstr.github.io/royal-ihc/](https://jdkstr.github.io/royal-ihc/)

The live Drupal paragraphs are modeled as a typed section list so a later CMS (Keystatic, Sanity) is an adapter, not a rewrite.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Footer link **View current website** opens `/parity`.

GitHub Pages is a static export (`output: "export"`). Local `next dev` has no `basePath`; the Pages build sets `GITHUB_PAGES=true` so assets resolve under `/royal-ihc`.

## Design tokens

Brand values were taken from the production theme (`royal_ihc_theme/css/main.css`), then mapped onto shadcn semantic tokens in [`app/globals.css`](app/globals.css):

| Primitive | Token | shadcn mapping |
| --- | --- | --- |
| IHC red `#e1001a` | `--brand-red` | `--primary` |
| Pressed red `#7b000e` | `--brand-red-dark` | hover mix |
| Grey `#f2f2f2` | `--neutral-100` | `--muted` / `--secondary` |
| Radius 8px | `--radius` | Drupal-parity cards and buttons |
| Radius 4px | `.proposal --radius` | Proposal chrome |
| Motion | `--ease-ihc` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |

Type is Ubuntu via `next/font`. Do not copy the Drupal `62.5%` html font-size hack — sizes are px-equivalent at a normal 16px root.

## Two-layer UI

- [`components/ui`](components/ui) — shadcn primitives (Button, Input, Sheet, NavigationMenu)
- [`components/marketing`](components/marketing) — Drupal-parity homepage sections
- [`components/proposal`](components/proposal) — redesign header, footer, and homepage

Button variants `ihc` and `ihcOutline` invert fill on hover like the live `.button--primary` styles.

## Content model

[`content/homepage.ts`](content/homepage.ts) is a `HomepageSection[]` union (`hero`, `text`, `twoColumn`, `values`, `featuredCases`, `imageText`, `cta`). [`app/(parity)/parity/page.tsx`](app/(parity)/parity/page.tsx) renders that list through [`HomepageSections`](components/marketing/homepage-sections.tsx).

The proposal homepage reads [`content/redesign.ts`](content/redesign.ts): featured story, story cards, markets, featured content, help strip, and news.

Field names (`headline`, `markets[]`, `cases[]`) are already GROQ/Keystatic-shaped. A CMS adapter should return this union, not new React trees.

Media URLs live in [`content/assets.ts`](content/assets.ts) so licensed or placeholder files can replace the public `sites/default/files` assets in one place.

## Named interactions

- `DoubleVideo` — intro clip, then loop, 2s opacity crossfade; poster only when `prefers-reduced-motion` (parity hero)
- `CinematicHero` — looping background film for the proposal featured story
- `NavBar` — mobile fixed bar, hide on scroll down, white on the hero then grey (parity)
- `ProposalHeader` — sticky white bar; shadcn `NavigationMenu` megamenu (market image tiles + latest news)
- `NavHamburger` — full-viewport Sheet overlay (parity); left Sheet on proposal mobile

## Add a section type

1. Extend the union in [`content/types.ts`](content/types.ts)
2. Add data in `homepage.ts`
3. Add a component under `components/marketing`
4. Switch on `section.type` in `homepage-sections.tsx`

Inner routes are stubs generated from [`content/navigation.ts`](content/navigation.ts) so the chrome can be exercised without rebuilding every Drupal page.

## Stack notes

Tokens are CSS `@theme` so they can later feed Starwind (Astro) or Basecoat (HTML) without a React rewrite. EmDash is Astro-native; this POC stays Next.js.
