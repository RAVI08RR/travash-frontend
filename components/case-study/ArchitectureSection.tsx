'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Server, Database, Shield, Cpu, ArrowRight, Zap, Globe, Lock, CheckCircle2 } from 'lucide-react'

export interface ArchitectureTier {
  title: string
  description: string
  icon?: string
}

interface ArchitectureProps {
  title?: string
  intro?: string
  imageSrc?: string
  caption?: string
  tiers?: ArchitectureTier[]
  isSatyaapan?: boolean
}

function renderTierIcon(icon?: string) {
  switch (icon) {
    case 'cpu':
      return <Cpu className="w-7 h-7" />
    case 'database':
      return <Database className="w-7 h-7" />
    case 'shield':
      return <Shield className="w-7 h-7" />
    case 'zap':
      return <Zap className="w-7 h-7" />
    case 'globe':
      return <Globe className="w-7 h-7" />
    case 'lock':
      return <Lock className="w-7 h-7" />
    default:
      return <Server className="w-7 h-7" />
  }
}

export default function ArchitectureSection({
  title = 'Solution Architecture',
  intro = 'A multi-tier enterprise architecture engineered for high availability, zero-trust security, and real-time interoperability.',
  imageSrc,
  caption = 'Figure: Solution Architecture & Enterprise Workflow Infrastructure',
  tiers,
  isSatyaapan = false,
}: ArchitectureProps) {
  const satyaapanTiers: ArchitectureTier[] = [
    {
      title: 'Application Ingestion',
      description: 'Encrypted passport and verification portal feeds with batch and real-time intake.',
      icon: 'server',
    },
    {
      title: 'AI & Extraction Engine',
      description: 'Automated OCR, field extraction, forensic tamper check, and facial biometric matching.',
      icon: 'cpu',
    },
    {
      title: 'Registries & AFIS',
      description: 'Secure APIs cross-referencing DARPAN, criminal records, and national watchlists.',
      icon: 'database',
    },
    {
      title: 'Clearance / Escalation',
      description: 'Dual-track routing: auto-approval or officer-assigned hold investigation.',
      icon: 'shield',
    },
  ]

  const activeTiers = (tiers && tiers.length > 0) ? tiers : (isSatyaapan ? satyaapanTiers : null)

  return (
    <section id="architecture" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            System Design
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            {intro}
          </p>
        </motion.div>

        {/* Architecture Visual Container with motion entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm max-w-6xl mx-auto flex flex-col gap-10"
        >
          {/* 1. Architecture Flow Diagram Image */}
          {imageSrc && (
            <div className="flex flex-col gap-3">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center group">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain p-3 group-hover:scale-[1.01] transition-transform duration-300"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              {caption && (
                <p className="text-center text-xs text-gray-500 font-medium">
                  {caption}
                </p>
              )}
            </div>
          )}

          {/* 2. Structured Architectural Tiers (Only if configured or for Satyaapan) */}
          {activeTiers && activeTiers.length > 0 && (
            <div className="flex flex-col gap-8">
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(activeTiers.length, 4)} gap-5 items-stretch`}>
                {activeTiers.map((tier, idx) => {
                  const bgColors = [
                    'bg-[#EEF4FB] border-[#D5E4F5] text-[#0B4785]',
                    'bg-[#FAF0FF] border-[#EED5FD] text-[#9333EA]',
                    'bg-[#FFFBEA] border-[#FEEA9F] text-[#D97706]',
                    'bg-[#EEFBF3] border-[#C6F5D8] text-[#16A34A]',
                  ]
                  const colorClass = bgColors[idx % bgColors.length]
                  return (
                    <div
                      key={idx}
                      className={`${colorClass.split(' ')[0]} border ${colorClass.split(' ')[1]} rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-white ${colorClass.split(' ')[2]} flex items-center justify-center shadow-xs mb-4`}>
                        {renderTierIcon(tier.icon)}
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-2">{tier.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        {tier.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Data Flow Indicator Bar */}
              <div className="hidden md:flex items-center justify-center gap-6 py-2 text-xs font-bold text-gray-400">
                {activeTiers.map((tier, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 text-gray-600">
                    {tier.title}
                    {idx < activeTiers.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-gray-400" />}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!imageSrc && caption && (
            <p className="text-center text-xs text-gray-400 mt-2 font-medium">
              {caption}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
