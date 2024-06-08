<template>
  <!--内链-->
  <RouteLink v-if="isRouter" :to="autoSrc" :class="theme">
    <img v-if="img" :src="img" style="margin-right: 7px;">
    <Icon v-if="icon" :icon="icon" style="margin-right: 7px; font-size: 18px;" /> <!--https://iconify.design/docs/icon-components/vue/-->
    {{ title }}
  </RouteLink>

  <!--外链-->
  <a v-else :class="theme" :href="autoSrc" :target="autoTarget">
    <img v-if="img" :src="img" style="margin-right: 7px;">
    <Icon v-if="icon" :icon="icon" style="margin-right: 7px; font-size: 18px;" /> <!--https://iconify.design/docs/icon-components/vue/-->
    {{ title }}
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<script>

export default {
  props: {
    /**
     * @type {'Menu' | 'Link'}
     * @default 'Menu'
     */
    type: {
      type: String,
      default: 'Menu'
    },

    /**
     *  @type {'brand' | 'alt'}
     */
    theme: {
      type: String,
      default: 'brand'
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
    autoTarget() {
      if (this.src && this.src.startsWith('http')) {
        return '_blank'
      } else {
        return ''
      }
    },
    isRouter() {
      if (this.src && this.src.startsWith('http'))
        return false
      else
        return true
    }
  }
}
</script>

<style scoped>
a {
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);

  padding: 0 20px;
  font-size: 15px;
  line-height: 38px;
  border-radius: 15px;

  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  transition: var(--t-color);
  transition-property: border, color, background-color;

  text-decoration: none;

  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

}
.alt {
  color: var(--vp-button-alt-text);
  background-color: var(--vp-code-bg);
  border-color: var(--vp-button-alt-border);
}
</style>