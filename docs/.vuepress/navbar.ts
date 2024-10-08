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
      { text: 'ELEC2134', link: '/ELEC2134/' },
      { text: 'COMP3222', link: '/COMP3222/' },
      { text: 'COMP9444', link: '/COMP9444/' },
    ]
  },
  { text: 'Links', link: '/useful/', icon: 'fa6-solid:link' },
  // { text: 'Help', link: '/help/terms/about', icon: 'mi:circle-help'},
  { text: 'More', icon: 'mdi:more-circle-outline',
    items: [
      { text: 'Tools', link: '/help/tools/', icon: 'carbon:tool-box' },
      { text: 'About', link: '/help/terms/about', icon: 'mdi:about-circle-outline' },
    ]
  }
];