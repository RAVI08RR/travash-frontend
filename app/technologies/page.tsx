import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { allTechnologiesQuery, technologyCategoriesQuery, siteSettingsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import TechnologyHero from '@/components/technologies/TechnologyHero'
import TechnologyGrid from '@/components/technologies/TechnologyGrid'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Technologies & Frameworks — Web, Cloud, AI & Security | Travash',
  description:
    'Explore the modern technologies, cloud platforms, programming languages, and databases mastered by Travash Software Solutions.',
}

async function getTechnologiesData() {
  try {
    const [technologies, categories, siteSettings] = await Promise.all([
      client.fetch(allTechnologiesQuery),
      client.fetch(technologyCategoriesQuery),
      client.fetch(siteSettingsQuery),
    ])

    const categoryTitles = categories && categories.length > 0
      ? categories.map((c: { title: string }) => c.title)
      : undefined

    return {
      technologies: technologies || [],
      categories: categoryTitles,
      siteSettings,
    }
  } catch {
    return {
      technologies: [],
      categories: undefined,
      siteSettings: null,
    }
  }
}

export default async function TechnologiesPage() {
  const { technologies, categories, siteSettings } = await getTechnologiesData()

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white">
        <TechnologyHero />
        <TechnologyGrid technologies={technologies} categories={categories} />
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
