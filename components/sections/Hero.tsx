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
    <section className="relative bg-white pt-6 pb-10 lg:pt-10 lg:pb-14 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Subtext & Action CTAs */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1
              className="text-3xl sm:text-5xl lg:text-[66px] xl:text-[74px] font-[500] leading-[1.12] lg:leading-[76px] xl:leading-[84px] tracking-[-0.03em] hero-title-gradient"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              <span className="break-words sm:whitespace-nowrap">AI-Assisted Software &amp;</span>
              <br />
              <span className="break-words sm:whitespace-nowrap">Product Development</span>
              <br />
              Company
            </h1>

            <p className="text-gray-600 text-[14px] leading-relaxed font-normal max-w-lg">
              {data?.subtext ||
                'We design, build and modernize web, mobile, SaaS and enterprise products—combining software engineering, automation and AI to solve real business challenges.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={data?.primaryCta?.href || '/contact'}
                className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-[#0B4785] hover:bg-[#083566] text-white font-semibold px-8 transition-all duration-200 text-[15px] shadow-sm"
              >
                {data?.primaryCta?.label || 'Book Free Consultation'}
              </Link>
              <Link
                href={data?.secondaryCta?.href || '/work'}
                className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center border border-[#14B8A6] text-[#0B4785] hover:bg-[#14B8A6]/5 font-semibold px-8 transition-all duration-200 text-[15px]"
              >
                {data?.secondaryCta?.label || 'View Our Portfolio'}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 pt-6">
              <div className="w-8 h-8 rounded-full border border-[#0B4785] flex items-center justify-center text-[#0B4785]">
                <ArrowDown size={14} />
              </div>
              <span className="text-[14px] font-medium text-gray-700">Scroll</span>
            </div>
          </div>

          {/* Right Column: Exact Triangular Video Mask */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[460px] aspect-[1/1.1] flex items-center justify-center">
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 100%, 65% 100%, 50% 64%, 35% 100%, 0% 100%)',
                }}
              >
                <video
                  src="/Travash-video.mp4"
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
