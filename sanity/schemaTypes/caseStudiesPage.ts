import { defineType, defineField } from 'sanity'

export const caseStudiesPage = defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Listing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Badge',
          type: 'string',
          initialValue: 'OUR WORK',
        }),
        defineField({
          name: 'heading',
          title: 'Main Heading Part 1',
          type: 'string',
          initialValue: 'Real Problems.',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Main Heading Highlight (Gradient)',
          type: 'string',
          initialValue: 'Measurable Outcomes.',
        }),
        defineField({
          name: 'description',
          title: 'Subtitle / Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Banner Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'badges',
          title: 'Hero Feature Badges',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            '26+ Verified Case Studies',
            'Production Deployed',
            'Public & Private Sectors',
          ],
        }),
      ],
    }),
    defineField({
      name: 'featuredSection',
      title: 'Featured Projects Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Section Badge',
          type: 'string',
          initialValue: 'FEATURED WORK',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Flagship Implementations',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Deep-dive into our highest-impact engineering engagements.',
        }),
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      description:
        'Select specific testimonials from the global Testimonials Library to display on the Works / Case Studies listing page.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Trusted by Businesses Worldwide',
        }),
        defineField({
          name: 'selectedTestimonials',
          title: 'Selected Testimonials',
          description:
            'Select which testimonials to feature on the Works page. If empty, the global default testimonials will be shown.',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'testimonial' }],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to build something extraordinary?',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Schedule a confidential consultation with our principal software architects to discuss your roadmap.',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Discuss Your Initiative',
        }),
        defineField({
          name: 'buttonHref',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact-us',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          initialValue: 'Portfolio & Case Studies | Travash Software Solutions',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Explore web applications, mobile apps, enterprise platforms, and AI solutions engineered by Travash for organizations across banking, government, healthcare, and real estate.',
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share (OG) Image',
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.heading',
      subtitle: 'hero.headingHighlight',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Case Studies Listing Page',
        subtitle: `${title || 'Real Problems.'} ${subtitle || 'Measurable Outcomes.'}`,
      }
    },
  },
})
