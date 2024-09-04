<template>
  <!--内链-->
  <RouteLink v-if="isRouter" :to="src">
    <img v-if="img" :src="img" style="margin-right: 7px;">
    <Icon v-if="icon" :icon="icon" style="margin-right: 7px; font-size: 17px;" /> <!--https://iconify.design/docs/icon-components/vue/-->
    <slot></slot>
  </RouteLink>

  <!--外链-->
  <a v-else :href="src" :target="autoTarget">
    <img v-if="img" :src="img" style="margin-right: 7px;">
    <Icon v-if="icon" :icon="icon" style="margin-right: 7px; font-size: 17px;" /> <!--https://iconify.design/docs/icon-components/vue/-->
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    src: {
      type: String,
      default: undefined,
    },
    img: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    }
  },
  computed: {
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
    },
  }
})


</script>

<style scoped lang="scss">
a {
  font-size: 15px;
  line-height: 38px;
  border-radius: 15px;

  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;

  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}


img {
  width: 17px;
  height: 17px;
}
</style>