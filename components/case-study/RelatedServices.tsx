'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Database, Code2 } from 'lucide-react'

const DEFAULT_RELATED_SERVICES = [
  {
    title: 'AI & Data Engineering',
    slug: 'ai-data-engineering',
    description:
      'Custom machine learning models, computer vision systems, and automated biometric verification pipelines.',
    icon: Cpu,
    highlights: ['Computer Vision & Facial Biometrics', 'Edge AI & Deep Learning', 'Document Intelligence & OCR'],
  },
  {
    title: 'Software Engineering',
    slug: 'software-engineering',
    description:
      'High-performance web applications, resilient microservices backends, and cloud platforms built for scale.',
    icon: Code2,
    highlights: ['Custom Enterprise Web Platforms', 'Microservices Architecture', 'High-Concurrency APIs'],
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    description:
      'Transform raw operational data into actionable intelligence with modern pipelines and analytics dashboards.',
    icon: Database,
    highlights: ['Real-Time Stream Processing', 'Cloud Lakehouse Architecture', 'High-Throughput Verification'],
  },
]

export default function RelatedServices() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] border-t border-[#E8EEF5]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#02487D] bg-[#EDF5FD] px-3 py-1 rounded-full inline-block mb-3">
            CAPABILITIES IN PRODUCTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18] mb-4">
            Related Engineering Services
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Explore the core engineering disciplines and technology practices utilized to architect and scale this solution.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {DEFAULT_RELATED_SERVICES.map((service, idx) => {
            const Icon = service.icon
            const href = `/services/${service.slug}`

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between hover:border-[#02487D]/40 hover:shadow-[0_16px_36px_rgba(2,72,125,0.08)] transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDF5FD] text-[#02487D] flex items-center justify-center mb-6 group-hover:bg-[#02487D] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#02487D] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-8">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#02487D]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#02487D] group-hover:text-[#0369A1] transition-colors pt-4 border-t border-[#F1F5F9]"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
