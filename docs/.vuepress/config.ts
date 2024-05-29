
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

/** Theme **/

// VuePress default theme
// import { defaultTheme } from '@vuepress/theme-default' 

// Plume theme
// https://plume.pengzhanbo.cn/
import { plumeTheme } from 'vuepress-theme-plume'

/**********/


export default defineUserConfig({
  lang: 'zh-CN',

  title: 'UNSW Notes by How',
  description: '123',

  theme: plumeTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Home', link: '/'},
      { text: 'Get Started', link: '/get-started'},
      { text: 'DESN2000', link: '/DESN2000/index' }
    ],
    footer: false,
  }),


  bundler: viteBundler(),
})
