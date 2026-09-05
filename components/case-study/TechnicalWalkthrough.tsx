'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Server,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  CheckCircle2,
  Lock,
  Workflow,
  Sparkles,
  Zap,
  Globe,
  Clock,
  Smartphone,
  TrendingUp,
} from 'lucide-react'
import PortfolioPortableText from '@/components/portfolio/PortableTextRenderer'
import type { CaseStudyData, WalkthroughStep, TechnicalHighlight } from '@/lib/case-study-data'
import { cleanCaseStudyContent } from '@/lib/case-study-cleaner'

export { cleanCaseStudyContent }

interface TechnicalWalkthroughProps {
  content?: any
  caseStudy: CaseStudyData
}

function renderHighlightIcon(type?: string) {
  switch (type) {
    case 'zap':
      return <Zap className="w-5 h-5" />
    case 'lock':
      return <Lock className="w-5 h-5" />
    case 'shield':
      return <ShieldCheck className="w-5 h-5" />
    case 'layers':
      return <Layers className="w-5 h-5" />
    case 'cpu':
      return <Cpu className="w-5 h-5" />
    case 'database':
      return <Database className="w-5 h-5" />
    case 'globe':
      return <Globe className="w-5 h-5" />
    case 'clock':
      return <Clock className="w-5 h-5" />
    case 'smartphone':
      return <Smartphone className="w-5 h-5" />
    case 'chart':
      return <TrendingUp className="w-5 h-5" />
    default:
      return <CheckCircle2 className="w-5 h-5" />
  }
}

function getHighlightBadgeBg(type?: string) {
  switch (type) {
    case 'zap':
      return 'bg-[#EEF4FB] text-[#02487D]'
    case 'lock':
      return 'bg-[#FAF0FF] text-[#9333EA]'
    case 'shield':
      return 'bg-[#EEFBF3] text-[#16A34A]'
    case 'layers':
    case 'chart':
      return 'bg-[#FFFBEA] text-[#D97706]'
    case 'cpu':
      return 'bg-[#F0FDF4] text-[#15803D]'
    case 'database':
      return 'bg-[#F5F3FF] text-[#7C3AED]'
    case 'globe':
      return 'bg-[#ECFEFF] text-[#0E7490]'
    case 'smartphone':
      return 'bg-[#FFF1F2] text-[#E11D48]'
    default:
      return 'bg-[#EEF4FB] text-[#02487D]'
  }
}

export default function TechnicalWalkthrough({ content, caseStudy }: TechnicalWalkthroughProps) {
  const cleanedBlocks = cleanCaseStudyContent(content)
  const hasRichBlocks = cleanedBlocks.length > 0

  const clientName = caseStudy?.client || 'Enterprise Client'
  const walkthroughSteps: WalkthroughStep[] = caseStudy?.walkthroughSteps || []

  // Check if we should render this section
  const hasContent = hasRichBlocks || walkthroughSteps.length > 0 || caseStudy?.slug?.current === 'satyapaan'

  if (!hasContent) {
    return null
  }

  const defaultHighlights: TechnicalHighlight[] = [
    { label: 'Latency Target', value: '< 850ms', subtext: 'End-to-end API pipeline query latency', icon: 'zap' },
    { label: 'Security Standard', value: 'Zero-Trust / TLS 1.3', subtext: 'Field-level AES-256 encryption at rest', icon: 'lock' },
    { label: 'Audit Compliance', value: '100% Immutable', subtext: 'Cryptographically signed verification trails', icon: 'shield' },
    { label: 'Architecture', value: 'Event-Driven', subtext: 'Microservices with asynchronous message queues', icon: 'layers' },
  ]

  const highlights =
    caseStudy?.technicalHighlights && caseStudy.technicalHighlights.length > 0
      ? caseStudy.technicalHighlights
      : defaultHighlights

  return (
    <section
      id="technical-walkthrough"
      className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#02487D]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#02487D] uppercase">
              Implementation Details
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight mb-3">
            Technical Case Study Walkthrough
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
            Deep dive into system specifications, data pipelines, and operational architecture engineered by Travash for {clientName}.
          </p>
        </motion.div>

        {/* Technical Architecture Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-5 flex flex-col gap-2">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${getHighlightBadgeBg(
                  item.icon
                )}`}
              >
                {renderHighlightIcon(item.icon)}
              </div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-lg font-bold text-[#0F172A]">{item.value}</span>
              <span className="text-xs text-slate-500">{item.subtext}</span>
            </div>
          ))}
        </div>

        {/* Render Portable Text Content if available, else Structured Walkthrough */}
        {hasRichBlocks ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8 hidden">
            {/* <PortfolioPortableText content={cleanedBlocks} /> */}
          </div>
        ) : walkthroughSteps.length > 0 ? (
          <div className="space-y-8">
            {walkthroughSteps.map((step, idx) => {
              const stepNumber = step.stepNumber || String(idx + 1).padStart(2, '0')
              return (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-xl bg-[#02487D] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {stepNumber}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>

                  {/* Sub-items grid if available */}
                  {step.subItems && step.subItems.length > 0 && (
                    <div
                      className={`grid grid-cols-1 ${step.subItems.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                        } gap-4 mb-4`}
                    >
                      {step.subItems.map((sub, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                          <h4 className="text-xs font-bold text-[#02487D] uppercase tracking-wider mb-1.5">
                            {sub.label}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout box if available */}
                  {step.callout && (
                    <div className="p-5 rounded-2xl bg-[#0B1E3D] text-white flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <Workflow className="w-6 h-6 text-[#00E5FF]" />
                        <div>
                          <span className="text-xs text-[#00E5FF] font-semibold uppercase tracking-wider block">
                            {step.callout.title}
                          </span>
                          <span className="text-sm font-medium text-slate-200">
                            {step.callout.text}
                          </span>
                        </div>
                      </div>
                      {step.callout.badge && (
                        <div className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-slate-300 border border-white/15">
                          {step.callout.badge}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : caseStudy?.slug?.current === 'satyapaan' ? (
          <div className="space-y-8">
            {/* Fallback for Satyaapan */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-[#02487D] text-white flex items-center justify-center text-xs font-bold font-mono">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Automated Application Ingestion &amp; API Integration Bridge
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Instead of physical paperwork, Special Branch Units download digital applications from the Regional Passport Office (RPO) portal and upload them directly into the secure verification system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-xs font-bold text-[#02487D] uppercase tracking-wider mb-1.5">
                    Batch &amp; Stream Intake
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Processes both real-time individual submissions and periodic batch synchronization from RPO portals.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-xs font-bold text-[#02487D] uppercase tracking-wider mb-1.5">
                    Schema Validation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enforces strict input validation and cryptographic checksum verification to prevent corrupt payloads.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-xs font-bold text-[#02487D] uppercase tracking-wider mb-1.5">
                    Asynchronous Queues
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Redis / message broker guarantees zero message loss even during sudden application surges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-[#02487D] text-white flex items-center justify-center text-xs font-bold font-mono">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  AI Biometrics, Forensic OCR &amp; Anomaly Detection Engine
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Uploaded documents, certificates, and applicant photos undergo forensic analysis. Convolutional neural networks extract high-dimensional facial embeddings and document metadata, enabling instant cross-referencing against state registries and criminal databases.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EEFBF3] border border-[#C6F5D8]">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                      Automated Tamper &amp; Pixel Inspection
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Flags modified text, font mismatches, copy-paste artifacts, and compression inconsistencies across certificates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EEF4FB] border border-[#D5E4F5]">
                  <CheckCircle2 className="w-5 h-5 text-[#02487D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                      Sub-Second Vector Search
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Performs approximate nearest neighbor similarity checks across millions of facial embeddings in less than 200 milliseconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-[#02487D] text-white flex items-center justify-center text-xs font-bold font-mono">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Dual-Track Clearance Workflow &amp; Escalation Protocols
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                To balance operational speed with safety, the platform executes a dual-track workflow. Standard applications meeting clearance criteria proceed through automated approval, while anomalies or duplicate attempts are automatically locked and routed to designated officers.
              </p>
              <div className="p-5 rounded-2xl bg-[#0B1E3D] text-white flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-[#00E5FF]" />
                  <div>
                    <span className="text-xs text-[#00E5FF] font-semibold uppercase tracking-wider block">
                      Human-in-the-Loop Governance
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      Officers receive comprehensive audit dossiers with highlighted discrepancy zones.
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-slate-300 border border-white/15">
                  Role-Based SLA Escalations
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
