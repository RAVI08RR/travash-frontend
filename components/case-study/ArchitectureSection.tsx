import Image from 'next/image'
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
    <section className="py-12 sm:py-16 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            System Design
          </span>
          <h2 className="section-heading-title !text-2xl sm:!text-3xl lg:!text-4xl mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            {intro}
          </p>
        </div>

        {/* Architecture Visual Container */}
        <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm max-w-6xl mx-auto">
          {imageSrc ? (
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image src={imageSrc} alt={title} fill className="object-contain" />
            </div>
          ) : (
            /* Visual Enterprise Multi-Tier Architecture Pipeline */
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Tier 1: Ingestion */}
                <div className="bg-[#EEF4FB] border border-[#D5E4F5] rounded-2xl p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#0B4785] flex items-center justify-center shadow-xs mb-3">
                    <Server className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Application Ingestion</h4>
                  <p className="text-xs text-gray-600 leading-normal">
                    Encrypted passport portal feeds with batch and real-time intake.
                  </p>
                </div>

                {/* Tier 2: AI Processing Engine */}
                <div className="bg-[#FAF0FF] border border-[#EED5FD] rounded-2xl p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#9333EA] flex items-center justify-center shadow-xs mb-3">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">AI &amp; Extraction Engine</h4>
                  <p className="text-xs text-gray-600 leading-normal">
                    Automated OCR, field extraction, and facial biometric matching.
                  </p>
                </div>

                {/* Tier 3: Law Enforcement Integrations */}
                <div className="bg-[#FFFBEA] border border-[#FEEA9F] rounded-2xl p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#D97706] flex items-center justify-center shadow-xs mb-3">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Registries &amp; AFIS</h4>
                  <p className="text-xs text-gray-600 leading-normal">
                    Secure APIs cross-referencing DARPAN, criminal records, and watchlists.
                  </p>
                </div>

                {/* Tier 4: Escalation & Clearance */}
                <div className="bg-[#EEFBF3] border border-[#C6F5D8] rounded-2xl p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#16A34A] flex items-center justify-center shadow-xs mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Clearance / Escalation</h4>
                  <p className="text-xs text-gray-600 leading-normal">
                    Dual-track routing: auto-approval or officer-assigned hold investigation.
                  </p>
                </div>
              </div>

              {/* Data Flow Indicator Bar */}
              <div className="hidden md:flex items-center justify-center gap-8 py-2 text-xs font-semibold text-gray-400">
                <span className="flex items-center gap-1">Secure Ingestion <ArrowRight className="w-3.5 h-3.5" /></span>
                <span className="flex items-center gap-1">AI Evaluation <ArrowRight className="w-3.5 h-3.5" /></span>
                <span className="flex items-center gap-1">Biometric Cross-Check <ArrowRight className="w-3.5 h-3.5" /></span>
                <span>Decision &amp; Audit Trail</span>
              </div>
            </div>
          )}

          {caption && (
            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
