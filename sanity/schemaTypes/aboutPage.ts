import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'ABOUT TRAVASH' }),
        defineField({
          name: 'heading',
          title: 'Heading (H1)',
          type: 'string',
          initialValue: 'We are a team of great innovators, creators and differentiators with exceptional high standards.',
        }),
        defineField({
          name: 'description',
          title: 'Supporting Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Founded in 2005 with a clear vision: to transform technology from a business cost center into a powerful engine of growth, scalability, and competitive advantage for enterprises worldwide.',
        }),
        defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Company Story',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'How Our Vision Became Reality' }),
        defineField({
          name: 'content',
          title: 'Story Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        }),
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Company Journey Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'year', title: 'Year / Era', type: 'string' }),
            defineField({ name: 'title', title: 'Milestone Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'missionVision',
      title: 'Mission & Vision',
      type: 'object',
      fields: [
        defineField({
          name: 'missionTitle',
          title: 'Mission Title',
          type: 'string',
          initialValue: 'Our Mission',
        }),
        defineField({
          name: 'missionDescription',
          title: 'Mission Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To empower global enterprises, forward-thinking startups, and public-sector institutions with production-grade digital solutions, transforming software from a cost center into a sustainable profit driver.',
        }),
        defineField({
          name: 'visionTitle',
          title: 'Vision Title',
          type: 'string',
          initialValue: 'Our Vision',
        }),
        defineField({
          name: 'visionDescription',
          title: 'Vision Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To be the world’s most trusted technology partner, renowned for engineering rigor, innovative AI acceleration, and enduring client partnerships exceeding 90% retention.',
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'iconName', title: 'Lucide Icon Name', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership Team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Full Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role / Designation', type: 'string' }),
            defineField({ name: 'experienceYears', title: 'Experience Summary', type: 'string' }),
            defineField({ name: 'bio', title: 'Biography', type: 'text', rows: 4 }),
            defineField({ name: 'image', title: 'Profile Photo', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'linkedinUrl', title: 'LinkedIn Profile URL', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'teams',
      title: 'Our Teams Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Teams' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At Travash Software Solutions, our team is the backbone of our success. We are a passionate group of developers, designers, and innovators dedicated to building cutting-edge software solutions that drive businesses forward.',
        }),
      ],
    }),
    defineField({
      name: 'culture',
      title: 'Our Culture Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Culture' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At Travash, we cultivate a culture of innovation, excellence, and collaboration. Our team thrives on cutting-edge technology, problem-solving, and client-centric strategies. We empower talent, embrace diversity, and drive digital transformation with passion and purpose—delivering impact that lasts.',
        }),
      ],
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
})
