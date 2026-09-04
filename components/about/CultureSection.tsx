import Image from 'next/image'
import { Sparkles, Code2, Users2, Rocket, Lightbulb } from 'lucide-react'

interface CultureSectionProps {
  teams?: {
    heading?: string
    description?: string
  }
  culture?: {
    heading?: string
    description?: string
  }
}

const CULTURE_PILLARS = [
  {
    icon: Code2,
    title: 'Craftsmanship Over Shortcuts',
    desc: 'Clean, secure, test-driven architectures built to scale gracefully without technical debt.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Mastery',
    desc: 'Dedicated R&D time for engineers to explore generative AI, sovereign LLMs, and modern cloud patterns.',
  },
  {
    icon: Users2,
    title: 'Radical Collaboration',
    desc: 'Cross-functional squads where designers, architects, and product strategists work side-by-side.',
  },
  {
    icon: Rocket,
    title: 'Client-Obsessed Delivery',
    desc: 'We measure success not by lines of code deployed, but by actual business velocity and outcomes achieved.',
  },
]

export default function CultureSection({ teams, culture }: CultureSectionProps) {
  const teamsHeading = teams?.heading || 'Our Teams'
  const teamsDesc =
    teams?.description ||
    'At Travash Software Solutions, our team is the backbone of our success. We are a passionate group of developers, designers, and innovators dedicated to building cutting-edge software solutions that drive businesses forward.'

  const cultureHeading = culture?.heading || 'Our Culture'
  const cultureDesc =
    culture?.description ||
    'At Travash, we cultivate a culture of innovation, excellence, and collaboration. Our team thrives on cutting-edge technology, problem-solving, and client-centric strategies. We empower talent, embrace diversity, and drive digital transformation with passion and purpose—delivering impact that lasts.'

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Teams Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-2">
            THE PEOPLE BEHIND TRAVASH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight mb-4">
            {teamsHeading} & {cultureHeading}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            {teamsDesc}
          </p>
        </div>

        {/* Culture Narrative & Pillars */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Culture Statement card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#004771] to-[#02487D] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>HOW WE WORK</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 leading-snug">
                Fostering an Environment Where Great Engineers Thrive
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {cultureDesc}
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs font-semibold text-[#14B8A6]">
              Work-Life Balance • Psychological Safety • High Velocity
            </div>
          </div>

          {/* Right: 4 Culture Pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {CULTURE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-xs hover:border-gray-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#004771] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0B1E3D] mb-1.5">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
