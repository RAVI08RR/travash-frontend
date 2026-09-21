import { defineType, defineField } from 'sanity'

export const enquirySubmission = defineType({
  name: 'enquirySubmission',
  title: 'Form Submissions (Enquiries)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message / Project Details',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'clientIp',
      title: 'Client IP Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Timestamp',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'New',
      options: {
        list: [
          { title: '🟢 New', value: 'New' },
          { title: '🟡 In Progress', value: 'In Progress' },
          { title: '🔵 Contacted', value: 'Contacted' },
          { title: '⚪ Archived', value: 'Archived' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subject',
      email: 'email',
      date: 'submittedAt',
    },
    prepare({ title, subtitle, email, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: `${title || 'Anonymous'} (${email || 'No email'})`,
        subtitle: `${subtitle || 'General Enquiry'} • ${formattedDate}`,
      }
    },
  },
  orderings: [
    {
      title: 'Submitted Date, Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
})
