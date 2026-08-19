import { assets } from "./assets"
import { redesignHome } from "./redesign"
import type { ArticlePageContent, MarketPageContent } from "./types"

const close = {
  headline: "Talk to a mining expert",
  text: "A mining dredger, processing equipment, or consultancy for your specific commodity and site.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const miningHub: MarketPageContent = {
  path: "/mining",
  title: "IHC Mining",
  description:
    "Consultancy, equipment and mining dredgers for every phase of the mining life cycle — designed to improve efficiency, lower cost per tonne and reduce impact.",
  kicker: "IHC Mining",
  headline: "Mining, end to end",
  intro:
    "With over a century in the mining sector, we give customers a competitive edge worldwide. Our geometallurgical and consultancy services deliver the data to extract the full economic value from an operation, while the equipment we design and build improves efficiency, lowers the cost per tonne and makes activities more sustainable.",
  canvas: {
    image: assets.landReclamation,
    title: "Mining dredger",
    caption: "Integrated mineral processing",
    href: "/mining/mining-equipment",
    specs: [
      {
        label: "Scope",
        value: "Life cycle",
        title: "Full mining life cycle",
        text: "Reliable, integrated solutions for every phase of the mining life cycle for raw materials.",
      },
      {
        label: "Focus",
        value: "Cost/tonne",
        title: "Lower cost per tonne",
        text: "State-of-the-art equipment improves operational efficiency and lowers the cost per tonne.",
      },
      {
        label: "Themes",
        value: "Tailings",
        title: "Sustainability & safety",
        text: "Solutions built around decarbonisation, tailings and water management.",
      },
    ],
  },
  offerings: [
    {
      title: "Services",
      text: "Consultancy and after-sales services tailored to the exploration and mining of your specific commodities.",
      href: "/mining/mining-services",
    },
    {
      title: "Equipment",
      text: "State-of-the-art equipment that improves operational efficiency, lowers the cost per tonne and makes activities more sustainable.",
      href: "/mining/mining-equipment",
    },
    {
      title: "Vessels",
      text: "Mining dredgers as standalone integrated units, or as static and floating mineral processing facilities.",
      href: "/mining/mining-vessels",
    },
  ],
  explain: {
    title: "The full mining life cycle",
    text: "For every phase in the mining life cycle for raw materials, we provide reliable, integrated solutions fully tailored to the specific demand for mineral resources. Tell us the phase you are in and we help you out.",
    cta: { label: "Mining equipment", href: "/mining/mining-equipment" },
  },
  challenges: [
    {
      title: "Decarbonising mining operations",
      text: "The sector is under increasing pressure from stakeholders to reduce its environmental impact and accelerate the decarbonisation of mining operations.",
      href: "/challenges",
    },
    {
      title: "Tailings and water management",
      text: "The rising cost of tailings management and the need for water conservation are significant challenges for economically viable mining.",
      href: "/mining/mining-equipment",
    },
    {
      title: "Rising demand for base metals",
      text: "A growing global population drives rising demand for base metals such as copper, lithium and nickel.",
      href: "/innovations",
    },
  ],
  featuredCase: {
    kicker: "Innovation",
    title: "Recovering metals from incinerator bottom ash",
    text: "IHC Mining and Urban Metals jointly developed a state-of-the-art pilot plant for the recovery of fine heavy non-ferrous metals (HNF) from incinerator bottom ash.",
    href: "/innovations",
    image: assets.landReclamation,
  },
  projects: {
    title: "Project types",
    intro:
      "Our expertise stretches across many project types, including tailings rehabilitation and deep-sea mining.",
    items: [
      {
        title: "Tailings",
        text: "Tailings deposits are found wherever there is ongoing or legacy mining activity. They present challenges — but also interesting opportunities for owners.",
        href: "/mining/mining-equipment",
      },
      {
        title: "Deep-sea mining",
        text: "The demand for raw materials also leads us to deep-sea environments. It is key that this is done while minimising the environmental impact.",
        href: "/innovations",
        image: assets.offshoreWind,
      },
    ],
    cta: { label: "Mining equipment", href: "/mining/mining-equipment" },
  },
  about: {
    title: "A century in mining",
    paragraphs: [
      "Through our geometallurgical and consultancy services we deliver the data to extract the full economic value from a mining operation, and the equipment we design and build helps you improve operational efficiency and lower the cost per tonne.",
      "IHC Mining understands the challenges mining companies face and partners with you to find the best strategy and solutions — incorporating wider sustainability and safety themes such as decarbonisation, tailings and water management.",
      "We continue to develop efficient and sustainable solutions, from high-recovery jigs to the recovery of fine heavy non-ferrous metals, preparing you for the challenges of tomorrow.",
    ],
    links: [
      { label: "Mining equipment", href: "/mining/mining-equipment" },
      { label: "Mining services", href: "/mining/mining-services" },
      { label: "Innovations", href: "/innovations" },
    ],
  },
  news: [...redesignHome.news],
  close,
}

export const miningEquipment: ArticlePageContent = {
  path: "/mining/mining-equipment",
  title: "Mining equipment",
  description:
    "Dredge mining equipment and mineral processing solutions tailored to your commodities — designed for optimal performance in wet environments.",
  kicker: "IHC Mining",
  headline: "Mining equipment",
  intro:
    "From mining dredger to mineral separation, our (dredge) mining equipment is designed for optimal performance and tailored to the specific demand for mineral resources — dredging, excavating and transporting slurry for all kinds of commodities.",
  image: assets.landReclamation,
  cards: [
    {
      title: "Dredge mining equipment",
      text: "Tailored to your production demands in a wet environment — dredging, excavating and transporting slurry for all kinds of commodities.",
      href: "/mining/mining-equipment",
    },
    {
      title: "Tailings equipment",
      text: "Tools for various types of deposits and tailings storage facilities.",
      href: "/mining/mining-equipment",
    },
    {
      title: "Mineral processing",
      text: "A specialist range of cost-efficient mineral processing solutions, proven reliable even in the most difficult environments.",
      href: "/mining/mining-equipment",
    },
  ],
  sections: [
    {
      title: "A proven track record",
      paragraphs: [
        "With a proven track record in solutions for mineral sands, tailings rehabilitation, battery minerals, gold, diamonds, tin and other commodities, we provide standard or tailored solutions to improve your mining operation.",
      ],
    },
    {
      title: "Built around your process",
      paragraphs: [
        "Our experts fully comprehend the mining process, which enables them to develop the best possible solution for our clients based on their specific needs.",
        "Our approach always starts with your requirements, and key to our success is knowing the circumstances in which the equipment will operate. Whichever phase of the operation you are in, we can assist you.",
      ],
    },
  ],
  links: [
    { label: "Mining services", href: "/mining/mining-services" },
    { label: "Mining vessels", href: "/mining/mining-vessels" },
  ],
  close,
}

export const miningServices: ArticlePageContent = {
  path: "/mining/mining-services",
  title: "Mining services",
  description:
    "Geometallurgical and consultancy services plus after-sales support, tailored to the exploration and mining of your specific commodities.",
  kicker: "IHC Mining",
  headline: "Mining services",
  intro:
    "Our consultancy and after-sales services are tailored to the exploration and mining of your specific commodities. Through geometallurgical and consultancy services we deliver the data to extract the full economic value from your operation.",
  sections: [
    {
      title: "Consultancy and geometallurgy",
      paragraphs: [
        "We help you understand your deposit and your process so you can extract the full economic value from the operation, lower the cost per tonne and make activities more sustainable.",
        "Our approach always starts with your requirements. Depending on the phase of your mining operation, we assist with the data and the strategy to move forward.",
      ],
    },
    {
      title: "After-sales support",
      paragraphs: [
        "Once equipment is in operation, our after-sales services keep it productive — with the parts, expertise and support needed to maintain performance over the life of the asset.",
      ],
    },
  ],
  links: [
    { label: "Mining equipment", href: "/mining/mining-equipment" },
    { label: "Mining vessels", href: "/mining/mining-vessels" },
  ],
  close,
}

export const miningVessels: ArticlePageContent = {
  path: "/mining/mining-vessels",
  title: "Mining vessels",
  description:
    "Mining dredgers supplied as fully integrated standalone units, or as static and floating mineral processing facilities.",
  kicker: "IHC Mining",
  headline: "Mining vessels",
  intro:
    "We supply mining dredgers either as standalone units that are fully integrated, or as static or floating mineral processing facilities — engineered around the commodity and the site.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Integrated mining dredgers",
      paragraphs: [
        "A mining dredger combines excavation, transport and — where required — processing in a single integrated unit, matched to the deposit and to your production demands in a wet environment.",
      ],
    },
    {
      title: "Static and floating processing",
      paragraphs: [
        "Where a vessel is not the answer, we deliver static or floating mineral processing facilities, applying the same understanding of the mining process to get the most from the resource.",
      ],
    },
  ],
  links: [
    { label: "Mining equipment", href: "/mining/mining-equipment" },
    { label: "Mining services", href: "/mining/mining-services" },
  ],
  close,
}
