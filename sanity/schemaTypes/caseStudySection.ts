import { defineType, defineField } from 'sanity'

export const caseStudySection = defineType({
  name: 'caseStudySection',
  title: 'Case Study Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Built on Results, Not Promises',
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'projectName', title: 'Project Name', type: 'string' },
            { name: 'clientType', title: 'Client Type', type: 'string' },
            { name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } },
            {
              name: 'outcomes',
              title: 'Outcomes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'value', title: 'Value (e.g. 1.9M+)', type: 'string' },
                    { name: 'label', title: 'Label', type: 'string' },
                  ],
                },
              ],
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
            },
            { name: 'clientName', title: 'Client Name', type: 'string' },
            { name: 'clientLogo', title: 'Client Logo', type: 'image', options: { hotspot: true } },
            { name: 'ctaLabel', title: 'CTA Label', type: 'string', initialValue: 'View Case Study' },
            { name: 'ctaHref', title: 'CTA URL', type: 'string' },
          ],
          preview: {
            select: { title: 'projectName', subtitle: 'clientType' },
          },
        },
      ],
    }),
  ],
})
