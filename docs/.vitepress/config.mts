import { defineConfig } from 'vitepress'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItCheckbox from 'markdown-it-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "How's UNSW Docs",
  description: "By ❤️",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
      '/MATH2099/': [
        {
          text: 'MATH2099 - Statistics',
          items: [
            { text: 'möbius',  link: '/MATH2099/Statistics/mobius'},
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ] 
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    math: true,
    config: (md) => {
      md.use(markdownItTaskLists, {label: true})
      // md.use(markdownItCheckbox)
    }
  }
})
