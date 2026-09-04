'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, FileCheck, Clock, UserPlus, ArrowRight } from 'lucide-react'
import type { ServiceEngagementModel } from '@/lib/service-data'

const MODEL_ICONS: Record<string, typeof Users> = {
  users: Users,
  'file-check': FileCheck,
  clock: Clock,
  'user-plus': UserPlus,
}

export default function EngagementModels({ models }: { models: ServiceEngagementModel[] }) {
  if (!models || models.length === 0) return null

  return (
    <section id="engagement-models" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
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
            Collaboration Frameworks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            We provide elite engineering and data talent structured exactly how your organization operates.
          </p>
        </motion.div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, idx) => {
            const Icon = (model.icon && MODEL_ICONS[model.icon]) || Users
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Badge */}
                  {model.badge && (
                    <div className="mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#EEF4FB] text-[#0B4785] text-[11px] font-bold border border-[#D5E4F5]">
                        {model.badge}
                      </span>
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-2xl bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center mb-5 group-hover:bg-[#0B4785] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors mb-2 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {model.description}
                  </p>
                </div>

                {model.cta && (
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      href={model.cta.href || '#contact'}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4785] hover:text-[#083566] transition-colors"
                    >
                      <span>{model.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
