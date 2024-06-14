import './styles/Style.scss'

import { defineClientConfig } from 'vuepress/client'

import HButton from './components/HButton.vue'
import HLink from './components/HLink.vue'
import HGlobalLink from './components/HGlobalLink.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('HButton', HButton);
    app.component('HLink', HLink);
    app.component('HGlobalLink', HGlobalLink);
  },
  setup() {},
  rootComponents: [],
})