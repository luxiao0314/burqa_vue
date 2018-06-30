<template>
  <div class="subject-item">
    <img v-lazy="data.cover" class="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.subject-item {
  width: 100%;
  flex-direction: row;
}
.img {
  height: 400px;
}
</style>



