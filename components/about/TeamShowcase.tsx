'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, MapPin, CheckCircle2, Users, ArrowRight } from 'lucide-react'

interface TeamShowcaseProps {
  imageUrl?: string
}

export default function TeamShowcase({ imageUrl = '/teams.webp' }: TeamShowcaseProps) {
  const finalImage = imageUrl || '/teams.webp'

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-[0_12px_40px_rgba(11,71,133,0.06)]">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              {/* Left Side: Team Image */}
              <div className="w-full lg:w-[65%] xl:w-[67%]">
                <div className="relative w-full aspect-[16/9.5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-gray-200/80 group shadow-2xs">
                  <Image
                    src={finalImage}
                    alt="Travash engineering team and leadership"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-[35%] xl:w-[33%] flex flex-col justify-center space-y-3.5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>The Minds Behind Travash</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0B1E3D] tracking-tight leading-tight">
                    High-Impact Engineers & Technology Leaders
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Decades of combined engineering excellence delivering mission-critical web, mobile, AI, and enterprise platforms globally.
                  </p>
                </div>

                {/* Badges / Highlights */}
                <div className="space-y-2 pt-0.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#004771]/10 text-[#004771] shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#004771]" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Headquarters</div>
                      <div className="text-xs sm:text-sm font-bold text-[#0B1E3D]">Hyderabad, India</div>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#14B8A6]" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Global Delivery</div>
                      <div className="text-xs sm:text-sm font-bold text-[#0B1E3D]">USA • UK • India</div>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50/90 border border-gray-100 flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 text-[#004771] shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#004771]" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Engineering Bench</div>
                      <div className="text-xs sm:text-sm font-bold text-[#0B1E3D]">Full-Stack & Cloud Architects</div>
                    </div>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-1">
                  <Link
                    href="/career"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all"
                  >
                    <span>Explore Careers & Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
