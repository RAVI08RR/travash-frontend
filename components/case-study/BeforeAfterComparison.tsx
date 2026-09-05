'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'

interface BeforeAfterProps {
  title?: string
  subtitle?: string
  beforeTitle?: string
  afterTitle?: string
  before: string[]
  after: string[]
}

export default function BeforeAfterComparison({
  title = 'Before vs. After',
  subtitle = 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow',
  beforeTitle = 'BEFORE SATYAAPAN',
  afterTitle = 'AFTER SATYAAPAN',
  before,
  after,
}: BeforeAfterProps) {
  return (
    <section id="transformation" className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12]">
              {title}
            </h2>
          </motion.div>

          {/* Right Column: Subtitle + 2 Comparison Cards matching screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-5"
          >
            {subtitle && (
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                {subtitle}
              </h3>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Left Column: Before */}
              <div className="rounded-2xl overflow-hidden shadow-xs border border-gray-100/80 bg-[#F4F6FB] flex flex-col">
                <div className="bg-[#0B3B66] text-white px-5 py-3 text-center">
                  <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase">
                    {beforeTitle}
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col gap-3.5 flex-1 justify-start">
                  {before.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: After */}
              <div className="rounded-2xl overflow-hidden shadow-xs border border-gray-100/80 bg-[#F4F6FB] flex flex-col">
                <div className="bg-[#0B3B66] text-white px-5 py-3 text-center">
                  <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase">
                    {afterTitle}
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col gap-3.5 flex-1 justify-start">
                  {after.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B3B66] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
