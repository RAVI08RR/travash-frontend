'use client'

import { FadeUpWeb } from '@/components/case-study/ScrollReveal'

interface ExecutiveSummaryProps {
  title?: string
  paragraphs: string[]
}

export default function ExecutiveSummary({
  title = 'Executive Summary',
  paragraphs,
}: ExecutiveSummaryProps) {
  // Break title into multiple lines if needed (e.g. "Executive" and "Summary")
  const words = title.split(' ')

  return (
    <section className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] border-t border-[#F1F5F9]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (Approx 35%): Sticky Section Headline on Desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <FadeUpWeb>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12]">
                {words.length >= 2 ? (
                  <>
                    {words[0]}
                    <br />
                    {words.slice(1).join(' ')}
                  </>
                ) : (
                  title
                )}
              </h2>
            </FadeUpWeb>
          </div>

          {/* Right Column (Approx 65%): Narrative Paragraphs with Web Fade-Up */}
          <div className="lg:col-span-8">
            <FadeUpWeb delay={0.15} className="flex flex-col gap-5 text-sm sm:text-base text-[#475569] leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </FadeUpWeb>
          </div>
        </div>
      </div>
    </section>
  )
}
