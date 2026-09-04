import { defineType, defineField } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Open Positions (Careers)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Department / Category',
      type: 'string',
      options: {
        list: [
          { title: 'Software Engineering', value: 'Software Engineering' },
          { title: 'Frontend Development', value: 'Frontend Development' },
          { title: 'Backend Development', value: 'Backend Development' },
          { title: 'Mobile Development', value: 'Mobile Development' },
          { title: 'Quality Assurance & Testing', value: 'Quality Assurance & Testing' },
          { title: 'Cloud & DevOps', value: 'Cloud & DevOps' },
          { title: 'AI & Data Engineering', value: 'AI & Data Engineering' },
          { title: 'UI/UX Design', value: 'UI/UX Design' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      initialValue: 'Full-time',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location / Work Mode',
      type: 'string',
      initialValue: 'Hyderabad, India (Hybrid)',
    }),
    defineField({
      name: 'experience',
      title: 'Required Experience',
      type: 'string',
      placeholder: 'e.g. 3-5 Years',
    }),
    defineField({
      name: 'salary',
      title: 'Salary / Compensation',
      type: 'string',
      placeholder: 'e.g. Competitive / As per industry standards',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'overview',
      title: 'Role Overview',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Qualifications & Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'preferredSkills',
      title: 'Preferred Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Perks & Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'active',
      title: 'Active / Accepting Applications',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      active: 'active',
    },
    prepare({ title, subtitle, active }) {
      return {
        title: title || 'Untitled Position',
        subtitle: `${subtitle || 'General'} — ${active ? '🟢 Active' : '🔴 Closed'}`,
      }
    },
  },
  orderings: [
    { title: 'Order, Asc', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Published, Newest First', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
