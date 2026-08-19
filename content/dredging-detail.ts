import { assets } from "./assets"
import type {
  ArticlePageContent,
  ListingPageContent,
} from "./types"

const LIVE = "https://www.royalihc.com"

const close = {
  headline: "Talk to a dredging expert",
  text: "A new build, a dredge system, or support for assets already in your fleet.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const dredgingEquipment: ArticlePageContent = {
  path: "/dredging/dredging-equipment",
  title: "Dredging equipment",
  description:
    "Dredge pumps, cutter heads, drag heads, valves, pipelines, overflow systems and automation — integrated, tailor-made packages for optimal dredge performance.",
  kicker: "IHC Dredging",
  headline: "Create optimum dredging performance",
  intro:
    "From vessel to dredger, we offer integrated and tailor-made packages of dredging equipment for optimal performance. Our support covers designing, manufacturing and building a dredge system for your vessel, so together we create a dredger that suits your projects.",
  image: assets.spartacus,
  cards: [
    { title: "Dredge pumps", text: "The cost-effectiveness of dredging depends on the performance of the dredge pumps.", href: "/dredging/dredging-equipment" },
    { title: "Cutter heads", text: "A full range, from a small cutter head for soft soils to the largest for rock applications.", href: "/dredging/dredging-equipment" },
    { title: "Drag heads", text: "As the first point of contact with the soil, the drag head is vital to the entire dredging process.", href: "/dredging/dredging-equipment" },
    { title: "Dredge valves", text: "Reliable, effective flow control — key components in the transport of dredge mixtures.", href: "/dredging/dredging-equipment" },
    { title: "Pipelines & floating hoses", text: "Dredging lines and high-performance floating hoses feed and unload the mixture in and out of the dredger.", href: "/dredging/dredging-equipment" },
    { title: "Overflow systems", text: "Our overflow systems optimise the efficiency of the dredging process in a more sustainable way.", href: "/dredging/dredging-equipment" },
    { title: "Automation", text: "Automation solutions that enable safe, sustainable and efficient dredging operations.", href: "/dredging/dredging-equipment/integrated-and-connected-automation" },
  ],
  sections: [
    {
      title: "Engineered against erosion",
      paragraphs: [
        "Dredging — whether with a CSD or a TSHD — involves extreme exposure to erosion and causes much component wear. We have decades of experience with wear-resistant materials, and all equipment in our dredge systems is specially designed to withstand the forces of erosion and corrosion.",
      ],
    },
    {
      title: "Always improving",
      paragraphs: [
        "In challenging environments, access to the best equipment and latest technology is vital. Our drive to find better solutions — from the Plumigator® overflow system to space-saving valve designs — ensures we deliver the best option for any project.",
      ],
    },
  ],
  links: [
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
    { label: "Integrated and connected automation", href: "/dredging/dredging-equipment/integrated-and-connected-automation" },
  ],
  close,
}

export const dredgingServices: ArticlePageContent = {
  path: "/dredging/dredging-services",
  title: "Dredging services",
  description:
    "Advisory, design and engineering, operational support and maintenance — 24/7 assistance to keep your dredging uptime high.",
  kicker: "IHC Dredging",
  headline: "Dredging services",
  intro:
    "Our team of highly skilled professionals provides a broad range of services — from advisory and ship design to operational support and maintenance — to keep your dredging uptime high.",
  image: assets.spartacus,
  cards: [
    { title: "Advisory", text: "A broad range of advisory services to get your project started on the right footing.", href: "/dredging/dredging-services" },
    { title: "Design & engineering", text: "Ship owners and shipyards worldwide engage us for ship design and engineering services.", href: "/dredging/dredging-services" },
    { title: "Operational support", text: "We are active worldwide to support customers during their daily operations.", href: "/dredging/dredging-services" },
    { title: "Maintenance", text: "Efficient, effective maintenance — including all of your preventive maintenance needs — keeps assets performing.", href: "/dredging/dredging-services" },
  ],
  sections: [
    {
      title: "Support available 24/7",
      paragraphs: [
        "We offer a high-quality service to customers all around the world, with personal assistance available 24/7 to keep your dredging uptime high.",
      ],
    },
  ],
  links: [
    { label: "Dredging equipment", href: "/dredging/dredging-equipment" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const integratedAutomation: ArticlePageContent = {
  path: "/dredging/dredging-equipment/integrated-and-connected-automation",
  title: "Integrated and connected automation",
  description:
    "Automation and monitoring that turn a dredger into a smart, connected asset — fewer failures, more productive hours and a path towards autonomy.",
  kicker: "IHC Dredging · Equipment",
  headline: "Integrated and connected automation",
  intro:
    "Our automation solutions enable safe, sustainable and efficient dredging operations. By integrating sensors, control systems and monitoring, we turn a dredger into a smart, connected asset that can operate autonomously to a great extent.",
  image: assets.spartacus,
  sections: [
    {
      title: "Fewer failures, more productive hours",
      paragraphs: [
        "Automation reduces the chance of failure by using sensors that eliminate human intervention. On the Spartacus, systems made by Royal IHC allow the vessel to operate autonomously to a great extent — excluding human error where possible and adding productive hours.",
      ],
    },
    {
      title: "Data-driven operations",
      paragraphs: [
        "We retrieve data from vessels and automatically monitor operations to identify inefficiencies — such as a cavitating pump — so crews can adjust, save on wear and improve the project result. The same data enhances maintenance and feeds continuous product development.",
      ],
    },
  ],
  links: [
    { label: "Dredging equipment", href: "/dredging/dredging-equipment" },
    { label: "Data at the heart of digital transformation", href: "/dredging/challenges/data-heart-digital-transformation" },
  ],
  close,
}

export const historyDredging: ArticlePageContent = {
  path: "/dredging/history-dredging",
  title: "History of dredging",
  description:
    "Three centuries of dredging know-how — from keeping the Netherlands dry to designing the world's most powerful cutter suction dredger.",
  kicker: "IHC Dredging",
  headline: "History of dredging",
  intro:
    "Our experience goes back to the mid-seventeenth century. Being Dutch, we had to control the water to keep our feet dry — learning to deal with water, mud and currents. That is the basis of dredging as we know it today, and dredging is in our DNA.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Built over centuries",
      paragraphs: [
        "With more than 300 years of experience, we have designed, built and delivered thousands of dredging vessels and dredge installations — each an improvement on the last. Knowledge built over centuries, and through the people who run the programmes, gives customers a competitive edge worldwide.",
      ],
    },
    {
      title: "Shaping the modern world",
      paragraphs: [
        "Projects such as the Suez Canal, the Panama Canal and the Palm Islands would not exist without dredging. Much of the infrastructure that underpins trade and social wellbeing has a direct link to it.",
        "We keep pushing the boundaries — from the first LNG hopper dredger Minerva to Spartacus, the largest and most powerful cutter suction dredger in the world.",
      ],
    },
  ],
  links: [
    { label: "What is dredging?", href: "/dredging/what-is-dredging" },
    { label: "Dredging cases", href: "/dredging/dredging-cases" },
  ],
  close,
}

export const projectTypes: ArticlePageContent = {
  path: "/dredging/project-types",
  title: "Project types",
  description:
    "Maintenance, capital works, land reclamation, coastal protection, aggregate and environmental dredging — a dredger and a method for every project.",
  kicker: "IHC Dredging",
  headline: "Suitable for every dredging project",
  intro:
    "Every project has its own soil, schedule and site. From the first approach through equipment selection and execution, we help you match the method to the job. The most common project types are:",
  image: assets.landReclamation,
  sections: [
    {
      title: "Common objectives",
      paragraphs: ["Dredging serves many aims, large and small, in capital or maintenance works:"],
      items: [
        { title: "Maintenance dredging", text: "Tides deposit sand and silt; maintenance dredging keeps port basins and waterways at a navigable depth." },
        { title: "Capital dredging", text: "Channel and port construction or deepening to accommodate larger vessels and new trading links." },
        { title: "Coastal protection", text: "Beach nourishment and flood defence to protect people and land from rising seas and storms." },
        { title: "Land reclamation", text: "Sand, clay or rock from the seabed used to create new land for industry, housing, ports and airports." },
        { title: "Mining and aggregate dredging", text: "Recovering sand, gravel and minerals for construction and industry." },
        { title: "Offshore works and trenches", text: "Pipeline and cable trenches and other offshore civil works." },
        { title: "Environmental improvement", text: "Removing pollutants and restoring the health of waterways and ecosystems." },
      ],
    },
  ],
  links: [
    { label: "What is dredging?", href: "/dredging/what-is-dredging" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

// Challenge articles -------------------------------------------------------

export const economicDevelopmentTrade: ArticlePageContent = {
  path: "/dredging/dredging-challenges/economic-development-and-trade",
  title: "Economic development and increasing trade",
  description:
    "How dredging supports growing global trade — building and maintaining ports and inland waterways so goods and people move safely.",
  kicker: "IHC Dredging · Challenge",
  headline: "Economic development and increasing trade",
  intro:
    "Economic development has driven a steady increase in maritime transport. Constant growth in global trade creates demand for new and bigger seaport and waterway projects — new ports, and maintained and expanded existing infrastructure and natural inland waterways.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Disruption of trading routes",
      paragraphs: [
        "Keeping shipping lanes open is critical for the flow of the global economy. The saga of the 400 m Ever Given, which ran aground and blocked the Suez Canal in March 2021, showed how disruptions to seaborne routes can have a significant negative global impact.",
      ],
    },
    {
      title: "Safe passage of goods and people",
      paragraphs: [
        "Any country with a developed network of ports and navigable inland waterways has a clear competitive advantage. Because natural waterways silt up and do not maintain a constant depth, frequent dredging is necessary to create corridors through which vessels can travel safely.",
      ],
    },
    {
      title: "Boosting the flow of trade",
      paragraphs: [
        "With more than a century of experience, our strength lies in expertise and a broad portfolio of proven equipment. We provide vessels, equipment and services to create and maintain access channels, berthing places and turning basins, reclaim land, and deepen and widen existing waterways.",
      ],
    },
    {
      title: "Proven at scale",
      paragraphs: [
        "Our dredgers played a significant role in the New Suez Canal project in Egypt — dredging 258.8 million m³ from a 35 km parallel canal and widening 37 km of the existing canal, with 45 dredgers deployed and daily capacity nearly doubled.",
        "In India we support local companies bidding for a government project to develop 20,000 km of inland waterways and 13 major inland ports, with similar projects in the Bangladesh delta and the Yangtze basin — where a new draghead, the Mighty Dragon, was developed for difficult clay soil.",
      ],
    },
  ],
  links: [
    { label: "Climate change, flooding and drought", href: "/dredging/dredging-challenges/climate-change-flooding-and-drought" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const climateFloodingDrought: ArticlePageContent = {
  path: "/dredging/dredging-challenges/climate-change-flooding-and-drought",
  title: "Climate change, flooding and drought",
  description:
    "Dredging that protects people from flooding and keeps waterways navigable in drought — from the deltas of India and Bangladesh outward.",
  kicker: "IHC Dredging · Challenge",
  headline: "Climate change, flooding and drought",
  intro:
    "Extreme weather due to climate change has severe consequences in many parts of the world, increasing the risk of both flooding and drought. Expanding populations and growing demand for land — particularly in delta areas — create considerable challenges for governmental bodies.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Dealing with the effects of climate change",
      paragraphs: [
        "In countries such as India and Bangladesh, dredging protects local populations from flooding during the monsoon while keeping the transport of goods by water possible in the dry season, when river levels are much lower.",
      ],
    },
    {
      title: "Maintaining waterways",
      paragraphs: [
        "Huge inland deltas offer many opportunities for transport over water — as long as the waterways are safely maintained. Authorities rely on a range of dredging solutions to keep thousands of kilometres of rivers, tributaries and canals navigable.",
      ],
    },
    {
      title: "The constant battle of Bangladesh",
      paragraphs: [
        "In the Ganges-Brahmaputra-Meghna region, the two main rivers deposit over a billion tonnes of silt per year. Having delivered the first dredgers to Bangladesh in 1972, we support BIWTA and the BWDB with standard modular vessels, equipment and services.",
        "We have delivered more than 100 dredgers, work boats, booster stations and equipment packages to date — and those first two 1972 dredgers are still in operation. A local service centre opened in Dhaka in 2016 to assure maximum uptime.",
      ],
    },
  ],
  links: [
    { label: "Economic development and trade", href: "/dredging/dredging-challenges/economic-development-and-trade" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const dataHeartDigital: ArticlePageContent = {
  path: "/dredging/challenges/data-heart-digital-transformation",
  title: "Data at the heart of digital transformation",
  description:
    "How data-driven products improve operational efficiency, enhance maintenance and boost product development across the dredging fleet.",
  kicker: "IHC Dredging · Challenge",
  headline: "Data at the heart of digital transformation",
  intro:
    "In the maritime industry, digitalisation is key to becoming more efficient and sustainable. Data is at the heart of that transformation — but data is only a means to an end. How it is applied is where the real value is found. We integrate data into our products for three specific purposes.",
  image: assets.spartacus,
  sections: [
    {
      title: "Data to improve operational efficiency",
      paragraphs: [
        "For cutter suction dredgers, we retrieve data and automatically monitor operations to identify inefficiencies — such as a cavitating pump causing production loss and wear — so crews can adjust and improve the result.",
        "For trailing suction hopper dredgers, we combine vessel data with crew input to explain operational and technical downtime, benchmark a vessel over time, and compare across a fleet or with comparable vessels.",
      ],
    },
    {
      title: "Data to enhance maintenance",
      paragraphs: [
        "Maintenance ranges from reactive to predictive. Sensor data can create a Digital Twin — a virtual representation of the vessel or equipment — so degradation is noticed early and maintenance is planned before serious problems occur. Predictive strategies help determine the best moment to execute a job and prepare spare parts and support.",
      ],
    },
    {
      title: "Data to boost product development",
      paragraphs: [
        "An increase in performance data opens doors for continuous improvement. With a feedback loop from the field, we compare against designs and build more efficient products — which is why we keep adding sensors to better monitor performance against product tolerances.",
      ],
    },
  ],
  links: [
    { label: "Integrated and connected automation", href: "/dredging/dredging-equipment/integrated-and-connected-automation" },
    { label: "Dredging innovations", href: "/dredging/dredging-innovations" },
  ],
  close,
}

// Vessel families ----------------------------------------------------------

export const cutterSuctionDredgers: ArticlePageContent = {
  path: "/dredging/dredging-vessels/cutter-suction-dredgers",
  title: "Cutter suction dredgers",
  description:
    "CSDs for compacted soils such as clay and rock — from modular Beaver® standards to custom-built programmes like the record-setting Spartacus.",
  kicker: "IHC Dredging · Vessels",
  headline: "Cutter suction dredgers",
  intro:
    "Cutter suction dredgers (CSDs) are built for compacted soils such as clay and rock. A rotating cutter head loosens the soil, which is then pumped away — from modular Beaver® standards to fully custom-built programmes.",
  image: assets.spartacus,
  sections: [
    {
      title: "From standard to record-setting",
      paragraphs: [
        "Our CSD range runs from compact, standardised Beaver® dredgers to Spartacus — the largest and most powerful cutter suction dredger in the world, and the first of its kind to run on LNG.",
      ],
    },
  ],
  links: [
    { label: "World's most powerful CSD", href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const trailingSuctionHopperDredgers: ArticlePageContent = {
  path: "/dredging/dredging-vessels/trailing-suction-hopper-dredgers",
  title: "Trailing suction hopper dredgers",
  description:
    "TSHDs for excavating and transporting sand, gravel and silt — Easy Dredge, Beagle® and custom-built hulls.",
  kicker: "IHC Dredging · Vessels",
  headline: "Trailing suction hopper dredgers",
  intro:
    "Trailing suction hopper dredgers (TSHDs) excavate and transport sand, gravel and silt, loading the mixture into an onboard hopper while sailing. Our range spans Easy Dredge and Beagle® standards through to custom-built hulls.",
  image: assets.spartacus,
  sections: [
    {
      title: "For maintenance and reclamation",
      paragraphs: [
        "TSHDs suit maintenance dredging, land reclamation and aggregate work. Recent programmes focus on sustainability — the Plumigator® overflow, eco pump control, and LNG and dual-fuel propulsion for higher energy efficiency and lower impact.",
      ],
    },
  ],
  links: [
    { label: "Additional equipment", href: "/dredging/dredging-vessels/additional-equipment" },
    { label: "Dredging vessels", href: "/dredging/dredging-vessels" },
  ],
  close,
}

export const splitHopper: ArticlePageContent = {
  path: "/dredging/dredging-vessels/split-hopper",
  title: "Split hopper",
  description: "A versatile split-hull dredger for inland and shallow-water work.",
  kicker: "IHC Dredging · Vessels",
  headline: "Split hopper",
  intro:
    "The split hopper is a versatile dredger for inland and shallow-water work. Its hull splits open to discharge the load quickly, making it well suited to confined and shallow sites.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Versatile and shallow-draught",
      paragraphs: [
        "Compact and manoeuvrable, split hoppers work efficiently where larger vessels cannot, complementing a wider dredging fleet.",
      ],
    },
  ],
  links: [{ label: "Dredging vessels", href: "/dredging/dredging-vessels" }],
  close,
}

export const grabHopperDredgers: ArticlePageContent = {
  path: "/dredging/dredging-vessels/grab-hopper-dredgers",
  title: "Grab hopper dredgers",
  description:
    "Sea-going grab hopper dredgers with the manoeuvrability to operate in tight parts of ports and harbours.",
  kicker: "IHC Dredging · Vessels",
  headline: "Grab hopper dredgers",
  intro:
    "Grab hopper dredgers are sea-going vessels with the manoeuvrability needed to operate in tight parts of ports and harbours, using a grab crane to excavate and load material into the hopper.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Precision in confined water",
      paragraphs: [
        "Their manoeuvrability makes grab hoppers ideal for berths, quay walls and other confined areas where accuracy matters.",
      ],
    },
  ],
  links: [{ label: "Dredging vessels", href: "/dredging/dredging-vessels" }],
  close,
}

export const additionalEquipment: ArticlePageContent = {
  path: "/dredging/dredging-vessels/additional-equipment",
  title: "Additional equipment",
  description:
    "Workboats, floating hoses and booster stations so a dredging job can be taken on end to end.",
  kicker: "IHC Dredging · Vessels",
  headline: "Additional equipment",
  intro:
    "Beyond the main dredger, we supply the additional equipment that lets a job be taken on end to end — workboats, floating hoses and booster stations.",
  image: assets.landReclamation,
  sections: [
    {
      title: "Complete the spread",
      paragraphs: [
        "Booster stations extend pumping distance, floating hoses move slurry to shore, and workboats support anchor handling and daily operations — so the whole programme is covered from one supplier.",
      ],
    },
  ],
  links: [{ label: "Dredging vessels", href: "/dredging/dredging-vessels" }],
  close,
}

// Featured case ------------------------------------------------------------

export const worldsMostPowerfulCsd: ArticlePageContent = {
  path: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
  title: "World's most powerful cutter suction dredger",
  description:
    "How Spartacus — the largest and most powerful CSD in the world, and the first to run on LNG — set a new standard for the dredging industry.",
  kicker: "IHC Dredging · Case",
  headline: "World's most powerful cutter suction dredger",
  intro:
    "On 3 August 2021, cutter suction dredger Spartacus was handed over to Belgian client DEME. At 164 metres it is by far the largest and most powerful CSD in the world, the first to run on LNG, and packed with innovations — delivering unparalleled dredging potential, operational efficiency and sustainable performance.",
  image: assets.spartacus,
  sections: [
    {
      title: "Ambitious from the start",
      paragraphs: [
        "The objective was a vessel bigger, stronger, more efficient, smarter and greener than anything before — a 'smart mega cutter' pushing the boundaries of hardness, autonomy and durability. Total installed power reaches 44,180 kW for an unprecedented cutter power of 12,000 kW, with the heaviest cutter ladder ever built.",
        "Spartacus taps into a new market: it can dredge harder soil than previously imaginable, work at greater depths, and still compete on less complex projects.",
      ],
    },
    {
      title: "By the numbers",
      paragraphs: ["The programme set new benchmarks across efficiency and capability:"],
      items: [
        { title: "~30% CO₂ savings", text: "Through LNG and energy-recovery techniques." },
        { title: "3 fuel options", text: "LNG, low-sulphur heavy fuel oil, or marine diesel." },
        { title: "30× computing power", text: "Compared with earlier generations, enabling far-reaching automation." },
        { title: "Up to 45 m", text: "Maximum dredging depth." },
      ],
    },
    {
      title: "Greener by design",
      paragraphs: [
        "DEME opted for LNG, making Spartacus the first CSD able to sail and operate on less-polluting liquid gas. LNG's extreme cold (−162 °C) is used to cool the HVAC system, and exhaust heat is reused by a steam generator that powers the on-board network — together saving roughly 30% CO₂.",
      ],
    },
    {
      title: "Built for operational efficiency",
      paragraphs: [
        "Workability is set by productive hours per week. Spartacus carries sophisticated spare-parts logistics and a large welding workshop so cutter heads can be serviced on board rather than ashore. Dredging automation by Royal IHC lets the vessel operate autonomously to a great extent, reducing failures and adding productive hours.",
      ],
    },
  ],
  links: [
    { label: "Cutter suction dredgers", href: "/dredging/dredging-vessels/cutter-suction-dredgers" },
    { label: "More dredging cases", href: "/dredging/dredging-cases" },
  ],
  close,
}

// Listings -----------------------------------------------------------------

export const dredgingInnovations: ListingPageContent = {
  path: "/dredging/dredging-innovations",
  title: "Dredging innovations",
  description:
    "Efficient and sustainable dredging solutions — from a triple-patented cutter head to energy management, fuel cells and autonomous dredging.",
  kicker: "IHC Dredging",
  headline: "Dredging innovations",
  intro:
    "We continue to develop efficient and sustainable solutions and regularly share our progress. A selection of what we are working on in dredging:",
  items: [
    { kicker: "Cutting", title: "Triple-patented cutter head", text: "A major step forward in optimising the cutting process.", href: "/dredging/dredging-equipment" },
    { kicker: "Energy", title: "Energy Management Systems for dredgers", text: "Finding the right EMS is essential to increasing on-board efficiency.", href: "/about-us/corporate-sustainability" },
    { kicker: "Fuels", title: "The potential of fuel cells", text: "Despite huge potential, fuel cells are not yet mainstream — we are confident that is about to change.", href: "/dredging/dredging-equipment" },
    { kicker: "Autonomy", title: "Towards autonomous dredging", text: "The next phase in our journey towards autonomous dredging solutions.", href: "/dredging/dredging-equipment/integrated-and-connected-automation" },
    { kicker: "Efficiency", title: "Reusing exhaust heat", text: "Using exhaust heat for additional processes instead of only temperature control.", href: "/about-us/corporate-sustainability" },
    { kicker: "Data", title: "Data as the lifeblood of dredging", text: "Opportunities to become a more efficient and profitable operation.", href: "/dredging/challenges/data-heart-digital-transformation" },
  ],
  links: [{ label: "Dredging equipment", href: "/dredging/dredging-equipment" }],
  close,
}

export const dredgingChallenges: ListingPageContent = {
  path: "/dredging/dredging-challenges",
  title: "Dredging challenges",
  description:
    "The challenges dredging helps solve — economic development and trade, climate change and flooding, and digital transformation.",
  kicker: "IHC Dredging",
  headline: "Dredging challenges",
  intro:
    "Dredging sits behind some of the biggest challenges the world faces. These are the ones we help our customers meet:",
  items: [
    {
      kicker: "Trade",
      title: "Economic development and increasing trade",
      text: "New ports, deeper channels and maintained inland waterways for growing global trade.",
      href: "/dredging/dredging-challenges/economic-development-and-trade",
    },
    {
      kicker: "Climate",
      title: "Climate change, flooding and drought",
      text: "Protecting people from flood risk and keeping waterways navigable in drought.",
      href: "/dredging/dredging-challenges/climate-change-flooding-and-drought",
    },
    {
      kicker: "Digital",
      title: "Data at the heart of digital transformation",
      text: "Automation and monitoring for efficiency, maintenance and safety.",
      href: "/dredging/challenges/data-heart-digital-transformation",
    },
  ],
  links: [{ label: "Corporate challenges", href: "/challenges" }],
  close,
}

export const dredgingCases: ListingPageContent = {
  path: "/dredging/dredging-cases",
  title: "Dredging cases",
  description:
    "Customer stories from the dredging fleet — from the record-setting Spartacus to Beagle® deliveries and maintenance programmes worldwide.",
  kicker: "IHC Dredging",
  headline: "Dredging cases",
  intro:
    "Satisfied customers are our best ambassadors. Read how our solutions meet their needs in dredging.",
  items: [
    {
      kicker: "Case",
      title: "Spartacus — world's most powerful cutter suction dredger",
      text: "The largest and most powerful CSD in the world, and the first of its kind to run on LNG.",
      href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
      image: assets.spartacus,
    },
    {
      kicker: "Case",
      title: "TSHD Beagle® 4 TEUNIS HUIBERTUS for Gebr. van der Lee",
      text: "A Beagle® 4 trailing suction hopper dredger that has more than lived up to high expectations.",
      href: `${LIVE}/dredging/dredging-cases`,
      image: assets.landReclamation,
    },
    {
      kicker: "Case",
      title: "Reliable, high-output dredging in the Maldives with MTCC",
      text: "Robust vessels, expert support and proven equipment in the Maldives' toughest conditions.",
      href: `${LIVE}/dredging/dredging-cases`,
      image: assets.landReclamation,
    },
    {
      kicker: "Case",
      title: "Bringing TSHD BIESBOSCH back into reliable operation",
      text: "IHC Equipment supported Filia Dredging by assessing and refurbishing the existing dredging installation.",
      href: `${LIVE}/dredging/dredging-cases`,
      image: assets.spartacus,
    },
  ],
  note: "Royal IHC's full case archive is served from royalihc.com; the Spartacus case is migrated here in full, with further cases linking to the live site.",
  links: [{ label: "Dredging vessels", href: "/dredging/dredging-vessels" }],
  close,
}
