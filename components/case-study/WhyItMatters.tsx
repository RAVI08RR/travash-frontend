'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface WhyItMattersProps {
  title?: string
  subtitle?: string
  description?: string
  items: string[]
}

export default function WhyItMatters({
  title = 'Why This Matters',
  subtitle = 'Does Your Organization Face a Similar Challenge?',
  description = 'The objective is not simply to introduce AI.',
  items,
}: WhyItMattersProps) {
  return (
    <section className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-36 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-4">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug mb-4">
                {subtitle}
              </h3>
            )}
            {description && (
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>

          {/* Right Column: Framed Card matching PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 shadow-xs flex flex-col gap-6">
              <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0F172A]">
                THIS CASE STUDY IS RELEVANT FOR ORGANIZATIONS MANAGING:
              </h4>

              <div className="flex flex-col gap-3.5">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#02487D] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#334155] font-normal leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-[#E2E8F0]/80">
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                  It is to identify what can be automated, what should be flagged, and where human decision-making should remain in control.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
