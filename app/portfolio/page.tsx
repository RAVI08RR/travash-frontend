import { Suspense } from 'react'
import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { caseStudiesPageQuery } from '@/lib/queries'
import {
  getAllPortfolioProjects,
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
    const title = pageData?.seo?.metaTitle || 'Our Work & Case Studies | Travash Software Solutions'
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
      title: 'Our Work & Case Studies | Travash Software Solutions',
      description:
        'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
    }
  }
}

export default async function PortfolioPage() {
  let sanityProjects: any[] = []
  let listingPageData: any = null
  let testimonialsData: any = null

  try {
    const testimonialsQuery = `coalesce(*[_id == "testimonialSection"][0], *[_type == "testimonialSection"][0]) {
      heading,
      "testimonials": testimonials[] {
        "quote": coalesce(quote, @->quote),
        "authorName": coalesce(authorName, @->clientName, @->authorName, @->name),
        "authorTitle": coalesce(authorTitle, select(defined(@->designation) && defined(@->company) => @->designation + " · " + @->company, @->designation), @->authorTitle, @->role),
        "authorCompany": coalesce(authorCompany, @->company),
        "authorPhoto": coalesce(authorPhoto.asset->url, photo.asset->url, @->authorPhoto.asset->url, @->photo.asset->url)
      }
    }`

    const [fetchedSanity, pageData, fetchedTestimonials] = await Promise.all([
      getAllPortfolioProjects(),
      client.fetch(caseStudiesPageQuery).catch(() => null),
      client.fetch(testimonialsQuery).catch(() => null),
    ])
    listingPageData = pageData
    const pageSelectedTestimonials = pageData?.testimonialsSection?.testimonials
    if (Array.isArray(pageSelectedTestimonials) && pageSelectedTestimonials.length > 0) {
      testimonialsData = {
        heading: pageData?.testimonialsSection?.heading || 'Trusted by Businesses Worldwide',
        testimonials: pageSelectedTestimonials,
      }
    } else {
      testimonialsData = fetchedTestimonials
    }
    if (fetchedSanity && Array.isArray(fetchedSanity)) {
      sanityProjects = fetchedSanity
    }
  } catch (err) {
    console.warn('Sanity portfolio projects fetch fallback triggered:', err)
  }

  // ---------------------------------------------------------------------------
  // DYNAMIC PORTFOLIO LISTING
  // ---------------------------------------------------------------------------
  // SOURCE 1 — Sanity (fully dynamic):
  //   Any case study / portfolio project with portfolioVisible = true in Sanity
  //   is automatically shown here. No code change needed when you add new ones.
  //   The GROQ query already filters by `coalesce(portfolioVisible, true) == true`.
  //
  // SOURCE 2 — Fallback (static safety net):
  //   Projects that are NOT yet in Sanity fall back to DEFAULT_PORTFOLIO_PROJECTS.
  //   Only slugs in FALLBACK_ONLY_SLUGS will be shown from the local fallback list,
  //   preventing unfinished placeholder entries from appearing publicly.
  //   When you add a project to Sanity and enable it there, you can remove its slug
  //   from FALLBACK_ONLY_SLUGS — Sanity takes over automatically.
  // ---------------------------------------------------------------------------

  // Safety list: slugs that should be shown from the LOCAL fallback data only when
  // they have NO matching entry in Sanity. Once a project is live in Sanity with
  // portfolioVisible=true, it is served from SOURCE 1 and this list is ignored for it.
  const FALLBACK_ONLY_SLUGS = new Set([
    'pekt',
    'satyapaan',
    'direct-owners',
    'ugo',
    'indispare',
    'i4c-bank-portal',
    'i4c',
    'dovehouse',
    'skipr',
    'darpan',
    'i-verify',
    'dine-desk',
    'dinedesk',
    'spencer',
    'ledray',
    'gemba',
    'crestsure',
  ])

  // --- Build projects from Sanity (SOURCE 1) ---
  const projectsFromSanity: PortfolioProject[] = sanityProjects
    .filter((sp: any) => sp?.slug)
    .map((sp: any) => {
      const slugKey = String(sp.slug).toLowerCase().trim()
      // Merge with local fallback data for fields Sanity may not store (category, projectType, etc.)
      const fallback = DEFAULT_PORTFOLIO_PROJECTS.find((p) => {
        const ps = p.slug.toLowerCase().trim()
        return (
          ps === slugKey ||
          (ps === 'i4c' && slugKey === 'i4c-bank-portal') ||
          (ps === 'dinedesk' && slugKey === 'dine-desk')
        )
      }) || ({} as PortfolioProject)

      return {
        ...fallback,
        ...sp,
        title: sp.title || fallback.title,
        portfolioTitle: sp.portfolioTitle || fallback.portfolioTitle || sp.title,
        slug: sp.slug,
        cardDescription:
          sp.cardDescription ||
          sp.excerpt ||
          sp.shortDescription ||
          fallback.cardDescription ||
          fallback.shortDescription,
        cardImage: sp.cardImage || sp.featuredImage || sp.heroImage || fallback.cardImage,
        category: fallback.category || sp.category,
        industry: fallback.industry || sp.industryName || sp.industry,
        projectType: fallback.projectType,
        projectTypes:
          Array.isArray(sp.projectTypes) && sp.projectTypes.length > 0
            ? sp.projectTypes
            : fallback.projectTypes,
        technologies:
          sp.technologies && sp.technologies.length > 0 ? sp.technologies : fallback.technologies,
        metrics: sp.metrics && sp.metrics.length > 0 ? sp.metrics : fallback.metrics,
        portfolioOrder: sp.displayOrder || sp.portfolioOrder || fallback.portfolioOrder || 100,
      } as PortfolioProject
    })

  // Track which slugs are already covered by Sanity so we don't duplicate
  const sanityCoveredSlugs = new Set(
    projectsFromSanity.map((p) => p.slug.toLowerCase().trim())
  )

  // --- Build fallback-only projects (SOURCE 2) ---
  const projectsFromFallback: PortfolioProject[] = DEFAULT_PORTFOLIO_PROJECTS
    .filter((p) => {
      const slug = p.slug.toLowerCase().trim()
      // Skip if already served from Sanity
      if (sanityCoveredSlugs.has(slug)) return false
      // Only show slugs in the approved fallback safety list
      return FALLBACK_ONLY_SLUGS.has(slug)
    })
    .map((p) => ({ ...p, portfolioOrder: p.portfolioOrder || 100 }))

  // --- Merge and sort ---
  const projects: PortfolioProject[] = [...projectsFromSanity, ...projectsFromFallback]
    .sort((a, b) => (a.portfolioOrder || 100) - (b.portfolioOrder || 100))

  const industries: IndustryItem[] = DEFAULT_INDUSTRIES

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
        />

        {/* Dynamic Client Filter & Grid Section */}
        <div id="projects-grid">
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
        </div>


        {/* Proven Scale Stats */}
        <Stats />

        {/* Global Testimonials */}
        <Testimonials data={testimonialsData} />

        {/* Contact & Consultation Section */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
