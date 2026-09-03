'use client'

import { motion } from 'framer-motion'

interface TechnologyCategory {
  category: string
  technologies: string[]
  description?: string
}

export default function TechnologyStack({ items }: { items: TechnologyCategory[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
      {items.map((cat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-gray-200/90 rounded-2xl p-7 shadow-xs hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4785] block mb-3">
              {cat.category}
            </span>
            <div className="flex flex-wrap gap-2 mb-5">
              {cat.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] text-gray-800 text-xs font-semibold border border-gray-200/80 hover:bg-[#EEF4FB] hover:text-[#0B4785] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {cat.description && (
            <p className="text-xs text-gray-500 leading-relaxed font-normal pt-4 border-t border-gray-100">
              {cat.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}
