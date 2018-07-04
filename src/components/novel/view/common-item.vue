<template>
  <div class="types-item">
    <img :src="data.cover" class="works-img" @click="click">
    <span class="title-span">{{data.name}}</span>
    <div class="des-span">{{this.getTags(data.tags)}}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      datas:this.data
    };
  },
  methods: {
    getTags(tags) {
      var tag_tags = "";
      if (tags != null) {
        tags.forEach(element => {
          tag_tags += element + " ";
        });
      }
      return tag_tags;
    },
    click() {
      this.$emit('itemClick')
    }
  }
};
</script>

<style lang="scss" scoped>
//因为没有填scoped私有化的问题,导致width: 50%;没作用
.types-item {
  background-color: white;
  float: left;
  width: 100%;
  .works-img {
    display: block;
    width: 100%;
    margin: 2px;
  }
  .title-span {
    padding: 5px;
    display: block;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    color: #2f2f2f;
  }
  .des-span {
    padding-left: 5px;
    padding-bottom: 5px;
    display: block;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    color: gray;
  }
}
</style>


