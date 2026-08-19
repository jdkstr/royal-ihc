import {
  dredgingHub,
  dredgingVessels,
  whatIsDredging,
} from "./dredging"
import { offshoreEnergyHub, pipelayingSapura } from "./offshore-energy"
import type { ArticlePageContent, MarketPageContent } from "./types"

export const marketPages: Record<string, MarketPageContent> = {
  [dredgingHub.path]: dredgingHub,
  [offshoreEnergyHub.path]: offshoreEnergyHub,
}

export const articlePages: Record<string, ArticlePageContent> = {
  [whatIsDredging.path]: whatIsDredging,
  [dredgingVessels.path]: dredgingVessels,
  [pipelayingSapura.path]: pipelayingSapura,
}

export function implementedPaths() {
  return [...Object.keys(marketPages), ...Object.keys(articlePages)]
}

export function pageMeta(path: string): { title: string; description: string } | undefined {
  const page = marketPages[path] ?? articlePages[path]
  if (!page) return undefined
  return { title: page.title, description: page.description }
}
