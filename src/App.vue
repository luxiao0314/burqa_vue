<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
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
