import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'esgInitiative',
  title: 'ESG Initiative',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Environmental', value: 'environmental' },
          { title: 'Social', value: 'social' },
          { title: 'Governance', value: 'governance' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text', rows: 3 },
        { name: 'es', title: 'Spanish', type: 'text', rows: 3 },
        { name: 'fr', title: 'French', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'fr', title: 'French', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon (emoji or icon name)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Initiative Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'category' },
  },
});
