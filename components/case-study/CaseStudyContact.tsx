'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'
import CountryPhoneInput from '@/components/ui/CountryPhoneInput'

interface CaseStudyContactProps {
  heading?: string
  description?: string
}

export default function CaseStudyContact({
  heading = 'Ready to\nautomate and\nsolve operational\nbottlenecks?',
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
      subject:
        formData.get('subject') || 'Case Study Inquiry: ' + heading.replace(/\n/g, ' '),
      message: formData.get('message'),
      website: formData.get('website'),
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (res.ok && result.success !== false) {
        toast.success(result.message || "Thank you! We'll be in touch shortly.", { duration: 5000 })
        formRef.current?.reset()
      } else {
        toast.error(result.message || result.error || 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const headingLines = heading.split('\n')

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <Toaster position="top-right" richColors />
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Lavender / Periwinkle Container Card matching Screenshot 2 */}
        <div className="bg-[#F8F5FD] rounded-[32px] p-8 sm:p-12 lg:p-16 border border-gray-100">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Display Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-5">
                {headingLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal max-w-md">
                {description}
              </p>
            </motion.div>

            {/* Right Column: Clean White Form Card matching Screenshot 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xs border border-gray-100 w-full">
                <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  {/* Honeypot field for bot spam protection */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="cs-website">Website</label>
                    <input
                      id="cs-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cs-name" className="text-base sm:text-[13px] font-semibold text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cs-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      className="w-full h-[58px] bg-white border border-[#D9DEE7] rounded-xl px-4 sm:px-5 text-[13px] sm:text-[13px] text-gray-800 placeholder:text-[#9AA5B8] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/10 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cs-phone" className="text-base sm:text-[13px] font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <CountryPhoneInput
                      id="cs-phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="h-[58px]"
                      inputClassName="h-[58px] rounded-r-xl px-4 sm:px-5 text-[13px] sm:text-[13px] border-[#D9DEE7] placeholder:text-[#9AA5B8] focus:ring-2 focus:ring-[#003865]/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cs-email" className="text-base sm:text-[13px] font-semibold text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cs-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Your Email"
                      className="w-full h-[58px] bg-white border border-[#D9DEE7] rounded-xl px-4 sm:px-5 text-[13px] sm:text-[13px] text-gray-800 placeholder:text-[#9AA5B8] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/10 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cs-subject" className="text-base sm:text-[13px] font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      id="cs-subject"
                      name="subject"
                      type="text"
                      placeholder="Enter Your Subject"
                      className="w-full h-[58px] bg-white border border-[#D9DEE7] rounded-xl px-4 sm:px-5 text-[13px] sm:text-[13px] text-gray-800 placeholder:text-[#9AA5B8] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/10 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label htmlFor="cs-message" className="text-base sm:text-[13px] font-semibold text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="cs-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Enter Your Message..."
                      className="w-full min-h-[150px] bg-white border border-[#D9DEE7] rounded-xl px-4 sm:px-5 py-4 text-[13px] sm:text-[13px] text-gray-800 placeholder:text-[#9AA5B8] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/10 resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:col-span-2 w-full bg-[#003865] hover:bg-[#002847] disabled:bg-gray-400 text-white font-semibold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-xs mt-1"
                  >
                    {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
