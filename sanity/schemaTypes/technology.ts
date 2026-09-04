import { defineType, defineField } from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Web Application, Mobile Application, Full Stack, Big Data, Machine Learning, Cloud, Security, Database, DevOps',
      options: {
        list: [
          { title: 'Web Application', value: 'Web Application' },
          { title: 'Mobile Application', value: 'Mobile Application' },
          { title: 'Full Stack Development', value: 'Full Stack Development' },
          { title: 'Big Data & Analytics', value: 'Big Data & Analytics' },
          { title: 'Machine Learning & AI', value: 'Machine Learning & AI' },
          { title: 'Cloud & Infrastructure', value: 'Cloud & Infrastructure' },
          { title: 'Enterprise Security', value: 'Enterprise Security' },
          { title: 'Databases & Storage', value: 'Databases & Storage' },
          { title: 'DevOps & CI/CD', value: 'DevOps & CI/CD' },
          { title: 'CMS & E-Commerce', value: 'CMS & E-Commerce' },
          { title: 'Other Technologies', value: 'Other Technologies' },
        ],
      },
    }),
    defineField({
      name: 'categoryRef',
      title: 'Technology Category Reference',
      type: 'reference',
      to: [{ type: 'technologyCategory' }],
    }),
    defineField({
      name: 'icon',
      title: 'Technology Icon / Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Short Capability Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'website',
      title: 'Official Website / Documentation URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Technologies Page',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
  orderings: [
    { title: 'Order, Asc', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name, A-Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
})
