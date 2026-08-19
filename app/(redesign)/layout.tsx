import type { ReactNode } from "react"

import { ProposalFooter } from "@/components/proposal/footer"
import { ProposalHeader } from "@/components/proposal/header"

export default function RedesignLayout({ children }: { children: ReactNode }) {
  return (
    <div className="proposal flex min-h-full flex-1 flex-col bg-white">
      <ProposalHeader />
      {children}
      <ProposalFooter />
    </div>
  )
}
