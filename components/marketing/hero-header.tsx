import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/marketing/container"
import { DoubleVideo } from "@/components/marketing/double-video"
import type { HeroSection } from "@/content/types"

export function HeroHeader({ section }: { section: HeroSection }) {
  return (
    <header className="relative bg-black text-white">
      <div className="relative min-h-[700px] max-h-[950px] h-svh">
        <DoubleVideo
          introSrc={section.introSrc}
          loopSrc={section.loopSrc}
          poster={section.poster}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-black to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 pb-16">
          <Container>
            <h1 className="max-w-4xl text-[1.8125rem] font-bold leading-[1.15] md:text-[2.5rem] min-[800px]:text-[3.1875rem]">
              {section.headline}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed md:text-lg">
              {section.text}
            </p>
            <nav
              className="mt-7 border-t border-white/80 pt-7"
              aria-labelledby="hero-markets-title"
            >
              <h2 id="hero-markets-title" className="text-base font-medium">
                {section.marketsTitle}
              </h2>
              <ul className="group/tasks mt-7">
                {section.markets.map((market) => (
                  <li key={market.href}>
                    <Link
                      href={market.href}
                      className="flex items-center gap-3 py-3 text-[1.4rem] leading-none text-white no-underline transition-opacity duration-200 ease-out first:pt-0 last:pb-0 hover:opacity-100 group-hover/tasks:opacity-50 group-hover/tasks:hover:opacity-100 group-focus-within/tasks:opacity-50 group-focus-within/tasks:focus:opacity-100 md:text-[1.625rem]"
                    >
                      <ArrowRight aria-hidden className="size-5 shrink-0" />
                      {market.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  )
}
