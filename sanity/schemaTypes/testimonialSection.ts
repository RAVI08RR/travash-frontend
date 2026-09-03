import { defineType, defineField } from 'sanity'

export const testimonialSection = defineType({
  name: 'testimonialSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Trusted by Businesses Worldwide',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'authorName', title: 'Author Name', type: 'string' },
            { name: 'authorTitle', title: 'Author Title', type: 'string' },
            { name: 'authorCompany', title: 'Author Company', type: 'string' },
            { name: 'authorPhoto', title: 'Author Photo', type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'authorName', subtitle: 'authorCompany' },
          },
        },
      ],
    }),
  ],
})
