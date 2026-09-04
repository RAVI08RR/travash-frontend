import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Folder } from 'lucide-react'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { getAllBlogs, getCategories } from '@/lib/sanity.client'

import Navbar from '@/components/sections/Navbar'
import BlogFilters from '@/components/blog/BlogFilters'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const revalidate = 60

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const categories = await getCategories()
    return categories.map((c) => ({ slug: c.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const categories = await getCategories()
  const cat = categories.find((c) => c.slug === slug)

  const title = cat ? `${cat.title} Articles & Insights | Travash` : 'Blog Category | Travash'
  const description =
    cat?.description ||
    `Explore in-depth articles, engineering frameworks, and insights categorized under ${cat?.title || slug}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://travash.com/blogs/category/${slug}`,
    },
  }
}

export default async function CategoryArchivePage({ params }: CategoryPageProps) {
  const { slug } = await params

  const [allPosts, categories, siteSettings] = await Promise.all([
    getAllBlogs(),
    getCategories(),
    client.fetch(siteSettingsQuery).catch(() => null),
  ])

  const category = categories.find((c) => c.slug === slug)
  const categoryTitle = category ? category.title : slug.replace(/-/g, ' ')

  // Filter posts matching this category
  const categoryPosts = allPosts.filter((post) => {
    if (post.categories && Array.isArray(post.categories)) {
      return post.categories.some((c) => c.slug === slug || c.title.toLowerCase() === categoryTitle.toLowerCase())
    }
    return post.category?.toLowerCase() === categoryTitle.toLowerCase()
  })

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white dark:bg-slate-950">
        {/* Category Hero Header */}
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
              <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-[#004771] dark:text-blue-300">
                <Folder className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">
                Category Archive
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E3D] dark:text-white tracking-tight mb-4 capitalize">
              {categoryTitle}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {category?.description ||
                `Browse all technical publications, case breakdowns, and thought leadership related to ${categoryTitle}.`}
            </p>
          </div>
        </section>

        {/* Listing Grid with Filters */}
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BlogFilters
            posts={categoryPosts.length > 0 ? categoryPosts : allPosts}
            categories={categories}
            initialCategory={categoryTitle}
          />
        </div>

        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
