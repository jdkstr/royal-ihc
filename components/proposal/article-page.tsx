import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { cn } from "@/lib/utils"
import type { ArticlePageContent } from "@/content/types"

export function ArticlePage({ page }: { page: ArticlePageContent }) {
  const { kicker, headline, intro, image, sections, cards, links, close } = page

  return (
    <main id="main-content" className="flex-1 bg-white">
      <section className="border-b py-16 min-[800px]:py-24">
        <Container className="max-w-3xl">
          <p className="mb-3 text-xs font-medium text-primary">{kicker}</p>
          <h1 className="text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 text-[15px] leading-7 text-neutral-700 min-[800px]:text-base">
            {intro}
          </p>
        </Container>
      </section>

      {image ? (
        <section className="border-b">
          <Container className="py-10 min-[800px]:py-12">
            <div className="relative aspect-[16/8] overflow-hidden rounded-md">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>
          </Container>
        </section>
      ) : null}

      {cards && cards.length > 0 ? (
        <section className="border-b py-16 min-[800px]:py-20">
          <Container>
            <ul className="grid gap-10 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[800px]:gap-12">
              {cards.map((card) => (
                <li key={card.href}>
                  <h2 className="text-xl font-medium">{card.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                    {card.text}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {card.title}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="py-16 min-[800px]:py-24">
        <Container className="max-w-3xl space-y-12">
          {sections.map((section, index) => (
            <div key={section.title ?? index}>
              {section.title ? (
                <h2 className="text-3xl font-medium min-[800px]:text-4xl">
                  {section.title}
                </h2>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={cn(
                    "text-[15px] leading-7 text-neutral-700",
                    section.title || section.paragraphs[0] !== paragraph
                      ? "mt-4"
                      : undefined
                  )}
                >
                  {paragraph}
                </p>
              ))}
              {section.items && section.items.length > 0 ? (
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item.title ?? item.text}
                      className="border-l-2 border-primary pl-4"
                    >
                      {item.title ? (
                        <p className="text-sm font-medium">{item.title}</p>
                      ) : null}
                      <p className="text-[15px] leading-7 text-neutral-700">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {links && links.length > 0 ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </section>

      <section className="border-t bg-neutral-100 py-20 min-[800px]:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 min-[800px]:flex-row min-[800px]:items-center">
          <div>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              {close.headline}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-700">
              {close.text}
            </p>
          </div>
          <Link
            href={close.cta.href}
            className={cn(
              buttonVariants({ variant: "ihc", size: "lg" }),
              "h-10 shrink-0 rounded-sm px-5 text-sm"
            )}
          >
            {close.cta.label}
          </Link>
        </Container>
      </section>
    </main>
  )
}
