import { defineType, defineField } from 'sanity'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 300+)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
      initialValue: [
        { value: '300+', label: 'Projects Delivered' },
        { value: '50+', label: 'Expert Engineers & AI Specialists' },
        { value: '20+', label: 'Years of Leadership Experience' },
        { value: '8+', label: 'Industry Verticals Served — Global Clients Across US, UK & MEA' },
      ],
    }),
  ],
})
