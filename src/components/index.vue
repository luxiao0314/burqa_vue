<template>
  <div class="index">
    <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>

        <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell :title="餐厅" />
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell :title="订单" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell :title="发现" />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell :title="我的" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="漫画">
        <img slot="icon" src="../assets/ic_main_recommend_selected.png">
        漫画
      </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" src="../assets/ic_main_favorite_selected.png">
        新闻
      </mt-tab-item>
      <mt-tab-item id="轻小说">
        <img slot="icon" src="../assets/ic_main_category_selected.png">
        轻小说
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/ic_main_schedule_selected.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
import { Cell } from "mint-ui";

export default {
  name: "index",
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>
