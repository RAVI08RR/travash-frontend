'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioProject } from '@/lib/portfolio-data'

interface PortfolioCardProps {
  project: PortfolioProject
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  // Determine image url
  const rawImage =
    project.cardImage ||
    project.featureImage ||
    project.heroImage ||
    '/images/services/analytics.webp'

  const imageUrl =
    typeof rawImage === 'string'
      ? rawImage
      : rawImage?.asset?.url || '/images/services/analytics.webp'

  // Destination URL (Standardized Next.js Portfolio Route)
  const href = `/portfolio/${project.slug}`

  // Display Title & Description
  const title = project.portfolioTitle || project.title
  const description =
    project.cardDescription ||
    project.shortDescription ||
    'Custom engineered platform built for high-performance operational scale and digital transformation.'

  // Format technologies
  const techList: string[] = (project.technologies || [])
    .map((t: any) => (typeof t === 'string' ? t : t?.title || t?.name || ''))
    .filter(Boolean)

  // Top industry / category badge (guaranteed string)
  const primaryBadge: string =
    (typeof project.category === 'string'
      ? project.category
      : (project.category as any)?.title || (project.category as any)?.name) ||
    project.projectType ||
    (Array.isArray((project as any).services) && (project as any).services[0]
      ? typeof (project as any).services[0] === 'string'
        ? (project as any).services[0]
        : (project as any).services[0]?.title || (project as any).services[0]?.name
      : null) ||
    'Software Engineering'

  const industryBadge: string | null =
    (typeof project.industry === 'string'
      ? project.industry
      : (project.industry as any)?.title || (project.industry as any)?.name) ||
    (Array.isArray(project.industries) && project.industries[0]
      ? typeof project.industries[0] === 'string'
        ? project.industries[0]
        : (project.industries[0] as any)?.title || (project.industries[0] as any)?.name
      : null) ||
    (project as any).industryName ||
    null

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
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/90 text-[#022E54] shadow-xs backdrop-blur-xs">
            {primaryBadge}
          </span>
          {industryBadge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#022E54]/80 text-[#38BDF8] border border-white/10 backdrop-blur-xs">
              {industryBadge}
            </span>
          )}
        </div>

        {/* Bottom Key Metric Preview (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center gap-2">
              <span className="text-xs font-bold text-[#38BDF8]">
                {project.metrics[0].value}
              </span>
              <span className="text-[10px] text-white/80 font-medium">
                {project.metrics[0].label}
              </span>
            </div>
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
