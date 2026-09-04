'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, LineChart, ShieldCheck } from 'lucide-react'
import type { ServiceFinalCTA } from '@/lib/service-data'

export default function ServiceCTA({ cta }: { cta: ServiceFinalCTA }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!cta) return null

  const bgImage = cta.backgroundImage || '/images/services/cta-bg.webp'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  const features = cta.features || [
    {
      title: 'Strategic Guidance',
      description: 'Connects businesses with experienced architects.',
    },
    {
      title: 'Revenue-Focused Roadmaps',
      description: 'Ensures technology drives measurable business outcomes.',
    },
    {
      title: 'Data Readiness Evaluation',
      description: 'Assesses current states and defines next steps.',
    },
  ]

  const featureIcons = [Compass, LineChart, ShieldCheck]

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 font-['Plus_Jakarta_Sans',sans-serif] bg-[#066095] text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(6, 96, 149, 0.92) 0%, rgba(4, 76, 118, 0.95) 100%), url('${bgImage}')`,
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title & Strategic Guidance Points */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-[-1.5px] leading-[1.18] mb-5">
              {cta.heading || 'Ready to build infrastructure that accelerates your business?'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl">
              {cta.description ||
                'Connect with our certified architects to review your roadmap, audit your cloud spend, or scale your engineering capacity.'}
            </p>

            {/* 3 Guidance Value Points */}
            <div className="flex flex-col gap-4 w-full">
              {features.map((feat, idx) => {
                const Icon = featureIcons[idx % featureIcons.length]
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white text-[#066095] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-0.5 leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: Sneha Sharma Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-gray-900 border border-white/20">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#066095] block mb-1">
                  Client Success
                </span>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Sneha Sharma - Client Success
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  You’re in the right place – let’s talk!
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-center">
                  <h4 className="text-lg font-bold text-[#166534] mb-1">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-[#15803D]">
                    Thank you! Sneha Sharma and our engineering team will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#066095] focus:ring-1 focus:ring-[#066095]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#066095] focus:ring-1 focus:ring-[#066095]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#066095] focus:ring-1 focus:ring-[#066095]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Project Details / Requirement *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your current infrastructure, pipeline, or BI requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#066095] focus:ring-1 focus:ring-[#066095] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-global h-[66px] rounded-[5px] w-full inline-flex items-center justify-center bg-[#066095] hover:bg-[#044c76] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer mt-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Schedule Architecture Call'}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
