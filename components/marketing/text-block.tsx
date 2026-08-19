import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { cn } from "@/lib/utils"
import type { TextSection } from "@/content/types"

export function TextBlock({
  section,
  first = false,
}: {
  section: TextSection
  first?: boolean
}) {
  return (
    <section className={first ? "pt-[5.5rem] pb-16 md:pt-24" : "py-16 md:py-20"}>
      <Container className="max-w-[52rem]">
        <h2 className="mb-4 text-[1.8125rem] font-bold leading-tight md:text-[2.5625rem] md:font-normal">
          {section.title}
        </h2>
        <div className="space-y-4 text-[1.05rem] leading-7 text-neutral-900 md:text-[1.1875rem] md:leading-8">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
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
