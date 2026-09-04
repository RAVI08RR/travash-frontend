'use client'

import { useState } from 'react'
import { Calendar, ChevronRight, Milestone, Sparkles } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface CompanyTimelineProps {
  timeline?: TimelineItem[]
}

const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    year: '2005',
    title: 'The Journey Begins',
    description:
      'Travash was established with a clear mission: turning enterprise technology from a burdensome cost into a decisive growth and profit generator.',
  },
  {
    year: '2010',
    title: 'Expanding Our Global Reach',
    description:
      'Following foundational success in India, operations and client delivery expanded across the United States, Europe, and the Middle East.',
  },
  {
    year: '2015',
    title: 'Building Digital Solutions That Matter',
    description:
      'Deepened core engineering capabilities across full-stack web, enterprise mobile systems, and bespoke cloud applications solving high-complexity workflows.',
  },
  {
    year: '2020',
    title: 'Accelerating Digital Transformation',
    description:
      'Partnered with enterprise leaders to implement scalable microservices, automated cloud data pipelines, and agile modernization across mission-critical software.',
  },
  {
    year: 'Today',
    title: "Innovating for What's Next",
    description:
      'Pioneering production-ready AI agents, specialized machine learning integrations, and sovereign data systems with 500+ successful projects and 250+ clients.',
  },
]

export default function CompanyTimeline({ timeline }: CompanyTimelineProps) {
  const items = timeline && timeline.length > 0 ? timeline : DEFAULT_TIMELINE
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>TWO DECADES OF IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight">
            Our Journey of Continuous Innovation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            From an ambitious vision in 2005 to an international technology partner powering mission-critical platforms worldwide.
          </p>
        </div>

        {/* Desktop Editorial Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Bar with Years */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
            <div className="relative z-10 flex justify-between items-center max-w-5xl mx-auto">
              {items.map((item, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="flex flex-col items-center group focus:outline-none transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                        isActive
                          ? 'bg-[#004771] text-white ring-4 ring-[#E0F2FE] scale-110'
                          : 'bg-white text-gray-600 border-2 border-gray-300 group-hover:border-[#004771] group-hover:text-[#004771]'
                      }`}
                    >
                      {item.year === 'Today' ? <Sparkles className="w-5 h-5 text-[#14B8A6]" /> : item.year.slice(-2)}
                    </div>
                    <span
                      className={`text-xs font-bold mt-2.5 transition-colors ${
                        isActive ? 'text-[#004771]' : 'text-gray-500 group-hover:text-gray-900'
                      }`}
                    >
                      {item.year}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Milestone Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-10 border border-gray-200/80 shadow-[0_8px_30px_rgba(11,71,133,0.06)] transition-all">
            <div className="flex items-center gap-3 text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-3">
              <Calendar className="w-4 h-4" />
              <span>ERA: {items[activeIdx].year}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1E3D] mb-4">
              {items[activeIdx].title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {items[activeIdx].description}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-[#004771]/20 space-y-8 ml-3">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-[#004771] border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold" />

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
                <div className="inline-block text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-1">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-[#0B1E3D] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
