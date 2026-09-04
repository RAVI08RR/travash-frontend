'use client'

import React from 'react'
import { FadeUpWeb } from '@/components/case-study/ScrollReveal'

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
      className={`py-12 sm:py-16 lg:py-20 ${bgClass} font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 ${className}`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Approx 35%): Sticky Section Heading on Desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <FadeUpWeb>
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
            </FadeUpWeb>
          </div>

          {/* Right Column (Approx 65%): Content / Cards / Grid with Web Fade-Up */}
          <div className="lg:col-span-8">
            <FadeUpWeb delay={0.15} className="flex flex-col gap-6">
              {children}
            </FadeUpWeb>
          </div>
        </div>
      </div>
    </section>
  )
}
