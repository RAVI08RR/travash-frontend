'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { CaseStudyData } from '@/lib/case-study-data'

function PoliceShieldIcon() {
  return (
    <div className="w-14 h-16 relative flex items-center justify-center mx-auto mt-2">
      <Image
        src="/casestudy-img/Telangana_Police_Logo-150x177.png"
        alt="Telangana State Police"
        width={56}
        height={66}
        className="w-auto h-full object-contain drop-shadow-sm"
      />
    </div>
  )
}

export default function CaseStudyMetrics({ data }: { data: CaseStudyData }) {
  const metrics = data.metrics || [
    {
      value: '1.96 Million',
      label: 'Passport applications processed',
    },
    {
      value: '800+',
      label: 'High-risk adverse cases identified and intercepted',
    },
    {
      value: 'AI–Assisted Verification',
      label: 'Automated data extraction, facial recognition and real-time matching',
    },
    {
      value: data.client || 'Telangana State Police',
      label: 'client-badge',
    },
  ]

  return (
    <section className="py-10 sm:py-14 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Cards Grid across the page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.slice(0, 4).map((metric, idx) => {
            const val = String(metric?.value || '')
            const isPoliceShield =
              data?.slug?.current === 'satyapaan' && (idx === 3 || metric.label === 'client-badge')

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#F8F8F8] rounded-2xl border border-[#E8EEF5] shadow-[0_4px_24px_rgba(2,46,84,0.04)] p-6 sm:p-7 text-center flex flex-col items-center justify-center min-h-[175px] hover:border-[#02487D]/30 hover:shadow-[0_8px_30px_rgba(2,72,125,0.08)] transition-all duration-300"
              >
                {/* Metric Value / Title */}
                <h3
                  className={`${
                    val.length > 15
                      ? 'text-lg sm:text-xl'
                      : 'text-2xl sm:text-3xl lg:text-[32px]'
                  } font-extrabold text-[#02487D] tracking-tight leading-snug mb-2`}
                >
                  {val}
                </h3>

                {/* Subtitle / Police Shield */}
                {isPoliceShield ? (
                  <PoliceShieldIcon />
                ) : (
                  <p className="text-xs sm:text-sm text-[#475569] leading-snug max-w-[240px]">
                    {metric.label === 'client-badge' ? data.client || 'Enterprise Deployment' : metric.label}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
