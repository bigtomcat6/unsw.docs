
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

/** Theme **/

// VuePress default theme
// import { defaultTheme } from '@vuepress/theme-default' 

// Plume theme
// https://plume.pengzhanbo.cn/
import { plumeTheme } from 'vuepress-theme-plume'
import { markdownPowerPlugin } from 'vuepress-plugin-md-power'

/**********/

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'en-US',

  title: 'UNSW Notes by How',
  description: '123',

  theme: plumeTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Home', link: '/'},
      // { text: 'Get Started', link: '/get-started' },
      { text: 'DESN2000', link: '/DESN2000/' },
      { text: 'MATH2099', link: '/MATH2099/' },
      { text: 'COMP2511', link: '/COMP2511/' },
    ],

    notes: {
      dir: '/',
      link: '/',
      notes: [
        {
          dir: 'DESN2000',
          link: '/DESN2000/',
          sidebar: [
            {
              text: 'DESN2000',
              collapsed: false,
              items: ['Lecture', 'Lab']
            }
          ]
        },
        {
          dir: 'MATH2099',
          link: '/MATH2099/',
          sidebar: [
            {
              text: 'MATH2099',
              collapsed: false,
              items: [
                {
                  dir: 'Algebra',
                  link: '/MATH2099/Algebra/',
                  items: ['index', 'Lecture', 'Tutorial']
                },
                {
                  dir: 'Statistics',
                  link: '/MATH2099/Statistics/',
                  items: ['index', 'Lecture', 'mobius/index']
                },
              ]
            }
          ]
        },
        {
          dir: 'COMP2511',
          link: '/COMP2511/',
          sidebar: [
            {
              text: 'COMP2511',
              collapsed: false,
              items: [
                {
                  dir: 'Note',
                  link: '/COMP2511/',
                  items: []
                },
                {
                  dir: 'Lecture',
                  link: '/COMP2511/Lecture/',
                  items: []
                }
              ]
            }
          ]
        }

      ]
    },

    footer: false,
    plugins: {
      search: false,
      markdownEnhance: {
        mermaid: true,
      },
    },
    
  }),
  markdown: {
    frontmatter: {

    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'style/index.css'}],
  ],

  plugins: [
    removeHtmlExtensionPlugin(),
    markdownPowerPlugin({
        icons: true,
    }),
  ],

  alias: {
    '@VCard': path.resolve(__dirname, 'components/VCard.vue'),
    '@MobiusTitleCard': path.resolve(__dirname, 'components/MobiusTitleCard.vue'),
    '@HButton': path.resolve(__dirname, 'components/HButton.vue'),
  },

  // 全局注册：https://theme-hope.vuejs.press/zh/guide/component/global.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C-vue-%E7%BB%84%E4%BB%B6

  bundler: viteBundler(),
})
