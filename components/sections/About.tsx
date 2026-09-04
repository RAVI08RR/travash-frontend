'use client'

import Image from 'next/image'
import Link from 'next/link'

interface AboutSectionData {
  heading?: string
  paragraphs?: string[]
  image?: { asset?: { url: string } }
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_PARAGRAPHS = [
  'Travash founded in 2005 by a visionary Senior Technologist, Travash was born from a mission to revolutionize perceptions of technology. We aimed to shift the narrative from viewing technology as a cost burden to embracing it as a powerful profit-driving force. Over the years, this vision has propelled us to deliver innovative IT solutions that empower businesses worldwide.',
  'At Travash, we don’t just adapt to technological evolution; we lead it. By combining deep expertise with forward-thinking strategies, we help organizations turn challenges into opportunities. Whether it’s streamlining operations, enhancing user experiences, or driving revenue growth, we craft tailored solutions that make a measurable impact. Join us on this journey of innovation and growth, where technology becomes the cornerstone of your success. With Travash, it’s not just IT—it’s IT redefined.',
]

export default function About({ data }: { data?: AboutSectionData }) {
  const imageUrl = data?.image?.asset?.url || '/home-img/wp6119334 2.png'
  const paragraphs = data?.paragraphs && data.paragraphs.length > 0 ? data.paragraphs : DEFAULT_PARAGRAPHS
  const ctaLabel = data?.ctaLabel || 'Know More'
  const ctaHref = data?.ctaHref || '/about'

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Team photo matching screenshot 5 */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl lg:rounded-[32px] overflow-hidden shadow-md border border-gray-100">
              <Image
                src={imageUrl}
                alt={data?.heading || 'Built to Solve Real Business Problems'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Copy matching screenshot 5 */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="section-heading-title">
              {data?.heading ? (
                data.heading
              ) : (
                <>
                  Built to Solve Real<br />
                  Business Problems
                </>
              )}
            </h2>

            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-2">
              <Link
                href={ctaHref}
                className="btn-global h-[66px] rounded-[5px] inline-flex items-center justify-center border border-[#0B4785]/50 text-[#0B4785] hover:bg-[#0B4785] hover:text-white font-semibold px-9 text-sm transition-all duration-200"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
