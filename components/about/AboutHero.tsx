import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, ShieldCheck, Users } from 'lucide-react'

interface AboutHeroProps {
  data?: {
    eyebrow?: string
    heading?: string
    description?: string
    heroImage?: { asset?: { url: string } }
  }
}

export default function AboutHero({ data }: AboutHeroProps) {
  const eyebrow = data?.eyebrow || 'ABOUT TRAVASH'
  const heading =
    data?.heading ||
    'We are a team of great innovators, creators and differentiators with exceptional high standards.'
  const description =
    data?.description ||
    'Founded in 2005 with a clear vision: to transform technology from a business cost center into a powerful engine of growth, scalability, and competitive advantage for enterprises worldwide.'
  const imageUrl = data?.heroImage?.asset?.url || '/home-img/Group 1000003287.png'

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F4F8FC] via-white to-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>{eyebrow}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] mb-6">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            {description}
          </p>

          {/* Quick Credibility Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 pb-8 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#14B8A6]" />
              <span>Founded in 2005</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#004771]" />
              <span>90%+ Client Retention</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
              <span>500+ Delivered Solutions</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span>Speak with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-[#0B1E3D] font-semibold text-sm sm:text-base shadow-xs hover:bg-gray-50 transition-all"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,71,133,0.12)] border border-gray-200/80">
            <Image
              src={imageUrl}
              alt="Travash engineering team and leadership"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white max-w-2xl">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#14B8A6] uppercase block mb-1">
                  Global Delivery Capability
                </span>
                <p className="text-sm sm:text-base text-gray-200 leading-snug">
                  High-velocity engineering teams deploying secure, scalable, and intelligent software systems across North America, Europe, the Middle East, and APAC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
