<template>
  <!--https://iconify.design/docs/icon-components/vue/-->
  <a :href="src" target="_blank" style="display: inline-flex;">
    <Icon :icon="autoIcon" style="margin-right: 7px; font-size: 18px;" />
    <text>{{ title }}</text>
  </a>
</template>


<script setup>
import { Icon } from '@iconify/vue';
</script>

<script>
export default {
  props: {
    /**
     * @type {'link' | 'pdf' | 'zip'}
     * @default 'link'
     */
    type: {
      type: String,
      default: 'link'
    },
    title: {
      type: String,
      default: 'Link'
    },
    src: {
      type: String,
      default: undefined
    }
  },
  computed: {
    autoIcon() {
      switch (this.type) {
        case 'pdf':   return 'grommet-icons:document-pdf'
        case 'zip':   return 'hugeicons:file-zip'
        case 'ppt':
        case 'pptx':  return 'grommet-icons:document-ppt'
        case 'doc':
        case 'docx':  return 'grommet-icons:document-word'
        case 'xls':
        case 'xlsx':  return 'grommet-icons:document-excel'
        case 'link':
        default:      return 'lucide:link'
      }
    }
  }
}
</script>

<style scoped lang="scss">
a {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color var(--t-color), opacity var(--t-color), text-underline-offset var(--t-color);
}
a:hover {
    color: var(--vp-c-brand-2);
    text-underline-offset: 5px;
}
</style>