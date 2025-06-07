import { defineNotesConfig, NoteItem } from 'vuepress-theme-plume';

import courses from './courses/index.js';

const Help: NoteItem = {
  dir: 'Help',
  link: '/help/',
  sidebar: [
    {
      text: 'Tools',
      link: '/help/tools/',
      // collapsed: false,
      items: [
        '/help/tools/useful',
        '/help/tools/cseLabs'
      ]
    },
    {
      text: 'Terms',
      // collapsed: false,
      items: [
        '/help/terms/about',
        '/help/terms/copyright'
      ]
    }

  ]
}


export default defineNotesConfig({
  dir: '/',
  link: '/',
  notes: [
    ...courses,
    Help,
  ]
});