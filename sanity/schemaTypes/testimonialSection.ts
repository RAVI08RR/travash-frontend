import { defineType, defineField } from 'sanity'

export const testimonialSection = defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Trusted by Businesses Worldwide',
    }),
    defineField({
      name: 'selectedTestimonials',
      title: 'Select Testimonials (From Library)',
      type: 'array',
      description:
        'Select existing testimonials from the shared Testimonials Library. Drag to reorder. If selected, these will be used on the Home Page.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials (Custom or Library Reference)',
      type: 'array',
      description:
        'Select testimonials from the library or create custom inline testimonials.',
      of: [
        {
          type: 'reference',
          title: 'Select Testimonial from Library',
          to: [{ type: 'testimonial' }],
        },
        {
          type: 'object',
          title: 'Custom Testimonial (Inline)',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'authorName', title: 'Author Name', type: 'string' },
            { name: 'authorTitle', title: 'Author Title', type: 'string' },
            { name: 'authorCompany', title: 'Author Company', type: 'string' },
            { name: 'authorPhoto', title: 'Author Photo', type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'authorName', subtitle: 'authorCompany', media: 'authorPhoto' },
          },
        },
      ],
    }),
  ],
})
