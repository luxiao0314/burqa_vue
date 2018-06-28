<template>
  <div class="comic-page">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
        <recommend-page/>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" key="n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" key="n"/>
    </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import RecommendPage from "@/components/comic/recommend-page";
import { Navbar, TabItem } from "mint-ui";
export default {
  components: {
    RecommendPage
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>