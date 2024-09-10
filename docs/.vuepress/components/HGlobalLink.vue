<template>
  <HBaseLink v-if="HMoodleLinkIcon" :src="src || ''" :img="HMoodleLinkIcon">{{ titleL }}</HBaseLink>
  <HLink v-else :type="type" :title="titleL" :src="src" />
</template>

<script setup lang="ts">
import HBaseLink from './base/HBaseLink.vue';
</script>

<script lang="ts">
import axios from 'axios';
import yaml from 'js-yaml';

import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    md5: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    noneIcon: {
      type: Boolean,
      default: false
    },
    HMoodleLinkIcon: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      titleL: null,
      type: null,
      src: null,
    };
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async getFile() {
      try {
        const res = await axios.get('/HGlobalLink.yaml');
        return res;
      } catch (error) {
        // console.error(error);
        return null;
      }
    },
    async loadData() {
      const file = await this.getFile();
      
      if (!file || !file.data) {
        return;
      }

      const data = yaml.load(file.data);
      // console.log(data);
      
      if (!data) {
        this.title = 'ERROR';
        return;
      }

      const found = data.links.find(link => link.md5 === this.md5);
      // console.log(found);
      if (found) {
        if (!this.title)  this.titleL = found.title;
        else              this.titleL = this.title;
        
        if (this.noneIcon) this.type = 'none';
        else               this.type = found.type;
        
        this.src = data.globalLink + found.src;
      } else {
        this.titleL = 'ERROR';
      }
    }
  }
})

</script>