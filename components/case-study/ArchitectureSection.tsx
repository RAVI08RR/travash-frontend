'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Server, Database, Shield, Cpu, ArrowRight } from 'lucide-react'

interface ArchitectureProps {
  title?: string
  intro?: string
  imageSrc?: string
  caption?: string
}

export default function ArchitectureSection({
  title = 'Solution Architecture',
  intro = 'A multi-tier enterprise architecture engineered for high availability, zero-trust security, and real-time interoperability between public safety databases.',
  imageSrc,
  caption = 'Figure: Satyaapan Multi-Tier AI Verification & Escalation Architecture',
}: ArchitectureProps) {
  return (
    <section id="architecture" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm max-w-6xl mx-auto"
        >
          {imageSrc ? (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image src={imageSrc} alt={title} fill className="object-contain" />
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-stretch">
                {/* Tier 1 */}
                <div className="bg-[#EEF4FB] border border-[#D5E4F5] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0B4785] flex items-center justify-center shadow-xs mb-4">
                    <Server className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Application Ingestion</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Encrypted passport portal feeds with batch and real-time intake.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className="bg-[#FAF0FF] border border-[#EED5FD] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#9333EA] flex items-center justify-center shadow-xs mb-4">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">AI &amp; Extraction Engine</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Automated OCR, field extraction, and facial biometric matching.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className="bg-[#FFFBEA] border border-[#FEEA9F] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#D97706] flex items-center justify-center shadow-xs mb-4">
                    <Database className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Registries &amp; AFIS</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Secure APIs cross-referencing DARPAN, criminal records, and watchlists.
                  </p>
                </div>

                {/* Tier 4 */}
                <div className="bg-[#EEFBF3] border border-[#C6F5D8] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#16A34A] flex items-center justify-center shadow-xs mb-4">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Clearance / Escalation</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Dual-track routing: auto-approval or officer-assigned hold investigation.
                  </p>
                </div>
              </div>

              {/* Data Flow Indicator Bar */}
              <div className="hidden md:flex items-center justify-center gap-6 py-2 text-xs font-bold text-gray-400">
                <span className="flex items-center gap-1.5 text-[#0B4785]">Secure Ingestion <ArrowRight className="w-3.5 h-3.5" /></span>
                <span className="flex items-center gap-1.5 text-[#9333EA]">AI Evaluation <ArrowRight className="w-3.5 h-3.5" /></span>
                <span className="flex items-center gap-1.5 text-[#D97706]">Biometric Cross-Check <ArrowRight className="w-3.5 h-3.5" /></span>
                <span className="text-[#16A34A]">Decision &amp; Audit Trail</span>
              </div>
            </div>
          )}

          {caption && (
            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
              {caption}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
