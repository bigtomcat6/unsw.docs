<template>
  <HBaseLink :class="setClassType" :src="autoSrc" :img="img" :icon="icon">
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
     * @type {'Menu' | 'Link'}
     * @default 'Link'
     */
    type: {
      type: String,
      default: 'Link'
    },

    /**
     *  @type {'brand' | 'alt'}
     */
    theme: {
      type: String,
      default: 'brand'
    },
    alt: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'First'
    },
    src: {
      type: String,
      default: undefined
    },
    img: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  },
  computed: {
    autoSrc() {
      if (this.src !== undefined) {
        return this.src
      } else if (this.type === 'Menu') {
        return (this.$route.path + '#' + this.title.toLowerCase().replaceAll(' ', '-'))
      } else {
        return './'
      }
    },
    setClassType() {
      if (this.alt || this.theme == 'alt')  return 'alt'
      else  'brand'
    }
  }
}
</script>

<style scoped lang="scss">
.alt {
  color: var(--vp-button-alt-text);
  background-color: var(--vp-code-bg);
  border-color: var(--vp-button-alt-border);
}

// .plume-content:not(h1, h2, h3, h4, h5, h6) /*修复主题style冲突*/
// .alt:hover {
//   color: var(--vp-button-alt-hover-text);
//   background-color: var(--vp-button-alt-hover-bg);
//   border-color: var(--vp-button-alt-hover-border);
// }

.plume-content:not(h1, h2, h3, h4, h5, h6) /*修复主题style冲突*/
a:active {
    color: var(--vp-button-brand-active-text);
    background-color: var(--vp-button-brand-active-bg);
    border-color: var(--vp-button-brand-active-border);
}

// .plume-content:not(h1, h2, h3, h4, h5, h6) /*修复主题style冲突*/
// .alt:active {
//     color: var(--vp-button-alt-active-text);
//     background-color: var(--vp-button-alt-active-bg);
//     border-color: var(--vp-button-alt-active-border);
// }


</style>