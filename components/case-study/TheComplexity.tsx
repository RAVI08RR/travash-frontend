'use client'

import { motion } from 'framer-motion'

interface ComplexityItem {
  title: string
  description: string
}

interface TheComplexityProps {
  title?: string
  intro?: string
  items?: ComplexityItem[]
}

const DEFAULT_COMPLEXITY_ITEMS: ComplexityItem[] = [
  {
    title: 'HIGH APPLICATION VOLUME',
    description:
      'The platform needed to operate at a scale that ultimately reached 1.96 million processed applications.',
  },
  {
    title: 'IDENTITY MATCHING',
    description:
      'Applicant information needed to be evaluated for duplicate and potentially fraudulent identity scenarios.',
  },
  {
    title: 'MULTIPLE VERIFICATION SOURCES',
    description:
      'The workflow incorporated relevant records and technologies including DARPAN and AFIS – Automated Fingerprint Identification System.',
  },
  {
    title: 'EXCEPTION HANDLING',
    description:
      'Potential anomalies needed to be identified automatically while authorized officers remained responsible for further investigation.',
  },
]

export default function TheComplexity({
  title = 'The Complexity',
  intro = 'Satyaapan needed to operate within a sensitive public–safety workflow where application volume, identity verification and appropriate escalation were all critical.',
  items = DEFAULT_COMPLEXITY_ITEMS,
}: TheComplexityProps) {
  const complexityItems = items && items.length > 0 ? items : DEFAULT_COMPLEXITY_ITEMS

  return (
    <section className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] border-t border-[#F1F5F9]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (Approx 35%): Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12]">
              {title}
            </h2>
          </motion.div>

          {/* Right Column (Approx 65%): Intro & 2x2 Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col"
          >
            {/* Intro paragraph */}
            {intro && (
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8 max-w-3xl">
                {intro}
              </p>
            )}

            {/* 2x2 Clean Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {complexityItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-xl p-6 sm:p-7 border border-[#E2E8F0]/70 flex flex-col justify-start hover:border-[#02487D]/30 hover:bg-[#F1F5F9]/60 transition-all duration-200"
                >
                  <h3 className="text-xs sm:text-[13px] font-bold tracking-wider text-[#02487D] uppercase mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
