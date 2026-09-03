'use client'

import { motion } from 'framer-motion'
import type { CaseStudyData } from '@/lib/case-study-data'

export default function CaseStudyMetrics({ data }: { data: CaseStudyData }) {
  const metrics = data.metrics || [
    {
      value: '1.96M',
      label: 'Passport Applications Processed',
      description: 'Centralized high-throughput verification at state scale',
    },
    {
      value: '800+',
      label: 'High-Risk Records Identified',
      description: 'Adverse cases intercepted before passport issuance',
    },
    {
      value: 'AI-Assisted',
      label: 'Verification Workflow',
      description: 'Automated data extraction, facial recognition & real-time matching',
    },
    {
      value: 'SIAC Certified',
      label: 'Security & Registry Compliance',
      description: 'Securing public registry and identity integrity statewide',
    },
  ]

  return (
    <section id="outcomes" className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading just like Net Solutions "Outcomes" */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
              Measurable Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Key Outcomes
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              High-impact quantitative milestones achieved by deploying automated digital screening across public safety workflows.
            </p>
          </div>

          {/* Right Column: High-Impact Bold Stat Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-start border-l-2 border-[#0B4785] pl-6 py-1"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none mb-3 font-sans">
                  {metric.value}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B4785] leading-snug mb-1.5">
                  {metric.label}
                </h3>
                {metric.description && (
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    {metric.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
