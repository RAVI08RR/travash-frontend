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
  return (
    <section className="relative bg-white pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[420px] lg:min-h-[500px]">
          {/* Left Column: Heading, Subtext & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h1
              className="font-[500] leading-[1.1] tracking-[-0.03em]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5.5vw, 70px)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(90deg, #004771 0%, #448AE1 65.38%, #051529 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI-Assisted Software &amp;
              <br />
              Product Development
              <br />
              Company
            </h1>

            <p className="text-gray-600 text-[14px] leading-relaxed font-normal max-w-[420px]">
              {data?.subtext ||
                'We design, build and modernize web, mobile, SaaS and enterprise products—combining software engineering, automation and AI to solve real business challenges.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href={data?.primaryCta?.href || '/contact'}
                className="btn-global h-[56px] rounded-[6px] inline-flex items-center justify-center bg-[#0B4785] hover:bg-[#083566] text-white font-semibold px-7 transition-all duration-200 text-[14px] shadow-sm"
              >
                {data?.primaryCta?.label || 'Book Free Consultation'}
              </Link>
              <Link
                href={data?.secondaryCta?.href || '/work'}
                className="btn-global h-[56px] rounded-[6px] inline-flex items-center justify-center border border-[#D1D5DB] text-[#374151] hover:border-[#0B4785] hover:text-[#0B4785] font-semibold px-7 transition-all duration-200 text-[14px]"
              >
                {data?.secondaryCta?.label || 'View Our Portfolio'}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2.5 pt-4">
              <div className="w-8 h-8 rounded-full border border-[#0B4785] flex items-center justify-center text-[#0B4785]">
                <ArrowDown size={13} />
              </div>
              <span className="text-[13px] font-medium text-gray-600">Scroll</span>
            </div>
          </div>

          {/* Right Column: Triangular Video Mask */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px] aspect-[1/1.05] flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
