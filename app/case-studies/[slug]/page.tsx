import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { caseStudyBySlugQuery, allCaseStudySlugsQuery, homePageQuery } from '@/lib/queries'
import { portfolioProjectBySlugQuery } from '@/lib/portfolioQueries'
import {
  DEFAULT_SATYAPAAN_DATA,
  FALLBACK_CASE_STUDIES,
  type CaseStudyData,
} from '@/lib/case-study-data'
import { DEFAULT_PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

import CaseStudyHero from '@/components/case-study/CaseStudyHero'
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics'
import ExecutiveSummary from '@/components/case-study/ExecutiveSummary'
import TheComplexity from '@/components/case-study/TheComplexity'
import TheChallenge from '@/components/case-study/TheChallenge'
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
import CaseStudyContact from '@/components/case-study/CaseStudyContact'
import { cleanCaseStudyContent, sanitizeScrapedText } from '@/lib/case-study-cleaner'
import { getSanityImageUrl } from '@/lib/sanity.image'

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
    const data = study || FALLBACK_CASE_STUDIES[slug] || null

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
  return [
    { slug: 'satyapaan' },
    { slug: 'pixl' },
    { slug: 'ai-voice-agent' },
    { slug: 'direct-owners' },
    { slug: 'ugo' },
    { slug: 'indispare' },
    { slug: 'i4c-bank-portal' },
    { slug: 'i4c' },
    { slug: 'dovehouse' },
    { slug: 'dovehouse-capital' },
    { slug: 'pekt' },
    { slug: 'skipr' },
    { slug: 'darpan' },
    { slug: 'i-verify' },
  ]
}

async function getCaseStudyData(slug: string) {
  try {
    let [study, pageData] = await Promise.all([
      client.fetch(caseStudyBySlugQuery, { slug }),
      client.fetch(homePageQuery),
    ])

    if (!study) {
      study = await client.fetch(portfolioProjectBySlugQuery, { slug })
    }

    const fallback = FALLBACK_CASE_STUDIES[slug]
    const combinedGallery =
      (Array.isArray(study?.gallery) && study.gallery.length > 0 ? study.gallery : null) ||
      fallback?.gallery ||
      []

    const industryStr =
      typeof study?.industry === 'string'
        ? study.industry
        : study?.industry?.title || study?.industry?.name || fallback?.industry || 'Government / Public Sector'

    const clientStr =
      typeof study?.client === 'string'
        ? study.client
        : study?.client?.title || study?.client?.name || fallback?.client || study?.title || 'Enterprise Client'

    const caseStudy: CaseStudyData | null =
      fallback
        ? {
            ...fallback,
            _id: study?._id || fallback._id,
            slug: fallback.slug || { current: slug },
            heroImage: study?.featuredImage || study?.heroImage || fallback.heroImage,
            featureImage: study?.featuredImage || study?.featureImage || fallback.featureImage,
            gallery: combinedGallery,
            solutionArchitecture: {
              ...fallback.solutionArchitecture,
              image:
                study?.solutionArchitecture?.image ||
                fallback.solutionArchitecture?.image ||
                (combinedGallery.length > 0 ? combinedGallery[combinedGallery.length - 1] : null) ||
                { asset: { url: '/casestudy-img/arctature-daigram.webp' } },
            },
            content: fallback.content || [],
            seo: {
              ...fallback.seo,
              metaTitle: fallback.seo?.metaTitle || `${fallback.title} | Travash Software Solutions`,
              metaDescription: fallback.seo?.metaDescription || fallback.shortDescription,
            },
          }
        : study
        ? (() => {
            const defaultProj = DEFAULT_PORTFOLIO_PROJECTS.find((p) => p.slug === slug)
            const cleanDesc = sanitizeScrapedText(study.description, '')
            const cleanExcerpt = sanitizeScrapedText(study.excerpt, '')
            const fallbackShortDesc =
              defaultProj?.shortDescription ||
              defaultProj?.cardDescription ||
              `${study.title || slug} enterprise platform engineered by Travash.`
            const shortDesc = cleanExcerpt || cleanDesc || fallbackShortDesc

            const rawParas = Array.isArray(study.executiveSummary?.paragraphs)
              ? study.executiveSummary.paragraphs
                  .map((p: string) => sanitizeScrapedText(p, ''))
                  .filter(Boolean)
              : []

            const execSummary =
              rawParas.length > 0
                ? {
                    title: study.executiveSummary?.title || 'Executive Summary',
                    paragraphs: rawParas,
                  }
                : {
                    title: 'Executive Summary',
                    paragraphs: [
                      cleanDesc || cleanExcerpt || fallbackShortDesc,
                      'Through user-centric design, resilient architecture, and modern automation, Travash delivered measurable performance improvements and seamless user experiences.',
                    ],
                  }

            return {
              ...study,
              industry: industryStr,
              client: clientStr,
              gallery: combinedGallery,
              shortDescription: shortDesc,
              executiveSummary: execSummary,
              challenge: study.challenge
                ? {
                    ...study.challenge,
                    content:
                      sanitizeScrapedText(study.challenge.content, '') ||
                      cleanDesc ||
                      study.challenge.content,
                  }
                : undefined,
              content: cleanCaseStudyContent(study.content),
            }
          })()
        : null

    return {
      caseStudy,
      siteSettings: pageData?.siteSettings,
    }
  } catch {
    return {
      caseStudy: FALLBACK_CASE_STUDIES[slug] || null,
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
      <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-clip">
        {/* 1. Hero Section with Metadata Stack & Mockup */}
        <CaseStudyHero data={caseStudy} />

        {/* 2. Key Metrics 4-Card Row */}
        <CaseStudyMetrics data={caseStudy} />

        {/* 3. Executive Summary */}
        {caseStudy.executiveSummary && (
          <ExecutiveSummary
            title={caseStudy.executiveSummary.title || 'Executive Summary'}
            paragraphs={caseStudy.executiveSummary.paragraphs}
          />
        )}

        {/* 4. The Challenge */}
        {caseStudy.challenge && (
          <TheChallenge
            title={caseStudy.challenge.title || 'The Challenge'}
            headline={caseStudy.challenge.subtitle}
            description={caseStudy.challenge.content}
            points={caseStudy.challenge.points}
            pointsLabel={caseStudy.challenge.pointsLabel || 'OFFICIALS NEEDED TO IDENTIFY:'}
            takeaway={caseStudy.challenge.takeaway}
          />
        )}

        {/* 5. Center Laptop Visual Mockup */}
        <ProjectVisual
          imageSrc={
            (typeof caseStudy.heroImage === 'string'
              ? caseStudy.heroImage
              : caseStudy.heroImage?.asset?.url) ||
            (typeof caseStudy.featureImage === 'string'
              ? caseStudy.featureImage
              : caseStudy.featureImage?.asset?.url) ||
            '/home-img/satyapaan-min 2.png'
          }
          alt={caseStudy.title}
        />

        {/* 6. The Complexity */}
        {caseStudy.complexity && (
          <TheComplexity
            title={caseStudy.complexity.title || 'The Complexity'}
            intro={caseStudy.complexity.intro}
            items={caseStudy.complexity.items}
          />
        )}

        {/* 7. Travash Approach */}
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

        {/* 8. The Solution */}
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

        {/* 9. Solution Architecture */}
        <ArchitectureSection
          title={caseStudy.solutionArchitecture?.title}
          intro={caseStudy.solutionArchitecture?.intro}
          imageSrc={
            getSanityImageUrl(caseStudy.solutionArchitecture?.image, 1400) ||
            (caseStudy.gallery && caseStudy.gallery.length > 0
              ? getSanityImageUrl(caseStudy.gallery[caseStudy.gallery.length - 1], 1400)
              : null) ||
            '/casestudy-img/arctature-daigram.webp'
          }
          caption={caseStudy.solutionArchitecture?.caption}
          isSatyaapan={!!caseStudy.solutionArchitecture?.isSatyaapan}
        />

        {/* 10. Enterprise Technology Stack */}
        {caseStudy.technologyStack && caseStudy.technologyStack.length > 0 && (
          <CaseStudyContentSection
            id="technology-stack"
            eyebrow="Technical Infrastructure"
            title="Enterprise Technology Stack"
            subtitle="To deliver a robust custom software solution capable of processing millions of records securely, we utilised a highly resilient tech stack:"
            variant="white"
          >
            <TechnologyStack items={caseStudy.technologyStack} />
          </CaseStudyContentSection>
        )}

        {/* 11. The Impact */}
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

        {/* 12. Before vs. After Comparison */}
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

        {/* 13. Client Perspective / Testimonial */}
        {caseStudy.testimonial && (
          <ClientPerspective data={caseStudy.testimonial} />
        )}

        {/* 14. Why This Matters */}
        {caseStudy.whyItMatters && (
          <WhyItMatters
            title={caseStudy.whyItMatters.title}
            subtitle={caseStudy.whyItMatters.subtitle}
            items={caseStudy.whyItMatters.items}
            description={caseStudy.whyItMatters.description}
          />
        )}

        {/* 15. The Next Step Banner */}
        <CaseStudyNextStep
          heading="The Next Step"
          subtitle="Looking to Modernize a High-Volume Verification or Public-Safety Workflow?"
        />

        {/* 16. Contact Form */}
        <CaseStudyContact
          heading="Ready to automate and solve operational bottlenecks?"
          description="At Travash, we engineer enterprise-grade AI and automation solutions that solve complex business challenges and streamline operations. Visit travash.com to connect with our digital transformation experts."
        />
      </main>

      {/* 17. Global Footer */}
      <Footer settings={siteSettings} />
    </>
  )
}
