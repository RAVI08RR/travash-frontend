'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TechnologyCategory {
  category: string
  technologies: string[]
  description?: string
}

interface TechnologyStackProps {
  title?: string
  subtitle?: string
  items?: TechnologyCategory[]
}

export default function TechnologyStack({
  title = 'Enterprise\nTechnology Stack',
  subtitle = 'To deliver a robust custom software solution capable of processing millions of records securely, we utilised a highly resilient tech stack:',
  items,
}: TechnologyStackProps) {
  const words = title.split('\n')

  return (
    <section id="technology-stack" className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12]">
              {words.length > 1 ? (
                <>
                  {words[0]}
                  <br />
                  {words.slice(1).join(' ')}
                </>
              ) : (
                <>
                  Enterprise
                  <br />
                  Technology Stack
                </>
              )}
            </h2>
          </motion.div>

          {/* Right Column: Intro + 4 Lavender Cards matching Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Backend Architecture */}
              <div className="bg-[#F4F6FB] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-start min-h-[170px]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B3B66] text-center mb-5">
                  BACKEND ARCHITECTURE
                </h3>
                <div className="flex items-center justify-center gap-4 my-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center p-3 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/Java.svg"
                      alt="Java"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center p-3 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/laravel-icon-1990x2048-xawylrh0-292x300.png.bv.webp"
                      alt="Laravel"
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Database Infrastructure */}
              <div className="bg-[#F4F6FB] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-start min-h-[170px]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B3B66] text-center mb-5">
                  DATABASE INFRASTRUCTURE
                </h3>
                <div className="my-auto flex items-center justify-center">
                  <div className="w-48 sm:w-56 h-16 sm:h-20 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center px-6 py-3 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/mysql-1.svg"
                      alt="MySQL"
                      width={110}
                      height={42}
                      className="object-contain max-h-12 w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3: Frontend Interface */}
              <div className="bg-[#F4F6FB] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-start min-h-[170px]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B3B66] text-center mb-5">
                  FRONTEND INTERFACE
                </h3>
                <div className="flex items-center justify-center gap-3.5 my-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center p-2.5 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/HTML5.svg"
                      alt="HTML5"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center p-2.5 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/CSS3-1.svg"
                      alt="CSS3"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-xs border border-gray-100/80 flex items-center justify-center p-2.5 hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/casestudy-img/jQuery.svg"
                      alt="jQuery"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4: Advanced Integrations & AI Automation */}
              <div className="bg-[#F4F6FB] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-start min-h-[170px]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B3B66] text-center mb-4">
                  ADVANCED INTEGRATIONS & AI AUTOMATION
                </h3>
                <div className="flex flex-col gap-2.5 w-full my-auto">
                  <div className="bg-white rounded-xl shadow-xs border border-gray-100/80 px-4 py-2.5 text-center text-xs text-gray-700 font-medium leading-snug">
                    DARPAN technology, AFIS (Automated Fingerprint Identification System)
                  </div>
                  <div className="bg-white rounded-xl shadow-xs border border-gray-100/80 px-4 py-2.5 text-center text-xs text-gray-700 font-medium leading-snug">
                    Artificial Intelligence, Automated Data Extraction, Advanced Facial Recognition, Real-Time Matching
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
