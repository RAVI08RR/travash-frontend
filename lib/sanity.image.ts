import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './sanity'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

const imageBuilder = createImageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  if (!source) return null
  return imageBuilder.image(source).quality(80)
}

export function getSanityImageUrl(
  source: SanityImageSource,
  width = 2400,
  height?: number,
  quality = 80
): string {
  if (!source) return '/home-img/Group 1000003287.png'
  if (typeof source === 'string') return source

  try {
    let builder = imageBuilder.image(source).quality(quality).auto('format').fit('max')
    if (width && width > 0) builder = builder.width(width)
    if (height && height > 0) builder = builder.height(height)
    return builder.url()
  } catch {
    if (source?.asset?.url) return source.asset.url
    return '/home-img/Group 1000003287.png'
  }
}
