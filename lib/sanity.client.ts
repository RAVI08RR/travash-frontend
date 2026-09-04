import { client } from './sanity'
import {
  allBlogsUnifiedQuery,
  blogBySlugUnifiedQuery,
  featuredBlogsUnifiedQuery,
  relatedBlogsUnifiedQuery,
  allCategoriesQuery,
  allTagsQuery,
  allAuthorsQuery,
  searchBlogsUnifiedQuery,
  allBlogSlugsUnifiedQuery,
} from './queries'

export { client }

export interface SanityBlogPost {
  _id: string
  _type: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  updatedAt?: string
  featured?: boolean
  wordpressId?: number
  originalWordPressUrl?: string
  featuredImage?: any
  coverImage?: any
  content?: any[]
  body?: any[]
  category?: string
  categories?: Array<{
    _id?: string
    title: string
    slug: string
    description?: string
  }>
  tags?: Array<{
    _id?: string
    title: string
    slug: string
  }> | string[]
  keywords?: string[]
  author?: {
    _id?: string
    name: string
    slug?: string
    role?: string
    image?: any
    avatar?: any
    bio?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: any
    noIndex?: boolean
  }
}

export interface SanityCategory {
  _id: string
  title: string
  slug: string
  description?: string
  count?: number
}

export interface SanityTag {
  _id: string
  title: string
  slug: string
  count?: number
}

export interface SanityAuthor {
  _id: string
  name: string
  slug: string
  image?: any
  bio?: string
}

/**
 * Fetch all published blogs ordered by published date descending.
 */
export async function getAllBlogs(): Promise<SanityBlogPost[]> {
  try {
    return await client.fetch(allBlogsUnifiedQuery)
  } catch (error) {
    console.error('Error in getAllBlogs():', error)
    return []
  }
}

/**
 * Fetch a single blog by its slug.
 */
export async function getBlogBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    return await client.fetch(blogBySlugUnifiedQuery, { slug })
  } catch (error) {
    console.error(`Error in getBlogBySlug(${slug}):`, error)
    return null
  }
}

/**
 * Fetch featured blogs.
 */
export async function getFeaturedBlogs(): Promise<SanityBlogPost[]> {
  try {
    return await client.fetch(featuredBlogsUnifiedQuery)
  } catch (error) {
    console.error('Error in getFeaturedBlogs():', error)
    return []
  }
}

/**
 * Fetch related blogs excluding the current blog post.
 */
export async function getRelatedBlogs(
  currentSlug: string,
  categoryTitles: string[] = [],
  limit = 3
): Promise<SanityBlogPost[]> {
  try {
    return await client.fetch(relatedBlogsUnifiedQuery, {
      currentSlug,
      categoryTitles,
      limit,
    })
  } catch (error) {
    console.error('Error in getRelatedBlogs():', error)
    return []
  }
}

/**
 * Fetch all categories.
 */
export async function getCategories(): Promise<SanityCategory[]> {
  try {
    return await client.fetch(allCategoriesQuery)
  } catch (error) {
    console.error('Error in getCategories():', error)
    return []
  }
}

/**
 * Fetch all tags.
 */
export async function getTags(): Promise<SanityTag[]> {
  try {
    return await client.fetch(allTagsQuery)
  } catch (error) {
    console.error('Error in getTags():', error)
    return []
  }
}

/**
 * Fetch all authors.
 */
export async function getAuthors(): Promise<SanityAuthor[]> {
  try {
    return await client.fetch(allAuthorsQuery)
  } catch (error) {
    console.error('Error in getAuthors():', error)
    return []
  }
}

/**
 * Search blogs by text query across title, excerpt, and content.
 */
export async function searchBlogs(searchTerm: string): Promise<SanityBlogPost[]> {
  if (!searchTerm || !searchTerm.trim()) return getAllBlogs()
  try {
    return await client.fetch(searchBlogsUnifiedQuery, {
      searchTerm: `*${searchTerm.trim()}*`,
    })
  } catch (error) {
    console.error(`Error in searchBlogs(${searchTerm}):`, error)
    return []
  }
}

/**
 * Fetch all blog slugs for generateStaticParams().
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const res = await client.fetch(allBlogSlugsUnifiedQuery)
    return (res || []).map((item: { slug: string }) => item.slug).filter(Boolean)
  } catch (error) {
    console.error('Error in getAllBlogSlugs():', error)
    return []
  }
}
