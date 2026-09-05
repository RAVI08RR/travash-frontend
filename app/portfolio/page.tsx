import { Suspense } from 'react'
import type { Metadata } from 'next'
import {
  getAllPortfolioProjects,
  getPortfolioIndustries,
} from '@/lib/portfolioQueries'
import {
  DEFAULT_PORTFOLIO_PROJECTS,
  DEFAULT_INDUSTRIES,
  type PortfolioProject,
  type IndustryItem,
} from '@/lib/portfolio-data'

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'

import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioListingClient from '@/components/portfolio/PortfolioListingClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Travash Software Solutions',
  description:
    'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
  openGraph: {
    title: 'Portfolio & Case Studies | Travash Software Solutions',
    description:
      'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
    type: 'website',
  },
}

export default async function PortfolioPage() {
  // Fetch from Sanity CMS with robust fallback
  let projects: PortfolioProject[] = []
  let industries: IndustryItem[] = []

  try {
    const sanityProjects = await getAllPortfolioProjects()
    if (sanityProjects && Array.isArray(sanityProjects) && sanityProjects.length > 0) {
      const excludedSlugs = new Set([
        'wp-json',
        'home',
        'terms-and-condition',
        'technologies',
        'ai-data-engineering',
        'data-analytics-solutions',
        'software-engineering',
        'dedicated-talent-and-teams',
        'quality-assurance-testing',
        'enterprise-applications',
        'digital-experiences-web-mobile',
        'cloud-devops',
        'staff-augmentation',
      ])
      projects = sanityProjects.filter((p: any) => p && p.slug && !excludedSlugs.has(p.slug))
    }
  } catch (err) {
    console.warn('Sanity portfolio projects fetch fallback triggered:', err)
  }

  // Prioritize verified case studies from DEFAULT_PORTFOLIO_PROJECTS at the top
  const defaultSlugMap = new Map(DEFAULT_PORTFOLIO_PROJECTS.map((p) => [p.slug, p]))
  const remainingSanityProjects = projects.filter((p: any) => !defaultSlugMap.has(p.slug))
  projects = [...DEFAULT_PORTFOLIO_PROJECTS, ...remainingSanityProjects]

  try {
    const sanityIndustries = await getPortfolioIndustries()
    if (sanityIndustries && Array.isArray(sanityIndustries) && sanityIndustries.length > 0) {
      industries = sanityIndustries
        .filter((ind: any) => {
          const name = ind.title || ind.name || ''
          return name && !/^[A-Za-z0-9_-]{18,}$/.test(name)
        })
        .map((ind: any) => ({
          name: ind.title || ind.name,
          slug: ind.slug,
          description: ind.description,
          projectCount: ind.projectCount || 0,
        }))
    }
  } catch (err) {
    console.warn('Sanity portfolio industries fetch fallback triggered:', err)
  }

  if (industries.length === 0) {
    industries = DEFAULT_INDUSTRIES
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        {/* Hero Section */}
        <PortfolioHero totalCount={projects.length} />

        {/* Dynamic Client Filter & Grid Section */}
        <Suspense
          fallback={
            <div className="py-24 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#02487D] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm font-medium text-[#64748B]">Loading case studies...</p>
            </div>
          }
        >
          <PortfolioListingClient
            initialProjects={projects}
            industries={industries}
          />
        </Suspense>

        {/* Proven Scale Stats */}
        <Stats />

        {/* Global Testimonials */}
        <Testimonials />

        {/* Contact & Consultation Section */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
