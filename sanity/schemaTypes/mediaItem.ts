import { defineType, defineField } from 'sanity'
import { detectAssetFormat } from '../lib/formatDetector'
import { FormatDetectorCard } from '../components/FormatDetectorCard'

export const mediaItem = defineType({
  name: 'mediaItem',
  title: 'Media Library Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Media Title / Name',
      type: 'string',
      description: 'Human-readable name for this asset (e.g., "Travash Primary Logo", "Hero Explainer Video")',
      validation: (Rule) => Rule.required().error('A media title is required'),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      description: 'Categorize this asset to help organize and filter in the Media Library',
      options: {
        list: [
          { title: 'Image (JPG, PNG, WebP, GIF, AVIF)', value: 'image' },
          { title: 'Video (MP4, WebM, MOV)', value: 'video' },
          { title: 'Icon (SVG, PNG)', value: 'icon' },
          { title: 'Logo (SVG, PNG, WebP)', value: 'logo' },
          { title: 'Document / PDF', value: 'document' },
          { title: 'Other File', value: 'other' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image Asset',
      type: 'image',
      description: 'Upload an image, SVG, logo, icon, or GIF. Hotspot and crop available.',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) =>
        document?.mediaType === 'document' ||
        (document?.mediaType === 'video' && Boolean(document?.file)),
    }),
    defineField({
      name: 'file',
      title: 'File / Video / Document Asset',
      type: 'file',
      description: 'Upload a video file (MP4, WebM, MOV) or document (PDF, Word, zip, etc.)',
      options: {
        storeOriginalFilename: true,
      },
      hidden: ({ document }) =>
        document?.mediaType === 'image' ||
        document?.mediaType === 'icon' ||
        document?.mediaType === 'logo',
    }),
    defineField({
      name: 'formatInfo',
      title: 'Auto-Detected Format & Specs',
      type: 'string',
      readOnly: true,
      components: {
        input: FormatDetectorCard,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for accessibility and SEO. Describes what the image or logo depicts.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Description',
      type: 'text',
      rows: 2,
      description: 'Optional internal notes, caption, or description of this asset',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Organize assets by purpose or project section',
      options: {
        list: [
          { title: 'Branding & Identity', value: 'branding' },
          { title: 'Marketing & Website', value: 'marketing' },
          { title: 'Case Studies & Portfolio', value: 'case-studies' },
          { title: 'Services & Tech', value: 'services' },
          { title: 'Client Logos', value: 'client-logos' },
          { title: 'Team & Culture', value: 'team' },
          { title: 'General Assets', value: 'general' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add keywords to easily search and find this media item',
    }),
    defineField({
      name: 'posterImage',
      title: 'Video Poster / Thumbnail Image',
      type: 'image',
      description: 'Cover image shown before a video starts playing',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.mediaType !== 'video',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (Optional)',
      type: 'url',
      description: 'Optional external source (e.g. YouTube, Vimeo, external CDN, or download link)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mediaType: 'mediaType',
      category: 'category',
      image: 'image',
      posterImage: 'posterImage',
      alt: 'alt',
      imageRef: 'image.asset._ref',
      fileRef: 'file.asset._ref',
    },
    prepare({ title, mediaType, category, image, posterImage, alt, imageRef, fileRef }) {
      const detected = detectAssetFormat(imageRef || fileRef)
      const typeBadge = detected ? detected.badge : `[${String(mediaType || 'ASSET').toUpperCase()}]`
      const catLabel = category ? ` • ${category}` : ''
      return {
        title: title || alt || (detected ? detected.formatLabel : 'Untitled Media'),
        subtitle: `${typeBadge}${catLabel}`,
        media: image || posterImage,
      }
    },
  },
})
