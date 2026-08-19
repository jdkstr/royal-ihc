import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/marketing/container"
import { Logo } from "@/components/marketing/logo"
import { DesignSystemDemos } from "@/components/proposal/design-system-demos"
import { ProductCanvas } from "@/components/proposal/product-canvas"
import { cn } from "@/lib/utils"
import { designSystem } from "@/content/design-system"
import { redesignHome } from "@/content/redesign"

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b py-16 min-[800px]:py-24">
      <Container>
        <h2 className="mb-10 text-3xl font-medium min-[800px]:text-4xl">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  )
}

export function DesignSystemPage() {
  const { name, summary, principles, colors, type, space, sections } =
    designSystem
  const { quotes, news, markets } = redesignHome
  const market = markets[0]

  return (
    <main id="main-content" className="flex-1 bg-white">
      <section className="border-b py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">{name}</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            Design system
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-700 min-[800px]:text-base">
            {summary} Documents the proposal at{" "}
            <Link href="/" className="font-medium text-primary hover:underline">
              /
            </Link>
            . The Drupal recreation at{" "}
            <Link
              href="/parity"
              className="font-medium text-primary hover:underline"
            >
              /parity
            </Link>{" "}
            keeps Ubuntu and 8px radius.
          </p>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-neutral-700 hover:text-primary"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Section id="principles" title="Principles">
        <ul className="grid gap-10 min-[800px]:grid-cols-2 min-[800px]:gap-12">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3 className="text-xl font-medium">{principle.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-7 text-neutral-700">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="color" title="Color">
        <p className="mb-8 max-w-lg text-[15px] leading-7 text-neutral-700">
          One accent. Neutrals carry structure. Logo red is reserved for the
          wordmark fill.
        </p>
        <ul className="grid gap-3 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-5">
          {colors.map((color) => (
            <li key={color.hex + color.name} className="min-w-0">
              <div
                className={cn(
                  "flex h-20 items-end rounded-md p-2.5 text-[11px] font-medium",
                  color.className,
                  color.invert ? "text-white" : "text-foreground"
                )}
              >
                {color.hex}
              </div>
              <p className="mt-2 text-sm font-medium">{color.name}</p>
              <p className="truncate text-xs text-neutral-500">{color.token}</p>
              <p className="mt-0.5 text-xs leading-5 text-neutral-700">
                {color.use}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="type" title="Type">
        <p className="mb-10 max-w-lg text-[15px] leading-7 text-neutral-700">
          Geist Sans on <code className="text-[13px]">.proposal</code>. Headings
          are medium weight with tighter tracking. Parity stays on Ubuntu.
        </p>
        <ul className="divide-y border-y">
          {type.map((style) => (
            <li
              key={style.name}
              className="grid gap-3 py-8 min-[800px]:grid-cols-[8rem_1fr]"
            >
              <p className="text-xs font-medium text-neutral-500">
                {style.name}
              </p>
              <div>
                <p className={style.className}>{style.sample}</p>
                <p className="mt-3 text-xs text-neutral-500">{style.spec}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="layout" title="Layout">
        <dl className="divide-y border-y">
          {space.map((item) => (
            <div
              key={item.name}
              className="grid gap-1 py-4 min-[800px]:grid-cols-[12rem_1fr_12rem] min-[800px]:items-baseline min-[800px]:gap-8"
            >
              <dt className="text-sm font-medium">{item.name}</dt>
              <dd className="text-[15px] text-neutral-700">{item.spec}</dd>
              <dd className="text-xs text-neutral-500 min-[800px]:text-right">
                {item.token}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 overflow-hidden rounded-md border">
          <div className="border-b bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500">
            container-site · 90% · max 1340px
          </div>
          <div className="grid grid-cols-12 gap-px bg-border">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center bg-neutral-100 text-[10px] text-neutral-500"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="components" title="Components">
        <div className="space-y-16">
          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">Logo</p>
            <div className="flex flex-wrap items-center gap-8">
              <Logo className="w-[142px] text-foreground" />
              <div className="rounded-md bg-primary px-5 py-4">
                <Logo className="w-[142px] text-white" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">Buttons</p>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-neutral-700">
              <code className="text-[13px]">ihc</code> and{" "}
              <code className="text-[13px]">ihcOutline</code> invert fill on
              hover. Proposal uses 40px height and 4px radius.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "ihc", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                Contact
              </Link>
              <Link
                href="/corporate/my-ihc-digital-gateway-your-assets"
                className={cn(
                  buttonVariants({ variant: "ihcOutline", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                Open My IHC
              </Link>
              <Link
                href="/dredging"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Text link
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Product canvas
            </p>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-neutral-700">
              Vessel in a console frame. Specs sit outside the image link so
              chips stay interactive.
            </p>
            <div className="max-w-xl">
              <ProductCanvas />
            </div>
          </div>

          <DesignSystemDemos />
        </div>
      </Section>

      <Section id="patterns" title="Patterns">
        <div className="space-y-16">
          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Market row
            </p>
            <div className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16">
              <div>
                <p className="mb-2 text-xs font-medium text-primary">
                  {market.label}
                </p>
                <h3 className="text-3xl font-medium min-[800px]:text-4xl">
                  {market.headline}
                </h3>
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
              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                <Image
                  src={market.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 900px) 45vw, 90vw"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">Quote</p>
            <blockquote className="max-w-lg">
              <p className="text-xl font-medium leading-snug min-[800px]:text-[1.35rem]">
                {quotes[0].text}
              </p>
              <footer className="mt-5">
                <Link
                  href={quotes[0].href}
                  className="text-sm text-neutral-500 hover:text-primary"
                >
                  {quotes[0].attribution}
                </Link>
              </footer>
            </blockquote>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Changelog
            </p>
            <ul className="max-w-2xl divide-y border-y">
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
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Mega item
            </p>
            <Link
              href={market.href}
              className="flex max-w-md items-start gap-3 rounded-md p-2 hover:bg-muted"
            >
              <span className="relative size-11 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={market.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-medium">{market.label}</span>
                <span className="text-xs leading-4 text-muted-foreground">
                  {market.text}
                </span>
              </span>
            </Link>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Close band
            </p>
            <div className="flex flex-col items-start justify-between gap-8 rounded-md bg-neutral-100 px-6 py-10 min-[800px]:flex-row min-[800px]:items-center min-[800px]:px-10">
              <div>
                <h3 className="text-3xl font-medium min-[800px]:text-4xl">
                  {redesignHome.close.headline}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-700">
                  {redesignHome.close.text}
                </p>
              </div>
              <Link
                href={redesignHome.close.cta.href}
                className={cn(
                  buttonVariants({ variant: "ihc", size: "lg" }),
                  "h-10 shrink-0 rounded-sm px-5 text-sm"
                )}
              >
                {redesignHome.close.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-16 min-[800px]:py-20">
        <Container>
          <Separator className="mb-8" />
          <p className="text-sm text-neutral-500">
            Tokens live in{" "}
            <code className="text-[13px] text-neutral-700">app/globals.css</code>
            . Copy lives in{" "}
            <code className="text-[13px] text-neutral-700">
              content/redesign.ts
            </code>
            . This inventory is{" "}
            <code className="text-[13px] text-neutral-700">
              content/design-system.ts
            </code>
            .
          </p>
        </Container>
      </section>
    </main>
  )
}
