// Plume theme
// https://plume.pengzhanbo.cn/
import { plumeTheme } from 'vuepress-theme-plume'
// import { markdownPowerPlugin } from 'vuepress-plugin-md-power'



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

  navbar: [
    {
      link: '/',
      text: 'Home',//`${Text()}`,
      icon: 'ri:home-8-line'
    },
    { text: 'Links', link: '/useful/', icon: 'fa6-solid:link' },
    { text: 'Help', icon: 'mi:circle-help',
      items: [
        { text: 'About', link: '/help/about' },
        { text: 'Copyright', link: '/help/copyright' }
      ]
    },
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
                text: 'Overview',
                dir: '',
                link: '/DESN2000/',
                items: []
              },
              {
                text: 'Design',
                dir: 'Design',
                link: '/DESN2000/Design/',
                items: []
              },
              {
                text: 'Tech (COMP)',
                dir: 'COMP',
                link: '/DESN2000/COMP/',
                items: ['/DESN2000/COMP/Lecture/', '/DESN2000/COMP/Lab/']
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
      },
      {
        dir: 'help',
        link: '/help/',
        sidebar: 'auto'
      }
    ]
  },

  nextPage: false,
  prevPage: false,
  externalLinkIcon: true,

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