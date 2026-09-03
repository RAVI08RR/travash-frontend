'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'the-challenge', label: 'The Challenge' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'solution', label: 'The Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'technology-stack', label: 'Tech Stack' },
  { id: 'transformation', label: 'Before & After' },
]

export default function CaseStudySubNav() {
  const [activeId, setActiveId] = useState<string>('overview')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show subnav once scrolled down past hero (> 500px)
      if (window.scrollY > 480) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 180

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i]
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveId(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      })
      setActiveId(id)
    }
  }

  if (!isVisible) return null

  return (
    <aside
      aria-label="Case study sections navigation"
      className="sticky top-20 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B4785] text-white shadow-xs'
                      : 'text-gray-600 hover:text-[#0B4785] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#0B4785] hover:bg-[#083566] text-white text-xs font-semibold transition-colors duration-200 shadow-xs flex-shrink-0 ml-4"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </aside>
  )
}
