import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { getAllBlogs, getCategories } from '@/lib/sanity.client'

import Navbar from '@/components/sections/Navbar'
import BlogHero from '@/components/blog/BlogHero'
import FeaturedBlog from '@/components/blog/FeaturedBlog'
import BlogFilters from '@/components/blog/BlogFilters'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { BlogPostItem } from '@/components/blog/BlogCard'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blogs & Engineering Insights — AI, Cloud & Architecture | Travash',
  description:
    'Explore thought leadership, software engineering perspectives, cybersecurity best practices, and AI automation insights from Travash practitioners.',
  alternates: {
    canonical: 'https://travash.com/blogs',
  },
  openGraph: {
    title: 'Blogs & Engineering Insights — AI, Cloud & Architecture | Travash',
    description:
      'Explore thought leadership, software engineering perspectives, cybersecurity best practices, and AI automation insights from Travash practitioners.',
    url: 'https://travash.com/blogs',
    siteName: 'Travash Software Solutions',
    type: 'website',
  },
}

const DEFAULT_POSTS: BlogPostItem[] = [
  {
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
  {
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
  {
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
  {
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
]

const DEFAULT_CATEGORIES = [
  'AI & Automation',
  'Software Engineering',
  'Cybersecurity',
  'Cloud & Infrastructure',
  'Data & Analytics',
]

export default async function BlogListingPage() {
  const [fetchedBlogs, fetchedCategories, siteSettings] = await Promise.all([
    getAllBlogs(),
    getCategories(),
    client.fetch(siteSettingsQuery).catch(() => null),
  ])

  const posts = fetchedBlogs && fetchedBlogs.length > 0 ? (fetchedBlogs as BlogPostItem[]) : DEFAULT_POSTS
  const categories =
    fetchedCategories && fetchedCategories.length > 0
      ? fetchedCategories
      : DEFAULT_CATEGORIES

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white dark:bg-slate-950">
        <BlogHero />
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {featuredPost && <FeaturedBlog post={featuredPost} />}
          <BlogFilters
            posts={remainingPosts.length > 0 ? remainingPosts : posts}
            categories={categories}
          />
        </div>
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
