'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ArchitectureProps {
  title?: string
  intro?: string
  imageSrc?: string
  caption?: string
  isSatyaapan?: boolean
}

export default function ArchitectureSection({
  title = 'Solution\nArchitecture',
  intro = 'AI-Assisted Passport\nVerification Workflow',
  imageSrc = '/casestudy-img/arctature-daigram.webp',
  caption,
}: ArchitectureProps) {
  const titleLines = title.split('\n')
  const introLines = intro ? intro.split('\n') : []

  return (
    <section id="architecture" className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-3">
              {titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>
            {intro && (
              <p className="text-sm sm:text-base text-[#475569] leading-snug font-normal">
                {introLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            )}
          </motion.div>

          {/* Right Column: Diagram Image matching Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] rounded-2xl overflow-hidden bg-white flex items-center justify-center p-1 sm:p-2">
              <Image
                src={imageSrc}
                alt={title.replace('\n', ' ')}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
            {caption && (
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">
                {caption}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
