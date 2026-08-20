import Image from "next/image"
import Link from "next/link"

import { SpecChip } from "@/components/proposal/spec-chip"
import { redesignHome } from "@/content/redesign"
import type { ProductCanvasData } from "@/content/types"

export function ProductCanvas({
  data = redesignHome.canvas,
  priority = false,
}: {
  data?: ProductCanvasData
  priority?: boolean
}) {
  const canvas = data

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
            priority={priority}
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-16">
          <div className="pointer-events-auto flex flex-wrap gap-2">
            {canvas.specs.map((spec) => (
              <SpecChip key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

