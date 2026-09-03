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
  ],
})
