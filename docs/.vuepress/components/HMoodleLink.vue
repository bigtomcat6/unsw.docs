<template>
  <HGlobalLink v-if="md5" :title="titleFromSlot" :md5="md5" :HMoodleLinkIcon="autoImg"/>
  <HBaseLink v-else :src="autoSrc" :img="autoImg" :icon="autoIcon">
    <slot></slot>
  </HBaseLink>
</template>

<script setup lang="ts">
import HBaseLink from './base/HBaseLink.vue';
</script>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import HGlobalLink from './HGlobalLink.vue';
export default defineComponent({
  data() {
    return {
      titleFromSlot: '',
    }
  },
  props: {
    /**
     * @type {'link' | 'pdf' | 'zip'}
     * @default 'link'
     */
    type: {
      type: String as PropType<'forum' | 'link'>,
      default: 'link',
      validator: (value: string) => ['forum', 'page', 'link'].includes(value)
    },
    title: {
      type: String,
      default: 'Link'
    },
    src: {
      type: String,
      default: undefined,
    },
    md5: {
      type: String,
      default: undefined,
    }
  },
  computed: {
    autoIcon() {
      if (this.ImgMethod()) return;

      switch (this.type) {
        case 'forum':   return 'solar:chat-line-linear'
        case 'page':    return 'iconoir:page'
        case 'link':
        default:      return 'pepicons-pop:internet'
      }
    },
    autoImg() {
      return this.ImgMethod();
    },
    autoSrc() {
      if (this.src !== undefined) {
        return this.src
      } else if (this.type === 'Menu') {
        return (this.$route.path + '#' + this.title.toLowerCase().replaceAll(' ', '-'))
      } else {
        return './'
      }
    }
  },
  mounted() {
    this.checkSlot()
  },
  methods: {
    ImgMethod() {
      switch (this.type) {
        case 'pdf':         return '/moodleIcon/pdf-24.png'
        case 'avi':         return '/moodleIcon/avi-24.png'
        case 'McGrawHill':  return '/moodleIcon/mhe-logo.svg'
        case 'edstem':      return '/moodleIcon/edstemstrfavicon-64x64.e314354e.png'
        case 'asc':         return '/moodleIcon/sourcecode-24.png'
      }
      return null
    },
    checkSlot() {
      this.titleFromSlot = this.$slots.default?.()[0].children
    }
  }
})
</script>

<style scoped lang="scss">
a:hover {
    color: var(--vp-c-brand-2);
    text-underline-offset: 5px;
}
</style>