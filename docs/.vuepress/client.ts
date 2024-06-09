import './styles/Style.scss'

import { defineClientConfig } from 'vuepress/client'

import HButton from './components/HButton.vue'
import HLink from './components/HLink.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('HButton', HButton);
    app.component('HLink', HLink);
  },
  setup() {},
  rootComponents: [],
})