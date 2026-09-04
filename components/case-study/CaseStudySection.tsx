'use client'

import React from 'react'

interface CaseStudySectionProps {
  id: string
  number?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  showHeader?: boolean
}

export default function CaseStudySection({
  id,
  number,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  showHeader = false,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      data-section-id={id}
      style={{ scrollMarginTop: 'calc(var(--header-height, 80px) + 30px)' }}
      className={`scroll-mt-[110px] py-10 sm:py-14 first:pt-2 border-b border-gray-100 last:border-b-0 ${className}`}
    >
      {showHeader && (title || eyebrow) && (
        <div className="mb-8 lg:mb-10">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#02487D] mb-2">
            {number && <span className="font-mono text-[#64748B]">{number}</span>}
            {number && <span className="text-gray-300">—</span>}
            <span>{eyebrow || title}</span>
          </div>
          {title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div>{children}</div>
    </section>
  )
}
