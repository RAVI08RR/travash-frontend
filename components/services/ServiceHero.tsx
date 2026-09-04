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
  const bgImage =
    hero.backgroundImage ||
    (typeof hero.heroImage === 'string' ? hero.heroImage : hero.heroImage?.asset?.url) ||
    '/images/services/hero-bg.webp'

  return (
    <section
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center pt-10 pb-16 sm:pt-36 sm:pb-20 lg:pt-20 lg:pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(2, 46, 84, 0.92) 0%, rgba(2, 72, 125, 0.88) 60%, rgba(3, 94, 158, 0.90) 100%), url('${bgImage}')`,
      }}
    >
      {/* Ambient glowing radial lights for rich depth */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[400px] h-[400px] bg-[#0284C7]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric grid backdrop overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-6 sm:mb-8 flex-wrap"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
          <span className="text-[#38BDF8] font-semibold truncate max-w-[280px] sm:max-w-none">
            {serviceTitle}
          </span>
        </motion.nav>

        {/* Hero Content Block */}
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          {hero.eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{hero.eyebrow}</span>
            </motion.div>
          )}

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-[-1.5px] leading-[1.14] mb-6"
          >
            {hero.title}
          </motion.h1>

          {/* Supporting Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10"
          >
            {hero.description}
          </motion.p>

          {/* Dual Buttons with dynamic width to keep text on a single line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 w-full mb-10"
          >
            {hero.primaryCTA && (
              <Link
                href={hero.primaryCTA.href || '#contact'}
                className="btn-global h-[66px] rounded-[5px] !w-auto min-w-[220px] max-w-full inline-flex items-center justify-center bg-white text-[#02487D] hover:bg-transparent hover:text-white font-bold px-7 sm:px-8 text-[15px] sm:text-[16px] border border-white transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{hero.primaryCTA.label}</span>
                <ArrowUpRight className="w-4 h-4 ml-2.5 flex-shrink-0" />
              </Link>
            )}

            {hero.secondaryCTA && (
              <Link
                href={hero.secondaryCTA.href || '#case-studies'}
                className="btn-global h-[66px] rounded-[5px] !w-auto min-w-[220px] max-w-full inline-flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-[#02487D] font-semibold px-7 sm:px-8 text-[15px] sm:text-[16px] border border-white transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{hero.secondaryCTA.label}</span>
              </Link>
            )}
          </motion.div>

          {/* Highlights / Pills */}
          {hero.highlights && hero.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              {hero.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-medium hover:bg-white/15 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
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
