'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArchitectureGraphDiagram from './ArchitectureGraphDiagram'

interface ArchitectureProps {
  title?: string
  intro?: string
  imageSrc?: string
  caption?: string
  isSatyaapan?: boolean
  slug?: string
  client?: string
}

export default function ArchitectureSection({
  title = 'Solution\nArchitecture',
  intro = 'Enterprise System & Workflow Architecture',
  imageSrc,
  caption,
  isSatyaapan,
  slug = '',
  client,
}: ArchitectureProps) {
  const titleLines = title.split('\n')
  const introLines = intro ? intro.split('\n') : []

  const normalizedSlug = slug.toLowerCase().trim()
  const isSatyaapanProject = normalizedSlug === 'satyapaan' || Boolean(isSatyaapan)

  // Check if there is an actual unique custom uploaded diagram from Sanity
  const hasCustomSanityImage =
    Boolean(imageSrc) &&
    !imageSrc?.includes('arctature-daigram') &&
    !imageSrc?.includes('satyapaan') &&
    imageSrc !== '/home-img/satyapaan-min 2.png'

  const shouldRenderImage = (isSatyaapanProject && Boolean(imageSrc)) || hasCustomSanityImage

  return (
    <section
      id="architecture"
      className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-8 self-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#02487D] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#02487D] animate-pulse" />
              <span>System Topology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-4">
              {titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {intro && (
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                {introLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            )}

            {caption && (
              <p className="text-xs text-gray-400 mt-4 font-medium border-l-2 border-blue-200 pl-3">
                {caption}
              </p>
            )}
          </motion.div>

          {/* Right Column: Either uploaded custom image OR dynamic architecture graph diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 w-full"
          >
            {shouldRenderImage && imageSrc ? (
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs flex items-center justify-center p-2">
                <Image
                  src={imageSrc}
                  alt={title.replace('\n', ' ')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>
            ) : (
              <ArchitectureGraphDiagram
                slug={normalizedSlug}
                title={title.replace('\n', ' ')}
                client={client}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
