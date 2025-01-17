import type { GlobalConfig } from 'payload'

const Home: GlobalConfig = {
  slug: 'home',
  label: 'Landing Page',
  access: {
    read: () => true, // Allow read access to everyone
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Hero Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Hero Subtitle',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Hero Text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Hero Image',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'advantages',
          type: 'array',
          label: 'Advantages',
          required: true,
          minRows: 4, // Require exactly 4 elements
          maxRows: 4,
          fields: [
            {
              name: 'value',
              type: 'text',
              label: 'Value',
              required: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Text',
              required: true,
            },
          ],
        },
      ],
    },
    // Services Section
    {
      name: 'services',
      label: 'Services Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Services Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Services Subtitle',
          required: true,
        },
        {
          name: 'ourServices',
          type: 'array',
          label: 'Our Services',
          fields: [
            {
              name: 'image',
              type: 'upload',
              label: 'Service Image',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Service Title',
              required: true,
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'Service Description',
              required: true,
            },
          ],
        },
      ],
    },

    //Why us section
    {
      name: 'why',
      label: 'Why us',
      type: 'group',
      fields: [
        {
          name: 'why_title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'why_subtitle',
          type: 'text',
          label: 'Subtitle',
          required: true,
        },
        {
          name: 'why_content',
          type: 'textarea',
          label: 'Text',
          required: true,
        },
        {
          name: 'why_reasones',
          type: 'array',
          label: 'Reasones',
          required: true,
          minRows: 4, // Require exactly 4 elements
          maxRows: 4,
          fields: [
            {
              name: 'reasone_icon',
              type: 'upload',
              label: 'Reasone icon',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'reasone_value',
              type: 'text',
              label: 'Value',
              required: true,
            },
            {
              name: 'reasone_text',
              type: 'text',
              label: 'Text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Home
