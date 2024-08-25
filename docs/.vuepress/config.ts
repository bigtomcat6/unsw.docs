
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

/** Theme **/

// VuePress default theme
// import { defaultTheme } from '@vuepress/theme-default' 

import theme from './plume.config'

/**********/

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
import { markdownPowerPlugin } from 'vuepress-plugin-md-power'
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

// const Text = () => {
//   const date = new Date();
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const seconds = date.getSeconds().toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// };

export default defineUserConfig({
  lang: 'en-US',

  title: 'UNSW notes ᵇᵉᵗᵃ' ,
  description: '123',

  theme: theme,
  markdown: {
    frontmatter: {

    }
  },

  head: [
    // ['link', { rel: 'stylesheet', href: 'style/index.css'}],
    ['link', { rel: 'icon', href: '/logo.png'}],
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
    '@unswUpdating': path.resolve(__dirname, 'components/unswUpdating.vue'),
    '@HSelect': path.resolve(__dirname, 'components/HSelect.vue'),
  },

  // 全局注册：https://theme-hope.vuejs.press/zh/guide/component/global.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C-vue-%E7%BB%84%E4%BB%B6

  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          output: {
            manualChunks: (id) => { // not work
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            },
          },
        },
        chunkSizeWarningLimit: 1500, // 将警告限制提高到 1500 kB (but not work)
      }
    },
  }),
});