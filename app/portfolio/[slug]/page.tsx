import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { getSanityImageUrl } from '@/lib/sanity.image'
import {
  portfolioProjectBySlugQuery,
  allPortfolioSlugsQuery,
  relatedPortfolioProjectsQuery,
} from '@/lib/portfolioQueries'
import { caseStudyBySlugQuery } from '@/lib/queries'
import { FALLBACK_CASE_STUDIES } from '@/lib/case-study-data'
import { DEFAULT_PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'
import PortfolioPortableText from '@/components/portfolio/PortableTextRenderer'
import PortfolioCard from '@/components/portfolio/PortfolioCard'

import {
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Layers,
  Calendar,
  Building2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Quote,
  Cpu,
  Globe,
} from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  let project: any = null
  try {
    project = await client.fetch(portfolioProjectBySlugQuery, { slug })
    if (!project) {
      project = await client.fetch(caseStudyBySlugQuery, { slug })
    }
  } catch {
    // fallback
  }

  const fallback = FALLBACK_CASE_STUDIES[slug] || DEFAULT_PORTFOLIO_PROJECTS.find((p) => p.slug === slug)
  const data = project || fallback

  if (!data) {
    return {
      title: 'Case Study Not Found | Travash Software Solutions',
    }
  }

  const title =
    data.seo?.metaTitle || `${data.title} Case Study & Architecture | Travash Software Solutions`
  const description =
    data.seo?.metaDescription ||
    data.excerpt ||
    data.shortDescription ||
    `Discover how Travash engineered ${data.title} delivering measurable business impact, robust architecture, and high performance.`

  const ogImageUrl =
    data.seo?.ogImage?.asset?.url ||
    data.featuredImage?.asset?.url ||
    data.heroImage?.asset?.url ||
    (typeof data.featuredImage === 'string' ? data.featuredImage : null)

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
    robots: {
      index: !data.seo?.noIndex,
      follow: !data.seo?.noIndex,
    },
  }
}

// Generate static params for known project slugs
export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allPortfolioSlugsQuery)
    if (slugs && slugs.length > 0) {
      return slugs.map((item) => ({ slug: item.slug }))
    }
  } catch {
    // Fallback
  }
  return DEFAULT_PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }))
}

export default async function PortfolioProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // 1. Fetch from Sanity (portfolioProject schema first, then fallback to caseStudy schema)
  let project: any = null
  let related: any[] = []

  try {
    project = await client.fetch(portfolioProjectBySlugQuery, { slug })
    if (!project) {
      project = await client.fetch(caseStudyBySlugQuery, { slug })
    }
    related = await client.fetch(relatedPortfolioProjectsQuery, { currentSlug: slug })
  } catch (err) {
    console.warn(`Sanity fetch error for portfolio slug ${slug}:`, err)
  }

  // 2. Fallback to rich curated local dataset if Sanity empty or unreachable
  const fallback = FALLBACK_CASE_STUDIES[slug] || DEFAULT_PORTFOLIO_PROJECTS.find((p) => p.slug === slug)
  const data = project || fallback

  if (!data) {
    notFound()
  }

  // Resolve Industry
  const industryTitle =
    data.industry?.title ||
    data.industry?.name ||
    (typeof data.industry === 'string' ? data.industry : null) ||
    data.industryName ||
    'Technology'

  // Resolve Services
  const servicesList: string[] = Array.isArray(data.services)
    ? data.services.map((s: any) => (typeof s === 'string' ? s : s?.title || s?.name)).filter(Boolean)
    : data.serviceType
    ? [data.serviceType]
    : data.category
    ? [data.category]
    : ['Custom Software Development']

  // Resolve Technologies
  const techList: string[] = Array.isArray(data.technologies)
    ? data.technologies.map((t: any) => (typeof t === 'string' ? t : t?.title || t?.name)).filter(Boolean)
    : Array.isArray(data.techStack)
    ? data.techStack
    : []

  // Resolve Hero / Featured Image
  const heroImageUrl =
    getSanityImageUrl(data.featuredImage || data.heroImage || data.cardImage, 1400) ||
    (typeof data.featuredImage === 'string' ? data.featuredImage : null) ||
    (typeof data.heroImage === 'string' ? data.heroImage : null) ||
    (typeof data.image === 'string' ? data.image : null)

  // Resolve Metrics
  const metrics = Array.isArray(data.metrics) && data.metrics.length > 0
    ? data.metrics
    : data.keyMetrics
    ? data.keyMetrics.map((km: any) => ({ value: km.value, label: km.label || km.title, description: km.description }))
    : []

  // Fallback Related Projects if empty
  const finalRelated =
    related && related.length > 0
      ? related
      : DEFAULT_PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug).slice(0, 3)

  // JSON-LD Structured Data (CaseStudy / CreativeWork)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: data.title,
    name: data.title,
    description: data.excerpt || data.description || `${data.title} Case Study`,
    image: heroImageUrl ? [heroImageUrl] : undefined,
    url: `https://travash.com/portfolio/${slug}/`,
    publisher: {
      '@type': 'Organization',
      name: 'Travash Software Solutions',
      url: 'https://travash.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://travash.com/logo.png',
      },
    },
    author: {
      '@type': 'Organization',
      name: 'Travash Software Solutions',
    },
  }

  return (
    <>
      {/* Schema.org Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
              <Link href="/" className="hover:text-[#02487D] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/portfolio" className="hover:text-[#02487D] transition-colors">
                Portfolio
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#0B1E3D] font-medium truncate max-w-[200px] sm:max-w-none">
                {data.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Banner Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#02487D] border border-blue-100">
                    <Building2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                    {industryTitle}
                  </span>
                  {servicesList.slice(0, 2).map((srv, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-[#475569]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E3D] tracking-tight leading-tight">
                  {data.title}
                </h1>

                {(data.shortTitle || data.subtitle || data.excerpt) && (
                  <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-normal">
                    {data.excerpt || data.subtitle || data.description}
                  </p>
                )}

                {/* Metadata Badges (Client, Year, Platform) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#64748B] font-medium">
                      Client / Organization
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#0B1E3D] mt-0.5 block">
                      {data.client || data.title}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#64748B] font-medium">
                      Year / Timeline
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#0B1E3D] mt-0.5 block">
                      {data.year || '2024'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#64748B] font-medium">
                      Deployment Scope
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#0B1E3D] mt-0.5 block">
                      {data.location || data.platform || 'Enterprise Cloud'}
                    </span>
                  </div>
                </div>

                {/* Action CTA & External Demo */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#02487D] hover:bg-[#0B1E3D] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Discuss Similar Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {data.projectUrl && data.projectUrl.startsWith('http') && (
                    <a
                      href={data.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-[#02487D] text-[#0B1E3D] font-medium text-sm transition-colors"
                    >
                      <Globe className="w-4 h-4 text-[#02487D]" />
                      Visit Live System
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                  {heroImageUrl ? (
                    <Image
                      src={heroImageUrl}
                      alt={data.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  ) : (
                    <div className="aspect-[16/10] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1E3D] to-[#02487D] text-white text-center">
                      <Sparkles className="w-12 h-12 text-[#00E5FF] mb-3" />
                      <h3 className="text-2xl font-bold">{data.title}</h3>
                      <p className="text-sm text-slate-300 mt-2">Enterprise Case Study & Architecture</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantified Metrics Highlight */}
        {metrics.length > 0 && (
          <section className="py-12 bg-[#0B1E3D] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold">
                  Quantified Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Measurable Operational Outcomes
                </h2>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-2 ${metrics.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
                {metrics.map((m: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#00E5FF]" />
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#00E5FF] tracking-tight">
                        {m.value}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{m.label}</h3>
                    {m.description && m.description !== m.label && (
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Detailed Case Study Content Body */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-8 space-y-12">
                {/* Introduction Section */}
                {data.description && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D] tracking-tight mb-4">
                      Project Overview
                    </h2>
                    <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                )}

                {/* Challenges & Scope */}
                {Array.isArray(data.challenges) && data.challenges.length > 0 && (
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0B1E3D]">
                        The Challenge & Scope
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {data.challenges.map((c: any, idx: number) => {
                        const title = typeof c === 'string' ? c : c?.title || c?.description
                        const desc = typeof c === 'object' && c?.description !== title ? c.description : null
                        return (
                          <li key={idx} className="flex items-start gap-3.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                            <div>
                              <strong className="font-semibold text-[#0B1E3D] text-base block">
                                {title}
                              </strong>
                              {desc && <p className="text-sm text-[#475569] mt-1">{desc}</p>}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {/* Solutions & Innovations */}
                {Array.isArray(data.solutions) && data.solutions.length > 0 && (
                  <div className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#02487D]/10 text-[#02487D] flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0B1E3D]">
                        Our Engineering Strategy & Solutions
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.solutions.map((s: any, idx: number) => {
                        const title = typeof s === 'string' ? s : s?.title || s?.description
                        const desc = typeof s === 'object' && s?.description !== title ? s.description : null
                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white border border-blue-100 shadow-sm"
                          >
                            <h3 className="font-semibold text-[#0B1E3D] text-base mb-1">
                              {title}
                            </h3>
                            {desc && <p className="text-sm text-[#475569]">{desc}</p>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {Array.isArray(data.features) && data.features.length > 0 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D] tracking-tight mb-6">
                      Core Platform Capabilities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.features.map((f: any, idx: number) => {
                        const title = typeof f === 'string' ? f : f?.title || f?.description
                        const desc = typeof f === 'object' && f?.description !== title ? f.description : null
                        return (
                          <div
                            key={idx}
                            className="p-5 rounded-xl border border-slate-200 hover:border-[#02487D] transition-colors"
                          >
                            <h3 className="font-semibold text-[#0B1E3D] text-base mb-1 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                              {title}
                            </h3>
                            {desc && <p className="text-sm text-[#64748B] mt-1">{desc}</p>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Full Portable Text Body (HTML-migrated content) */}
                {data.content && (
                  <div className="pt-6 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-[#0B1E3D] mb-6">
                      In-Depth Technical Walkthrough
                    </h2>
                    <PortfolioPortableText content={data.content} />
                  </div>
                )}

                {/* Project Gallery */}
                {Array.isArray(data.gallery) && data.gallery.length > 0 && (
                  <div className="pt-8 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-[#0B1E3D] mb-6">
                      System Screenshots & Architecture
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {data.gallery.map((img: any, idx: number) => {
                        const gUrl = getSanityImageUrl(img, 800) || (typeof img === 'string' ? img : null)
                        if (!gUrl) return null
                        return (
                          <div
                            key={idx}
                            className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-slate-50"
                          >
                            <Image
                              src={gUrl}
                              alt={img.alt || `${data.title} gallery screenshot ${idx + 1}`}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover"
                            />
                            {(img.caption || img.alt) && (
                              <p className="p-3 text-xs text-slate-500 text-center">
                                {img.caption || img.alt}
                              </p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Client Testimonial */}
                {data.testimonial && (data.testimonial.quote || data.testimonial.content) && (
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B1E3D] to-[#02487D] text-white shadow-xl relative overflow-hidden">
                    <Quote className="w-16 h-16 text-white/10 absolute -top-2 -left-2" />
                    <div className="relative z-10 space-y-4">
                      <p className="text-lg md:text-xl font-medium italic leading-relaxed text-slate-100">
                        “{data.testimonial.quote || data.testimonial.content}”
                      </p>
                      <div className="pt-2 border-t border-white/20">
                        <span className="font-bold text-white text-base block">
                          {data.testimonial.name || 'Executive Stakeholder'}
                        </span>
                        <span className="text-xs text-[#00E5FF]">
                          {data.testimonial.designation || 'Client Leadership'}, {data.testimonial.company || data.title}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar: Technology Stack, Services & Summary Info */}
              <div className="lg:col-span-4 space-y-8">
                {/* Tech Stack Card */}
                {techList.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-[#0B1E3D] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#02487D]" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techList.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#0B1E3D] shadow-2xs hover:border-[#02487D] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Provided */}
                {servicesList.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-[#0B1E3D] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#02487D]" />
                      Engineering Services
                    </h3>
                    <ul className="space-y-2.5">
                      {servicesList.map((srv, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-sm font-medium text-[#334155]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#02487D]" />
                          {srv}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ready to Accelerate CTA Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#02487D] to-[#0B1E3D] text-white shadow-lg space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold">
                    Work With Travash
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    Need High-Performance Architecture Like This?
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Consult with our senior enterprise software architects to scope, prototype, and build your digital solution.
                  </p>
                  <a
                    href="/contact-us"
                    className="block w-full py-3 text-center rounded-xl bg-[#00E5FF] hover:bg-white text-[#0B1E3D] font-bold text-sm shadow-md transition-all"
                  >
                    Schedule Architecture Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies Section */}
        {finalRelated.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#02487D] font-bold">
                    Related Projects
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D] mt-1">
                    Explore Similar Engineering Successes
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#02487D] hover:text-[#00E5FF] transition-colors"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {finalRelated.slice(0, 3).map((item: any, idx: number) => (
                  <PortfolioCard key={item._id || item.slug || idx} project={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consultation Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}
