'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface TheImpactProps {
  title?: string
  subtitle?: string
  content?: string
  outcomes?: string[]
}

export default function TheImpact({
  title = 'The Impact',
  subtitle,
  content = 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow Reduced manual effort and accelerated verification turnaround times. Improved accuracy and consistency across every verification request. Automated repetitive checks to minimize operational bottlenecks. Enabled faster processing of high-volume verification workloads. Freed teams to focus on complex cases and critical decisions. Created a scalable workflow that supports growing business demands.',
  outcomes,
}: TheImpactProps) {
  return (
    <section id="impact" className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-3">
                {title}
              </h2>
              {subtitle && (
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                  {subtitle}
                </h3>
              )}
            </motion.div>
          </div>

          {/* Right Column: Narrative Text Block & Outcomes List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-4"
          >
            {content && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                {content}
              </p>
            )}

            {Array.isArray(outcomes) && outcomes.length > 0 && (
              <div className="flex flex-col gap-3 pt-2">
                {outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3B66] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

