'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface IntroVideoData {
  eyebrow?: string
  heading?: string
  videoUrl?: string
  videoThumbnail?: { asset?: { url: string } }
}

function getEmbedUrl(url?: string) {
  if (!url) return 'https://www.youtube.com/embed/ch2ui0gfHUY?autoplay=1&rel=0'
  if (url.includes('youtube.com/embed/')) return `${url}${url.includes('?') ? '&' : '?'}autoplay=1&rel=0`
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
  }
  return url
}

export default function IntroVideo({ data }: { data?: IntroVideoData }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const embedUrl = getEmbedUrl(data?.videoUrl)
  const posterUrl = data?.videoThumbnail?.asset?.url || '/home-img/Group 1000003287.png'

  return (
    <>
      <section className="relative py-12 lg:py-16 bg-white overflow-hidden">
        {/* Soft background wave graphic from public/home-img */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60">
          <div className="relative w-full h-[400px]">
            <Image
              src="/home-img/Abstract-Photoshop-Background-Amazing-HD-Wallpaper-14105 2.png"
              alt="Decorative background wave"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center font-['Plus_Jakarta_Sans',sans-serif]">
          {/* Eyebrow & Heading */}
          <div className="mb-8 lg:mb-10">
            <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest mb-3 block">
              {data?.eyebrow || 'Our Intro'}
            </span>
            <h2 className="section-heading-title">
              {data?.heading || 'Meet Your Next Technology Partner'}
            </h2>
          </div>

          {/* Video Container with balanced max-w-3xl */}
          <div className="max-w-3xl mx-auto">
            <div
              onClick={() => !isPlaying && setIsPlaying(true)}
              className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(11,71,133,0.12)] border border-gray-200 group transition-transform duration-300 hover:scale-[1.01]"
            >
              {!isPlaying ? (
                <div className="cursor-pointer w-full h-full relative">
                  <Image
                    src={posterUrl}
                    alt={data?.heading || 'Meet Your Next Technology Partner video poster'}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Play Button from public/home-img/Group 1000003271.png */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                      <Image
                        src="/home-img/Group 1000003271.png"
                        alt="Play video"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsPlaying(false)
                    }}
                    className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/70 hover:bg-black text-white/90 hover:text-white transition-colors shadow-md"
                    aria-label="Close video"
                    title="Close video"
                  >
                    <X size={18} />
                  </button>
                  <iframe
                    src={embedUrl}
                    title={data?.heading || 'Meet Your Next Technology Partner'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
