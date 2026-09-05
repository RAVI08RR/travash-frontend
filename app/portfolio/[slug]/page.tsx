import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { portfolioProjectBySlugQuery, allPortfolioSlugsQuery } from '@/lib/portfolioQueries'
import { caseStudyBySlugQuery, homePageQuery } from '@/lib/queries'
import {
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

import { CheckCircle2 } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Adapt any Sanity project or fallback into standard CaseStudyData shape
function adaptToCaseStudyData(raw: any, slug: string): CaseStudyData | null {
  const fallback = FALLBACK_CASE_STUDIES[slug]

  if (!raw && !fallback) return null

  if (fallback) {
    const combinedGallery =
      (Array.isArray(raw?.gallery) && raw.gallery.length > 0 ? raw.gallery : null) ||
      fallback.gallery ||
      []

    return {
      ...fallback,
      _id: raw?._id || fallback._id,
      slug: fallback.slug || { current: slug },
      heroImage: raw?.featuredImage || raw?.heroImage || fallback.heroImage,
      featureImage: raw?.featuredImage || raw?.heroImage || fallback.featureImage,
      gallery: combinedGallery,
      solutionArchitecture: {
        ...fallback.solutionArchitecture,
        image:
          raw?.solutionArchitecture?.image ||
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
  }

  // Synthesis for any project without a pre-baked static fallback
  const defaultProj = DEFAULT_PORTFOLIO_PROJECTS.find((p) => p.slug === slug)

  const rawTitle = typeof raw?.title === 'string' ? sanitizeScrapedText(raw.title, '') : ''
  const title = rawTitle || defaultProj?.title || raw?.title || slug

  const industry =
    typeof raw?.industry === 'string'
      ? raw.industry
      : raw?.industry?.title ||
        raw?.industry?.name ||
        raw?.industryName ||
        defaultProj?.industry ||
        'Enterprise Technology'

  const service =
    raw?.serviceType ||
    (Array.isArray(raw?.services) && raw.services[0]
      ? typeof raw.services[0] === 'string'
        ? raw.services[0]
        : raw.services[0]?.title || raw.services[0]?.name
      : defaultProj?.category || 'Custom Software Development')

  let techList: string[] = (raw?.technologies || raw?.techStack || [])
    .map((t: any) => (typeof t === 'string' ? t : t?.title || t?.name || ''))
    .filter(Boolean)
  if (techList.length === 0 && defaultProj?.technologies) {
    techList = (defaultProj.technologies as any[])
      .map((t: any) => (typeof t === 'string' ? t : t?.name || t?.title || ''))
      .filter(Boolean)
  }

  const challengesList = Array.isArray(raw?.challenges) ? raw.challenges : []
  const solutionsList = Array.isArray(raw?.solutions) ? raw.solutions : []
  const metricsList =
    Array.isArray(raw?.metrics) && raw.metrics.length > 0
      ? raw.metrics
      : defaultProj?.metrics && defaultProj.metrics.length > 0
      ? defaultProj.metrics
      : [
          { value: '100%', label: 'Delivery SLA Compliance' },
          { value: '24/7', label: 'Continuous Reliability' },
          { value: '<1s', label: 'Optimized Query Response' },
          { value: raw?.client || title, label: 'client-badge' },
        ]

  const fallbackThumb = defaultProj?.cardImage || `/images/portfolio/${slug}.webp`
  const featureImage = raw?.featuredImage || raw?.heroImage || raw?.cardImage || fallbackThumb
  const heroImage = raw?.featuredImage || raw?.heroImage || raw?.cardImage || fallbackThumb

  const cleanExcerpt = sanitizeScrapedText(raw?.excerpt, '')
  const cleanDesc = sanitizeScrapedText(raw?.description, '')
  const fallbackShortDesc =
    defaultProj?.shortDescription ||
    defaultProj?.cardDescription ||
    `${title} enterprise platform engineered by Travash.`
  const shortDescription = cleanExcerpt || cleanDesc || fallbackShortDesc

  const rawSummaryParas = Array.isArray(raw?.executiveSummary?.paragraphs)
    ? raw.executiveSummary.paragraphs
        .map((p: string) => sanitizeScrapedText(p, ''))
        .filter(Boolean)
    : []

  const executiveSummary =
    rawSummaryParas.length > 0
      ? {
          title: raw?.executiveSummary?.title || 'Executive Summary',
          subtitle:
            raw?.executiveSummary?.subtitle ||
            `Modernizing operations through custom digital engineering for ${title}.`,
          paragraphs: rawSummaryParas,
        }
      : {
          title: 'Executive Summary',
          subtitle: `Modernizing operations through custom digital engineering for ${title}.`,
          paragraphs: [
            cleanDesc || cleanExcerpt || fallbackShortDesc,
            'Through user-centric design, resilient architecture, and modern automation, Travash delivered measurable performance improvements and seamless user experiences.',
          ],
        }

  const challengeContent =
    sanitizeScrapedText(raw?.challenge?.content, '') ||
    cleanDesc ||
    `The primary objective was establishing an integrated, secure, and intuitive workflow for ${title}.`

  return {
    _id: raw?._id || `proj-${slug}`,
    title,
    slug: { current: slug },
    eyebrow: 'CASE STUDY',
    category: service,
    industry,
    client: raw?.client || title,
    location: raw?.location || 'Global / Enterprise',
    shortDescription,
    featureImage,
    heroImage,
    projectMeta: [
      { label: 'Industry', value: industry },
      { label: 'Solution', value: title },
      { label: 'Capabilities', value: service },
      { label: 'Platform', value: raw?.platform || 'Enterprise Web & Cloud' },
    ],
    metrics: metricsList,
    executiveSummary,
    complexity:
      challengesList.length > 0
        ? {
            title: 'The Complexity',
            intro: 'Key operational challenges and engineering constraints encountered during development.',
            items: challengesList.map((c: any, i: number) => ({
              title: (typeof c === 'string' ? c : c.title || `CHALLENGE ${i + 1}`).toUpperCase(),
              description: typeof c === 'string' ? c : c.description || c.title,
            })),
          }
        : undefined,
    challenge: {
      title: 'The Challenge',
      subtitle: 'Overcoming architectural hurdles and manual inefficiencies.',
      content: challengeContent,
      points:
        challengesList.length > 0
          ? challengesList.map((c: any) => (typeof c === 'string' ? c : c.title || c.description))
          : [
              'Fragmented workflows requiring manual intervention and administrative overhead',
              'Need for real-time synchronization and high-availability data handling',
              'Demanding security, data protection, and auditability standards',
              'Scalable infrastructure capable of supporting rapid transaction growth',
            ],
    },
    approach: {
      title: 'Travash Approach',
      intro: 'Systematic Discovery, Engineering, and Iterative Deployment',
      steps: [
        {
          stepNumber: '01',
          title: 'Discover',
          description: 'Collaborated with key stakeholders to map workflow friction and technical dependencies.',
        },
        {
          stepNumber: '02',
          title: 'Architect',
          description: 'Formulated a modular, secure architecture optimized for high uptime and responsive performance.',
        },
        {
          stepNumber: '03',
          title: 'Implement',
          description: 'Developed intuitive UI components backed by robust microservices and secure database layers.',
        },
        {
          stepNumber: '04',
          title: 'Validate',
          description: 'Executed rigorous automated testing and security audits prior to full-scale deployment.',
        },
      ],
    },
    solution: {
      title: 'The Solution',
      intro: `${title} – Engineered for Scale, Usability, and Speed`,
      items:
        solutionsList.length > 0
          ? solutionsList.map((s: any) => ({
              title: typeof s === 'string' ? s : s.title,
              description: typeof s === 'string' ? s : s.description || s.title,
            }))
          : [
              {
                title: 'Automated Core Workflows',
                description: 'Streamlined data capture and processing to minimize administrative delays.',
              },
              {
                title: 'Responsive User Experience',
                description: 'Designed clean, intuitive interfaces that maximize employee and user productivity.',
              },
              {
                title: 'Robust Data Integrity',
                description: 'Ensured high-level encryption and continuous backup protection across all interactions.',
              },
            ],
    },
    technologyStack:
      techList.length > 0
        ? [
            {
              category: 'Platform & Engineering',
              technologies: techList,
              description:
                'Engineered using industry-standard enterprise frameworks for security, performance, and long-term maintainability.',
            },
          ]
        : undefined,
    impact: {
      title: 'The Impact',
      subtitle: 'Measurable Operational Enhancements and Business Value',
      content: `The implementation of ${title} established automated efficiency and empowered stakeholders with immediate visibility.`,
      outcomes: [
        'Significant reduction in manual processing latency and error rates',
        'Enhanced user engagement and satisfaction across all user segments',
        'High-availability uptime and scalable system performance',
        'Zero security infractions with end-to-end data protection',
      ],
    },
    testimonial: raw.testimonial
      ? {
          quote: raw.testimonial.quote,
          author: raw.testimonial.name || 'Executive Stakeholder',
          role: raw.testimonial.designation || 'Client Leadership',
          company: raw.testimonial.company || title,
        }
      : undefined,
    whyItMatters: {
      title: 'Why This Matters',
      subtitle: 'Is Your Organization Facing Similar Scale Challenges?',
      items: [
        'Eliminating manual bottlenecks in core business processes',
        'Modernizing legacy software infrastructure with modern web standards',
        'Integrating disparate data sources into a unified single pane of glass',
        'Delivering dependable, secure user experiences for mission-critical operations',
      ],
    },
    nextStep: {
      heading: 'The Next Step',
      content: `Accelerate your organization's digital transformation. Travash combines custom software engineering, AI-assisted workflows, and deep architecture expertise to build scalable platforms tailored to your business goals.`,
      primaryCTA: { label: 'Discuss Your Initiative', href: '#contact' },
      secondaryCTA: { label: 'Explore Engineering Consultation', href: '#contact' },
    },
    gallery: raw.gallery || [],
    solutionArchitecture: raw.solutionArchitecture || {
      title: 'Solution Architecture',
      intro: `Distributed, cloud-resilient system architecture engineered for ${title} to ensure high availability and sub-second transaction throughput.`,
      image:
        raw.gallery && raw.gallery.length > 0
          ? raw.gallery[raw.gallery.length - 1]
          : { asset: { url: '/casestudy-img/arctature-daigram.webp' } },
      caption: `Figure: ${title} Cloud Architecture & Enterprise Workflow Infrastructure`,
    },
    content: cleanCaseStudyContent(raw?.content),
    seo: {
      metaTitle: raw?.seo?.metaTitle || `${title} Case Study | Travash Software Solutions`,
      metaDescription: sanitizeScrapedText(raw?.seo?.metaDescription, '') || shortDescription,
    },
  }
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  let raw: any = null
  try {
    raw = await client.fetch(portfolioProjectBySlugQuery, { slug })
    if (!raw) {
      raw = await client.fetch(caseStudyBySlugQuery, { slug })
    }
  } catch {
    // fallback
  }

  const data = adaptToCaseStudyData(raw, slug)

  if (!data) {
    return {
      title: 'Case Study Not Found | Travash Software Solutions',
    }
  }

  const title =
    data.seo?.metaTitle || `${data.title} | Travash Software Solutions`
  const description =
    data.seo?.metaDescription ||
    data.shortDescription ||
    'Explore enterprise technology solutions and case studies by Travash.'

  const ogImageUrl =
    data.seo?.ogImage?.asset?.url ||
    (typeof data.featureImage === 'string'
      ? data.featureImage
      : data.featureImage?.asset?.url) ||
    (typeof data.heroImage === 'string'
      ? data.heroImage
      : data.heroImage?.asset?.url)

  const canonicalUrl = `https://travash.com/portfolio/${slug}/`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
}

export default async function PortfolioProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let rawProject: any = null
  let siteSettings: any = null

  try {
    const [projectResult, homeResult] = await Promise.all([
      client.fetch(portfolioProjectBySlugQuery, { slug }),
      client.fetch(homePageQuery),
    ])
    rawProject = projectResult
    if (!rawProject) {
      rawProject = await client.fetch(caseStudyBySlugQuery, { slug })
    }
    siteSettings = homeResult?.siteSettings || null
  } catch (err) {
    console.warn(`Sanity fetch error for portfolio slug ${slug}:`, err)
  }

  const caseStudy = adaptToCaseStudyData(rawProject, slug)

  if (!caseStudy) {
    notFound()
  }

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
        {caseStudy.approach && Array.isArray(caseStudy.approach.steps) && caseStudy.approach.steps.length > 0 && (
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
        {caseStudy.solution && Array.isArray(caseStudy.solution.items) && caseStudy.solution.items.length > 0 && (
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
        {caseStudy.solutionArchitecture && (
          <ArchitectureSection
            title={caseStudy.solutionArchitecture.title}
            intro={caseStudy.solutionArchitecture.intro}
            imageSrc={
              getSanityImageUrl(caseStudy.solutionArchitecture.image, 1400) ||
              (caseStudy.gallery && caseStudy.gallery.length > 0
                ? getSanityImageUrl(caseStudy.gallery[caseStudy.gallery.length - 1], 1400)
                : null) ||
              '/casestudy-img/arctature-daigram.webp'
            }
            caption={caseStudy.solutionArchitecture.caption}
            isSatyaapan={!!caseStudy.solutionArchitecture.isSatyaapan}
          />
        )}

        {/* 10. Enterprise Technology Stack */}
        <TechnologyStack items={caseStudy.technologyStack} />

        {/* 11. The Impact */}
        <TheImpact
          title={caseStudy.impact?.title || 'The Impact'}
          content={
            caseStudy.impact?.content ||
            (Array.isArray(caseStudy.impact?.outcomes) && caseStudy.impact.outcomes.length > 0
              ? `Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow ${caseStudy.impact.outcomes.join('. ')}.`
              : undefined)
          }
        />

        {/* 12. Before vs. After Comparison */}
        {caseStudy.beforeAfter &&
          Array.isArray(caseStudy.beforeAfter.before) &&
          Array.isArray(caseStudy.beforeAfter.after) && (
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
        {caseStudy.whyItMatters && Array.isArray(caseStudy.whyItMatters.items) && (
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
