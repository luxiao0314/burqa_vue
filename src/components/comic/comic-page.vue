<template>
  <div class="comic-page">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">收藏</mt-tab-item>
        <mt-tab-item id="2">书单</mt-tab-item>
        <mt-tab-item id="3">历史</mt-tab-item>
        <mt-tab-item id="4">下载</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"><recommend-page/></mt-tab-container-item>
      <mt-tab-container-item id="2"><update-page/></mt-tab-container-item>
      <mt-tab-container-item id="3"><classify-page/></mt-tab-container-item>
      <mt-tab-container-item id="4"><rank-page/></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import RecommendPage from "@/components/comic/recommend-page";
import UpdatePage from "@/components/comic/update-page";
import ClassifyPage from "@/components/comic/classify-page";
import RankPage from "@/components/comic/rank-page";
import { Navbar, TabItem } from "mint-ui";
export default {
  components: {
    RecommendPage,
    UpdatePage,
    ClassifyPage,
    RankPage
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>