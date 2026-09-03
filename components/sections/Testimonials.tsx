'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  authorName: string
  authorTitle: string
  authorPhoto?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Travash has been our trusted technology partner for nearly eight years. Handling luxury real estate marketing in Dubai requires flawless digital tools, and they consistently deliver. They successfully digitized our operations by building custom CRM apps and high-performance websites for our team and our high-profile clients. Their technical expertise, reliability, and deep understanding of the real estate industry have made them an invaluable part of our growth. We are extremely happy with their work and look forward to continuing this strong relationship.',
    authorName: 'Imran Khan',
    authorTitle: 'Managing Director - PIXL Group (Dubai, UAE)',
    authorPhoto: 'https://travash.com/wp-content/uploads/2026/08/imran-pixl-client-dubai-1.webp',
  },
  {
    quote:
      'The Satyaapan web application built by Travash has successfully solved our biggest challenge: identifying fraudulent activity and fake records during the passport verification process. Our officers use the platform daily to securely cross-reference applications, making the entire process highly convenient and incredibly efficient.',
    authorName: 'Senior Officer',
    authorTitle: 'Passport & Security Verification · Govt. of Telangana',
    authorPhoto: 'https://travash.com/wp-content/uploads/2026/08/i4c-travash-client.png',
  },
  {
    quote:
      'For six years, Travash has been the powerful engine driving our successful deliveries, and their recent work on the UGO logistics application is truly next-level. Architecting a highly complex supply chain platform demands immense expertise, and the team navigated intricate routing workflows with absolute precision.',
    authorName: 'Ross Redfern',
    authorTitle: 'Managing Director · SWD Group',
    authorPhoto: 'https://travash.com/wp-content/uploads/2026/08/swd-ross-travash-client.webp',
  },
  {
    quote:
      'Travash transformed our legacy infrastructure into a scalable cloud-native microservices architecture. Their proactive communication, technical depth, and agility made them an indispensable extension of our product engineering team from day one.',
    authorName: 'Michael Chen',
    authorTitle: 'Chief Product Officer · FinTech Nexus',
    authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    quote:
      'Partnering with Travash for our AI-assisted patient analytics workflow was one of the best decisions we made. Their attention to security compliance, flawless execution, and speed of delivery exceeded all our expectations.',
    authorName: 'Sarah Jenkins',
    authorTitle: 'VP of Engineering · HealthBridge Global',
    authorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
]

interface SanityTestimonial {
  quote?: string
  authorName?: string
  authorTitle?: string
  authorCompany?: string
  authorPhoto?: { asset?: { url: string } }
}

interface TestimonialsSectionData {
  heading?: string
  testimonials?: SanityTestimonial[]
}

export default function Testimonials({ data }: { data?: TestimonialsSectionData }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  const activeList =
    data?.testimonials && data.testimonials.length > 0
      ? data.testimonials.map((t, i) => {
          const fb = TESTIMONIALS[i % TESTIMONIALS.length]
          return {
            quote: t.quote || fb.quote,
            authorName: t.authorName || fb.authorName,
            authorTitle: t.authorTitle || fb.authorTitle,
            authorPhoto: t.authorPhoto?.asset?.url || fb.authorPhoto,
          }
        })
      : TESTIMONIALS

  const current = activeList[currentIdx % activeList.length]

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="section-heading-title">
            {data?.heading || 'Trusted by Businesses Worldwide'}
          </h2>
        </div>

        {/* Big Testimonial Container Card matching Image 2 */}
        <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-200/80">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Rectangular photo */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm border border-gray-100">
              <Image
                src={current.authorPhoto || 'https://travash.com/wp-content/uploads/2026/08/imran-pixl-client-dubai-1.webp'}
                alt={current.authorName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>

            {/* Right: Quote and author credentials */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-6">
              <p className="text-gray-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                {current.quote}
              </p>
              <div className="pt-2">
                <p className="font-bold text-[#0B4785] text-lg sm:text-xl">{current.authorName}</p>
                <p className="text-sm text-gray-500 font-normal mt-0.5">
                  {current.authorTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {activeList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIdx ? 'w-2.5 h-2.5 bg-[#0B4785]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
