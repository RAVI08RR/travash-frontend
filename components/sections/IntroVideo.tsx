'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Sparkles } from 'lucide-react'
import VideoModal from '@/components/ui/VideoModal'

interface IntroVideoData {
  eyebrow?: string
  heading?: string
  videoUrl?: string
  videoThumbnail?: { asset?: { url: string } }
}

export default function IntroVideo({ data }: { data?: IntroVideoData }) {
  const [isOpen, setIsOpen] = useState(false)
  const posterUrl = data?.videoThumbnail?.asset?.url || '/home-img/Group 1000003287.png'
  const heading = data?.heading || 'Meet Your Next Technology Partner'
  const eyebrow = data?.eyebrow || 'Our Intro'
  const videoUrl = data?.videoUrl || 'https://www.youtube.com/embed/ch2ui0gfHUY'

  return (
    <>
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Soft background wave graphic from public/home-img */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div className="relative w-full h-[450px]">
            <Image
              src="/home-img/Abstract-Photoshop-Background-Amazing-HD-Wallpaper-14105 2.png"
              alt="Decorative background wave"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow & Heading */}
          <div className="mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl mx-auto">
              Discover how our engineering excellence, AI delivery, and global teams empower modern enterprises to scale effortlessly.
            </p>
          </div>

          {/* Video Container with interactive popup trigger */}
          <div className="max-w-4xl mx-auto">
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,71,133,0.14)] border border-gray-200/80 group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(11,71,133,0.2)] hover:-translate-y-1"
            >
              {/* Poster Image */}
              <Image
                src={posterUrl}
                alt={heading}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 900px"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-[#0B1E3D]/30 to-transparent group-hover:from-[#0B1E3D]/70 transition-all duration-300" />

              {/* Play Button & Pulse Rings */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                <div className="relative flex items-center justify-center">
                  {/* Outer animated ripple */}
                  <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 animate-ping pointer-events-none" />
                  {/* Secondary soft ring */}
                  <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/30 transition-transform duration-300 group-hover:scale-125" />
                  {/* Main Play Icon Circle */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#004771] to-[#14B8A6] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-white" />
                  </div>
                </div>

                {/* Badge underneath play button */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0B1E3D] text-xs font-bold shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span>Click to Watch Video • 2 Min Overview</span>
                </div>
              </div>

              {/* Bottom bar label */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/90 text-xs sm:text-sm font-medium">
                <span className="bg-black/40 backdrop-blur-xs px-3 py-1 rounded-md">Travash Engineering Presentation</span>
                <span className="hidden sm:inline-block bg-black/40 backdrop-blur-xs px-3 py-1 rounded-md text-teal-300">HD 1080p</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
        title={heading}
      />
    </>
  )
}
