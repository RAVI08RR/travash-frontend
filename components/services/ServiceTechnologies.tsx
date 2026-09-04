'use client'

import { motion } from 'framer-motion'
import type { ServiceTechnologyGroup } from '@/lib/service-data'

interface ServiceTechnologiesProps {
  technologyStack: ServiceTechnologyGroup[]
}

export default function ServiceTechnologies({ technologyStack }: ServiceTechnologiesProps) {
  if (!technologyStack || technologyStack.length === 0) return null

  return (
    <section id="technologies" className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
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
            Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            The Technologies We Command
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            We architect and deploy the industry’s most proven, scalable distributed infrastructure, database, and analytics frameworks.
          </p>
        </motion.div>

        {/* Categorized Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {technologyStack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F8FAFC] border border-gray-200/90 rounded-3xl p-7 sm:p-9 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4785] block mb-3">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {group.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-white text-gray-800 text-xs sm:text-sm font-semibold border border-gray-200/80 shadow-2xs hover:border-[#0B4785]/50 hover:text-[#0B4785] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {group.description && (
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal pt-4 border-t border-gray-200/80">
                  {group.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
