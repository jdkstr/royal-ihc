"use client"

import Image from "next/image"
import Link from "next/link"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { redesignHome } from "@/content/redesign"

export function ProductCanvas() {
  const { canvas } = redesignHome

  return (
    <div className="overflow-hidden rounded-md border bg-white">
      <Link
        href={canvas.href}
        className="flex items-center gap-2 border-b bg-neutral-100 px-3 py-2"
      >
        <span className="size-2 rounded-full bg-neutral-300" />
        <span className="size-2 rounded-full bg-neutral-300" />
        <span className="size-2 rounded-full bg-neutral-300" />
        <span className="ml-2 truncate text-xs text-neutral-500">
          {canvas.title} · {canvas.caption}
        </span>
      </Link>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Link href={canvas.href} className="group absolute inset-0 block">
          <Image
            src={canvas.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 900px) 48vw, 90vw"
            priority
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-16">
          <div className="pointer-events-auto flex flex-wrap gap-2">
            {canvas.specs.map((spec) => (
              <HoverCard key={spec.label}>
                <HoverCardTrigger
                  delay={0}
                  closeDelay={100}
                  render={
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center rounded-sm bg-white/95 px-2.5 py-1 text-xs font-medium text-foreground outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  }
                >
                  <span className="text-neutral-500">{spec.label}</span>
                  <span className="ml-1.5">{spec.value}</span>
                </HoverCardTrigger>
                <HoverCardContent
                  side="top"
                  sideOffset={6}
                  align="start"
                  alignOffset={0}
                  className="w-64 rounded-md p-3 duration-75 data-open:zoom-in-100 data-closed:zoom-out-100"
                >
                  <p className="text-[11px] font-medium text-muted-foreground">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{spec.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {spec.text}
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
