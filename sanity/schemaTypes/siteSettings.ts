import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'stockTicker',
      title: 'Stock Ticker Symbol',
      type: 'string',
      description: 'e.g. MYC',
    }),
    defineField({
      name: 'exchange',
      title: 'Stock Exchange',
      type: 'string',
      description: 'e.g. TSX',
      initialValue: 'TSX',
    }),
    defineField({
      name: 'irEmail',
      title: 'Investor Relations Email',
      type: 'email',
    }),
    defineField({
      name: 'irPhone',
      title: 'Investor Relations Phone',
      type: 'string',
    }),
    defineField({
      name: 'headquartersAddress',
      title: 'Headquarters Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'province', title: 'Province / State', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'postalCode', title: 'Postal Code', type: 'string' },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter / X', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
      ],
    }),
    defineField({
      name: 'forwardLookingDisclaimer',
      title: 'Forward-Looking Statement Disclaimer',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'es', title: 'Spanish', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
