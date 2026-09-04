'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import type { RelatedCaseStudy } from '@/lib/service-data'

interface ServiceCaseStudiesProps {
  caseStudies: RelatedCaseStudy[]
  serviceTitle?: string
}

export default function ServiceCaseStudies({ caseStudies, serviceTitle }: ServiceCaseStudiesProps) {
  if (!caseStudies || caseStudies.length === 0) return null

  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            Proven Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            {serviceTitle ? `${serviceTitle} Case Studies` : 'Real Problems. Measurable Outcomes.'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            See how our enterprise engineering teams architect and deploy mission-critical systems that deliver tangible ROI.
          </p>
        </motion.div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => {
            const imageSrc =
              study.featureImage?.asset?.url ||
              study.heroImage?.asset?.url ||
              '/home-img/satyapaan-min 2.png'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#F8FAFC] border border-gray-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={imageSrc}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-bold text-[#0B4785] border border-white/50">
                      {study.category || 'Case Study'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {study.client && (
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        {study.client}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors leading-snug mb-3">
                      {study.title}
                    </h3>
                    {study.shortDescription && (
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3 mb-6">
                        {study.shortDescription}
                      </p>
                    )}

                    {/* Metrics Row */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/80 mb-4">
                        {study.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-lg font-black text-[#0B4785]">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-gray-500 font-medium leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4785] hover:text-[#083566] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
