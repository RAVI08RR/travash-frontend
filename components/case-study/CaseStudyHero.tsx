'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, ShieldCheck, MapPin, Cpu } from 'lucide-react'
import type { CaseStudyData } from '@/lib/case-study-data'

const META_ICONS: Record<string, typeof Building2> = {
  Industry: Building2,
  Solution: ShieldCheck,
  Region: MapPin,
  'Core Capabilities': Cpu,
}

export default function CaseStudyHero({ data }: { data: CaseStudyData }) {
  const metadata = data.projectMeta || [
    { label: 'Industry', value: data.industry || 'Government / Public Sector' },
    { label: 'Solution', value: 'Enterprise AI + Passport Verification' },
    { label: 'Region', value: data.location || 'India' },
    {
      label: 'Core Capabilities',
      value: 'AI, Automated Data Extraction, Facial Recognition, Verification Automation',
    },
  ]

  const heroVisual = data.heroImage?.asset?.url || '/Satyaapan.svg'

  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#F0F5FA] via-[#F8FAFC] to-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-[#0B4785] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/#case-studies" className="hover:text-[#0B4785] transition-colors">
            Case Studies
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0B4785] font-semibold truncate max-w-[200px] sm:max-w-none">
            {data.client || 'Satyapaan'}
          </span>
        </nav>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B4785]/10 border border-[#0B4785]/20 text-[#0B4785] text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
          <span>{data.category || 'Enterprise AI / Public Sector'}</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-[#151515] tracking-tight leading-[1.15] max-w-5xl mb-6">
          {data.title}
        </h1>

        {/* Short Description */}
        {data.shortDescription && (
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mb-10 sm:mb-12 font-normal">
            {data.shortDescription}
          </p>
        )}

        {/* Two Column Hero Detail: Project Information on Left, Visual Badge on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-2">
          {/* Left: Project Metadata Items */}
          <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-sm flex flex-col justify-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
              Project Overview &amp; Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {metadata.map((item, idx) => {
                const Icon = META_ICONS[item.label] || ShieldCheck
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] border border-[#D5E4F5] text-[#0B4785] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-medium block uppercase tracking-wide">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-[15px] text-gray-900 font-semibold mt-0.5 block leading-snug">
                        {item.value}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Project Visual / Badge Emblem */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#073B6C] to-[#0B4785] rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#14B8A6]/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#14B8A6] block mb-2">
                Government Initiative
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                {data.client || 'Telangana State Police'}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Centralized high-throughput passport verification system built to eliminate bottlenecks and strengthen public integrity.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-auto flex items-center justify-between border-t border-white/10">
              <div className="relative h-12 w-36">
                <Image
                  src={heroVisual}
                  alt={data.client || 'Satyapaan Project Emblem'}
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                />
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-sm border border-white/10">
                Verified Deploy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
