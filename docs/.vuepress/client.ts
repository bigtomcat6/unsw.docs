import './styles/Style.scss'

import { defineClientConfig } from 'vuepress/client'

import HButton from './components/HButton.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('HButton', HButton)
  },
  setup() {},
  rootComponents: [],
})