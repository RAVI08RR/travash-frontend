'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CaseStudyContentSectionProps {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  variant?: 'white' | 'gray' | 'blue'
  className?: string
}

export default function CaseStudyContentSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  variant = 'white',
  className = '',
}: CaseStudyContentSectionProps) {
  const bgClass =
    variant === 'gray'
      ? 'bg-[#F8FAFC]'
      : variant === 'blue'
      ? 'bg-[#F0F5FA]'
      : 'bg-white'

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClass} font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden ${className}`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Approx 35%): Sticky Section Heading matching Net Solutions */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && (
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
                  {eyebrow}
                </span>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>

          {/* Right Column (Approx 65%): Content / Cards / Grid with Staggered Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
