'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import type { ServiceHero as ServiceHeroType } from '@/lib/service-data'

interface ServiceHeroProps {
  hero: ServiceHeroType
  serviceTitle: string
}

export default function ServiceHero({ hero, serviceTitle }: ServiceHeroProps) {
  const heroImageSrc =
    typeof hero.heroImage === 'string'
      ? hero.heroImage
      : hero.heroImage?.asset?.url || '/home-img/satyapaan-min 2.png'

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-[#002E54] via-[#04477E] to-[#0B4785] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14B8A6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-6 sm:mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-[#14B8A6] font-semibold truncate max-w-[200px] sm:max-w-none">
            {serviceTitle}
          </span>
        </motion.nav>

        {/* 2-Column Hero Grid: Left Content, Right Visual */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            {hero.eyebrow && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  {hero.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/20 border border-[#14B8A6]/30 text-[#2DD4BF] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                  Enterprise Solutions
                </span>
              </motion.div>
            )}

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.12] mb-6"
            >
              {hero.title}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {hero.description}
            </motion.p>

            {/* CTAs with strict height: 66px and border-radius: 5px */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              {hero.primaryCTA && (
                <Link
                  href={hero.primaryCTA.href || '#contact'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-white text-[#04477E] hover:bg-gray-100 font-bold px-8 text-sm transition-all duration-200 shadow-md active:scale-95 w-full sm:w-auto"
                >
                  <span>{hero.primaryCTA.label}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Link>
              )}
              {hero.secondaryCTA && (
                <Link
                  href={hero.secondaryCTA.href || '#case-studies'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-sm transition-all duration-200 w-full sm:w-auto"
                >
                  {hero.secondaryCTA.label}
                </Link>
              )}
            </motion.div>

            {/* Highlights Pills Grid */}
            {hero.highlights && hero.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15"
              >
                {hero.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column: Hero Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden border border-white/20 shadow-2xl bg-black/20 backdrop-blur-xs group">
              <Image
                src={heroImageSrc}
                alt={hero.heroImageAlt || hero.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />

              {/* Floating Status Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg text-gray-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center font-bold">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">
                      Enterprise Modernization
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium">
                      Cloud &amp; Pipeline Architecture
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#EEFBF3] text-[#16A34A] text-[11px] font-bold border border-[#C6F5D8]">
                  Verified ROI
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
