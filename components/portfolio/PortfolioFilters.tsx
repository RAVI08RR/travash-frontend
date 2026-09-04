'use client'

import { Search, X, Filter } from 'lucide-react'
import type { IndustryItem } from '@/lib/portfolio-data'
import { PROJECT_TYPE_FILTERS } from '@/lib/portfolio-data'

interface PortfolioFiltersProps {
  selectedType: string
  onSelectType: (type: string) => void
  selectedIndustry: string
  onSelectIndustry: (industry: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  industries: IndustryItem[]
  countsByType: Record<string, number>
  totalMatches: number
  onClearFilters: () => void
}

export default function PortfolioFilters({
  selectedType,
  onSelectType,
  selectedIndustry,
  onSelectIndustry,
  searchQuery,
  onSearchChange,
  industries,
  countsByType,
  totalMatches,
  onClearFilters,
}: PortfolioFiltersProps) {
  const isFiltered =
    selectedType !== 'All' || selectedIndustry !== 'All' || searchQuery.trim().length > 0

  return (
    <div className="w-full bg-white border-b border-[#E2E8F0] sticky top-16 sm:top-20 z-20 backdrop-blur-md bg-white/95 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Top Controls: Search Bar & Industry Dropdown */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by project, technology (e.g. Java, React, AI), or industry..."
              className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-hidden focus:border-[#02487D] focus:ring-2 focus:ring-[#02487D]/15 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A] p-0.5 rounded-full hover:bg-black/5"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Industry Filter Dropdown & Match Count */}
          <div className="flex items-center gap-3">
            <div className="relative inline-flex items-center">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
              <select
                id="industry-filter"
                value={selectedIndustry}
                onChange={(e) => onSelectIndustry(e.target.value)}
                className="pl-9 pr-8 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#0F172A] font-medium appearance-none cursor-pointer focus:outline-hidden focus:border-[#02487D] focus:ring-2 focus:ring-[#02487D]/15 focus:bg-white hover:border-[#94A3B8] transition-all"
              >
                <option value="All">All Industries</option>
                {industries.map((ind) => (
                  <option key={ind.slug || ind.name} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#64748B]">
                ▼
              </span>
            </div>

            {/* Clear All Filters Button */}
            {isFiltered && (
              <button
                type="button"
                onClick={onClearFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#EF4444] hover:text-[#B91C1C] hover:bg-[#FEF2F2] rounded-lg transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            {/* Total Results Count */}
            <div className="hidden lg:block text-xs font-medium text-[#64748B] border-l border-[#E2E8F0] pl-3">
              <span className="font-semibold text-[#0F172A]">{totalMatches}</span> projects
            </div>
          </div>
        </div>

        {/* Project Type Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {PROJECT_TYPE_FILTERS.map((type) => {
            const count = countsByType[type] || 0
            const isActive = selectedType === type
            return (
              <button
                key={type}
                type="button"
                onClick={() => onSelectType(type)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#02487D] text-white shadow-sm ring-2 ring-[#02487D]/20'
                    : 'bg-[#F1F5F9] text-[#334155] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                }`}
              >
                <span>{type}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white text-[#64748B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
