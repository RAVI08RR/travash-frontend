// Helper utility to sanitize and clean scraped case study Portable Text blocks and text fields
// Runs safely on both server and client (no 'use client' directive)

export function isScrapedJunkOrCss(text: string): boolean {
  if (!text || typeof text !== 'string') return false
  const lower = text.toLowerCase()
  if (
    lower.includes('@media') ||
    lower.includes('.eael-') ||
    lower.includes('eael-') ||
    lower.includes('-webkit-box') ||
    lower.includes('-ms-flexbox') ||
    lower.includes('!important') ||
    lower.includes('display: none') ||
    lower.includes('display: flex') ||
    lower.includes('display: block') ||
    lower.includes('visibility: hidden') ||
    lower.includes('list-style: none') ||
    lower.includes('hamburger toggle menu') ||
    lower.includes('.eael-simple-menu') ||
    lower.includes('.eael-hamburger') ||
    lower.includes('<style') ||
    lower.includes('</style>') ||
    lower.includes('<script') ||
    lower.includes('</script>') ||
    (lower.includes('{') && lower.includes('}') && (lower.includes(':') || lower.includes(';')))
  ) {
    return true
  }
  return false
}

export function sanitizeScrapedText(input: any, defaultText: string = ''): string {
  if (!input || typeof input !== 'string') return defaultText
  let text = input.trim()
  if (!text) return defaultText

  const lower = text.toLowerCase()

  // Detect if the string contains CSS, HTML markup, or scraped WordPress navigation headers
  const isDirty =
    isScrapedJunkOrCss(text) ||
    lower.includes('data & analytics solutions') ||
    lower.includes('dedicated talent & teams') ||
    lower.includes('staff augmentation') ||
    lower.includes('quality assurance & testing') ||
    lower.includes('eael-') ||
    lower.includes('hamburger toggle menu') ||
    lower.includes('demo of the final product') ||
    (lower.includes('home') && lower.includes('services') && lower.includes('technologies'))

  if (isDirty) {
    // Attempt to rescue the authentic project introduction if present
    // In WordPress scraped pages, the real description starts after "Introduction" or "Case Study"
    let candidate = ''
    if (/introduction/i.test(text)) {
      const parts = text.split(/introduction\s*[:\-\n]?\s*/i)
      candidate = parts[parts.length - 1] || ''
    } else if (/case study/i.test(text)) {
      const parts = text.split(/case study\s*[:\-\n]?\s*/i)
      candidate = parts[parts.length - 1] || ''
    }

    if (candidate) {
      // If candidate still contains "Demo of the final product", split after it
      if (/demo of the final product/i.test(candidate)) {
        const afterDemo = candidate.split(/demo of the final product\s*[:\-\n]?\s*/i)
        candidate = afterDemo[afterDemo.length - 1] || ''
      }

      // Strip any WordPress footers (e.g. "Founded in 2005", "Sanali Spazio", etc.)
      const footerRegex = /(?:founded in 2005|sanali spazio|saif-zone|connect with our expert|©\s*202\d|all rights reserved)/i
      const footerMatch = candidate.search(footerRegex)
      if (footerMatch !== -1) {
        candidate = candidate.substring(0, footerMatch)
      }

      candidate = candidate.trim()

      // Ensure candidate is completely clean of CSS rules, brackets, or nav keywords
      if (!isScrapedJunkOrCss(candidate) && !candidate.includes('{') && !candidate.includes('}') && candidate.length >= 25) {
        text = candidate
      } else {
        return defaultText
      }
    } else {
      return defaultText
    }
  }

  // Final sanity check: no CSS rule fragments or HTML markup allowed in body text
  if (isScrapedJunkOrCss(text) || text.includes('{') || text.includes('}') || text.includes('@media') || text.length < 5) {
    return defaultText
  }

  return text
}

export function cleanCaseStudyContent(blocks: any[]): any[] {
  if (!Array.isArray(blocks) || blocks.length === 0) return []

  const navKeywords = new Set([
    'home',
    'about us',
    'about',
    'services',
    'works',
    'work',
    'technologies',
    'careers',
    'career',
    'blog',
    'blogs',
    'contact us',
    'contact',
    'ai & data engineering',
    'software engineering',
    'enterprise applications',
    'quality assurance & testing',
    'dedicated talent & teams',
    'data & analytics solutions',
    'cloud & devops',
    'digital experiences',
    'staff augmentation',
    'menu',
    'skip to main content',
    'hamburger toggle menu',
    'demo of the final product',
    'tech stack',
  ])

  // Filter out any navigation, CSS rules, and header links
  const filtered = blocks.filter((b) => {
    const rawText = (b.children || []).map((c: any) => c.text).join(' ')
    const text = rawText.replace(/\s+/g, ' ').trim().toLowerCase()

    if (!text) return false
    if (isScrapedJunkOrCss(rawText)) return false
    if (text.includes('skip to main content')) return false
    if (text.includes('travash software solutions') && (text.includes('menu') || text.length < 80)) return false
    if (text.includes('hamburger toggle menu')) return false
    if (text.startsWith('home >') || text.includes('home > medimee')) return false
    if (text.includes('ai & data engineering') && text.includes('software engineering')) return false
    if (navKeywords.has(text)) return false
    if (text === 'menu') return false
    return true
  })

  // Strip footer starting from "Founded in 2005" or address or connect with expert
  let endIndex = filtered.length
  for (let i = 0; i < filtered.length; i++) {
    const b = filtered[i]
    const text = (b.children || []).map((c: any) => c.text).join(' ').toLowerCase()
    if (
      text.includes('founded in 2005') ||
      text.includes('sanali spazio building') ||
      text.includes('saif-zone address') ||
      text.includes('©2025 travash') ||
      text.includes('connect with our expert today') ||
      text.includes('sneha sharma')
    ) {
      endIndex = i
      break
    }
  }

  return filtered.slice(0, endIndex)
}
