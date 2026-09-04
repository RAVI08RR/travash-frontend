import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { BlogPostItem } from './BlogCard'

interface BlogDetailData extends BlogPostItem {
  body?: any[]
  relatedPosts?: BlogPostItem[]
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D] tracking-tight mt-10 mb-4 pt-4 border-t border-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3D] tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-[#0B1E3D] mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#004771] pl-5 my-6 italic text-gray-800 bg-[#F8FAFC] py-3 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-700 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2.5 text-base sm:text-lg text-gray-700 mb-6">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = value?.asset?.url
      if (!url) return null
      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200">
          <div className="relative aspect-[16/9] w-full">
            <Image src={url} alt={value.alt || 'Article visual'} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs text-gray-500 py-2 bg-gray-50">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default function BlogDetailContent({ post }: { post: BlogDetailData }) {
  const imageUrl = post.coverImage?.asset?.url || '/home-img/Group 1000003287.png'
  const dateFormatted = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Recent'

  // Estimate reading time: ~200 words per minute
  const readingTime = '5 min read'

  return (
    <article className="max-w-4xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Breadcrumb & Category */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#004771] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {post.category && (
          <div className="mb-3">
            <span className="px-3 py-1 rounded-full bg-[#E0F2FE] text-[#004771] text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.2] mb-6">
          {post.title}
        </h1>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#004771] text-white flex items-center justify-center font-bold text-xs">
              {post.author?.name ? post.author.name.charAt(0) : 'T'}
            </div>
            <div>
              <div className="font-bold text-[#0B1E3D]">{post.author?.name || 'Travash Technology Practice'}</div>
              <div className="text-[11px] text-gray-500">{post.author?.role || 'Lead Contributor'}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#14B8A6]" />
              <time dateTime={post.publishedAt}>{dateFormatted}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#004771]" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md mb-10 border border-gray-200">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>

      {/* Article Body */}
      <div className="article-body">
        {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg sm:text-xl font-medium text-[#0B1E3D] leading-relaxed">
              {post.excerpt}
            </p>
            <p className="leading-relaxed">
              As modern businesses accelerate their digital modernization journeys, the convergence of scalable cloud infrastructure, bespoke software engineering, and production-grade artificial intelligence is reshaping how technology creates enterprise value.
            </p>
            <h2 className="text-2xl font-bold text-[#0B1E3D] pt-4">Strategic Architecture and Best Practices</h2>
            <p className="leading-relaxed">
              Engineering teams must transcend generic code delivery and focus on architectural resilience, observability, and security by design. By implementing modular microservices and automated CI/CD pipelines, organizations achieve high deployment frequencies while dramatically minimizing blast radiuses.
            </p>
            <h2 className="text-2xl font-bold text-[#0B1E3D] pt-4">Moving Forward with Confidence</h2>
            <p className="leading-relaxed">
              Whether deploying custom machine learning models or modernizing mission-critical legacy databases, success hinges on partnership, technical discipline, and continuous value realization.
            </p>
          </div>
        )}
      </div>

      {/* Tags if available */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-gray-400 mr-1" />
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-gray-200 text-xs font-semibold text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
