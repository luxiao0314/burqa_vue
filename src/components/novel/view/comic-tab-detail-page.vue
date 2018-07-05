<template>
    <div>
        <div class="des">{{this.des()}}</div>
        <div class="num">
            <div class="num-value">
                <div class="num-color">4125</div>
                <div class="text-color">热度值</div>
            </div>
            <div class="num-value">
                <div class="num-color">4125</div>
                <div class="text-color">收藏量</div>
            </div>
            <div class="num-value">
                <div class="num-color">4125</div>
                <div class="text-color">本月月票</div>
            </div>
        </div>
        <cross-line/>

        <div class="comment-title">
            <div class="comment-left">精彩评论</div>
            <div class="comment-right">全部111111条</div>
        </div>

        <div class="comment">
            <comment-item v-for="(item,index) in 10" :key="index"/>
        </div>
    </div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";
import CommentItem from "@/components/novel/view/comment-item";
export default {
  components: {
    CrossLine,
    CommentItem
  },
  props: {
    data: Object
  },
  methods: {
    des() {
      return (
        "作品简介:" + "【" + this.data.cate_id + "】" + this.data.description
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.des {
  margin-top: 10px;
  font-size: 12px;
}
.num {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  .num-value {
    text-align: center;
    width: 33%;
  }
  .num-color {
    color: aquamarine;
    font-size: 12px;
  }
  .text-color {
    color: gray;
    font-size: 10px;
  }
}
.comment-title {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  .comment-left {
    flex: 1;
    font-size: 14px;
  }
  .comment-right {
    font-size: 12px;
    color: gray;
  }
}
.comment{
     display: flex;
  flex-direction: row;
}
</style>


