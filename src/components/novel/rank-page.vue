<template>
    <div class="bg">
        <header-bar text="发现"></header-bar>
        <div class="title-tab">
            <div class="rank">排行榜</div>
            <div class="period">
                <mt-button size="small" type="btnType" class="button">总</mt-button>
                <mt-button size="small" type="btnType" class="button">月</mt-button>
                <mt-button size="small" type="btnType" class="button">周</mt-button>
            </div>
        </div>

    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">圣殿榜</mt-tab-item>
            <mt-tab-item id="2">成长榜</mt-tab-item>
            <mt-tab-item id="3">订阅榜</mt-tab-item>
            <mt-tab-item id="4">新作榜</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1"><temple-page/></mt-tab-container-item>
        <mt-tab-container-item id="2"><growth-page/></mt-tab-container-item>
        <mt-tab-container-item id="3"><subscribe-page/></mt-tab-container-item>
        <mt-tab-container-item id="4"><new-work-page/></mt-tab-container-item>
        </mt-tab-container>
    </div>
        
    </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import TemplePage from "@/components/novel/temple-page";
import GrowthPage from "@/components/novel/growth-page";
import SubscribePage from "@/components/novel/subscribe-page";
import NewWorkPage from "@/components/novel/new-work-page";
import { Button } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
export default {
  components: {
    HeaderBar,
    SubscribePage,
    GrowthPage,
    TemplePage,
    NewWorkPage
  },
  data() {
    return {
      btnType: "default",
      selected: "1"
    };
  }
};
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  .title-tab {
    padding: 10px;
    display: flex;
    flex-direction: row;
    .rank {
      vertical-align: middle;
      flex: 1;
      font-size: 18px;
      font-weight: bold;
    }
    .period {
      display: flex;
      flex-direction: row;
    }
    .button {
      font-size: 10px;
      margin: 5px;
      border-radius: 10px;
      height: 20px;
    }
  }
}
</style>


