import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { ProductCanvas } from "@/components/proposal/product-canvas"
import { cn } from "@/lib/utils"
import type { MarketPageContent } from "@/content/types"

export function MarketPage({ page }: { page: MarketPageContent }) {
  const {
    kicker,
    headline,
    intro,
    canvas,
    offerings,
    explain,
    challenges,
    featuredCase,
    projects,
    about,
    news,
    close,
  } = page

  return (
    <main id="main-content" className="flex-1 bg-white">
      <section className="border-b py-16 min-[800px]:py-24">
        <Container className="grid items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div>
            <p className="mb-3 text-xs font-medium text-primary">{kicker}</p>
            <h1 className="max-w-xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl min-[1200px]:text-[3.35rem]">
              {headline}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-neutral-700 min-[800px]:text-base">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={close.cta.href}
                className={cn(
                  buttonVariants({ variant: "ihc", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {close.cta.label}
              </Link>
              <Link
                href={offerings[0]?.href ?? "/"}
                className={cn(
                  buttonVariants({ variant: "ihcOutline", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {offerings[0]?.title ?? "Explore"}
              </Link>
            </div>
          </div>
          <ProductCanvas data={canvas} priority />
        </Container>
      </section>

      <section className="border-b py-16 min-[800px]:py-20">
        <Container>
          <ul className="grid gap-10 min-[800px]:grid-cols-3 min-[800px]:gap-10">
            {offerings.map((item) => (
              <li key={item.href}>
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {item.title}
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b py-16 min-[800px]:py-24">
        <Container className="grid gap-10 min-[900px]:grid-cols-2 min-[900px]:items-center min-[900px]:gap-16">
          <div>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              {explain.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-neutral-700">
              {explain.text}
            </p>
            <Link
              href={explain.cta.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {explain.cta.label}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md">
            <Image
              src={projects.items[1]?.image ?? featuredCase.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 900px) 45vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-b py-20 min-[800px]:py-28">
        <Container>
          <h2 className="mb-12 text-3xl font-medium min-[800px]:text-4xl">
            Challenges
          </h2>
          <ul className="grid gap-12 min-[800px]:grid-cols-3 min-[800px]:gap-10">
            {challenges.map((item) => (
              <li key={item.href}>
                <p className="mb-2 text-xs font-medium text-primary">
                  Challenge
                </p>
                <h3 className="text-xl font-medium leading-snug min-[800px]:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b py-20 min-[800px]:py-28">
        <Container className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md">
            <Image
              src={featuredCase.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 900px) 45vw, 90vw"
              priority={false}
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-primary">
              {featuredCase.kicker}
            </p>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              {featuredCase.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-neutral-700">
              {featuredCase.text}
            </p>
            <Link
              href={featuredCase.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View the case
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b py-20 min-[800px]:py-28">
        <Container>
          <h2 className="text-3xl font-medium min-[800px]:text-4xl">
            {projects.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-700">
            {projects.intro}
          </p>
          <ul className="mt-12 grid gap-12 min-[800px]:grid-cols-2 min-[800px]:gap-16">
            {projects.items.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={projects.cta.href}
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {projects.cta.label}
            <ArrowRight className="size-3.5" />
          </Link>
        </Container>
      </section>

      <section className="border-b py-20 min-[800px]:py-28">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-medium min-[800px]:text-4xl">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-4 text-[15px] leading-7 text-neutral-700"
            >
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {about.links.map((link) => (
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
