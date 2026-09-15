/**
 * Utility to parse Sanity asset references and auto-detect image/file format,
 * dimensions, orientation, and category.
 *
 * Sanity asset _ref formats:
 * - Images: image-<hash>-<width>x<height>-<ext> (e.g. image-35914619d08ee7a1d13f57288eb655513ab7374b-168x83-svg)
 * - Files:  file-<hash>-<ext> (e.g. file-abc123456789-pdf, file-xyz987654321-mp4)
 */

export interface DetectedAssetFormat {
  extension: string
  extensionUpper: string
  formatLabel: string
  dimensions?: { width: number; height: number }
  dimensionsText?: string
  aspectRatio?: number
  orientation?: 'landscape' | 'portrait' | 'square' | 'vector'
  badge: string
  mediaCategory: 'vector' | 'image' | 'video' | 'document' | 'other'
}

export function detectAssetFormat(assetRef?: string): DetectedAssetFormat | null {
  if (!assetRef || typeof assetRef !== 'string') return null

  // File reference: file-<hash>-<ext>
  if (assetRef.startsWith('file-')) {
    const parts = assetRef.split('-')
    const ext = (parts[parts.length - 1] || '').toLowerCase()
    const extUpper = ext.toUpperCase()

    let mediaCategory: 'video' | 'document' | 'other' = 'other'
    if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(ext)) {
      mediaCategory = 'video'
    } else if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv'].includes(ext)) {
      mediaCategory = 'document'
    }

    const typeDesc =
      mediaCategory === 'video' ? 'Video' : mediaCategory === 'document' ? 'Document' : 'File'

    return {
      extension: ext,
      extensionUpper: extUpper,
      formatLabel: `${extUpper} ${typeDesc}`,
      badge: `[${extUpper} • ${typeDesc}]`,
      mediaCategory,
    }
  }

  // Image reference: image-<hash>-<width>x<height>-<ext>
  if (assetRef.startsWith('image-')) {
    const parts = assetRef.split('-')
    if (parts.length >= 4) {
      const dimsStr = parts[2] // e.g. 168x83 or 1920x1080
      const ext = (parts[3] || '').toLowerCase()
      const extUpper = ext.toUpperCase()

      const [wStr, hStr] = dimsStr.split('x')
      const width = parseInt(wStr, 10)
      const height = parseInt(hStr, 10)
      const hasDims = !isNaN(width) && !isNaN(height) && width > 0 && height > 0

      let orientation: 'landscape' | 'portrait' | 'square' | 'vector' = 'landscape'
      let aspectRatio: number | undefined

      if (ext === 'svg') {
        orientation = 'vector'
      } else if (hasDims) {
        aspectRatio = Math.round((width / height) * 100) / 100
        if (width === height) orientation = 'square'
        else if (width > height) orientation = 'landscape'
        else orientation = 'portrait'
      }

      const isVector = ext === 'svg'
      const dimBadge = hasDims ? `${width}×${height}` : ''
      const orientationLabel =
        isVector
          ? 'Vector'
          : orientation
          ? orientation.charAt(0).toUpperCase() + orientation.slice(1)
          : ''

      const badgeParts = [extUpper]
      if (dimBadge) badgeParts.push(dimBadge)
      if (orientationLabel) badgeParts.push(orientationLabel)

      return {
        extension: ext,
        extensionUpper: extUpper,
        formatLabel: isVector
          ? `SVG Vector Graphic${hasDims ? ` (${width}×${height})` : ''}`
          : `${extUpper} Image${hasDims ? ` (${width}×${height})` : ''}`,
        dimensions: hasDims ? { width, height } : undefined,
        dimensionsText: dimBadge,
        aspectRatio,
        orientation,
        badge: `[${badgeParts.join(' • ')}]`,
        mediaCategory: isVector ? 'vector' : 'image',
      }
    }
  }

  return null
}
