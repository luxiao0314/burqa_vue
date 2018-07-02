<template>
    <div class="bg">
        <header-bar text="发现"></header-bar>
        <div class="title-tab">
            <div class="rank">排行榜</div>
            <div class="period">
                <mt-button size="small" :type="btnType" class="button">总</mt-button>
                <mt-button size="small" :type="btnType" class="button">月</mt-button>
                <mt-button size="small" :type="btnType" class="button">周</mt-button>
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
                <mt-tab-container-item id="1">
                    <temple-page :type="2"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <temple-page :type="18"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <temple-page :type="21"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <temple-page :type="19"/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import TemplePage from "@/components/novel/temple-page";
import { Button } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";

export default {
  components: {
    HeaderBar,
    TemplePage,
  },
  data() {
    return {
      btnType: "primary", //default,danger,primary
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


