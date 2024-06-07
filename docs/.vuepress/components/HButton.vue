<template>
  <a :href="autoSrc">{{ title }}</a>
</template>


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
    title: {
      type: String,
      default: 'First'
    },
    src: {
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
}
</style>