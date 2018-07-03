<template>
    <div class="bg">
        <header-bar text="发现"></header-bar>
        <van-pull-refresh v-model="refresh" @refresh="onRefresh">
            <div v-for="(item,index) in newVipList">
                <div class="works-title-item">
                    <div class="works-title">{{item.itemTitle}}</div>
                    <div class="works-des">{{item.description}}
                        <i class="iconfont icon-more" v-if="item.description!=''"></i>
                    </div>
                </div>
                <div v-for="(subItem,index) in item.comics">
                    <common-item-count :data="subItem" />
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
import { List, PullRefresh } from "vant";
import HeaderBar from "@/components/widget/header-bar";
import CommonItemCount from "@/components/novel/view/common-item-count";
export default {
  components: {
    [PullRefresh.name]: PullRefresh,
    CommonItemCount,
    HeaderBar
  },
  data() {
    return {
      refresh: false,
      newVipList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onRefresh() {
      this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/list/vipList").then(res => {
        this.refresh = false;
        this.newVipList = res.returnData.newVipList;
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.bg {
  background-color: white;
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
}
</style>

