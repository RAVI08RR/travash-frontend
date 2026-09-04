'use client'

import { motion } from 'framer-motion'
import { FolderSearch, RotateCcw } from 'lucide-react'
import type { PortfolioProject } from '@/lib/portfolio-data'
import PortfolioCard from './PortfolioCard'

interface PortfolioGridProps {
  projects: PortfolioProject[]
  onClearFilters: () => void
}

export default function PortfolioGrid({ projects, onClearFilters }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center mx-auto mb-4 border border-[#E2E8F0]">
          <FolderSearch className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">No Matching Projects Found</h3>
        <p className="text-sm text-[#64748B] mb-6">
          We couldn't find any case studies matching your selected filter criteria or search keyword.
          Try clearing your filters to explore all case studies.
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#02487D] text-white text-sm font-semibold hover:bg-[#035b9e] transition-colors shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset All Filters</span>
        </button>
      </div>
    )
  }

  return (
    <div className="py-10 sm:py-12">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id || project.slug}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
