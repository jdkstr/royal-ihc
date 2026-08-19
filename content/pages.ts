import {
  dredgingHub,
  dredgingVessels,
  whatIsDredging,
} from "./dredging"
import type { ArticlePageContent, MarketPageContent } from "./types"

export const marketPages: Record<string, MarketPageContent> = {
  [dredgingHub.path]: dredgingHub,
}

export const articlePages: Record<string, ArticlePageContent> = {
  [whatIsDredging.path]: whatIsDredging,
  [dredgingVessels.path]: dredgingVessels,
}

export function implementedPaths() {
  return [...Object.keys(marketPages), ...Object.keys(articlePages)]
}

export function pageMeta(path: string): { title: string; description: string } | undefined {
  const page = marketPages[path] ?? articlePages[path]
  if (!page) return undefined
  return { title: page.title, description: page.description }
}
