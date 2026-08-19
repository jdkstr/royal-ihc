import Link from "next/link"

import { Container } from "@/components/marketing/container"
import { Logo } from "@/components/marketing/logo"
import { NewsletterForm } from "@/components/marketing/newsletter-form"
import { footerColumns, legalNav, socialNav } from "@/content/navigation"

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-10 bg-neutral-100 py-16">
      <Container>
        <div className="mb-10">
          <Link href="/" className="inline-flex text-foreground">
            <span className="sr-only">Royal IHC</span>
            <Logo className="w-[180px]" />
          </Link>
        </div>
        <div className="grid gap-10 min-[800px]:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-2 text-[17px] font-medium">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] leading-7 text-foreground no-underline hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-neutral-300 pt-8 min-[800px]:flex-row min-[800px]:items-center min-[800px]:justify-between">
          <p className="text-sm text-neutral-700">© 2026 Royal IHC</p>
          <ul className="flex flex-wrap gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-700 no-underline hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-4">
            {socialNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-neutral-700 no-underline hover:text-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
