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

        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-['Plus_Jakarta_Sans',sans-serif]">
          {/* Eyebrow & Heading */}
          <div className="mb-8 lg:mb-10">
            <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest mb-3 block">
              {data?.eyebrow || 'Our Intro'}
            </span>
            <h2 className="section-heading-title">
              {data?.heading || 'Meet Your Next Technology Partner'}
            </h2>
          </div>

          {/* Video Container with max-w-5xl centered */}
          <div className="max-w-5xl mx-auto">
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden shadow-[0_8px_35px_rgba(11,71,133,0.14)] border border-gray-200 cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
            >
            {!isPlaying ? (
              <>
                <Image
                  src={posterUrl}
                  alt={data?.heading || 'Meet Your Next Technology Partner video poster'}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Play Button from public/home-img/Group 1000003271.png */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <Image
                      src="/home-img/Group 1000003271.png"
                      alt="Play video"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={embedUrl}
                title={data?.heading || 'Meet Your Next Technology Partner'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>

      {/* Fullscreen Video Modal if needed */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black text-white/90 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <iframe
              src={embedUrl}
              title={data?.heading || 'Meet Your Next Technology Partner - Travash'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </>
  )
}
