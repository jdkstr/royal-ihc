import { assets } from "./assets"
import type { ArticlePageContent, ListingPageContent } from "./types"

const close = {
  headline: "Talk to IHC",
  text: "A new build, a service programme, or a challenge you want to solve together.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const challenges: ArticlePageContent = {
  path: "/challenges",
  title: "Challenges",
  description:
    "The challenges our customers face across dredging, offshore energy, mining and defence — and how Royal IHC partners to solve them.",
  kicker: "Challenges",
  headline: "Solving hard maritime challenges",
  intro:
    "Constructing a marine vessel is a complex business that can take several years to complete. To keep it running smoothly, Royal IHC works closely with customers — improving efficiency without compromising our dedication to fit-for-purpose, reliable designs.",
  image: assets.corporate,
  sections: [
    {
      title: "A partnership approach",
      paragraphs: [
        "Every market has its own pressures — from decarbonisation and tailings management in mining to seabed-infrastructure protection in defence and climate resilience in dredging. We work alongside our customers to understand the pain points and configure reliable, efficient solutions.",
      ],
    },
  ],
  cards: [
    {
      title: "Economic development and trade",
      text: "New and bigger ports, deeper channels and maintained inland waterways to accommodate growing global trade.",
      href: "/dredging/dredging-challenges/economic-development-and-trade",
    },
    {
      title: "Climate change, flooding and drought",
      text: "Dredging that protects people from flood risk and keeps waterways navigable when river levels drop.",
      href: "/dredging/dredging-challenges/climate-change-flooding-and-drought",
    },
    {
      title: "Data and digital transformation",
      text: "Data at the heart of the vessel — automation and monitoring for efficiency, maintenance and safety.",
      href: "/dredging/challenges/data-heart-digital-transformation",
    },
  ],
  links: [
    { label: "Innovations", href: "/innovations" },
    { label: "Dredging challenges", href: "/dredging/dredging-challenges" },
  ],
  close,
}

export const innovations: ListingPageContent = {
  path: "/innovations",
  title: "Innovations",
  description:
    "How Royal IHC pushes the maritime industry towards zero emissions — energy efficiency, cleaner fuels, autonomy and data-driven operations.",
  kicker: "Innovations",
  headline: "Innovations",
  intro:
    "In the transition towards zero emissions, our work centres on two pillars: energy-efficiency improvements and cleaner fuels. Alongside that we push on autonomy and data. A selection of what we are working on:",
  items: [
    {
      kicker: "Digitalisation",
      title: "Data sharing to accelerate maritime innovation",
      text: "Data sharing offers opportunities to accelerate innovation, but fear of losing control is inhibiting growth.",
      href: "/dredging/challenges/data-heart-digital-transformation",
    },
    {
      kicker: "Engineering",
      title: "1D-Driftflux CFD technology",
      text: "Our work on 1D-Driftflux Computational Fluid Dynamics lets us simulate important processes inside a pipeline.",
      href: "/dredging/dredging-equipment",
    },
    {
      kicker: "Energy transition",
      title: "Two pillars: efficiency and cleaner fuels",
      text: "To reach zero emissions, our activities centre on energy-efficiency improvements and cleaner fuels.",
      href: "/about-us/corporate-sustainability",
    },
    {
      kicker: "Fuels",
      title: "The role of internal combustion in future drive systems",
      text: "Fuel cells are the prime mover for the future — but do internal combustion engines still have a role?",
      href: "/dredging/dredging-innovations",
    },
    {
      kicker: "Base metals",
      title: "Rising demand for copper, lithium and nickel",
      text: "A growing global population drives rising demand for the base metals behind the energy transition.",
      href: "/mining",
    },
    {
      kicker: "Autonomy",
      title: "The journey towards autonomous dredging",
      text: "The next phase in our journey towards autonomous dredging solutions.",
      href: "/dredging/dredging-innovations",
    },
  ],
  links: [
    { label: "Dredging innovations", href: "/dredging/dredging-innovations" },
    { label: "Corporate sustainability", href: "/about-us/corporate-sustainability" },
  ],
  close,
}
