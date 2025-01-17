import type { GlobalConfig } from 'payload'
import axios from 'axios'

const Home: GlobalConfig = {
  slug: 'home',
  label: 'Головна сторінка',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Текст',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Зображення',
      relationTo: 'media',
      required: false,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        try {
          const vercelToken = process.env.VERCEL_TOKEN
          const vercelProject = process.env.VERCEL_PROJECT

          const url = `https://api.vercel.com/v1/projects/${vercelProject}/cache`
          await axios.delete(url, {
            headers: {
              Authorization: `Bearer ${vercelToken}`,
            },
          })

          console.log(`Cache for project ${vercelProject} cleared successfully.`)
        } catch (error) {
          console.error('Error clearing Vercel cache:', error)
        }
      },
    ],
  },
}

export default Home
