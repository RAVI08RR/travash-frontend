'use client'

import Image from 'next/image'

interface TrustedLogo {
  alt?: string
  image?: { asset?: { url: string } }
}

interface TrustedByProps {
  label?: string
  logos?: TrustedLogo[]
}

const LOCAL_LOGOS = [
  {
    name: 'Kotak Securities',
    src: '/Kotak.svg',
    width: 130,
    height: 38,
  },
  {
    name: 'I4C',
    src: '/I4c.svg',
    width: 140,
    height: 42,
  },
  {
    name: 'Infosys',
    src: '/Infosys.svg',
    width: 100,
    height: 36,
  },
  {
    name: 'PIXL',
    src: '/pixl.svg',
    width: 80,
    height: 36,
  },
  {
    name: 'VISA',
    src: '/Visa.svg',
    width: 85,
    height: 32,
  }


]

interface SanityLogoItem {
  alt?: string
  image?: { asset?: { url: string } }
}

interface TrustedByProps {
  label?: string
  logos?: SanityLogoItem[]
}

export default function TrustedBy({ label, logos }: TrustedByProps) {
  const dynamicLogos =
    logos && logos.length > 0
      ? logos.map((l) => ({
        name: l.alt || 'Client Logo',
        src: l.image?.asset?.url || '',
        width: 140,
        height: 48,
      })).filter((l) => Boolean(l.src))
      : []

  const activeLogos = dynamicLogos.length > 0 ? dynamicLogos : LOCAL_LOGOS
  const marqueeItems = [...activeLogos, ...activeLogos, ...activeLogos]

  return (
    <section className="bg-[#F0F5FA] py-12 lg:py-16 border-t border-gray-100/60 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading-title">
            {label || 'Trusted by Startups, Enterprises & Public Sector'}
          </h2>
        </div>

        {/* Continuous Smooth Marquee Carousel across all screen sizes */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F0F5FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F0F5FA] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-12 sm:gap-16 lg:gap-14 w-max animate-marquee hover:[animation-play-state:paused] px-4">
            {marqueeItems.map((logo, idx) => (
              <div
                key={idx}
                className="logo-tr-client flex items-center justify-center opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-105 flex-shrink-0 cursor-pointer h-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-20 sm:max-h-21 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
