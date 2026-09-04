import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { aboutPageQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import AboutHero from '@/components/about/AboutHero'
import CompanyStory from '@/components/about/CompanyStory'
import CompanyTimeline from '@/components/about/CompanyTimeline'
import MissionVision from '@/components/about/MissionVision'
import ValuesGrid from '@/components/about/ValuesGrid'
import LeadershipSection from '@/components/about/LeadershipSection'
import CultureSection from '@/components/about/CultureSection'
import Stats from '@/components/sections/Stats'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch(aboutPageQuery)
    const seo = data?.aboutPage?.seo
    return {
      title: seo?.metaTitle || 'About Us — Leadership, History & Engineering Culture | Travash',
      description:
        seo?.metaDescription ||
        'Learn about Travash Software Solutions. Founded in 2005, delivering high-impact software engineering, AI acceleration, and digital experiences worldwide.',
    }
  } catch {
    return {
      title: 'About Us — Leadership, History & Engineering Culture | Travash',
      description:
        'Learn about Travash Software Solutions. Founded in 2005, delivering high-impact software engineering, AI acceleration, and digital experiences worldwide.',
    }
  }
}

async function getAboutData() {
  try {
    const data = await client.fetch(aboutPageQuery)
    return data || {}
  } catch {
    return {}
  }
}

export default async function AboutPage() {
  const { aboutPage, siteSettings } = await getAboutData()

  return (
    <>
      <Navbar settings={siteSettings} />
      <main>
        <AboutHero data={aboutPage?.hero} />
        <CompanyStory data={aboutPage?.story} />
        <CompanyTimeline timeline={aboutPage?.timeline} />
        <MissionVision data={aboutPage?.missionVision} />
        <ValuesGrid values={aboutPage?.values} />
        <LeadershipSection leadership={aboutPage?.leadership} />
        <CultureSection teams={aboutPage?.teams} culture={aboutPage?.culture} />
        <Stats />
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
