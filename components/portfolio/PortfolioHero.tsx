'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Layers, Sparkles, ShieldCheck } from 'lucide-react'

interface PortfolioHeroProps {
  totalCount?: number
}

export default function PortfolioHero({ totalCount = 26 }: PortfolioHeroProps) {
  return (
    <section
      className="relative min-h-[420px] lg:min-h-[480px] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-white overflow-hidden bg-[#022E54]"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(2, 46, 84, 0.96) 0%, rgba(2, 72, 125, 0.92) 60%, rgba(3, 94, 158, 0.94) 100%), url('/images/services/hero-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Ambient glowing radial lights */}
      <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[420px] h-[420px] bg-[#0284C7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
          <span className="text-[#38BDF8] font-semibold">Portfolio & Case Studies</span>
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>OUR WORK</span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-[-1.5px] leading-[1.14] mb-6"
          >
            Real Problems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#93C5FD]">
              Measurable Outcomes.
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-normal mb-8"
          >
            Explore digital products, enterprise platforms, AI solutions, and custom software systems
            built by Travash for organizations across industries.
          </motion.p>

          {/* Value Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white">
              <Layers className="w-4 h-4 text-[#38BDF8]" />
              <span>{totalCount}+ Shipped Systems</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Public Sector & Enterprise Grade</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>AI-Powered & Production-Proven</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
