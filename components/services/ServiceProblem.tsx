'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import type { ServiceProblemSection } from '@/lib/service-data'

export default function ServiceProblem({ problem }: { problem: ServiceProblemSection }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Sticky Title) */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              {problem.label && (
                <span className="text-xs font-bold uppercase tracking-widest text-[#E53E3E] block mb-2">
                  {problem.label}
                </span>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                {problem.title || 'Outdated Spreadsheets & Data Silos'}
              </h2>
            </motion.div>
          </div>

          {/* Right Column (Editorial Narrative + Pain Point Cards) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {problem.headline && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug tracking-tight"
              >
                {problem.headline}
              </motion.h3>
            )}

            {problem.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal"
              >
                {problem.description}
              </motion.p>
            )}

            {/* Pain Points Grid */}
            {problem.painPoints && problem.painPoints.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {problem.painPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#FFF8F8] border border-[#FED7D7]/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:border-[#E53E3E]/50 hover:shadow-xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E53E3E] border border-[#FED7D7] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
