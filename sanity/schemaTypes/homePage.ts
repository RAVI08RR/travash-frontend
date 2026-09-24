import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
    }),
    defineField({
      name: 'trustedBy',
      title: 'Trusted By Section',
      type: 'trustedBySection',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities Section',
      type: 'capabilitiesSection',
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies Section',
      type: 'caseStudySection',
    }),
    defineField({
      name: 'stats',
      title: 'Stats Section',
      type: 'statsSection',
    }),
    defineField({
      name: 'introVideo',
      title: 'Intro Video Section',
      type: 'introVideoSection',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'testimonialSection',
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'aboutSection',
    }),
    defineField({
      name: 'industries',
      title: 'Industries Section',
      type: 'industriesSection',
    }),
    defineField({
      name: 'blog',
      title: 'Blog Section',
      type: 'blogSection',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'contactSection',
    }),
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
})
