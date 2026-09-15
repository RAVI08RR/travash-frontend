import { defineType, defineField, defineArrayMember } from 'sanity'
import { detectAssetFormat } from '../lib/formatDetector'
import { FormatDetectorCard } from '../components/FormatDetectorCard'

export const trustedBySection = defineType({
  name: 'trustedBySection',
  title: 'Trusted By Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Trusted by Startups, Enterprises & Public Sector',
      description: 'Heading displayed above the client logos marquee',
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos (Bulk Upload Support)',
      description:
        'Upload multiple client/partner logos. You can select or drag & drop multiple image files (SVG, PNG, WebP, JPG) simultaneously. Format and dimensions are automatically detected.',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
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
              title: 'Client / Company Name (Alt Text)',
              type: 'string',
              description: 'Used for accessibility and image alt tag',
            }),
            defineField({
              name: 'websiteUrl',
              title: 'Company Website URL (Optional)',
              type: 'url',
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
                title: title || (detected ? detected.formatLabel : 'Client Logo'),
                subtitle: detected ? detected.badge : '[Logo]',
                media,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      logos: 'logos',
    },
    prepare({ title, logos }) {
      const count = Array.isArray(logos) ? logos.length : 0
      return {
        title: title || 'Trusted By Section',
        subtitle: `${count} logo${count === 1 ? '' : 's'} configured`,
      }
    },
  },
})
