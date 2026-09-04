'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import type { ServiceFAQ as FAQType } from '@/lib/service-data'

interface ServiceFAQProps {
  faqs: FAQType[]
  serviceTitle?: string
}

export default function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Sticky Title) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
                Common Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Key technical considerations regarding security, compliance, migration timelines, and team integration for {serviceTitle || 'enterprise software engineering'}.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accessible FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              const questionId = `faq-q-${idx}`
              const answerId = `faq-a-${idx}`

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0B4785]/40 shadow-xs'
                      : 'bg-white border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#0B4785] text-white rotate-180'
                          : 'bg-[#EEF4FB] text-[#0B4785]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed font-normal border-t border-gray-100">
                          {faq.answer}
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
