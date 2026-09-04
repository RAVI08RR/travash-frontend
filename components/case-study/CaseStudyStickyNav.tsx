'use client'

import React from 'react'

export interface CaseStudyNavSection {
  id: string
  label: string
  number: string
  title?: string
}

interface CaseStudyStickyNavProps {
  sections: CaseStudyNavSection[]
  activeSection: string
  onSectionClick: (id: string) => void
  eyebrow?: string
  title?: string
}

export default function CaseStudyStickyNav({
  sections,
  activeSection,
  onSectionClick,
  eyebrow = 'CASE STUDY',
  title = 'Project Journey',
}: CaseStudyStickyNavProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_24px_rgba(2,46,84,0.04)]"
    >
      {/* Eyebrow Label */}
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#02487D] block mb-1.5">
        {eyebrow}
      </span>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight mb-6 line-clamp-2 leading-snug">
        {title}
      </h3>

      {/* Vertical Navigation Timeline Track */}
      <div className="relative pl-2">
        {/* Continuous vertical baseline track */}
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-[#E8EEF5] rounded-full" />

        <ul className="flex flex-col gap-3 relative">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id

            return (
              <li key={sec.id}>
                <button
                  type="button"
                  onClick={() => onSectionClick(sec.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group w-full flex items-center gap-3.5 text-left py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02487D] rounded-md ${
                    isActive
                      ? 'text-[#02487D]'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  {/* Indicator Dot on the vertical line */}
                  <span
                    className={`w-[12px] h-[12px] rounded-full border-2 transition-all duration-200 flex-shrink-0 z-10 ${
                      isActive
                        ? 'border-[#02487D] bg-[#02487D] ring-4 ring-[#02487D]/15 scale-110'
                        : 'border-[#CBD5E1] bg-white group-hover:border-[#02487D]/60'
                    }`}
                  />

                  {/* 2-Digit Number & Label */}
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span
                      className={`text-[11px] font-mono tracking-tight transition-colors ${
                        isActive
                          ? 'font-bold text-[#02487D]'
                          : 'font-medium text-[#94A3B8] group-hover:text-[#64748B]'
                      }`}
                    >
                      {sec.number}
                    </span>
                    <span
                      className={`text-sm transition-all truncate ${
                        isActive
                          ? 'font-bold text-[#0F172A]'
                          : 'font-medium text-[#64748B] group-hover:text-[#0F172A]'
                      }`}
                    >
                      {sec.label}
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
