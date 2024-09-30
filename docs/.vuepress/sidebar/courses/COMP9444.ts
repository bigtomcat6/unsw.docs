import icons from "../icons";

import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'COMP9444',
  link: '/COMP9444/',
  sidebar: [
    {
      text: 'COMP9444',
      link: '/COMP9444/',
      // collapsed: false,
      items: [
        {
          text: 'Lecture',
          dir: 'Lecture',
          link: '/COMP9444/Lecture/',
        },
        {
          text: 'Tutorial',
          dir: 'Tutorial',
          link: '/COMP9444/Tutorial/',
        },
        {
          text: 'Ed Lessons',
          dir: 'Ed',
          link: '/COMP9444/Ed/',
          items: []
        },
      ]
    }
  ]
});