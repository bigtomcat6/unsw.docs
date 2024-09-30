import icons from "../icons";

import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'ELEC2134',
  link: '/ELEC2134/',
  sidebar: [
    {
      text: 'ELEC2134',
      link: '/ELEC2134/',
      prefix: '/ELEC2134/',
      icon: icons.current,
      // collapsed: false,
      items: [
        {
          text: 'Note',
          dir: 'Note',
          link: 'Note/',
        },
      ],
    },
  ],
});