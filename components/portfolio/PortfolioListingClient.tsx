'use client'

import { useState, useMemo, useEffect, useCallback, useTransition } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import type { PortfolioProject, IndustryItem } from '@/lib/portfolio-data'
import { PROJECT_TYPE_FILTERS } from '@/lib/portfolio-data'
import PortfolioFilters from './PortfolioFilters'
import PortfolioGrid from './PortfolioGrid'

interface PortfolioListingClientProps {
  initialProjects: PortfolioProject[]
  industries: IndustryItem[]
}

export default function PortfolioListingClient({
  initialProjects,
  industries,
}: PortfolioListingClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [, startTransition] = useTransition()

  // Read initial filter values from URL params
  const initialType = searchParams.get('type') || 'All'
  const initialIndustry = searchParams.get('industry') || 'All'
  const initialQuery = searchParams.get('q') || ''

  const [selectedType, setSelectedType] = useState<string>(initialType)
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry)
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery)

  // Keep internal state aligned if user navigates back/forward
  useEffect(() => {
    const urlType = searchParams.get('type') || 'All'
    const urlIndustry = searchParams.get('industry') || 'All'
    const urlQuery = searchParams.get('q') || ''

    setSelectedType(urlType)
    setSelectedIndustry(urlIndustry)
    setSearchQuery(urlQuery)
  }, [searchParams])

  // Sync state to URL search params
  const updateUrlParams = useCallback(
    (newType: string, newIndustry: string, newQuery: string) => {
      const params = new URLSearchParams()

      if (newType && newType !== 'All') {
        params.set('type', newType)
      }
      if (newIndustry && newIndustry !== 'All') {
        params.set('industry', newIndustry)
      }
      if (newQuery && newQuery.trim().length > 0) {
        params.set('q', newQuery.trim())
      }

      const queryString = params.toString()
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname

      startTransition(() => {
        router.replace(newUrl, { scroll: false })
      })
    },
    [pathname, router]
  )

  // Filter Handlers
  const handleSelectType = (type: string) => {
    setSelectedType(type)
    updateUrlParams(type, selectedIndustry, searchQuery)
  }

  const handleSelectIndustry = (industry: string) => {
    setSelectedIndustry(industry)
    updateUrlParams(selectedType, industry, searchQuery)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    updateUrlParams(selectedType, selectedIndustry, query)
  }

  const handleClearFilters = () => {
    setSelectedType('All')
    setSelectedIndustry('All')
    setSearchQuery('')
    updateUrlParams('All', 'All', '')
  }

  // Pre-calculate counts by project type based on currently selected industry & search
  const countsByType = useMemo(() => {
    const counts: Record<string, number> = { All: 0 }
    PROJECT_TYPE_FILTERS.forEach((t) => {
      counts[t] = 0
    })

    initialProjects.forEach((p) => {
      // Check industry match
      const matchesIndustry =
        selectedIndustry === 'All' ||
        p.industry === selectedIndustry ||
        (p.industries && p.industries.includes(selectedIndustry))

      // Check search match
      const q = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.portfolioTitle && p.portfolioTitle.toLowerCase().includes(q)) ||
        (p.cardDescription && p.cardDescription.toLowerCase().includes(q)) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
        (p.technologies &&
          p.technologies.some((t) =>
            typeof t === 'string' ? t.toLowerCase().includes(q) : t?.name?.toLowerCase().includes(q)
          ))

      if (matchesIndustry && matchesQuery) {
        counts['All'] = (counts['All'] || 0) + 1
        const type = p.projectType || 'Web Application'
        if (counts[type] !== undefined) {
          counts[type] = counts[type] + 1
        }
      }
    })

    return counts
  }, [initialProjects, selectedIndustry, searchQuery])

  // Filter the projects for the grid
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      // 1. Primary Project Type Filter
      if (selectedType !== 'All') {
        const type = p.projectType || 'Web Application'
        if (type !== selectedType) {
          return false
        }
      }

      // 2. Industry Filter
      if (selectedIndustry !== 'All') {
        const matchesMainIndustry = p.industry === selectedIndustry
        const matchesArray = p.industries && p.industries.includes(selectedIndustry)
        if (!matchesMainIndustry && !matchesArray) {
          return false
        }
      }

      // 3. Search Query Filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase().trim()
        const inTitle = p.title.toLowerCase().includes(q)
        const inPortfolioTitle = p.portfolioTitle?.toLowerCase().includes(q) || false
        const inCardDesc = p.cardDescription?.toLowerCase().includes(q) || false
        const inShortDesc = p.shortDescription?.toLowerCase().includes(q) || false
        const inCategory = p.category?.toLowerCase().includes(q) || false
        const inIndustry = p.industry?.toLowerCase().includes(q) || false
        const inTech =
          p.technologies?.some((t) =>
            typeof t === 'string' ? t.toLowerCase().includes(q) : t?.name?.toLowerCase().includes(q)
          ) || false

        if (
          !inTitle &&
          !inPortfolioTitle &&
          !inCardDesc &&
          !inShortDesc &&
          !inCategory &&
          !inIndustry &&
          !inTech
        ) {
          return false
        }
      }

      return true
    })
  }, [initialProjects, selectedType, selectedIndustry, searchQuery])

  return (
    <div className="w-full bg-[#FAFCFF]">
      {/* Sticky Filter Bar */}
      <PortfolioFilters
        selectedType={selectedType}
        onSelectType={handleSelectType}
        selectedIndustry={selectedIndustry}
        onSelectIndustry={handleSelectIndustry}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        industries={industries}
        countsByType={countsByType}
        totalMatches={filteredProjects.length}
        onClearFilters={handleClearFilters}
      />

      {/* Main Grid Section */}
      <section className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid
          projects={filteredProjects}
          onClearFilters={handleClearFilters}
        />
      </section>
    </div>
  )
}
