import icons from "../icons";

import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'COMP9444',
  link: '/COMP9444/',
  sidebar: [
    {
      text: 'COMP9444',
      icon: icons.current,
      collapsed: false,
      items: [
        {
          text: 'Overview',
          dir: '',
          link: '/COMP9444/',
        },
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