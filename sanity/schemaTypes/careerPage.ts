import { defineType, defineField } from 'sanity'

export const careerPage = defineType({
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Badge',
          type: 'string',
          initialValue: 'CAREERS AT TRAVASH',
        }),
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'Travash is Built for Innovators.',
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Travash is more than just a software company—it is a place where passionate developers, designers, and technologists come together to build innovative digital solutions. Work on real-world engineering problems with collaborative teams and limitless room for growth.',
        }),
        defineField({
          name: 'highlights',
          title: 'Key Highlights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Highlight Text', type: 'string' }),
                defineField({
                  name: 'icon',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Trophy / Award', value: 'Trophy' },
                      { title: 'Users / Culture', value: 'Users' },
                      { title: 'Briefcase / Positions', value: 'Briefcase' },
                      { title: 'Sparkles / Innovation', value: 'Sparkles' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'primaryCTA',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Button Text', type: 'string', initialValue: 'View Open Positions' }),
            defineField({ name: 'href', title: 'Button Link', type: 'string', initialValue: '#open-positions' }),
          ],
        }),
        defineField({
          name: 'secondaryCTA',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Button Text', type: 'string', initialValue: 'Life at Travash' }),
            defineField({ name: 'href', title: 'Button Link', type: 'string', initialValue: '#life-at-travash' }),
          ],
        }),
      ],
    }),

    // Perks & Benefits Section
    defineField({
      name: 'benefitsSection',
      title: 'Perks & Benefits (Why Join Travash)',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Badge',
          type: 'string',
          initialValue: 'WHY JOIN TRAVASH',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Perks Built Around People',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
          initialValue:
            'We provide the resources, freedom, and support you need to do your best work while enjoying life outside of it.',
        }),
        defineField({
          name: 'benefits',
          title: 'Benefits & Perks List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Perk Title',
                  type: 'string',
                }),
                defineField({
                  name: 'desc',
                  title: 'Perk Description',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Heart (Work-Life / Wellness)', value: 'Heart' },
                      { title: 'BookOpen (Learning & Upskilling)', value: 'BookOpen' },
                      { title: 'Rocket (High-Impact Engineering)', value: 'Rocket' },
                      { title: 'Users (Collaborative Squads)', value: 'Users' },
                      { title: 'Laptop (Modern Hardware & Tooling)', value: 'Laptop' },
                      { title: 'ShieldCheck (Health & Security)', value: 'ShieldCheck' },
                      { title: 'Sparkles (Innovation)', value: 'Sparkles' },
                      { title: 'Trophy (Excellence)', value: 'Trophy' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Open Positions Header Section
    defineField({
      name: 'jobsSection',
      title: 'Open Positions Header Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Badge',
          type: 'string',
          initialValue: 'JOIN OUR TEAM',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Explore Open Positions',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Find the role where you can make a tangible mark on enterprise software and scale your engineering capabilities.',
        }),
      ],
    }),

    // SEO Settings
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          initialValue: 'Careers — Engineering Opportunities & Culture | Travash',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Join Travash Software Solutions. Explore career opportunities in frontend, backend, Java, AI, and full-stack engineering in a high-growth environment.',
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph / Social Share Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Career Page',
        subtitle: 'Career Page Configuration & Content',
      }
    },
  },
})
