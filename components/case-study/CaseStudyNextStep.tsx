'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquareCode } from 'lucide-react'

interface CaseStudyNextStepProps {
  heading?: string
  subtitle?: string
  content?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function CaseStudyNextStep({
  heading = 'The Next Step',
  subtitle = 'Looking to Modernize a High-Volume Verification or Public-Safety Workflow?',
  content,
  primaryCTA = {
    label: 'Discuss a Public Safety Technology Initiative',
    href: '#contact',
  },
  secondaryCTA = {
    label: 'Discuss an AI / Automation POC',
    href: '#contact',
  },
}: CaseStudyNextStepProps) {
  const defaultParagraphs = [
    'Travash combines custom software development, web application development, AI-assisted automation and system integration to modernize high-volume operational workflows.',
    'Start with one clearly defined process or use case and determine whether the right next step is an assessment, POC or implementation.',
  ]

  return (
    <section className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4">
              {heading}
            </h2>
            {subtitle && (
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                {subtitle}
              </h3>
            )}
          </motion.div>

          {/* Right Column: Paragraphs & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              {content ? (
                <p>{content}</p>
              ) : (
                defaultParagraphs.map((p, idx) => <p key={idx}>{p}</p>)
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={primaryCTA.href || '#contact'}
                className="inline-flex items-center justify-center bg-[#02487D] hover:bg-[#003865] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>{primaryCTA.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href || '#contact'}
                  className="inline-flex items-center justify-center border border-[#02487D] text-[#02487D] hover:bg-[#02487D]/5 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-95"
                >
                  <MessageSquareCode className="w-4 h-4 mr-2" />
                  <span>{secondaryCTA.label}</span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
