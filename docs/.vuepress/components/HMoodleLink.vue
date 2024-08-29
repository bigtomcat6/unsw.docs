<template>
  <HBaseLink :src="autoSrc" :img="undefined" :icon="autoIcon">
    {{ title }}
  </HBaseLink>
</template>

<script setup>
import HBaseLink from './base/HBaseLink.vue';
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
    },
    autoSrc() {
      if (this.src !== undefined) {
        return this.src
      } else if (this.type === 'Menu') {
        return (this.$route.path + '#' + this.title.toLowerCase().replaceAll(' ', '-'))
      } else {
        return './'
      }
    },
  }
}
</script>

<style scoped lang="scss">
a:hover {
    color: var(--vp-c-brand-2);
    text-underline-offset: 5px;
}
</style>