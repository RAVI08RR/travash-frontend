'use client'

import { FadeUpWeb } from '@/components/case-study/ScrollReveal'
import { X } from 'lucide-react'

interface TheChallengeProps {
  title?: string
  headline?: string
  description?: string
  points?: string[]
  takeaway?: string
}

const DEFAULT_CHALLENGE_POINTS = [
  'Duplicate passport attempts',
  'Fraudulent identities or false information',
  'Relevant matches against criminal records',
  'Applications requiring further investigation',
]

export default function TheChallenge({
  title = 'The Challenge',
  headline = 'High–Volume Passport Verification Was Creating an Administrative Bottleneck',
  description = 'The existing verification process relied heavily on manual checks, making it difficult to efficiently screen large volumes of applications.',
  points = DEFAULT_CHALLENGE_POINTS,
  takeaway = 'The challenge was to reduce repetitive manual screening without removing human involvement from sensitive investigation decisions.',
}: TheChallengeProps) {
  const challengePoints = points && points.length > 0 ? points : DEFAULT_CHALLENGE_POINTS

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

              {headline && (
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug mb-4">
                  {headline}
                </h3>
              )}

              {description && (
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {description}
                </p>
              )}
            </FadeUpWeb>
          </div>

          {/* Right Column: Checklist with Red Cross Badges and Concluding Takeaway */}
          <div className="lg:col-span-7 flex flex-col">
            <FadeUpWeb delay={0.15}>
              <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0F172A] mb-5">
                OFFICIALS NEEDED TO IDENTIFY:
              </h4>

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

              {/* Concluding takeaway note */}
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
