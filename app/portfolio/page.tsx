import { Suspense } from 'react'
import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { portfolioPageQuery } from '@/lib/queries'
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
  let data: any = null

  try {
    data = await client.fetch(portfolioPageQuery)
  } catch (err) {
    console.warn('Sanity portfolio fetch fallback triggered:', err)
  }

  // Merge Sanity projects or use default 26-project curated catalog
  const projects: PortfolioProject[] =
    data?.projects && Array.isArray(data.projects) && data.projects.length > 0
      ? data.projects
      : DEFAULT_PORTFOLIO_PROJECTS

  // Merge Sanity industries or use default industries
  const industries: IndustryItem[] =
    data?.industries && Array.isArray(data.industries) && data.industries.length > 0
      ? data.industries
      : DEFAULT_INDUSTRIES

  const siteSettings = data?.siteSettings || null

  return (
    <>
      <Navbar settings={siteSettings} />
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
      <Footer settings={siteSettings} />
    </>
  )
}
