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

export default async function BlogListingPage() {
  const [fetchedBlogs, fetchedCategories, siteSettings] = await Promise.all([
    getAllBlogs(),
    getCategories(),
    client.fetch(siteSettingsQuery).catch(() => null),
  ])

  const posts = (fetchedBlogs || []) as BlogPostItem[]
  const categories = fetchedCategories || []

  // Choose the post marked as featured, or the latest published post
  const featuredPost = (posts.find((p) => (p as any).featured === true) || posts[0]) as BlogPostItem

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white dark:bg-white min-h-screen">
        <BlogHero />
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {featuredPost && <FeaturedBlog post={featuredPost} />}
          <BlogFilters
            posts={posts}
            categories={categories}
          />
        </div>
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
