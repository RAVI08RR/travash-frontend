'use client'

import { motion } from 'framer-motion'

interface ApproachStep {
  stepNumber?: string
  title: string
  description: string
}

export default function ApproachSteps({ steps }: { steps: ApproachStep[] }) {
  return (
    <div className="relative flex flex-col gap-6 pl-2 sm:pl-4">
      {/* Continuous Vertical Connecting Line */}
      <div className="absolute left-[31px] sm:left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#0B4785] via-[#448AE1] to-gray-200 pointer-events-none" />

      {steps.map((step, idx) => {
        const stepNum = step.stepNumber || String(idx + 1).padStart(2, '0')
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-start gap-4 sm:gap-6 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#0B4785]/50 hover:shadow-md transition-all duration-300"
          >
            {/* Step Number Badge */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#0B4785] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm ring-4 ring-white group-hover:scale-110 group-hover:bg-[#0052FE] transition-all duration-300">
              {stepNum}
            </div>

            {/* Step Content */}
            <div className="flex-1 pt-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors duration-200 mb-1.5 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
