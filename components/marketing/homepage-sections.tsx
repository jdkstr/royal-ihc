import { CtaBlock } from "@/components/marketing/cta-block"
import { FeaturedCases } from "@/components/marketing/featured-cases"
import { HeroHeader } from "@/components/marketing/hero-header"
import { ImageText } from "@/components/marketing/image-text"
import { TextBlock } from "@/components/marketing/text-block"
import { TwoColumnText, ValuesBlock } from "@/components/marketing/two-column-text"
import type { HomepageSection } from "@/content/types"

export function HomepageSections({
  sections,
}: {
  sections: HomepageSection[]
}) {
  const firstTextIndex = sections.findIndex((section) => section.type === "text")

  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <HeroHeader key={index} section={section} />
          case "text":
            return (
              <TextBlock
                key={index}
                section={section}
                first={index === firstTextIndex}
              />
            )
          case "twoColumn":
            return <TwoColumnText key={index} section={section} />
          case "values":
            return <ValuesBlock key={index} section={section} />
          case "featuredCases":
            return <FeaturedCases key={index} section={section} />
          case "imageText":
            return <ImageText key={index} section={section} />
          case "cta":
            return <CtaBlock key={index} section={section} />
          default:
            return null
        }
      })}
    </>
  )
}
