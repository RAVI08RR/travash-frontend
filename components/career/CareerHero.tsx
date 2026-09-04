import Link from 'next/link'
import { ArrowRight, Briefcase, Sparkles, Trophy, Users } from 'lucide-react'

interface CareerHeroProps {
  heading?: string
  description?: string
  eyebrow?: string
  openPositionsCount?: number
}

export default function CareerHero({
  heading,
  description,
  eyebrow,
  openPositionsCount = 3,
}: CareerHeroProps) {
  const eyebrowText = eyebrow || 'CAREERS AT TRAVASH'
  const h1 = heading || 'Travash is Built for Innovators.'
  const desc =
    description ||
    'Travash is more than just a software company—it is a place where passionate developers, designers, and technologists come together to build innovative digital solutions. Work on real-world engineering problems with collaborative teams and limitless room for growth.'

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F4F8FC] via-white to-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#14B8A6]" />
            <span>{eyebrowText}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] mb-6">
            {h1}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            {desc}
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 pb-8 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#14B8A6]" />
              <span>Coveted Work-Life Balance</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#004771]" />
              <span>Hybrid & Flexible Culture</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#14B8A6]" />
              <span>{openPositionsCount} Open Positions Available</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#life-at-travash"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-[#0B1E3D] font-semibold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all"
            >
              Life at Travash
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
