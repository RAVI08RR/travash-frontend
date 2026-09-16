import { defineField, defineType } from 'sanity'

/**
 * Standalone reusable Testimonial document.
 * These are the source-of-truth testimonials that can be referenced
 * from any Service page, Case Study, or other content type.
 * Do NOT duplicate content — create one document per testimonial.
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',

  fields: [
    // Client identity
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Full name of the person giving the testimonial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation / Job Title',
      type: 'string',
      description: 'e.g. Chief Technology Officer, VP of Engineering',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company / Organisation',
      type: 'string',
      description: 'e.g. PIXL Group, National Anti-Fraud Network',
    }),

    // The testimonial content
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 5,
      description: 'The exact testimonial text to display on the website',
      validation: (Rule) => Rule.required(),
    }),

    // Client photo (existing image — do not re-upload)
    defineField({
      name: 'photo',
      title: 'Client Photo / Portrait',
      type: 'image',
      description: 'Use the existing image already in Sanity. Do NOT re-upload.',
      options: { hotspot: true },
    }),

    // Service / industry categories (multi-select)
    defineField({
      name: 'categories',
      title: 'Service Categories',
      type: 'array',
      description:
        'Select all service/industry areas this testimonial is relevant to. Used to help admins filter when selecting testimonials for a service page.',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Data & Analytics', value: 'data-analytics' },
          { title: 'AI & Machine Learning', value: 'ai-ml' },
          { title: 'Software Engineering', value: 'software-engineering' },
          { title: 'Cloud & DevOps', value: 'cloud-devops' },
          { title: 'Cybersecurity', value: 'cybersecurity' },
          { title: 'Staff Augmentation', value: 'staff-augmentation' },
          { title: 'Dedicated Teams', value: 'dedicated-teams' },
          { title: 'FinTech & Finance', value: 'fintech-finance' },
          { title: 'Healthcare Technology', value: 'healthcare-tech' },
          { title: 'E-commerce & Retail', value: 'ecommerce-retail' },
          { title: 'Government & Public Sector', value: 'government-public' },
          { title: 'Enterprise & General', value: 'enterprise-general' },
        ],
        layout: 'tags',
      },
    }),

    // Optional: linked client logo from Media Library
    defineField({
      name: 'clientLogo',
      title: 'Client Logo (Optional)',
      type: 'image',
      description: 'Company logo — use the existing one from Sanity. Do NOT re-upload.',
      options: { hotspot: true },
    }),

    // Optional badge / verification label
    defineField({
      name: 'badge',
      title: 'Verification Badge (Optional)',
      type: 'string',
      description: 'e.g. "Verified Client", "National Coordinator", "Fortune 500"',
    }),
  ],

  // Preview in the Studio list — shows client name, company, and photo
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'company',
      media: 'photo',
      designation: 'designation',
    },
    prepare({ title, subtitle, media, designation }) {
      return {
        title: title || 'Unnamed Testimonial',
        subtitle: [designation, subtitle].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})
