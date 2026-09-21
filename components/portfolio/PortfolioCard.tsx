'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { getSanityImageUrl } from '@/lib/sanity.image'
import { getProjectIndustry, getProjectTypes } from './PortfolioListingClient'

interface PortfolioCardProps {
  project: PortfolioProject
}

const isHashId = (val: string) => typeof val === 'string' && /^[A-Za-z0-9_-]{18,}$/.test(val)

const SLUG_FALLBACK_IMAGES: Record<string, string> = {
  dovehouse: '/images/portfolio/dovehouse.png',
  'dovehouse-capital': '/images/portfolio/dovehouse.png',
  indispare: '/casestudy-thumbs/indispare.png',
  'direct-owners': '/images/portfolio/direct-owners.webp',
  directowner: '/images/portfolio/direct-owners.webp',
  ledray: '/images/portfolio/ledray.webp',
  'dine-desk': '/casestudy-thumbs/dinedesk.png',
  dinedesk: '/casestudy-thumbs/dinedesk.png',
  pekt: '/images/portfolio/pekt.webp',
  skipr: '/images/portfolio/skipr.png',
  gemba: '/images/portfolio/gemba.png',
  'gemba-concept': '/images/portfolio/gemba.png',
  'wiggett-app': '/images/portfolio/wiggett-app.png',
  wiggett: '/images/portfolio/wiggett-app.png',
  spencer: '/images/portfolio/spencer.png',
  'grid-properties': '/images/portfolio/grid-properties.png',
  'soul-trips': '/images/portfolio/soul-trips.png',
  soultrips: '/images/portfolio/soul-trips.png',
  'alexander-johnson-group': '/images/portfolio/alexander-johnson-group.png',
  'alexander-groups': '/images/portfolio/alexander-johnson-group.png',
  'ai-agents': '/casestudy-thumbs/pixl-crm.png',
  aiagents: '/casestudy-thumbs/pixl-crm.png',
  ugo: '/casestudy-thumbs/UGO.png',
  uog: '/casestudy-thumbs/UGO.png',
  i4c: '/casestudy-thumbs/i4c.png',
  'i4c-bank-portal': '/casestudy-thumbs/i4c.png',
  '14c': '/casestudy-thumbs/14c.png',
  'i-verify': '/casestudy-thumbs/i-verify.png',
  iverify: '/casestudy-thumbs/i-verify.png',
  satyapaan: '/casestudy-thumbs/Satyaapan.png',
  satyaapan: '/casestudy-thumbs/Satyaapan.png',
  darpan: '/casestudy-thumbs/Darpan.png',
  'nigaah-videosurvelience': '/casestudy-thumbs/Nigaah.png',
  nigaah: '/casestudy-thumbs/Nigaah.png',
  crowdcounting: '/casestudy-thumbs/Crowd-Counting.png',
  'crowd-counting': '/casestudy-thumbs/Crowd-Counting.png',
  'unix-parts': '/casestudy-thumbs/unixparts.png',
  unixparts: '/casestudy-thumbs/unixparts.png',
  'radiantsa-ctms': '/casestudy-thumbs/rediantsage.png',
  radiantsa: '/casestudy-thumbs/rediantsage.png',
  'radiant-sage': '/casestudy-thumbs/rediantsage.png',
  pixl: '/casestudy-thumbs/pixl-crm.png',
  'pixl-crm': '/casestudy-thumbs/pixl-crm.png',
  'hrms-hocs': '/casestudy-thumbs/Dreamnest.png',
  hrmshocs: '/casestudy-thumbs/Dreamnest.png',
  'rating-star': '/images/portfolio/konvino.webp',
  ratingstar: '/images/portfolio/konvino.webp',
  protectly: '/casestudy-thumbs/protectly.png',
  'boardcore-360': '/images/portfolio/gratus.png',
  boardcore: '/images/portfolio/gratus.png',
  'casa-serene': '/images/portfolio/arabian-hills.png',
  casaserene: '/images/portfolio/arabian-hills.png',
  'a1-properties': '/images/portfolio/kalsi-estate.png',
  a1properties: '/images/portfolio/kalsi-estate.png',
  'paul-carr-estate-agents': '/images/portfolio/grid-properties.png',
  paulcarr: '/images/portfolio/grid-properties.png',
  'urban-properties': '/images/portfolio/alexander-johnson-group.png',
  urbanproperties: '/images/portfolio/alexander-johnson-group.png',
  'h-and-s-property': '/images/portfolio/arabian-hills.png',
  handsproperty: '/images/portfolio/arabian-hills.png',
  'treo-homes': '/images/portfolio/grid-properties.png',
  treohomes: '/images/portfolio/grid-properties.png',
  visionary: '/images/portfolio/kalsi-estate.png',
  'london-gate': '/images/portfolio/alexander-johnson-group.png',
  londongate: '/images/portfolio/alexander-johnson-group.png',
  reech: '/images/portfolio/arabian-hills.png',
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  // 1. Prioritize Sanity CMS image (allows client to update/manage thumbnails via Sanity Studio)
  const candidateSanityImage =
    project.cardImage ||
    (project as any).featuredImage ||
    project.featureImage ||
    project.heroImage ||
    (project as any).gallery?.[0]

  const fallbackThumb = SLUG_FALLBACK_IMAGES[project.slug]

  let imageUrl = ''
  if (candidateSanityImage) {
    const resolvedUrl = getSanityImageUrl(candidateSanityImage, 800)
    if (
      resolvedUrl &&
      !resolvedUrl.includes('Group 1000003287') &&
      !resolvedUrl.includes('placeholder')
    ) {
      imageUrl = resolvedUrl
    }
  }

  // 2. Fall back to verified image thumbnail
  if (!imageUrl) {
    imageUrl = fallbackThumb || '/images/services/analytics.webp'
  }

  // Destination URL (Standardized Next.js Portfolio Route)
  const href = `/portfolio/${project.slug}`

  // Display Title & Description
  const title = project.portfolioTitle || project.title
  const description =
    project.cardDescription ||
    project.shortDescription ||
    (project as any).excerpt ||
    'Custom engineered platform built for high-performance operational scale and digital transformation.'

  // Format technologies and filter out raw Sanity IDs
  const techList: string[] = (project.technologies || [])
    .map((t: any) => (typeof t === 'string' ? t : t?.title || t?.name || ''))
    .filter((t: string) => Boolean(t) && !isHashId(t))

  // Normalized industry and project types
  const industryBadge = getProjectIndustry(project)
  const types = getProjectTypes(project)
  const primaryBadge = types.length > 0 ? types.join(', ') : null

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#02487D]/30 hover:shadow-[0_16px_36px_-8px_rgba(2,72,125,0.12)] transition-all duration-300 transform hover:-translate-y-1">
      {/* Thumbnail Container */}
      <Link href={href} className="relative aspect-16/10 w-full overflow-hidden bg-[#0F172A] block">
        <Image
          src={imageUrl}
          alt={project.cardImageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 flex-wrap">
          {primaryBadge ? (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#022E54] shadow-xs backdrop-blur-xs">
              {primaryBadge}
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#022E54] shadow-xs backdrop-blur-xs">
              Project
            </span>
          )}
          {/* {industryBadge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#022E54]/90 text-[#38BDF8] border border-white/15 backdrop-blur-xs">
              {industryBadge}
            </span>
          )} */}
        </div>

        {/* Bottom Key Metric Preview (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-3">
         
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Title */}
          <Link href={href} className="block group/link">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover/link:text-[#02487D] transition-colors leading-snug line-clamp-2 mb-2.5">
              {title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          {/* Technologies Badges */}
          {techList.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {techList.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#334155] text-xs font-medium border border-[#E2E8F0]"
                >
                  {tech}
                </span>
              ))}
              {techList.length > 4 && (
                <span className="px-2 py-1 rounded-md bg-[#F8FAFC] text-[#64748B] text-xs font-medium">
                  +{techList.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Card Footer CTA */}
        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#02487D] hover:text-[#0369A1] transition-colors group/cta"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>

          {project.featured && (
            <span className="text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full">
              ★ Featured
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
