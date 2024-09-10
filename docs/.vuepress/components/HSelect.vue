<template>
  <select>
    <!-- If no option is selected, show the unchecked option -->
    <option 
      v-if="!anySelected" 
      disabled 
      selected>
      [ unchecked ]
    </option>

    <option
      v-for="value in values"
      :value="(value as any).label"
      :selected="(value as any).selected">
      {{ (value as any).label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
    /**
     * Checks if any value is selected
     */
    anySelected(): boolean {
      return this.values.some((value: { selected: any; }) => value.selected);
    }
  }
})

</script>

<style scoped lang="scss">
select {
  appearance: auto; /* 恢复默认样式 */
}
</style>