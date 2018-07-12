<template>
  <div class="types-item">
    <img :src="getImgUrl()" class="works-img" @click="click">
    <span class="title-span">{{data.name}}</span>
    <span class="des-span">{{this.getTags(data)}}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    getTags(data) {
      var tag_tags = "";
      if (data.tags == null) {
        tag_tags = data.short_description;
      } else {
        data.tags.forEach(element => {
          tag_tags += element + " ";
        });
      }
      return tag_tags;
    },
    click() {
      this.$emit("itemClick");
    },
    getImgUrl() {
      if (this.data.cover == null) {
        return this.data.coverUrl;
      } else {
        return this.data.cover;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
//因为没有填scoped私有化的问题,导致width: 50%;没作用
.types-item {
  background-color: white;
  float: left;
  width: 33%;
  .works-img {
    border: 1px solid lightgray;
    display: block;
    width: 100%;
    margin: 2px;
  }
  .title-span {
    overflow: hidden;
    padding: 5px;
    font-size: 12px;
    white-space: nowrap;
    line-height: 12px;
    text-align: left;
    color: #2f2f2f;
  }
  .des-span {
    overflow: hidden;
    white-space: nowrap;
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


