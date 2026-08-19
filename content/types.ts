export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type Cta = {
  label: string
  href: string
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
