import { assets } from "./assets"
import type { ArticlePageContent } from "./types"

const close = {
  headline: "Creating the maritime future",
  text: "Talk to our experts about a new build, a service programme, or a partnership.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const aboutUs: ArticlePageContent = {
  path: "/about-us",
  title: "About us",
  description:
    "Royal IHC — a leading producer of vessels, equipment and services with roots going back to the mid-seventeenth century, determined to make the maritime industry more efficient and sustainable.",
  kicker: "About us",
  headline: "Creating the maritime future",
  intro:
    "Our experience goes back to the mid-seventeenth century. Being Dutch, we had to control the water to keep our feet dry — learning to deal with water, mud and currents, the basis of dredging as we know it today. Three centuries on, we look towards the future as a leading producer of vessels, equipment and full services.",
  image: assets.corporate,
  sections: [
    {
      title: "A sustainable future",
      paragraphs: [
        "Many of our customers, suppliers and shipyards face global challenges such as economic decline, climate change and the energy transition. These challenges — including the sustainable development goals — will have a major impact on the maritime industry.",
        "Royal IHC is determined to play a leading role in making the maritime industry more efficient and sustainable.",
      ],
    },
    {
      title: "Innovation at the core",
      paragraphs: [
        "Whether a project is in the dredging, defence, mining or offshore industry, most take place in challenging environments. We always look to deliver the best option for any project to give our customers a competitive advantage.",
        "We find and create innovative solutions by investing in R&D — around 3% of revenue each year, with over 200 employees in our in-house institute, placing us among a top-15 group of Dutch companies with a strong R&D focus.",
      ],
    },
    {
      title: "Board of directors",
      paragraphs: [
        "Our board is responsible for the company's strategy and policy, and for supervising day-to-day activities.",
      ],
      items: [
        {
          title: "Derk te Bokkel — CEO",
          text: "CEO since November 2023, having joined the board in April 2023 to work on a future-proof business plan, with a career spanning various roles at Stork and the chairmanship of TB&C.",
        },
        {
          title: "Bert-Jaap Dijkstra — CFO",
          text: "Joined as CFO in December 2024 with a proven track record in management and financial strategy and a background in energy and offshore energy services.",
        },
        {
          title: "Bert Jan ter Riet — COO",
          text: "Joined the board in March 2024 with over 30 years of experience in the maritime sector, developing Royal IHC's new strategic direction.",
        },
      ],
    },
    {
      title: "Education and society",
      paragraphs: [
        "We like to transfer knowledge to future craftsmen and craftswomen. In our TOC (Technisch Opleidingscentrum) we educate and train the crafts of tomorrow.",
        "Through the IHC Foundation we contribute to a better life for those in need, sharing knowledge and resources with one goal in mind: making a difference.",
      ],
    },
  ],
  cards: [
    {
      title: "Global presence",
      text: "Shipyards, capacity centres and service centres across seven regions worldwide.",
      href: "/about-us/global-presence",
    },
    {
      title: "Corporate sustainability",
      text: "Targets for a 55% emissions reduction by 2030 and climate neutrality by 2050.",
      href: "/about-us/corporate-sustainability",
    },
    {
      title: "SHE-Q",
      text: "Safety, health, environment and quality standards, and our codes of conduct.",
      href: "/about-us/she-q",
    },
    {
      title: "Annual report",
      text: "Our financial and CSR reporting, published each year.",
      href: "/about-us/royal-ihc-annual-report",
    },
  ],
  links: [
    { label: "What we do and how we work", href: "/about-us/what-we-do-and-how-we-work" },
    { label: "Careers", href: "/careers" },
  ],
  close,
}

export const whatWeDo: ArticlePageContent = {
  path: "/about-us/what-we-do-and-how-we-work",
  title: "What we do and how we work",
  description:
    "How Royal IHC delivers vessels, equipment and services across dredging, offshore energy, mining and defence — through innovation, craftsmanship and partnership.",
  kicker: "About us",
  headline: "What we do and how we work",
  intro:
    "We are a leading producer of vessels, equipment and full services across dredging, offshore energy, mining and defence. Whatever the market, most projects take place in challenging environments — so we look to deliver the best option for any project and give our customers a competitive advantage.",
  image: assets.corporate,
  sections: [
    {
      title: "Innovation by investment",
      paragraphs: [
        "We find and create innovative solutions by investing in R&D — approximately 3% of revenue each year, with over 200 employees working in our in-house institute. That places us among a top-15 group of Dutch companies with a strong R&D focus.",
      ],
    },
    {
      title: "Craftsmanship and collaboration",
      paragraphs: [
        "Working at Royal IHC means working in a project organisation. In multidisciplinary teams we deliver on our promise to customers: on time, on budget and to specification. Craftsmanship — alongside collaboration — is the base of our success.",
      ],
    },
    {
      title: "Codes of conduct",
      paragraphs: [
        "We take safety and our responsibility as a company seriously, which is why we abide by different codes and acts to minimise risks for your project.",
      ],
    },
  ],
  links: [
    { label: "About us", href: "/about-us" },
    { label: "Innovations", href: "/innovations" },
    { label: "SHE-Q", href: "/about-us/she-q" },
  ],
  close,
}

export const globalPresence: ArticlePageContent = {
  path: "/about-us/global-presence",
  title: "Global presence",
  description:
    "Shipyards, capacity centres, regional offices and service centres across Europe, Africa, Asia, Latin America, the Middle East, North America and Oceania.",
  kicker: "About us",
  headline: "Global presence",
  intro:
    "Whether you need a custom-made vessel, a piece of equipment, a new interior, piping or a steel construction kit, our shipyards and capacity centres are here to meet your needs — supporting you through every stage of the product life cycle with an integrated approach to complex turn-key projects.",
  image: assets.corporate,
  sections: [
    {
      title: "Benefit from",
      paragraphs: [
        "With on-site facilities and specialised knowledge close to your project, we shorten the production cycle and support you end to end.",
      ],
      items: [
        { text: "An efficient and reliable production cycle with on-site facilities." },
        { text: "End-to-end project assistance and realisation." },
        { text: "Production facilities such as covered slipways, machining and manufacturing." },
        { text: "Craftsmanship with years of experience and specialised knowledge." },
        { text: "Cutting-edge innovations." },
      ],
    },
  ],
  cards: [
    {
      title: "The Netherlands",
      text: "Our HQ, two production facilities, a regional office and service centre — plus steel cutting by Metalix, piping systems and custom interiors.",
      href: "/about-us/global-presence",
    },
    {
      title: "United Kingdom",
      text: "End-to-end services from Newcastle upon Tyne and a large-scale production facility at the Port of Blyth, specialising in offshore energy and defence.",
      href: "/about-us/global-presence",
    },
    {
      title: "Croatia & Slovakia",
      text: "Regional engineering offices in Rijeka, Pula and Komárno, part of our 200+ detailed engineering team.",
      href: "/about-us/global-presence",
    },
    {
      title: "South Africa",
      text: "A regional office, production facility and service centre serving Sub-Saharan Africa with after-sales support and spare parts.",
      href: "/about-us/global-presence",
    },
    {
      title: "Brazil & Colombia",
      text: "Regional offices, a production facility and a service centre serving the offshore, mining and dredging markets from Rio de Janeiro, Curitiba and Bogotá.",
      href: "/about-us/global-presence",
    },
    {
      title: "North America",
      text: "Regional offices in Calgary and Houston — from an Underwater Remote Mining system for the Ekati mine to a highly automated hopper dredge for USACE.",
      href: "/about-us/global-presence",
    },
    {
      title: "Australia",
      text: "A regional office and production facility serving mining customers, with a laboratory in Yatala and project support from Bunbury.",
      href: "/about-us/global-presence",
    },
    {
      title: "United Arab Emirates",
      text: "Established in Dubai in 2004, still the main service provider for dredging in the region — behind projects such as the Palm and World Islands.",
      href: "/about-us/global-presence",
    },
  ],
  close,
}

export const corporateSustainability: ArticlePageContent = {
  path: "/about-us/corporate-sustainability",
  title: "Corporate sustainability",
  description:
    "Royal IHC's sustainability strategy — low-GHG power systems, a double materiality assessment, emissions targets for 2030 and 2050, and social initiatives.",
  kicker: "About us",
  headline: "Corporate sustainability",
  intro:
    "Royal IHC aims to be among the leading suppliers of innovative and sustainable vessels, equipment and services in its markets. By developing advanced expertise in low-GHG power supply systems and integrating them into vessel designs, we actively help our customers reduce their carbon footprint.",
  image: assets.corporate,
  sections: [
    {
      title: "Climate change mitigation",
      paragraphs: [
        "We design vessels and equipment that are more efficient and produce fewer emissions, in line with developments across the maritime sector. Recognising that our greatest impact lies in the performance of our products, we continuously invest in R&D to enhance efficiency and accelerate the integration of alternative fuels.",
        "We advise clients on all types of options to improve the environmental performance of vessels. Many sustainable technologies are already available and can be adopted today, and we adopted a Double Materiality Assessment (DMA) as the foundation of our sustainability reporting.",
      ],
    },
    {
      title: "Our targets",
      paragraphs: ["Our roadmap runs from near-term regulatory alignment to a climate-neutral organisation."],
      items: [
        { title: "2030", text: "Meet the EU's 55% absolute emissions-reduction target, establish a pathway to net-zero (Scope 1 and 2) by 2050, and offer near-zero and zero-emission vessel designs across the portfolio." },
        { title: "2050", text: "Become a climate-neutral organisation in Scope 1 and 2, with a proven track record delivering highly efficient and zero-emission vessels and circularity across products, services and operations." },
      ],
    },
    {
      title: "People and society",
      paragraphs: [
        "Our employees are the organisation's greatest asset. We support skills development through our Vocational School Program, a Trainings Institute and an Academy of 200+ online courses, and we stimulate a healthy work-life balance.",
        "The IHC Foundation supports social and cultural initiatives in the regions where we operate. We maintain zero tolerance for practices that exploit or harm individuals, including all forms of modern slavery, human trafficking, and forced, bonded or child labour.",
      ],
    },
  ],
  links: [
    { label: "Annual report", href: "/about-us/royal-ihc-annual-report" },
    { label: "SHE-Q", href: "/about-us/she-q" },
  ],
  close,
}

export const sheq: ArticlePageContent = {
  path: "/about-us/she-q",
  title: "SHE-Q",
  description:
    "Safety, health, environment and quality at Royal IHC — working to the highest standards to protect people, assets and operations, guided by our codes of conduct.",
  kicker: "About us",
  headline: "Safety, health, environment & quality",
  intro:
    "We work to the highest safety and security standards, ensuring the protection of your personnel, assets and operations. SHE-Q is how we take our responsibility as a company seriously across every project and market.",
  image: assets.corporate,
  sections: [
    {
      title: "Safety and health",
      paragraphs: [
        "The safety and health of our people, our customers' crews and everyone around our operations comes first. We design, build and service to standards that reduce risk on board and in the yard, and we stimulate a healthy working environment for our employees.",
      ],
    },
    {
      title: "Environment",
      paragraphs: [
        "We design vessels and equipment that are more efficient and produce fewer emissions, and we advise clients on options to improve environmental performance — from overflow systems and eco pump control to alternative fuels. Our greatest impact lies in the performance of our products, so that is where we focus.",
      ],
    },
    {
      title: "Quality and codes of conduct",
      paragraphs: [
        "Quality is built into fit-for-purpose, reliable designs and the craftsmanship behind them. We take our responsibility as a company seriously, which is why we abide by different codes and acts to minimise risks for your project and to operate with integrity.",
      ],
    },
  ],
  links: [
    { label: "Corporate sustainability", href: "/about-us/corporate-sustainability" },
    { label: "About us", href: "/about-us" },
  ],
  close,
}

export const annualReport: ArticlePageContent = {
  path: "/about-us/royal-ihc-annual-report",
  title: "Royal IHC annual report",
  description:
    "Royal IHC's annual reports, published each year alongside the CSR report.",
  kicker: "About us",
  headline: "Annual report",
  intro:
    "Each year Royal IHC publishes its annual report. The reports below cover the company's financial and operational performance; a separate CSR report is published on our corporate sustainability page.",
  sections: [
    {
      title: "Reports",
      paragraphs: [
        "Annual reports are available for the years 2017 through 2025. On the live royalihc.com site these are downloadable PDFs.",
      ],
      items: [
        { text: "Royal IHC Annual Report 2025" },
        { text: "Royal IHC Annual Report 2024" },
        { text: "Royal IHC Annual Report 2023" },
        { text: "Royal IHC Annual Report 2022" },
        { text: "Royal IHC Annual Report 2021" },
        { text: "Royal IHC Annual Report 2017–2020" },
      ],
    },
    {
      title: "Note",
      paragraphs: [
        "In the event of any differences or inconsistencies between the information on the website and the original annual report as filed at the Trade Register of the Chamber of Commerce, the latter shall prevail.",
      ],
    },
  ],
  links: [
    { label: "Corporate sustainability", href: "/about-us/corporate-sustainability" },
    { label: "About us", href: "/about-us" },
  ],
  close,
}
