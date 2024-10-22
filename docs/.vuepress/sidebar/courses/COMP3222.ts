import icons from "../icons.js";

import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'COMP3222',
  link: '/COMP3222/',
  sidebar: [
    {
      text: 'COMP3222',
      link: '/COMP3222/',
      prefix: '/COMP3222/',
      icon: icons.current,
      // collapsed: false,
      items: [
        {
          text: 'Note',
          dir: 'Note',
          link: 'Note/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: 'Lecture',
          dir: 'Lecture',
          link: 'Lecture/',
        },
        {
          text: 'Lab',
          dir: 'Lab',
          link: 'Lab/',
        }
      ]
    }
  ]
});