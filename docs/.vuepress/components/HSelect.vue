<template>
  <select>
    <option v-for="value in values" :value="value.label" :selected="value.selected | false">{{ value.label }}</option>
  </select>
</template>

<script>

export default {
  props: {
    /**
     * @type {'Mobius'}
     * @default 'Mobius'
     */
    type: {
      type: String,
      default: 'Mobius'
    },

    /**
     * @type [{
     *  label: string,
     *  selected?: boolean
     * }]
     */
    values: {
      type: Array,
      default: [
        {label: 'A'},
      ]
    }
  },
  computed: {

  }
}

</script>