import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button URL',
      type: 'string',
      initialValue: '/contact',
    }),
    // Footer fields
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
    defineField({
      name: 'menuLinks',
      title: 'Footer Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'serviceLinks',
      title: 'Footer Service Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'offices',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Country Label', type: 'string' },
            { name: 'address', title: 'Address', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Travash. All rights reserved.',
    }),
    defineField({
      name: 'companyStats',
      title: 'Global Company Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 250+)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'globalCTA',
      title: 'Global CTA Banner',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'primaryLabel', title: 'Primary Button Label', type: 'string' },
        { name: 'primaryHref', title: 'Primary Button URL', type: 'string' },
        { name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' },
        { name: 'secondaryHref', title: 'Secondary Button URL', type: 'string' },
      ],
    }),
  ],
})
