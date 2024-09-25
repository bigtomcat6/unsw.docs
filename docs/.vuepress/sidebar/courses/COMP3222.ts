import icons from "../icons";

import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'COMP3222',
  link: '/COMP3222/',
  sidebar: [
    {
      text: 'COMP3222',
      icon: icons.current,
      collapsed: false,
      items: [
        {
          text: 'Overview',
          dir: '',
          link: '/COMP3222/',
        },
        {
          text: 'Note',
          dir: 'Note',
          link: '/COMP3222/Note/',
        },
        {
          text: 'Lecture',
          dir: 'Lecture',
          link: '/COMP3222/Lecture/',
        },
        {
          text: 'Lab',
          dir: 'Lab',
          link: '/COMP3222/Lab/',
        }
      ]
    }
  ]
});