import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'
import {
  Bot,
  Database,
  Code2,
  Cloud,
  Layers,
  Sparkles,
  ShieldCheck,
  Users,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Enterprise Engineering Services & AI Acceleration | Travash',
  description:
    'Explore Travash software engineering, AI agents, cloud architectures, data pipelines, and dedicated agile squads driving enterprise transformation worldwide.',
}

interface ServiceCategory {
  title: string
  description: string
  services: {
    title: string
    href: string
    description: string
    icon: any
    badge?: string
  }[]
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'AI & Data Engineering',
    description: 'Turn complex models and enterprise data into continuous operational leverage.',
    services: [
      {
        title: 'AI & Data Engineering',
        href: '/services/ai-data',
        description: 'Autonomous AI agents, private LLM fine-tuning, vector search & RAG workflows.',
        icon: Bot,
        badge: 'AI-First',
      },
      {
        title: 'Data & Analytics Solutions',
        href: '/services/data-analytics-solutions',
        description: 'High-speed ETL pipelines, modern cloud data warehouses, and custom BI dashboards.',
        icon: Database,
      },
      {
        title: 'Platform Engineering',
        href: '/services/platform-engineering',
        description: 'Multi-tenant SaaS architectures, internal developer portals, and scalable cloud microservices.',
        icon: Layers,
      },
    ],
  },
  {
    title: 'Cloud & Software Architecture',
    description: 'High-reliability software and scalable multi-cloud infrastructure built to last.',
    services: [
      {
        title: 'Software Engineering',
        href: '/services/software',
        description: 'Full-stack web applications, resilient backend microservices, and enterprise APIs.',
        icon: Code2,
      },
      {
        title: 'Cloud & DevOps',
        href: '/services/cloud',
        description: 'Multi-cloud architecture on AWS/Azure/GCP, Kubernetes clusters, and automated CI/CD.',
        icon: Cloud,
      },
      {
        title: 'Enterprise Applications',
        href: '/services/enterprise',
        description: 'Mission-critical ERP/CRM workflows, database integration, and legacy modernization.',
        icon: Cpu,
      },
    ],
  },
  {
    title: 'Digital Experiences & Talent',
    description: 'Customer-facing digital products, automated quality, and elastic developer capacity.',
    services: [
      {
        title: 'Digital Experiences',
        href: '/services/digital',
        description: 'Fast, responsive web interfaces, modern UI/UX design, and component design systems.',
        icon: Sparkles,
      },
      {
        title: 'Dedicated Tech Teams',
        href: '/services/dedicated-teams',
        description: 'Pre-vetted senior software engineers and squads embedded directly into your sprints.',
        icon: Users,
      },
      {
        title: 'Quality Assurance & Testing',
        href: '/services/qa',
        description: 'Continuous end-to-end automated test suites, performance benchmarks & security checks.',
        icon: ShieldCheck,
      },
    ],
  },
]

export default async function ServicesDirectoryPage() {
  let siteSettings = null
  try {
    siteSettings = await client.fetch(siteSettingsQuery)
  } catch {
    // fallback
  }

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Header */}
        <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-b from-[#EBF3FB] via-white to-[#F8FAFC] overflow-hidden">
          <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#004771] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
              Engineering Rigor Meets Artificial Intelligence
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From enterprise SaaS architecture and mission-critical cloud pipelines to sovereign AI agent deployments, we build software designed to scale without friction.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                Schedule Technical Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-[#0B1E3D] font-bold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Categorized Services Grid */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {SERVICE_CATEGORIES.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D]">
                    {category.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.services.map((service, sIdx) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={sIdx}
                        href={service.href}
                        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-[#004771]/50 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#004771] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#004771] group-hover:text-white transition-all">
                              <Icon className="w-6 h-6" />
                            </div>
                            {service.badge && (
                              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-[#004771] group-hover:text-[#14B8A6] transition-colors gap-1.5">
                          <span>Explore Capability</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
