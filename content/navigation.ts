import type { NavLink } from "./types"

export const markets: NavLink[] = [
  { label: "IHC Dredging", href: "/dredging" },
  { label: "IHC Offshore Energy", href: "/offshore-energy" },
  { label: "IHC Mining", href: "/mining" },
  { label: "IHC Defence", href: "/defence" },
]

export const aboutLinks: NavLink[] = [
  { label: "About us", href: "/about-us" },
  { label: "Global presence", href: "/about-us/global-presence" },
  { label: "Corporate sustainability", href: "/about-us/corporate-sustainability" },
  { label: "SHE-Q", href: "/about-us/she-q" },
  { label: "Annual report", href: "/about-us/royal-ihc-annual-report" },
  { label: "Events", href: "/events" },
]

export const primaryNav: NavLink[] = [
  { label: "Markets", href: "/dredging", children: markets },
  { label: "Challenges", href: "/challenges" },
  { label: "Innovations", href: "/innovations" },
  { label: "About us", href: "/about-us", children: aboutLinks },
  { label: "Contact", href: "/contact" },
]

export const utilityNav: NavLink[] = [
  { label: "News", href: "/news" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
  { label: "My IHC", href: "/corporate/my-ihc-digital-gateway-your-assets" },
  { label: "Search", href: "/search" },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  { title: "Our markets", links: markets },
  { title: "About us", links: aboutLinks },
]

export const legalNav: NavLink[] = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
]

export const socialNav: NavLink[] = [
  { label: "YouTube", href: "https://www.youtube.com/@RoyalIHC" },
  { label: "Instagram", href: "https://www.instagram.com/royalihc/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/royalihc" },
  { label: "Facebook", href: "https://www.facebook.com/RoyalIHC/" },
]

export const hamburgerNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Markets",
    href: "/dredging",
    children: [
      {
        label: "IHC Dredging",
        href: "/dredging",
        children: [
          { label: "Vessels", href: "/dredging/dredging-vessels" },
          { label: "Equipment", href: "/dredging/dredging-equipment" },
          { label: "Services", href: "/dredging/dredging-services" },
        ],
      },
      { label: "IHC Offshore Energy", href: "/offshore-energy" },
      { label: "IHC Mining", href: "/mining" },
      { label: "IHC Defence", href: "/defence" },
    ],
  },
  { label: "Challenges", href: "/challenges" },
  { label: "Innovations", href: "/innovations" },
  { label: "About us", href: "/about-us", children: aboutLinks },
  { label: "Contact", href: "/contact" },
  ...utilityNav,
]

export const stubTitles: Record<string, string> = {
  "/offshore-energy": "IHC Offshore Energy",
  "/mining": "IHC Mining",
  "/defence": "IHC Defence",
  "/challenges": "Challenges",
  "/innovations": "Innovations",
  "/about-us": "About us",
  "/about-us/global-presence": "Global presence",
  "/about-us/corporate-sustainability": "Corporate sustainability",
  "/about-us/she-q": "SHE-Q",
  "/about-us/royal-ihc-annual-report": "Annual report",
  "/about-us/what-we-do-and-how-we-work": "What we do and how we work",
  "/events": "Events",
  "/contact": "Contact",
  "/news": "News",
  "/press": "Press",
  "/careers": "Careers",
  "/corporate/my-ihc-digital-gateway-your-assets": "My IHC",
  "/search": "Search",
  "/privacy-policy": "Privacy policy",
  "/disclaimer": "Disclaimer",
  "/dredging/dredging-equipment": "Dredging equipment",
  "/dredging/dredging-services": "Dredging services",
  "/dredging/dredging-cases": "Dredging cases",
  "/dredging/dredging-challenges": "Dredging challenges",
  "/dredging/dredging-challenges/economic-development-and-trade":
    "Economic development and trade",
  "/dredging/dredging-challenges/climate-change-flooding-and-drought":
    "Climate change, flooding and drought",
  "/dredging/challenges/data-heart-digital-transformation":
    "Data at the heart of digital transformation",
  "/dredging/dredging-innovations": "Dredging innovations",
  "/dredging/history-dredging": "History of dredging",
  "/dredging/project-types": "Project types",
  "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger":
    "World’s most powerful cutter suction dredger",
  "/dredging/dredging-vessels/cutter-suction-dredgers": "Cutter suction dredgers",
  "/dredging/dredging-vessels/trailing-suction-hopper-dredgers":
    "Trailing suction hopper dredgers",
  "/dredging/dredging-vessels/split-hopper": "Split hopper",
  "/dredging/dredging-vessels/grab-hopper-dredgers": "Grab hopper dredgers",
  "/dredging/dredging-vessels/additional-equipment": "Additional equipment",
  "/dredging/dredging-equipment/integrated-and-connected-automation":
    "Integrated and connected automation",
  "/offshore-energy/offshore-cases/pipelaying-vessels-sapura":
    "Pipelaying vessels for Sapura",
}
