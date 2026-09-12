import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  const doc = {
    _id: 'caseStudiesPage',
    _type: 'caseStudiesPage',
    hero: {
      eyebrow: 'OUR WORK',
      heading: 'Real Problems.',
      headingHighlight: 'Measurable Outcomes.',
      description:
        'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
      badges: [
        '26+ Verified Case Studies',
        'Production Deployed',
        'Public & Private Sectors',
      ],
    },
    featuredSection: {
      badge: 'FEATURED WORK',
      title: 'Flagship Implementations',
      subtitle: 'Deep-dive into our highest-impact engineering engagements and digital transformation stories.',
    },
    cta: {
      heading: 'Ready to build something extraordinary?',
      description:
        'Schedule a confidential consultation with our principal software architects to discuss your technical roadmap.',
      buttonText: 'Discuss Your Initiative',
      buttonHref: '/contact-us',
    },
    seo: {
      metaTitle: 'Portfolio & Case Studies | Travash Software Solutions',
      metaDescription:
        'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
    },
  }

  console.log('Seeding caseStudiesPage into Sanity...')
  const res = await client.createOrReplace(doc)
  console.log('✅ Successfully seeded caseStudiesPage:', res._id)
}

seed().catch(console.error)
