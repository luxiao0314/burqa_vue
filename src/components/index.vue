<template>
  <div class="index">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="今日">
          <news-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <novel-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="书架">
          <comic-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine-page/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="今日">
        <img slot="icon" src="../assets/img/ic_main_favorite_selected.png"> 今日
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/img/ic_main_category_selected.png"> 发现
      </mt-tab-item>
      <mt-tab-item id="书架">
        <img slot="icon" src="../assets/img/ic_main_recommend_selected.png"> 书架
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/img/ic_main_schedule_selected.png"> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import ComicPage from "@/components/comic/comic-page";
import NewsPage from "@/components/news/news-page";
import NovelPage from "@/components/novel/novel-page";
import MinePage from "@/components/mine/mine-page";
export default {
  components: {
    ComicPage,
    NewsPage,
    NovelPage,
    MinePage
  },
  name: "index",
  data() {
    return {
      selected: "发现"
    };
  }
};
</script>

<style>
.index {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>