'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { ServiceTestimonial as TestimonialType } from '@/lib/service-data'

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      'Travash transformed our verification process completely. Their AI-powered solution was not only technically impressive but also delivered real business impact from day one. The team understood our domain deeply and delivered beyond expectations.',
    author: 'Imran Khan',
    role: 'Chief Technology Officer',
    company: 'PIXL Group',
    avatarImage: '/images/services/imran-khan.png',
  },
  {
    quote:
      "Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens' hard-earned rupees.",
    author: 'Senior Leadership & National Coordinator',
    role: 'Cyber Crime Coordination',
    company: 'National Anti-Fraud Network',
    avatarImage: '/images/services/testimonial-avatar.jpeg',
  },
  {
    quote:
      'Their team brought deep architecture rigor to our enterprise data infrastructure. Deployment cycles decreased by 65%, and our analytics pipelines run seamlessly at scale without operational overhead.',
    author: 'Rajesh Varma',
    role: 'VP of Engineering',
    company: 'Global Tech Systems',
    avatarImage: '/images/services/imran-khan.png',
  },
  {
    quote:
      'The engineering maturity and proactive problem solving of the Travash team made our cloud migration zero-downtime. They truly act as an extension of our core product engineering team.',
    author: 'Sarah Jenkins',
    role: 'Head of Digital Products',
    company: 'Enterprise Network',
    avatarImage: '/images/services/testimonial-avatar.jpeg',
  },
  {
    quote:
      'From architecture review to production rollout, Travash delivered high velocity with exceptional quality standards. Our platform now handles millions of concurrent requests effortlessly.',
    author: 'David Chen',
    role: 'Director of Technology',
    company: 'Apex Cloud Solutions',
    avatarImage: '/images/services/imran-khan.png',
  },
]

export default function ServiceTestimonial({ testimonial }: { testimonial?: TestimonialType }) {
  // If a specific custom testimonial was passed via props/CMS, use it as primary item
  const testimonialsList = testimonial && testimonial.quote
    ? [
        {
          quote: testimonial.quote,
          author: testimonial.author || 'Imran Khan',
          role: testimonial.role || 'Chief Technology Officer',
          company: testimonial.company || 'PIXL Group',
          avatarImage:
            testimonial.image?.asset?.url ||
            testimonial.avatarImage ||
            '/images/services/imran-khan.png',
        },
        ...DEFAULT_TESTIMONIALS.filter((t) => t.author !== testimonial.author),
      ].slice(0, 5)
    : DEFAULT_TESTIMONIALS

  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonialsList[currentIndex]

  return (
    <section
      id="testimonial"
      className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      {/* Kept container width aligned with the rest of the page */}
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#3D3C3C] tracking-tight leading-tight">
            What Technical Leaders Say
          </h2>
        </motion.div>

        {/* Centered testimonial card container matching screenshot */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-100/90 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left: Rectangular photo with rounded corners */}
                <div className="md:col-span-4 flex justify-center md:justify-start">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] rounded-2xl sm:rounded-[20px] overflow-hidden shadow-xs bg-gray-100">
                    <Image
                      src={current.avatarImage}
                      alt={current.author}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>

                {/* Right: Quote text and author credits */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <p className="text-gray-600 sm:text-gray-700 text-sm sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed font-normal">
                    {current.quote}
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <h4 className="text-base sm:text-lg font-bold text-[#02487D] leading-snug">
                      {current.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                      {current.role ? `${current.role}, ` : ''}{current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots matching screenshot */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-2.5 h-2.5 bg-[#02487D]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
