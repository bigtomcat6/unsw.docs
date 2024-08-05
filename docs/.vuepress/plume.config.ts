// Plume theme
// https://plume.pengzhanbo.cn/
import { plumeTheme } from 'vuepress-theme-plume'
// import { markdownPowerPlugin } from 'vuepress-plugin-md-power'



const COPYRIGHT = '©2022 - 2024 <a href="https://www.bigtomcat.com/" target="_blank">How</a> <br>\
This document is a subdocument of <a href="https://docs.bigtomcat.com/" target="_blank">docs.bigtomcat.com</a><br>';

export default plumeTheme({
  // logo: 'https://vuejs.press/images/hero.png',
  logo: '/logo.png',

  profile: {
    name: 'How',
    avatar: '/logo.png',
    description: 'bigtomcat',
    location: 'Sydney, Australia',
    
  },

  navbar: [
    {
      link: '/',
      text: 'Home',//`${Text()}`,
    },
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
            items: [
              {
                text: 'Note',
                dir: 'Note',
                link: '/DESN2000/',
                items: []
              },
              {
                text: 'Lecture',
                dir: 'Lecture',
                link: '/DESN2000/Lecture',
                items: []
              },
              {
                text: 'Laboratory',
                dir: 'Laboratory',
                link: '/DESN2000/Lab/',
                items: []
              }
            ]
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
                text: 'Overview',
                dir: '',
                link: '/MATH2099/',
                items: []
              },
              {
                text: 'Linear Algebra',
                dir: 'Algebra',
                link: '/MATH2099/Algebra/',
                items: ['index', 'Lecture/index', 'Tutorial']
              },
              {
                text: 'Statistics',
                dir: 'Statistics',
                link: '/MATH2099/Statistics/',
                items: ['index', 'Lecture/index','mobius/index']
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
                text: 'Note',
                dir: 'Note',
                link: '/COMP2511/',
                items: []
              },
              {
                text: 'Lecture',
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

  footer: {
    message: '',
    copyright: COPYRIGHT
  },
  plugins: {
    search: false,
    markdownEnhance: {
      mermaid: true,
    },
  },
  
});