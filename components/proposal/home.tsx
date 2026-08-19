import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { ProductCanvas } from "@/components/proposal/product-canvas"
import { cn } from "@/lib/utils"
import { redesignHome } from "@/content/redesign"

export function ProposalHome() {
  const { hero, trust, markets, quotes, news, close } = redesignHome

  return (
    <main id="main-content" className="flex-1 bg-white">
      <section className="border-b py-16 min-[800px]:py-24">
        <Container className="grid items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div>
            <h1 className="max-w-xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl min-[1200px]:text-[3.35rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-neutral-700 min-[800px]:text-base">
              {hero.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primary.href}
                className={cn(
                  buttonVariants({ variant: "ihc", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {hero.primary.label}
              </Link>
              <Link
                href={hero.secondary.href}
                className={cn(
                  buttonVariants({ variant: "ihcOutline", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <ProductCanvas priority />
        </Container>
      </section>

      <section className="border-b py-8">
        <Container>
          <p className="mb-4 text-xs font-medium text-neutral-500">
            Used on programmes with
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-700">
            {trust.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 min-[800px]:py-28">
        <Container className="space-y-24">
          {markets.map((market, index) => (
            <div
              key={market.href}
              className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16"
            >
              <div className={index % 2 === 1 ? "min-[900px]:order-2" : undefined}>
                <p className="mb-2 text-xs font-medium text-primary">
                  {market.label}
                </p>
                <h2 className="text-3xl font-medium min-[800px]:text-4xl">
                  {market.headline}
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-neutral-700">
                  {market.text}
                </p>
                <Link
                  href={market.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Explore {market.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden rounded-md",
                  index % 2 === 1 && "min-[900px]:order-1"
                )}
              >
                <Image
                  src={market.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 900px) 45vw, 90vw"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-y py-20 min-[800px]:py-28">
        <Container>
          <h2 className="mb-12 text-3xl font-medium min-[800px]:text-4xl">
            In the field
          </h2>
          <ul className="grid gap-12 min-[800px]:grid-cols-3 min-[800px]:gap-10">
            {quotes.map((quote) => (
              <li key={quote.attribution}>
                <blockquote>
                  <p className="text-xl font-medium leading-snug min-[800px]:text-[1.35rem]">
                    {quote.text}
                  </p>
                  <footer className="mt-5">
                    <Link
                      href={quote.href}
                      className="text-sm text-neutral-500 hover:text-primary"
                    >
                      {quote.attribution}
                    </Link>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 min-[800px]:py-28">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              Changelog
            </h2>
            <Link href="/news" className="text-sm font-medium text-primary">
              All news
            </Link>
          </div>
          <ul className="divide-y border-y">
            {news.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex flex-col gap-1 py-4 min-[800px]:flex-row min-[800px]:items-baseline min-[800px]:gap-10"
                >
                  <time className="w-24 shrink-0 text-sm text-neutral-500">
                    {item.date}
                  </time>
                  <span className="text-[15px] leading-snug hover:text-primary">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
