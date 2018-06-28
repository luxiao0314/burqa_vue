<template>
  <div class="indexindex">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <comic-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + n" key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我的 ' + n" key="n"/>
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
          <img slot="icon" src="../assets/ic_main_recommend_selected.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
          <img slot="icon" src="../assets/ic_main_favorite_selected.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
          <img slot="icon" src="../assets/ic_main_category_selected.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
          <img slot="icon" src="../assets/ic_main_schedule_selected.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import ComicPage from '@/components/comic/comic-page'
export default {
  components:{
    ComicPage
  },
  name: "index",
  data() {
    return {
      selected: "外卖"
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