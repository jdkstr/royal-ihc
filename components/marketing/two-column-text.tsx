import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { CtaLink } from "@/components/marketing/cta-link"
import { cn } from "@/lib/utils"
import type { TwoColumnSection, ValuesSection } from "@/content/types"

export function TwoColumnText({ section }: { section: TwoColumnSection }) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="grid gap-12 min-[800px]:grid-cols-2 min-[800px]:gap-16">
          {section.columns.map((column) => (
            <article key={column.title}>
              <div className="relative mb-7 aspect-[691/388] overflow-hidden">
                <Image
                  src={column.image}
                  alt={column.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 800px) 45vw, 90vw"
                />
              </div>
              <h2 className="mb-4 text-[1.625rem] font-bold leading-tight md:text-[2.25rem]">
                {column.title}
              </h2>
              <p className="mb-8 text-[1.05rem] leading-7 text-neutral-900 md:text-[1.1875rem] md:leading-8">
                {column.text}
              </p>
              <CtaLink href={column.cta.href} size="large">
                {column.cta.label}
              </CtaLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ValuesBlock({
  section,
}: {
  section: ValuesSection
}) {
  return (
    <section className="py-16 md:py-20">
      <Container className="max-w-[52rem]">
        <h2 className="mb-7 text-[1.8125rem] font-bold leading-tight md:text-[2.5625rem] md:font-normal">
          {section.title}
        </h2>
        <div className="space-y-5 text-[1.05rem] leading-7 text-neutral-900 md:text-[1.1875rem] md:leading-8">
          {section.items.map((item) => (
            <p key={item.name}>
              <strong className="font-medium">{item.name}</strong>
              {" – "}
              {item.text}
            </p>
          ))}
        </div>
        {section.cta ? (
          <div className="mt-10">
            <Link
              href={section.cta.href}
              className={cn(
                buttonVariants({ variant: "ihcOutline", size: "lg" }),
                "h-12 px-6 text-base"
              )}
            >
              {section.cta.label}
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
