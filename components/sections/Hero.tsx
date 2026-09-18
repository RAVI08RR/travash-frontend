'use client'

import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

interface HeroData {
  eyebrowText?: string
  headingLine1?: string
  headingHighlight?: string
  headingLine2?: string
  subtext?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({ data }: { data?: HeroData }) {
  const videoMask = (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        clipPath: 'polygon(50% 0%, 100% 100%, 65% 100%, 50% 64%, 35% 100%, 0% 100%)',
      }}
    >
      <video
        src="/Travash-video-hero-section.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      />
    </div>
  )

  return (
    <section className="relative bg-white pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-4 items-center min-h-0 lg:min-h-[500px]">
          {/* Left Column: Heading, Mobile Video (centered under title), Subtext, & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4">
            {/* Main Heading */}
            <h1
              className="font-bold sm:font-[600] leading-[1.14] sm:leading-[1.12] lg:leading-[1.1] tracking-[-0.03em] text-center lg:text-left w-full"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 6vw, 68px)',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(90deg, #004771 0%, #448AE1 65.38%, #051529 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {data?.headingLine1 || data?.headingHighlight || data?.headingLine2 ? (
                <>
                  <span className="block sm:inline">{data?.headingLine1 || 'AI-Assisted'} </span>
                  {data?.headingHighlight && (
                    <span className="block sm:inline">{data.headingHighlight} </span>
                  )}
                  {data?.headingLine2 && (
                    <span className="block sm:inline">{data.headingLine2}</span>
                  )}
                </>
              ) : (
                <>
                  <span className="block sm:inline">AI-Assisted </span>
                  <span className="block sm:hidden">Software &amp; Product</span>
                  <span className="hidden sm:inline">Software &amp; <br className="hidden sm:inline" />Product Development </span>
                  <span className="block sm:hidden">Development</span>
                  <span className="block sm:inline"><br className="hidden sm:inline" />Company</span>
                </>
              )}
            </h1>

            {/* Mobile-Only Video: Displayed directly below title and center aligned */}
            <div className="lg:hidden flex items-center justify-center my-4 sm:my-6 w-full">
              <div className="relative w-[230px] xs:w-[260px] sm:w-[290px] aspect-[1/1.06] flex items-center justify-center drop-shadow-sm">
                {videoMask}
              </div>
            </div>

            {/* Subtext: Placed below the video on mobile */}
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-[440px] text-center lg:text-left mx-auto lg:mx-0">
              {data?.subtext ||
                'We design, build and modernize web, mobile, SaaS and enterprise products—combining software engineering, automation and AI to solve real business challenges.'}
            </p>

            {/* Action CTAs */}
            <div className="w-full max-w-[380px] sm:max-w-none mx-auto lg:mx-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <Link
                href={data?.primaryCta?.href || '/contact'}
                className="btn-global w-full sm:w-auto h-[52px] sm:h-[56px] rounded-[10px] sm:rounded-[8px] inline-flex items-center justify-center bg-[#004771] hover:bg-[#003859] text-white font-semibold px-6 sm:px-7 transition-all duration-200 text-[15px] sm:text-[14px] shadow-sm active:scale-[0.99]"
              >
                {data?.primaryCta?.label || 'Book Free Consultation'}
              </Link>
              <Link
                href={data?.secondaryCta?.href || '/work'}
                className="btn-global w-full sm:w-auto h-[52px] sm:h-[56px] rounded-[10px] sm:rounded-[8px] inline-flex items-center justify-center bg-white border border-[#004771] sm:border-[#D1D5DB] text-[#004771] sm:text-[#374151] hover:border-[#004771] hover:text-[#004771] font-semibold px-6 sm:px-7 transition-all duration-200 text-[15px] sm:text-[14px] active:scale-[0.99]"
              >
                {data?.secondaryCta?.label || 'View Our Portfolio'}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden sm:flex items-center gap-2.5 pt-2 sm:pt-4">
              <div className="w-8 h-8 rounded-full border border-[#004771] flex items-center justify-center text-[#004771]">
                <ArrowDown size={13} />
              </div>
              <span className="text-[13px] font-medium text-gray-600">Scroll</span>
            </div>
          </div>

          {/* Right Column: Desktop Triangular Video Mask */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px] aspect-[1/1.05] flex items-center justify-center">
              {videoMask}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
