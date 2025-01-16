import type { GlobalConfig } from 'payload'

const Home: GlobalConfig = {
  slug: 'home',
  label: 'Головна сторінка',
  access: {
    read: () => true, // Дозволяє читання всім
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
      relationTo: 'media', // Пов'язуємо з колекцією `Media`
      required: true,
    },
  ],
}

export default Home
