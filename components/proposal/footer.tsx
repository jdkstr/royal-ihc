import Link from "next/link"

import { Container } from "@/components/marketing/container"
import { Logo } from "@/components/marketing/logo"
import { NewsletterForm } from "@/components/marketing/newsletter-form"
import {
  aboutLinks,
  legalNav,
  markets,
  socialNav,
} from "@/content/navigation"

export function ProposalFooter() {
  return (
    <footer role="contentinfo" className="mt-auto border-t bg-white">
      <Container className="py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex text-foreground">
            <span className="sr-only">Royal IHC</span>
            <Logo className="w-[142px]" />
          </Link>
        </div>
        <div className="grid gap-8 min-[800px]:grid-cols-4">
          <div>
            <h2 className="mb-3 text-xs font-medium text-neutral-500">Product</h2>
            <ul className="space-y-1.5">
              {markets.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-neutral-500">Company</h2>
            <ul className="space-y-1.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-neutral-500">Follow</h2>
            <ul className="space-y-1.5">
              {socialNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-1.5">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-700 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="[&_p]:text-base [&_form]:mt-3">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t pt-5 text-sm text-neutral-500 min-[800px]:flex-row min-[800px]:items-center min-[800px]:justify-between">
          <p>© 2026 Royal IHC</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/design-system" className="hover:text-primary">
              Design system
            </Link>
            <Link href="/parity" className="hover:text-primary">
              View current website
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
