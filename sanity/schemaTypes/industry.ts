import { defineType, defineField } from 'sanity'

export const industry = defineType({
  name: 'industry',
  title: 'Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Industry Title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Industry Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title || doc.name,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Brief Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Industry Icon',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Social Share',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Social Share (OG) Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL Override', type: 'url' }),
        defineField({ name: 'noIndex', title: 'Prevent Search Indexing (noindex)', type: 'boolean', initialValue: false }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'icon',
    },
  },
})
