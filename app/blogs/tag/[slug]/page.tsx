import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Tag } from 'lucide-react'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { getAllBlogs, getCategories, getTags } from '@/lib/sanity.client'

import Navbar from '@/components/sections/Navbar'
import BlogFilters from '@/components/blog/BlogFilters'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const revalidate = 60

interface TagPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const tags = await getTags()
    return tags.map((t) => ({ slug: t.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params
  const tags = await getTags()
  const tagObj = tags.find((t) => t.slug === slug)

  const title = tagObj ? `#${tagObj.title} Articles & Insights | Travash` : `#${slug} | Travash Blogs`
  const description = `Articles, architectural blueprints, and technology perspectives tagged with #${tagObj?.title || slug}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://travash.com/blogs/tag/${slug}`,
    },
  }
}

export default async function TagArchivePage({ params }: TagPageProps) {
  const { slug } = await params

  const [allPosts, categories, tags, siteSettings] = await Promise.all([
    getAllBlogs(),
    getCategories(),
    getTags(),
    client.fetch(siteSettingsQuery).catch(() => null),
  ])

  const tagObj = tags.find((t) => t.slug === slug)
  const tagTitle = tagObj ? tagObj.title : slug.replace(/-/g, ' ')

  // Filter posts matching this tag
  const tagPosts = allPosts.filter((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      return post.tags.some((t) => {
        const titleOrSlug = typeof t === 'string' ? t : t.title || t.slug
        return titleOrSlug?.toLowerCase() === tagTitle.toLowerCase() || titleOrSlug?.toLowerCase() === slug.toLowerCase()
      })
    }
    return false
  })

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white dark:bg-slate-950">
        {/* Tag Hero Header */}
        <section className="pt-28 pb-16 bg-[#F8FAFC] dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
          <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#004771] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blogs</span>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-[#14B8A6]">
                <Tag className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">
                Topic Tag Archive
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E3D] dark:text-white tracking-tight mb-4">
              #{tagTitle}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Explore all engineering insights, case stories, and technical breakdowns tagged under{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">#{tagTitle}</span>.
            </p>
          </div>
        </section>

        {/* Listing Grid with Filters */}
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BlogFilters
            posts={tagPosts.length > 0 ? tagPosts : allPosts}
            categories={categories}
            initialTag={tagTitle}
          />
        </div>

        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
