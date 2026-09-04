import { defineType, defineField } from 'sanity'

export const portfolioProject = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'wordpressId',
      title: 'WordPress ID',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Project / Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'originalWordPressUrl',
      title: 'Original WordPress URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'reference',
      to: [{ type: 'industry' }],
    }),
    defineField({
      name: 'industryName',
      title: 'Industry Name (Fallback String)',
      type: 'string',
    }),
    defineField({
      name: 'serviceType',
      title: 'Primary Service Type',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'portfolioService' }] }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack (Tags)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'platform',
      title: 'Platform / Architecture',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year / Timeline',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Client Location / Region',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured / Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Project Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Detailed Case Study Content (Portable Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Structured Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'content', title: 'Content', type: 'text' }),
            defineField({ name: 'items', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Key Features / Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Business & Technical Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Challenge Title', type: 'string' }),
            defineField({ name: 'description', title: 'Challenge Description', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'Engineering Solutions Provided',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Solution Title', type: 'string' }),
            defineField({ name: 'description', title: 'Solution Description', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Quantified Results & Impact',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Result Title', type: 'string' }),
            defineField({ name: 'description', title: 'Result Description', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Quantified Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Metric Value (e.g. 70%, 1.9M+)', type: 'string' }),
            defineField({ name: 'label', title: 'Metric Label', type: 'string' }),
            defineField({ name: 'description', title: 'Short Description', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'name', title: 'Client Name', type: 'string' }),
        defineField({ name: 'designation', title: 'Designation / Role', type: 'string' }),
        defineField({ name: 'company', title: 'Company Name', type: 'string' }),
        defineField({ name: 'image', title: 'Client Photo', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' }),
        defineField({ name: 'ogTitle', title: 'Open Graph Title', type: 'string' }),
        defineField({ name: 'ogDescription', title: 'Open Graph Description', type: 'text' }),
        defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
        defineField({ name: 'noIndex', title: 'Hide from search engines (noindex)', type: 'boolean', initialValue: false }),
      ],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
        ],
      },
      initialValue: 'published',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'featuredImage',
    },
  },
  orderings: [
    { title: 'Display Order, Asc', name: 'orderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] },
    { title: 'Published Date, Desc', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
