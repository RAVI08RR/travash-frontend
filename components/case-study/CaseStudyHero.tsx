'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSanityImageUrl } from '@/lib/sanity.image'
import defaultHeroThumb from '@/public/casestudy-img/Satyaapan-Passport-Verification-System.png'
import type { CaseStudyData } from '@/lib/case-study-data'
import { sanitizeScrapedText, isScrapedJunkOrCss } from '@/lib/case-study-cleaner'

export default function CaseStudyHero({ data }: { data: CaseStudyData }) {
  // Resolve Sanity CDN image, direct URL, or fallback
  const resolvedSanityUrl =
    getSanityImageUrl(data.featureImage, 1400) ||
    getSanityImageUrl(data.heroImage, 1400)

  const SLUG_THUMBS: Record<string, string> = {
    pixl: '/casestudy-thumbs/pixl-crm.png',
    'pixl-crm': '/casestudy-thumbs/pixl-crm.png',
    'ai-voice-agent': '/casestudy-thumbs/pixl-crm.png',
    satyapaan: '/casestudy-thumbs/Satyaapan.png',
    satyaapan: '/casestudy-thumbs/Satyaapan.png',
    'i4c-bank-portal': '/casestudy-thumbs/i4c.png',
    i4c: '/casestudy-thumbs/i4c.png',
    '14c': '/casestudy-thumbs/14c.png',
    'direct-owners': '/casestudy-thumbs/Dreamnest.png',
    directowner: '/casestudy-thumbs/Dreamnest.png',
    ugo: '/casestudy-thumbs/UGO.png',
    uog: '/casestudy-thumbs/UGO.png',
    indispare: '/casestudy-thumbs/indispare.png',
    dovehouse: '/images/portfolio/dovehouse.png',
    'dovehouse-capital': '/images/portfolio/dovehouse.png',
    pekt: '/images/portfolio/pekt.webp',
    skipr: '/images/portfolio/skipr.png',
    darpan: '/casestudy-thumbs/Darpan.png',
    'i-verify': '/casestudy-thumbs/i-verify.png',
    iverify: '/casestudy-thumbs/i-verify.png',
    'dine-desk': '/casestudy-thumbs/dinedesk.png',
    dinedesk: '/casestudy-thumbs/dinedesk.png',
    radiantsa: '/casestudy-thumbs/rediantsage.png',
    'radiant-sage': '/casestudy-thumbs/rediantsage.png',
    'smart-healthcare-data-platform': '/casestudy-thumbs/rediantsage.png',
    protectly: '/casestudy-thumbs/protectly.png',
    crowdcounting: '/casestudy-thumbs/Crowd-Counting.png',
    'crowd-counting': '/casestudy-thumbs/Crowd-Counting.png',
    nigaah: '/casestudy-thumbs/Nigaah.png',
    'nigaah-videosurvelience': '/casestudy-thumbs/Nigaah.png',
    unixparts: '/casestudy-thumbs/unixparts.png',
    'unix-parts': '/casestudy-thumbs/unixparts.png',
  }

  const slug = data.slug?.current || ''
  const slugFallback = SLUG_THUMBS[slug] || '/casestudy-thumbs/Satyaapan.png'

  const featureVisual =
    resolvedSanityUrl && !resolvedSanityUrl.includes('Group 1000003287.png')
      ? resolvedSanityUrl
      : typeof data.featureImage === 'string' && data.featureImage
        ? data.featureImage
        : (typeof data.featureImage === 'object' ? data.featureImage?.asset?.url : undefined) ||
        (typeof data.heroImage === 'string' && data.heroImage
          ? data.heroImage
          : typeof data.heroImage === 'object'
            ? data.heroImage?.asset?.url
            : undefined) ||
        slugFallback

  const title = data?.title || 'Case Study'

  // Extract metadata values with defaults matching the design
  const clientName =
    typeof data?.client === 'string'
      ? data.client
      : (data?.client as any)?.title || (data?.client as any)?.name || 'Telangana State Police'
  const solutionName =
    data?.projectMeta?.find((m) => (m.label || '').toLowerCase() === 'solution')?.value ||
    title
  const industryName =
    typeof data?.industry === 'string'
      ? data.industry
      : (data?.industry as any)?.title ||
      (data?.industry as any)?.name ||
      data?.projectMeta?.find((m) => (m.label || '').toLowerCase() === 'industry')?.value ||
      'Government / Public Safety'
  const capabilitiesValue =
    data?.projectMeta?.find((m) => (m.label || '').toLowerCase().includes('capabilit'))?.value ||
    'Web Application Development • AI–Assisted Verification • Facial Recognition • Data Extraction • Workflow Automation'

  // Extract project name for breadcrumbs (e.g. "Satyapaan")
  const breadcrumbName =
    data?.slug?.current === 'satyapaan'
      ? 'Satyapaan'
      : data?.slug?.current === 'darpan'
        ? 'Darpan'
        : data?.slug?.current === 'i-verify'
          ? 'i-Verify'
          : data?.slug?.current === 'i4c-bank-portal' || data?.slug?.current === 'i4c'
            ? 'I4C'
            : data?.slug?.current === 'ugo'
              ? 'UGO'
              : title.split(':')[0] || 'Case Study'

  return (
    <section className="pt-5 pb-12 sm:pt-5 sm:pb-16 bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] overflow-hidden">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home > Works > Satyapaan */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B] mb-6 sm:mb-8 font-normal"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#02487D] transition-colors">
            Home
          </Link>
          <span className="text-[#94A3B8]">&gt;</span>
          <Link href="/portfolio" className="hover:text-[#02487D] transition-colors">
            Works
          </Link>
          <span className="text-[#94A3B8]">&gt;</span>
          <span className="text-[#64748B] font-normal truncate">
            {breadcrumbName}
          </span>
        </motion.nav>

        {/* Top Header Block: H1 Title and Subtitle Description */}
        <div className="max-w-5xl mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1.5px] leading-[1.16] mb-5"
          >
            {title.includes(':') ? (
              <>
                <span>{title.split(':')[0]}:</span>
                <br className="hidden sm:inline" />{' '}
                <span>{title.split(':')[1]}</span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          {(() => {
            const cleanShortDesc = sanitizeScrapedText(data.shortDescription, '')
            if (!cleanShortDesc || isScrapedJunkOrCss(cleanShortDesc) || cleanShortDesc.includes('@media')) return null
            return (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-[17px] text-[#475569] leading-relaxed font-normal max-w-4xl"
              >
                {cleanShortDesc}
              </motion.p>
            )
          })()}
        </div>


        {/* 2-Column Grid: Left Metadata Details, Right Featured Showcase Visual */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Client, Solution, Industry, Capabilities */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-7">
            {/* 1. CLIENT */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/client.svg"
                  alt="Client"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  CLIENT
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {clientName}
                </span>
              </div>
            </motion.div>

            {/* 2. SOLUTION */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/solution.svg"
                  alt="Solution"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  SOLUTION
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {solutionName}
                </span>
              </div>
            </motion.div>

            {/* 3. INDUSTRY */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/Industry.svg"
                  alt="Industry"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  INDUSTRY
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {industryName}
                </span>
              </div>
            </motion.div>

            {/* 4. CAPABILITIES */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/Capabilities.svg"
                  alt="Capabilities"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  CAPABILITIES
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-snug">
                  {capabilitiesValue}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Image Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 bg-[#F8FAFC]"
            >
              <Image
                src={featureVisual}
                alt={data.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
