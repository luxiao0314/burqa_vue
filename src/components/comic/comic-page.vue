<template>
  <div class="comic-page">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">更新</mt-tab-item>
        <mt-tab-item id="3">分类</mt-tab-item>
        <mt-tab-item id="4">排行</mt-tab-item>
        <mt-tab-item id="5">专题</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
          <recommend-page/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
          <update-page/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
          <classify-page/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
          <rank-page/>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
          <subject-page/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import RecommendPage from "@/components/comic/recommend-page";
import SubjectPage from "@/components/comic/subject-page";
import UpdatePage from "@/components/comic/update-page";
import ClassifyPage from "@/components/comic/classify-page";
import RankPage from "@/components/comic/rank-page";
import { Navbar, TabItem } from "mint-ui";
export default {
  components: {
    RecommendPage,
    SubjectPage,
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