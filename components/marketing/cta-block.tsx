import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { cn } from "@/lib/utils"
import type { CtaSection } from "@/content/types"

export function CtaBlock({ section }: { section: CtaSection }) {
  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <div className="flex flex-col overflow-hidden rounded-[8px] bg-neutral-100 min-[800px]:flex-row">
          <div className="flex flex-1 flex-col justify-center p-[18px] md:p-10">
            <h2 className="mb-3 text-[1.8125rem] font-bold leading-tight md:text-[2.25rem]">
              {section.title}
            </h2>
            <p className="mb-8 text-[1.05rem] leading-7 text-neutral-900">
              {section.text}
            </p>
            <Link
              href={section.href}
              className={cn(
                buttonVariants({ variant: "ihc", size: "lg" }),
                "h-12 w-fit px-6 text-base"
              )}
            >
              Contact
            </Link>
          </div>
          <div className="relative min-h-[220px] flex-1 overflow-hidden min-[800px]:min-h-[320px]">
            <Image
              src={section.image}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(min-width: 800px) 45vw, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
