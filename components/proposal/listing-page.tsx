import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { cn } from "@/lib/utils"
import type { ListingPageContent } from "@/content/types"

export function ListingPage({ page }: { page: ListingPageContent }) {
  const { kicker, headline, intro, items, note, links, close } = page

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

      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-10 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[800px]:gap-12">
            {items.map((item) => (
              <li key={item.href + item.title} className="flex flex-col">
                {item.image ? (
                  <Link
                    href={item.href}
                    className="group relative mb-5 block aspect-[16/10] overflow-hidden rounded-md bg-neutral-100"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(min-width: 1100px) 30vw, (min-width: 800px) 45vw, 90vw"
                    />
                  </Link>
                ) : null}
                {item.date || item.kicker ? (
                  <p className="mb-2 text-xs font-medium text-neutral-500">
                    {item.kicker ? (
                      <span className="text-primary">{item.kicker}</span>
                    ) : null}
                    {item.kicker && item.date ? " · " : null}
                    {item.date ? <time>{item.date}</time> : null}
                  </p>
                ) : null}
                <h2 className="text-lg font-medium leading-snug">
                  <Link href={item.href} className="hover:text-primary">
                    {item.title}
                  </Link>
                </h2>
                {item.text ? (
                  <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                    {item.text}
                  </p>
                ) : null}
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>

          {note ? (
            <p className="mt-12 max-w-2xl text-[13px] leading-6 text-neutral-500">
              {note}
            </p>
          ) : null}

          {links && links.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
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
