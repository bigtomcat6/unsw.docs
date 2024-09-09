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
      validator: (value: string) => ['forum', 'link'].includes(value)
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
      switch (this.type) {
        case 'forum':   return 'lets-icons:chat-alt-2-duotone-line'
        case 'page':    return 'iconoir:page'
        /***/
        case 'pdf':     return undefined
        /***/
        case 'link':
        default:      return 'pepicons-pop:internet'
      }
    },
    autoImg() {
      switch (this.type) {
        case 'pdf':   return '/moodleIcon/pdf-24.png'
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
    }
  },
  mounted() {
    this.checkSlot()
  },
  methods: {
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