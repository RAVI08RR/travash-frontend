'use client'

import { FadeUpWeb } from '@/components/case-study/ScrollReveal'
import { X } from 'lucide-react'
import { sanitizeScrapedText, isScrapedJunkOrCss } from '@/lib/case-study-cleaner'

interface TheChallengeProps {
  title?: string
  headline?: string
  description?: string
  points?: string[]
  pointsLabel?: string
  takeaway?: string
}

const DEFAULT_CHALLENGE_POINTS = [
  'Operational bottlenecks hindering rapid execution',
  'Manual processes leading to latency and errors',
  'Fragmented systems limiting pipeline visibility',
  'Scalability constraints under surging demand',
]

export default function TheChallenge({
  title = 'The Challenge',
  headline,
  description,
  points = DEFAULT_CHALLENGE_POINTS,
  pointsLabel = 'Key Operational Challenges:',
  takeaway,
}: TheChallengeProps) {
  const cleanDescription = sanitizeScrapedText(description, '')

  const rawPoints = points && points.length > 0 ? points : DEFAULT_CHALLENGE_POINTS
  const challengePoints = rawPoints
    .map((p) => sanitizeScrapedText(p, ''))
    .filter((p) => p && !isScrapedJunkOrCss(p) && !p.includes('@media'))

  const displayPoints = challengePoints.length > 0 ? challengePoints : DEFAULT_CHALLENGE_POINTS

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] border-y border-[#EDF2F7]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Title, Bold Headline, Description (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-28 self-start">
            <FadeUpWeb>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-5">
                {title}
              </h2>

              {headline && !isScrapedJunkOrCss(headline) && (
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug mb-4">
                  {headline}
                </h3>
              )}

              {cleanDescription && !isScrapedJunkOrCss(cleanDescription) && !cleanDescription.includes('@media') && (
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {cleanDescription}
                </p>
              )}
            </FadeUpWeb>
          </div>

          {/* Right Column: Checklist with Red Cross Badges and Optional Takeaway */}
          <div className="lg:col-span-7 flex flex-col">
            <FadeUpWeb delay={0.15}>
              {pointsLabel && (
                <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0F172A] mb-5">
                  {pointsLabel}
                </h4>
              )}

              {/* List with red circular "x" badges */}
              <div className="flex flex-col gap-3.5 mb-8">
                {challengePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B44B4B] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#334155] font-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Concluding takeaway note if provided */}
              {takeaway && (
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed pt-2 border-t border-[#E2E8F0]/60">
                  {takeaway}
                </p>
              )}
            </FadeUpWeb>
          </div>
        </div>
      </div>
    </section>
  )
}
