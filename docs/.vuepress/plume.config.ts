// Plume theme
// https://plume.pengzhanbo.cn/
import { plumeTheme } from 'vuepress-theme-plume'
// import { markdownPowerPlugin } from 'vuepress-plugin-md-power'

import notes from './sidebar'
import { navbar } from './navbar'

const COPYRIGHT = 'Subdocument of <a href="https://docs.bigtomcat.com/" target="_blank">How\'s Docs</a> &nbsp; <br>\
Copyright ©2022 - 2024 <a href="https://www.bigtomcat.com/" target="_blank">How</a> <br>';

export default plumeTheme({
  // logo: 'https://vuejs.press/images/hero.png',
  logo: '/logo.png',

  profile: {
    name: 'How',
    avatar: '/logo.png',
    description: 'bigtomcat',
    location: 'Sydney, Australia',
  },

  
  navbar,
  notes,

  nextPage: false,
  prevPage: false,
  externalLinkIcon: true,

  footer: {
    message: '',
    copyright: COPYRIGHT
  },
  plugins: {
    // search: false,
    markdownEnhance: {
      mermaid: true,
    },
    markdownPower: {
      icons: true,
      imageSize: true, // 图片优化 (rc.98试验性)
    }
  },
  
});