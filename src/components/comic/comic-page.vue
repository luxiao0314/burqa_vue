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
        <mt-cell v-for="n in 4" :title="'更新 ' + n" key="n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" key="n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :title="'排行 ' + n" key="n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="5">
        <mt-cell v-for="n in 6" :title="'排行 ' + n" key="n"/>
        <!-- <subject-page/> -->
    </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import RecommendPage from "@/components/comic/recommend-page";
// import SubjectPage from "@/components/comic/subject-page";
import { Navbar, TabItem } from "mint-ui";
export default {
  components: {
    RecommendPage,
    // SubjectPage
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>