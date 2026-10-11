'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Layers } from 'lucide-react'
import type { IndustryCaseStudyItem } from '@/lib/industry-data'

interface IndustryCaseStudiesProps {
  caseStudies?: IndustryCaseStudyItem[]
  industryTitle?: string
  industrySlug?: string
}

const SLUG_TO_THUMB: Record<string, string> = {
  satyapaan: '/casestudy-thumbs/Satyaapan.png',
  'i4c-bank-portal': '/casestudy-thumbs/i4c.png',
  i4c: '/casestudy-thumbs/i4c.png',
  '14c': '/casestudy-thumbs/14c.png',
  'dine-desk': '/casestudy-thumbs/dinedesk.png',
  dinedesk: '/casestudy-thumbs/dinedesk.png',
  darpan: '/casestudy-thumbs/Darpan.png',
  ugo: '/casestudy-thumbs/UGO.png',
  indispare: '/casestudy-thumbs/indispare.png',
  pixl: '/casestudy-thumbs/pixl-crm.png',
  'pixl-crm': '/casestudy-thumbs/pixl-crm.png',
  'ai-voice-agent': '/casestudy-thumbs/pixl-crm.png',
  'i-verify': '/casestudy-thumbs/i-verify.png',
  iverify: '/casestudy-thumbs/i-verify.png',
  radiantsa: '/casestudy-thumbs/rediantsage.png',
  'radiant-sage': '/casestudy-thumbs/rediantsage.png',
  'smart-healthcare-data-platform': '/casestudy-thumbs/rediantsage.png',
  protectly: '/casestudy-thumbs/protectly.png',
  skipr: '/images/portfolio/skipr.png',
  dovehouse: '/images/portfolio/dovehouse.png',
  pekt: '/images/portfolio/pekt.webp',
  'direct-owners': '/casestudy-thumbs/Dreamnest.png',
  crowdcounting: '/casestudy-thumbs/Crowd-Counting.png',
  'crowd-counting': '/casestudy-thumbs/Crowd-Counting.png',
  nigaah: '/casestudy-thumbs/Nigaah.png',
  'nigaah-videosurvelience': '/casestudy-thumbs/Nigaah.png',
  'unix-parts': '/casestudy-thumbs/unixparts.png',
  unixparts: '/casestudy-thumbs/unixparts.png',
  spencer: '/home-img/Frame.png',
  medimee: '/home-img/Frame-2.png',
  gemba: '/home-img/Manufacturing (1).png',
}

function deduplicate(items: IndustryCaseStudyItem[]) {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = item.slug || item._id || item.title
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function IndustryStudyCard({ study }: { study: IndustryCaseStudyItem }) {
  const sanityImg =
    study.heroImage?.asset?.url ||
    study.featureImage?.asset?.url ||
    study.cardImage?.asset?.url ||
    study.featuredImage?.asset?.url
  const thumbFromMap = study.slug ? SLUG_TO_THUMB[study.slug] : undefined
  const rawImage = sanityImg || thumbFromMap || study.image
  const isValidPath =
    typeof rawImage === 'string' &&
    (rawImage.startsWith('/') || rawImage.startsWith('http'))
  const imageSrc = isValidPath ? rawImage : '/casestudy-thumbs/Satyaapan.png'

  const href =
    study.slug === 'satyapaan' || study.slug?.includes('satyapaan')
      ? '/case-studies/satyapaan'
      : `/case-studies/${study.slug}`

  return (
    <div className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-[#004771]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Image Frame */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-transparent to-transparent pointer-events-none" />

          {/* Category Tag */}
          <div className="absolute top-3.5 left-3.5 bg-[#004771]/90 backdrop-blur-md text-white rounded-full px-3 py-1 text-[11px] font-bold tracking-wide shadow-2xs">
            {study.category || 'Case Study'}
          </div>

          {/* Client Tag */}
          {study.client && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
              {study.client}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors leading-snug mb-2.5 line-clamp-2">
            {study.title}
          </h3>

          {study.shortDescription && (
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-2 line-clamp-2">
              {study.shortDescription}
            </p>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="p-6 pt-0">
        <Link
          href={href}
          className="w-full inline-flex items-center justify-center h-11 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md active:scale-98 whitespace-nowrap group/btn"
        >
          <span>View Full Case Study</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  )
}

export default function IndustryCaseStudies({
  caseStudies,
  industryTitle,
}: IndustryCaseStudiesProps) {
  // Only display case studies that are manually selected in Sanity backend
  const uniqueList = Array.isArray(caseStudies) && caseStudies.length > 0
    ? deduplicate(caseStudies)
    : []

  const uniqueCount = uniqueList.length

  // If none are selected in Sanity backend, do NOT render this section
  if (uniqueCount === 0) {
    return null
  }

  // Prepare slides for smooth infinite carousel:
  // - If 1 item: repeat 3 times so user can swipe/cycle
  // - If 2 items: repeat pair once ([A, B, A, B]) with 50% slide width (shows 2 at a time, loops infinitely)
  // - If 3 items: repeat set once ([A, B, C, A, B, C]) with 33.3% slide width
  // - If 4 or more: repeat if fewer than 6 for Embla loop stability
  const displayedStudies: IndustryCaseStudyItem[] = (() => {
    if (uniqueCount === 1) return [...uniqueList, ...uniqueList, ...uniqueList]
    if (uniqueCount === 2) return [...uniqueList, ...uniqueList]
    if (uniqueCount === 3) return [...uniqueList, ...uniqueList]
    if (uniqueCount < 6) {
      const padded = [...uniqueList]
      while (padded.length < 6) {
        padded.push(...uniqueList)
      }
      return padded
    }
    return uniqueList
  })()

  // Carousel with infinite loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    slidesToScroll: 1,
    dragFree: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Slide width class:
  // If 2 unique items: exactly 2 items take 50% width on web (2 visible at a time)
  // If 3 or more items: 3 items take 33.333% width on web (3 visible at a time)
  const slideWidthClass =
    uniqueCount === 1
      ? 'flex-[0_0_100%] max-w-xl mx-auto min-w-0 pl-6'
      : uniqueCount === 2
      ? 'flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_50%] min-w-0 pl-6'
      : 'flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6'

  const sectionHeadline = industryTitle
    ? `${industryTitle} Case Studies & Realized Outcomes`
    : 'Industry Case Studies & Realized Outcomes'

  return (
    <section
      id="case-studies"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-t border-b border-gray-200/80 overflow-hidden relative"
    >
      {/* Ambient background blur glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#004771] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>PROVEN CLIENT DELIVERIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.2]">
              {sectionHeadline}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-2.5">
              Explore production systems, high-concurrency architectures, and measurable ROI delivered for organizations in this vertical.
            </p>
          </motion.div>

          {/* Navigation Prev/Next Circular Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 self-start md:self-end"
          >
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous Case Study"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#004771] text-gray-700 hover:text-white border border-gray-200 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next Case Study"
              className="w-11 h-11 rounded-full bg-[#004771] hover:bg-[#02487D] text-white border border-[#004771] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Embla Carousel Viewport with Infinite Loop */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 py-2"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y -ml-6">
            {displayedStudies.map((study, idx) => (
              <div
                key={`${study.slug}-${idx}`}
                className={slideWidthClass}
              >
                <IndustryStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
            <span>Drag, swipe or click arrows to browse selected implementations</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </div>

          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-[#0B1E3D] font-bold text-xs uppercase tracking-wider shadow-2xs hover:shadow-sm transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#004771]" />
            <span>Explore Entire Portfolio Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
