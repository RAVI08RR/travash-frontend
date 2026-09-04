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
      description: 'e.g. Frontend, Backend, AI & ML, Database, Cloud & DevOps',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'AI & ML', value: 'AI & ML' },
          { title: 'Mobile', value: 'Mobile' },
          { title: 'Database & Cloud', value: 'Database & Cloud' },
          { title: 'DevOps & Tooling', value: 'DevOps & Tooling' },
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Technology Icon / Logo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})
