import { defineType, defineField } from 'sanity'

export const capabilitiesSection = defineType({
  name: 'capabilitiesSection',
  title: 'Capabilities Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Capabilities That Move Business Forward',
    }),
    defineField({
      name: 'cards',
      title: 'Capability Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Image', type: 'image', options: { hotspot: true } },
            { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string', description: 'Fallback: use a lucide icon name' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
            { name: 'ctaHref', title: 'CTA URL', type: 'string' },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
  ],
})
