'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import defaultHeroThumb from '@/public/casestudy-img/Satyaapan-Passport-Verification-System.png'
import type { CaseStudyData } from '@/lib/case-study-data'

export default function CaseStudyHero({ data }: { data: CaseStudyData }) {
  const featureVisual =
    typeof data.featureImage === 'string'
      ? data.featureImage
      : data.featureImage?.asset?.url ||
      (typeof data.heroImage === 'string'
        ? data.heroImage
        : data.heroImage?.asset?.url) ||
      defaultHeroThumb

  // Extract metadata values with defaults matching the design
  const clientName = data.client || 'Telangana State Police'
  const solutionName =
    data.projectMeta?.find((m) => m.label.toLowerCase() === 'solution')?.value ||
    'Satyaapan – Passport Verification System'
  const industryName =
    data.industry ||
    data.projectMeta?.find((m) => m.label.toLowerCase() === 'industry')?.value ||
    'Government / Public Safety'
  const capabilitiesValue =
    data.projectMeta?.find((m) => m.label.toLowerCase().includes('capabilit'))?.value ||
    'Web Application Development • AI–Assisted Verification • Facial Recognition • Data Extraction • Workflow Automation'

  // Extract project name for breadcrumbs (e.g. "Satyapaan")
  const breadcrumbName =
    data.slug?.current === 'satyapaan'
      ? 'Satyapaan'
      : data.slug?.current === 'darpan'
        ? 'Darpan'
        : data.slug?.current === 'i-verify'
          ? 'i-Verify'
          : data.slug?.current === 'i4c-bank-portal' || data.slug?.current === 'i4c'
            ? 'I4C'
            : data.slug?.current === 'ugo'
              ? 'UGO'
              : data.title.split(':')[0] || 'Satyapaan'

  return (
    <section className="pt-5 pb-12 sm:pt-5 sm:pb-16 bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home > Works > Satyapaan */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B] mb-6 sm:mb-8 font-normal"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#02487D] transition-colors">
            Home
          </Link>
          <span className="text-[#94A3B8]">&gt;</span>
          <Link href="/portfolio" className="hover:text-[#02487D] transition-colors">
            Works
          </Link>
          <span className="text-[#94A3B8]">&gt;</span>
          <span className="text-[#64748B] font-normal truncate">
            {breadcrumbName}
          </span>
        </motion.nav>

        {/* Top Header Block: H1 Title and Subtitle Description */}
        <div className="max-w-5xl mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1.5px] leading-[1.16] mb-5"
          >
            {data.title.includes(':') ? (
              <>
                <span>{data.title.split(':')[0]}:</span>
                <br className="hidden sm:inline" />{' '}
                <span>{data.title.split(':')[1]}</span>
              </>
            ) : (
              data.title
            )}
          </motion.h1>

          {data.shortDescription && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-[17px] text-[#475569] leading-relaxed font-normal max-w-4xl"
            >
              {data.shortDescription}
            </motion.p>
          )}
        </div>

        {/* Dual-Tone Accent Dividing Bar: Blue left segment + Vibrant Green extended bar */}
        <div className="w-full flex items-center h-[3.5px] mb-10 sm:mb-12">
          <div className="w-28 sm:w-44 h-full bg-[#0A3866]" />
          <div className="flex-1 h-full bg-[#22C55E]" />
        </div>

        {/* 2-Column Grid: Left Metadata Details, Right Featured Showcase Visual */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Client, Solution, Industry, Capabilities */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-7">
            {/* 1. CLIENT */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/client.svg"
                  alt="Client"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  CLIENT
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {clientName}
                </span>
              </div>
            </motion.div>

            {/* 2. SOLUTION */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/solution.svg"
                  alt="Solution"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  SOLUTION
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {solutionName}
                </span>
              </div>
            </motion.div>

            {/* 3. INDUSTRY */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/Industry.svg"
                  alt="Industry"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  INDUSTRY
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {industryName}
                </span>
              </div>
            </motion.div>

            {/* 4. CAPABILITIES */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                <Image
                  src="/casestudy-img/Capabilities.svg"
                  alt="Capabilities"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  CAPABILITIES
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-snug">
                  {capabilitiesValue}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Image Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 bg-[#F8FAFC]"
            >
              <Image
                src={featureVisual}
                alt={data.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
