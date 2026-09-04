'use client'

import { useState, useMemo } from 'react'
import BlogCard, { BlogPostItem } from './BlogCard'
import { Search, BookOpen } from 'lucide-react'

interface BlogFiltersProps {
  posts: BlogPostItem[]
  categories: string[]
}

export default function BlogFilters({ posts, categories }: BlogFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const allCategories = ['All', ...categories.filter(Boolean)]

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCat = selectedCategory === 'All' || post.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
        (post.category && post.category.toLowerCase().includes(query))

      return matchCat && matchSearch
    })
  }, [posts, selectedCategory, searchQuery])

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Category Tabs & Search Bar */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#004771] text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72 flex-shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#004771] transition-colors"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id || post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#0B1E3D] mb-1">No articles found</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            We couldn&apos;t find any articles matching &quot;{searchQuery || selectedCategory}&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
            className="px-4 py-2 rounded-lg bg-[#004771] text-white text-xs font-semibold hover:bg-[#02487D] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
