import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CtaLinkProps = {
  href: string
  children: ReactNode
  className?: string
  size?: "default" | "large"
}

export function CtaLink({
  href,
  children,
  className,
  size = "default",
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-grid grid-flow-col items-baseline gap-2 text-foreground no-underline transition-colors duration-200 [transition-timing-function:var(--ease-ihc)] hover:text-primary focus-visible:text-primary",
        size === "large" ? "text-lg font-medium" : "text-sm font-medium md:text-[15px]",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        className="size-[0.85em] text-primary transition-transform duration-200 group-hover:translate-x-0.5 [transition-timing-function:var(--ease-ihc)]"
      />
    </Link>
  )
}
