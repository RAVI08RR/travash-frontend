'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectVisualProps {
  imageSrc?: string
  alt?: string
  caption?: string
}

export default function ProjectVisual({
  imageSrc = '/home-img/satyapaan-min 2.png',
  alt = 'Satyaapan Passport Verification Portal Interface',
  caption,
}: ProjectVisualProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden border border-gray-200/90 shadow-2xl bg-gray-50"
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1280px"
            priority
          />
        </motion.div>
        {caption && (
          <p className="text-center text-xs text-gray-500 mt-4 italic font-medium">
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
