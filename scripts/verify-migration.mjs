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
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function verify() {
  console.log('Auditing Sanity CMS Dataset Content...')
  const [blogsCount, catCount, tagCount, authorsCount, sampleBlog] = await Promise.all([
    client.fetch('count(*[_type == "blogPost"])'),
    client.fetch('count(*[_type == "category"])'),
    client.fetch('count(*[_type == "tag"])'),
    client.fetch('count(*[_type == "author"])'),
    client.fetch('*[_type == "blogPost"][0] { title, "slug": slug.current, wordpressId, "categories": categories[]->title }'),
  ])

  console.log('Sanity Audit Results:')
  console.log(`  - blogPost documents: ${blogsCount}`)
  console.log(`  - category documents: ${catCount}`)
  console.log(`  - tag documents:      ${tagCount}`)
  console.log(`  - author documents:   ${authorsCount}`)
  console.log('\nSample Migrated Document in Sanity:')
  console.log(JSON.stringify(sampleBlog, null, 2))
}

verify().catch((e) => {
  console.error('Verification error:', e.message)
})
