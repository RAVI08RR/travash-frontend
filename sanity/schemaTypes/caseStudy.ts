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
      options: {
        list: [
          { title: 'Banking & Financial Services', value: 'Banking & Financial Services' },
          { title: 'E-commerce & Retail', value: 'E-commerce & Retail' },
          { title: 'Travel & Hospitality', value: 'Travel & Hospitality' },
          { title: 'Real Estate & Construction', value: 'Real Estate & Construction' },
          { title: 'SaaS & Technology', value: 'SaaS & Technology' },
          { title: 'Manufacturing', value: 'Manufacturing' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Government & Public Sector', value: 'Government & Public Sector' },
          { title: 'Logistics & Supply Chain', value: 'Logistics & Supply Chain' },
          { title: 'Recruitment & HR', value: 'Recruitment & HR' },
          { title: 'Legal', value: 'Legal' },
          { title: 'Other', value: 'Other' },
        ],
      },
      initialValue: 'Government & Public Sector',
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
          title: 'Subtitle / Headline',
          type: 'string',
          initialValue: 'High-Volume Passport Verification Was Creating an Administrative Bottleneck',
        },
        {
          name: 'content',
          title: 'Introduction Text / Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'pointsLabel',
          title: 'Problem Points Header',
          type: 'string',
          initialValue: 'OFFICIALS NEEDED TO IDENTIFY :',
        },
        {
          name: 'points',
          title: 'Challenge Problem Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'takeaway',
          title: 'Takeaway / Concluding Note',
          type: 'text',
          rows: 2,
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
          name: 'subtitle',
          title: 'Subtitle / Headline',
          type: 'string',
          initialValue: 'Automate Routine Screening. Surface Exceptions for Investigation.',
        },
        {
          name: 'intro',
          title: 'Intro Narrative / Description',
          type: 'text',
          rows: 3,
          initialValue: 'Travash approached Satyaapan as an intelligent verification workflow rather than simply an administrative portal.',
        },
        {
          name: 'description',
          title: 'Alternative Description',
          type: 'text',
          rows: 3,
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
          name: 'subtitle',
          title: 'Subtitle / Headline',
          type: 'string',
          initialValue: 'Satyaapan – An Intelligent Digital Verification Workflow',
        },
        {
          name: 'intro',
          title: 'Intro Narrative / Description',
          type: 'text',
          rows: 3,
          initialValue: 'Travash developed Satyaapan as a centralized custom web application that automates critical stages of passport verification.',
        },
        {
          name: 'description',
          title: 'Alternative Description',
          type: 'text',
          rows: 3,
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
      description:
        'Architecture section container. If no custom diagram image is uploaded, an interactive vector diagram is automatically generated in the frontend container.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Solution Architecture',
          description: 'Title of the architecture section (defaults to Solution Architecture)',
        },
        {
          name: 'intro',
          title: 'Architecture Overview / Pipeline Description',
          type: 'text',
          rows: 3,
          description:
            'Pipeline flow text, e.g. "Regional Passport Office (RPO) → Satyaapan Verification Platform → Automated Data Extraction + Facial Recognition → Real-Time Matching Against Relevant Records → Automated Verification Workflow (Clear vs Flagged)."',
          initialValue:
            'Regional Passport Office (RPO) → Satyaapan Verification Platform → Automated Data Extraction + Facial Recognition → Real-Time Matching Against Relevant Records → Automated Verification Workflow (Clear vs Flagged).',
        },
        {
          name: 'image',
          title: 'Architecture Diagram / Visual (Optional)',
          type: 'image',
          options: { hotspot: true },
          description:
            'Upload custom architecture diagram image here. It will automatically be rendered inside the exact same enterprise white card container. Leave empty to use the dynamic vector diagram.',
        },
        {
          name: 'caption',
          title: 'Diagram Caption / Figure Label',
          type: 'string',
          description:
            'Figure caption displayed with a vertical accent bar below the overview text (e.g. "Figure: Satyaapan Multi-Tier AI Verification & Escalation Architecture")',
        },
      ],
    }),
    defineField({
      name: 'techStackTitle',
      title: 'Technology Stack Section Title',
      type: 'string',
      initialValue: 'Enterprise Technology Stack',
      description: 'Heading for technology stack section (defaults to "Enterprise Technology Stack")',
    }),
    defineField({
      name: 'techStackSubtitle',
      title: 'Technology Stack Section Subtitle / Intro',
      type: 'text',
      rows: 2,
      initialValue:
        'To deliver a robust custom software solution capable of processing millions of records securely, we utilised a highly resilient tech stack:',
      description: 'Intro narrative text above technology cards',
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
      name: 'testimonialRef',
      title: 'Client Testimonial (From Global Testimonials Library)',
      description: 'Select a testimonial from the global Testimonials list.',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Perspective / Testimonial (Custom Override)',
      description: 'Optional custom testimonial specific to this case study (overrides global testimonial if filled).',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Client Perspective',
          description: 'Defaults to "Client Perspective"',
        },
        {
          name: 'intro',
          title: 'Section Subtitle / Description',
          type: 'string',
          initialValue: "Insights, expectations, and feedback from the client's point of view.",
        },
        { name: 'quote', title: 'Client Quote', type: 'text', rows: 4 },
        { name: 'author', title: 'Author Name (e.g. Telangana Police Dept (team))', type: 'string' },
        { name: 'role', title: 'Author Role / Title', type: 'string' },
        { name: 'company', title: 'Organization / Department', type: 'string' },
        { name: 'image', title: 'Client / Author Photo or Logo', type: 'image', options: { hotspot: true } },
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
          title: 'Challenge Question / Subtitle',
          type: 'string',
          initialValue: 'Does Your Organization Face a Similar Challenge?',
        },
        {
          name: 'description',
          title: 'Section Description / Narrative',
          type: 'text',
          rows: 3,
          initialValue:
            'This case study is highly relevant for civic authorities, enterprises, and public-sector leaders evaluating scalable, automated identity solutions.',
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Looking to Modernize a High-Volume Verification or Public-Safety Workflow?',
        },
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
      name: 'contact',
      title: 'Contact Form Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to automate and solve operational bottlenecks?',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At Travash, we engineer enterprise-grade AI and automation solutions that solve complex business challenges and streamline operations. Visit travash.com to connect with our digital transformation experts.',
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
      name: 'projectTypes',
      title: 'Project Types (Multiple Select Supported)',
      type: 'array',
      description: 'Select all applicable types for this project (e.g. Web Application, Mobile Application, Branding)',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Website', value: 'Website' },
          { title: 'Web Application', value: 'Web Application' },
          { title: 'Mobile Application', value: 'Mobile Application' },
          { title: 'Desktop Application', value: 'Desktop Application' },
          { title: 'Branding', value: 'Branding' },
          { title: 'AI Development', value: 'AI Development' },
        ],
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Primary Project Type (Legacy Fallback)',
      type: 'string',
      description: 'Primary project category for backwards compatibility',
      options: {
        list: [
          { title: 'Website', value: 'Website' },
          { title: 'Web Application', value: 'Web Application' },
          { title: 'Mobile Application', value: 'Mobile Application' },
          { title: 'Desktop Application', value: 'Desktop Application' },
          { title: 'Branding', value: 'Branding' },
          { title: 'AI Development', value: 'AI Development' },
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
