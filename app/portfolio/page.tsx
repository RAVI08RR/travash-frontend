import { Suspense } from 'react'
import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { caseStudiesPageQuery } from '@/lib/queries'
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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await client.fetch(caseStudiesPageQuery)
    const title = pageData?.seo?.metaTitle || 'Portfolio & Case Studies | Travash Software Solutions'
    const description =
      pageData?.seo?.metaDescription ||
      pageData?.hero?.description ||
      'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.'
    const ogImageUrl = pageData?.seo?.ogImage?.asset?.url

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'website',
        ...(ogImageUrl ? { images: [{ url: ogImageUrl }] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
      },
    }
  } catch {
    return {
      title: 'Portfolio & Case Studies | Travash Software Solutions',
      description:
        'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
    }
  }
}

export default async function PortfolioPage() {
  // Fetch from Sanity CMS with robust fallback
  let projects: PortfolioProject[] = []
  let industries: IndustryItem[] = []
  let listingPageData: any = null

  try {
    const [sanityProjects, pageData] = await Promise.all([
      getAllPortfolioProjects(),
      client.fetch(caseStudiesPageQuery).catch(() => null),
    ])
    listingPageData = pageData
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

  // Deduplicate Sanity projects by slug, prioritizing 'caseStudy' documents (managed in Sanity Studio)
  const sanitySlugMap = new Map<string, any>()
  for (const p of projects) {
    if (!p || !p.slug) continue
    const existing = sanitySlugMap.get(p.slug)
    if (!existing) {
      sanitySlugMap.set(p.slug, p)
    } else if ((p as any)._type === 'caseStudy' && (existing as any)._type !== 'caseStudy') {
      sanitySlugMap.set(p.slug, p)
    }
  }

  const defaultSlugMap = new Map(DEFAULT_PORTFOLIO_PROJECTS.map((p) => [p.slug, p]))

  // Merge projects: Sanity CMS is the primary authority so edits in Sanity Studio reflect immediately
  const mergedProjects: PortfolioProject[] = Array.from(sanitySlugMap.values()).map((sp: any) => {
    const fallback = defaultSlugMap.get(sp.slug)
    if (!fallback) return sp

    return {
      ...fallback,
      ...sp,
      // Sanity CMS fields take strict precedence
      title: sp.title || fallback.title,
      portfolioTitle: sp.portfolioTitle || sp.title || fallback.portfolioTitle || fallback.title,
      cardDescription:
        sp.cardDescription ||
        sp.excerpt ||
        sp.shortDescription ||
        fallback.cardDescription ||
        fallback.shortDescription,
      cardImage: sp.cardImage || sp.featuredImage || sp.heroImage || fallback.cardImage,
      category:
        (typeof sp.category === 'string' ? sp.category : sp.category?.title || sp.category?.name) ||
        fallback.category,
      industry:
        (typeof sp.industry === 'string' ? sp.industry : sp.industry?.name || sp.industry?.title) ||
        fallback.industry,
      projectType: sp.projectType || sp.serviceType || fallback.projectType,
      technologies:
        sp.technologies && sp.technologies.length > 0 ? sp.technologies : fallback.technologies,
      metrics: sp.metrics && sp.metrics.length > 0 ? sp.metrics : fallback.metrics,
      portfolioOrder: sp.portfolioOrder || sp.displayOrder || fallback.portfolioOrder || 100,
    }
  })

  // Add any defaults that don't exist in Sanity at all
  const existingSlugs = new Set(mergedProjects.map((p) => p.slug))
  const remainingDefaults = DEFAULT_PORTFOLIO_PROJECTS.filter((p) => !existingSlugs.has(p.slug))

  // Sort projects cleanly by defined display / portfolio order
  projects = [...mergedProjects, ...remainingDefaults].sort((a: any, b: any) => {
    const orderA = a.portfolioOrder ?? a.displayOrder ?? 100
    const orderB = b.portfolioOrder ?? b.displayOrder ?? 100
    return orderA - orderB
  })

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
        <PortfolioHero
          totalCount={projects.length}
          eyebrow={listingPageData?.hero?.eyebrow}
          heading={listingPageData?.hero?.heading}
          headingHighlight={listingPageData?.hero?.headingHighlight}
          description={listingPageData?.hero?.description}
          badges={listingPageData?.hero?.badges}
          backgroundImage={listingPageData?.hero?.backgroundImage?.asset?.url}
        />

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
