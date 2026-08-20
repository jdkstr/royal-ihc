export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type Cta = {
  label: string
  href: string
}

export type SpecChipData = {
  label: string
  value: string
  title: string
  text: string
}

export type ProductCanvasData = {
  image: string
  title: string
  caption: string
  href: string
  specs: readonly SpecChipData[]
}

export type LinkCard = {
  kicker?: string
  title: string
  text: string
  href: string
  image?: string
}

export type MarketPageContent = {
  path: string
  title: string
  description: string
  kicker: string
  headline: string
  intro: string
  canvas: ProductCanvasData
  offerings: LinkCard[]
  explain: {
    title: string
    text: string
    cta: Cta
  }
  challenges: LinkCard[]
  featuredCase: LinkCard & { image: string }
  projects: {
    title: string
    intro: string
    items: LinkCard[]
    cta: Cta
  }
  about: {
    title: string
    paragraphs: string[]
    links: Cta[]
  }
  news: { date: string; title: string; href: string }[]
  close: {
    headline: string
    text: string
    cta: Cta
  }
}

export type ArticleSection = {
  title?: string
  paragraphs: string[]
  items?: { title?: string; text: string }[]
}

export type ArticlePageContent = {
  path: string
  title: string
  description: string
  kicker: string
  headline: string
  intro: string
  image?: string
  sections: ArticleSection[]
  cards?: LinkCard[]
  links?: Cta[]
  close: {
    headline: string
    text: string
    cta: Cta
  }
}

export type ListingItem = {
  date?: string
  kicker?: string
  title: string
  text?: string
  href: string
  image?: string
}

export type ListingPageContent = {
  path: string
  title: string
  description: string
  kicker: string
  headline: string
  intro: string
  items: ListingItem[]
  note?: string
  links?: Cta[]
  close: {
    headline: string
    text: string
    cta: Cta
  }
}

export type HeroSection = {
  type: "hero"
  headline: string
  text: string
  marketsTitle: string
  markets: NavLink[]
  introSrc: string
  loopSrc: string
  poster: string
}

export type TextSection = {
  type: "text"
  title: string
  paragraphs: string[]
  cta?: Cta
}

export type TwoColumnSection = {
  type: "twoColumn"
  columns: {
    image: string
    alt: string
    title: string
    text: string
    cta: Cta
  }[]
}

export type ValuesSection = {
  type: "values"
  title: string
  items: { name: string; text: string }[]
  cta?: Cta
}

export type FeaturedCasesSection = {
  type: "featuredCases"
  title: string
  intro: string
  cases: {
    label: string
    title: string
    text: string
    image: string
    href: string
  }[]
}

export type ImageTextSection = {
  type: "imageText"
  title: string
  text: string
  image: string
  alt: string
  cta: Cta
}

export type CtaSection = {
  type: "cta"
  title: string
  text: string
  href: string
  image: string
  alt: string
}

export type HomepageSection =
  | HeroSection
  | TextSection
  | TwoColumnSection
  | ValuesSection
  | FeaturedCasesSection
  | ImageTextSection
  | CtaSection
