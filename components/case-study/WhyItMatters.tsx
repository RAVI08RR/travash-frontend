'use client'

import { motion } from 'framer-motion'

interface WhyItMattersProps {
  title?: string
  subtitle?: string
  description?: string
  items?: string[]
}

export default function WhyItMatters({
  title = 'Why This Matters',
  subtitle = 'Does Your Organization\nFace a Similar Challenge?',
  description = 'The objective is not simply to introduce AI.',
  items = [
    'High-volume identity or application verification',
    'Fraud or duplicate-record detection',
    'Multiple verification systems and data sources',
    'Automated screening with human exception review',
  ],
}: WhyItMattersProps) {
  const subtitleLines = subtitle.split('\n')

  return (
    <section className="py-14 sm:py-20 bg-[#EAEBED] font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      {/* Background Polygon Pattern on Right Side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none opacity-80 mix-blend-multiply bg-right bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/casestudy-img/why-matters.png')" }}
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12] mb-3">
              {title}
            </h2>
            <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug mb-5">
              {subtitleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                {description}
              </p>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0F172A] mb-4">
              THIS CASE STUDY IS RELEVANT FOR ORGANIZATIONS MANAGING:
            </h4>

            <ul className="space-y-2 mb-6 sm:mb-8">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <span className="text-[#0F172A] font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal max-w-xl">
              It is to identify what can be automated, what should be flagged, and where human decision-making should remain in control.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
