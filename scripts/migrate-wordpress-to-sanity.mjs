import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// 1. Environment loader
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let value = match[2] || ''
        value = value.trim().replace(/^['"]|['"]$/g, '')
        process.env[key] = value
      }
    }
  }
}

loadEnv()

const WP_API_BASE = 'https://travash.com/wp-json/wp/v2'
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const TOKEN = process.env.SANITY_API_TOKEN

if (!TOKEN) {
  console.warn('⚠️ WARNING: SANITY_API_TOKEN is missing in .env.local. Sanity writes will be skipped, but JSON exports will be generated.')
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  token: TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper: Decode HTML entities
function decodeHtml(html) {
  if (!html) return ''
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&#39;/g, "'")
}

// Helper: Strip HTML
function stripHtml(html) {
  if (!html) return ''
  return decodeHtml(html.replace(/<[^>]*>?/gm, '')).trim()
}

// Helper: Unique key generator for Sanity array items
function randomKey() {
  return Math.random().toString(36).substring(2, 10)
}

// 2. HTML to Portable Text Converter
function htmlToPortableText(html, assetMap = {}) {
  if (!html) return []

  const blocks = []

  // Pre-clean Elementor junk wrappers and extract semantic chunks
  let cleaned = html
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<style[\s\S]*?<\/style>/gi, '') // Remove styles
    .replace(/<script[\s\S]*?<\/script>/gi, '') // Remove scripts

  // Match block-level elements: h1-h6, p, blockquote, pre, ul, ol, figure/img, iframe
  const blockRegex = /(<(h[1-6]|p|blockquote|pre|ul|ol|figure|iframe)[\s\S]*?<\/\2>)|(<img[^>]+>)/gi

  const matches = cleaned.match(blockRegex) || []

  // If regex found no structured blocks, fallback to splitting by double newlines or paragraphs
  const rawSegments = matches.length > 0 ? matches : cleaned.split(/<\/p>|<br\s*\/?>/i)

  for (const segment of rawSegments) {
    const trimmed = segment.trim()
    if (!trimmed) continue

    // Headings
    const headingMatch = trimmed.match(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/i)
    if (headingMatch) {
      const tag = headingMatch[1].toLowerCase()
      const text = stripHtml(headingMatch[2])
      if (text) {
        blocks.push({
          _type: 'block',
          _key: randomKey(),
          style: tag === 'h1' ? 'h2' : tag, // map h1 to h2 for SEO compliance
          children: [
            {
              _type: 'span',
              _key: randomKey(),
              text: text,
              marks: [],
            },
          ],
          markDefs: [],
        })
      }
      continue
    }

    // Blockquote
    const quoteMatch = trimmed.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i)
    if (quoteMatch) {
      const text = stripHtml(quoteMatch[1])
      if (text) {
        blocks.push({
          _type: 'block',
          _key: randomKey(),
          style: 'blockquote',
          children: [
            {
              _type: 'span',
              _key: randomKey(),
              text: text,
              marks: [],
            },
          ],
          markDefs: [],
        })
      }
      continue
    }

    // Code block
    const codeMatch = trimmed.match(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/i) || trimmed.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i)
    if (codeMatch) {
      const code = decodeHtml(codeMatch[1]).replace(/<[^>]*>/g, '')
      if (code) {
        blocks.push({
          _type: 'codeBlock',
          _key: randomKey(),
          language: 'javascript',
          code: code,
        })
      }
      continue
    }

    // Lists (ul / ol)
    const listMatch = trimmed.match(/<(ul|ol)[^>]*>([\s\S]*?)<\/\1>/i)
    if (listMatch) {
      const listType = listMatch[1].toLowerCase() === 'ol' ? 'number' : 'bullet'
      const itemMatches = listMatch[2].match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
      for (const li of itemMatches) {
        const itemText = stripHtml(li)
        if (itemText) {
          blocks.push({
            _type: 'block',
            _key: randomKey(),
            listItem: listType,
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: randomKey(),
                text: itemText,
                marks: [],
              },
            ],
            markDefs: [],
          })
        }
      }
      continue
    }

    // Video iframe
    const iframeMatch = trimmed.match(/<iframe[^>]+src=["']([^"']+)["'][^>]*>/i)
    if (iframeMatch) {
      blocks.push({
        _type: 'videoEmbed',
        _key: randomKey(),
        url: iframeMatch[1],
      })
      continue
    }

    // Image inside block
    const imgMatch = trimmed.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
    if (imgMatch) {
      const src = imgMatch[1]
      const altMatch = trimmed.match(/alt=["']([^"']*)["']/i)
      const alt = altMatch ? altMatch[1] : ''
      const assetId = assetMap[src]

      if (assetId) {
        blocks.push({
          _type: 'image',
          _key: randomKey(),
          asset: {
            _type: 'reference',
            _ref: assetId,
          },
          alt: alt,
          originalUrl: src,
        })
      }
      continue
    }

    // Standard Paragraph / Text
    const cleanParagraphText = stripHtml(trimmed)
    if (cleanParagraphText && cleanParagraphText.length > 2) {
      // Parse links inside paragraph
      const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
      const markDefs = []
      const spans = []

      // Simplified span parser
      let remaining = trimmed
      let linkMatch
      let spanIndex = 0

      // If there are links, extract them
      const links = []
      while ((linkMatch = linkRegex.exec(trimmed)) !== null) {
        links.push({
          href: linkMatch[1],
          text: stripHtml(linkMatch[2]),
        })
      }

      if (links.length > 0) {
        // Build linked paragraph
        for (const l of links) {
          const markKey = `link-${randomKey()}`
          markDefs.push({
            _type: 'link',
            _key: markKey,
            href: l.href,
          })
        }
        spans.push({
          _type: 'span',
          _key: randomKey(),
          text: cleanParagraphText,
          marks: [],
        })
      } else {
        spans.push({
          _type: 'span',
          _key: randomKey(),
          text: cleanParagraphText,
          marks: [],
        })
      }

      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        children: spans,
        markDefs: markDefs,
      })
    }
  }

  return blocks
}

// 3. Image Downloader and Sanity Asset Uploader
const uploadedImageCache = {}

async function uploadImageToSanity(imageUrl, filenameHint = 'wp-image') {
  if (!imageUrl || !imageUrl.startsWith('http')) return null
  if (!TOKEN) return null

  // Check cache
  if (uploadedImageCache[imageUrl]) {
    return uploadedImageCache[imageUrl]
  }

  try {
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image HTTP ${response.status}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const cleanFilename = path.basename(new URL(imageUrl).pathname) || `${filenameHint}.jpg`

    const asset = await client.assets.upload('image', buffer, {
      filename: cleanFilename,
    })

    uploadedImageCache[imageUrl] = asset._id
    return asset._id
  } catch (err) {
    console.warn(`  ⚠️ Image upload skipped for [${imageUrl}]: ${err.message}`)
    return null
  }
}

// 4. Main Migration Runner
async function runMigration() {
  console.log('========================================================')
  console.log('  TRAVASH WORDPRESS -> SANITY CMS MIGRATION ENGINE')
  console.log('========================================================')
  console.log(`Source WP API: ${WP_API_BASE}`)
  console.log(`Target Sanity: ${PROJECT_ID} [${DATASET}]`)

  const migrationDir = path.resolve(process.cwd(), 'migration')
  if (!fs.existsSync(migrationDir)) {
    fs.mkdirSync(migrationDir, { recursive: true })
  }

  const report = {
    startedAt: new Date().toISOString(),
    wordpressApiUrl: WP_API_BASE,
    sanityProjectId: PROJECT_ID,
    sanityDataset: DATASET,
    totals: {
      wpPostsFound: 0,
      wpCategoriesFound: 0,
      wpTagsFound: 0,
      wpAuthorsFound: 0,
      blogsMigrated: 0,
      blogsSkipped: 0,
      blogsFailed: 0,
      categoriesMigrated: 0,
      tagsMigrated: 0,
      authorsMigrated: 0,
      imagesFound: 0,
      imagesUploaded: 0,
      imagesFailed: 0,
    },
    failedImages: [],
    failedBlogs: [],
    completedAt: null,
  }

  // --- Step A: Categories ---
  console.log('\n[1/5] Fetching WordPress Categories...')
  let wpCategories = []
  try {
    const res = await fetch(`${WP_API_BASE}/categories?per_page=100`)
    wpCategories = await res.json()
    report.totals.wpCategoriesFound = wpCategories.length
    console.log(`  Found ${wpCategories.length} categories.`)
  } catch (err) {
    console.error('  Failed to fetch categories:', err.message)
  }

  const sanityCategories = []
  for (const cat of wpCategories) {
    const catDoc = {
      _id: `category-${cat.id}`,
      _type: 'category',
      title: decodeHtml(cat.name),
      slug: { _type: 'slug', current: cat.slug },
      description: stripHtml(cat.description) || '',
    }
    sanityCategories.push(catDoc)

    if (TOKEN) {
      try {
        await client.createOrReplace(catDoc)
        report.totals.categoriesMigrated++
      } catch (err) {
        console.warn(`  Failed to save category ${cat.name}:`, err.message)
      }
    }
  }
  fs.writeFileSync(path.join(migrationDir, 'categories.json'), JSON.stringify(sanityCategories, null, 2))
  console.log(`  Saved categories to migration/categories.json`)

  // --- Step B: Tags ---
  console.log('\n[2/5] Fetching WordPress Tags...')
  let wpTags = []
  try {
    const res = await fetch(`${WP_API_BASE}/tags?per_page=100`)
    wpTags = await res.json()
    report.totals.wpTagsFound = wpTags.length
    console.log(`  Found ${wpTags.length} tags.`)
  } catch (err) {
    console.error('  Failed to fetch tags:', err.message)
  }

  const sanityTags = []
  for (const tag of wpTags) {
    const tagDoc = {
      _id: `tag-${tag.id}`,
      _type: 'tag',
      title: decodeHtml(tag.name),
      slug: { _type: 'slug', current: tag.slug },
    }
    sanityTags.push(tagDoc)

    if (TOKEN) {
      try {
        await client.createOrReplace(tagDoc)
        report.totals.tagsMigrated++
      } catch (err) {
        console.warn(`  Failed to save tag ${tag.name}:`, err.message)
      }
    }
  }
  fs.writeFileSync(path.join(migrationDir, 'tags.json'), JSON.stringify(sanityTags, null, 2))
  console.log(`  Saved tags to migration/tags.json`)

  // --- Step C: Authors ---
  console.log('\n[3/5] Fetching WordPress Authors...')
  let wpAuthors = []
  try {
    const res = await fetch(`${WP_API_BASE}/users?per_page=100`)
    wpAuthors = await res.json()
    report.totals.wpAuthorsFound = wpAuthors.length
    console.log(`  Found ${wpAuthors.length} authors.`)
  } catch (err) {
    console.error('  Failed to fetch authors:', err.message)
  }

  const sanityAuthors = []
  for (const author of wpAuthors) {
    const authorDoc = {
      _id: `author-${author.id}`,
      _type: 'author',
      name: decodeHtml(author.name),
      slug: { _type: 'slug', current: author.slug },
      bio: stripHtml(author.description) || '',
    }
    sanityAuthors.push(authorDoc)

    if (TOKEN) {
      try {
        await client.createOrReplace(authorDoc)
        report.totals.authorsMigrated++
      } catch (err) {
        console.warn(`  Failed to save author ${author.name}:`, err.message)
      }
    }
  }
  fs.writeFileSync(path.join(migrationDir, 'authors.json'), JSON.stringify(sanityAuthors, null, 2))
  console.log(`  Saved authors to migration/authors.json`)

  // --- Step D: Posts (Paginated) ---
  console.log('\n[4/5] Fetching ALL WordPress Posts (paginated with embeds)...')
  let allWpPosts = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    try {
      console.log(`  Fetching page ${page}...`)
      const res = await fetch(`${WP_API_BASE}/posts?page=${page}&per_page=100&_embed=1`)
      if (!res.ok) {
        if (res.status === 400) {
          // Reached beyond max pages
          hasMore = false
          break
        }
        throw new Error(`HTTP ${res.status}`)
      }

      const posts = await res.json()
      if (Array.isArray(posts) && posts.length > 0) {
        allWpPosts = allWpPosts.concat(posts)
        console.log(`    Got ${posts.length} posts (cumulative: ${allWpPosts.length})`)
        if (posts.length < 100) {
          hasMore = false
        } else {
          page++
        }
      } else {
        hasMore = false
      }
    } catch (err) {
      console.warn(`  Finished pagination or error at page ${page}: ${err.message}`)
      hasMore = false
    }
  }

  report.totals.wpPostsFound = allWpPosts.length
  console.log(`\n  Total WordPress Posts Retrieved: ${allWpPosts.length}`)

  // --- Step E: Transform and Upload to Sanity ---
  console.log('\n[5/5] Processing Posts & Migrating to Sanity...')
  const sanityBlogs = []
  const redirects = []

  let postIndex = 0
  for (const post of allWpPosts) {
    postIndex++
    const title = decodeHtml(post.title?.rendered || '')
    const slug = post.slug
    const wpId = post.id
    const wpUrl = post.link

    console.log(`\n  [${postIndex}/${allWpPosts.length}] Processing: "${title}" (ID: ${wpId})`)

    // Extract redirects
    // Map original WordPress URL path to /blogs/[slug]
    try {
      const parsedUrl = new URL(wpUrl)
      const oldPath = parsedUrl.pathname
      const newPath = `/blogs/${slug}`
      if (oldPath !== newPath && oldPath !== `${newPath}/`) {
        redirects.push({
          source: oldPath,
          destination: newPath,
          permanent: true,
        })
      }
    } catch {
      // Ignore URL parse errors
    }

    try {
      // 1. Featured Image
      let featuredImageAssetId = null
      let featuredImageAlt = ''
      const embeddedMedia = post._embedded?.['wp:featuredmedia']?.[0]
      if (embeddedMedia) {
        const mediaUrl = embeddedMedia.source_url || embeddedMedia.media_details?.sizes?.full?.source_url
        featuredImageAlt = embeddedMedia.alt_text || title
        if (mediaUrl) {
          report.totals.imagesFound++
          featuredImageAssetId = await uploadImageToSanity(mediaUrl, `featured-${slug}`)
          if (featuredImageAssetId) {
            report.totals.imagesUploaded++
          } else {
            report.totals.imagesFailed++
            report.failedImages.push({ post: title, url: mediaUrl })
          }
        }
      }

      // 2. Inline images in content
      const contentHtml = post.content?.rendered || ''
      const inlineImgMatches = contentHtml.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || []
      const assetMap = {}

      for (const imgTag of inlineImgMatches) {
        const srcMatch = imgTag.match(/src=["']([^"']+)["']/i)
        if (srcMatch && srcMatch[1]) {
          const imgUrl = srcMatch[1]
          report.totals.imagesFound++
          const inlineAssetId = await uploadImageToSanity(imgUrl, `content-${slug}-${randomKey()}`)
          if (inlineAssetId) {
            assetMap[imgUrl] = inlineAssetId
            report.totals.imagesUploaded++
          } else {
            report.totals.imagesFailed++
            report.failedImages.push({ post: title, url: imgUrl })
          }
        }
      }

      // 3. Convert Content to Portable Text
      const portableTextContent = htmlToPortableText(contentHtml, assetMap)

      // 4. Construct Sanity Blog Document
      const excerpt = stripHtml(post.excerpt?.rendered || '')
      const publishedAt = post.date_gmt ? `${post.date_gmt}Z` : `${post.date}Z`
      const updatedAt = post.modified_gmt ? `${post.modified_gmt}Z` : `${post.modified}Z`

      const categoryRefs = (post.categories || []).map((cid) => ({
        _type: 'reference',
        _ref: `category-${cid}`,
        _key: `cat-${cid}`,
      }))

      const tagRefs = (post.tags || []).map((tid) => ({
        _type: 'reference',
        _ref: `tag-${tid}`,
        _key: `tag-${tid}`,
      }))

      const blogDoc = {
        _id: `blogPost-${wpId}`,
        _type: 'blogPost',
        title: title,
        slug: { _type: 'slug', current: slug },
        excerpt: excerpt,
        publishedAt: publishedAt,
        updatedAt: updatedAt,
        wordpressId: wpId,
        originalWordPressUrl: wpUrl,
        categories: categoryRefs,
        tags: tagRefs,
        keywords: [title.split(' ')[0], 'Travash Insights', 'Technology'].filter(Boolean),
        author: post.author
          ? {
              _type: 'reference',
              _ref: `author-${post.author}`,
            }
          : undefined,
        content: portableTextContent,
        seo: {
          metaTitle: `${title} | Travash Insights`,
          metaDescription: excerpt.slice(0, 160),
          canonicalUrl: wpUrl,
          ogTitle: title,
          ogDescription: excerpt.slice(0, 160),
          noIndex: false,
        },
      }

      if (featuredImageAssetId) {
        blogDoc.featuredImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: featuredImageAssetId,
          },
          alt: featuredImageAlt,
        }
      }

      sanityBlogs.push(blogDoc)

      // Write to Sanity if token provided
      if (TOKEN) {
        await client.createOrReplace(blogDoc)
        report.totals.blogsMigrated++
        console.log(`    ✅ Successfully migrated to Sanity [${blogDoc._id}]`)
      } else {
        report.totals.blogsSkipped++
      }
    } catch (blogErr) {
      console.error(`    ❌ Failed post [${title}]:`, blogErr.message)
      report.totals.blogsFailed++
      report.failedBlogs.push({ id: wpId, title, error: blogErr.message })
    }
  }

  // --- Step F: Write All Migration Output Artifacts ---
  fs.writeFileSync(path.join(migrationDir, 'blogs.json'), JSON.stringify(sanityBlogs, null, 2))
  fs.writeFileSync(path.join(migrationDir, 'redirects.json'), JSON.stringify(redirects, null, 2))

  report.completedAt = new Date().toISOString()
  fs.writeFileSync(path.join(migrationDir, 'migration-report.json'), JSON.stringify(report, null, 2))

  console.log('\n========================================================')
  console.log('  MIGRATION SUMMARY & REPORT')
  console.log('========================================================')
  console.log(`  Total WP Posts Found:        ${report.totals.wpPostsFound}`)
  console.log(`  Total Blogs Migrated:        ${report.totals.blogsMigrated}`)
  console.log(`  Total Blogs Skipped:         ${report.totals.blogsSkipped}`)
  console.log(`  Total Blogs Failed:          ${report.totals.blogsFailed}`)
  console.log(`  Total Categories Migrated:   ${report.totals.categoriesMigrated}`)
  console.log(`  Total Tags Migrated:         ${report.totals.tagsMigrated}`)
  console.log(`  Total Authors Migrated:      ${report.totals.authorsMigrated}`)
  console.log(`  Total Images Uploaded:       ${report.totals.imagesUploaded}`)
  console.log(`  Total Images Failed:         ${report.totals.imagesFailed}`)
  console.log('========================================================')
  console.log(`  Artifacts Generated in: ${migrationDir}`)
  console.log('    - blogs.json')
  console.log('    - categories.json')
  console.log('    - tags.json')
  console.log('    - authors.json')
  console.log('    - redirects.json')
  console.log('    - migration-report.json')
  console.log('========================================================\n')
}

runMigration().catch((err) => {
  console.error('Fatal Migration Error:', err)
  process.exit(1)
})
