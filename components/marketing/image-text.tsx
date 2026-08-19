import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { cn } from "@/lib/utils"
import type { ImageTextSection } from "@/content/types"

export function ImageText({ section }: { section: ImageTextSection }) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 min-[800px]:grid-cols-2 min-[800px]:gap-16">
          <div className="relative aspect-[690/395] overflow-hidden">
            <Image
              src={section.image}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(min-width: 800px) 45vw, 90vw"
            />
          </div>
          <div>
            <h2 className="mb-4 text-[1.8125rem] font-bold leading-tight md:text-[2.5625rem] md:font-normal">
              {section.title}
            </h2>
            <p className="mb-8 text-[1.05rem] leading-7 text-neutral-900 md:text-[1.1875rem] md:leading-8">
              {section.text}
            </p>
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
        </div>
      </Container>
    </section>
  )
}
