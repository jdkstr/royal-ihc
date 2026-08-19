import { assets } from "./assets"
import type { ArticlePageContent } from "./types"

const contactClose = {
  headline: "Talk to IHC",
  text: "A new build, a service programme, spare parts, or access to the assets already in your fleet.",
  cta: { label: "Contact", href: "/contact" },
} as const

export const contact: ArticlePageContent = {
  path: "/contact",
  title: "Contact",
  description:
    "Get in touch with Royal IHC — 24/7 service line, headquarters in Kinderdijk and regional offices and service centres worldwide.",
  kicker: "Contact",
  headline: "Get in touch",
  intro:
    "From complex integrated systems to choosing the right mission equipment, our specialists are happy to think along with you. Reach the right team through the details below or the enquiry form on royalihc.com.",
  image: assets.contactCta,
  sections: [
    {
      title: "24/7 service",
      paragraphs: [
        "Emergency line for operational and technical assistance: +31 88 015 60 00.",
      ],
    },
    {
      title: "Headquarters",
      paragraphs: [
        "IHC Holland BV — Smitweg 6, 2961 AW Kinderdijk, The Netherlands. P.O. Box 1, 2960 AA Kinderdijk. T +31 88 015 25 35.",
      ],
    },
    {
      title: "Regional offices and service centres",
      paragraphs: [
        "Royal IHC operates across Europe, Africa, Asia, Latin America, the Middle East, North America and Oceania.",
      ],
      items: [
        { title: "United States", text: "IHC America Inc — 10198 Fairbanks North Houston Road, Houston 77064, Texas." },
        { title: "Singapore", text: "IHC Asia Pacific Pte Ltd — 69M Tuas South Avenue 1, Singapore 637505. T +65 81 82 34 83." },
        { title: "Bangladesh", text: "IHC Bangladesh Ltd — Navana Tower (9th floor), Gulshan South Avenue, Dhaka-1212." },
        { title: "Colombia", text: "IHC Colombia S.A.S. — Cr 9 #72-81, Bogotá D.C. T +57 32 08 67 65 64." },
      ],
    },
  ],
  links: [
    { label: "Global presence", href: "/about-us/global-presence" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  close: contactClose,
}

export const careers: ArticlePageContent = {
  path: "/careers",
  title: "Careers",
  description:
    "Work at Royal IHC — a project organisation built on craftsmanship and collaboration, with a seven-step hiring process and strong corporate benefits.",
  kicker: "Careers",
  headline: "Ready for your next step?",
  intro:
    "Working at Royal IHC means working in a project organisation. In multidisciplinary teams we deliver on our promise to customers: on time, on budget and to specification. Craftsmanship and collaboration are the base of our success.",
  image: assets.careers,
  sections: [
    {
      title: "Working at Royal IHC",
      paragraphs: [
        "Every day you learn and become more of a master in your craft. We encourage everyone to be open with all colleagues, and we strive for an inclusive culture where we treat each other with respect and where different opinions — and differences in gender, background and preference — are valued and accepted.",
      ],
    },
    {
      title: "Students & starters — Young IHC",
      paragraphs: [
        "We invest in young talent. Recently graduated and starting your career with us? Kickstart it through Young IHC.",
      ],
    },
    {
      title: "Hiring process",
      paragraphs: ["Applications are submitted via the website; each vacancy links to its application form."],
      items: [
        { text: "1. Application" },
        { text: "2. Intake by phone" },
        { text: "3. First interview" },
        { text: "4. Second interview round" },
        { text: "5. Offer" },
        { text: "6. Contract" },
        { text: "7. Onboarding at Royal IHC" },
      ],
    },
    {
      title: "Working conditions",
      paragraphs: [
        "Alongside your salary you receive reimbursement of travel costs, an annual profit share, a highly beneficial pension scheme, appropriate training, and at least 40 days of leave each year.",
        "We invest in learning through the IHC Academy, and in the Netherlands the CLA Metalektro is the base of our remuneration policy. There is also an on-site fitness centre in Kinderdijk and a Social Fund for uncovered medical costs.",
      ],
    },
  ],
  links: [
    { label: "About us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
  close: {
    headline: "Do you want to contribute to the maritime future?",
    text: "Explore roles across engineering, production and services and start your career with us.",
    cta: { label: "Contact recruitment", href: "/contact" },
  },
}

export const myIhc: ArticlePageContent = {
  path: "/corporate/my-ihc-digital-gateway-your-assets",
  title: "My IHC",
  description:
    "My IHC is Royal IHC's digital gateway to the assets already in your fleet — manuals, parts and support. Access requires an account on royalihc.com.",
  kicker: "My IHC",
  headline: "My IHC — your digital gateway",
  intro:
    "My IHC is the digital gateway to the assets already in your fleet. Asset owners use it to access manuals, order parts and get support for vessels and equipment in service.",
  image: assets.contactCta,
  sections: [
    {
      title: "What you get",
      paragraphs: [
        "One place to manage your Royal IHC assets: documentation and manuals, spare-part ordering, and support channels tied to the equipment you operate.",
      ],
    },
    {
      title: "Account required",
      paragraphs: [
        "The live My IHC gateway is account-gated. This page is a public explainer within the redesign; signing in and the asset portal itself remain on royalihc.com and are outside the scope of this static site.",
      ],
    },
  ],
  links: [
    { label: "Offshore services", href: "/offshore-energy/offshore-services" },
    { label: "Contact", href: "/contact" },
  ],
  close: contactClose,
}

export const privacyPolicy: ArticlePageContent = {
  path: "/privacy-policy",
  title: "Privacy policy",
  description:
    "How Royal IHC handles personal data. The authoritative privacy policy is maintained on royalihc.com.",
  kicker: "Legal",
  headline: "Privacy policy",
  intro:
    "Royal IHC respects your privacy and handles personal data in line with applicable data-protection law.",
  sections: [
    {
      title: "Authoritative version",
      paragraphs: [
        "The full, authoritative privacy policy is maintained on royalihc.com. This page exists so the policy is reachable within the redesign chrome; the live site excludes legal pages from crawling, so the complete text is not mirrored here.",
        "For questions about how your data is processed, or to exercise your rights, please get in touch via our contact page.",
      ],
    },
  ],
  links: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact", href: "/contact" },
  ],
  close: contactClose,
}

export const disclaimer: ArticlePageContent = {
  path: "/disclaimer",
  title: "Disclaimer",
  description:
    "Terms governing the use of Royal IHC's website and materials. The authoritative disclaimer is maintained on royalihc.com.",
  kicker: "Legal",
  headline: "Disclaimer",
  intro:
    "The content of this site is provided for general information. Royal IHC takes care over its accuracy but accepts no liability for errors or omissions.",
  sections: [
    {
      title: "Authoritative version",
      paragraphs: [
        "The full, authoritative disclaimer is maintained on royalihc.com. This page exists so the disclaimer is reachable within the redesign chrome; the live site excludes legal pages from crawling, so the complete text is not mirrored here.",
        "Where quantitative or textual information differs from official filed documents, the official documents prevail.",
      ],
    },
  ],
  links: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Contact", href: "/contact" },
  ],
  close: contactClose,
}

export const search: ArticlePageContent = {
  path: "/search",
  title: "Search",
  description:
    "Find your way around Royal IHC. Site search runs on royalihc.com; use the sections below to navigate this redesign.",
  kicker: "Search",
  headline: "Search",
  intro:
    "This proposal is a static export, so it does not run the live site's search backend. Jump straight to the main sections below, or use the header navigation.",
  sections: [
    {
      title: "Markets",
      paragraphs: [
        "Dredging, offshore energy, mining and defence — each with vessels, equipment and services.",
      ],
    },
  ],
  links: [
    { label: "Dredging", href: "/dredging" },
    { label: "Offshore energy", href: "/offshore-energy" },
    { label: "Mining", href: "/mining" },
    { label: "Defence", href: "/defence" },
    { label: "About us", href: "/about-us" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  close: contactClose,
}
