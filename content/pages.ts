import {
  dredgingHub,
  dredgingVessels,
  whatIsDredging,
} from "./dredging"
import {
  additionalEquipment,
  climateFloodingDrought,
  cutterSuctionDredgers,
  dataHeartDigital,
  dredgingCases,
  dredgingChallenges,
  dredgingEquipment,
  dredgingInnovations,
  dredgingServices,
  economicDevelopmentTrade,
  grabHopperDredgers,
  historyDredging,
  integratedAutomation,
  projectTypes,
  splitHopper,
  trailingSuctionHopperDredgers,
  worldsMostPowerfulCsd,
} from "./dredging-detail"
import {
  offshoreEnergyHub,
  offshoreEquipment,
  offshoreServices,
  offshoreVessels,
  pipelayingSapura,
} from "./offshore-energy"
import {
  miningEquipment,
  miningHub,
  miningServices,
  miningVessels,
} from "./mining"
import {
  defenceEquipment,
  defenceHub,
  defenceServices,
  defenceVessels,
} from "./defence"
import {
  annualReport,
  aboutUs,
  corporateSustainability,
  globalPresence,
  sheq,
  whatWeDo,
} from "./about"
import {
  careers,
  contact,
  disclaimer,
  myIhc,
  privacyPolicy,
  search,
} from "./corporate"
import { challenges, innovations } from "./company-topics"
import { eventsListing, newsListing, pressListing } from "./newsroom"
import type {
  ArticlePageContent,
  ListingPageContent,
  MarketPageContent,
} from "./types"

export const marketPages: Record<string, MarketPageContent> = {
  [dredgingHub.path]: dredgingHub,
  [offshoreEnergyHub.path]: offshoreEnergyHub,
  [miningHub.path]: miningHub,
  [defenceHub.path]: defenceHub,
}

export const articlePages: Record<string, ArticlePageContent> = {
  // Dredging
  [whatIsDredging.path]: whatIsDredging,
  [dredgingVessels.path]: dredgingVessels,
  [dredgingEquipment.path]: dredgingEquipment,
  [dredgingServices.path]: dredgingServices,
  [integratedAutomation.path]: integratedAutomation,
  [historyDredging.path]: historyDredging,
  [projectTypes.path]: projectTypes,
  [economicDevelopmentTrade.path]: economicDevelopmentTrade,
  [climateFloodingDrought.path]: climateFloodingDrought,
  [dataHeartDigital.path]: dataHeartDigital,
  [cutterSuctionDredgers.path]: cutterSuctionDredgers,
  [trailingSuctionHopperDredgers.path]: trailingSuctionHopperDredgers,
  [splitHopper.path]: splitHopper,
  [grabHopperDredgers.path]: grabHopperDredgers,
  [additionalEquipment.path]: additionalEquipment,
  [worldsMostPowerfulCsd.path]: worldsMostPowerfulCsd,
  // Offshore energy
  [pipelayingSapura.path]: pipelayingSapura,
  [offshoreVessels.path]: offshoreVessels,
  [offshoreEquipment.path]: offshoreEquipment,
  [offshoreServices.path]: offshoreServices,
  // Mining
  [miningEquipment.path]: miningEquipment,
  [miningServices.path]: miningServices,
  [miningVessels.path]: miningVessels,
  // Defence
  [defenceVessels.path]: defenceVessels,
  [defenceEquipment.path]: defenceEquipment,
  [defenceServices.path]: defenceServices,
  // About
  [aboutUs.path]: aboutUs,
  [whatWeDo.path]: whatWeDo,
  [globalPresence.path]: globalPresence,
  [corporateSustainability.path]: corporateSustainability,
  [sheq.path]: sheq,
  [annualReport.path]: annualReport,
  // Corporate / utility
  [contact.path]: contact,
  [careers.path]: careers,
  [myIhc.path]: myIhc,
  [privacyPolicy.path]: privacyPolicy,
  [disclaimer.path]: disclaimer,
  [search.path]: search,
  // Company topics
  [challenges.path]: challenges,
}

export const listingPages: Record<string, ListingPageContent> = {
  [newsListing.path]: newsListing,
  [pressListing.path]: pressListing,
  [eventsListing.path]: eventsListing,
  [innovations.path]: innovations,
  [dredgingInnovations.path]: dredgingInnovations,
  [dredgingChallenges.path]: dredgingChallenges,
  [dredgingCases.path]: dredgingCases,
}

export function implementedPaths() {
  return [
    ...Object.keys(marketPages),
    ...Object.keys(articlePages),
    ...Object.keys(listingPages),
  ]
}

export function pageMeta(path: string): { title: string; description: string } | undefined {
  const page = marketPages[path] ?? articlePages[path] ?? listingPages[path]
  if (!page) return undefined
  return { title: page.title, description: page.description }
}
