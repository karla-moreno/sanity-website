import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subtext',
      title: 'Subtext',
    }),
    defineField({
      type: 'url',
      name: 'buttonLink',
      title: 'Button Link',
    }),
    defineField({
      type: 'string',
      name: 'buttonText',
      title: 'Button Text',
    }),
    {
      title: 'Banner Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
        ],
      },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtext: 'subtext',
      buttonLink: 'buttonLink',
      buttonText: 'buttonText',
      style: 'style'
    },
    prepare(selection) {
      const { heading, style } = selection
      return {
        title: heading && `Hero Banner ${style}: ${heading}`
      }
    },
  },
})
