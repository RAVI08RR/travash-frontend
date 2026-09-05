'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'

interface CaseStudyContactProps {
  heading?: string
  description?: string
}

export default function CaseStudyContact({
  heading = 'Ready to automate and solve operational bottlenecks?',
  description = 'At Travash, we engineer enterprise-grade AI and automation solutions that solve complex business challenges and streamline operations. Visit travash.com to connect with our digital transformation experts.',
}: CaseStudyContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      subject: 'Case Study Inquiry: ' + heading,
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        toast.success("Thank you! We'll be in touch shortly.", { duration: 5000 })
        formRef.current?.reset()
      } else {
        const err = await res.json()
        toast.error(err.error || 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:border-[#02487D] focus:bg-white transition-all duration-200 shadow-2xs'

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden">
      <Toaster position="top-right" richColors />
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Title & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-5">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal max-w-md">
              {description}
            </p>
          </motion.div>

          {/* Right Column: Clean White Lead Form matching PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cs-name" className="text-xs font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    id="cs-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Name"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cs-phone" className="text-xs font-semibold text-gray-700">
                    Phone
                  </label>
                  <input
                    id="cs-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Phone"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cs-email" className="text-xs font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    id="cs-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Email"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cs-message" className="text-xs font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="cs-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Enter Message"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#02487D] hover:bg-[#003865] text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed mt-2 active:scale-98"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
