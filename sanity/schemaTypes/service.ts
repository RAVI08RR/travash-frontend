import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
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
      name: 'menuTitle',
      title: 'Short Menu Title',
      type: 'string',
      description: 'Used for navigation menus (e.g. "Data & Analytics")',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
    }),

    // 1. Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow / Badge Text', type: 'string' }),
        defineField({ name: 'title', title: 'Hero Headline', type: 'string' }),
        defineField({ name: 'description', title: 'Hero Supporting Description', type: 'text', rows: 4 }),
        defineField({
          name: 'primaryCTA',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link (e.g. #contact)', type: 'string' }),
          ],
        }),
        defineField({
          name: 'secondaryCTA',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link (e.g. #case-studies)', type: 'string' }),
          ],
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Showcase Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'heroImageAlt',
          title: 'Hero Image Alt Text',
          type: 'string',
        }),
        defineField({
          name: 'highlights',
          title: 'Quick Highlights / Pills',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // 2. Business Problem Section
    defineField({
      name: 'problemSection',
      title: 'Business Problem Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'headline', title: 'Problem Headline', type: 'string' }),
        defineField({ name: 'description', title: 'Narrative Description', type: 'text', rows: 4 }),
        defineField({
          name: 'painPoints',
          title: 'Key Pain Points / Bottlenecks',
          type: 'array',
          of: [
            defineField({
              name: 'painPoint',
              title: 'Pain Point',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
              ],
            }),
          ],
        }),
      ],
    }),

    // 3. How Travash Solves It (Solution Overview)
    defineField({
      name: 'solutionOverview',
      title: 'How Travash Solves It',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Section Subtitle / Description', type: 'text', rows: 3 }),
        defineField({
          name: 'benefits',
          title: 'Strategic Benefits',
          type: 'array',
          of: [
            defineField({
              name: 'benefit',
              title: 'Benefit Item',
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Icon Identifier (e.g. database, users, eye)', type: 'string' }),
                defineField({ name: 'title', title: 'Benefit Title', type: 'string' }),
                defineField({ name: 'description', title: 'Benefit Description', type: 'text', rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'cta',
          title: 'Consultation CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link (e.g. #contact)', type: 'string' }),
          ],
        }),
      ],
    }),

    // 4. Detailed Service Capabilities ("What We Build")
    defineField({
      name: 'capabilities',
      title: 'Detailed Service Capabilities',
      type: 'array',
      of: [
        defineField({
          name: 'capability',
          title: 'Capability Item',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Service / Capability Name', type: 'string' }),
            defineField({ name: 'shortDescription', title: 'Short Summary', type: 'text', rows: 2 }),
            defineField({ name: 'problem', title: 'The Problem', type: 'text', rows: 3 }),
            defineField({ name: 'solution', title: 'The Solution', type: 'text', rows: 3 }),
            defineField({ name: 'businessImpact', title: 'The Business Impact', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon (e.g. server, cpu, cloud)', type: 'string' }),
            defineField({
              name: 'technologies',
              title: 'Associated Technologies',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'optionalCTA',
              title: 'Optional Action Link',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // 5. Engineering / Delivery Process
    defineField({
      name: 'process',
      title: 'Delivery & Engineering Process',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Process Description', type: 'text', rows: 3 }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            defineField({
              name: 'step',
              title: 'Step',
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Step Number (e.g. "01")', type: 'string' }),
                defineField({ name: 'title', title: 'Step Title', type: 'string' }),
                defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 3 }),
                defineField({ name: 'icon', title: 'Optional Icon Identifier', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // 6. Relevant Case Studies (References to existing caseStudy documents)
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      description: 'Select existing case studies that demonstrate this service in production',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }],
        },
      ],
    }),

    // 7. Flexible Engagement Models
    defineField({
      name: 'engagementModels',
      title: 'Flexible Engagement Models',
      type: 'array',
      of: [
        defineField({
          name: 'model',
          title: 'Engagement Model',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Model Name (e.g. Dedicated Team)', type: 'string' }),
            defineField({ name: 'description', title: 'Model Details', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon Identifier', type: 'string' }),
            defineField({ name: 'badge', title: 'Badge / Tag (e.g. Most Popular)', type: 'string' }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Link', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // 8. Technology Ecosystem
    defineField({
      name: 'technologyStack',
      title: 'Technology Ecosystem',
      type: 'array',
      of: [
        defineField({
          name: 'techGroup',
          title: 'Technology Category',
          type: 'object',
          fields: [
            defineField({ name: 'category', title: 'Category Name (e.g. Data Engineering & Streaming)', type: 'string' }),
            defineField({
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'description', title: 'Category Role / Description', type: 'string' }),
          ],
        }),
      ],
    }),

    // 9. Why Travash / Trust Section
    defineField({
      name: 'trustSection',
      title: 'Why Travash / Trust Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Narrative', type: 'text', rows: 4 }),
        defineField({
          name: 'stats',
          title: 'Authority Statistics',
          type: 'array',
          of: [
            defineField({
              name: 'stat',
              title: 'Stat',
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Value (e.g. "2005")', type: 'string' }),
                defineField({ name: 'label', title: 'Label (e.g. "Founded")', type: 'string' }),
                defineField({ name: 'description', title: 'Detail', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'trustPoints',
          title: 'Trust Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // 10. Client Testimonial
    defineField({
      name: 'testimonial',
      title: 'Featured Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote Text', type: 'text', rows: 4 }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role', type: 'string' }),
        defineField({ name: 'company', title: 'Company / Organization', type: 'string' }),
        defineField({ name: 'badge', title: 'Verification Badge (e.g. National Coordinator)', type: 'string' }),
        defineField({ name: 'image', title: 'Author Photo / Seal', type: 'image' }),
      ],
    }),

    // 11. Frequently Asked Questions
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        defineField({
          name: 'faq',
          title: 'FAQ Item',
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
          ],
        }),
      ],
    }),

    // 12. Final Call to Action
    defineField({
      name: 'finalCTA',
      title: 'Final Call to Action',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Headline', type: 'string' }),
        defineField({ name: 'description', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({
          name: 'primaryCTA',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link (e.g. #contact)', type: 'string' }),
          ],
        }),
        defineField({
          name: 'secondaryCTA',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
          ],
        }),
      ],
    }),

    // 13. SEO
    defineField({
      name: 'seo',
      title: 'SEO & Social Share',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Social Share (OG) Image', type: 'image' }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL Override', type: 'url' }),
        defineField({ name: 'noIndex', title: 'Prevent Search Indexing (noindex)', type: 'boolean' }),
      ],
    }),
  ],
})
