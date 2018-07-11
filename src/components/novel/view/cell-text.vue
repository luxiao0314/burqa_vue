<template>
  <a :href="url+chapter.chapter_id+'.html'">
    <div class="cell-item">
      <span class="title-span">{{chapter.name}}</span>
      <span class="vip-span">vip</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    chapter: Object
  },
  methods: {
    click() {
      this.$toast(this.chapter.chapter_id);
    }
  },
  data() {
    return {
      url: "http://m.u17.com/r/"
    };
  }
};
</script>

<style lang="scss" scoped>
//因为没有填scoped私有化的问题,导致width: 50%;没作用
.cell-item {
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  margin: 5px;
  float: left;
  width: 46%;
  .title-span {
    width: 30px;
    text-overflow: ellipsis;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    font-size: 10px;
    color: #2f2f2f;
  }
  .vip-span {
    background: lightgray;
    border-radius: 10px;
    margin: 5px;
    padding-left: 5px;
    color: white;
    padding-right: 5px;
    font-size: 10px;
  }
}
</style>


