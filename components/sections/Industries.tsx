'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Industry {
  name: string
  image: string
  href: string
}

const ALL_INDUSTRIES: Industry[] = [
  {
    name: 'E-commerce & Retail',
    image: '/home-img/Frame.png',
    href: '/industries/ecommerce',
  },
  {
    name: 'Travel & Hospitality',
    image: '/home-img/Frame-1.png',
    href: '/industries/travel',
  },
  {
    name: 'Health & Wellness',
    image: '/home-img/Frame-2.png',
    href: '/industries/health',
  },
  {
    name: 'Recruitment & HR',
    image: '/home-img/Frame-3.png',
    href: '/industries/recruitment',
  },
  {
    name: 'Real Estate & Construction',
    image: '/home-img/Frame-4.png',
    href: '/industries/real-estate',
  },
  {
    name: 'Government & Public Sector',
    image: 'https://travash.com/wp-content/uploads/2026/08/Government-Public-Sector.png',
    href: '/industries/government',
  },
  {
    name: 'Banking & Financial Services',
    image: 'https://travash.com/wp-content/uploads/2026/08/Banking-Financial-Services.webp',
    href: '/industries/fintech',
  },
  {
    name: 'Manufacturing',
    image: '/home-img/Manufacturing (1).png',
    href: '/industries/manufacturing',
  },
]

export default function Industries({ data }: { data?: { heading?: string } }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalItems = ALL_INDUSTRIES.length
  // Max starting index so 5 items are displayed on desktop without empty space
  // We can cycle smoothly across all dots
  const totalDots = 7

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalDots)
    }, 3500)
    return () => clearInterval(interval)
  }, [isPaused, totalDots])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 50) {
      // swipe left -> next
      setCurrentIndex((prev) => (prev + 1) % totalDots)
    } else if (diff < -50) {
      // swipe right -> prev
      setCurrentIndex((prev) => (prev - 1 + totalDots) % totalDots)
    }
    setTouchStart(null)
  }

  return (
    <section
      className="py-12 lg:py-16 bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="section-heading-title">
            {data?.heading || 'Industries We Serve'}
          </h2>
        </div>

        {/* Carousel Slider Window */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-[20px] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 311.5}px)`,
            }}
          >
            {/* Render loop to support sliding seamlessly */}
            {[...ALL_INDUSTRIES, ...ALL_INDUSTRIES].map((ind, idx) => (
              <div
                key={idx}
                className="w-[263.5px] h-[208.5px] flex-shrink-0"
              >
                <Link
                  href={ind.href}
                  className="group relative block w-[263.5px] h-[208.5px] rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100"
                >
                  {/* Background photo */}
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="291.5px"
                  />

                  {/* Blue tint overlay across upper photo */}
                  <div className="absolute inset-0 bg-[#0B4785]/35 group-hover:bg-[#0B4785]/20 transition-colors duration-300 pointer-events-none" />

                  {/* Bottom solid navy blue label bar */}
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-[#073B6C]/95 group-hover:bg-[#0B4785] px-10 py-5 transition-colors duration-200">
                    <h3 className="text-white text-sm font-semibold tracking-tight leading-snug truncate">
                      {ind.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Circular Interactive Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: totalDots }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentIndex(dot)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${dot === currentIndex
                ? 'bg-[#0B4785] scale-110'
                : 'border border-[#0B4785]/60 bg-transparent hover:bg-[#0B4785]/20'
                }`}
              aria-label={`Slide to industry panel ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
