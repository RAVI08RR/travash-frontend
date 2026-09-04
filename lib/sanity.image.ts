import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './sanity'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

const imageBuilder = createImageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  if (!source) return null
  return imageBuilder.image(source)
}

export function getSanityImageUrl(source: SanityImageSource, width = 1200, height?: number): string {
  if (!source) return '/home-img/Group 1000003287.png'
  if (typeof source === 'string') return source
  if (source?.asset?.url) return source.asset.url

  try {
    let builder = imageBuilder.image(source).auto('format').fit('max')
    if (width) builder = builder.width(width)
    if (height) builder = builder.height(height)
    return builder.url()
  } catch {
    return '/home-img/Group 1000003287.png'
  }
}
