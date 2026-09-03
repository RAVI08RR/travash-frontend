import type { CaseStudyData } from '@/lib/case-study-data'

export default function CaseStudyMetrics({ data }: { data: CaseStudyData }) {
  const metrics = data.metrics || [
    {
      value: '1.96 Million',
      label: 'Passport Applications Processed',
      description: 'Centralized high-throughput verification at state scale',
    },
    {
      value: '800+',
      label: 'High-Risk Records Identified',
      description: 'Adverse cases intercepted before passport issuance',
    },
    {
      value: 'AI-Assisted',
      label: 'Verification Workflow',
      description: 'Automated data extraction, facial recognition & real-time matching',
    },
    {
      value: 'Telangana Police',
      label: 'Client / Technology Partner',
      description: 'Securing public registry and identity integrity',
    },
  ]

  return (
    <section className="py-10 sm:py-12 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0B4785]/30 hover:shadow-sm"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#0B4785] tracking-tight leading-none mb-2">
                  {metric.value}
                </p>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                  {metric.label}
                </h3>
              </div>
              {metric.description && (
                <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200/60 leading-relaxed font-normal">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
