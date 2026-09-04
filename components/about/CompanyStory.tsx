import { CheckCircle2, TrendingUp, Cpu, Globe2, Shield } from 'lucide-react'

interface CompanyStoryProps {
  data?: {
    heading?: string
    content?: string[]
  }
}

const DEFAULT_HIGHLIGHTS = [
  {
    title: 'Founded in 2005',
    desc: 'Two decades of continuous technological evolution, starting with US enterprise projects and expanding globally.',
    icon: Globe2,
  },
  {
    title: 'From Cost-Center to Profit-Center',
    desc: 'Architecting technology as a tangible revenue generator rather than an operational burden.',
    icon: TrendingUp,
  },
  {
    title: 'Enterprise Software & AI Scale',
    desc: 'Deploying high-reliability systems, scalable cloud microservices, and specialized AI models.',
    icon: Cpu,
  },
  {
    title: '90%+ Client Retention',
    desc: 'Long-term client partnerships enduring through shifting market conditions and digital transitions.',
    icon: Shield,
  },
]

export default function CompanyStory({ data }: CompanyStoryProps) {
  const heading = data?.heading || 'How Our Vision Became Reality'
  const paragraphs = data?.content && data.content.length > 0 ? data.content : [
    'Travash was founded in 2005 by a visionary Senior Technologist whose objective was to transform the way the modern enterprise viewed technology—evolving from a cost center into a strategic profit and growth center.',
    'Starting from initial engagements across the United States and subsequently expanding across Europe, the United Kingdom, and the Middle East, Travash has maintained an enviable track record of client retention exceeding 90%, navigating two decades of technological disruption with consistent engineering excellence.',
    'Today, with over 500+ successfully deployed software platforms, 250+ enterprise clients onboarded, and dedicated delivery centers in India and Dubai, we bridge strategy, product design, and deep technical execution across AI, Cloud, Enterprise Applications, and Data Engineering.',
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-3">
              OUR HERITAGE & VISION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight leading-tight mb-6">
              {heading}
            </h2>
            <div className="space-y-4 pt-2">
              {DEFAULT_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#004771] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0B1E3D] mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Narrative Editorial Content */}
          <div className="lg:col-span-7 lg:pl-4 flex flex-col justify-center">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed text-base sm:text-lg ${
                    idx === 0 ? 'text-[#0B1E3D] font-medium text-lg sm:text-xl leading-relaxed' : ''
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#004771]">2005</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">Year Established</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14B8A6]">500+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">Projects Delivered</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#02487D]">90%+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
