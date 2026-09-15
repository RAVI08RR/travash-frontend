import React from 'react'
import Image from 'next/image'
import { FileText, Download, ExternalLink } from 'lucide-react'

export interface MediaAssetRef {
  _id?: string
  url?: string
  size?: number
  extension?: string
  mimeType?: string
  originalFilename?: string
  metadata?: {
    dimensions?: {
      width: number
      height: number
      aspectRatio?: number
    }
    lqip?: string
  }
}

export interface MediaItemData {
  _id?: string
  _type?: string
  title?: string
  mediaType?: 'image' | 'video' | 'icon' | 'logo' | 'document' | 'other' | string
  alt?: string
  caption?: string
  category?: string
  tags?: string[]
  image?: {
    asset?: MediaAssetRef
  }
  file?: {
    asset?: MediaAssetRef
  }
  posterImage?: {
    asset?: MediaAssetRef
  }
  externalUrl?: string
}

interface MediaRendererProps {
  media?: MediaItemData | null
  fallbackSrc?: string
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none'
}

export default function MediaRenderer({
  media,
  fallbackSrc,
  alt: customAlt,
  width,
  height,
  className = '',
  priority = false,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  objectFit = 'contain',
}: MediaRendererProps) {
  if (!media && !fallbackSrc) {
    return null
  }

  const mediaType = media?.mediaType || 'image'
  const altText = customAlt || media?.alt || media?.title || 'Media asset'

  // 1. VIDEO HANDLING
  if (mediaType === 'video') {
    const videoUrl = media?.file?.asset?.url || media?.externalUrl
    const posterUrl = media?.posterImage?.asset?.url || media?.image?.asset?.url

    if (videoUrl) {
      const isDirectVideo =
        videoUrl.endsWith('.mp4') ||
        videoUrl.endsWith('.webm') ||
        videoUrl.endsWith('.mov') ||
        media?.file?.asset?.mimeType?.startsWith('video/')

      if (isDirectVideo) {
        return (
          <video
            src={videoUrl}
            poster={posterUrl}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline
            className={`w-full rounded-xl ${className}`}
            width={width}
            height={height}
          />
        )
      }

      // External Video (e.g. YouTube, Vimeo, or web link)
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const videoId = videoUrl.includes('youtu.be')
          ? videoUrl.split('/').pop()?.split('?')[0]
          : videoUrl.split('v=')[1]?.split('&')[0]
        return (
          <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={altText}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        )
      }

      return (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-semibold text-[#004771] hover:underline ${className}`}
        >
          <span>Watch Video</span>
          <ExternalLink size={15} />
        </a>
      )
    }
  }

  // 2. DOCUMENT / PDF HANDLING
  if (mediaType === 'document') {
    const fileUrl = media?.file?.asset?.url || media?.externalUrl
    const fileName = media?.file?.asset?.originalFilename || media?.title || 'Download Document'
    const fileSize = media?.file?.asset?.size
      ? `(${(media.file.asset.size / (1024 * 1024)).toFixed(1)} MB)`
      : ''

    if (fileUrl) {
      return (
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-medium transition-colors ${className}`}
          download
        >
          <FileText className="w-5 h-5 text-[#004771]" />
          <span className="truncate max-w-[200px] text-sm">{fileName}</span>
          {fileSize && <span className="text-xs text-gray-400">{fileSize}</span>}
          <Download className="w-4 h-4 text-gray-400 ml-1" />
        </a>
      )
    }
  }

  // 3. IMAGE / LOGO / ICON / OTHER HANDLING
  const imageUrl =
    media?.image?.asset?.url ||
    media?.file?.asset?.url ||
    media?.externalUrl ||
    fallbackSrc

  if (!imageUrl) {
    return null
  }

  const isSvg =
    imageUrl.endsWith('.svg') ||
    media?.file?.asset?.extension === 'svg' ||
    media?.image?.asset?.url?.includes('.svg')

  const imgWidth =
    width ||
    media?.image?.asset?.metadata?.dimensions?.width ||
    160

  const imgHeight =
    height ||
    media?.image?.asset?.metadata?.dimensions?.height ||
    60

  return (
    <Image
      src={imageUrl}
      alt={altText}
      width={imgWidth}
      height={imgHeight}
      priority={priority}
      unoptimized={isSvg}
      className={`object-${objectFit} ${className}`}
    />
  )
}
