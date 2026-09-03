'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Outcome {
  value: string
  label: string
  bg?: string
  border?: string
}

interface CaseStudy {
  projectName: string
  clientType: string
  image?: string
  outcomes: Outcome[]
  ctaLabel?: string
  ctaHref?: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    projectName: 'Passport verification system',
    clientType: 'Enterprise AI for Government Security\n(Processed 1.9M+ applications)',
    image: '/home-img/satyapaan-min 2.png',
    outcomes: [
      {
        value: '1.96 Million',
        label: 'Passport applications processed',
        bg: 'bg-[#FFFBEA]',
        border: 'border-[#FEEA9F]',
      },
      {
        value: '800+',
        label: 'High-risk adverse cases',
        bg: 'bg-[#F0F5FF]',
        border: 'border-[#D6E4FF]',
      },
      {
        value: 'AI-Assisted Verification',
        label: 'Automated data extraction',
        bg: 'bg-[#FAF0FF]',
        border: 'border-[#EED5FD]',
      },
      {
        value: 'Telangana State Police',
        label: 'Govt. of Telangana',
        bg: 'bg-[#EEFBF3]',
        border: 'border-[#C6F5D8]',
      },
    ],
    ctaLabel: 'View Case Study',
    ctaHref: '/work/passport-verification',
  },
  {
    projectName: 'Smart Healthcare Data Platform',
    clientType: 'Connected healthcare intelligence platform for modern clinical operations',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    outcomes: [
      {
        value: '3.5M+',
        label: 'Patient records analyzed',
        bg: 'bg-[#F0F5FF]',
        border: 'border-[#D6E4FF]',
      },
      {
        value: '99.9%',
        label: 'HIPAA compliant uptime',
        bg: 'bg-[#EEFBF3]',
        border: 'border-[#C6F5D8]',
      },
      {
        value: 'Real-time Analytics',
        label: 'Clinical diagnostic support',
        bg: 'bg-[#FFFBEA]',
        border: 'border-[#FEEA9F]',
      },
      {
        value: 'Global Health Network',
        label: 'Integrated across 40+ hospitals',
        bg: 'bg-[#FAF0FF]',
        border: 'border-[#EED5FD]',
      },
    ],
    ctaLabel: 'View Case Study',
    ctaHref: '/work/healthcare-platform',
  },
  {
    projectName: 'Digital Banking Platform',
    clientType: 'Enterprise banking technology built for secure digital experiences',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    outcomes: [
      {
        value: '10M+',
        label: 'Daily secure transactions',
        bg: 'bg-[#EEFBF3]',
        border: 'border-[#C6F5D8]',
      },
      {
        value: '45ms',
        label: 'Average latency processing',
        bg: 'bg-[#FFFBEA]',
        border: 'border-[#FEEA9F]',
      },
      {
        value: 'Fraud Shield AI',
        label: 'Zero-trust verification',
        bg: 'bg-[#F0F5FF]',
        border: 'border-[#D6E4FF]',
      },
      {
        value: 'Kotak & VISA Partners',
        label: 'Multi-region compliance',
        bg: 'bg-[#FAF0FF]',
        border: 'border-[#EED5FD]',
      },
    ],
    ctaLabel: 'View Case Study',
    ctaHref: '/work/digital-banking',
  },
]

interface SanityCaseStudy {
  projectName?: string
  clientType?: string
  image?: { asset?: { url: string } }
  outcomes?: { value: string; label: string }[]
  ctaLabel?: string
  ctaHref?: string
}

interface CaseStudiesSectionData {
  heading?: string
  caseStudies?: SanityCaseStudy[]
}

const OUTCOME_STYLES = [
  { bg: 'bg-[#E8FAF5]', border: 'border-[#A3EEDC]' },
  { bg: 'bg-[#FFFBEA]', border: 'border-[#FEEA9F]' },
  { bg: 'bg-[#F0F5FF]', border: 'border-[#D6E4FF]' },
  { bg: 'bg-[#FAF0FF]', border: 'border-[#EED5FD]' },
]

export default function CaseStudies({ data }: { data?: CaseStudiesSectionData }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  const activeStudies =
    data?.caseStudies && data.caseStudies.length > 0
      ? data.caseStudies.map((s, i) => {
          const fallback = CASE_STUDIES[i % CASE_STUDIES.length]
          return {
            projectName: s.projectName || fallback.projectName,
            clientType: s.clientType || fallback.clientType,
            image: s.image?.asset?.url || fallback.image,
            outcomes:
              s.outcomes && s.outcomes.length > 0
                ? s.outcomes.map((o, idx) => ({
                    value: o.value,
                    label: o.label,
                    bg: OUTCOME_STYLES[idx % OUTCOME_STYLES.length].bg,
                    border: OUTCOME_STYLES[idx % OUTCOME_STYLES.length].border,
                  }))
                : fallback.outcomes,
            ctaLabel: s.ctaLabel || fallback.ctaLabel,
            ctaHref: s.ctaHref || fallback.ctaHref,
          }
        })
      : CASE_STUDIES

  const current = activeStudies[currentIdx % activeStudies.length]
  const heading = data?.heading || 'Built on Results, Not Promises'

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % activeStudies.length)
  }

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + activeStudies.length) % activeStudies.length)
  }

  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }
    setTouchStart(null)
  }

  return (
    <section className="py-12 lg:py-5 
    bg-gradient-to-b from-[#ffffff] to-[#F2F2F2] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="section-heading-title">
            {heading}
          </h2>
        </div>

        {/* Big Rounded Case Study Container matching exact gradient */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="border border-gray-200/90 rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
          style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%)' }}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Clean Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-sm border border-gray-100">
              <Image
                src={current.image || '/home-img/satyapaan-min 2.png'}
                alt={current.projectName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>

            {/* Right Column: Case Study Details & 2x2 Outcome Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[500] text-[#0B4785] tracking-tight">
                  {current.projectName}
                </h3>
                <p className="text-gray-600 text-[15px] font-medium mt-1 mb-6 whitespace-pre-line">
                  {current.clientType}
                </p>

                <p className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
                  Key Outcomes
                </p>

                {/* 2x2 Outcome Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {current.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className={`${item.bg || 'bg-gray-50'} border ${item.border || 'border-gray-200'
                        } rounded-xl p-4 flex flex-col justify-center`}
                    >
                      <span className="text-lg font-bold text-gray-900 leading-tight">
                        {item.value}
                      </span>
                      <span className="text-xs text-gray-600 mt-1 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: CTA + Slider Nav */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href={current.ctaHref || '/work'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-[#0B4785] hover:bg-[#083566] text-white font-semibold px-8 text-sm transition-all duration-200 shadow-sm"
                >
                  {current.ctaLabel || 'View Case Study'}
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center"
                    aria-label="Previous case study"
                  >
                    <Image
                      src="/home-img/Group 1000003288.png"
                      alt="Previous"
                      width={40}
                      height={40}
                    />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center"
                    aria-label="Next case study"
                  >
                    <Image
                      src="/home-img/Group 1000003287-1.png"
                      alt="Next"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
