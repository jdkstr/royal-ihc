import type { Metadata } from "next"

import { DesignSystemPage } from "@/components/proposal/design-system"

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Tokens, type, and components for the Royal IHC proposal: light canvas, Geist Sans, IHC red.",
}

export default function Page() {
  return <DesignSystemPage />
}
