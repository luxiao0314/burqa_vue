<template>
  <div>
    <div class="rank-list-item" @click="click">
      <div class="left"><img :src="data.cover" /></div>
      <div class="right">
        <div class="title">{{data.name}}</div>
        <div class="des">{{data.short_description}}</div>
        <div class="tags">{{this.getTags(data.tags)}}</div>
      </div>
      <div class="rank">{{data.comic_id}}</div>
    </div>
    <cross-line></cross-line>
  </div>
</template>

<script>
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
    click() {
      this.$emit("itemClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.rank-list-item {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  overflow: hidden;
  .left {
    flex: 0 0 90px;
    width: 90px;
    img {
      width: 70px;
      margin-left: 15px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title {
      margin-top: 5px;
      font-size: 12px;
      flex: 1;
      display: flex;
      flex-direction: row;
    }
    .des {
      font-size: 10px;
      flex: 1;
      color: gray;
      display: flex;
      margin-bottom: 20px;
    }
    .tags {
      font-size: 10px;
      flex: 1;
      color: gray;
      display: flex;
    }
  }
  .rank {
    color: lightgray;
    font-size: 20px;
    margin-top: 40px;
    margin-right: 20px;
  }
}
</style>



