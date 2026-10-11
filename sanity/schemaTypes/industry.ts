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
      description: 'e.g. "Banking & Financial Services", "Government & Public Sector"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Industry Name (Fallback)',
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
      name: 'shortTitle',
      title: 'Short Badge Title',
      type: 'string',
      description: 'Short label used for pills and navigation (e.g. "FinTech", "GovTech")',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow / Badge Text',
      type: 'string',
      description: 'e.g. "FINANCIAL TECHNOLOGY & BANKING"',
    }),
    defineField({
      name: 'tagline',
      title: 'Hero Subtitle / Tagline',
      type: 'text',
      rows: 3,
      description: 'High-impact value proposition displayed below the title',
    }),
    defineField({
      name: 'description',
      title: 'Brief Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Showcase Image / Card',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'icon',
      title: 'Industry Icon',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'overview',
      title: 'Strategic Overview Narrative',
      type: 'text',
      rows: 4,
      description: 'Detailed vertical analysis narrative explaining Travash domain architecture.',
    }),

    // ── Case Studies Selection for Industry Detail Page ──────────────────────────
    defineField({
      name: 'relatedCaseStudies',
      title: 'Selected Case Studies',
      type: 'array',
      description:
        'Select existing case studies to showcase on this industry detail page. You can drag to reorder. If left empty, case studies matching this industry will be displayed automatically.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }, { type: 'portfolioProject' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'caseStudyHighlight',
      title: 'Featured Case Study Highlight (Banner)',
      type: 'object',
      description: 'Featured outcome showcase card displayed on this industry page.',
      fields: [
        defineField({
          name: 'selectedCaseStudy',
          title: 'Select Case Study (Optional Auto-Fill)',
          type: 'reference',
          to: [{ type: 'caseStudy' }, { type: 'portfolioProject' }],
          description: 'Optionally link a specific case study to auto-fill details',
        }),
        defineField({ name: 'title', title: 'Highlight Headline / Outcome', type: 'string' }),
        defineField({ name: 'client', title: 'Client / Organization', type: 'string' }),
        defineField({ name: 'description', title: 'Narrative Description', type: 'text', rows: 3 }),
        defineField({ name: 'metric', title: 'Primary Metric (e.g. "12M+", "99.7%")', type: 'string' }),
        defineField({ name: 'metricLabel', title: 'Metric Label (e.g. "Monthly Txns", "Accuracy")', type: 'string' }),
        defineField({ name: 'href', title: 'Custom Link URL (defaults to case study page)', type: 'string' }),
      ],
    }),

    // ── Metrics Ribbon ──────────────────────────────────────────────────────────
    defineField({
      name: 'metrics',
      title: 'Key Industry Metrics',
      type: 'array',
      description: '4 high-impact numerical statistics for the metrics ribbon',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. "12M+", "<80ms")', type: 'string' }),
            defineField({ name: 'label', title: 'Metric Label', type: 'string' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),

    // ── Challenges & Solutions ──────────────────────────────────────────────────
    defineField({
      name: 'challenges',
      title: 'Key Industry Challenges We Solve',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Challenge Title', type: 'string' }),
            defineField({ name: 'problem', title: 'Problem Narrative', type: 'text', rows: 3 }),
            defineField({ name: 'solution', title: 'Our Engineering Solution', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'problem' },
          },
        },
      ],
    }),

    // ── Specialized Capabilities ────────────────────────────────────────────────
    defineField({
      name: 'capabilities',
      title: 'Specialized Technical Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Capability Title', type: 'string' }),
            defineField({ name: 'description', title: 'Capability Description', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),

    // ── Technologies & Compliance Badges ────────────────────────────────────────
    defineField({
      name: 'technologies',
      title: 'Core Technologies & Frameworks',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'compliance',
      title: 'Regulatory & Security Compliance Badges',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ── SEO & Social Share ──────────────────────────────────────────────────────
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
      title: 'title',
      nameTitle: 'name',
      subtitle: 'tagline',
      descSubtitle: 'description',
      media: 'heroImage',
      iconMedia: 'icon',
    },
    prepare({ title, nameTitle, subtitle, descSubtitle, media, iconMedia }) {
      return {
        title: title || nameTitle || 'Untitled Industry',
        subtitle: subtitle || descSubtitle || 'Industry Solution',
        media: media || iconMedia,
      }
    },
  },
})
