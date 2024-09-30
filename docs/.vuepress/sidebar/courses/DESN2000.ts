import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'DESN2000',
  link: '/DESN2000/',
  sidebar: [
    {
      text: 'DESN2000',
      link: '/DESN2000/',
      // collapsed: false,
      items: [
        {
          text: 'Design',
          dir: 'Design',
          link: '/DESN2000/Design/',
          items: []
        },
        {
          text: 'Technical (COMP)',
          dir: 'COMP',
          link: '/DESN2000/COMP/',
          items: ['/DESN2000/COMP/Lecture/', '/DESN2000/COMP/Lab/', '/DESN2000/COMP/Project/']
        }
      ]
    }
  ]
});