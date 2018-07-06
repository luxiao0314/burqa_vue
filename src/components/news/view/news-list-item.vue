<template>
  <div class="news-list-item">
    <div class="left"><img :src="data.cover" /></div>
    <div class="right">
      <div class="title">{{data.name}}</div>
      <div class="tags">{{this.getTags(data.tags)}}</div>
      <cross-line></cross-line>
    </div>
    <mt-button type="primary" size="small" class="button" @click="click">
      阅读漫画
    </mt-button>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import CrossLine from "@/components/widget/cross-line";
export default {
  components: {
    CrossLine
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    getTags(tags) {
      var tag_tags = "";
      tags.forEach(element => {
        tag_tags += element + " ";
      });
      return tag_tags;
    },
    click(){
      this.$emit('itemClick')
    }
  }
};
</script>

<style lang="scss">
.news-list-item {
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  overflow: hidden;
  .left {
    flex: 0 0 90px;
    width: 90px;
    img {
      border-radius: 5px;
      display: block;
      width: 70px;
      margin: 0 auto;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title {
      margin-top: 15px;
      font-weight: bold;
      font-size: 12px;
      flex: 1;
      display: flex;
      flex-direction: row;
    }
    .tags {
      font-size: 10px;
      flex: 1;
      display: flex;
      margin-bottom: 20px;
      flex-direction: row;
    }
  }
  .button {
    border-radius: 20px;
    top: 30px;
    height: 25px;
    font-size: 12px;
    right: 20px;
  }
}
</style>



