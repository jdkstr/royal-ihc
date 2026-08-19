import { assets } from "./assets"
import { redesignHome } from "./redesign"
import type { ArticlePageContent, MarketPageContent } from "./types"

const close = {
  headline: "Talk to an offshore energy expert",
  text: "An integrated vessel, a mission-equipment package, or support for a spread already at work.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const offshoreEnergyHub: MarketPageContent = {
  path: "/offshore-energy",
  title: "IHC Offshore Energy",
  description:
    "Integrated offshore vessels, mission equipment and services for offshore wind, oil and gas and telecoms — designed, built and supported as one programme.",
  kicker: "IHC Offshore Energy",
  headline: "Offshore energy, as a system",
  intro:
    "IHC Offshore Energy helps you achieve more efficient and sustainable offshore operations. From concept design to integrated vessels and life-cycle support, we deliver pipe lay and cable lay equipment, subsea vehicles and FPSO equipment for offshore wind, oil and gas and telecoms.",
  canvas: {
    image: assets.sapura,
    title: "Sapura pipelay",
    caption: "Integrated pipelaying vessel",
    href: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
    specs: [
      {
        label: "Class",
        value: "Pipelay",
        title: "Integrated pipelay vessel",
        text: "Flex lay, J-lay, reel lay and S-lay systems designed into the vessel rather than bolted on afterwards.",
      },
      {
        label: "Carousel",
        value: "2,500 t",
        title: "Underdeck carousels",
        text: "2,500 t and 1,500 t underdeck carousels feed pipe over the stern without exceeding a 146 m hull length.",
      },
      {
        label: "Lay tower",
        value: "550 t",
        title: "550 t flex lay tower",
        text: "A&R post, top aligner and tower top crane tilt in minutes to reach a 48 m air draft.",
      },
    ],
  },
  offerings: [
    {
      title: "Vessels",
      text: "A complete in-house package, from concept design to the delivery of integrated offshore vessels — including crew training and life-cycle support.",
      href: "/offshore-energy/offshore-vessels",
    },
    {
      title: "Equipment",
      text: "Mission equipment for safe project execution: cable and pipe lay systems, subsea vehicles, tensioners, LARS and handling equipment.",
      href: "/offshore-energy/offshore-equipment",
    },
    {
      title: "Services",
      text: "24/7 support, feasibility studies, life-cycle engineering, remote condition monitoring and equipment rental.",
      href: "/offshore-energy/offshore-services",
    },
  ],
  explain: {
    title: "Ahead of the offshore transition",
    text: "Wind farms are moving further out to sea, into deeper water. Turbines keep growing and floating foundations are becoming the new standard. We design fit-for-purpose vessels and equipment that keep operations efficient and lower in emissions as those demands rise.",
    cta: { label: "Integrated vessels", href: "/offshore-energy/offshore-vessels" },
  },
  challenges: [
    {
      title: "Dynamic cable installation for floating wind",
      text: "Floating wind farms make cable installation far harder. We lead the way with new cable lay vessel designs built for dynamic conditions.",
      href: "/offshore-energy/offshore-equipment",
    },
    {
      title: "The multi-role offshore support vessel",
      text: "Single-purpose vessels are a thing of the past. Tomorrow's OSV is an adaptable, sustainable, multi-role platform.",
      href: "/offshore-energy/offshore-vessels",
    },
    {
      title: "Bigger, deeper, further offshore",
      text: "Larger farms located further from shore and in deeper water need a new generation of low-emission vessels and equipment.",
      href: "/innovations",
    },
  ],
  featuredCase: {
    kicker: "Case",
    title: "Pipelaying vessels for Sapura",
    text: "Integrating all critical equipment in the concept design phase — and applying small but clever innovations — produced efficient, safe and maintenance-friendly pipelaying vessels.",
    href: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
    image: assets.sapura,
  },
  projects: {
    title: "Across every offshore project",
    intro:
      "Cable lay, pipe lay and conversion — supported through the whole installation phase with state-of-the-art equipment and integrated vessels.",
    items: [
      {
        title: "Cable lay",
        text: "Equipment, vessels and services throughout the installation phase of wind farm cables, using state-of-the-art cable lay spreads.",
        href: "/offshore-energy/offshore-equipment",
      },
      {
        title: "Pipe lay",
        text: "Integrated pipelay vessels and equipment for every pipeline type — S-lay, J-lay, flex lay and reel lay systems.",
        href: "/offshore-energy/offshore-vessels",
        image: assets.offshoreWind,
      },
    ],
    cta: { label: "Offshore equipment", href: "/offshore-energy/offshore-equipment" },
  },
  about: {
    title: "A proven offshore track record",
    paragraphs: [
      "We have a proven track record delivering a wide range of offshore equipment — pipe lay and cable lay systems, subsea vehicles, FPSO equipment and integrated offshore vessels — drawing on knowledge and experts available across the globe.",
      "Creating the optimal solution for our customers is at the core of our business. Our holistic approach starts with your project requirements and runs through concept design to the delivery of integrated vessels with after-sales contracts, crew training and life-cycle support.",
      "Based on our offshore vessel design philosophy, we integrate fit-for-purpose mission equipment while ensuring maximum safety, performance and reliability.",
    ],
    links: [
      { label: "Offshore vessels", href: "/offshore-energy/offshore-vessels" },
      { label: "Offshore equipment", href: "/offshore-energy/offshore-equipment" },
      { label: "Offshore services", href: "/offshore-energy/offshore-services" },
    ],
  },
  news: [...redesignHome.news],
  close,
}

export const pipelayingSapura: ArticlePageContent = {
  path: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
  title: "Pipelaying vessels for Sapura",
  description:
    "How integrating critical equipment in concept design and applying clever innovations produced efficient, safe and maintenance-friendly pipelaying vessels for Sapura.",
  kicker: "IHC Offshore Energy · Case",
  headline: "Pipelaying vessels for Sapura",
  intro:
    "Innovative design changes result in highly efficient vessels. Integrating all critical equipment in the concept design phase, and applying small but clever innovations, resulted in efficient, safe and maintenance-friendly pipelaying vessels for Sapura Navegação Marítima.",
  image: assets.sapura,
  sections: [
    {
      title: "Smart solutions in an integrated design",
      paragraphs: [
        "To accommodate pipe loading over the stern without exceeding the maximum hull length of 146 m, the chutes are integrated into the steel structure. Pipe is fed through a loading tensioner on deck and passes over intermediate guide chutes before being loaded into one of the underdeck carousels — 2,500 t and 1,500 t.",
        "The vertical lay tower sits directly aft of the accommodation and over the moon pool. That arrangement leaves room for a large worktable to work on pipes and pipe ends, plus a generous free deck area.",
        "To reach the maximum air draft of 48 metres, the A&R post, top aligner and tower top crane of the 550 t flex lay tower can be tilted in a matter of minutes.",
      ],
    },
    {
      title: "Fast tensioner pad changes",
      paragraphs: [
        "Different pipeline diameters need different pads on the tensioners, and with 350 pads per tensioner a change-out can be time consuming. Royal IHC devised a system with a single retainer — and a pin to remove it — making the swap as quick and easy as possible.",
      ],
    },
    {
      title: "One integrated vessel management system",
      paragraphs: [
        "Platform and mission equipment are integrated through the Integrated Vessel Management System. It ties together the Power Management System, DP system and Alarm & Monitoring System with the control logic of the main switchboards and variable frequency drives, and communicates with the lay tower control system.",
      ],
    },
    {
      title: "Built for uptime",
      paragraphs: [
        "To limit spare parts and maximise uptime, the 550 t pipelaying vessels were designed with uniformity of components in mind. Because the vessels are identical, operational and technical crews can work across all of them without additional training.",
      ],
    },
  ],
  links: [
    { label: "IHC Offshore Energy", href: "/offshore-energy" },
    { label: "Offshore vessels", href: "/offshore-energy/offshore-vessels" },
  ],
  close,
}
