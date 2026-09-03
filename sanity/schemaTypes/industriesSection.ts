import { defineType, defineField } from 'sanity'

export const industriesSection = defineType({
  name: 'industriesSection',
  title: 'Industries Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Industries We Serve',
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Industry Name', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'href', title: 'URL', type: 'string' },
          ],
          preview: {
            select: { title: 'name', media: 'image' },
          },
        },
      ],
    }),
  ],
})
