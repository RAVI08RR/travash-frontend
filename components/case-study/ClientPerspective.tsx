'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TestimonialData {
  quote: string
  author: string
  role?: string
  company?: string
  image?: { asset?: { url: string } } | string
}

function cleanTestimonialField(raw: string = ''): string {
  if (!raw || typeof raw !== 'string') return ''
  let text = raw.trim()

  // If text contains HTML tags
  if (text.includes('<') && text.includes('>')) {
    text = text
      .replace(/<div\s+class=["']clint-info["'].*?<\/div>/gis, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
      .replace(/&rsquo;|&lsquo;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim()
  }

  return text
}

function extractQuoteAndAuthor(data: TestimonialData) {
  let quote = data?.quote || ''
  let author = data?.author || ''
  let role = data?.role || ''
  let company = data?.company || ''

  // If quote contains embedded author in <h4> or <div class="clint-info">
  if (quote.includes('<') && quote.includes('>')) {
    const h4Match = quote.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i)
    if (h4Match) {
      const extracted = h4Match[1].replace(/<[^>]+>/g, '').trim()
      if (extracted && (!author || author === 'Executive Stakeholder' || author === 'Client Leadership' || author.toLowerCase().includes('police'))) {
        author = extracted
      }
    }
  }

  quote = cleanTestimonialField(quote)
  // Strip leading/trailing quotes if doubly wrapped
  quote = quote.replace(/^["'“”\s]+|["'“”\s]+$/g, '').trim()

  author = cleanTestimonialField(author)
  if (author.toLowerCase().startsWith('by ')) {
    author = author.substring(3).trim()
  }

  role = cleanTestimonialField(role)
  company = cleanTestimonialField(company)

  return { quote, author, role, company }
}

export default function ClientPerspective({
  data,
  heading = 'Client Perspective',
  intro = "Insights, expectations, and feedback from the client's point of view.",
}: {
  data: TestimonialData
  heading?: string
  intro?: string
}) {
  const { quote, author, role, company } = extractQuoteAndAuthor(data)

  const authorLower = (author || '').toLowerCase()
  const companyLower = (company || '').toLowerCase()
  const quoteLower = (quote || '').toLowerCase()

  const isPolice =
    authorLower.includes('police') ||
    companyLower.includes('police') ||
    authorLower.includes('telangana') ||
    companyLower.includes('telangana') ||
    quoteLower.includes('satyaapan') ||
    quoteLower.includes('telangana police') ||
    authorLower.includes('intelligence dept') ||
    authorLower.includes('commissioner')

  const isI4C =
    authorLower.includes('i4c') ||
    companyLower.includes('i4c') ||
    quoteLower.includes('i4c')

  const isDirectOwners =
    authorLower.includes('david burn') ||
    companyLower.includes('direct owner') ||
    quoteLower.includes('direct owners')

  const defaultImg = isPolice
    ? '/casestudy-img/Telangana_Police_Logo.png.bv.webp'
    : isI4C
      ? '/casestudy-img/I4c.svg'
      : isDirectOwners
        ? 'https://cdn.sanity.io/images/s2k81yej/production/03e1bfe5c72a898954b3cb4fa01cd0e7b6f8a2d3-350x320.png'
        : '/images/avatar-placeholder.svg'

  const rawImg =
    typeof data?.image === 'string' ? data.image : data?.image?.asset?.url
  const imgSrc =
    rawImg && !rawImg.includes('avatar-placeholder') ? rawImg : defaultImg

  const isLogo =
    isPolice ||
    isI4C ||
    isDirectOwners ||
    Boolean(
      imgSrc &&
        (imgSrc.endsWith('.svg') ||
          imgSrc.includes('logo') ||
          imgSrc.includes('Logo') ||
          imgSrc.includes('Direct-owners') ||
          isDirectOwners)
    )

  const displayAuthor = author || 'Client Leadership'
  const authorTextLower = displayAuthor.toLowerCase()
  const showRole = role && !authorTextLower.includes(role.toLowerCase())
  const showCompany =
    company &&
    !authorTextLower.includes(company.toLowerCase()) &&
    !(company.toLowerCase().includes('police') && authorTextLower.includes('police')) &&
    !(company.toLowerCase().includes('telangana') && authorTextLower.includes('telangana')) &&
    (!role || !role.toLowerCase().includes(company.toLowerCase()))

  return (
    <section className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-3">
                {heading}
              </h2>
              {intro && (
                <p className="text-sm sm:text-base text-[#475569] leading-snug font-normal max-w-xs">
                  {intro}
                </p>
              )}
            </motion.div>
          </div>

          {/* Right Column: Card matching Screenshot 2 row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="bg-[#F4F6FB] rounded-3xl p-7 sm:p-9 relative overflow-hidden border border-gray-100/80">
              {/* Decorative Quote Icon in top-right */}
              <div className="absolute top-5 right-6 select-none pointer-events-none opacity-40">
                <Image
                  src="/casestudy-img/qute.svg"
                  alt="Quote"
                  width={44}
                  height={36}
                  className="w-11 h-auto"
                />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-7">
                {/* Left Badge / Avatar / Client Logo */}
                <div
                  className={`w-50 h-50 sm:w-58 sm:h-58 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md relative overflow-hidden ${
                    isLogo
                      ? 'bg-white p-2.5 border border-gray-100'
                      : 'bg-[#1E3A5F]'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={displayAuthor}
                    width={150}
                    height={150}
                    className={`w-full h-full ${
                      isLogo ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </div>

                {/* Right Text Content */}
                <div className="flex-1 flex flex-col gap-4 pt-1">
                  <p className="text-[#334155] text-xs sm:text-[13px] sm:leading-[1.75] leading-relaxed font-normal">
                    {quote}
                  </p>

                  <div className="clint-info">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#02487D]">
                      By {displayAuthor}
                      {showRole ? ` — ${role}` : ''}
                      {showCompany ? ` (${company})` : ''}
                    </h4>
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

