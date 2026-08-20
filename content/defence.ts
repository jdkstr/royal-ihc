import { assets } from "./assets"
import type { ArticlePageContent, MarketPageContent } from "./types"

const close = {
  headline: "Support your mission",
  text: "Design and build, mission equipment, or in-service support to keep your fleet ready.",
  cta: { label: "Contact", href: "/contact" },
} as const

const news = [
  {
    date: "2025",
    title: "HNLMS Holland undergoes a mid-life upgrade at the Royal IHC quay in Kinderdijk",
    href: "/defence/defence-services",
  },
  {
    date: "2025",
    title: "Royal IHC demonstrates a 4-track seabed crawler at SeaSEC 2025 with sensor partners",
    href: "/defence/defence-equipment",
  },
  {
    date: "2025",
    title: "Royal IHC and Naval Group sign agreement to supply key components for the Orka-class submarines",
    href: "/defence/defence-vessels",
  },
] as const

export const defenceHub: MarketPageContent = {
  path: "/defence",
  title: "IHC Defence",
  description:
    "R&D, design and engineering, production, mission equipment and in-service support for the full life cycle of navy vessels — from Royal IHC's expertise since 1642.",
  kicker: "IHC Defence",
  headline: "Naval assets, full life cycle",
  intro:
    "We provide reliable solutions that improve operational efficiency and enable more sustainable performance of your defence fleet. Drawing on Royal IHC's expertise gained since 1642, we support the full life cycle of navy vessels: R&D, design and engineering, production, defence equipment and in-service support (ISS/ILS).",
  canvas: {
    image: assets.contactCta,
    title: "Navy vessel",
    caption: "Design, build and support",
    href: "/defence/defence-vessels",
    specs: [
      {
        label: "Life cycle",
        value: "R&D→ISS",
        title: "Full life-cycle support",
        text: "R&D, design and engineering, production, defence equipment and in-service support (ISS/ILS).",
      },
      {
        label: "Aim",
        value: "Do more",
        title: "Do more with less",
        text: "Execute your mission with less personnel, increased uptime and improved performance.",
      },
      {
        label: "Standards",
        value: "Secure",
        title: "Safety and security",
        text: "We work to the highest safety and security standards to protect personnel, assets and operations.",
      },
    ],
  },
  offerings: [
    {
      title: "Vessels",
      text: "Support across the full life cycle of a navy vessel: R&D, design and engineering, production and services.",
      href: "/defence/defence-vessels",
    },
    {
      title: "Equipment",
      text: "Mission equipment where reliability is critical — LARS, cable lay and repair, trenchers, automation and seabed crawlers.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Services",
      text: "A global support network for maximum uptime — parts and logistics, docking management and training.",
      href: "/defence/defence-services",
    },
  ],
  explain: {
    title: "Requirements shaped by geopolitics",
    text: "Geopolitical developments, together with other public-policy challenges, shape the current and future requirements for navy vessels. By designing and providing the right tools, we help you fulfil your tasks with robust and reliable technology.",
    cta: { label: "Naval vessels", href: "/defence/defence-vessels" },
  },
  challenges: [
    {
      title: "Protecting subsea infrastructure",
      text: "Growing tensions make seabed warfare a significant risk. Protecting data and power cables and energy infrastructure is high on the governmental agenda.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Submarine replacement programme",
      text: "As a partner of Naval Group, Royal IHC plays a substantial role in the replacement of the Walrus-class submarines.",
      href: "/defence/defence-vessels",
    },
    {
      title: "Do more with less",
      text: "Our naval designs let you execute missions with less personnel, increased uptime and improved performance — enabling more missions.",
      href: "/innovations",
    },
  ],
  featuredCase: {
    kicker: "Case",
    title: "Zr.Ms. Holland Midlife Update",
    text: "Working alongside Navy teams and partners, IHC Defence supported a broad package of ship repair, preservation and maintenance to prepare Zr.Ms. Holland for the next phase of her Midlife Update.",
    href: "/defence/defence-services",
    image: assets.contactCta,
  },
  projects: {
    title: "Built on partnership",
    intro:
      "At IHC Defence we believe that together we achieve more. We enter partnerships to share knowledge and co-create the optimal solution for your navy projects.",
    items: [
      {
        title: "Naval Group",
        text: "A partnership since 2019 supporting the submarine replacement programme, now supplying key components for the Orka-class submarines.",
        href: "/defence/defence-vessels",
      },
      {
        title: "Defence Materiel Organisation",
        text: "Royal IHC's experienced maritime engineers offer temporary capacity to help prepare and implement DMO's maritime projects and draw up navy vessel requirements.",
        href: "/defence/defence-services",
        image: assets.contactCta,
      },
    ],
    cta: { label: "Naval equipment", href: "/defence/defence-equipment" },
  },
  about: {
    title: "Reliable technology since 1642",
    paragraphs: [
      "Our naval vessel designs seek to change the status quo, balancing total cost of ownership with operational performance. The aim is to let you execute your mission with less personnel, increased uptime and improved performance.",
      "For centuries we have supported customers with robust and reliable technological solutions, working to the highest safety and security standards to protect personnel, assets and operations.",
      "We work in partnership — from the Naval Group submarine programme to supporting the MCA in the recovery of a crashed NH90 helicopter — sharing knowledge and co-creating solutions.",
    ],
    links: [
      { label: "Naval vessels", href: "/defence/defence-vessels" },
      { label: "Naval equipment", href: "/defence/defence-equipment" },
      { label: "Naval services", href: "/defence/defence-services" },
    ],
  },
  news: [...news],
  close,
}

export const defenceVessels: ArticlePageContent = {
  path: "/defence/defence-vessels",
  title: "Navy vessels",
  description:
    "Design, engineering and construction for naval vessels — from steel packages and sections to the complete build of a third-party design.",
  kicker: "IHC Defence",
  headline: "Navy vessels",
  intro:
    "Our focus is ensuring you achieve your mission objectives now and in the future. Committed to co-creation, we translate your needs and mission specifications into tailored designs that balance total cost of ownership with the required operational profile.",
  image: assets.contactCta,
  sections: [
    {
      title: "Designs that let you do more",
      paragraphs: [
        "Our navy vessel designs allow you, as a naval operator, to perform with less personnel, increase uptime and availability, improve performance and undertake more missions.",
      ],
    },
    {
      title: "How we support you",
      paragraphs: [
        "Whether you need the design of an auxiliary navy vessel, steel packages for a frigate, or the construction of a third-party-designed surface vessel, we are your partner. We can provide engineering capacity, steel packages and customised work preparation, construction of sections, complete build of a third-party design, and project management.",
      ],
    },
    {
      title: "Building in the Netherlands",
      paragraphs: [
        "Our shipbuilding facilities in Kinderdijk and Krimpen aan den IJssel are optimised for efficiency and safety. Covered fabrication floors and slipways provide ideal working areas, so the highest quality standards can be achieved and weather-induced delays eliminated. We are also experienced in building at partner yards all over the world.",
      ],
    },
  ],
  links: [
    { label: "Naval equipment", href: "/defence/defence-equipment" },
    { label: "Naval services", href: "/defence/defence-services" },
  ],
  close,
}

export const defenceEquipment: ArticlePageContent = {
  path: "/defence/defence-equipment",
  title: "Naval equipment",
  description:
    "LARS, cable lay and repair systems, trenchers and ploughs, automation and seabed crawlers for the safe and efficient use of navy assets.",
  kicker: "IHC Defence",
  headline: "Naval equipment",
  intro:
    "Equipment reliability is critical to a successful mission. We design and manufacture flexible, robust and easy-to-maintain systems that provide safe and efficient use of your navy assets, adaptable to specific operational requirements.",
  image: assets.contactCta,
  cards: [
    {
      title: "Launch and recovery (LARS)",
      text: "Easy-to-use systems for precise, efficient control of launch and recovery operations, with increased flexibility and operability.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Cable lay and repair",
      text: "Cable lay and repair equipment to safely bury power and fibre-optic telecom cables and repair damaged submarine cables, with fast worldwide mobilisation.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Trenchers and ploughs",
      text: "A range of trenchers and ploughs for safe burial and protection of cables — shallow or deep water, harder or softer seabeds — upgradeable across their life cycle.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Automation and integration",
      text: "Flexible, robust and reliable automation and system integration for the safe and efficient use of your navy assets.",
      href: "/defence/defence-equipment",
    },
    {
      title: "Seabed crawler",
      text: "An efficient tool for protecting underwater infrastructure, performing intervention and inspection work.",
      href: "/defence/defence-equipment",
    },
  ],
  sections: [
    {
      title: "Bespoke solutions",
      paragraphs: [
        "The increasing complexity of naval assets leads to more stringent requirements for the precision installation of mission-critical systems and subsystems. We have delivered a number of projects meeting those strict demands. Many are confidential and cannot be discussed in detail, but our ability to solve challenges with innovative solutions is visible across all our markets.",
        "Alongside defence equipment we offer engineering support, design and construction capabilities for navy vessels, and support to efficiently maintain your fleet.",
      ],
    },
  ],
  links: [
    { label: "Naval vessels", href: "/defence/defence-vessels" },
    { label: "Naval services", href: "/defence/defence-services" },
  ],
  close,
}

export const defenceServices: ArticlePageContent = {
  path: "/defence/defence-services",
  title: "Naval services",
  description:
    "In-service support (ISS/ILS) for navy fleets — a global support network delivering parts and logistics, docking management and training for maximum uptime.",
  kicker: "IHC Defence",
  headline: "Naval services (ISS)",
  intro:
    "Our strategically positioned global support network ensures maximum uptime for your fleet. From parts and logistics to docking management and training, our in-service support keeps navy vessels ready for their mission.",
  image: assets.contactCta,
  sections: [
    {
      title: "In-service support",
      paragraphs: [
        "Equipment reliability is critical to a successful mission. Our in-service and integrated logistics support (ISS/ILS) demonstrates how we ensure your mission readiness across the life of the vessel.",
        "The network spans parts and logistics, docking management and training — positioned globally so support is available when and where you need it.",
      ],
    },
    {
      title: "Maintaining the fleet",
      paragraphs: [
        "From the mid-life upgrade of HNLMS Holland at our Kinderdijk quay to preservation and maintenance enabling works, we support navy teams and partners in keeping vessels available and mission-ready.",
      ],
    },
  ],
  links: [
    { label: "Naval vessels", href: "/defence/defence-vessels" },
    { label: "Naval equipment", href: "/defence/defence-equipment" },
  ],
  close,
}
