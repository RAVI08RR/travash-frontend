import { defineType, defineField, defineArrayMember } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small label above the heading',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'AI-Assisted Software &',
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight (accent color)',
      type: 'string',
      initialValue: 'Product Development',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
      initialValue: 'Company',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Book Free Consultation' },
        { name: 'href', title: 'URL', type: 'string' },
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'View Our Portfolio' },
        { name: 'href', title: 'URL', type: 'string' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'trustedByLabel',
      title: 'Trusted By Label',
      type: 'string',
      initialValue: 'Trusted by Startups, Enterprises & Public Sector',
    }),
    defineField({
      name: 'trustedByLogos',
      title: 'Trusted By Logos (Bulk Upload Support)',
      description: 'Drag & drop multiple logo images here to bulk upload',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Client / Company Name',
              type: 'string',
            }),
            defineField({
              name: 'websiteUrl',
              title: 'Website URL (Optional)',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'asset',
            },
            prepare({ title, media }) {
              return {
                title: title || 'Client Logo',
                media,
              }
            },
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'logoItem',
          title: 'Logo Item (Legacy Object)',
          fields: [
            { name: 'image', title: 'Logo Image', type: 'image', options: { hotspot: true } },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        }),
      ],
    }),
  ],
})
