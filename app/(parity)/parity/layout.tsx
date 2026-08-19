import type { ReactNode } from "react"

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"

export default function ParityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-100">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
