import { defineField, defineType } from 'sanity';

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      { name: 'en', title: 'English', type: 'text' },
      { name: 'es', title: 'Spanish', type: 'text' },
      { name: 'fr', title: 'French', type: 'text' },
    ],
  });

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
      options: {
        list: ['Exploration', 'Development', 'Production', 'Care & Maintenance'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'commodities',
      title: 'Commodities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['Gold', 'Silver', 'Copper', 'Zinc', 'Lead'],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location (Bolivia Department)',
      type: 'string',
    }),
    defineField({
      name: 'mapCoordinates',
      title: 'Map Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),
    localizedText('summary', 'Summary'),
    localizedText('description', 'Full Description'),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'string' }] },
        { name: 'fr', title: 'French', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'documents',
      title: 'Project Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'file', title: 'PDF File', type: 'file' },
          ],
        },
      ],
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: { title: 'name.en', subtitle: 'stage' },
  },
});
