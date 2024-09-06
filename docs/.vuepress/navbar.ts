import { NavItem } from 'vuepress-theme-plume'

export const navbar: NavItem[] = [
  {
    link: '/',
    text: 'Home',//`${Text()}`,
    icon: 'ri:home-8-line'
  },
  {
    text: 'Current',  icon: 'mdi:university-outline',
    items: [
      { text: 'COMP9444', link: '/COMP9444/' },
      { text: 'ELEC2134', link: '/ELEC2134/' },
    ]
  },
  { text: 'Links', link: '/useful/', icon: 'fa6-solid:link' },
  { text: 'Help', icon: 'mi:circle-help',
    items: [
      { text: 'About', link: '/help/about' },
      { text: 'Copyright', link: '/help/copyright' }
    ]
  },
];