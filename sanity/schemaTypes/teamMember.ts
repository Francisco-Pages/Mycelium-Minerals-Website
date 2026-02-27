import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
      ],
    }),
    defineField({
      name: 'role',
      title: 'Role Type',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Team', value: 'executive' },
          { title: 'Board of Directors', value: 'board' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'es', title: 'Spanish', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
      ],
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
});
