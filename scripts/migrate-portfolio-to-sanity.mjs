import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// 1. Load environment variables
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

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const TOKEN = process.env.SANITY_API_TOKEN

console.log(`🚀 Travash Portfolio Migration to Sanity`)
console.log(`Project: ${PROJECT_ID} | Dataset: ${DATASET} | Token: ${TOKEN ? 'Present (Read/Write)' : 'MISSING (Dry Run)'}`)

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  token: TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Discovered live portfolio projects
const TARGET_PROJECTS = [
  { slug: 'i4c-bank-portal', url: 'https://travash.com/i4c-bank-portal/', title: 'I4C Bank Portal', industry: 'Banking & Financial Services', service: 'Web Application' },
  { slug: 'i-verify', url: 'https://travash.com/i-verify/', title: 'i-Verify', industry: 'Government & Public Sector', service: 'Artificial Intelligence' },
  { slug: 'satyapaan', url: 'https://travash.com/satyapaan/', title: 'Satyapaan', industry: 'Government & Public Sector', service: 'Artificial Intelligence' },
  { slug: 'darpan', url: 'https://travash.com/darpan/', title: 'Darpan', industry: 'Government & Public Sector', service: 'Artificial Intelligence' },
  { slug: 'ugo', url: 'https://travash.com/ugo/', title: 'UGO', industry: 'Travel & Hospitality', service: 'Mobile Application' },
  { slug: 'nigaah-videosurvelience', url: 'https://travash.com/nigaah-videosurvelience/', title: 'Nigaah', industry: 'Government & Public Sector', service: 'Artificial Intelligence' },
  { slug: 'crowdcounting', url: 'https://travash.com/crowdcounting/', title: 'CrowdCounting', industry: 'Artificial Intelligence', service: 'Artificial Intelligence' },
  { slug: 'direct-owners', url: 'https://travash.com/direct-owners/', title: 'Direct owner', industry: 'Real Estate', service: 'Web Application' },
  { slug: 'spencer', url: 'https://travash.com/spencer/', title: 'Spencer', industry: 'E-Commerce', service: 'Website Development' },
  { slug: 'dovehouse', url: 'https://travash.com/dovehouse/', title: 'Dove House', industry: 'Healthcare', service: 'Website Development' },
  { slug: 'alexander-johnson-group', url: 'https://travash.com/alexander-johnson-group/', title: 'Alexander Johnson Group', industry: 'Real Estate', service: 'Website Development' },
  { slug: 'asak', url: 'https://travash.com/asak/', title: 'Asak', industry: 'Real Estate', service: 'Website Development' },
  { slug: 'arabian-hills', url: 'https://travash.com/arabian-hills/', title: 'Arbain Hills Estate', industry: 'Real Estate', service: 'Website Development' },
  { slug: 'ledray', url: 'https://travash.com/ledray/', title: 'Ledray', industry: 'Technology', service: 'Web Application' },
  { slug: 'indispare', url: 'https://travash.com/indispare/', title: 'Indispare', industry: 'Industrial', service: 'Web Application' },
  { slug: 'konvino', url: 'https://travash.com/konvino/', title: 'Konvino', industry: 'Hospitality and Travel', service: 'Mobile Application' },
  { slug: 'dine-desk', url: 'https://travash.com/dine-desk/', title: 'Dine Desk', industry: 'Hospitality and Travel', service: 'Mobile Application' },
  { slug: 'medimee', url: 'https://travash.com/medimee/', title: 'Medimee', industry: 'Health & Wellness', service: 'Mobile Application' },
  { slug: 'pekt', url: 'https://travash.com/pekt/', title: 'PEKT', industry: 'Technology', service: 'Web Application' },
  { slug: 'skipr', url: 'https://travash.com/skipr/', title: 'Skipr', industry: 'Hospitality and Travel', service: 'Mobile Application' },
  { slug: 'gratus', url: 'https://travash.com/gratus/', title: 'Gratus', industry: 'Technology', service: 'Mobile Application' },
  { slug: 'gemba', url: 'https://travash.com/gemba/', title: 'Gemba Connect', industry: 'Industrial', service: 'Web Application' },
  { slug: 'wiggett-app', url: 'https://travash.com/wiggett-app/', title: 'Wiggett Group', industry: 'Real Estate', service: 'Mobile Application' },
  { slug: 'kalsi-estate', url: 'https://travash.com/kalsi-estate/', title: 'Kalsi Estate', industry: 'Real Estate', service: 'Website Development' },
  { slug: 'grid-properties', url: 'https://travash.com/grid-properties/', title: 'Grid Properties', industry: 'Real Estate', service: 'Website Development' },
  { slug: 'soul-trips', url: 'https://travash.com/soul-trips/', title: 'Soul Trips', industry: 'Hospitality and Travel', service: 'Website Development' },
]

// HTML Entity Decoder
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

// Convert HTML content string to Sanity Portable Text
function htmlToPortableText(html) {
  if (!html) return []
  const blocks = []
  
  // Split into paragraphs / headings / lists
  const cleaned = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  const segments = cleaned.split(/(?=<(?:h[1-6]|p|ul|ol|blockquote)[\s>])/i)

  for (const seg of segments) {
    const trimmed = seg.trim()
    if (!trimmed) continue

    const hMatch = trimmed.match(/^<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/i)
    if (hMatch) {
      const level = parseInt(hMatch[1], 10)
      const text = decodeHtml(hMatch[2].replace(/<[^>]+>/g, '').trim())
      if (text) {
        blocks.push({
          _key: `h_${Math.random().toString(36).substring(2, 9)}`,
          _type: 'block',
          style: level <= 2 ? 'h2' : level === 3 ? 'h3' : 'h4',
          children: [{ _key: `span_${Math.random().toString(36).substring(2, 9)}`, _type: 'span', text }],
          markDefs: [],
        })
      }
      continue
    }

    const liMatches = [...trimmed.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    if (liMatches.length > 0) {
      for (const li of liMatches) {
        const text = decodeHtml(li[1].replace(/<[^>]+>/g, '').trim())
        if (text) {
          blocks.push({
            _key: `li_${Math.random().toString(36).substring(2, 9)}`,
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _key: `span_${Math.random().toString(36).substring(2, 9)}`, _type: 'span', text }],
            markDefs: [],
          })
        }
      }
      continue
    }

    const pText = decodeHtml(trimmed.replace(/<[^>]+>/g, '').trim())
    if (pText && pText.length > 2) {
      blocks.push({
        _key: `p_${Math.random().toString(36).substring(2, 9)}`,
        _type: 'block',
        style: 'normal',
        children: [{ _key: `span_${Math.random().toString(36).substring(2, 9)}`, _type: 'span', text: pText }],
        markDefs: [],
      })
    }
  }

  return blocks
}

// In-memory image asset cache: url -> sanity asset id
const imageAssetCache = new Map()

async function uploadImageToSanity(imageUrl, filename = 'portfolio-image.webp') {
  if (!imageUrl || !imageUrl.startsWith('http')) return null
  if (imageAssetCache.has(imageUrl)) {
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAssetCache.get(imageUrl),
      },
    }
  }

  if (!TOKEN) return null

  try {
    const res = await fetch(imageUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    if (!res.ok) {
      console.warn(`Could not download image: ${imageUrl} (${res.status})`)
      return null
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    const asset = await client.assets.upload('image', buffer, {
      filename: path.basename(imageUrl.split('?')[0]) || filename,
    })

    imageAssetCache.set(imageUrl, asset._id)
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
  } catch (err) {
    console.warn(`Image upload failed for ${imageUrl}:`, err.message)
    return null
  }
}

// Ensure Industry Document in Sanity
const industryRefCache = new Map()
async function ensureIndustry(title) {
  if (!title) return null
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  if (industryRefCache.has(slug)) return industryRefCache.get(slug)

  if (!TOKEN) {
    return { _type: 'reference', _ref: `industry-${slug}` }
  }

  try {
    const existing = await client.fetch(`*[_type == "industry" && slug.current == $slug][0]._id`, { slug })
    if (existing) {
      industryRefCache.set(slug, existing)
      return { _type: 'reference', _ref: existing }
    }

    const doc = await client.create({
      _type: 'industry',
      title,
      name: title,
      slug: { _type: 'slug', current: slug },
      description: `Software engineering and AI acceleration for ${title}.`,
    })

    industryRefCache.set(slug, doc._id)
    return { _type: 'reference', _ref: doc._id }
  } catch (err) {
    console.warn(`Could not ensure industry ${title}:`, err.message)
    return null
  }
}

// Ensure Portfolio Service Document in Sanity
const serviceRefCache = new Map()
async function ensureService(title) {
  if (!title) return null
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  if (serviceRefCache.has(slug)) return serviceRefCache.get(slug)

  if (!TOKEN) {
    return { _type: 'reference', _ref: `service-${slug}` }
  }

  try {
    const existing = await client.fetch(`*[_type == "portfolioService" && slug.current == $slug][0]._id`, { slug })
    if (existing) {
      serviceRefCache.set(slug, existing)
      return { _type: 'reference', _ref: existing }
    }

    const doc = await client.create({
      _type: 'portfolioService',
      title,
      slug: { _type: 'slug', current: slug },
      description: `${title} engineering capability at Travash.`,
    })

    serviceRefCache.set(slug, doc._id)
    return { _type: 'reference', _ref: doc._id }
  } catch (err) {
    console.warn(`Could not ensure service ${title}:`, err.message)
    return null
  }
}

// Ensure Technology Document in Sanity
const techRefCache = new Map()
async function ensureTechnology(title) {
  if (!title) return null
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  if (techRefCache.has(slug)) return techRefCache.get(slug)

  if (!TOKEN) {
    return { _type: 'reference', _ref: `tech-${slug}` }
  }

  try {
    const existing = await client.fetch(`*[_type == "technology" && slug.current == $slug][0]._id`, { slug })
    if (existing) {
      techRefCache.set(slug, existing)
      return { _type: 'reference', _ref: existing }
    }

    const doc = await client.create({
      _type: 'technology',
      title,
      name: title,
      slug: { _type: 'slug', current: slug },
      category: 'Web Application',
    })

    techRefCache.set(slug, doc._id)
    return { _type: 'reference', _ref: doc._id }
  } catch (err) {
    console.warn(`Could not ensure technology ${title}:`, err.message)
    return null
  }
}

// Extract rich details from live WordPress case study page
async function crawlProjectPage(item) {
  console.log(`\n🔍 Crawling project: ${item.title} (${item.url})...`)
  let html = ''
  try {
    const res = await fetch(item.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    })
    if (res.ok) {
      html = await res.text()
    }
  } catch (err) {
    console.warn(`Failed to fetch ${item.url}:`, err.message)
  }

  // Extract meta tags / SEO
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i)
  const metaTitle = titleMatch ? decodeHtml(titleMatch[1].trim()) : `${item.title} Portfolio | Travash Software Solutions`

  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i)
  const metaDescription = descMatch ? decodeHtml(descMatch[1].trim()) : `Explore ${item.title} portfolio by Travash Software Solutions.`

  const ogImgMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
  const ogImageUrl = ogImgMatch ? ogImgMatch[1] : null

  // Extract images from the page
  const imgMatches = [...html.matchAll(/<img[^>]+src=["'](https?:\/\/[^"'\s]+\.(?:png|jpg|jpeg|webp|svg))["'][^>]*>/gi)]
  const pageImages = imgMatches
    .map((m) => m[1])
    .filter((src) => !src.includes('logo') && !src.includes('wp-includes') && !src.includes('avatar') && !src.includes('icon'))
  
  const featuredImageUrl = ogImageUrl || pageImages[0] || null

  // Extract Introduction
  let introduction = ''
  const introMatch = html.match(/##\s*Introduction[\s\S]*?(?:##|$)/i) || html.match(/class=["'][^"']*intro[^"']*["'][^>]*>([\s\S]*?)<\/(?:div|section)>/i)
  if (introMatch) {
    introduction = decodeHtml(introMatch[0].replace(/##\s*Introduction/i, '').replace(/<[^>]+>/g, '').trim())
  } else {
    // Fallback: look for paragraphs early in content
    const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    for (const pm of pMatches) {
      const clean = decodeHtml(pm[1].replace(/<[^>]+>/g, '').trim())
      if (clean.length > 80 && !clean.includes('cookie') && !clean.includes('copyright')) {
        introduction = clean
        break
      }
    }
  }

  // Extract Challenges / Scope
  const challenges = []
  const challengeMatch = html.match(/##\s*(?:Scope\/Challenges|Challenges|The Complexity)[\s\S]*?(?:##|$)/i)
  if (challengeMatch) {
    const listItems = [...challengeMatch[0].matchAll(/(?:[-*•]|\d+\.)\s*([^\n\r]+)/g)]
    for (const li of listItems) {
      const text = decodeHtml(li[1].trim())
      if (text && text.length > 3) {
        challenges.push({ title: text, description: text })
      }
    }
  }

  // Extract Solutions
  const solutions = []
  const solutionMatch = html.match(/##\s*(?:Solutions|Solution Architecture)[\s\S]*?(?:##|$)/i)
  if (solutionMatch) {
    const solHeadings = [...solutionMatch[0].matchAll(/###?\s*([^\n\r]+)/g)]
    for (const sh of solHeadings) {
      const text = decodeHtml(sh[1].trim())
      if (text && !text.toLowerCase().includes('solution') && text.length > 3) {
        solutions.push({ title: text, description: text })
      }
    }
  }

  // Extract Metrics (e.g. 1.96 Million, 800+, 70%)
  const metrics = []
  const metricMatches = [...html.matchAll(/######?\s*([0-9.,%+xX]+\s*(?:Million|Billion|K|k|%)?)[^\n\r]*[\r\n]+([^\n\r#]+)/gi)]
  for (const mm of metricMatches) {
    const val = mm[1].trim()
    const lbl = decodeHtml(mm[2].trim())
    if (val && lbl && lbl.length < 100) {
      metrics.push({ value: val, label: lbl, description: lbl })
    }
  }

  // Extract Testimonial
  let testimonial = null
  const testMatch = html.match(/The Satyaapan web application built by Travash[\s\S]*?(?:By [^\n]+)/i) ||
                    html.match(/“([^”"]{40,500})”[\s\S]*?(?:By|–)\s*([^\n<]+)/i)
  if (testMatch) {
    testimonial = {
      quote: decodeHtml(testMatch[1] || testMatch[0]),
      name: decodeHtml(testMatch[2] || 'Client Leadership'),
      designation: 'Leadership Representative',
      company: item.title,
    }
  }

  // Extract Technologies mentioned
  const detectedTech = new Set()
  const techKeywords = [
    'AI', 'Machine Learning', 'Facial Recognition', 'Data Extraction', 'Computer Vision',
    'Next.js', 'React', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes',
    'AWS', 'Microservices', 'Web App', 'Mobile App', 'Workflow Automation', 'AFIS', 'DARPAN'
  ]
  for (const tk of techKeywords) {
    if (new RegExp(`\\b${tk}\\b`, 'i').test(html)) {
      detectedTech.add(tk)
    }
  }

  return {
    ...item,
    metaTitle,
    metaDescription,
    featuredImageUrl,
    galleryImageUrls: pageImages.slice(1, 6),
    introduction: introduction || `${item.title} is an enterprise software and digital transformation solution engineered by Travash.`,
    challenges,
    solutions,
    metrics: metrics.length > 0 ? metrics : [{ value: '100%', label: 'Delivery Success SLA', description: 'Enterprise Project Delivery' }],
    testimonial,
    technologies: Array.from(detectedTech),
    rawHtml: html,
  }
}

// Automatically discover all projects from https://travash.com/portfolio/
async function discoverProjectsFromListing() {
  console.log(`🌐 Crawling https://travash.com/portfolio/ to automatically discover projects...`)
  const discoveredMap = new Map()

  // First seed with known projects to ensure high quality classification defaults
  for (const p of TARGET_PROJECTS) {
    discoveredMap.set(p.slug, p)
  }

  try {
    const res = await fetch('https://travash.com/portfolio/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    })
    if (res.ok) {
      const html = await res.text()

      // Extract all links pointing to potential case study / project pages
      const linkMatches = [...html.matchAll(/href=["'](https:\/\/travash\.com\/([a-z0-9-]+)\/?)["']/gi)]
      const ignored = new Set([
        'portfolio', 'blogs', 'about-us', 'contact-us', 'privacy-policy', 'terms-and-conditions',
        'terms-of-service', 'services', 'careers', 'career', 'tag', 'category', 'wp-content',
        'wp-includes', 'feed', 'comments', 'author', 'page'
      ])

      for (const m of linkMatches) {
        const fullUrl = m[1].replace(/\/$/, '') + '/'
        const slug = m[2].toLowerCase()
        if (!ignored.has(slug) && !slug.includes('/') && !slug.includes('#')) {
          if (!discoveredMap.has(slug)) {
            const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            discoveredMap.set(slug, {
              slug,
              url: fullUrl,
              title,
              industry: 'Technology',
              service: 'Web Application'
            })
            console.log(`✨ Discovered new project from portfolio listing: ${title} (${slug})`)
          }
        }
      }
    }
  } catch (err) {
    console.warn(`Could not reach portfolio listing:`, err.message)
  }

  return Array.from(discoveredMap.values())
}

async function migrate() {
  const projectsToMigrate = await discoverProjectsFromListing()
  console.log(`\n==================================================`)
  console.log(`Starting Portfolio Migration for ${projectsToMigrate.length} Projects...`)
  console.log(`==================================================\n`)

  const migrationDir = path.resolve(process.cwd(), 'migration/portfolio')
  fs.mkdirSync(migrationDir, { recursive: true })

  const crawledProjects = []
  const allIndustries = new Map()
  const allServices = new Map()
  const allTechnologies = new Map()
  const redirects = []

  let projectsMigrated = 0
  let projectsFailed = 0
  let imagesUploaded = 0

  for (let i = 0; i < projectsToMigrate.length; i++) {
    const item = projectsToMigrate[i]
    try {
      const data = await crawlProjectPage(item)
      crawledProjects.push(data)

      // Collect taxonomy
      if (data.industry) {
        allIndustries.set(data.industry, {
          title: data.industry,
          slug: data.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        })
      }
      if (data.service) {
        allServices.set(data.service, {
          title: data.service,
          slug: data.service.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        })
      }
      for (const t of data.technologies) {
        allTechnologies.set(t, {
          title: t,
          slug: t.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        })
      }

      // Generate redirect
      redirects.push({
        source: `/${data.slug}/`,
        destination: `/portfolio/${data.slug}/`,
        permanent: true,
      })

      // Upload Images to Sanity
      let featuredImageAsset = null
      if (data.featuredImageUrl) {
        featuredImageAsset = await uploadImageToSanity(data.featuredImageUrl, `${data.slug}-cover.webp`)
        if (featuredImageAsset) imagesUploaded++
      }

      const galleryAssets = []
      for (const gUrl of data.galleryImageUrls) {
        const ga = await uploadImageToSanity(gUrl, `${data.slug}-gallery.webp`)
        if (ga) {
          galleryAssets.push(ga)
          imagesUploaded++
        }
      }

      // Ensure references
      const industryRef = await ensureIndustry(data.industry)
      const serviceRef = await ensureService(data.service)
      const techRefs = []
      for (const t of data.technologies) {
        const tr = await ensureTechnology(t)
        if (tr) techRefs.push(tr)
      }

      // Portable text blocks for content
      const portableContent = htmlToPortableText(data.rawHtml)

      // Construct Sanity portfolioProject Document
      const doc = {
        _type: 'portfolioProject',
        wordpressId: 1000 + i,
        title: data.title,
        slug: { _type: 'slug', current: data.slug },
        shortTitle: data.title,
        excerpt: data.metaDescription,
        description: data.introduction,
        projectUrl: data.url,
        originalWordPressUrl: data.url,
        publishedAt: new Date(2024, 0, i + 1).toISOString(),
        updatedAt: new Date().toISOString(),
        industry: industryRef,
        industryName: data.industry,
        serviceType: data.service,
        services: serviceRef ? [serviceRef] : [],
        technologies: techRefs,
        techStack: data.technologies,
        year: '2024',
        client: data.title,
        location: 'Global / Enterprise',
        featuredImage: featuredImageAsset,
        gallery: galleryAssets,
        content: portableContent,
        challenges: data.challenges,
        solutions: data.solutions,
        metrics: data.metrics,
        testimonial: data.testimonial,
        seo: {
          metaTitle: data.metaTitle,
          metaDescription: data.metaDescription,
          canonicalUrl: `https://travash.com/portfolio/${data.slug}/`,
          ogTitle: data.metaTitle,
          ogDescription: data.metaDescription,
          ogImage: featuredImageAsset,
          noIndex: false,
        },
        displayOrder: i + 1,
        isFeatured: i < 6,
        status: 'published',
      }

      if (TOKEN) {
        // Check if project exists by slug or wordpressId
        const existingId = await client.fetch(
          `*[_type == "portfolioProject" && (slug.current == $slug || wordpressId == $wId)][0]._id`,
          { slug: data.slug, wId: doc.wordpressId }
        )

        if (existingId) {
          await client.patch(existingId).set(doc).commit()
          console.log(`✅ Updated existing Sanity document: ${data.title} (${existingId})`)
        } else {
          const created = await client.create(doc)
          console.log(`✨ Created new Sanity document: ${data.title} (${created._id})`)
        }
      } else {
        console.log(`📝 [Dry Run] Staged document: ${data.title}`)
      }

      projectsMigrated++
    } catch (err) {
      console.error(`❌ Error migrating ${item.title}:`, err.message)
      projectsFailed++
    }
  }

  // Save JSON exports
  console.log(`\n💾 Writing migration JSON files to ${migrationDir}...`)
  fs.writeFileSync(path.join(migrationDir, 'portfolio.json'), JSON.stringify(crawledProjects, null, 2), 'utf8')
  fs.writeFileSync(path.join(migrationDir, 'industries.json'), JSON.stringify(Array.from(allIndustries.values()), null, 2), 'utf8')
  fs.writeFileSync(path.join(migrationDir, 'services.json'), JSON.stringify(Array.from(allServices.values()), null, 2), 'utf8')
  fs.writeFileSync(path.join(migrationDir, 'technologies.json'), JSON.stringify(Array.from(allTechnologies.values()), null, 2), 'utf8')
  fs.writeFileSync(path.join(migrationDir, 'redirects.json'), JSON.stringify(redirects, null, 2), 'utf8')

  const report = {
    totalProjectsFound: projectsToMigrate.length,
    projectsMigrated,
    projectsFailed,
    imagesUploaded,
    industriesCreated: allIndustries.size,
    servicesCreated: allServices.size,
    technologiesCreated: allTechnologies.size,
    timestamp: new Date().toISOString(),
  }

  fs.writeFileSync(path.join(migrationDir, 'migration-report.json'), JSON.stringify(report, null, 2), 'utf8')

  console.log(`\n==================================================`)
  console.log(`🎉 MIGRATION COMPLETED`)
  console.log(`Projects Migrated: ${projectsMigrated} / ${projectsToMigrate.length}`)
  console.log(`Images Uploaded to Sanity: ${imagesUploaded}`)
  console.log(`Industries: ${allIndustries.size} | Services: ${allServices.size} | Technologies: ${allTechnologies.size}`)
  console.log(`Redirects Generated: ${redirects.length}`)
  console.log(`Artifacts saved in migration/portfolio/`)
  console.log(`==================================================\n`)
}

migrate().catch((err) => {
  console.error('Fatal migration error:', err)
  process.exit(1)
})
