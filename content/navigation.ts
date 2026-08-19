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
          { label: "Vessels", href: "/dredging" },
          { label: "Equipment", href: "/dredging" },
          { label: "Services", href: "/dredging" },
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
  "/dredging": "IHC Dredging",
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
  "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger":
    "World’s most powerful cutter suction dredger",
  "/offshore-energy/offshore-cases/pipelaying-vessels-sapura":
    "Pipelaying vessels for Sapura",
}
