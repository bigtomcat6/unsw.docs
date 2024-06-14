<template>
  <HLink :type="type" :title="titleL" :src="src" />
</template>

<script>
import axios from 'axios';
import yaml from 'js-yaml';

export default {
  props: {
    md5: {
      type: String,
      default: undefined
    },
    title: {
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
    async loadData() {
      const file = await axios.get('/HGlobalLink.yaml');
      const data = yaml.load(file.data);
      // console.log(data);
      
      if (!this.md5) {
        this.title = 'ERROR';
        return;
      }

      const found = data.links.find(link => link.md5 === this.md5);
      // console.log(found);
      if (found) {
        if (!this.title)  this.titleL = found.title;
        else              this.titleL = this.title;
        
        this.type = found.type;
        this.src = data.globalLink + found.src;
      } else {
        this.title = 'ERROR';
      }
    }
  }
}

</script>