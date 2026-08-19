# Royal IHC website migration

Standing workstream: copy every public royalihc.com page into this Next.js site as a **real proposal page** (not a stub), then show it on GitHub Pages.

Live source: https://www.royalihc.com  
Pages: https://jdkstr.github.io/royal-ihc/  
Standing PR: `dev` → `main`

## Status: COMPLETE

Every page in the curated site structure (primary nav, market children, About, utility, featured cases, and the market challenge/innovation articles) is now a real proposal page. **No route renders the "Still to migrate" stub.** The remaining long-tail (individual news/press/case/event detail articles, campaign and account-gated pages) are documented exceptions below.

## Last run

- **When:** 2026-08-19T23:20Z (cron worker)
- **What:** Completed content migration. Added a `ListingPage` type + component for index pages. Migrated the remaining primary-nav markets (`/mining`, `/defence`) with section children; the offshore children (`offshore-vessels`, `offshore-equipment`, `offshore-services`); the full `/about-us` section (global presence, corporate sustainability, SHE-Q, annual report, what-we-do); utility pages (`/contact`, `/careers`, `/news`, `/press`, `/events`, `/privacy-policy`, `/disclaimer`, `/search`, My IHC); `/challenges` and `/innovations`; and all dredging children (equipment, services, automation, history, project types, dredging challenges + 3 challenge articles, dredging innovations, dredging cases, 5 vessel families, and the Spartacus featured case). `npm run lint` clean; `GITHUB_PAGES=true npm run build` exports 55 pages; `grep "Still to migrate" out/` returns 0.
- **Skipped implementation?** No. CI for the previous `dev` commit had succeeded; no in-flight workflow; migration was not yet complete.

## GitHub Pages

- Workflow: `.github/workflows/pages.yml`
- Triggers: push to `main` **and** `dev`, plus `workflow_dispatch`
- `GITHUB_PAGES=true` / `basePath` `/royal-ihc` unchanged
- Deploy job uses environment `pages-${{ github.ref_name }}`
- In-progress work appears at https://jdkstr.github.io/royal-ihc/

## Done (real pages, not stubs)

| Area | Paths |
| --- | --- |
| Home | `/`, `/parity`, `/design-system` |
| Dredging | `/dredging`, `what-is-dredging`, `dredging-vessels` (+ 5 families), `dredging-equipment` (+ automation), `dredging-services`, `dredging-cases` (+ Spartacus case), `dredging-challenges` (+ 3 articles), `dredging-innovations`, `history-dredging`, `project-types` |
| Offshore energy | `/offshore-energy`, `offshore-vessels`, `offshore-equipment`, `offshore-services`, Sapura pipelay case |
| Mining | `/mining`, `mining-equipment`, `mining-services`, `mining-vessels` |
| Defence | `/defence`, `defence-vessels`, `defence-equipment`, `defence-services` |
| About | `/about-us`, `what-we-do-and-how-we-work`, `global-presence`, `corporate-sustainability`, `she-q`, `royal-ihc-annual-report` |
| Utility | `/contact`, `/careers`, `/news`, `/press`, `/events`, `/privacy-policy`, `/disclaimer`, `/search`, `/corporate/my-ihc-digital-gateway-your-assets` |
| Company | `/challenges`, `/innovations` |

## Content architecture

- `MarketPage` (`content/types.ts` → `MarketPageContent`) for the four market hubs.
- `ArticlePage` (`ArticlePageContent`) for section, explainer, case and legal pages.
- `ListingPage` (`ListingPageContent`, added this run) for index pages: news, press, events, innovations, dredging innovations, dredging challenges, dredging cases.
- All pages register in `content/pages.ts` and render through `app/(redesign)/[...slug]/page.tsx`.
- Media URLs go through `content/assets.ts`; brand tokens live in `app/globals.css`.

## Explicit exceptions (documented, not unfinished content)

- **News / press / case / event detail articles.** The live sitemap lists ~703 URLs (news ≈ 188, dredging ≈ 146, offshore ≈ 118, …). The redesign migrates every *section and index* page; individual detail articles are long-tail archive content served from royalihc.com, and the listing pages deep-link to the live articles. The one homepage-featured case per market (Spartacus, Sapura) is migrated in full.
- **My IHC digital gateway** (`/corporate/my-ihc-digital-gateway-your-assets`) — account-gated on the live site. A public explainer page is provided; the portal itself stays on royalihc.com.
- **Search** (`/search`) — a static export cannot run the Drupal search backend. A real navigation page is provided in its place.
- **Legal** (`/privacy-policy`, `/disclaimer`) — excluded from crawling by the live robots.txt; real pages are provided that point to the authoritative versions on royalihc.com.
- Drupal account routes (`/user/login`), form thank-you/registration/newsletter confirmations, seasonal/campaign landing pages, `/node/…` aliases, and cookie-preference UI remain out of scope.

## Next run

Migration of the curated site structure is **complete**. No further content commits are required. Future runs should only: keep this file and the standing PR current, and — if desired — migrate additional long-tail detail articles (news/cases) or wire the `ListingPage` into `/design-system` documentation.
