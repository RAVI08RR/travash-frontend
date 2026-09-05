'use client'

import { motion } from 'framer-motion'

interface TheImpactProps {
  title?: string
  content?: string
}

export default function TheImpact({
  title = 'The Impact',
  content = 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow Reduced manual effort and accelerated verification turnaround times. Improved accuracy and consistency across every verification request. Automated repetitive checks to minimize operational bottlenecks. Enabled faster processing of high-volume verification workloads. Freed teams to focus on complex cases and critical decisions. Created a scalable workflow that supports growing business demands.',
}: TheImpactProps) {
  return (
    <section id="impact" className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
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

          {/* Right Column: Narrative Text Block matching Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
              {content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
