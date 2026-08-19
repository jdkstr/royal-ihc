import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/marketing/container"
import { ArticlePage } from "@/components/proposal/article-page"
import { ListingPage } from "@/components/proposal/listing-page"
import { MarketPage } from "@/components/proposal/market-page"
import { stubTitles } from "@/content/navigation"
import {
  articlePages,
  implementedPaths,
  listingPages,
  marketPages,
  pageMeta,
} from "@/content/pages"
import { cn } from "@/lib/utils"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

function pathFromSlug(slug: string[]) {
  return `/${slug.join("/")}`
}

export function generateStaticParams() {
  const paths = new Set([...Object.keys(stubTitles), ...implementedPaths()])
  paths.delete("/parity")
  return [...paths].map((path) => ({
    slug: path.split("/").filter(Boolean),
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = pathFromSlug(slug)
  const implemented = pageMeta(path)
  if (implemented) return implemented
  const title = stubTitles[path]
  if (!title) return {}
  return { title }
}

export default async function InnerPage({ params }: PageProps) {
  const { slug } = await params
  const path = pathFromSlug(slug)

  const market = marketPages[path]
  if (market) return <MarketPage page={market} />

  const article = articlePages[path]
  if (article) return <ArticlePage page={article} />

  const listing = listingPages[path]
  if (listing) return <ListingPage page={listing} />

  const title = stubTitles[path]
  if (!title) notFound()

  return (
    <main id="main-content" className="flex-1 bg-white">
      <Container className="py-16 md:py-24">
        <p className="mb-3 text-xs font-medium text-primary">Still to migrate</p>
        <h1 className="mb-4 text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-[15px] leading-7 text-neutral-700">
          This inner page is a stub so the proposal chrome can be clicked
          through. Live copy from royalihc.com has not been migrated here yet.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ihcOutline", size: "lg" }),
            "h-10 rounded-sm px-5 text-sm"
          )}
        >
          Back to homepage
        </Link>
      </Container>
    </main>
  )
}
