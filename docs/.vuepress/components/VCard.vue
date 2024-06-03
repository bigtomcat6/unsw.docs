<template>
  {{ data }}
</template>


<script>
export default {
  props: {
    data: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>