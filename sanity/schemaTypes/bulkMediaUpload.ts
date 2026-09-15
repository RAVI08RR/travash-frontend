import { defineType, defineField } from 'sanity'
import { detectAssetFormat } from '../lib/formatDetector'
import { FormatDetectorCard } from '../components/FormatDetectorCard'

export const bulkMediaUpload = defineType({
  name: 'bulkMediaUpload',
  title: 'Bulk Image Upload',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Batch Title / Collection Name',
      type: 'string',
      initialValue: 'Bulk Media Upload Batch',
      description:
        'Give a descriptive name for this batch (e.g. "Client Logos", "Homepage Banners", "Product Icons", "Team Photos")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Batch Category',
      type: 'string',
      description: 'Categorize these assets for organization across the website',
      options: {
        list: [
          { title: 'Branding & Identity', value: 'branding' },
          { title: 'Marketing & Website', value: 'marketing' },
          { title: 'Case Studies & Portfolio', value: 'case-studies' },
          { title: 'Services & Technologies', value: 'services' },
          { title: 'Client & Partner Logos', value: 'client-logos' },
          { title: 'General Assets', value: 'general' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'assets',
      title: 'Bulk Upload Image Grid (Drag & drop multiple files at once)',
      description:
        'Select multiple files or drag & drop dozens of images simultaneously into this area. Image format (SVG, PNG, WebP, JPG, GIF, AVIF) and dimensions (width × height) will be auto-detected for each item.',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
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
              title: 'Alt Text / Title',
              type: 'string',
              description: 'Optional accessible name or description for this asset',
            }),
            defineField({
              name: 'tag',
              title: 'Tag (Optional)',
              type: 'string',
              description: 'Optional tag for filtering or searching',
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'asset',
              imageRef: 'asset._ref',
            },
            prepare({ title, media, imageRef }) {
              const detected = detectAssetFormat(imageRef)
              return {
                title: title || (detected ? detected.formatLabel : 'Uploaded Image'),
                subtitle: detected ? detected.badge : '[Image]',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      assets: 'assets',
    },
    prepare({ title, category, assets }) {
      const count = Array.isArray(assets) ? assets.length : 0
      return {
        title: title || 'Bulk Upload Batch',
        subtitle: `${count} asset${count === 1 ? '' : 's'} • Category: ${category || 'general'}`,
      }
    },
  },
})
