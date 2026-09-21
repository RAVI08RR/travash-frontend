import { defineType, defineField } from 'sanity'

export const jobApplicationSubmission = defineType({
  name: 'jobApplicationSubmission',
  title: 'Job Applications (Careers)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Applicant Name',
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
      name: 'jobTitle',
      title: 'Position Applied For',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'jobSlug',
      title: 'Job Slug',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'coverLetter',
      title: 'Cover Letter / Note',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'resumeFileName',
      title: 'CV / Resume File Name',
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
      title: 'Application Status',
      type: 'string',
      initialValue: 'New',
      options: {
        list: [
          { title: '🟢 New', value: 'New' },
          { title: '🟡 Under Review', value: 'Under Review' },
          { title: '🔵 Interview Scheduled', value: 'Interview Scheduled' },
          { title: '🔴 Rejected', value: 'Rejected' },
          { title: '⭐ Hired', value: 'Hired' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jobTitle',
      email: 'email',
      date: 'submittedAt',
    },
    prepare({ title, subtitle, email, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: `${title || 'Applicant'} — ${subtitle || 'Position'}`,
        subtitle: `${email || 'No email'} • ${formattedDate}`,
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
