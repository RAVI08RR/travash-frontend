'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react'
import type { ServiceCapability } from '@/lib/service-data'

interface ServiceCapabilitiesProps {
  capabilities: ServiceCapability[]
  serviceTitle?: string
}

export default function ServiceCapabilities({ capabilities, serviceTitle }: ServiceCapabilitiesProps) {
  return (
    <section id="capabilities" className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
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
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Our {serviceTitle || 'Data & Analytics'} Services: What We Build
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Modular, high-performance data engineering and analytics capabilities architected to eliminate bottlenecks and accelerate enterprise decision velocity.
          </p>
        </motion.div>

        {/* 2-Column High-Impact Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F8FAFC] border border-gray-200/90 rounded-3xl p-7 sm:p-9 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Title & Short Description */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4785] block mb-1">
                      Capability {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors duration-200 leading-snug">
                      {cap.title}
                    </h3>
                  </div>
                </div>

                {cap.shortDescription && (
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6">
                    {cap.shortDescription}
                  </p>
                )}

                {/* 3 Structured Breakdown Blocks: Problem, Solution, Business Impact */}
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-200/80">
                  {/* Problem */}
                  {cap.problem && (
                    <div className="bg-[#FFF8F8] border border-[#FED7D7]/70 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#9B2C2C] uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4 text-[#E53E3E]" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {cap.problem}
                      </p>
                    </div>
                  )}

                  {/* Solution */}
                  {cap.solution && (
                    <div className="bg-[#EEF4FB] border border-[#D5E4F5]/70 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#0B4785] uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-[#0B4785]" />
                        <span>The Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {cap.solution}
                      </p>
                    </div>
                  )}

                  {/* Business Impact */}
                  {cap.businessImpact && (
                    <div className="bg-[#F0FDF4] border border-[#BBF7D0]/70 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#166534] uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-[#16A34A]" />
                        <span>The Business Impact</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {cap.businessImpact}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies & Optional CTA Footer */}
              <div className="pt-6 mt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4">
                {cap.technologies && cap.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {cap.optionalCTA && (
                  <Link
                    href={cap.optionalCTA.href || '#contact'}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B4785] hover:text-[#083566] transition-colors ml-auto"
                  >
                    <span>{cap.optionalCTA.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
