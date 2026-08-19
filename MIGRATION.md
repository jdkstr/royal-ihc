# Royal IHC website migration

Standing workstream: copy every public royalihc.com page into this Next.js site as a **real proposal page** (not a stub), then show it on GitHub Pages.

Live source: https://www.royalihc.com  
Pages: https://jdkstr.github.io/royal-ihc/  
Standing PR: `dev` → `main`

## Last run

- **When:** 2026-08-19T23:00Z (cron worker)
- **What:** Migrated `/offshore-energy` (IHC Offshore Energy market hub) and `/offshore-energy/offshore-cases/pipelaying-vessels-sapura` (Sapura pipelay case) from the live site into proposal chrome, reusing the typed `MarketPage` / `ArticlePage` modules. Added `content/offshore-energy.ts`, registered both in `content/pages.ts`, and stubbed the offshore `offshore-vessels` / `offshore-equipment` / `offshore-services` children so hub links resolve on static export. `npm run lint` clean; `GITHUB_PAGES=true npm run build` exports 50 static pages. Opened/updated the standing `dev` → `main` PR.
- **Skipped implementation?** No. Latest `dev` commit (`4a9f94d`) was ~10 min old but its Pages CI had already **succeeded**; no in-flight `dev` workflow; no open agent PRs; migration not marked complete.

### Prior run (2026-08-19T22:38Z)

- Enabled GitHub Pages deploys from `dev` (per-branch environment `pages-dev` / `pages-main`). Migrated `/dredging`, `/dredging/what-is-dredging`, `/dredging/dredging-vessels`. Added the `MarketPage` / `ArticlePage` architecture. `/dredging` live on Pages.

## GitHub Pages

- Workflow: `.github/workflows/pages.yml`
- Triggers: push to `main` **and** `dev`, plus `workflow_dispatch`
- `GITHUB_PAGES=true` / `basePath` `/royal-ihc` unchanged
- Deploy job uses environment `pages-${{ github.ref_name }}` because the default `github-pages` environment only allows `main`
- In-progress work should appear at https://jdkstr.github.io/royal-ihc/ after the `dev` deploy finishes

## Done (real pages, not stubs)

| Path | Notes |
| --- | --- |
| `/` | Proposal homepage |
| `/parity` | Drupal-faithful homepage only |
| `/design-system` | Living tokens / components |
| `/dredging` | IHC Dredging hub |
| `/dredging/what-is-dredging` | Explainer |
| `/dredging/dredging-vessels` | Vessel families |
| `/offshore-energy` | IHC Offshore Energy hub |
| `/offshore-energy/offshore-cases/pipelaying-vessels-sapura` | Sapura pipelay case |

## In progress

- Dredging children linked from the hub (equipment, services, cases, challenges, innovations, history, project types)
- Offshore children linked from the hub (offshore-vessels, offshore-equipment, offshore-services)

## Remaining (stubs or missing)

### Primary nav (priority 1)

- `/mining`
- `/defence`
- `/challenges`
- `/innovations`
- `/about-us`
- `/contact`

### About children (priority 2)

- `/about-us/global-presence`
- `/about-us/corporate-sustainability`
- `/about-us/she-q`
- `/about-us/royal-ihc-annual-report`
- `/about-us/what-we-do-and-how-we-work`
- `/events`

### Utility (priority 3)

- `/news`
- `/press`
- `/careers`
- `/search`
- `/privacy-policy`
- `/disclaimer`
- `/corporate/my-ihc-digital-gateway-your-assets` (login-gated on the live site — likely an explicit exception)

### Featured cases (priority 4)

- `/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger`
- `/offshore-energy/offshore-cases/pipelaying-vessels-sapura` ✅ done

### Dredging children now stubbed because the hub links to them

- `/dredging/dredging-equipment` (+ automation child)
- `/dredging/dredging-services`
- `/dredging/dredging-cases`
- `/dredging/dredging-challenges` and two challenge articles
- `/dredging/challenges/data-heart-digital-transformation`
- `/dredging/dredging-innovations`
- `/dredging/history-dredging`
- `/dredging/project-types`
- vessel family pages (CSD, TSHD, split hopper, grab hopper, additional equipment)

### Listing / detail volume (priority 5)

Sitemap (2026-08-19) lists **703** URLs. Rough counts by first segment:

| Segment | URLs |
| --- | ---: |
| `/news` | 188 |
| `/dredging` | 146 |
| `/offshore-energy` | 118 |
| `/mining` | 57 |
| `/events` | 46 |
| `/about-us` | 28 |
| `/defence` | 26 |
| `/corporate` | 20 |
| `/careers` | 16 |
| `/innovations` | 10 |
| other (campaigns, thank-you, tours, LPs) | rest |

## Known gaps vs royalihc.com

- **Nav:** Proposal chrome uses Product / Solutions / Resources / Company, not the Drupal primary labels. Market destinations match. Hamburger now points Vessels / Equipment / Services at real dredging paths.
- **Footer:** Markets, about, legal, social present. Live site also has dredging-specific contact and brochure downloads not yet modelled.
- **Sitemap:** Far larger than the stub list. Thank-you, registration, newsletter, seasonal, and campaign URLs should stay exceptions unless they are public content.
- **News / press:** Listing + article bodies not migrated; homepage changelog still points at `/news`.
- **Cases:** Two featured cases are stubs.
- **Legal:** Privacy and disclaimer are stubs (robots.txt disallows crawling them on the live site).
- **Search:** Stub. Static export cannot run a Drupal search backend.
- **My IHC:** Live digital gateway is account-gated. Treat as documented exception unless a public explainer page is enough.

## Explicit exceptions (do not treat as unfinished content)

- Drupal `/user/login` and other account routes
- Form thank-you / registration / newsletter confirmations
- Seasonal and campaign landing pages (`/seasonsgreetings`, `/icebath`, `/beaverstories`, tour LPs, language-specific Spartacus LPs)
- `/node/…` aliases
- Cookies preference UI

## Next run

1. `/mining` (next primary-nav market), or
2. `/defence` (remaining primary-nav market), or
3. Offshore hub children (`/offshore-energy/offshore-vessels`, `/offshore-energy/offshore-equipment`, `/offshore-energy/offshore-services`) if staying in that market.

Migration is **not complete**.
