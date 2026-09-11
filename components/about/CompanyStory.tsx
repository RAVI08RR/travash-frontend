import Image from 'next/image'
import { CheckCircle2, TrendingUp, Cpu, Globe2, Shield, Sparkles } from 'lucide-react'

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
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, Title, Generated Image & Highlights */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-3">
              OUR HERITAGE & VISION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight leading-tight mb-6">
              {heading}
            </h2>

            {/* Generated Image directly after title */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,71,113,0.12)] border border-gray-200/80 mb-6 group bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/about-vision.jpg"
                  alt="Travash technology vision, innovation hub and enterprise engineering lab"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/85 via-[#0B1E3D]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>Global Engineering & AI Innovation Lab</span>
                  </div>
                  <span className="text-xs font-bold text-white/90 tracking-wider uppercase bg-[#14B8A6]/25 px-2.5 py-1 rounded-md border border-[#14B8A6]/30">
                    Est. 2005
                  </span>
                </div>
              </div>
            </div>

            {/* Key Highlight Metric Cards */}
            {/* <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {DEFAULT_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex flex-col p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#14B8A6]/40 hover:shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#004771] flex items-center justify-center flex-shrink-0 mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0B1E3D] mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div> */}
          </div>

          {/* Right Column: Narrative Editorial Content & Stat Counters */}
          <div className="lg:col-span-6 lg:pl-4 flex flex-col justify-between h-full pt-2">
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

            <div className="mt-10 pt-8 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
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

