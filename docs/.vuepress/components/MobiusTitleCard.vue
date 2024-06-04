<template>
  <a :href="src">{{ title }}</a>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Mobius'
    },
    src: {
      type: String,
      default: './'
    },
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