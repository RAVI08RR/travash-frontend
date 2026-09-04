'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Database, Users, Eye, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { ServiceSolutionOverview as SolutionType } from '@/lib/service-data'

const BENEFIT_ICONS: Record<string, typeof Database> = {
  database: Database,
  users: Users,
  eye: Eye,
}

export default function ServiceSolutionOverview({ solution }: { solution: SolutionType }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            Strategic Value
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            {solution.heading || 'How Travash Solves It'}
          </h2>
          {solution.description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {solution.description}
            </p>
          )}
        </motion.div>

        {/* 3 Strategic Benefit Cards Grid */}
        {solution.benefits && solution.benefits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {solution.benefits.map((benefit, idx) => {
              const Icon = (benefit.icon && BENEFIT_ICONS[benefit.icon]) || CheckCircle2
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-9 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0B4785] group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors duration-200 mb-3 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Consultation CTA */}
        {solution.cta && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <Link
              href={solution.cta.href || '#contact'}
              className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-[#0B4785] hover:bg-[#083566] text-white font-bold px-8 text-sm transition-all duration-200 shadow-md active:scale-95"
            >
              <span>{solution.cta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
