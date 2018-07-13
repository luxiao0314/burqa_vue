<template>
  <div>
    <div class="des">{{this.des()}}</div>
    <div class="num">
      <div class="num-value">
        <div class="num-color">317</div>
        <div class="text-color">热度值</div>
      </div>
      <div class="num-value">
        <div class="num-color">4200</div>
        <div class="text-color">收藏量</div>
      </div>
      <div class="num-value">
        <div class="num-color">5000</div>
        <div class="text-color">本月月票</div>
      </div>
    </div>

    <cross-line/>

    <div class="comment-title">
      <div class="comment-left">精彩评论</div>
      <div class="comment-right" @click="pushToComment()">全部{{pageCount}}条</div>
    </div>

    <div class="bscroll" ref="bscroll">
      <div class="bscroll-container">
        <comment-item v-for="(item,index) in commentList" :key="index" :data="item" />
        <div v-if="commentCount=='0'" class="no-comment">暂无评论</div>
      </div>
    </div>

    <div class="write-comment">写评论</div>

    <cross-line/>

    <div class="guess">猜你喜欢</div>

    <common-item-count v-for="(item,index) in comics" :data="item" :key="index" @itemClick="push(item.comic_id)" />
  </div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";
import CommentItem from "@/components/novel/view/comment-item";
import BScroll from "better-scroll";
import CommonItemCount from "@/components/novel/view/common-item-count";
export default {
  components: {
    CrossLine,
    CommentItem,
    BScroll,
    CommonItemCount
  },
  props: {
    comicdata: null
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;
      this.aBScroll = new BScroll(bscrollDom, {});
    });
  },
  data() {
    return {
      comics: [],
      commentList: [],
      commentCount: "0",
      pageCount: 0
    };
  },
  watch: {
    //观察数据变化之后,在做请求
    comicdata: function(newVal, oldVal) {
      this.comicdata = newVal; //newVal即是chartData
      this.getData();
      this.getCommentData();
    }
  },
  methods: {
    des() {
      return (
        "作品简介:" +
        "【" +
        this.comicdata.cate_id +
        "】" +
        this.comicdata.description
      );
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/comic/guessLike", {
        comicid: this.comicdata.comic_id + ""
      }).then(res => {
        res.returnData.comics.forEach(element => {
          if (this.comics.length <= 2) {
            this.comics.push(element);
          }
        });
      });
    },
    getCommentData() {
      this.get("v3/appV3_3/ios/phone/comment/list?argCon=2&page=1", {
        object_id: this.comicdata.comic_id + "",
        thread_id: this.comicdata.thread_id + ""
      }).then(res => {
        this.commentList = res.returnData.commentList;
        this.commentCount = res.returnData.commentCount;
        this.pageCount = res.returnData.pageCount;
      });
    },
    push(comicId) {
      // this.$router.go(0)
      this.$root.eventHub.$emit('refresh', comicId);
    },
    pushToComment(){
      this.$router.push({
        path: "/comment-page",
        query: { comicdata: this.comicdata,argCon:"2" }
      }); //comicId为int类型.直接传递为空
    }
  }
};
</script>

<style lang="scss" scoped>
.bscroll {
  width: 100%;
  height: 20vh;
  overflow: hidden;
  .no-comment {
    font-size: 14px;
    text-align: center;
  }
}
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
.comment {
  display: flex;
  flex-direction: row;
}
.write-comment {
  padding: 10px;
  font-size: 12px;
  color: aquamarine;
  text-align: center;
}
.guess {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
}
</style>


