'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import type { ServiceTestimonial as TestimonialType } from '@/lib/service-data'

export default function ServiceTestimonial({ testimonial }: { testimonial: TestimonialType }) {
  if (!testimonial || !testimonial.quote) return null

  const hasValidAvatar =
    typeof testimonial.avatarImage === 'string' &&
    (testimonial.avatarImage.startsWith('/') ||
      testimonial.avatarImage.startsWith('http://') ||
      testimonial.avatarImage.startsWith('https://'))
  const avatarSrc: string =
    hasValidAvatar && testimonial.avatarImage
      ? testimonial.avatarImage
      : '/images/services/testimonial-avatar.jpeg'

  return (
    <section
      id="testimonial"
      className="py-14 sm:py-18 lg:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#066095] block mb-2">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#3D3C3C] tracking-tight leading-tight">
            What Technical Leaders Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#F8FAFC] border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-xs relative"
        >
          <Quote className="w-12 h-12 text-[#02487D]/15 mb-6" />

          <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal italic mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 relative">
                <Image
                  src={avatarSrc}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {testimonial.author}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {testimonial.role || 'Senior Leadership'} &bull; {testimonial.company || 'National Network'}
                </p>
              </div>
            </div>

            {testimonial.badge && (
              <span className="px-3.5 py-1.5 rounded-full bg-[#EEF4FB] text-[#02487D] text-xs font-bold border border-[#D5E4F5]">
                {testimonial.badge}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
