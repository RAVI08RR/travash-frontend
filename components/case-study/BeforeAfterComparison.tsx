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
  subtitle = 'Transformation from manual / fragmented processes to AI-assisted digital verification.',
  beforeTitle = 'BEFORE SATYAPAAN',
  afterTitle = 'AFTER SATYAPAAN',
  before,
  after,
}: BeforeAfterProps) {
  return (
    <section id="transformation" className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            Operational Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 2 Comparison Columns with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Left Column: Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FFF5F5] border border-[#FED7D7] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#E53E3E]" />
                <h3 className="text-sm sm:text-base font-bold text-[#9B2C2C] tracking-wider uppercase">
                  {beforeTitle}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {before.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-[#E53E3E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 leading-relaxed font-normal">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#16A34A]" />
                <h3 className="text-sm sm:text-base font-bold text-[#166534] tracking-wider uppercase">
                  {afterTitle}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {after.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 leading-relaxed font-semibold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
