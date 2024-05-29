import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'UNSW Notes by How',
  description: '123',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started', 
      {
        text: 'DESN2000',
        link: '/DESN2000/index'
      }
    ],
  }),

  bundler: viteBundler(),
})
