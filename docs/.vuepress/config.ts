
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

import { visualizer } from "rollup-plugin-visualizer";  
/** Theme **/

// VuePress default theme
// import { defaultTheme } from '@vuepress/theme-default' 

import theme from './plume.config'

/**********/

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
// import { markdownPowerPlugin } from 'vuepress-plugin-md-power'
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
    // markdownPowerPlugin({
    //   icons: true,
    // }),  
  ],

  alias: {
    // '@VCard': path.resolve(__dirname, 'components/VCard.vue'),
    '@MobiusTitleCard': path.resolve(__dirname, 'components/MobiusTitleCard.vue'),
    '@unswUpdating': path.resolve(__dirname, 'components/unswUpdating.vue'),
    '@HSelect': path.resolve(__dirname, 'components/HSelect.vue'),
    '@HMoodleLink': path.resolve(__dirname, 'components/HMoodleLink.vue'),
  },

  // 全局注册：https://theme-hope.vuejs.press/zh/guide/component/global.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C-vue-%E7%BB%84%E4%BB%B6

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        visualizer({  
          open: false, // 注意这里要设置为true，否则无效  
          gzipSize: true, // 分析图生成的文件名  
          brotliSize: true, // 收集 brotli 大小并将其显示  
          filename: "stats.html", // 分析图生成的文件名  
        }),
      ],

      build: {
        rollupOptions: {
          output: {
            // manualChunks(id: string) { // not work
            //   if (id.indexOf('node_modules') !== -1) {
            //     const basic = id.toString().split('node_modules/')[1];
            //     const sub1 = basic.split('/')[0];
            //     if (sub1 !== '.pnpm') {
            //       return sub1.toString();
            //     }
            //     const name2 = basic.split('/')[1];
            //     return name2.split('@')[name2[0] === '@' ? 1 : 0].toString();
            //   }
            // },
          },
        },
      }
    },
  }),
});