import { Heart, BookOpen, Rocket, Users, ShieldCheck, Laptop } from 'lucide-react'

const BENEFITS = [
  {
    icon: Heart,
    title: 'Award-Winning Work-Life Balance',
    desc: 'We love our people and ensure they are supported at work and at home with flexible hours and generous leave policies.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning & Upskilling',
    desc: 'Dedicated budget and company time for technical certifications, conferences, and mastery in AI, Cloud, and modern frameworks.',
  },
  {
    icon: Rocket,
    title: 'High-Impact Engineering',
    desc: 'Work on production systems utilized by global enterprises, fintech institutions, and critical public-sector initiatives.',
  },
  {
    icon: Users,
    title: 'Collaborative Squads',
    desc: 'Low bureaucracy, transparent communication, and supportive teammates who help you solve complex technical hurdles.',
  },
  {
    icon: Laptop,
    title: 'Modern Hardware & Tooling',
    desc: 'Latest M-series MacBooks, ergonomic setups, and access to premium developer tooling and AI copilots.',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Health & Wellness',
    desc: 'Premium medical coverage for you and your dependents, wellness programs, and mental health resources.',
  },
]

export default function CareerBenefits() {
  return (
    <section id="life-at-travash" className="py-16 sm:py-20 lg:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-2">
            WHY JOIN TRAVASH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight">
            Perks Built Around People
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            We provide the resources, freedom, and support you need to do your best work while enjoying life outside of it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#004771] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E3D] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
