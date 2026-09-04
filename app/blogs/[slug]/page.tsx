import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { blogBySlugQuery, allBlogSlugsQuery, siteSettingsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import BlogDetailContent from '@/components/blog/BlogDetailContent'
import RelatedPosts from '@/components/blog/RelatedPosts'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

const DEFAULT_ARTICLES: Record<string, any> = {
  'ai-in-software-development-automating-and-optimizing-it-processes': {
    title: 'AI in Software Development: Automating and Optimizing IT Processes',
    slug: 'ai-in-software-development-automating-and-optimizing-it-processes',
    category: 'AI & Automation',
    publishedAt: '2025-01-15T09:00:00.000Z',
    excerpt:
      'Artificial intelligence is dramatically transforming software development—streamlining testing, automating code reviews, and optimizing continuous deployment pipelines for enterprise teams.',
    coverImage: { asset: { url: '/home-img/Group 1000003287.png' } },
    author: { name: 'Travash AI Practice', role: 'Applied Machine Learning Lead' },
    tags: ['AI', 'Automation', 'DevOps', 'Software Engineering'],
  },
  'ethical-ai-balancing-innovation-and-responsibility': {
    title: 'Ethical AI: Balancing Innovation and Responsibility',
    slug: 'ethical-ai-balancing-innovation-and-responsibility',
    category: 'AI & Automation',
    publishedAt: '2025-01-10T10:30:00.000Z',
    excerpt:
      'As autonomous models and generative AI touch sensitive user data, discover actionable governance frameworks for enterprise safety, explainability, and compliance.',
    coverImage: { asset: { url: '/home-img/Group 1000003288.png' } },
    author: { name: 'Technology Strategy Group', role: 'Ethics & Governance' },
    tags: ['Ethical AI', 'Governance', 'Enterprise Compliance'],
  },
  'cybersecurity-essentials-for-digital-transformation-what-businesses-often-overlook': {
    title: 'Cybersecurity Essentials for Digital Transformation — What Businesses Often Overlook',
    slug: 'cybersecurity-essentials-for-digital-transformation-what-businesses-often-overlook',
    category: 'Cybersecurity',
    publishedAt: '2024-12-28T14:15:00.000Z',
    excerpt:
      'In today’s digital-first ecosystem, rapid feature velocity often overshadows fundamental security posture. Here are the critical blind spots engineering leaders must harden.',
    coverImage: { asset: { url: '/home-img/what-is-cybersecurity 2.png' } },
    author: { name: 'Travash Security Practice', role: 'Chief Information Security Advisor' },
    tags: ['Cybersecurity', 'Cloud Security', 'Zero Trust'],
  },
  'cloud-migration-strategy-how-to-move-legacy-systems-to-the-cloud-successfully': {
    title: 'Cloud Migration Strategy: How to Move Legacy Systems to the Cloud Successfully',
    slug: 'cloud-migration-strategy-how-to-move-legacy-systems-to-the-cloud-successfully',
    category: 'Cloud & Infrastructure',
    publishedAt: '2024-12-15T11:00:00.000Z',
    excerpt:
      'Moving decades-old monolithic architectures to modern cloud primitives requires methodical staging, database replication, and zero-downtime cutovers. Here is the blueprint.',
    coverImage: { asset: { url: '/home-img/pexels-silverkblack-23496667 2.png' } },
    author: { name: 'Cloud Architecture Team', role: 'Solutions Architect' },
    tags: ['Cloud Migration', 'AWS', 'Microservices', 'Modernization'],
  },
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(allBlogSlugsQuery)
    if (slugs && slugs.length > 0) {
      return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
    }
  } catch {
    // fallback
  }
  return Object.keys(DEFAULT_ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let post: any = null

  try {
    post = await client.fetch(blogBySlugQuery, { slug })
  } catch {
    // fallback
  }

  if (!post && DEFAULT_ARTICLES[slug]) {
    post = DEFAULT_ARTICLES[slug]
  }

  if (!post) {
    return { title: 'Article Not Found | Travash Insights' }
  }

  return {
    title: `${post.title} | Travash Insights`,
    description: post.excerpt || `Read "${post.title}" on the Travash Software Solutions blog.`,
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params

  let post: any = null
  let siteSettings: any = null

  try {
    const [fetchedPost, settings] = await Promise.all([
      client.fetch(blogBySlugQuery, { slug }),
      client.fetch(siteSettingsQuery),
    ])
    post = fetchedPost
    siteSettings = settings
  } catch {
    // continue to fallback
  }

  if (!post && DEFAULT_ARTICLES[slug]) {
    post = DEFAULT_ARTICLES[slug]
  }

  if (!post) {
    notFound()
  }

  // Filter out current post for related posts fallback
  const relatedFallback = Object.values(DEFAULT_ARTICLES).filter((a: any) => a.slug !== slug)
  const related = post.relatedPosts && post.relatedPosts.length > 0 ? post.relatedPosts : relatedFallback

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <BlogDetailContent post={post} />
          <RelatedPosts posts={related} />
        </div>
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
