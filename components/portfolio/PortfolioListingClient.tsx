'use client'

import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import type { PortfolioProject, IndustryItem } from '@/lib/portfolio-data'
import { PROJECT_TYPE_FILTERS } from '@/lib/portfolio-data'
import PortfolioFilters from './PortfolioFilters'
import PortfolioGrid from './PortfolioGrid'

interface PortfolioListingClientProps {
  initialProjects: PortfolioProject[]
  industries: IndustryItem[]
}

const isHashId = (val: string) => typeof val === 'string' && /^[A-Za-z0-9_-]{18,}$/.test(val)

/**
 * Returns a normalized, human-friendly industry name for display badges.
 */
export function getProjectIndustry(p: PortfolioProject): string {
  if (!p) return 'Technology'

  const terms = [
    p.industry,
    p.category,
    (p as any).industryName,
    ...(Array.isArray(p.industries) ? p.industries : []),
    typeof p.industry === 'object'
      ? (p.industry as any)?.name || (p.industry as any)?.title
      : null,
    p.slug,
  ]
    .filter(Boolean)
    .map((s) => String(s).toLowerCase())

  const fullText = terms.join(' ')

  if (
    fullText.includes('bank') ||
    fullText.includes('financ') ||
    p.slug === 'i4c-bank-portal' ||
    p.slug === 'dovehouse' ||
    p.slug === 'i4c'
  ) {
    return 'Banking & Financial Services'
  }
  if (
    fullText.includes('gov') ||
    fullText.includes('public') ||
    p.slug === 'satyapaan' ||
    p.slug === 'darpan' ||
    p.slug === 'i-verify' ||
    p.slug === 'nigaah-videosurvelience' ||
    p.slug === 'crowdcounting'
  ) {
    return 'Government & Public Sector'
  }
  if (
    fullText.includes('real estate') ||
    fullText.includes('proptech') ||
    fullText.includes('construction') ||
    fullText.includes('property') ||
    p.slug === 'pekt' ||
    p.slug === 'grid-properties' ||
    p.slug === 'alexander-johnson-group'
  ) {
    return 'Real Estate & PropTech'
  }
  if (
    fullText.includes('travel') ||
    fullText.includes('hospitality') ||
    fullText.includes('vacation') ||
    p.slug === 'direct-owners' ||
    p.slug === 'dine-desk' ||
    p.slug === 'konvino'
  ) {
    return 'Travel & Hospitality'
  }
  if (
    fullText.includes('commerce') ||
    fullText.includes('retail') ||
    fullText.includes('marketplace') ||
    p.slug === 'indispare' ||
    p.slug === 'ledray'
  ) {
    return 'E-Commerce & Retail'
  }
  if (
    fullText.includes('health') ||
    fullText.includes('medic') ||
    fullText.includes('clinic') ||
    fullText.includes('wellness') ||
    p.slug === 'spencer' ||
    p.slug === 'soul-trips' ||
    p.slug === 'medimee' ||
    p.slug === 'radiantsa-ctms'
  ) {
    return 'Healthcare & Life Sciences'
  }
  if (
    fullText.includes('manufactur') ||
    fullText.includes('industrial') ||
    p.slug === 'gemba' ||
    p.slug === 'gemba-concept' ||
    p.slug === 'wiggett-app'
  ) {
    return 'Industrial & Manufacturing'
  }
  if (
    fullText.includes('inventory') ||
    fullText.includes('logistics') ||
    fullText.includes('supply') ||
    p.slug === 'ugo' ||
    p.slug === 'unix-parts'
  ) {
    return 'Logistics & Supply Chain'
  }
  if (
    fullText.includes('recruit') ||
    fullText.includes('hr') ||
    fullText.includes('payroll') ||
    p.slug === 'hrms-hocs' ||
    p.slug === 'gratus'
  ) {
    return 'Recruitment & HR'
  }
  if (
    fullText.includes('artificial') ||
    fullText.includes('vision') ||
    fullText.includes('speech') ||
    fullText.includes('voice') ||
    p.slug === 'pixl' ||
    p.slug === 'ai-agents'
  ) {
    return 'Artificial Intelligence'
  }

  // Fallback to project.industry string if present and clean
  if (typeof p.industry === 'string' && p.industry && !isHashId(p.industry)) {
    return p.industry
  }

  return 'Technology & SaaS'
}

/**
 * Determine all project types applicable to a project.
 * Supports: 'Web Application', 'Mobile Application', 'Website Development'.
 */
export function getProjectTypes(p: PortfolioProject): string[] {
  if (!p) return ['Web Application']

  const types = new Set<string>()

  const rawFields = [
    p.projectType,
    ...(Array.isArray(p.projectTypes) ? p.projectTypes : []),
    (p as any).serviceType,
    ...(Array.isArray((p as any).services)
      ? (p as any).services.map((s: any) => (typeof s === 'string' ? s : s?.title || s?.name || s?.slug))
      : []),
    p.category,
    p.cardDescription,
    p.shortDescription,
    p.title,
    p.portfolioTitle,
  ]
    .filter(Boolean)
    .map((s) => String(s).toLowerCase())

  const combined = rawFields.join(' ')

  // 1. Mobile Application check
  if (
    combined.includes('mobile') ||
    combined.includes('react native') ||
    combined.includes('flutter') ||
    combined.includes('ios') ||
    combined.includes('android') ||
    p.slug === 'skipr' ||
    p.slug === 'darpan' ||
    p.slug === 'pekt' ||
    p.slug === 'konvino' ||
    p.slug === 'wiggett-app' ||
    p.slug === 'rating-star' ||
    p.slug === 'protectly' ||
    p.slug === 'indispare'
  ) {
    types.add('Mobile Application')
  }

  // 2. Website Development check
  if (
    combined.includes('website') ||
    combined.includes('web architecture') ||
    combined.includes('digital presence') ||
    combined.includes('single page application') ||
    combined.includes('spa') ||
    p.slug === 'dovehouse' ||
    p.slug === 'spencer' ||
    p.slug === 'grid-properties' ||
    p.slug === 'soul-trips' ||
    p.slug === 'alexander-johnson-group' ||
    p.slug === 'ledray' ||
    p.slug === 'kalsi-estate'
  ) {
    types.add('Website Development')
  }

  // 3. Web Application check
  if (
    combined.includes('web application') ||
    combined.includes('web app') ||
    combined.includes('platform') ||
    combined.includes('portal') ||
    combined.includes('saas') ||
    combined.includes('dashboard') ||
    combined.includes('engine') ||
    combined.includes('automation') ||
    combined.includes('marketplace') ||
    combined.includes('api') ||
    p.slug === 'pixl' ||
    p.slug === 'satyapaan' ||
    p.slug === 'direct-owners' ||
    p.slug === 'ugo' ||
    p.slug === 'i4c-bank-portal' ||
    p.slug === 'gemba'
  ) {
    types.add('Web Application')
  }

  // Fallback: if no category matched, assign Web Application
  if (types.size === 0) {
    types.add('Web Application')
  }

  return Array.from(types)
}

/**
 * Robust, semantic industry matching.
 * Handles aliases, partial strings, and cross-field normalization.
 */
export function matchesIndustry(project: PortfolioProject, selectedIndustry: string): boolean {
  if (!selectedIndustry || selectedIndustry === 'All') return true

  const sel = selectedIndustry.toLowerCase().trim()

  const terms = [
    project.industry,
    project.category,
    (project as any).industryName,
    ...(Array.isArray(project.industries) ? project.industries : []),
    typeof project.industry === 'object'
      ? (project.industry as any)?.name || (project.industry as any)?.title
      : null,
    project.title,
    project.portfolioTitle,
    project.slug,
    project.cardDescription,
    project.shortDescription,
  ]
    .filter(Boolean)
    .map((s) => String(s).toLowerCase())

  const fullText = terms.join(' ')

  // Banking / Finance
  if (sel.includes('bank') || sel.includes('financ')) {
    return (
      fullText.includes('bank') ||
      fullText.includes('financ') ||
      fullText.includes('fraud') ||
      fullText.includes('capital') ||
      project.slug === 'i4c-bank-portal' ||
      project.slug === 'dovehouse' ||
      project.slug === 'i4c'
    )
  }

  // Artificial Intelligence
  if (sel.includes('artificial') || sel === 'ai' || sel.includes('(ai)')) {
    return (
      fullText.includes('ai') ||
      fullText.includes('artificial') ||
      fullText.includes('vision') ||
      fullText.includes('voice') ||
      fullText.includes('agent') ||
      fullText.includes('facial') ||
      fullText.includes('surveil') ||
      project.slug === 'pixl' ||
      project.slug === 'satyapaan' ||
      project.slug === 'darpan' ||
      project.slug === 'nigaah-videosurvelience' ||
      project.slug === 'crowdcounting' ||
      project.slug === 'ai-agents'
    )
  }

  // E-Commerce & Retail
  if (sel.includes('commerce') || sel.includes('retail')) {
    return (
      fullText.includes('commerce') ||
      fullText.includes('retail') ||
      fullText.includes('marketplace') ||
      fullText.includes('shop') ||
      fullText.includes('store') ||
      project.slug === 'indispare' ||
      project.slug === 'ledray' ||
      project.slug === 'direct-owners' ||
      project.slug === 'ugo'
    )
  }

  // Government & Public Sector
  if (sel.includes('gov') || sel.includes('public')) {
    return (
      fullText.includes('gov') ||
      fullText.includes('public') ||
      fullText.includes('passport') ||
      fullText.includes('ministry') ||
      project.slug === 'satyapaan' ||
      project.slug === 'i4c-bank-portal' ||
      project.slug === 'i-verify' ||
      project.slug === 'darpan' ||
      project.slug === 'nigaah-videosurvelience' ||
      project.slug === 'crowdcounting'
    )
  }

  // Health & Wellness
  if (sel.includes('health') || sel.includes('wellness') || sel.includes('medic')) {
    return (
      fullText.includes('health') ||
      fullText.includes('wellness') ||
      fullText.includes('medic') ||
      fullText.includes('clinic') ||
      project.slug === 'spencer' ||
      project.slug === 'soul-trips' ||
      project.slug === 'medimee' ||
      project.slug === 'radiantsa-ctms'
    )
  }

  // Hospitality & Travel
  if (sel.includes('hospitality') || sel.includes('travel')) {
    return (
      fullText.includes('travel') ||
      fullText.includes('hospitality') ||
      fullText.includes('rental') ||
      fullText.includes('vacation') ||
      fullText.includes('hotel') ||
      fullText.includes('dine') ||
      project.slug === 'direct-owners' ||
      project.slug === 'dine-desk' ||
      project.slug === 'konvino'
    )
  }

  // Industrial & Manufacturing
  if (sel.includes('industrial') || sel.includes('manufactur')) {
    return (
      fullText.includes('industrial') ||
      fullText.includes('manufactur') ||
      fullText.includes('factory') ||
      project.slug === 'gemba' ||
      project.slug === 'gemba-concept' ||
      project.slug === 'wiggett-app' ||
      project.slug === 'ugo' ||
      project.slug === 'indispare'
    )
  }

  // Inventory Engine / Logistics / Supply Chain
  if (sel.includes('inventory') || sel.includes('logistics') || sel.includes('supply')) {
    return (
      fullText.includes('inventory') ||
      fullText.includes('logistics') ||
      fullText.includes('supply') ||
      fullText.includes('warehouse') ||
      fullText.includes('stock') ||
      project.slug === 'ugo' ||
      project.slug === 'unix-parts'
    )
  }

  // Real Estate & Property
  if (sel.includes('real estate') || sel.includes('property') || sel.includes('prop')) {
    return (
      fullText.includes('real estate') ||
      fullText.includes('property') ||
      fullText.includes('proptech') ||
      fullText.includes('construction') ||
      fullText.includes('estate') ||
      project.slug === 'pixl' ||
      project.slug === 'pekt' ||
      project.slug === 'grid-properties' ||
      project.slug === 'alexander-johnson-group' ||
      project.slug === 'casa-serene' ||
      project.slug === 'a1-properties' ||
      project.slug === 'paul-carr-estate-agents' ||
      project.slug === 'urban-properties' ||
      project.slug === 'h-and-s-property' ||
      project.slug === 'treo-homes' ||
      project.slug === 'visionary' ||
      project.slug === 'london-gate' ||
      project.slug === 'reech'
    )
  }

  // Recruitment & HR
  if (sel.includes('recruit') || sel.includes('hr')) {
    return (
      fullText.includes('recruit') ||
      fullText.includes('hr') ||
      fullText.includes('payroll') ||
      fullText.includes('employee') ||
      project.slug === 'hrms-hocs' ||
      project.slug === 'i-verify' ||
      project.slug === 'gratus'
    )
  }

  // Repairs & Onsite Job Management
  if (sel.includes('repair') || sel.includes('job') || sel.includes('onsite')) {
    return (
      fullText.includes('repair') ||
      fullText.includes('onsite') ||
      fullText.includes('job') ||
      fullText.includes('field') ||
      project.slug === 'pekt'
    )
  }

  // Technology & SaaS
  if (sel.includes('tech') || sel.includes('saas')) {
    return (
      fullText.includes('tech') ||
      fullText.includes('saas') ||
      fullText.includes('software') ||
      fullText.includes('platform') ||
      project.slug === 'skipr' ||
      project.slug === 'pixl' ||
      project.slug === 'protectly' ||
      project.slug === 'rating-star'
    )
  }

  // Fallback substring check
  return fullText.includes(sel)
}

/**
 * Comprehensive multi-token search checking titles, descriptions, slugs, clients,
 * technologies, metrics, and industries.
 */
export function matchesSearch(p: PortfolioProject, query: string): boolean {
  if (!query || !query.trim()) return true

  const searchableParts = [
    p.title,
    p.portfolioTitle,
    p.slug,
    p.cardDescription,
    p.shortDescription,
    (p as any).description,
    (p as any).excerpt,
    (p as any).client,
    p.category,
    p.industry,
    (p as any).industryName,
    p.projectType,
    ...(Array.isArray(p.industries) ? p.industries : []),
    ...(Array.isArray(p.projectTypes) ? p.projectTypes : []),
    ...(Array.isArray(p.technologies)
      ? p.technologies.map((t: any) => (typeof t === 'string' ? t : t?.name || t?.title || ''))
      : []),
    ...(Array.isArray((p as any).techStack)
      ? (p as any).techStack.map((t: any) => (typeof t === 'string' ? t : t?.name || t?.title || ''))
      : []),
    ...(Array.isArray(p.metrics)
      ? p.metrics.map((m: any) => `${m.value || ''} ${m.label || ''} ${m.description || ''}`)
      : []),
  ]
    .filter(Boolean)
    .map((s) => String(s).toLowerCase())

  const fullSearchString = searchableParts.join(' ')
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean)

  return tokens.every((token) => fullSearchString.includes(token))
}

export default function PortfolioListingClient({
  initialProjects,
  industries,
}: PortfolioListingClientProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Read initial filter values from URL params
  const initialType = searchParams.get('type') || 'All'
  const initialIndustry = searchParams.get('industry') || 'All'
  const initialQuery = searchParams.get('q') || ''

  const [selectedType, setSelectedType] = useState<string>(initialType)
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry)
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery)

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Sync state to URL without causing Next.js App Router full-page server re-render
  const updateUrl = useCallback(
    (newType: string, newIndustry: string, newQuery: string) => {
      if (typeof window === 'undefined') return

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

      window.history.replaceState(null, '', newUrl)
    },
    [pathname]
  )

  // Handle browser Back / Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      setSelectedType(urlParams.get('type') || 'All')
      setSelectedIndustry(urlParams.get('industry') || 'All')
      setSearchQuery(urlParams.get('q') || '')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Filter Handlers
  const handleSelectType = (type: string) => {
    setSelectedType(type)
    updateUrl(type, selectedIndustry, searchQuery)
  }

  const handleSelectIndustry = (industry: string) => {
    setSelectedIndustry(industry)
    updateUrl(selectedType, industry, searchQuery)
  }

  const handleSearchChange = (query: string) => {
    // 1. Update React state immediately for instant responsive typing
    setSearchQuery(query)

    // 2. Debounce URL parameter update so keystrokes are never throttled
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    debounceTimerRef.current = setTimeout(() => {
      updateUrl(selectedType, selectedIndustry, query)
    }, 250)
  }

  const handleClearFilters = () => {
    setSelectedType('All')
    setSelectedIndustry('All')
    setSearchQuery('')
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    updateUrl('All', 'All', '')
  }

  // Pre-calculate counts by project type based on currently selected industry & search
  const countsByType = useMemo(() => {
    const counts: Record<string, number> = { All: 0 }
    PROJECT_TYPE_FILTERS.forEach((t) => {
      counts[t] = 0
    })

    initialProjects.forEach((p) => {
      const matchesInd = matchesIndustry(p, selectedIndustry)
      const matchesQ = matchesSearch(p, searchQuery)

      if (matchesInd && matchesQ) {
        counts['All'] = (counts['All'] || 0) + 1
        const pTypes = getProjectTypes(p)
        pTypes.forEach((type) => {
          if (counts[type] !== undefined) {
            counts[type] = counts[type] + 1
          }
        })
      }
    })

    return counts
  }, [initialProjects, selectedIndustry, searchQuery])

  // Filter the projects for the grid
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      // 1. Primary Project Type Filter
      if (selectedType !== 'All') {
        const pTypes = getProjectTypes(p)
        if (!pTypes.includes(selectedType)) {
          return false
        }
      }

      // 2. Industry Filter
      if (!matchesIndustry(p, selectedIndustry)) {
        return false
      }

      // 3. Search Query Filter
      if (!matchesSearch(p, searchQuery)) {
        return false
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
      <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PortfolioGrid
          projects={filteredProjects}
          onClearFilters={handleClearFilters}
        />
      </section>
    </div>
  )
}
