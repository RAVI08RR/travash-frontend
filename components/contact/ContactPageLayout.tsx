'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, Clock, Send, MessageSquare, ShieldCheck } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import OfficeLocations, { OfficeLocation } from './OfficeLocations'

interface ContactPageLayoutProps {
  email?: string
  phone?: string
  offices?: OfficeLocation[]
  socialLinks?: Array<{ platform: string; url: string }>
}

export default function ContactPageLayout({
  email = 'contact@travash.com',
  phone = '(+91) 7416743434',
  offices,
  socialLinks,
}: ContactPageLayoutProps) {
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
      subject: formData.get('subject') || 'General Inquiry',
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

  return (
    <>
      <Toaster position="top-right" richColors />
      <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Direct Contact & Offices */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D] tracking-tight mb-4">
                  Let&apos;s Build Something Extraordinary Together
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Whether you need dedicated engineering squads, AI integration, or an end-to-end software architecture consultation, we are ready to assist.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#EEF4FB] hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#004771] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">Email Us Directly</div>
                    <div className="text-sm font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors">
                      {email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#EEF4FB] hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#14B8A6] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">Call Our Experts</div>
                    <div className="text-sm font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors">
                      {phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Office Locations */}
              <OfficeLocations offices={offices} />

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-2.5 text-xs text-gray-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                <span>Typical response time within 24 business hours. Confidential NDA by request.</span>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#EEF4FB] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-blue-100/60">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1E3D] tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Share your project details and we will schedule an introductory strategy call.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#0B1E3D] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:border-[#004771] transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Your Contact Number"
                        className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#0B1E3D] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:border-[#004771] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email & Subject */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Email-ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@company.com"
                        className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#0B1E3D] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:border-[#004771] transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Subject / Interest
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="e.g. AI Engineering, Web App"
                        className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#0B1E3D] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:border-[#004771] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please briefly describe your timeline, goals, or requirements..."
                      className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#0B1E3D] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:border-[#004771] transition-all shadow-2xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#004771] hover:bg-[#02487D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-500 text-center pt-1">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
