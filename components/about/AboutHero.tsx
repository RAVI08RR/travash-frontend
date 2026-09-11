'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, ShieldCheck, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react'

interface AboutHeroProps {
  data?: {
    eyebrow?: string
    heading?: string
    description?: string
    heroImage?: { asset?: { url: string } }
  }
}

export default function AboutHero({ data }: AboutHeroProps) {
  const eyebrow = data?.eyebrow || 'ABOUT TRAVASH'
  const heading =
    data?.heading ||
    'We are a team of great innovators, creators and differentiators with exceptional high standards.'
  const description =
    data?.description ||
    'Founded in 2005 with a clear vision: to transform technology from a business cost center into a powerful engine of growth, scalability, and competitive advantage for enterprises worldwide.'
  const imageUrl = data?.heroImage?.asset?.url || '/team.webp'

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F4F8FC] via-white to-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>{eyebrow}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] mb-6">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            {description}
          </p>

          {/* Quick Credibility Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 pb-8 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#14B8A6]" />
              <span>Founded in 2005</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#004771]" />
              <span>90%+ Client Retention</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
              <span>500+ Delivered Solutions</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span>Speak with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/career"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#004771] text-[#0B1E3D] hover:text-[#004771] font-semibold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all"
            >
              <Users className="w-4 h-4 text-[#004771]" />
              <span>Explore Careers & Team</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Team Showcase (70% Team Photo / 30% Information) */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white p-4 sm:p-6 lg:p-6 shadow-[0_16px_50px_rgba(11,71,133,0.08)]">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 items-center">
              {/* Left Side: 70% Team Image - Clean view without overlays so all members are visible */}
              <div className="w-full lg:w-[68%] xl:w-[70%]">
                <div className="relative w-full aspect-[16/9.2] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-gray-200/80 group">
                  <Image
                    src={imageUrl}
                    alt="Travash engineering team and leadership"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                </div>
              </div>

              {/* Right Side: 30% Content */}
              <div className="w-full lg:w-[32%] xl:w-[30%] flex flex-col justify-center space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>The Minds Behind Travash</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3D] tracking-tight leading-tight">
                    High-Impact Engineers & Technology Leaders
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    Decades of combined engineering excellence delivering mission-critical web, mobile, AI, and enterprise platforms globally.
                  </p>
                </div>

                {/* Badges / Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#004771]/10 text-[#004771] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#004771]" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Headquarters</div>
                      <div className="text-sm font-bold text-[#0B1E3D]">Hyderabad, India</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Global Delivery</div>
                      <div className="text-sm font-bold text-[#0B1E3D]">USA • UK • India</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-[#004771] shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-[#004771]" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Engineering Bench</div>
                      <div className="text-sm font-bold text-[#0B1E3D]">Full-Stack & Cloud Architects</div>
                    </div>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    href="/career"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all"
                  >
                    <span>Explore Careers & Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
