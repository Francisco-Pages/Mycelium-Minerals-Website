import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: ['Operations', 'Finance', 'Geology', 'Engineering', 'HSE', 'Legal', 'Corporate', 'Other'],
      },
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'fr', title: 'French', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'applicationEmail',
      title: 'Application Email',
      type: 'email',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Posted Date',
      type: 'date',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Listing',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'location' },
  },
});
