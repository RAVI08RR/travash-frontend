'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { User, Phone, Mail, MessageSquare, FileText, Send } from 'lucide-react'
import { Toaster, toast } from 'sonner'

interface ContactData {
  heading?: string
  subheading?: string
  sideImage?: { asset?: { url: string } }
  submitLabel?: string
}

export default function Contact({ data }: { data?: ContactData }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const imageUrl = data?.sideImage?.asset?.url || '/getintouch.png'
  const submitLabel = data?.submitLabel || 'Get a Free Consultation'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      subject: formData.get('subject'),
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
    'w-full bg-white  rounded-lg px-4 py-2.5 sm:py-3 text-sm text-[#0A1E3B] placeholder:text-gray-400 focus:outline-none transition-all duration-200 shadow-2xs'

  return (
    <>
      <Toaster position="top-right" richColors />
      <section className="py-12 sm:py-16 lg:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden" id="contact">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Unified Card Container matching screenshot 4 */}
          <div className="bg-[#EEF4FB] rounded-3xl lg:rounded-[32px] overflow-hidden shadow-sm grid lg:grid-cols-12 items-stretch">
            {/* Left: Support agent image flush with left border */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[580px]">
              <Image
                src={imageUrl}
                alt={data?.heading || 'Travash consultation specialist'}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right: Heading, Subtitle & Form inside the same light container */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="section-heading-title">
                  {data?.heading ? (
                    data.heading
                  ) : (
                    <>
                      Request Your<br />
                      Free Consultation
                    </>
                  )}
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14px] mt-2 leading-relaxed">
                  {data?.subheading || "Get in touch today and let's turn your idea into a remarkable success story!"}
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1: Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-gray-700">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter Your Phone"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Email & Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Your Email"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Enter Your Subject"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-global h-[66px] rounded-[5px] w-full bg-[#073B6C] hover:bg-[#0B4785] text-white font-semibold px-6 transition-colors duration-200 text-[15px] shadow-sm disabled:opacity-70 mt-2 cursor-pointer flex items-center justify-center"
                >
                  {isSubmitting ? 'Submitting...' : submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
