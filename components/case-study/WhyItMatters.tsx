import { ArrowRight, HelpCircle } from 'lucide-react'

interface WhyItMattersProps {
  title?: string
  subtitle?: string
  items: string[]
}

export default function WhyItMatters({
  title = 'Why This Matters',
  subtitle = 'Does Your Organization Face a Similar Challenge?',
  items,
}: WhyItMattersProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden relative">
      {/* Very subtle abstract geometric background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EEF4FB]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
              Strategic Relevance
            </span>
            <h2 className="section-heading-title !text-2xl sm:!text-3xl lg:!text-4xl mb-4">
              {title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {subtitle}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-normal mt-3">
              This case study is highly relevant for civic authorities, enterprises, and public-sector leaders evaluating scalable, automated identity solutions.
            </p>
          </div>

          {/* Right Column: Challenge Items */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-200 hover:border-[#0B4785]/40 hover:bg-white shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EEF4FB] text-[#0B4785] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-[15px] text-gray-800 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
