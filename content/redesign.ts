import { assets } from "./assets"

export const redesignHome = {
  hero: {
    headline: "The system for building and operating maritime assets.",
    text: "Vessels, equipment and services for dredging, offshore energy, mining and defence — designed, built and supported as one programme.",
    primary: { label: "Contact", href: "/contact" },
    secondary: {
      label: "Open My IHC",
      href: "/corporate/my-ihc-digital-gateway-your-assets",
    },
  },
  canvas: {
    image: assets.spartacus,
    title: "Spartacus",
    caption: "Cutter suction dredger",
    href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
    specs: [
      {
        label: "Type",
        value: "CSD",
        title: "Cutter suction dredger",
        text: "Self-propelled CSD for hard soil and rock. Spartacus is the largest cutter suction dredger in the world.",
      },
      {
        label: "Fuel",
        value: "LNG",
        title: "Dual-fuel LNG",
        text: "The first CSD of its kind to run on LNG, cutting CO₂ and NOₓ versus conventional marine fuel.",
      },
      {
        label: "Power",
        value: "44,180 kW",
        title: "Installed power",
        text: "44,180 kW total installed power — the most powerful cutter suction dredger built to date.",
      },
    ],
  },
  trust: ["Boskalis", "DEME", "Van Oord", "Sapura", "de Boer"],
  quotes: [
    {
      text: "The largest and most powerful cutter suction dredger in the world — and the first of its kind to run on LNG.",
      attribution: "Spartacus programme",
      href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
    },
    {
      text: "Integrated vessels built for demanding offshore installation programmes.",
      attribution: "Sapura pipelay programme",
      href: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
    },
    {
      text: "A project organisation built on partnership — from first idea to vessel in service.",
      attribution: "Royal IHC",
      href: "/about-us",
    },
  ],
  close: {
    headline: "Talk to IHC",
    text: "A new build, a service programme, or access to the assets already in your fleet.",
    cta: { label: "Contact", href: "/contact" },
  },
  featured: {
    kicker: "Featured",
    headline: "Spartacus sets a new standard for dredging",
    text: "The largest and most powerful cutter suction dredger in the world — and the first of its kind to run on LNG.",
    cta: {
      label: "Read the case",
      href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
    },
    image: assets.spartacus,
    video: assets.videoLoop,
  },
  stories: [
    {
      kicker: "Offshore energy",
      title: "Pipelaying vessels for Sapura",
      text: "Integrated vessels built for demanding offshore installation programmes.",
      href: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
      image: assets.sapura,
    },
    {
      kicker: "Innovation",
      title: "Making the industry more efficient",
      text: "From first idea to co-created vessel, we help you operate smarter and with less impact.",
      href: "/innovations",
      image: assets.offshoreWind,
    },
    {
      kicker: "Careers",
      title: "Craftsmanship since 1642",
      text: "Our people make the difference. Join a project organisation built on partnership.",
      href: "/careers",
      image: assets.careers,
    },
  ],
  markets: [
    {
      label: "Dredging",
      headline: "Dredging, as a system",
      href: "/dredging",
      image: assets.landReclamation,
      text: "Vessels, equipment and services for ports, waterways and land reclamation — specified, built and supported together.",
    },
    {
      label: "Offshore energy",
      headline: "Installation programmes at sea",
      href: "/offshore-energy",
      image: assets.offshoreWind,
      text: "Pipelay, installation and support vessels for energy projects, with the same digital gateway after delivery.",
    },
    {
      label: "Mining",
      headline: "Raw materials, end to end",
      href: "/mining",
      image: assets.sapura,
      text: "Integrated solutions across the mining life cycle, from equipment to vessels in service.",
    },
    {
      label: "Defence",
      headline: "Naval assets on a shared stack",
      href: "/defence",
      image: assets.contactCta,
      text: "Naval and auxiliary vessels designed for demanding missions, with yard and owner on one programme.",
    },
  ],
  featuredContent: [
    {
      title: "Our strategy",
      text: "Operational efficiency and sustainable performance across dredging, offshore, mining and defence.",
      href: "/about-us",
    },
    {
      title: "Sustainability",
      text: "We aim to play a leading role in making the maritime industry more efficient and less carbon-intensive.",
      href: "/about-us/corporate-sustainability",
    },
    {
      title: "Careers at IHC",
      text: "Work in multidisciplinary project teams, with craftsmanship and collaboration at the core.",
      href: "/careers",
    },
    {
      title: "Our stories",
      text: "Cases and programmes that show how we create the maritime future with our customers.",
      href: "/innovations",
    },
  ],
  help: [
    {
      title: "Customers",
      text: "Talk to our experts about a new build, service or spare parts.",
      href: "/contact",
      cta: "Get in touch",
    },
    {
      title: "Talent",
      text: "See what it is like to work at Royal IHC, from starters to specialists.",
      href: "/careers",
      cta: "Explore careers",
    },
    {
      title: "Asset owners",
      text: "Access manuals, parts and support for vessels already in your fleet.",
      href: "/corporate/my-ihc-digital-gateway-your-assets",
      cta: "Open My IHC",
    },
  ],
  news: [
    {
      date: "Aug 2026",
      title:
        "Baggerbedrijf de Boer awards Royal IHC a contract for a custom-built 2,300 m³ TSHD",
      href: "/news",
      image: assets.landReclamation,
    },
    {
      date: "Jul 2026",
      title:
        "Boskalis and Royal IHC sign a contract for a large trailing suction hopper dredger",
      href: "/news",
      image: assets.spartacus,
    },
    {
      date: "Jun 2026",
      title:
        "TEUNIS HUIBERTUS, a TSHD Beagle 4, delivered to Gebr. van der Lee",
      href: "/news",
      image: assets.sapura,
    },
  ],
} as const
