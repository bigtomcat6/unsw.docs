<template>

123


</template>

<script setup>
import axios from 'axios';
import yaml from 'js-yaml';

try {
  const file = await axios.get('/HGlobalLink.yaml');
  const data = yaml.load(file.data);
  console.log(data);
} catch (e) {
  console.log(e);
}
</script>

<script>

export default {
  
}

</script>