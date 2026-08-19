import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { aboutLinks } from "@/content/navigation"
import { redesignHome } from "@/content/redesign"
import { cn } from "@/lib/utils"

const itemClass =
  "flex items-start gap-3 rounded-md p-2 no-underline hover:bg-muted focus:bg-muted"

export const solutions = [
  {
    title: "Challenges",
    href: "/challenges",
    text: "The problems we solve with owners and yards.",
  },
  {
    title: "Innovations",
    href: "/innovations",
    text: "From first idea to co-created vessel.",
  },
  {
    title: "My IHC",
    href: "/corporate/my-ihc-digital-gateway-your-assets",
    text: "Manuals, parts and support for assets in service.",
  },
] as const

export const resources = [
  {
    title: "News",
    href: "/news",
    text: "Contracts, deliveries and programmes.",
  },
  {
    title: "Press",
    href: "/press",
    text: "Media resources and announcements.",
  },
  {
    title: "Careers",
    href: "/careers",
    text: "Work in multidisciplinary project teams.",
  },
  {
    title: "Design system",
    href: "/design-system",
    text: "Tokens, type, and components for the proposal.",
  },
] as const

function MegaItem({
  href,
  title,
  text,
  image,
}: {
  href: string
  title: string
  text: string
  image?: string
}) {
  return (
    <NavigationMenuLink
      className={itemClass}
      render={<Link href={href} />}
    >
      {image ? (
        <span className="relative size-11 shrink-0 overflow-hidden rounded-sm">
          <Image src={image} alt="" fill className="object-cover" sizes="44px" />
        </span>
      ) : null}
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs leading-4 text-muted-foreground">{text}</span>
      </span>
    </NavigationMenuLink>
  )
}

function ChangelogColumn() {
  const { news } = redesignHome

  return (
    <div className="flex flex-col bg-muted/50 p-3 min-[800px]:border-l">
      <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">
        Changelog
      </p>
      <ul className="space-y-0.5">
        {news.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink
              className="block rounded-md p-2 no-underline hover:bg-background"
              render={<Link href={item.href} />}
            >
              <span className="block text-[11px] text-muted-foreground">
                {item.date}
              </span>
              <span className="mt-0.5 line-clamp-2 text-sm leading-snug">
                {item.title}
              </span>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
      <NavigationMenuLink
        className="mt-1 inline-flex items-center gap-1.5 rounded-md p-2 text-sm font-medium text-primary no-underline hover:bg-background hover:underline"
        render={<Link href="/news" />}
      >
        All news
        <ArrowRight className="size-3.5" />
      </NavigationMenuLink>
    </div>
  )
}

export function ProductMega() {
  const { canvas, markets } = redesignHome

  return (
    <div className="grid w-[min(92vw,40rem)] min-[900px]:w-[52rem] min-[900px]:grid-cols-[1fr_16.5rem]">
      <div className="p-2">
        <NavigationMenuLink
          className={cn(itemClass, "mb-1 overflow-hidden p-0")}
          render={<Link href={canvas.href} />}
        >
          <span className="relative hidden h-[7.5rem] w-[11rem] shrink-0 overflow-hidden rounded-sm min-[800px]:block">
            <Image
              src={canvas.image}
              alt=""
              fill
              className="object-cover"
              sizes="176px"
            />
          </span>
          <span className="flex flex-col justify-center p-3">
            <span className="text-[11px] font-medium text-muted-foreground">
              Featured
            </span>
            <span className="mt-1 text-sm font-medium">{canvas.title}</span>
            <span className="mt-0.5 text-xs leading-4 text-muted-foreground">
              {canvas.caption} · {canvas.specs.map((spec) => spec.value).join(" · ")}
            </span>
          </span>
        </NavigationMenuLink>
        <Separator className="my-2" />
        <div className="grid gap-0.5 min-[800px]:grid-cols-2">
          {markets.map((market) => (
            <MegaItem
              key={market.href}
              href={market.href}
              title={market.label}
              text={market.text}
              image={market.image}
            />
          ))}
        </div>
      </div>
      <ChangelogColumn />
    </div>
  )
}

export function SolutionsMega() {
  return (
    <div className="grid w-[20rem] gap-0.5 p-2">
      {solutions.map((item) => (
        <MegaItem key={item.href} {...item} />
      ))}
    </div>
  )
}

export function ResourcesMega() {
  return (
    <div className="grid w-[min(92vw,36rem)] min-[800px]:grid-cols-[1fr_15rem]">
      <div className="grid gap-0.5 p-2">
        {resources.map((item) => (
          <MegaItem key={item.href} {...item} />
        ))}
      </div>
      <ChangelogColumn />
    </div>
  )
}

export function CompanyMega() {
  return (
    <div className="grid w-[16rem] gap-0.5 p-2">
      {aboutLinks.map((link) => (
        <NavigationMenuLink
          key={link.href}
          className="rounded-md px-3 py-2 text-sm no-underline"
          render={<Link href={link.href} />}
        >
          {link.label}
        </NavigationMenuLink>
      ))}
    </div>
  )
}
