'use client'

import React, { useState, useEffect, useRef } from 'react'
import CaseStudyStickyNav, { type CaseStudyNavSection } from './CaseStudyStickyNav'

interface CaseStudyLayoutProps {
  sections: CaseStudyNavSection[]
  eyebrow?: string
  title?: string
  children: React.ReactNode
}

export default function CaseStudyLayout({
  sections,
  eyebrow = 'CASE STUDY',
  title,
  children,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '')
  const isManualScrolling = useRef<boolean>(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // IntersectionObserver scroll-spy
  useEffect(() => {
    if (typeof window === 'undefined' || sections.length === 0) return

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (isManualScrolling.current) return

      // Filter intersecting entries
      const visibleEntries = entries.filter((e) => e.isIntersecting)
      if (visibleEntries.length > 0) {
        // Pick entry closest to our reading line (120px below navbar)
        visibleEntries.sort((a, b) => {
          return Math.abs(a.boundingClientRect.top - 120) - Math.abs(b.boundingClientRect.top - 120)
        })
        const id = visibleEntries[0].target.getAttribute('id')
        if (id) setActiveSection(id)
      }
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: [0, 0.1, 0.5],
    })

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [sections])

  // Smooth scroll handler with header offset
  const handleSectionClick = (id: string) => {
    setActiveSection(id)
    isManualScrolling.current = true

    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false
    }, 800)
  }

  return (
    <div className="relative bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A]">
      {/* Mobile Horizontal Scrollable Section Tabs (< 1024px) */}
      <div className="lg:hidden sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-2.5 px-4 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleSectionClick(section.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${isActive
                    ? 'bg-[#02487D] text-white shadow-xs'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                  }`}
              >
                <span className="opacity-70 mr-1.5 font-mono">{section.number}</span>
                {section.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Container with Desktop Two-Column Layout (>= 1024px) */}
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
          {/* Left Column: Premium Sticky Navigation (strictly inside container) */}
          <aside
            className="hidden lg:block sticky h-fit self-start"
            style={{ top: 'calc(var(--header-height, 80px) + 20px)' }}
          >
            <CaseStudyStickyNav
              sections={sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
              eyebrow={eyebrow}
              title={title}
            />
          </aside>

          {/* Right Column: Scrolling Editorial Content */}
          <div className="min-w-0 flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
