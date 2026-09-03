import { Quote } from 'lucide-react'

interface TestimonialData {
  quote: string
  author: string
  role: string
  company: string
  image?: { asset?: { url: string } }
}

export default function ClientPerspective({
  data,
  heading = 'Client Perspective',
  intro = 'How leadership and stakeholders evaluated the tangible impact of digital transformation.',
}: {
  data: TestimonialData
  heading?: string
  intro?: string
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] border-t border-gray-100/80 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4785] block mb-2">
              Stakeholder Feedback
            </span>
            <h2 className="section-heading-title !text-2xl sm:!text-3xl lg:!text-4xl mb-4">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {intro}
            </p>
          </div>

          {/* Right: Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
              {/* Subtle background quote watermark */}
              <Quote className="absolute right-6 bottom-6 w-24 h-24 text-gray-100/80 pointer-events-none -scale-x-100" />

              <div className="relative z-10 flex flex-col gap-6">
                <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal italic">
                  &ldquo;{data.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B4785]">
                      {data.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                      {data.role} &bull; {data.company}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[#EEF4FB] text-[#0B4785] text-xs font-bold border border-[#D5E4F5]">
                    Public Sector Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
