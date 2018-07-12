<template>
    <div class="bg">
        <header-bar text="评论"></header-bar>
        <van-pull-refresh v-model="refresh" @refresh="onRefresh" class="refresh">
            <van-list v-model="loading" :finished="finished" @load="onLoad">
                <comment-item v-for="(item,index) in commentList" :key="index" :data="item" class="comment"/>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { List, PullRefresh } from "vant";
import HeaderBar from "@/components/widget/header-bar";
import CommentItem from "@/components/novel/view/comment-item";
export default {
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    CommentItem,
    HeaderBar
  },
  data() {
    return {
      refresh: false,
      loading: false,
      finished: false,
      page: 1,
      commentList: [],
      argCon: this.$route.query.argCon,
      comicdata: this.$route.query.comicdata
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onRefresh() {
      this.refresh = true;
      this.page = 1;
      this.getData();
    },
    onLoad() {
      this.loading = true;
      this.page++;
      this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/comment/list", {
        object_id: this.comicdata.comic_id + "",
        thread_id: this.comicdata.thread_id + "",
        page: this.page,
        argCon: this.argCon
      }).then(res => {
        this.refresh = false;
        this.loading = false;
        if (res.returnData != null && res.returnData.commentList.length != 0) {
          if (this.refresh) {
            this.commentList = res.returnData.commentList;
          } else {
            this.commentList.splice(
              this.commentList.length,
              0,
              ...res.returnData.commentList
            );
          }
        } else {
          this.finished = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: white;
  .refresh {
    margin-top: 35px;
  }
  .works-title-item {
    padding: 10px;
    display: flex;
    flex-direction: row;
    .works-title {
      flex: 1;
      text-align: center;
    }
    .works-des {
      color: gray;
      font-size: 12px;
      float: right;
    }
  }
  .comment{
      margin-left: 10px;
      margin-right: 10px;
  }
}
</style>

