
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

/** Theme **/

// VuePress default theme
import { defaultTheme } from '@vuepress/theme-default' 

// Plume theme
// https://plume.pengzhanbo.cn/
import { definePlumeNotesConfig, plumeTheme } from 'vuepress-theme-plume'

/**********/


export default defineUserConfig({
  lang: 'zh-CN',

  title: 'UNSW Notes by How',
  description: '123',

  theme: plumeTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Home', link: '/'},
      // { text: 'Get Started', link: '/get-started' },
      { text: 'DESN2000', link: '/DESN2000/index' }
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
              collapsed: true,
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
              collapsed: true,
              items: [
                {
                  dir: 'Statistics',
                  link: '/Statistics/',
                  items: ['index', 'Lecture']
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
    },
    
  }),
  markdown: {
    frontmatter: {
      
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: '/style.scss' }],
  ],

  bundler: viteBundler(),
})
