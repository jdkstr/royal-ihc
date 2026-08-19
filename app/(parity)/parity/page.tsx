import { HomepageSections } from "@/components/marketing/homepage-sections"
import { homepageSections } from "@/content/homepage"

export default function ParityHomePage() {
  return (
    <main id="main-content">
      <HomepageSections sections={homepageSections} />
    </main>
  )
}
