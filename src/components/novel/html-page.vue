<template>
    <div>
        <v-html-panel :url.asyc="url1"></v-html-panel>
        <v-html-panel :url.asyc="url2"></v-html-panel>
    </div>
</template>
<style scoped>
div {
  color: red;
}
</style>
<script>
import VHtmlPanel from "@/components/widget/v-html-panel";
export default {
  components: {
    VHtmlPanel
  },
  data() {
    return {
      url1: "",
      url2: ""
    };
  },
  mounted() {
    this.url1 = "http://www.u17.com/z/zt/2018_bjtj_706/index.html";
    this.url2 = "http://www.u17.com/z/zt/2018_bjtj_706/index.html";
  },
  methods: {}
};
</script>