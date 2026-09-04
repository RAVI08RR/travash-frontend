'use client'

import { motion } from 'framer-motion'
import type { ServiceProcess as ProcessType } from '@/lib/service-data'

export default function ServiceProcess({ process }: { process: ProcessType }) {
  const steps = process.steps || []

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
                Engineering Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                {process.heading || 'Our Engineering Process'}
              </h2>
              {process.description && (
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {process.description}
                </p>
              )}
            </motion.div>
          </div>

          {/* Right Column: Numbered Timeline Steps */}
          <div className="lg:col-span-8 relative flex flex-col gap-6 pl-2 sm:pl-4">
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-[31px] sm:left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#0B4785] via-[#448AE1] to-gray-200 pointer-events-none" />

            {steps.map((step, idx) => {
              const stepNum = step.number || String(idx + 1).padStart(2, '0')
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-start gap-4 sm:gap-6 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#0B4785]/50 hover:shadow-md transition-all duration-300"
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0B4785] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm ring-4 ring-white group-hover:scale-110 group-hover:bg-[#0052FE] transition-all duration-300">
                    {stepNum}
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors duration-200 mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
