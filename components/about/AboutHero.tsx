'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Play, ShieldCheck, Users, Sparkles } from 'lucide-react'
import VideoModal from '@/components/ui/VideoModal'

interface AboutHeroProps {
  data?: {
    eyebrow?: string
    heading?: string
    description?: string
    heroImage?: { asset?: { url: string } }
  }
}

export default function AboutHero({ data }: AboutHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const eyebrow = data?.eyebrow || 'ABOUT TRAVASH'
  const heading =
    data?.heading ||
    'We are a team of great innovators, creators and differentiators with exceptional high standards.'
  const description =
    data?.description ||
    'Founded in 2005 with a clear vision: to transform technology from a business cost center into a powerful engine of growth, scalability, and competitive advantage for enterprises worldwide.'
  const imageUrl = data?.heroImage?.asset?.url || '/home-img/Group 1000003287.png'

  return (
    <>
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F4F8FC] via-white to-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Decorative subtle background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
          <div className="absolute top-12 right-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>{eyebrow}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] mb-6">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              {description}
            </p>

            {/* Quick Credibility Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 pb-8 text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#14B8A6]" />
                <span>Founded in 2005</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#004771]" />
                <span>90%+ Client Retention</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                <span>500+ Delivered Solutions</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                <span>Speak with Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#004771] text-[#0B1E3D] hover:text-[#004771] font-semibold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#004771] group-hover:bg-[#004771] group-hover:text-white flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Story Video</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Card with Video Modal Trigger */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(11,71,133,0.16)] border border-gray-200/80 group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(11,71,133,0.22)]"
            >
              <Image
                src={imageUrl}
                alt="Travash engineering team and leadership"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/90 via-[#0B1E3D]/35 to-transparent group-hover:from-[#0B1E3D]/80 transition-colors" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 animate-ping pointer-events-none" />
                  <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 transition-transform duration-300 group-hover:scale-125" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#004771] to-[#14B8A6] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-white" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/10 group-hover:bg-[#004771]/80 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span>Watch Travash Story in Video (Popup)</span>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
                <div className="text-white max-w-2xl">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#14B8A6] uppercase block mb-1">
                    Global Delivery Capability
                  </span>
                  <p className="text-xs sm:text-sm text-gray-200 leading-snug line-clamp-2">
                    High-velocity engineering teams deploying secure, scalable, and intelligent software systems across North America, Europe, the Middle East, and APAC.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                  Interactive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/ch2ui0gfHUY"
        title="Travash Corporate Story & Engineering Culture"
      />
    </>
  )
}
