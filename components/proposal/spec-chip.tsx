"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export type SpecChipData = {
  label: string
  value: string
  title: string
  text: string
}

export function SpecChip({ spec }: { spec: SpecChipData }) {
  return (
    <HoverCard>
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
  )
}
