import Image from "next/image"

import { Container } from "@/components/marketing/container"
import { CtaLink } from "@/components/marketing/cta-link"
import type { FeaturedCasesSection } from "@/content/types"

export function FeaturedCases({ section }: { section: FeaturedCasesSection }) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-[52rem]">
          <h2 className="mb-4 text-[1.8125rem] font-bold leading-tight md:text-[2.5625rem] md:font-normal">
            {section.title}
          </h2>
          <p className="text-[1.05rem] leading-7 text-neutral-900 md:text-[1.1875rem] md:leading-8">
            {section.intro}
          </p>
        </div>
        <div className="grid gap-8 min-[800px]:grid-cols-2">
          {section.cases.map((item) => (
            <article
              key={item.href}
              className="flex h-full flex-col overflow-hidden rounded-[8px]"
            >
              <div className="relative aspect-[690/386] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 800px) 45vw, 90vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent"
                />
                <span className="absolute bottom-[18px] left-[18px] rounded border border-white px-2 py-0.5 text-sm text-white">
                  {item.label}
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-neutral-100 px-[18px] py-[27px]">
                <h3 className="mb-3 text-[1.4rem] font-bold leading-snug md:text-[1.625rem]">
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-[1.05rem] leading-7 text-neutral-900">
                  {item.text}
                </p>
                <CtaLink href={item.href} size="large">
                  View case
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
