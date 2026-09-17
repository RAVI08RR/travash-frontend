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
import TheImpact from '@/components/case-study/TheImpact'
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
    let study: CaseStudyData | null = await client.fetch(caseStudyBySlugQuery, { slug }, { cache: 'no-store', next: { revalidate: 0 } })
    if (!study) {
      study = await client.fetch(portfolioProjectBySlugQuery, { slug }, { cache: 'no-store', next: { revalidate: 0 } })
    }
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
      client.fetch(caseStudyBySlugQuery, { slug }, { cache: 'no-store', next: { revalidate: 0 } }),
      client.fetch(homePageQuery, {}, { cache: 'no-store', next: { revalidate: 0 } }),
    ])

    if (!study) {
      study = await client.fetch(portfolioProjectBySlugQuery, { slug }, { cache: 'no-store', next: { revalidate: 0 } })
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
            title: (typeof study?.title === 'string' && study.title.trim()) || fallback.title,
            eyebrow: study?.eyebrow || fallback.eyebrow,
            category: study?.category || fallback.category,
            industry: industryStr || fallback.industry,
            client: clientStr || fallback.client,
            location: study?.location || fallback.location,
            shortDescription: study?.shortDescription || fallback.shortDescription,
            heroImage: study?.featuredImage || study?.heroImage || fallback.heroImage,
            featureImage: study?.featuredImage || study?.featureImage || fallback.featureImage,
            gallery: combinedGallery,
            projectMeta:
              Array.isArray(study?.projectMeta) && study.projectMeta.length > 0
                ? study.projectMeta
                : fallback.projectMeta,
            metrics:
              Array.isArray(study?.metrics) && study.metrics.length > 0
                ? study.metrics
                : fallback.metrics,
            executiveSummary: study?.executiveSummary
              ? {
                  ...fallback.executiveSummary,
                  ...study.executiveSummary,
                  paragraphs:
                    Array.isArray(study.executiveSummary.paragraphs) &&
                    study.executiveSummary.paragraphs.length > 0
                      ? study.executiveSummary.paragraphs
                      : fallback.executiveSummary?.paragraphs,
                }
              : fallback.executiveSummary,
            challenge: study?.challenge
              ? {
                  ...fallback.challenge,
                  ...study.challenge,
                  subtitle: study.challenge.subtitle || study.challenge.headline || fallback.challenge?.subtitle,
                  content: study.challenge.content || (study.challenge as any).description || fallback.challenge?.content,
                  pointsLabel: study.challenge.pointsLabel || fallback.challenge?.pointsLabel,
                  points:
                    Array.isArray(study.challenge.points) && study.challenge.points.length > 0
                      ? study.challenge.points
                      : fallback.challenge?.points,
                  takeaway: study.challenge.takeaway || fallback.challenge?.takeaway,
                }
              : fallback.challenge,
            complexity: study?.complexity
              ? {
                  ...fallback.complexity,
                  ...study.complexity,
                  items:
                    Array.isArray(study.complexity.items) && study.complexity.items.length > 0
                      ? study.complexity.items
                      : fallback.complexity?.items,
                }
              : fallback.complexity,
            approach: study?.approach
              ? {
                  ...fallback.approach,
                  ...study.approach,
                  steps:
                    Array.isArray(study.approach.steps) && study.approach.steps.length > 0
                      ? study.approach.steps
                      : fallback.approach?.steps,
                }
              : fallback.approach,
            solution: study?.solution
              ? {
                  ...fallback.solution,
                  ...study.solution,
                  items:
                    Array.isArray(study.solution.items) && study.solution.items.length > 0
                      ? study.solution.items
                      : fallback.solution?.items,
                }
              : fallback.solution,
            solutionArchitecture: {
              ...fallback.solutionArchitecture,
              ...(study?.solutionArchitecture || {}),
              title: study?.solutionArchitecture?.title || fallback.solutionArchitecture?.title,
              intro: study?.solutionArchitecture?.intro || fallback.solutionArchitecture?.intro,
              caption: study?.solutionArchitecture?.caption || fallback.solutionArchitecture?.caption,
              image:
                study?.solutionArchitecture?.image ||
                fallback.solutionArchitecture?.image ||
                (combinedGallery.length > 0 ? combinedGallery[combinedGallery.length - 1] : null) ||
                { asset: { url: '/casestudy-img/arctature-daigram.webp' } },
            },
            techStackTitle: study?.techStackTitle || (fallback as any)?.techStackTitle,
            techStackSubtitle: study?.techStackSubtitle || (fallback as any)?.techStackSubtitle,
            technologyStack:
              Array.isArray(study?.technologyStack) && study.technologyStack.length > 0
                ? study.technologyStack
                : fallback.technologyStack,
            impact: study?.impact
              ? {
                  ...fallback.impact,
                  ...study.impact,
                  outcomes:
                    Array.isArray(study.impact.outcomes) && study.impact.outcomes.length > 0
                      ? study.impact.outcomes
                      : fallback.impact?.outcomes,
                }
              : fallback.impact,
            beforeAfter: study?.beforeAfter
              ? {
                  ...fallback.beforeAfter,
                  ...study.beforeAfter,
                  before:
                    Array.isArray(study.beforeAfter.before) && study.beforeAfter.before.length > 0
                      ? study.beforeAfter.before
                      : fallback.beforeAfter?.before,
                  after:
                    Array.isArray(study.beforeAfter.after) && study.beforeAfter.after.length > 0
                      ? study.beforeAfter.after
                      : fallback.beforeAfter?.after,
                }
              : fallback.beforeAfter,
            testimonial: study?.testimonial && (study.testimonial.quote || study.testimonial.author)
              ? {
                  heading: study.testimonial.heading || fallback.testimonial?.heading || 'Client Perspective',
                  intro: study.testimonial.intro || fallback.testimonial?.intro || "Insights, expectations, and feedback from the client's point of view.",
                  quote: study.testimonial.quote || fallback.testimonial?.quote,
                  author:
                    study.testimonial.author ||
                    study.testimonial.name ||
                    fallback.testimonial?.author ||
                    'Executive Stakeholder',
                  role:
                    study.testimonial.role ||
                    study.testimonial.designation ||
                    fallback.testimonial?.role,
                  company:
                    study.testimonial.company ||
                    fallback.testimonial?.company ||
                    fallback.title,
                  image: study.testimonial.image || fallback.testimonial?.image,
                }
              : fallback.testimonial,
            whyItMatters: study?.whyItMatters
              ? {
                  ...fallback.whyItMatters,
                  ...study.whyItMatters,
                  items:
                    Array.isArray(study.whyItMatters.items) && study.whyItMatters.items.length > 0
                      ? study.whyItMatters.items
                      : fallback.whyItMatters?.items,
                }
              : fallback.whyItMatters,
            nextStep: study?.nextStep
              ? {
                  ...fallback.nextStep,
                  ...study.nextStep,
                }
              : fallback.nextStep,
            contact: (study as any)?.contact || (fallback as any).contact,
            content: fallback.content || [],
            seo: {
              ...fallback.seo,
              metaTitle:
                study?.seo?.metaTitle ||
                fallback.seo?.metaTitle ||
                `${fallback.title} | Travash Software Solutions`,
              metaDescription:
                study?.seo?.metaDescription ||
                fallback.seo?.metaDescription ||
                fallback.shortDescription,
              ogImage: study?.seo?.ogImage || fallback.seo?.ogImage,
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
                    subtitle: study.executiveSummary?.subtitle,
                    paragraphs: rawParas,
                  }
                : {
                    title: 'Executive Summary',
                    subtitle: study.executiveSummary?.subtitle,
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
                    subtitle: study.challenge.subtitle || study.challenge.headline,
                    content:
                      sanitizeScrapedText(study.challenge.content, '') ||
                      cleanDesc ||
                      study.challenge.content,
                  }
                : undefined,
              complexity: study.complexity,
              approach: study.approach,
              solution: study.solution,
              solutionArchitecture: study.solutionArchitecture,
              technologyStack: study.technologyStack,
              impact: study.impact,
              beforeAfter: study.beforeAfter,
              testimonial: study.testimonial,
              whyItMatters: study.whyItMatters,
              nextStep: study.nextStep,
              contact: (study as any)?.contact,
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
      <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
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
            description={caseStudy.challenge.content || (caseStudy.challenge as any).description}
            points={caseStudy.challenge.points}
            pointsLabel={caseStudy.challenge.pointsLabel || 'OFFICIALS NEEDED TO IDENTIFY :'}
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
            title={caseStudy.approach.title || 'Travash Approach'}
            subtitle={
              caseStudy.approach.subtitle ||
              (caseStudy.approach.intro && !caseStudy.approach.description
                ? caseStudy.approach.intro
                : undefined)
            }
            description={
              caseStudy.approach.description ||
              (caseStudy.approach.subtitle ? caseStudy.approach.intro : undefined)
            }
            variant="gray"
          >
            <ApproachSteps steps={caseStudy.approach.steps} />
          </CaseStudyContentSection>
        )}

        {/* 8. The Solution */}
        {caseStudy.solution && (
          <CaseStudyContentSection
            id="solution"
            title={caseStudy.solution.title || 'The Solution'}
            subtitle={
              caseStudy.solution.subtitle ||
              (caseStudy.solution.intro && !caseStudy.solution.description
                ? caseStudy.solution.intro
                : undefined)
            }
            description={
              caseStudy.solution.description ||
              (caseStudy.solution.subtitle ? caseStudy.solution.intro : undefined)
            }
            variant="blue"
          >
            <SolutionGrid items={caseStudy.solution.items} />
          </CaseStudyContentSection>
        )}

        {/* 9. Solution Architecture */}
        <ArchitectureSection
          slug={slug}
          client={typeof caseStudy.client === 'string' ? caseStudy.client : caseStudy.title}
          title={caseStudy.solutionArchitecture?.title}
          intro={caseStudy.solutionArchitecture?.intro}
          imageSrc={
            getSanityImageUrl(caseStudy.solutionArchitecture?.image, 1400) ||
            (slug === 'satyapaan' ? '/casestudy-img/arctature-daigram.webp' : undefined)
          }
          caption={caseStudy.solutionArchitecture?.caption}
          isSatyaapan={slug === 'satyapaan' || !!caseStudy.solutionArchitecture?.isSatyaapan}
        />

        {/* 10. Enterprise Technology Stack */}
        <TechnologyStack
          title={caseStudy.techStackTitle || 'Enterprise\nTechnology Stack'}
          subtitle={caseStudy.techStackSubtitle}
          items={caseStudy.technologyStack}
        />

        {/* 11. The Impact */}
        {caseStudy.impact && (
          <TheImpact
            title={caseStudy.impact.title || 'The Impact'}
            subtitle={caseStudy.impact.subtitle}
            content={
              caseStudy.impact.content ||
              (Array.isArray(caseStudy.impact.outcomes) && caseStudy.impact.outcomes.length > 0
                ? undefined
                : 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow Reduced manual effort and accelerated verification turnaround times.')
            }
            outcomes={caseStudy.impact.outcomes}
          />
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
          <ClientPerspective
            data={caseStudy.testimonial}
            heading={(caseStudy.testimonial as any)?.heading}
            intro={(caseStudy.testimonial as any)?.intro}
          />
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
          heading={caseStudy.nextStep?.heading || 'The Next Step'}
          subtitle={
            caseStudy.nextStep?.subtitle ||
            'Looking to Modernize a High-Volume Verification or Public-Safety Workflow?'
          }
          content={caseStudy.nextStep?.content}
          primaryCTA={caseStudy.nextStep?.primaryCTA}
          secondaryCTA={caseStudy.nextStep?.secondaryCTA}
        />

        {/* 16. Contact Form */}
        <CaseStudyContact
          heading={
            caseStudy.contact?.heading ||
            'Ready to automate and solve operational bottlenecks?'
          }
          description={
            caseStudy.contact?.description ||
            'At Travash, we engineer enterprise-grade AI and automation solutions that solve complex business challenges and streamline operations. Visit travash.com to connect with our digital transformation experts.'
          }
        />
      </main>

      {/* 17. Global Footer */}
      <Footer settings={siteSettings} />
    </>
  )
}
