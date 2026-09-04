import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { allPortfolioSlugsQuery } from '@/lib/portfolioQueries'
import { DEFAULT_PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://travash.com'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Regenerate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/technologies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/career`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic Portfolio Projects from Sanity
  let portfolioSlugs: { slug: string; updatedAt?: string }[] = []
  try {
    portfolioSlugs = await client.fetch(
      `*[_type in ["portfolioProject", "caseStudy"] && defined(slug.current)] {
        "slug": slug.current,
        "_updatedAt": _updatedAt
      }`
    )
  } catch (err) {
    console.warn('Sitemap portfolio fetch error:', err)
  }

  const portfolioRoutes: MetadataRoute.Sitemap =
    portfolioSlugs.length > 0
      ? portfolioSlugs.map((p) => ({
          url: `${BASE_URL}/portfolio/${p.slug}`,
          lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))
      : DEFAULT_PORTFOLIO_PROJECTS.map((p) => ({
          url: `${BASE_URL}/portfolio/${p.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))

  // Dynamic Blog Posts from Sanity
  let blogSlugs: { slug: string; updatedAt?: string }[] = []
  try {
    blogSlugs = await client.fetch(
      `*[_type == "blogPost" && defined(slug.current)] {
        "slug": slug.current,
        "_updatedAt": _updatedAt
      }`
    )
  } catch (err) {
    console.warn('Sitemap blog fetch error:', err)
  }

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((b) => ({
    url: `${BASE_URL}/blogs/${b.slug}`,
    lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes]
}
