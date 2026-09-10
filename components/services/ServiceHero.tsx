'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import type { ServiceHero as ServiceHeroType } from '@/lib/service-data'

interface ServiceHeroProps {
  hero: ServiceHeroType
  serviceTitle: string
}

export default function ServiceHero({ hero, serviceTitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#F4F8FC] via-white to-white pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-14 lg:pb-24 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      {/* Subtle ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#0284C7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 flex-wrap"
        >
          <Link href="/" className="hover:text-[#004771] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <Link href="/services" className="hover:text-[#004771] transition-colors font-medium">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-[#004771] font-semibold truncate max-w-[280px] sm:max-w-none">
            {serviceTitle}
          </span>
        </motion.nav>

        {/* Hero Content Block */}
        <div className="max-w-4xl lg:max-w-5xl flex flex-col justify-center">
          {/* Eyebrow Pill */}
          {hero.eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004771]/5 border border-[#004771]/15 text-[#004771] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span>{hero.eyebrow}</span>
            </motion.div>
          )}

          {/* Main H1 Headline with Travash Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[68px] font-[500] leading-[1.14] lg:leading-[68px] xl:leading-[80px] tracking-[-0.03em] hero-title-gradient mb-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {hero.title}
          </motion.h1>

          {/* Supporting Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed font-normal max-w-3xl mb-9"
          >
            {hero.description}
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 w-full mb-9"
          >
            {hero.primaryCTA && (
              <Link
                href={hero.primaryCTA.href || '#contact'}
                className="btn-global h-[60px] sm:h-[66px] rounded-[5px] !w-auto min-w-[220px] max-w-full inline-flex items-center justify-center bg-[#0B4785] hover:bg-[#083566] text-white font-semibold px-8 text-[15px] sm:text-[16px] transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{hero.primaryCTA.label}</span>
                <ArrowUpRight className="w-4 h-4 ml-2.5 flex-shrink-0" />
              </Link>
            )}

            {hero.secondaryCTA && (
              <Link
                href={hero.secondaryCTA.href || '#case-studies'}
                className="btn-global h-[60px] sm:h-[66px] rounded-[5px] !w-auto min-w-[220px] max-w-full inline-flex items-center justify-center border border-[#14B8A6] text-[#0B4785] hover:bg-[#14B8A6]/5 font-semibold px-8 text-[15px] sm:text-[16px] transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{hero.secondaryCTA.label}</span>
              </Link>
            )}
          </motion.div>

          {/* Highlights / Feature Badges */}
          {hero.highlights && hero.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1"
            >
              {hero.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/90 text-gray-700 text-xs sm:text-[13px] font-medium shadow-2xs hover:border-[#02487D]/30 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  {highlight}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
