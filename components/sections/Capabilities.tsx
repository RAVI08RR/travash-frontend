'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CapabilityCard {
  icon?: { asset?: { url: string } }
  iconSrc?: string
  iconName?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

interface CapabilitiesData {
  heading?: string
  cards?: CapabilityCard[]
}

const DEFAULT_CARDS: CapabilityCard[] = [
  {
    iconSrc: '/home-img/Layer_x0020_1.png',
    title: 'Platform Engineering',
    description:
      'We build secure, multi-tenant SaaS platforms and custom enterprise software to future-proof your business.',
    ctaLabel: 'Explore Platform Engineering',
    ctaHref: '/services/platform-engineering',
  },
  {
    iconSrc: '/home-img/Union.png',
    title: 'AI & Automation',
    description:
      'Put your data to work. We integrate AI voice agents and smart workflows to cut operational costs and eliminate manual work.',
    ctaLabel: 'Explore AI Solutions',
    ctaHref: '/services/ai-automation',
  },
  {
    iconSrc: '/home-img/Vector.png',
    title: 'Dedicated Tech Teams',
    description:
      'Accelerate execution without the overhead. Scale instantly by integrating our globally vetted developers into your agile workflows.',
    ctaLabel: 'Hire Dedicated Talent',
    ctaHref: '/services/dedicated-teams',
  },
]

export default function Capabilities({ data }: { data?: CapabilitiesData }) {
  const cards =
    data?.cards && data.cards.length > 0
      ? data.cards.map((c, i) => ({
          iconSrc: c.icon?.asset?.url || c.iconSrc || DEFAULT_CARDS[i % DEFAULT_CARDS.length].iconSrc,
          title: c.title || DEFAULT_CARDS[i % DEFAULT_CARDS.length].title,
          description: c.description || DEFAULT_CARDS[i % DEFAULT_CARDS.length].description,
          ctaLabel: c.ctaLabel || DEFAULT_CARDS[i % DEFAULT_CARDS.length].ctaLabel,
          ctaHref: c.ctaHref || DEFAULT_CARDS[i % DEFAULT_CARDS.length].ctaHref,
        }))
      : DEFAULT_CARDS

  const heading = data?.heading || 'Capabilities That Move Business Forward'

  return (
    <section className="py-12 lg:py-16 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="section-heading-title">
            {heading}
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F5] border border-gray-200/80 rounded-[20px] p-8 lg:p-12 flex flex-col items-start text-left gap-6 hover:shadow-xl hover:shadow-[#0B4785]/5 transition-all duration-300 group"
            >
              {/* Centered Icon from public/home-img */}
              <div className="w-20 h-20 relative flex items-center justify-start">
                <Image
                  src={card.iconSrc!}
                  alt={card.title || 'Capability icon'}
                  width={68}
                  height={68}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-3 flex-1 items-start">
                <h3 className="text-2xl lg:text-[26px] font-bold text-[#0B4785] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={card.ctaHref || '/services'}
                className="btn-global h-[66px] rounded-[5px] w-full inline-flex items-center justify-center border border-[#0B4785]/40 hover:border-[#0B4785] hover:bg-white text-[#0B4785] font-semibold text-sm transition-all duration-200 mt-auto"
              >
                {card.ctaLabel || 'Explore More'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
