'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import type { ServiceTrustSection } from '@/lib/service-data'

export default function ServiceTrust({ trust }: { trust: ServiceTrustSection }) {
  if (!trust) return null

  return (
    <section id="why-travash" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
                Enterprise Authority
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                {trust.heading || 'Why Global Leaders Trust Travash'}
              </h2>
              {trust.description && (
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-8">
                  {trust.description}
                </p>
              )}

              {/* Trust Points */}
              {trust.trustPoints && trust.trustPoints.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {trust.trustPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>

          {/* Right Column: Key Authority Stats Grid */}
          <div className="lg:col-span-7">
            {trust.stats && trust.stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trust.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-8 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center mb-5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none mb-2">
                        {stat.value}
                      </div>
                      <h4 className="text-base font-bold text-[#0B4785] mb-1">
                        {stat.label}
                      </h4>
                      {stat.description && (
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                          {stat.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
