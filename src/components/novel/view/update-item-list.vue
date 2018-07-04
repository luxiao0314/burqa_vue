<template>
    <div>
        <div class="news-list-item">
            <div class="left"><img :src="data.cover" /></div>
            <div class="right">
                <div class="title">{{data.name}}</div>
                <div class="tags">{{this.getTags(data)}}</div>
                <div class="des">{{data.description}}</div>
                <div class="time">{{data.conTag}}</div>
            </div>
        </div>
        <cross-line></cross-line>
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
    getTags(data) {
      var tag_tags = "";
      data.tags.forEach(element => {
        tag_tags += element + " ";
      });
      return tag_tags + " | " + data.author;
    }
  }
};
</script>

<style lang="scss">
.news-list-item {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  overflow: hidden;
  .left {
    width: 100px;
    img {
      display: block;
      width: 80px;
      margin: 0 auto;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 10px;
    }
    .tags {
      color: gray;
      margin-top: 5px;
      font-size: 8px;
    }
    .des {
      color: gray;
      flex: 1;
      line-height: 1.5;
      margin-top: 5px;
      margin-right: 15px;
      text-overflow: ellipsis;
      font-size: 8px;
    }
    .time {
      color: red;
      margin-top: 5px;
      font-size: 8px;
    }
  }
}
</style>



