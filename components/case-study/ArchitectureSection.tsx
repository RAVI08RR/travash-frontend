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
  intro = 'Regional Passport Office (RPO) → Satyaapan Verification Platform → Automated Data Extraction + Facial Recognition → Real-Time Matching Against Relevant Records → Automated Verification Workflow (Clear vs Flagged).',
  caption = 'Figure: Satyaapan Multi-Tier AI Verification & Escalation Architecture',
  imageSrc,
  slug = '',
  client,
}: ArchitectureProps) {
  const normalizedSlug = slug.toLowerCase().trim()

  // Determine diagram image source (from Sanity or satyapaan webp)
  const effectiveImageSrc =
    (imageSrc && imageSrc !== '/home-img/satyapaan-min 2.png')
      ? imageSrc
      : (normalizedSlug === 'satyapaan' ? '/casestudy-img/arctature-daigram.webp' : undefined)

  const defaultIntro =
    slug === 'satyapaan'
      ? 'Regional Passport Office (RPO) → Satyaapan Verification Platform → Automated Data Extraction + Facial Recognition → Real-Time Matching Against Relevant Records → Automated Verification Workflow (Clear vs Flagged).'
      : intro ||
      'Decoupled, high-concurrency system architecture engineered for automated workflow execution, real-time data verification, and secure exception escalation.'

  const defaultCaption =
    slug === 'satyapaan'
      ? 'Figure: Satyaapan Multi-Tier AI Verification & Escalation Architecture'
      : caption || `Figure: ${client || 'Enterprise'} Cloud Architecture & System Infrastructure`

  const titleLines = title.split('\n')
  const introLines = defaultIntro ? defaultIntro.split('\n') : []

  return (
    <section
      id="architecture"
      className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100"
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (lg:col-span-4): Badge, Title, Intro & Figure Caption */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#02487D] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#02487D]" />
              <span>System Topology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-4">
              {titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {defaultIntro && (
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal mb-5">
                {introLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            )}

            {defaultCaption && (
              <p className="text-xs text-gray-400 font-medium border-l-2 border-blue-300 pl-3 leading-relaxed">
                {defaultCaption}
              </p>
            )}
          </motion.div>
          </div>

          {/* Right Column (lg:col-span-8): Diagram Image in Container or Vector Fallback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 w-full"
          >
            {effectiveImageSrc ? (
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs flex items-center justify-center p-2">
                <Image
                  src={effectiveImageSrc}
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
