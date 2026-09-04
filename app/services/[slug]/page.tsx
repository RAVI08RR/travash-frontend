import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { serviceBySlugQuery, allServiceSlugsQuery, homePageQuery } from '@/lib/queries'
import { DEFAULT_DATA_ANALYTICS_SERVICE, type ServiceData } from '@/lib/service-data'

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceProblem from '@/components/services/ServiceProblem'
import ServiceSolutionOverview from '@/components/services/ServiceSolutionOverview'
import ServiceCapabilities from '@/components/services/ServiceCapabilities'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCaseStudies from '@/components/services/ServiceCaseStudies'
import EngagementModels from '@/components/services/EngagementModels'
import ServiceTechnologies from '@/components/services/ServiceTechnologies'
import ServiceTrust from '@/components/services/ServiceTrust'
import ServiceTestimonial from '@/components/services/ServiceTestimonial'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Dynamic SEO Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const study: ServiceData | null = await client.fetch(serviceBySlugQuery, { slug })
    const data = study || (slug === 'data-analytics-solutions' ? DEFAULT_DATA_ANALYTICS_SERVICE : null)

    if (!data) {
      return {
        title: 'Service Not Found | Travash',
      }
    }

    const title = data.seo?.metaTitle || `${data.title} | Travash Software Solutions`
    const description =
      data.seo?.metaDescription ||
      data.shortDescription ||
      'Enterprise software engineering, data architecture, and scalable technology solutions by Travash.'
    const ogImageUrl = data.seo?.ogImage?.asset?.url || (typeof data.hero?.heroImage === 'object' ? data.hero.heroImage?.asset?.url : undefined)

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
      title: 'Services | Travash Software Solutions',
    }
  }
}

// Static generation for known slugs
export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allServiceSlugsQuery)
    if (slugs && slugs.length > 0) {
      return slugs.map((item) => ({ slug: item.slug }))
    }
  } catch {
    // Fallback
  }
  return [{ slug: 'data-analytics-solutions' }]
}

async function getServiceData(slug: string) {
  try {
    const [fetchedService, pageData] = await Promise.all([
      client.fetch(serviceBySlugQuery, { slug }),
      client.fetch(homePageQuery),
    ])

    const service: ServiceData | null =
      fetchedService || (slug === 'data-analytics-solutions' ? DEFAULT_DATA_ANALYTICS_SERVICE : null)

    return {
      service,
      siteSettings: pageData?.siteSettings,
    }
  } catch {
    return {
      service: slug === 'data-analytics-solutions' ? DEFAULT_DATA_ANALYTICS_SERVICE : null,
      siteSettings: null,
    }
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { service, siteSettings } = await getServiceData(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
        {/* 1. Service Hero */}
        {service.hero && (
          <div id="overview">
            <ServiceHero hero={service.hero} serviceTitle={service.title} />
          </div>
        )}

        {/* 2. Business Problem Section */}
        {service.problemSection && (
          <div id="the-problem">
            <ServiceProblem problem={service.problemSection} />
          </div>
        )}

        {/* 3. How Travash Solves It (Solution Overview) */}
        {service.solutionOverview && (
          <div id="solution-overview">
            <ServiceSolutionOverview solution={service.solutionOverview} />
          </div>
        )}

        {/* 4. Detailed Service Capabilities ("What We Build") */}
        {service.capabilities && service.capabilities.length > 0 && (
          <ServiceCapabilities
            capabilities={service.capabilities}
            serviceTitle={service.menuTitle || service.title}
            capabilitiesImage={service.capabilitiesImage}
          />
        )}

        {/* 5. Engineering / Delivery Process */}
        {service.process && service.process.steps && service.process.steps.length > 0 && (
          <ServiceProcess process={service.process} />
        )}

        {/* 6. Relevant Case Studies */}
        {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
          <ServiceCaseStudies
            caseStudies={service.relatedCaseStudies}
            serviceTitle={service.menuTitle || service.title}
          />
        )}

        {/* 7. Flexible Engagement Models */}
        {service.engagementModels && service.engagementModels.length > 0 && (
          <EngagementModels
            models={service.engagementModels}
            backgroundImage={service.engagementBgImage}
          />
        )}

        {/* 8. Technology Ecosystem */}
        {service.technologyStack && service.technologyStack.length > 0 && (
          <ServiceTechnologies technologyStack={service.technologyStack} />
        )}

        {/* 9. Why Travash / Trust Section */}
        {service.trustSection && (
          <ServiceTrust trust={service.trustSection} />
        )}

        {/* 10. Testimonial */}
        {service.testimonial && (
          <ServiceTestimonial testimonial={service.testimonial} />
        )}

        {/* 11. Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <ServiceFAQ faqs={service.faqs} serviceTitle={service.title} />
        )}

        {/* 12. Final Call to Action & Consultation Form */}
        {service.finalCTA ? (
          <ServiceCTA cta={service.finalCTA} />
        ) : (
          <Contact />
        )}
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
