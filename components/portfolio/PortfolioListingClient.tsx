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

const isHashId = (val: string) => typeof val === 'string' && /^[A-Za-z0-9_-]{18,}$/.test(val)

// Canonical mapping of project slugs to their official master industry
const MASTER_SLUG_INDUSTRY: Record<string, string> = {
  dovehouse: 'Banking & Financial Services',
  indispare: 'E-commerce & Retail',
  'direct-owners': 'Travel & Hospitality',
  ledray: 'E-commerce & Retail',
  'dine-desk': 'Travel & Hospitality',
  dinedesk: 'Travel & Hospitality',
  pekt: 'Real Estate & Construction',
  skipr: 'SaaS & Technology',
  gemba: 'Manufacturing',
  'gemba-concept': 'Manufacturing',
  'wiggett-app': 'Manufacturing',
  wiggett: 'Manufacturing',
  spencer: 'Healthcare',
  'grid-properties': 'Real Estate & Construction',
  'soul-trips': 'Healthcare',
  soultrips: 'Healthcare',
  'alexander-johnson-group': 'Real Estate & Construction',
  'alexander-groups': 'Real Estate & Construction',
  'ai-agents': 'Other',
  aiagents: 'Other',
  ugo: 'Other',
  i4c: 'Banking & Financial Services',
  'i4c-bank-portal': 'Banking & Financial Services',
  'i-verify': 'Government & Public Sector',
  iverify: 'Government & Public Sector',
  satyapaan: 'Government & Public Sector',
  darpan: 'Government & Public Sector',
  'nigaah-videosurvelience': 'Government & Public Sector',
  nigaah: 'Government & Public Sector',
  crowdcounting: 'Government & Public Sector',
  'crowd-counting': 'Government & Public Sector',
  'unix-parts': 'Logistics & Supply Chain',
  unixparts: 'Logistics & Supply Chain',
  'radiantsa-ctms': 'Healthcare',
  radiantsa: 'Healthcare',
  pixl: 'SaaS & Technology',
  'pixl-crm': 'SaaS & Technology',
  'hrms-hocs': 'Recruitment & HR',
  hrmshocs: 'Recruitment & HR',
  'rating-star': 'SaaS & Technology',
  ratingstar: 'SaaS & Technology',
  protectly: 'SaaS & Technology',
  'boardcore-360': 'Legal',
  boardcore: 'Legal',
  'casa-serene': 'Real Estate & Construction',
  casaserene: 'Real Estate & Construction',
  'a1-properties': 'Real Estate & Construction',
  a1properties: 'Real Estate & Construction',
  'paul-carr-estate-agents': 'Real Estate & Construction',
  paulcarr: 'Real Estate & Construction',
  'urban-properties': 'Real Estate & Construction',
  urbanproperties: 'Real Estate & Construction',
  'h-and-s-property': 'Real Estate & Construction',
  handsproperty: 'Real Estate & Construction',
  'treo-homes': 'Real Estate & Construction',
  treohomes: 'Real Estate & Construction',
  visionary: 'Real Estate & Construction',
  'london-gate': 'Real Estate & Construction',
  londongate: 'Real Estate & Construction',
  reech: 'Real Estate & Construction',
}

// Canonical mapping of project slugs to their official project types array
const MASTER_SLUG_PROJECT_TYPES: Record<string, string[]> = {
  dovehouse: ['Website'],
  indispare: ['Web Application', 'Mobile Application', 'Branding'],
  'direct-owners': ['Web Application'],
  ledray: ['Web Application'],
  'dine-desk': ['Web Application'],
  dinedesk: ['Web Application'],
  pekt: ['Web Application', 'Mobile Application'],
  skipr: ['Web Application', 'Mobile Application'],
  gemba: ['Web Application', 'Mobile Application'],
  'gemba-concept': ['Web Application', 'Mobile Application'],
  'wiggett-app': ['Web Application', 'Mobile Application'],
  wiggett: ['Web Application', 'Mobile Application'],
  spencer: ['Website'],
  'grid-properties': ['Website'],
  'soul-trips': ['Website'],
  soultrips: ['Website'],
  'alexander-johnson-group': ['Website'],
  'alexander-groups': ['Website'],
  'ai-agents': ['Web Application', 'AI Development'],
  aiagents: ['Web Application', 'AI Development'],
  ugo: ['Web Application'],
  i4c: ['Web Application'],
  'i4c-bank-portal': ['Web Application'],
  'i-verify': ['Web Application'],
  iverify: ['Web Application'],
  satyapaan: ['Web Application'],
  darpan: ['Web Application', 'Mobile Application'],
  'nigaah-videosurvelience': ['Web Application', 'Desktop Application'],
  nigaah: ['Web Application', 'Desktop Application'],
  crowdcounting: ['Web Application'],
  'crowd-counting': ['Web Application'],
  'unix-parts': ['Web Application'],
  unixparts: ['Web Application'],
  'radiantsa-ctms': ['Web Application'],
  radiantsa: ['Web Application'],
  pixl: ['Web Application'],
  'pixl-crm': ['Web Application'],
  'hrms-hocs': ['Web Application'],
  hrmshocs: ['Web Application'],
  'rating-star': ['Mobile Application'],
  ratingstar: ['Mobile Application'],
  protectly: ['Mobile Application'],
  'boardcore-360': [],
  boardcore: [],
  'casa-serene': [],
  casaserene: [],
  'a1-properties': [],
  a1properties: [],
  'paul-carr-estate-agents': [],
  paulcarr: [],
  'urban-properties': [],
  urbanproperties: [],
  'h-and-s-property': [],
  handsproperty: [],
  'treo-homes': [],
  treohomes: [],
  visionary: [],
  'london-gate': [],
  londongate: [],
  reech: [],
}

export function getProjectIndustry(p: any): string {
  if (!p) return ''
  const slug = (p.slug || '').toLowerCase().trim()

  // 1. Check direct slug mapping first for strict accuracy
  if (MASTER_SLUG_INDUSTRY[slug]) {
    return MASTER_SLUG_INDUSTRY[slug]
  }

  // 2. Sanity dynamic values normalization
  let raw = ''
  if (typeof p.industry === 'string' && p.industry) raw = p.industry
  else if (p.industry?.name) raw = p.industry.name
  else if (p.industry?.title) raw = p.industry.title
  else if (typeof p.category === 'string' && p.category) raw = p.category
  else if (p.category?.title) raw = p.category.title
  else if (p.industryName) raw = p.industryName
  else if (Array.isArray(p.industries) && p.industries[0]) {
    const first = p.industries[0]
    raw = typeof first === 'string' ? first : first.title || first.name || ''
  }

  if (!raw || isHashId(raw)) return 'Other'

  const lower = raw.toLowerCase()
  if (lower.includes('bank') || lower.includes('financ')) return 'Banking & Financial Services'
  if (lower.includes('commerce') || lower.includes('retail')) return 'E-commerce & Retail'
  if (lower.includes('travel') || lower.includes('hospitality')) return 'Travel & Hospitality'
  if (lower.includes('real estate') || lower.includes('construction') || lower.includes('prop'))
    return 'Real Estate & Construction'
  if (lower.includes('saas') || lower.includes('tech')) return 'SaaS & Technology'
  if (lower.includes('manufactur') || lower.includes('industrial')) return 'Manufacturing'
  if (lower.includes('health') || lower.includes('medic') || lower.includes('clinical'))
    return 'Healthcare'
  if (lower.includes('gov') || lower.includes('public')) return 'Government & Public Sector'
  if (lower.includes('logistics') || lower.includes('supply')) return 'Logistics & Supply Chain'
  if (lower.includes('recruit') || lower.includes('hr') || lower.includes('payroll'))
    return 'Recruitment & HR'
  if (lower.includes('legal') || lower.includes('law') || lower.includes('compliance')) return 'Legal'

  return raw
}

export function getProjectTypes(p: any): string[] {
  if (!p) return []
  const slug = (p.slug || '').toLowerCase().trim()

  // 1. Direct master slug mapping
  if (MASTER_SLUG_PROJECT_TYPES[slug] !== undefined) {
    return MASTER_SLUG_PROJECT_TYPES[slug]
  }

  // 2. Check projectTypes array from Sanity
  if (Array.isArray(p.projectTypes) && p.projectTypes.length > 0) {
    return p.projectTypes.map((t: string) => t.trim()).filter(Boolean)
  }

  // 3. Fallback to parsing projectType / serviceType string
  const raw = p.projectType || p.serviceType || ''
  if (typeof raw === 'string' && raw.trim()) {
    return raw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
  }

  return []
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
      const pInd = getProjectIndustry(p)

      // Check industry match
      const matchesIndustry =
        selectedIndustry === 'All' ||
        pInd.toLowerCase().trim() === selectedIndustry.toLowerCase().trim()

      // Check search match
      const q = searchQuery.toLowerCase().trim()
      const pTypes = getProjectTypes(p)
      const techs = (p.technologies || []).map((t: any) =>
        typeof t === 'string' ? t.toLowerCase() : (t?.title || t?.name || '').toLowerCase()
      )

      const matchesQuery =
        !q ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.portfolioTitle && p.portfolioTitle.toLowerCase().includes(q)) ||
        (p.cardDescription && p.cardDescription.toLowerCase().includes(q)) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
        pInd.toLowerCase().includes(q) ||
        pTypes.some((t) => t.toLowerCase().includes(q)) ||
        techs.some((t: string) => t.includes(q))

      if (matchesIndustry && matchesQuery) {
        counts['All'] = (counts['All'] || 0) + 1
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
      const pTypes = getProjectTypes(p)
      const pInd = getProjectIndustry(p)

      // 1. Primary Project Type Filter (supports multiple project types per project)
      if (selectedType !== 'All') {
        if (!pTypes.includes(selectedType)) {
          return false
        }
      }

      // 2. Industry Filter
      if (selectedIndustry !== 'All') {
        if (pInd.toLowerCase().trim() !== selectedIndustry.toLowerCase().trim()) {
          return false
        }
      }

      // 3. Search Query Filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase().trim()
        const inTitle = p.title?.toLowerCase().includes(q) || false
        const inPortfolioTitle = p.portfolioTitle?.toLowerCase().includes(q) || false
        const inCardDesc = p.cardDescription?.toLowerCase().includes(q) || false
        const inShortDesc = p.shortDescription?.toLowerCase().includes(q) || false
        const inIndustry = pInd.toLowerCase().includes(q)
        const inTypes = pTypes.some((t) => t.toLowerCase().includes(q))
        const inTech = (p.technologies || []).some((t: any) => {
          const name = typeof t === 'string' ? t : t?.title || t?.name || ''
          return name.toLowerCase().includes(q)
        })

        if (!inTitle && !inPortfolioTitle && !inCardDesc && !inShortDesc && !inIndustry && !inTypes && !inTech) {
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
      <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PortfolioGrid
          projects={filteredProjects}
          onClearFilters={handleClearFilters}
        />
      </section>
    </div>
  )
}
