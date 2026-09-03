import { XCircle, CheckCircle2 } from 'lucide-react'

interface BeforeAfterProps {
  title?: string
  subtitle?: string
  beforeTitle?: string
  afterTitle?: string
  before: string[]
  after: string[]
}

export default function BeforeAfterComparison({
  title = 'Before vs. After',
  subtitle = 'Transformation from manual / fragmented processes to AI-assisted digital verification.',
  beforeTitle = 'BEFORE SATYAPAAN',
  afterTitle = 'AFTER SATYAPAAN',
  before,
  after,
}: BeforeAfterProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
            Operational Transformation
          </span>
          <h2 className="section-heading-title !text-2xl sm:!text-3xl lg:!text-4xl mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2 Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Column: Before */}
          <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53E3E]" />
                <h3 className="text-sm sm:text-base font-bold text-[#9B2C2C] tracking-wide uppercase">
                  {beforeTitle}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {before.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#E53E3E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 leading-relaxed font-normal">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: After */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                <h3 className="text-sm sm:text-base font-bold text-[#166534] tracking-wide uppercase">
                  {afterTitle}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {after.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 leading-relaxed font-semibold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
