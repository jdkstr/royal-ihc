"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SpecChip } from "@/components/proposal/spec-chip"
import { redesignHome } from "@/content/redesign"

export function DesignSystemDemos() {
  const specs = redesignHome.canvas.specs

  return (
    <div className="space-y-10">
      <div>
        <p className="mb-3 text-xs font-medium text-neutral-500">Spec chips</p>
        <p className="mb-4 max-w-lg text-[15px] leading-7 text-neutral-700">
          Hover a chip. Open delay is 0ms so the canvas feels like a product,
          not a tooltip.
        </p>
        <div className="relative overflow-hidden rounded-md bg-neutral-900 p-6">
          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <SpecChip key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-medium text-neutral-500">Accordion</p>
        <Accordion className="max-w-md rounded-md border px-3">
          <AccordionItem value="product">
            <AccordionTrigger className="rounded-md text-[15px] hover:no-underline">
              Product
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-700">
              Markets as a list: Dredging, Offshore energy, Mining, Defence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="resources">
            <AccordionTrigger className="rounded-md text-[15px] hover:no-underline">
              Resources
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-700">
              News, press, careers, and this design system.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="max-w-md">
        <p className="mb-3 text-xs font-medium text-neutral-500">Input</p>
        <div className="space-y-1.5">
          <Label htmlFor="ds-email">Email</Label>
          <Input
            id="ds-email"
            type="email"
            placeholder="name@company.com"
            className="h-10 rounded-sm bg-white"
          />
        </div>
        <Button type="button" variant="ihc" className="mt-4 h-10 rounded-sm px-5">
          Submit
        </Button>
      </div>
    </div>
  )
}
