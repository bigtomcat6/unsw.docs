import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'MATH2099',
  link: '/MATH2099/',
  sidebar: [
    {
      text: 'MATH2099',
      link: '/MATH2099/',
      prefix: '/MATH2099/',
      // collapsed: false,
      items: [
        {
          text: 'Linear Algebra',
          dir: 'Algebra',
          link: 'Algebra/',
          items: ['index', 'Lecture/index', 'Tutorial']
        },
        {
          text: 'Statistics',
          dir: 'Statistics',
          link: 'Statistics/',
          items: ['index', 'Lecture/index','mobius/index']
        },
      ]
    }
  ]
});