'use client'

import { motion } from 'framer-motion'
import { Quote, ShieldCheck } from 'lucide-react'
import type { ServiceTestimonial as TestimonialType } from '@/lib/service-data'

export default function ServiceTestimonial({ testimonial }: { testimonial: TestimonialType }) {
  if (!testimonial || !testimonial.quote) return null

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
              Stakeholder Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              What Technical Leaders Say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Direct perspective on the scalability, operational stability, and execution velocity of Travash engineering.
            </p>
          </motion.div>

          {/* Right Column: Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="bg-[#F8FAFC] border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
              <Quote className="w-12 h-12 text-[#0B4785]/20 mb-6" />

              <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal italic mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center font-bold text-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {testimonial.role} &bull; {testimonial.company}
                    </p>
                  </div>
                </div>

                {testimonial.badge && (
                  <span className="px-3.5 py-1 rounded-full bg-[#EEF4FB] text-[#0B4785] text-xs font-bold border border-[#D5E4F5]">
                    {testimonial.badge}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
