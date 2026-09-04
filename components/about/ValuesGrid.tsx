import { Shield, Sparkles, HeartHandshake, Users, Globe, Award } from 'lucide-react'

interface ValueItem {
  title: string
  description: string
  iconName?: string
}

interface ValuesGridProps {
  values?: ValueItem[]
  heading?: string
  eyebrow?: string
}

const DEFAULT_VALUES: ValueItem[] = [
  {
    title: 'Integrity & Trust',
    description:
      'We hold ourselves to unwavering ethical standards, complete transparency, and data sovereignty across every client engagement.',
    iconName: 'Shield',
  },
  {
    title: 'Value Creation',
    description:
      'We do not write code for code’s sake. Every architectural decision is designed to produce tangible revenue, cost efficiency, or competitive leverage.',
    iconName: 'Award',
  },
  {
    title: 'People-Centricity',
    description:
      'Behind every breakthrough application are exceptional human engineers. We champion work-life balance, continuous mentorship, and mutual respect.',
    iconName: 'Users',
  },
  {
    title: 'Inclusion & Equal Opportunity',
    description:
      'Fostering diverse perspectives and inclusive work environments that unlock creative problem-solving and global collaboration.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Social Responsibility',
    description:
      'Committed to sustainable engineering, digital accessibility, and deploying technology that delivers positive social impact.',
    iconName: 'Globe',
  },
  {
    title: 'Relentless Innovation',
    description:
      'Constantly mastering emerging paradigms—from sovereign LLMs to cloud native microservices—to keep our clients ahead of the curve.',
    iconName: 'Sparkles',
  },
]

const iconMap: Record<string, any> = {
  Shield,
  Award,
  Users,
  HeartHandshake,
  Globe,
  Sparkles,
}

export default function ValuesGrid({ values, heading, eyebrow }: ValuesGridProps) {
  const items = values && values.length > 0 ? values : DEFAULT_VALUES

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-2">
            {eyebrow || 'WHAT GUIDES US'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3D] tracking-tight">
            {heading || 'Our Core Values'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            The enduring principles that define how we build software, collaborate with clients, and nurture talent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => {
            const Icon = (item.iconName && iconMap[item.iconName]) || Sparkles
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#004771] group-hover:bg-[#004771] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E3D] mb-3 group-hover:text-[#004771] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
