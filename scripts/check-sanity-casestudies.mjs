import { createClient } from '@sanity/client'
import fs from 'fs'

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => {
      const [k, ...v] = l.split('=')
      return [k.trim(), v.join('=').trim()]
    })
)

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  token: env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

async function check() {
  const studies = await client.fetch('*[_type == "caseStudy"]{ _id, title, "slug": slug.current }')
  console.log('Case studies currently in Sanity:', studies)
}

check().catch(console.error)
