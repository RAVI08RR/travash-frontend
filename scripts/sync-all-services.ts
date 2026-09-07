import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import {
  DEFAULT_AI_DATA_ENGINEERING_SERVICE,
  DEFAULT_DATA_ANALYTICS_SERVICE,
  DEFAULT_SOFTWARE_ENGINEERING_SERVICE,
  DEFAULT_DIGITAL_EXPERIENCES_SERVICE,
  DEFAULT_ENTERPRISE_APPS_SERVICE,
  DEFAULT_CLOUD_DEVOPS_SERVICE,
  DEFAULT_QA_TESTING_SERVICE,
  DEFAULT_DEDICATED_TEAMS_SERVICE,
  DEFAULT_STAFF_AUGMENTATION_SERVICE,
  ServiceData,
} from '../lib/service-data'

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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('❌ Missing SANITY_API_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const RAW_SERVICES: Array<{ id: string; slug: string; data: ServiceData }> = [
  { id: 'service-ai-data-engineering', slug: 'ai-data-engineering', data: DEFAULT_AI_DATA_ENGINEERING_SERVICE },
  { id: 'service-data-analytics-solutions', slug: 'data-analytics-solutions', data: DEFAULT_DATA_ANALYTICS_SERVICE },
  { id: 'service-software-engineering', slug: 'software-engineering', data: DEFAULT_SOFTWARE_ENGINEERING_SERVICE },
  { id: 'service-digital-experiences-web-mobile', slug: 'digital-experiences-web-mobile', data: DEFAULT_DIGITAL_EXPERIENCES_SERVICE },
  { id: 'service-enterprise-applications', slug: 'enterprise-applications', data: DEFAULT_ENTERPRISE_APPS_SERVICE },
  { id: 'service-cloud-devops', slug: 'cloud-devops', data: DEFAULT_CLOUD_DEVOPS_SERVICE },
  { id: 'service-quality-assurance-testing', slug: 'quality-assurance-testing', data: DEFAULT_QA_TESTING_SERVICE },
  { id: 'service-dedicated-talent-and-teams', slug: 'dedicated-talent-and-teams', data: DEFAULT_DEDICATED_TEAMS_SERVICE },
  { id: 'service-staff-augmentation', slug: 'staff-augmentation', data: DEFAULT_STAFF_AUGMENTATION_SERVICE },
]

function ensureKeys<T extends object>(arr: T[] | undefined, prefix: string): T[] | undefined {
  if (!arr || !Array.isArray(arr)) return undefined
  return arr.map((item, idx) => ({
    _key: (item as any)._key || `${prefix}-${idx + 1}`,
    ...item,
  }))
}

async function syncToSanity() {
  console.log(`🚀 Starting Full Sanity Synchronization for 9 Services...`)
  console.log(`📌 Project ID: ${projectId} | Dataset: ${dataset}`)

  for (const item of RAW_SERVICES) {
    const s = item.data
    console.log(`⏳ Preparing "${s.title}" (${item.slug})...`)

    const doc: any = {
      _id: item.id,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: item.slug },
      menuTitle: s.menuTitle || s.title,
      shortDescription: s.shortDescription || '',
    }

    if (s.hero) {
      doc.hero = {
        eyebrow: s.hero.eyebrow,
        title: s.hero.title,
        description: s.hero.description,
        primaryCTA: s.hero.primaryCTA,
        secondaryCTA: s.hero.secondaryCTA,
        heroImageAlt: s.hero.heroImageAlt,
        highlights: s.hero.highlights,
      }
    }

    if (s.problemSection) {
      doc.problemSection = {
        label: s.problemSection.label,
        title: s.problemSection.title,
        headline: s.problemSection.headline,
        description: s.problemSection.description,
        painPoints: ensureKeys(s.problemSection.painPoints, 'pp'),
      }
    }

    if (s.solutionOverview) {
      doc.solutionOverview = {
        heading: s.solutionOverview.heading,
        description: s.solutionOverview.description,
        benefits: ensureKeys(s.solutionOverview.benefits, 'ben'),
        cta: s.solutionOverview.cta,
      }
    }

    if (s.capabilities) {
      doc.capabilities = ensureKeys(s.capabilities, 'cap')
    }

    if (s.process) {
      doc.process = {
        heading: s.process.heading,
        description: s.process.description,
        steps: ensureKeys(s.process.steps, 'step'),
      }
    }

    if (s.engagementModels) {
      doc.engagementModels = ensureKeys(s.engagementModels, 'eng')
    }

    if (s.technologyStack) {
      doc.technologyStack = ensureKeys(s.technologyStack, 'tech')
    }

    if (s.trustSection) {
      doc.trustSection = {
        heading: s.trustSection.heading,
        description: s.trustSection.description,
        stats: ensureKeys(s.trustSection.stats, 'stat'),
        trustPoints: s.trustSection.trustPoints,
      }
    }

    if (s.testimonial) {
      doc.testimonial = {
        quote: s.testimonial.quote,
        author: s.testimonial.author,
        role: s.testimonial.role,
        company: s.testimonial.company,
        badge: s.testimonial.badge,
      }
    }

    if (s.faqs) {
      doc.faqs = ensureKeys(s.faqs, 'faq')
    }

    if (s.finalCTA) {
      doc.finalCTA = {
        heading: s.finalCTA.heading,
        description: s.finalCTA.description,
        primaryCTA: s.finalCTA.primaryCTA,
        secondaryCTA: s.finalCTA.secondaryCTA,
      }
    }

    if (s.seo) {
      doc.seo = {
        metaTitle: s.seo.metaTitle,
        metaDescription: s.seo.metaDescription,
        canonicalUrl: s.seo.canonicalUrl,
        noIndex: s.seo.noIndex,
      }
    }

    try {
      const result = await client.createOrReplace(doc)
      console.log(`✅ Synced "${s.title}" -> Rev: ${result._rev}`)
    } catch (err: any) {
      console.error(`❌ Error syncing "${s.title}":`, err.message)
    }
  }

  console.log(`\n🎉 ALL 9 SERVICES SYNCHRONIZED SUCCESSFULLY TO SANITY!`)
}

syncToSanity()
