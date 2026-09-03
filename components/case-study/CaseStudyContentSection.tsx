import React from 'react'

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
      ? 'bg-[#EEF4FB]'
      : 'bg-white'

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${bgClass} font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden ${className}`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (Approx 35%): Section Heading & Subtitle */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
                {eyebrow}
              </span>
            )}
            <h2 className="section-heading-title !text-2xl sm:!text-3xl lg:!text-4xl mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mt-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Column (Approx 65%): Content / Cards / Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
