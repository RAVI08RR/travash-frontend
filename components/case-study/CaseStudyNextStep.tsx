import Link from 'next/link'
import { ArrowRight, MessageSquareCode } from 'lucide-react'

interface CaseStudyNextStepProps {
  heading?: string
  content?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function CaseStudyNextStep({
  heading = 'The Next Step',
  content = 'The objective is not simply to introduce AI. Travash combines custom software development, web application development, AI-assisted automation and system integration to modernize high-volume operational workflows. Start with one clearly defined process or use case and determine whether the right next step is an assessment, POC or implementation.',
  primaryCTA = {
    label: 'Discuss a Public Safety Initiative',
    href: '#contact',
  },
  secondaryCTA = {
    label: 'Discuss an AI / Automation POC',
    href: '#contact',
  },
}: CaseStudyNextStepProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#073B6C] text-white rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-md relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4785] rounded-full blur-3xl pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6] block mb-3">
              Actionable Execution
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              {heading}
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8 sm:mb-10">
              {content}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={primaryCTA.href || '#contact'}
                className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center bg-white text-[#073B6C] hover:bg-gray-100 font-semibold px-8 text-sm transition-all duration-200 shadow-sm w-full sm:w-auto"
              >
                <span>{primaryCTA.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href || '#contact'}
                  className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-sm transition-all duration-200 w-full sm:w-auto"
                >
                  <MessageSquareCode className="w-4 h-4 mr-2" />
                  <span>{secondaryCTA.label}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
