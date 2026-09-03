import { defineType, defineField } from 'sanity'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Request Your Free Consultation',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    }),
    defineField({
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'submitLabel',
      title: 'Submit Button Label',
      type: 'string',
      initialValue: 'Get a Free Consultation',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thank you! We\'ll be in touch shortly.',
    }),
    defineField({
      name: 'notifyEmail',
      title: 'Notification Email',
      type: 'string',
      description: 'Email address to receive form submissions',
    }),
  ],
})
