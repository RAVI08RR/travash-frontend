import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import {
  Compass,
  Home,
  Layers,
  ArrowRight,
  Briefcase,
  Building2,
  Users,
  BookOpen,
  Mail,
  Phone,
  Search,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Travash Software Solutions',
  description:
    'The page you are looking for could not be found. Explore our services, industry solutions, portfolio, or contact the Travash engineering team.',
  robots: {
    index: false,
    follow: false,
  },
}

async function getSiteSettings() {
  try {
    const settings = await client.fetch(siteSettingsQuery)
    return settings || null
  } catch {
    return null
  }
}

const POPULAR_DESTINATIONS = [
  {
    title: 'Our Core Services',
    description: 'Custom software, AI agents, cloud modernizations & full-stack development.',
    href: '/services',
    icon: Layers,
    badge: '10 Practices',
  },
  {
    title: 'Industry Solutions',
    description: 'Targeted engineering for FinTech, Healthcare, GovTech, Logistics & more.',
    href: '/industries',
    icon: Building2,
    badge: '8 Verticals',
  },
  {
    title: 'Client Case Studies & Portfolio',
    description: 'Explore real enterprise delivery results, architecture, and client outcomes.',
    href: '/portfolio',
    icon: Briefcase,
    badge: 'Proven ROI',
  },
  {
    title: 'Company Leadership & About Us',
    description: 'Learn about our 20+ year engineering heritage and global technical leadership.',
    href: '/about-us',
    icon: Users,
    badge: 'Since 2005',
  },
  {
    title: 'Engineering Careers',
    description: 'Join our elite global engineering teams building next-generation products.',
    href: '/career',
    icon: Compass,
    badge: 'We are hiring',
  },
  {
    title: 'Insights & Technical Blog',
    description: 'Deep dives on generative AI, enterprise cloud systems, and best practices.',
    href: '/blogs',
    icon: BookOpen,
    badge: 'Latest Articles',
  },
]

export default async function NotFound() {
  const siteSettings = await getSiteSettings()
  const contactEmail = siteSettings?.contactEmail || 'contact@travash.com'
  const contactPhone = siteSettings?.contactPhone || '(+91) 7416743434'

  return (
    <>
      <Navbar settings={siteSettings} />

      <main className="min-h-[80vh] bg-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E0F2FE]/40 via-teal-50/20 to-transparent pointer-events-none -z-10 blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#004771]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* 404 Hero Section */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          {/* Status Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#004771] text-xs font-extrabold uppercase tracking-wider mb-6 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#14B8A6] animate-spin" style={{ animationDuration: '8s' }} />
            <span>Error 404 • Destination Not Found</span>
          </div>

          {/* Big High-Tech 404 Display */}
          <div className="relative mb-6">
            <div className="text-7xl sm:text-9xl font-black tracking-tight text-[#0B1E3D] select-none">
              <span className="bg-gradient-to-r from-[#004771] via-[#02487D] to-[#14B8A6] bg-clip-text text-transparent">
                404
              </span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#004771]/10 via-[#14B8A6]/10 to-[#02487D]/10 blur-2xl -z-10 opacity-70" />
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.2] max-w-2xl mx-auto mb-4">
            We couldn't find the page you were looking for
          </h1>

          {/* Explanatory Message */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            The link you accessed might be broken, outdated, or the page has been restructured.
            Explore one of our key destinations below or return home.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-[#0B1E3D] font-bold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all duration-200"
            >
              <Layers className="w-4 h-4 text-[#004771]" />
              <span>Explore Services</span>
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 text-gray-700 font-bold text-sm sm:text-base hover:bg-white transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#14B8A6]" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Section Divider with Label */}
          <div className="relative mb-10 max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Or jump directly to a popular section
              </span>
            </div>
          </div>

          {/* Quick Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left max-w-5xl mx-auto mb-16">
            {POPULAR_DESTINATIONS.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-[#004771]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#004771] group-hover:bg-[#004771] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#E0F2FE] group-hover:text-[#004771] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#004771] group-hover:translate-x-0.5 transition-transform">
                    <span>Visit section</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Direct Assistance CTA Card */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0B1E3D] to-[#004771] text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Direct Engineering Support
              </span>
              <h2 className="text-xl sm:text-2xl font-bold !text-white">
                Looking for something specific or need immediate help?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
                Connect directly with our consulting team to discuss engineering partnerships, project scoping, or platform integration questions.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-300" />
                  <span>{contactEmail}</span>
                </a>

                <a
                  href={`tel:${contactPhone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-300" />
                  <span>{contactPhone}</span>
                </a>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold transition-colors shadow-sm"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer settings={siteSettings} />
    </>
  )
}
