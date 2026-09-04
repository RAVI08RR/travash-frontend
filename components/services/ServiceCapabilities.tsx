'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react'
import type { ServiceCapability } from '@/lib/service-data'

interface ServiceCapabilitiesProps {
  capabilities: ServiceCapability[]
  serviceTitle?: string
  capabilitiesImage?: string
}

export default function ServiceCapabilities({
  capabilities,
  serviceTitle,
  capabilitiesImage = '/images/services/analytics.webp',
}: ServiceCapabilitiesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!capabilities || capabilities.length === 0) return null

  const isImageValid =
    typeof capabilitiesImage === 'string' &&
    (capabilitiesImage.startsWith('/') ||
      capabilitiesImage.startsWith('http://') ||
      capabilitiesImage.startsWith('https://'))
  const imageSrc = isImageValid ? capabilitiesImage : '/images/services/analytics.webp'

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section
      id="capabilities"
      className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#066095] block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#3D3C3C] tracking-tight leading-tight">
            Our {serviceTitle || 'Data & Analytics'} Services: What We Build
          </h2>
        </motion.div>

        {/* 2-Column Grid: Left Sticky Image, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Image (analytics.webp) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-gray-200/90 bg-white group"
            >
              <Image
                src={imageSrc}
                alt="Our Data & Analytics Services - What We Build"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Interactive Capabilities Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {capabilities.map((cap, idx) => {
              const isOpen = openIndex === idx

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${isOpen
                      ? 'bg-white border-[#02487D]/40 shadow-sm'
                      : 'bg-white border-gray-200/90 hover:border-gray-300'
                    }`}
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  >
                    <span
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors ${isOpen ? 'text-[#02487D]' : 'text-gray-900'
                        }`}
                    >
                      {cap.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen
                          ? 'bg-[#02487D] text-white rotate-180'
                          : 'bg-[#EEF4FB] text-[#02487D]'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-700 leading-relaxed font-normal border-t border-gray-100 flex flex-col gap-4">
                          {cap.shortDescription && (
                            <p className="text-sm sm:text-base text-gray-700 font-medium pt-2">
                              {cap.shortDescription}
                            </p>
                          )}

                          {/* Problem, Solution, Impact Breakdown */}
                          {cap.problem && (
                            <div className="p-3.5 rounded-xl bg-[#FFF8F8] border border-[#FED7D7]/70">
                              <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#9B2C2C] uppercase tracking-wider">
                                <AlertCircle className="w-3.5 h-3.5 text-[#E53E3E]" />
                                <span>The Problem</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 font-normal">
                                {cap.problem}
                              </p>
                            </div>
                          )}

                          {cap.solution && (
                            <div className="p-3.5 rounded-xl bg-[#EEF4FB] border border-[#D5E4F5]/70">
                              <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#02487D] uppercase tracking-wider">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#02487D]" />
                                <span>The Solution</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 font-normal">
                                {cap.solution}
                              </p>
                            </div>
                          )}

                          {cap.businessImpact && (
                            <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]/70">
                              <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#166534] uppercase tracking-wider">
                                <TrendingUp className="w-3.5 h-3.5 text-[#16A34A]" />
                                <span>The Business Impact</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 font-normal">
                                {cap.businessImpact}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
