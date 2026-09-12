import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { aboutPageQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import AboutHero from '@/components/about/AboutHero'
import LeadershipSection from '@/components/about/LeadershipSection'
import CompanyTimeline from '@/components/about/CompanyTimeline'
import CompanyStory from '@/components/about/CompanyStory'
import MissionVision from '@/components/about/MissionVision'
import ValuesGrid from '@/components/about/ValuesGrid'
import CultureSection from '@/components/about/CultureSection'
import TeamShowcase from '@/components/about/TeamShowcase'
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
      <main className="bg-white">
        {/* 1. Hero Section */}
        <AboutHero data={aboutPage?.hero} />

        {/* 2. Executive Leadership: Guiding Vision & Engineering Rigor (Immediately After Hero) */}
        <LeadershipSection leadership={aboutPage?.leadership} />

        {/* 3. Company Timeline: Our Journey of Continuous Innovation (After Leadership) */}
        <CompanyTimeline timeline={aboutPage?.timeline} />

        {/* 4. Story & Origin */}
        <CompanyStory data={aboutPage?.story} />

        {/* 5. Mission & Vision */}
        <MissionVision data={aboutPage?.missionVision} />

        {/* 6. Core Values */}
        <ValuesGrid values={aboutPage?.values} />

        {/* 7. Culture Pillars */}
        <CultureSection teams={aboutPage?.teams} culture={aboutPage?.culture} />

        {/* 8. Dedicated Team Showcase Card (At the Bottom) */}
        <TeamShowcase imageUrl={aboutPage?.hero?.heroImage?.asset?.url} />

        {/* 9. Key Performance Stats & Contact */}
        <Stats />
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
