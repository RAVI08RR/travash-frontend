import { defineType, defineField } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Studies (Detail Pages)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Heading / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue:
        'AI-Powered Passport Verification at Scale: 1.96 Million Applications Processed',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Identifier)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      initialValue: 'CASE STUDY',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'Enterprise AI / Public Sector',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      initialValue: 'Government / Public Sector',
    }),
    defineField({
      name: 'client',
      title: 'Client / Partner',
      type: 'string',
      initialValue: 'Telangana State Police',
    }),
    defineField({
      name: 'location',
      title: 'Location / Region',
      type: 'string',
      initialValue: 'India',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Introductory Description',
      type: 'text',
      rows: 4,
      initialValue:
        'Satyaapan is a web-based passport verification platform developed by Travash to help Telangana State Police automate high-volume identity screening, identify potential anomalies and route applications requiring further investigation to authorized officials.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image / Project Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'projectMeta',
      title: 'Project Metadata Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics Grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Metric Value (e.g. 1.96 Million)', type: 'string' },
            { name: 'label', title: 'Metric Label', type: 'string' },
            { name: 'description', title: 'Supporting Description', type: 'string' },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Executive Summary' },
        { name: 'subtitle', title: 'Subtitle / Highlight', type: 'string' },
        {
          name: 'paragraphs',
          title: 'Summary Paragraphs',
          type: 'array',
          of: [{ type: 'text', rows: 3 }],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The Challenge' },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Officials needed to identify high-risk cases while processing surging verification requests.',
        },
        {
          name: 'content',
          title: 'Introduction Text',
          type: 'text',
          rows: 3,
        },
        {
          name: 'points',
          title: 'Challenge Problem Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'featureImage',
      title: 'Large Project Visual / Feature Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'complexity',
      title: 'The Complexity Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The Complexity' },
        {
          name: 'intro',
          title: 'Intro Narrative',
          type: 'text',
          rows: 3,
          initialValue:
            'Satyaapan needed to operate within a sensitive public-safety workflow where application volume, identity verification and appropriate escalation were all critical.',
        },
        {
          name: 'items',
          title: 'Complexity Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Card Title', type: 'string' },
                { name: 'description', title: 'Card Description', type: 'text', rows: 3 },
                { name: 'icon', title: 'Icon Identifier', type: 'string' },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'approach',
      title: 'Travash Approach Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Travash Approach' },
        {
          name: 'intro',
          title: 'Approach Philosophy',
          type: 'string',
          initialValue: 'Automate Routine Screening. Surface Exceptions for Investigation.',
        },
        {
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' },
                { name: 'title', title: 'Step Title', type: 'string' },
                { name: 'description', title: 'Step Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'The Solution Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The Solution' },
        {
          name: 'intro',
          title: 'Solution Tagline',
          type: 'string',
          initialValue: 'Satyaapan – An Intelligent Digital Verification Workflow',
        },
        {
          name: 'items',
          title: 'Solution Capability Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Capability Title', type: 'string' },
                { name: 'description', title: 'Capability Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'solutionArchitecture',
      title: 'Solution Architecture Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Solution Architecture' },
        {
          name: 'intro',
          title: 'Architecture Overview',
          type: 'text',
          rows: 3,
          initialValue:
            'A decoupled, secure multi-tier architecture connecting automated ingestion pipelines with real-time biometric and government registry verification.',
        },
        { name: 'image', title: 'Architecture Diagram / Visual', type: 'image', options: { hotspot: true } },
        { name: 'caption', title: 'Diagram Caption', type: 'string' },
      ],
    }),
    defineField({
      name: 'technologyStack',
      title: 'Enterprise Technology Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category (e.g. Backend / Frameworks)', type: 'string' },
            {
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [{ type: 'string' }],
            },
            { name: 'description', title: 'Usage Context / Description', type: 'string' },
          ],
          preview: {
            select: { title: 'category' },
          },
        },
      ],
    }),
    defineField({
      name: 'impact',
      title: 'The Impact Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The Impact' },
        {
          name: 'subtitle',
          title: 'Impact Headline',
          type: 'string',
          initialValue: 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow',
        },
        {
          name: 'content',
          title: 'Impact Narrative',
          type: 'text',
          rows: 4,
        },
        {
          name: 'outcomes',
          title: 'Measurable Outcomes / Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before vs. After Comparison',
      type: 'object',
      fields: [
        { name: 'title', title: 'Comparison Title', type: 'string', initialValue: 'Before vs. After' },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Transformation from manual / fragmented processes to AI-assisted digital verification.',
        },
        { name: 'beforeTitle', title: 'Before Column Title', type: 'string', initialValue: 'BEFORE SATYAPAAN' },
        {
          name: 'before',
          title: 'Before Points (Friction / Limitations)',
          type: 'array',
          of: [{ type: 'string' }],
        },
        { name: 'afterTitle', title: 'After Column Title', type: 'string', initialValue: 'AFTER SATYAPAAN' },
        {
          name: 'after',
          title: 'After Points (Modernization / Benefits)',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Perspective / Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Client Quote', type: 'text', rows: 4 },
        { name: 'author', title: 'Author Name', type: 'string' },
        { name: 'role', title: 'Author Role / Title', type: 'string' },
        { name: 'company', title: 'Organization / Department', type: 'string' },
        { name: 'image', title: 'Client / Author Photo', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'whyItMatters',
      title: 'Why This Matters Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Why This Matters' },
        {
          name: 'subtitle',
          title: 'Challenge Question',
          type: 'string',
          initialValue: 'Does Your Organization Face a Similar Challenge?',
        },
        {
          name: 'items',
          title: 'Relevant Challenge Scenarios',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'nextStep',
      title: 'The Next Step Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', initialValue: 'The Next Step' },
        {
          name: 'content',
          title: 'Next Step Narrative',
          type: 'text',
          rows: 4,
          initialValue:
            'The objective is not simply to introduce AI. Travash combines custom software development, web application development, AI-assisted automation and system integration to modernize high-volume operational workflows. Start with one clearly defined process or use case and determine whether the right next step is an assessment, POC or implementation.',
        },
        {
          name: 'primaryCTA',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Discuss a Public Safety Technology Initiative' },
            { name: 'href', title: 'Link', type: 'string', initialValue: '#contact' },
          ],
        },
        {
          name: 'secondaryCTA',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Discuss an AI / Automation POC' },
            { name: 'href', title: 'Link', type: 'string', initialValue: '#contact' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      description: 'Select services related to this case study (e.g. AI & Data Engineering, Data & Analytics)',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'Open Graph Image', type: 'image' },
      ],
    }),
    // Portfolio Listing Fields
    defineField({
      name: 'portfolioVisible',
      title: 'Show in Portfolio Page',
      type: 'boolean',
      description: 'Turn on to display this project on the /portfolio listing page',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Pin this project to the Featured section on the Portfolio page',
      initialValue: false,
    }),
    defineField({
      name: 'portfolioOrder',
      title: 'Portfolio Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1, 2, 3...)',
      initialValue: 100,
    }),
    defineField({
      name: 'portfolioTitle',
      title: 'Portfolio Card Title',
      type: 'string',
      description: 'Optional shorter title for the portfolio card (falls back to main title)',
    }),
    defineField({
      name: 'cardDescription',
      title: 'Portfolio Card Description',
      type: 'text',
      rows: 3,
      description: 'Brief 1-2 sentence description for the portfolio card (falls back to shortDescription)',
    }),
    defineField({
      name: 'cardImage',
      title: 'Portfolio Card Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Specific thumbnail image for the portfolio card (falls back to featureImage/heroImage)',
    }),
    defineField({
      name: 'cardImageAlt',
      title: 'Card Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type / Service Category',
      type: 'string',
      description: 'Used for primary filter tabs on the Portfolio page',
      options: {
        list: [
          { title: 'Web Application', value: 'Web Application' },
          { title: 'Mobile Application', value: 'Mobile Application' },
          { title: 'Website Development', value: 'Website Development' },
          { title: 'AI / Artificial Intelligence', value: 'AI / Artificial Intelligence' },
          { title: 'Custom Software', value: 'Custom Software' },
          { title: 'E-Commerce', value: 'E-Commerce' },
          { title: 'Enterprise Platform', value: 'Enterprise Platform' },
        ],
      },
      initialValue: 'Web Application',
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      description: 'Select matching industries for secondary filter matching',
      of: [
        {
          type: 'reference',
          to: [{ type: 'industry' }],
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      description: 'Technologies used in this project (references technology documents)',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }],
        },
      ],
    }),
    defineField({
      name: 'caseStudyUrl',
      title: 'Custom / Fallback Case Study URL',
      type: 'string',
      description: 'Optional override URL if this project links to a custom or external URL instead of /case-studies/[slug]',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'heroImage',
    },
  },
})
