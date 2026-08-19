import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { ProposalFooter } from "@/components/proposal/footer"
import { ProposalHeader } from "@/components/proposal/header"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="proposal flex min-h-full flex-1 flex-col bg-white">
      <ProposalHeader />
      <main id="main-content" className="flex-1 bg-white">
        <Container className="py-16 md:py-24">
          <h1 className="mb-4 text-[2rem] font-bold md:text-[2.875rem]">
            Page not found
          </h1>
          <p className="mb-8 max-w-xl text-neutral-700">
            This route is not part of the homepage proof of concept.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ihcOutline", size: "lg" }),
              "h-12 rounded-sm px-6 text-base"
            )}
          >
            Back to homepage
          </Link>
        </Container>
      </main>
      <ProposalFooter />
    </div>
  )
}
