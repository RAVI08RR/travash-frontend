'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquareCode } from 'lucide-react'
import type { ServiceFinalCTA } from '@/lib/service-data'

export default function ServiceCTA({ cta }: { cta: ServiceFinalCTA }) {
  if (!cta) return null

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#002E54] text-white rounded-3xl p-8 sm:p-14 lg:p-16 shadow-xl relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6] block mb-3">
              Actionable Execution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              {cta.heading}
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal mb-8 sm:mb-10">
              {cta.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {cta.primaryCTA && (
                <Link
                  href={cta.primaryCTA.href || '#contact'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-white text-[#002E54] hover:bg-gray-100 font-bold px-8 text-sm transition-all duration-200 shadow-md w-full sm:w-auto active:scale-95"
                >
                  <span>{cta.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}

              {cta.secondaryCTA && (
                <Link
                  href={cta.secondaryCTA.href || '#contact'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-sm transition-all duration-200 w-full sm:w-auto"
                >
                  <MessageSquareCode className="w-4 h-4 mr-2" />
                  <span>{cta.secondaryCTA.label}</span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
