'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface WhyItMattersProps {
  title?: string
  subtitle?: string
  items: string[]
}

export default function WhyItMatters({
  title = 'Why This Matters',
  subtitle = 'Does Your Organization Face a Similar Challenge?',
  items,
}: WhyItMattersProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-36"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
              Strategic Relevance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              {title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {subtitle}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-normal mt-3">
              This case study is highly relevant for civic authorities, enterprises, and public-sector leaders evaluating scalable, automated identity solutions.
            </p>
          </motion.div>

          {/* Right Column: Challenge Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:border-[#0B4785]/40 hover:bg-white hover:shadow-sm group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0B4785] group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
