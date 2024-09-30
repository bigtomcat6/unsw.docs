import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'COMP2511',
  link: '/COMP2511/',
  sidebar: [
    {
      text: 'COMP2511',
      link: '/COMP2511/',
      // collapsed: false,
      items: [
        {
          text: 'Lecture',
          dir: 'Lecture',
          link: '/COMP2511/Lecture/',
          items: []
        },
        {
          text: 'Tutorial',
          dir: 'Tutorial',
          link: '/COMP2511/Tutorial/'
        }
      ]
    }
  ]
});