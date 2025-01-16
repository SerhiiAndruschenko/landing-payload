import type { CollectionConfig } from 'payload'

const Landing: CollectionConfig = {
  slug: 'landing', // Унікальний ідентифікатор колекції
  admin: {
    defaultColumns: ['title', 'image'], // Колонки, які будуть відображатися в адмін-панелі
    useAsTitle: 'title', // Поле, яке буде використовуватися як заголовок запису
  },
  fields: [
    {
      name: 'title', // Назва поля
      type: 'text', // Тип текстового поля
      label: 'Заголовок',
      required: true, // Поле є обов'язковим
    },
    {
      name: 'content',
      type: 'textarea', // Текстове поле для багаторядкового вводу
      label: 'Текст',
      required: true,
    },
    {
      name: 'image',
      type: 'upload', // Поле для завантаження файлів
      relationTo: 'media', // Пов'язане з колекцією `Media`
      label: 'Зображення',
      required: false,
    },
  ],
}

export default Landing
