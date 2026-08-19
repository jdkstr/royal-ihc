import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { stubTitles } from "@/content/navigation"
import { cn } from "@/lib/utils"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

function pathFromSlug(slug: string[]) {
  return `/${slug.join("/")}`
}

export function generateStaticParams() {
  return Object.keys(stubTitles)
    .filter((path) => path !== "/parity")
    .map((path) => ({
      slug: path.split("/").filter(Boolean),
    }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = pathFromSlug(slug)
  const title = stubTitles[path]
  if (!title) return {}
  return { title }
}

export default async function StubPage({ params }: PageProps) {
  const { slug } = await params
  const path = pathFromSlug(slug)
  const title = stubTitles[path]
  if (!title) notFound()

  return (
    <main id="main-content" className="flex-1 bg-white">
      <Container className="py-16 md:py-24">
        <p className="mb-3 text-sm font-medium text-primary">Proof of concept</p>
        <h1 className="mb-4 text-[2rem] font-bold leading-tight md:text-[2.875rem]">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-[1.05rem] leading-7 text-neutral-700 md:text-[1.1875rem]">
          This inner page is a stub so the proposal chrome can be clicked
          through. The homepage is the redesign; the current-site recreation
          lives at /parity.
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
  )
}
