import { assets } from "./assets"
import { redesignHome } from "./redesign"
import type { ArticlePageContent, MarketPageContent } from "./types"

const close = {
  headline: "Talk to a dredging expert",
  text: "A new build, a dredge system, or support for assets already in your fleet.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const dredgingHub: MarketPageContent = {
  path: "/dredging",
  title: "IHC Dredging",
  description:
    "Integrated dredging vessels, equipment and services — designed, built and supported as one programme.",
  kicker: "IHC Dredging",
  headline: "Dredging, as a system",
  intro:
    "Whatever your dredging project, we design and build standardised and custom-built vessels, equipment and services to match the soil, the site and the programme.",
  canvas: redesignHome.canvas,
  offerings: [
    {
      title: "Vessels",
      text: "Standardised and custom-built dredgers for silt, sand, clay and rock — from compact CSDs to the largest TSHDs.",
      href: "/dredging/dredging-vessels",
    },
    {
      title: "Equipment",
      text: "Pumps, cutter heads, drag heads, valves and automation that turn a hull into a productive dredger.",
      href: "/dredging/dredging-equipment",
    },
    {
      title: "Services",
      text: "Advisory, engineering, operations and 24/7 support to keep dredging uptime high.",
      href: "/dredging/dredging-services",
    },
  ],
  explain: {
    title: "What dredging is",
    text: "Dredging is the removal of underwater soil — sand, gravel, clay or rock — and its transport. It sounds simple. It is how ports, waterways and coastlines are built and kept open.",
    cta: { label: "In-depth explanation", href: "/dredging/what-is-dredging" },
  },
  challenges: [
    {
      title: "Economic development and trade",
      text: "Larger vessels and new trading links need new ports, deeper channels and maintained inland waterways.",
      href: "/dredging/dredging-challenges/economic-development-and-trade",
    },
    {
      title: "Climate, flooding and drought",
      text: "Dredging protects people from flood risk and keeps waterways navigable when river levels drop.",
      href: "/dredging/dredging-challenges/climate-change-flooding-and-drought",
    },
    {
      title: "Digital operations",
      text: "Data at the heart of the vessel: automation and monitoring that make dredging more efficient and less carbon-intensive.",
      href: "/dredging/challenges/data-heart-digital-transformation",
    },
  ],
  featuredCase: {
    kicker: "Case",
    title: "Spartacus sets a new standard",
    text: "The largest and most powerful cutter suction dredger in the world — and the first of its kind to run on LNG.",
    href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
    image: assets.spartacus,
  },
  projects: {
    title: "Suitable for every dredging project",
    intro:
      "From the first approach through equipment selection and execution. Every project has its own soil, schedule and site.",
    items: [
      {
        title: "Maintenance dredging",
        text: "Tides deposit sand and silt. Maintenance dredging keeps port basins and waterways at a navigable depth.",
        href: "/dredging/project-types",
      },
      {
        title: "Land reclamation",
        text: "Sand, clay or rock from the seabed used to create new land for industry, housing, ports and airports.",
        href: "/dredging/project-types",
        image: assets.landReclamation,
      },
    ],
    cta: { label: "Project types", href: "/dredging/project-types" },
  },
  about: {
    title: "Dredging is in our DNA",
    paragraphs: [
      "With more than 300 years of experience, IHC Dredging designs, builds and delivers integrated dredging vessels, equipment and services. Knowledge built over centuries — and through the people who run the programmes — gives customers a competitive edge worldwide.",
      "We aim to deliver a totally integrated solution. Designing, constructing and putting the most efficient dredger into operation is only possible in close collaboration with you. Key to that is knowing the circumstances in which the vessel will operate.",
      "The industry still has a long way to go on emission reduction, circular operations and the energy transition. That work is already in the vessels, the overflow systems and the automation stack.",
    ],
    links: [
      { label: "Dredging innovations", href: "/dredging/dredging-innovations" },
      { label: "History of dredging", href: "/dredging/history-dredging" },
      { label: "Cases", href: "/dredging/dredging-cases" },
    ],
  },
  news: [...redesignHome.news],
  close,
}

export const whatIsDredging: ArticlePageContent = {
  path: "/dredging/what-is-dredging",
  title: "What is dredging?",
  description:
    "Dredging is the process of removing underwater soil and moving it — the work behind ports, canals, land reclamation and coastal protection.",
  kicker: "IHC Dredging",
  headline: "What is dredging?",
  intro:
    "Dredging is the process of removing soil, such as sand or gravel, from underwater and transporting it from one place to another. Simple, yet it has shaped canals, ports and coastlines.",
  image: assets.landReclamation,
  sections: [
    {
      paragraphs: [
        "Projects such as the Suez Canal, the Panama Canal and the Palm Islands would not exist without dredging. Much of the infrastructure that underpins trade and social wellbeing has a direct link to it.",
        "The world economy relies on global trade, with cost-effectiveness and ever larger vessels as a trend. Ports expand and need constant maintenance and deepening of access channels and basins. Construction depends on dredging for sand and gravel. With a growing population and rising sea levels, land reclamation and coastal protection matter more, not less.",
        "There is a growing need for dredging in many applications, large and small, in capital or maintenance works. Dredging is everywhere. Dredging offers a world of opportunities.",
      ],
    },
    {
      title: "Why it is done",
      paragraphs: [
        "Dredging can be necessary to keep navigation safe, prevent flooding and improve water quality. It can create new land for development or recreation, and it can help restore damaged ecosystems by removing pollutants. It plays a role in the health of waterways and the communities that depend on them.",
      ],
    },
    {
      title: "Dredging objective",
      paragraphs: [
        "Every successful project starts with a thorough assessment: purpose, soil and volumes, schedule, water depth and access. From those elements the right equipment is selected. The most common aims are:",
      ],
      items: [
        { text: "Channel and port maintenance" },
        { text: "Channel and port construction or deepening (capital dredging)" },
        { text: "Coastal protection and beach nourishment" },
        { text: "Land reclamation" },
        { text: "Mining and aggregate dredging" },
        { text: "Offshore works and pipeline trenches" },
        { text: "Environmental improvement" },
      ],
    },
    {
      title: "What has to be known",
      paragraphs: [
        "Volume is a function of area, layer thickness and soil type. Reliable calculations in the planning phase decide whether a project is profitable. Agreement on the method of measurement matters, because methods differ.",
        "Soil characteristics decide the equipment: sand, clay, silt, gravel or rock; grain size and shape. A standardised cutter suction dredger may be enough, or you may need a dredge wheel, or a trailing suction hopper dredger.",
        "Available time together with project size sets the required dredging capacity.",
      ],
    },
    {
      title: "Site conditions",
      paragraphs: [
        "Beyond soil and volume, the site itself decides whether a programme will work.",
      ],
      items: [
        {
          title: "Access",
          text: "Can the dredger navigate to the site, or does it have to be transported?",
        },
        {
          title: "Tides and currents",
          text: "Intensity affects operations and safety, and water depth selects the equipment.",
        },
        {
          title: "Climate",
          text: "Adverse weather can stop work and put people at risk.",
        },
        {
          title: "Environment",
          text: "Protected habitats and water-quality rules have to be designed in.",
        },
        {
          title: "Disposal distance",
          text: "How far the mixture travels is part of efficient sediment management.",
        },
        {
          title: "Local constraints",
          text: "Unique conditions should be investigated so the approach fits the area.",
        },
      ],
    },
  ],
  links: [
    { label: "Project types", href: "/dredging/project-types" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const dredgingVessels: ArticlePageContent = {
  path: "/dredging/dredging-vessels",
  title: "Dredging vessels",
  description:
    "Cutter suction dredgers, trailing suction hopper dredgers, split hoppers and grab hoppers — standardised and custom-built.",
  kicker: "IHC Dredging",
  headline: "Dredging vessels",
  intro:
    "We design and build standardised and custom-built dredgers capable of working silt, sand, clay and rock. Trailing suction hopper dredgers, grab hoppers, cutter suction dredgers and wheel suction dredgers — there is a fit for maintenance, land reclamation and aggregate work.",
  image: assets.spartacus,
  cards: [
    {
      title: "Cutter suction dredgers",
      text: "CSDs for compacted soils such as clay and rock, from modular Beaver® standards to custom-built programmes.",
      href: "/dredging/dredging-vessels/cutter-suction-dredgers",
    },
    {
      title: "Trailing suction hopper dredgers",
      text: "TSHDs for excavating and transporting sand, gravel and silt — Easy Dredge, Beagle® and custom-built hulls.",
      href: "/dredging/dredging-vessels/trailing-suction-hopper-dredgers",
    },
    {
      title: "Split hopper",
      text: "A versatile dredger for inland and shallow-water work.",
      href: "/dredging/dredging-vessels/split-hopper",
    },
    {
      title: "Grab hopper dredgers",
      text: "Sea-going dredgers with the manoeuvrability needed to operate in tight parts.",
      href: "/dredging/dredging-vessels/grab-hopper-dredgers",
    },
    {
      title: "Additional equipment",
      text: "Workboats, floating hoses and booster stations so a job can be taken on end to end.",
      href: "/dredging/dredging-vessels/additional-equipment",
    },
  ],
  sections: [
    {
      paragraphs: [
        "At IHC Dredging we aim to deliver a totally integrated solution. Designing, constructing and putting the most efficient dredger into operation is only possible in close collaboration with our customers. Key to that longstanding success is knowing the circumstances in which a vessel will operate.",
      ],
    },
    {
      title: "Operational efficiency",
      paragraphs: [
        "We have built thousands of dredging vessels and dredge installations. Each one an improvement on the previous. That is how the vessels stay efficient — and why the work on the next one does not stop.",
      ],
    },
    {
      title: "Sustainability",
      paragraphs: [
        "Recent programmes have concentrated on sustainable solutions: the Plumigator® overflow, eco pump control, electrical and automation systems, and LNG and dual-fuel vessels. The result is higher energy efficiency and a smaller environmental impact.",
      ],
    },
    {
      title: "Return on investment",
      paragraphs: [
        "Vessels are engineered for uptime and supported by a service network, so maintenance cost stays down while production stays up. Combined with operational efficiency, that is the return.",
      ],
    },
  ],
  links: [
    {
      label: "Automation systems",
      href: "/dredging/dredging-equipment/integrated-and-connected-automation",
    },
    { label: "Dredging cases", href: "/dredging/dredging-cases" },
  ],
  close,
}
