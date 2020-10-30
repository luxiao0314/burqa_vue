<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isIos: false,
      transitionName: ""
    };
  },
  create() {},
  mounted() {
    this.getDevice();
  },
  methods: {
    getDevice() {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        this.isIos = true;
      }
    }
  },
};
</script>

<style>
body {
  background-color: #ebebeb;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
