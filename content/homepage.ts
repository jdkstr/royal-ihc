import { assets } from "./assets"
import { markets } from "./navigation"
import type { HomepageSection } from "./types"

export const homepageSections: HomepageSection[] = [
  {
    type: "hero",
    headline: "Creating the maritime future",
    text: "As a leading supplier of maritime technology, we provide you worldwide with a clear competitive edge in the dredging, offshore, mining and defence industry.",
    marketsTitle: "Navigate to your market:",
    markets,
    introSrc: assets.videoIntro,
    loopSrc: assets.videoLoop,
    poster: assets.heroPoster,
  },
  {
    type: "text",
    title: "Ahead in the maritime industry since 1642",
    paragraphs: [
      "Our experience goes back to the mid-seventeenth century. Being Dutch we had to control the water in order to keep our feet dry. We learned how to deal with water, mud and currents, the basis of dredging as we know it today. Our experience goes back 300 years, but we look towards the future. We developed into a leading producer of vessels, equipment and full-services.",
      "As we navigate new waters in an ever-changing world, our aim remains unchanged: to discover the smartest and safest way forward for both our customers and our people. Together, we create the maritime future.",
    ],
    cta: { label: "About us", href: "/about-us" },
  },
  {
    type: "twoColumn",
    columns: [
      {
        image: assets.landReclamation,
        alt: "Land reclamation along the coast",
        title: "Making the maritime industry more efficient and sustainable",
        text: "Global challenges will have a major impact on the maritime industry. We are determined to play a leading role in making the maritime industry more efficient and sustainable, benefiting you along the way.",
        cta: {
          label: "How do we do this?",
          href: "/about-us/what-we-do-and-how-we-work",
        },
      },
      {
        image: assets.offshoreWind,
        alt: "Offshore vessel and windmills in the ocean",
        title: "Your challenges, our solutions",
        text: "Climate change, zero emission, more efficiency through digitization. These are some challenges we are all facing in the industry. We think ahead and come up with smart solutions for you.",
        cta: { label: "The challenges", href: "/challenges" },
      },
    ],
  },
  {
    type: "values",
    title: "Our key values",
    items: [
      {
        name: "Commitment",
        text: "we are committed to meeting your demands and give you a competitive edge in the industry. We are dedicated to our people and to minimising the impact our products have on the environment.",
      },
      {
        name: "Partnership",
        text: "we see you and our suppliers as our partners. Cooperation and partnership are the keys to success in our industry.",
      },
      {
        name: "Innovation",
        text: "we continuously develop new technologies that enable your organisation to operate in a smarter and safer way, act more efficiently and sustainably, and to enter new markets.",
      },
    ],
    cta: {
      label: "Benefit from our latest innovations.",
      href: "/innovations",
    },
  },
  {
    type: "featuredCases",
    title: "Projects our clients are proud of",
    intro:
      "We offer total solutions that improve your operational efficiency and allow for a more sustainable performance. From your initial idea to co-created finalised project or product, we help and advise you every step of the way.",
    cases: [
      {
        label: "Case",
        title: "World’s most powerful cutter suction dredger",
        text: "The Spartacus sets a new standard for the dredging industry and solidifies our position as market leader in the field of dredgers. Not only because the Spartacus is by far the largest and most powerful cutter suction dredger in the world, and the first to run on LNG, but also because of the many innovations on board.",
        image: assets.spartacus,
        href: "/dredging/dredging-cases/worlds-most-powerful-cutter-suction-dredger",
      },
      {
        label: "Case",
        title: "Pipelaying vessels for Sapura",
        text: "Building integrated pipelaying vessels for Sapura Navegação Marítima (Sapura).",
        image: assets.sapura,
        href: "/offshore-energy/offshore-cases/pipelaying-vessels-sapura",
      },
    ],
  },
  {
    type: "imageText",
    title: "Working at Royal IHC",
    text: "We work together to create the maritime future. We've been ahead since 1642 thanks to amazing craftsmanship. Our people are making the difference. Join us!",
    image: assets.careers,
    alt: "Royal IHC colleagues working together",
    cta: { label: "Check out our career opportunities", href: "/careers" },
  },
  {
    type: "cta",
    title: "How can we help you?",
    text: "Get in touch and we will help you.",
    href: "/contact",
    image: assets.contactCta,
    alt: "Royal IHC vessel at sea",
  },
]
