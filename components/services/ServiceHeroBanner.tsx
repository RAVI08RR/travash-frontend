'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Map service slug → banner image path from /Services-img/
const SERVICE_BANNER_MAP: Record<string, string> = {
  // AI & Data
  'ai-data': '/Services-img/Stop-drowning (1).webp',
  'ai-data-engineering': '/Services-img/Stop-drowning (1).webp',
  'ai-automation': '/Services-img/Stop-drowning (1).webp',
  'data-analytics-solutions': '/Services-img/Ruthless.webp',
  'data-analytics': '/Services-img/Ruthless.webp',
  analytics: '/Services-img/Ruthless.webp',
  'platform-engineering': '/Services-img/Scale.webp',
  platform: '/Services-img/Scale.webp',

  // Cloud & Software
  'software-engineering': '/Services-img/Build.webp',
  software: '/Services-img/Build.webp',
  cloud: '/Services-img/Architected-for-Scale-Engineered-for-Your-Enterprise.webp',
  'cloud-devops': '/Services-img/Architected-for-Scale-Engineered-for-Your-Enterprise.webp',
  'cloud-and-devops': '/Services-img/Architected-for-Scale-Engineered-for-Your-Enterprise.webp',
  enterprise: '/Services-img/Turn.webp',
  'enterprise-applications': '/Services-img/Turn.webp',

  // Experience & Teams
  digital: '/Services-img/digital-experiences-web-mobile.webp',
  'digital-experiences': '/Services-img/digital-experiences-web-mobile.webp',
  'digital-experiences-web-mobile': '/Services-img/digital-experiences-web-mobile.webp',
  'dedicated-teams': '/Services-img/Ship.webp',
  'dedicated-talent': '/Services-img/Ship.webp',
  'dedicated-talent-and-teams': '/Services-img/Ship.webp',
  qa: '/Services-img/Scale.webp',
  'quality-assurance': '/Services-img/Scale.webp',
  'quality-assurance-testing': '/Services-img/Scale.webp',
  'staff-augmentation': '/Services-img/Ship.webp',
  staffing: '/Services-img/Ship.webp',
}

const FALLBACK_BANNER =
  '/Services-img/Architected-for-Scale-Engineered-for-Your-Enterprise.webp'

interface ServiceHeroBannerProps {
  slug: string
}

export default function ServiceHeroBanner({ slug }: ServiceHeroBannerProps) {
  const bannerSrc = SERVICE_BANNER_MAP[slug] || FALLBACK_BANNER

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="w-full relative overflow-hidden"
      style={{ height: 'clamp(200px, 26vw, 400px)' }}
    >
      <Image
        src={bannerSrc}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Soft top fade to blend with hero above */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0B1E3D]/25" />
    </motion.div>
  )
}
