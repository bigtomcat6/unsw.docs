<template>
  <HBaseLink :src="autoSrc" :img="undefined" :icon="autoIcon">
    <slot></slot>
  </HBaseLink>
</template>

<script setup lang="ts">
import HBaseLink from './base/HBaseLink.vue';
</script>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
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
    }
  },
  computed: {
    autoIcon() {
      switch (this.type) {
        case 'forum':   return 'lets-icons:chat-alt-2-duotone-line'
        case 'link':
        default:      return 'pepicons-pop:internet'
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
})
</script>

<style scoped lang="scss">
a:hover {
    color: var(--vp-c-brand-2);
    text-underline-offset: 5px;
}
</style>