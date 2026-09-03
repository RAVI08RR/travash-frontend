import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { caseStudyBySlugQuery, allCaseStudySlugsQuery, homePageQuery } from '@/lib/queries'
import { DEFAULT_SATYAPAAN_DATA, type CaseStudyData } from '@/lib/case-study-data'

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'

import CaseStudyHero from '@/components/case-study/CaseStudyHero'
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics'
import CaseStudyContentSection from '@/components/case-study/CaseStudyContentSection'
import ProjectVisual from '@/components/case-study/ProjectVisual'
import ComplexityGrid from '@/components/case-study/ComplexityGrid'
import ApproachSteps from '@/components/case-study/ApproachSteps'
import SolutionGrid from '@/components/case-study/SolutionGrid'
import ArchitectureSection from '@/components/case-study/ArchitectureSection'
import TechnologyStack from '@/components/case-study/TechnologyStack'
import BeforeAfterComparison from '@/components/case-study/BeforeAfterComparison'
import ClientPerspective from '@/components/case-study/ClientPerspective'
import WhyItMatters from '@/components/case-study/WhyItMatters'
import CaseStudyNextStep from '@/components/case-study/CaseStudyNextStep'

import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const study: CaseStudyData | null = await client.fetch(caseStudyBySlugQuery, { slug })
    const data = study || (slug === 'satyapaan' ? DEFAULT_SATYAPAAN_DATA : null)

    if (!data) {
      return {
        title: 'Case Study Not Found | Travash',
      }
    }

    const title = data.seo?.metaTitle || `${data.title} | Travash Software Solutions`
    const description =
      data.seo?.metaDescription ||
      data.shortDescription ||
      'Explore enterprise technology solutions and case studies by Travash.'
    const ogImageUrl = data.seo?.ogImage?.asset?.url || data.heroImage?.asset?.url

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
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
      title: 'Case Study | Travash Software Solutions',
    }
  }
}

// Generate static params for prerendering known slugs
export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allCaseStudySlugsQuery)
    if (slugs && slugs.length > 0) {
      return slugs.map((item) => ({ slug: item.slug }))
    }
  } catch {
    // Fallback
  }
  return [{ slug: 'satyapaan' }]
}

async function getCaseStudyData(slug: string) {
  try {
    const [study, pageData] = await Promise.all([
      client.fetch(caseStudyBySlugQuery, { slug }),
      client.fetch(homePageQuery),
    ])

    const caseStudy: CaseStudyData | null =
      study || (slug === 'satyapaan' ? DEFAULT_SATYAPAAN_DATA : null)

    return {
      caseStudy,
      siteSettings: pageData?.siteSettings,
    }
  } catch {
    return {
      caseStudy: slug === 'satyapaan' ? DEFAULT_SATYAPAAN_DATA : null,
      siteSettings: null,
    }
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { caseStudy, siteSettings } = await getCaseStudyData(slug)

  if (!caseStudy) {
    notFound()
  }

  // Feature Image resolution
  const featureImageSrc =
    typeof caseStudy.featureImage === 'string'
      ? caseStudy.featureImage
      : caseStudy.featureImage?.asset?.url || '/home-img/satyapaan-min 2.png'

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
        {/* 1-3. Hero Section with Project Metadata & Badge */}
        <CaseStudyHero data={caseStudy} />

        {/* 4. Key Metrics Grid */}
        <CaseStudyMetrics data={caseStudy} />

        {/* 5. Executive Summary */}
        {caseStudy.executiveSummary && (
          <CaseStudyContentSection
            id="executive-summary"
            eyebrow="Overview"
            title={caseStudy.executiveSummary.title || 'Executive Summary'}
            subtitle={caseStudy.executiveSummary.subtitle}
            variant="white"
          >
            <div className="flex flex-col gap-4 text-gray-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
              {caseStudy.executiveSummary.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </CaseStudyContentSection>
        )}

        {/* 6-7. The Challenge */}
        {caseStudy.challenge && (
          <CaseStudyContentSection
            id="the-challenge"
            eyebrow="The Problem"
            title={caseStudy.challenge.title || 'The Challenge'}
            subtitle={caseStudy.challenge.subtitle}
            variant="gray"
          >
            {caseStudy.challenge.content && (
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-2">
                {caseStudy.challenge.content}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {caseStudy.challenge.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-2xl p-5 flex items-start gap-3.5 shadow-xs transition-all hover:border-[#E53E3E]/40"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E53E3E] border border-[#FED7D7] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-800 font-medium leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </CaseStudyContentSection>
        )}

        {/* 8. Large Visual / Project Visual */}
        <ProjectVisual
          imageSrc={featureImageSrc}
          alt={caseStudy.title}
          caption="Satyaapan Centralized Identity Verification Portal — Built by Travash Software Solutions"
        />

        {/* 9-10. The Complexity */}
        {caseStudy.complexity && (
          <CaseStudyContentSection
            id="complexity"
            eyebrow="Operational Scope"
            title={caseStudy.complexity.title || 'The Complexity'}
            subtitle={caseStudy.complexity.intro}
            variant="white"
          >
            <ComplexityGrid items={caseStudy.complexity.items} />
          </CaseStudyContentSection>
        )}

        {/* 11-12. Travash Approach */}
        {caseStudy.approach && (
          <CaseStudyContentSection
            id="approach"
            eyebrow="Methodology"
            title={caseStudy.approach.title || 'Travash Approach'}
            subtitle={caseStudy.approach.intro}
            variant="gray"
          >
            <ApproachSteps steps={caseStudy.approach.steps} />
          </CaseStudyContentSection>
        )}

        {/* 13-14. The Solution */}
        {caseStudy.solution && (
          <CaseStudyContentSection
            id="solution"
            eyebrow="Platform Capabilities"
            title={caseStudy.solution.title || 'The Solution'}
            subtitle={caseStudy.solution.intro}
            variant="blue"
          >
            <SolutionGrid items={caseStudy.solution.items} />
          </CaseStudyContentSection>
        )}

        {/* 15. Solution Architecture */}
        <ArchitectureSection
          title={caseStudy.solutionArchitecture?.title}
          intro={caseStudy.solutionArchitecture?.intro}
          imageSrc={caseStudy.solutionArchitecture?.image?.asset?.url}
          caption={caseStudy.solutionArchitecture?.caption}
        />

        {/* 16. Enterprise Technology Stack */}
        {caseStudy.technologyStack && caseStudy.technologyStack.length > 0 && (
          <CaseStudyContentSection
            id="technology-stack"
            eyebrow="Technical Infrastructure"
            title="Enterprise Technology Stack"
            subtitle="To deliver a robust custom software solution capable of processing millions of records securely, we utilised a highly resilient tech stack."
            variant="white"
          >
            <TechnologyStack items={caseStudy.technologyStack} />
          </CaseStudyContentSection>
        )}

        {/* 17. The Impact */}
        {caseStudy.impact && (
          <CaseStudyContentSection
            id="impact"
            eyebrow="Key Results"
            title={caseStudy.impact.title || 'The Impact'}
            subtitle={caseStudy.impact.subtitle}
            variant="gray"
          >
            {caseStudy.impact.content && (
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-2">
                {caseStudy.impact.content}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {caseStudy.impact.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-2xl p-5 flex items-start gap-3.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EEFBF3] text-[#16A34A] border border-[#C6F5D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-800 font-semibold leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </CaseStudyContentSection>
        )}

        {/* 18. Before vs. After Comparison */}
        {caseStudy.beforeAfter && (
          <BeforeAfterComparison
            title={caseStudy.beforeAfter.title}
            subtitle={caseStudy.beforeAfter.subtitle}
            beforeTitle={caseStudy.beforeAfter.beforeTitle}
            afterTitle={caseStudy.beforeAfter.afterTitle}
            before={caseStudy.beforeAfter.before}
            after={caseStudy.beforeAfter.after}
          />
        )}

        {/* 19. Client Perspective / Testimonial */}
        {caseStudy.testimonial && (
          <ClientPerspective data={caseStudy.testimonial} />
        )}

        {/* 20. Why This Matters */}
        {caseStudy.whyItMatters && (
          <WhyItMatters
            title={caseStudy.whyItMatters.title}
            subtitle={caseStudy.whyItMatters.subtitle}
            items={caseStudy.whyItMatters.items}
          />
        )}

        {/* 21. The Next Step CTA */}
        {caseStudy.nextStep && (
          <CaseStudyNextStep
            heading={caseStudy.nextStep.heading}
            content={caseStudy.nextStep.content}
            primaryCTA={caseStudy.nextStep.primaryCTA}
            secondaryCTA={caseStudy.nextStep.secondaryCTA}
          />
        )}

        {/* 22-23. Contact / Lead Generation Section */}
        <Contact
          data={{
            heading: 'Ready to Automate & Solve Bottlenecks?',
            subheading:
              'Discuss your public safety initiative, custom workflow automation, or enterprise software modernization with our senior engineers.',
            submitLabel: 'Get a Free Consultation',
          }}
        />
      </main>

      {/* 24. Existing Global Footer */}
      <Footer settings={siteSettings} />
    </>
  )
}
