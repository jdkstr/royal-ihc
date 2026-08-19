import { assets } from "./assets"
import type { ListingPageContent } from "./types"

const LIVE = "https://www.royalihc.com"

const close = {
  headline: "Stay up to date",
  text: "Sign up for the newsletter for the latest innovations, new solutions and market challenges — or talk to our experts.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const newsListing: ListingPageContent = {
  path: "/news",
  title: "News",
  description:
    "The latest news from Royal IHC — deliveries, contracts, partnerships and corporate updates across dredging, offshore energy, mining and defence.",
  kicker: "Newsroom",
  headline: "News",
  intro:
    "Wondering what we are up to? The latest headlines from across Royal IHC. Full articles open on royalihc.com; the redesign mirrors the newsroom index.",
  items: [
    {
      date: "23 Jul 2026",
      title: "Royal IHC publishes CSR Report 2025 and outlines next phase of sustainable growth",
      href: `${LIVE}/news/royal-ihc-publishes-csr-report-2025-and-outlines-next-phase-sustainable-growth`,
      image: assets.corporate,
    },
    {
      date: "21 Jul 2026",
      title: "IHC Dredging delivers 31,000 m³ TSHD SEAWAY to Boskalis",
      href: `${LIVE}/news/ihc-dredging-delivers-31000-m3-tshd-seaway-boskalis`,
      image: assets.spartacus,
    },
    {
      date: "09 Jul 2026",
      title: "Royal IHC increases its guarantee facilities to c. €430 million and extends its financing arrangement by 2 years",
      href: `${LIVE}/news/royal-ihc-increases-its-guarantee-facilities-c-eur-430-million-and-extends-its-financing`,
      image: assets.contactCta,
    },
    {
      date: "30 Jun 2026",
      title: "Rijkswaterstaat launches development phase for near zero-emission emergency response towing vessels",
      href: `${LIVE}/news/rijkswaterstaat-launches-development-phase-near-zero-emission-emergency-response-towing`,
      image: assets.offshoreWind,
    },
    {
      date: "02 Apr 2026",
      title: "Successful sale of refurbished Beaver® 45 to Zane Energy Ltd. in Nigeria",
      href: `${LIVE}/news/successful-sale-refurbished-beaverr-45-zane-energy-ltd-nigeria`,
      image: assets.landReclamation,
    },
    {
      date: "10 Mar 2026",
      title: "Royal IHC signs contract with La Congolaise des Voies Maritimes (CVM) for an Easydredge® 2700XL TSHD",
      href: `${LIVE}/news/royal-ihc-signs-contract-la-congolaise-des-voies-maritimes-cvm-easydredger-2700xl-tshd`,
      image: assets.landReclamation,
    },
    {
      date: "29 Jan 2026",
      title: "IHC Mining awarded contract for slurrification and dewatering equipment for large tailings removal project",
      href: `${LIVE}/news/ihc-mining-awarded-contract-slurrification-and-dewatering-equipment-large-tailings-removal`,
      image: assets.landReclamation,
    },
    {
      date: "22 Jan 2026",
      title: "Royal IHC and Demcon unmanned systems join forces for scalable autonomous maritime operations",
      href: `${LIVE}/news/royal-ihc-and-demcon-unmanned-systems-join-forces-scalable-autonomous-maritime-operations`,
      image: assets.contactCta,
    },
  ],
  note: "Royal IHC's full news archive contains several hundred articles. Individual article pages are served from royalihc.com and are out of scope for this static redesign; the index above tracks the most recent headlines.",
  links: [{ label: "Press", href: "/press" }],
  close,
}

export const pressListing: ListingPageContent = {
  path: "/press",
  title: "Press",
  description:
    "Press releases and media contacts for Royal IHC — spokesmanship, media materials and commercial enquiries.",
  kicker: "Newsroom",
  headline: "Press",
  intro:
    "For press questions contact press@royalihc.com. For photographs, video or other media materials contact our communications department. Recent press releases are listed below.",
  items: [
    {
      kicker: "Press release",
      title: "Next-generation mega hopper SEAWAY handed over to Boskalis after a successful sea trial",
      href: `${LIVE}/news/ihc-dredging-delivers-31000-m3-tshd-seaway-boskalis`,
      image: assets.spartacus,
    },
    {
      kicker: "Press release",
      title: "Royal IHC increases its ECA-covered guarantee facility and extends the maturity to June 2030",
      href: `${LIVE}/news/royal-ihc-increases-its-guarantee-facilities-c-eur-430-million-and-extends-its-financing`,
      image: assets.contactCta,
    },
    {
      kicker: "Press release",
      title: "Rijkswaterstaat gives the go-ahead for the R&D phase of the Power2Tow project",
      href: `${LIVE}/news/rijkswaterstaat-launches-development-phase-near-zero-emission-emergency-response-towing`,
      image: assets.offshoreWind,
    },
    {
      kicker: "Press release",
      title: "Royal IHC to build an Easydredge® 2700XL TSHD for La Congolaise des Voies Maritimes",
      href: `${LIVE}/news/royal-ihc-signs-contract-la-congolaise-des-voies-maritimes-cvm-easydredger-2700xl-tshd`,
      image: assets.landReclamation,
    },
    {
      kicker: "Press release",
      title: "Royal IHC and Demcon unmanned systems enter a strategic partnership for autonomous vessels",
      href: `${LIVE}/news/royal-ihc-and-demcon-unmanned-systems-join-forces-scalable-autonomous-maritime-operations`,
      image: assets.contactCta,
    },
    {
      kicker: "Statement",
      title: "Statement regarding IHC FHP Ltd deliveries to Mostrello Commercial Ltd (2017–2019)",
      href: `${LIVE}/press`,
      image: assets.corporate,
    },
  ],
  links: [{ label: "News", href: "/news" }],
  close,
}

export const eventsListing: ListingPageContent = {
  path: "/events",
  title: "Events",
  description:
    "Where to meet Royal IHC — trade shows and conferences across the dredging, offshore energy, mining and defence markets.",
  kicker: "Events",
  headline: "Events",
  intro: "Meet Royal IHC at these upcoming trade shows and conferences.",
  items: [
    {
      kicker: "Defence",
      date: "23–24 Sep",
      title: "Submarine Networks World 2026 — Singapore",
      text: "Meet our defence and offshore energy teams.",
      href: "/defence",
    },
    {
      kicker: "Offshore energy",
      date: "14–16 Oct",
      title: "Energy Taiwan 2026 — Taipei, Taiwan",
      text: "Offshore wind installation vessels and equipment.",
      href: "/offshore-energy",
    },
    {
      kicker: "Mining",
      date: "24–27 Aug",
      title: "EXPOSIBRAM 2026 — Belo Horizonte, Brazil",
      text: "Mining equipment and mineral processing solutions.",
      href: "/mining",
    },
    {
      kicker: "Mining",
      date: "07–11 Sep",
      title: "Electra Mining Africa 2026 — Johannesburg, South Africa",
      text: "Meet our mining team in Sub-Saharan Africa.",
      href: "/mining",
    },
  ],
  links: [{ label: "News", href: "/news" }],
  close,
}
