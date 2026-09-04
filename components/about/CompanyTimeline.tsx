'use client'

import { useState } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Milestone,
  Sparkles,
  Rocket,
  Globe2,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  phase?: string
  icon?: any
  metrics?: string
  highlights?: string[]
}

interface CompanyTimelineProps {
  timeline?: TimelineItem[]
}

const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    year: '2005',
    title: 'The Journey Begins',
    phase: 'Genesis & Foundation',
    icon: Rocket,
    metrics: 'First US Enterprise Deployment',
    description:
      'Travash was founded with a singular conviction: turning enterprise technology from an operational cost burden into a decisive revenue generator and competitive advantage.',
    highlights: [
      'Inception of core engineering delivery methodologies',
      'First flagship engagements for US financial & retail clients',
      'Established high-precision delivery center in Hyderabad',
    ],
  },
  {
    year: '2010',
    title: 'Expanding Our Global Reach',
    phase: 'International Expansion',
    icon: Globe2,
    metrics: '3 Key Global Regions',
    description:
      'Following rapid foundation success, client delivery scaled across the United States, Europe, the United Kingdom, and the Middle East, anchoring multi-year enterprise partnerships.',
    highlights: [
      'Cross-border distributed agile squad operations',
      'UAE & Middle East regional expansion established',
      'Pioneered robust enterprise web and legacy migration services',
    ],
  },
  {
    year: '2015',
    title: 'Digital Engineering & Cloud Scale',
    phase: 'Cloud & Product Engineering',
    icon: Cpu,
    metrics: '100+ Systems Built',
    description:
      'Deepened end-to-end full stack architecture capabilities across distributed cloud infrastructure, mobile enterprise ecosystems, and bespoke SaaS platforms.',
    highlights: [
      'Cloud-native architecture migration for high-load systems',
      'Multi-platform enterprise mobile apps deployed',
      'Establishment of dedicated quality engineering & DevOps pipelines',
    ],
  },
  {
    year: '2020',
    title: 'Accelerating Digital Transformation',
    phase: 'Enterprise Modernization',
    icon: ShieldCheck,
    metrics: '90%+ Client Retention',
    description:
      'Partnered with enterprise leaders to implement scalable microservices, resilient event-driven architectures, and automated data processing pipelines across mission-critical software.',
    highlights: [
      'Microservices transformation for tier-1 enterprises',
      'Zero-downtime continuous integration and secure DevOps',
      'Resilient remote-first engineering scale during global disruption',
    ],
  },
  {
    year: 'Today',
    title: "AI-First Acceleration & Sovereign Tech",
    phase: 'Next-Gen Intelligence',
    icon: Sparkles,
    metrics: '500+ Projects & 250+ Clients',
    description:
      'Pioneering production-ready AI agents, specialized machine learning workflows, and sovereign enterprise data systems with proven multi-decade software dependability.',
    highlights: [
      'Autonomous AI agents integrated with enterprise ERPs & CRMs',
      'Fine-tuned LLM implementations with private cloud security',
      'Expanding next-generation global delivery hubs across India & UAE',
    ],
  },
]

export default function CompanyTimeline({ timeline }: CompanyTimelineProps) {
  const items = timeline && timeline.length > 0 ? timeline.map((item, idx) => ({
    ...item,
    phase: item.phase || DEFAULT_TIMELINE[idx % DEFAULT_TIMELINE.length].phase,
    icon: DEFAULT_TIMELINE[idx % DEFAULT_TIMELINE.length].icon || Milestone,
    metrics: item.metrics || DEFAULT_TIMELINE[idx % DEFAULT_TIMELINE.length].metrics,
    highlights: item.highlights || DEFAULT_TIMELINE[idx % DEFAULT_TIMELINE.length].highlights,
  })) : DEFAULT_TIMELINE

  const [activeIdx, setActiveIdx] = useState(0)
  const activeItem = items[activeIdx]
  const ActiveIcon = activeItem.icon || Sparkles

  function handlePrev() {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : items.length - 1))
  }

  function handleNext() {
    setActiveIdx((prev) => (prev < items.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      {/* Decorative gradient backdrops */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Milestone className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>TWO DECADES OF IMPACT • 2005 - PRESENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E3D] tracking-tight leading-tight">
            Our Journey of Continuous Innovation
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 leading-relaxed">
            From an ambitious engineering vision in 2005 to an international technology partner powering mission-critical platforms worldwide.
          </p>
        </div>

        {/* Desktop Interactive Rail & Showcase */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          {/* Progress / Step Selector Rail */}
          <div className="relative mb-14">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full" />
            {/* Active connecting track gradient */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#004771] to-[#14B8A6] -translate-y-1/2 z-0 rounded-full transition-all duration-500"
              style={{
                width: `${(activeIdx / (items.length - 1)) * 100}%`,
              }}
            />

            {/* Stepper Buttons */}
            <div className="relative z-10 flex justify-between items-center px-4">
              {items.map((item, idx) => {
                const isActive = activeIdx === idx
                const isPassed = idx < activeIdx
                const ItemIcon = item.icon || Sparkles

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="flex flex-col items-center group focus:outline-none transition-all cursor-pointer"
                    aria-label={`Jump to ${item.year} milestone`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#004771] text-white ring-4 ring-[#E0F2FE] scale-110 shadow-lg'
                          : isPassed
                          ? 'bg-[#14B8A6] text-white shadow-sm'
                          : 'bg-white text-gray-600 border border-gray-200 group-hover:border-[#004771] group-hover:text-[#004771]'
                      }`}
                    >
                      <ItemIcon className="w-6 h-6" />
                    </div>

                    <div className="text-center mt-3">
                      <span
                        className={`text-sm font-extrabold block transition-colors ${
                          isActive
                            ? 'text-[#004771]'
                            : isPassed
                            ? 'text-[#14B8A6]'
                            : 'text-gray-500 group-hover:text-gray-900'
                        }`}
                      >
                        {item.year}
                      </span>
                      <span
                        className={`text-[11px] font-semibold transition-colors block max-w-[110px] truncate ${
                          isActive ? 'text-gray-700 font-bold' : 'text-gray-400'
                        }`}
                      >
                        {item.phase}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Milestone Card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-[0_16px_50px_rgba(11,71,133,0.08)] overflow-hidden transition-all duration-500">
            {/* Watermark Year Background */}
            <div className="absolute right-4 -bottom-6 text-9xl font-black text-slate-100/80 pointer-events-none select-none tracking-tighter">
              {activeItem.year}
            </div>

            <div className="relative z-10">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#004771] to-[#0B4785] text-white flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider">
                        {activeItem.year} ERA
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        {activeItem.phase}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#14B8A6] block mt-0.5">
                      Milestone {activeIdx + 1} of {items.length}
                    </span>
                  </div>
                </div>

                {/* Next / Previous Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl border border-gray-200 hover:border-[#004771] text-gray-600 hover:text-[#004771] hover:bg-gray-50 transition-all cursor-pointer"
                    aria-label="Previous milestone"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl border border-gray-200 hover:border-[#004771] text-gray-600 hover:text-[#004771] hover:bg-gray-50 transition-all cursor-pointer"
                    aria-label="Next milestone"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D] tracking-tight mb-4">
                  {activeItem.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  {activeItem.description}
                </p>
              </div>

              {/* Highlights & Metrics Grid */}
              <div className="grid md:grid-cols-12 gap-6 pt-2">
                {/* Highlights List */}
                <div className="md:col-span-8 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#004771]" />
                    <span>Strategic Highlights & Breakthroughs</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeItem.highlights?.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metric Card */}
                <div className="md:col-span-4 bg-gradient-to-br from-[#004771] to-[#02487D] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
                  <div>
                    <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-2">
                      Key Milestone Metric
                    </span>
                    <div className="text-2xl font-extrabold leading-snug">
                      {activeItem.metrics}
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-100 font-medium">
                    <span>Proven Continuity</span>
                    <span className="text-teal-300 font-bold">2005 → Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Always intuitive and scrollable) */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 space-y-10 ml-4 sm:ml-6">
          {items.map((item, idx) => {
            const ItemIcon = item.icon || Sparkles
            return (
              <div key={idx} className="relative">
                {/* Icon Node Dot */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#004771] to-[#14B8A6] text-white flex items-center justify-center shadow-md ring-4 ring-white">
                  <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#004771] text-xs font-extrabold tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-[#14B8A6]">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B1E3D] mt-2 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="bg-[#F8FAFC] rounded-xl p-4 border border-gray-100 mb-4">
                      <ul className="space-y-2">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metric */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E0F2FE]/60 text-[#004771] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

