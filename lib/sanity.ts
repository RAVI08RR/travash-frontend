import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Only create client if projectId is a valid Sanity project ID (a-z, 0-9, dashes)
const isValidProjectId = /^[a-z0-9-]+$/.test(projectId) && projectId.length > 0

export const client = isValidProjectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : createClient({
      // Stub client for development without Sanity configured
      projectId: 'placeholder',
      dataset: 'production',
      apiVersion,
      useCdn: false,
    })

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
