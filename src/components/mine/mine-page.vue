<!-- 我的 -->

<template>
    <div class="mine">
        <!-- 顶部头像和设置 -->
        <div class="top">
            <div class="info">
                <div class="avatar-wrapper">
                    <img src="../../assets/img/lazyload.jpeg">
                </div>

                <div class="name-wrapper" @click="login">
                    <span class="name">点击头像登录</span>
                    <span class="desc">登录后可以使用更多精彩功能哟</span>
                </div>

                <div class="operation">
                    <i class="iconfont icon-youjian"></i>
                    <i class="iconfont icon-shezhi"></i>
                </div>
            </div>
            <div class="status">
                <div class="status-top">
                    <div class="status-title">VIP状态:未开通</div>
                    <mt-button type="primary" size="small" class="button">
                        签到
                    </mt-button>
                </div>

                <cross-line/>

                <div class="status-bottom">
                    <div class="status-item">
                        <div>0</div>
                        <div>妖气币</div>
                    </div>
                    <div class="status-item">
                        <div>0</div>
                        <div>阅读券</div>
                    </div>
                    <div class="status-item">
                        <div>0</div>
                        <div>月票</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 重要的栏目 -->
        <div class="important">
            <cross-item name="我的订阅">
                <i class="iconfont icon-shoucang1"></i>
            </cross-item>

            <cross-item name="我的封印图">
                <i class="iconfont icon-zuji"></i>
            </cross-item>

            <cross-item name="我的优惠券" class="mine-item">
                <i class="iconfont icon-dizhi"></i>
            </cross-item>

            <cross-item name="在线阅读免流量">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="帮助中心" class="mine-item">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="我要反馈">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="给我们评分">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="成为作者">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="首都网警">
                <i class="iconfont icon-money"></i>
            </cross-item>

            <cross-item name="设置">
                <i class="iconfont icon-money"></i>
            </cross-item>
        </div>
    </div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";
import CrossItem from "@/components/mine/view/cross-item";
import { Button } from "mint-ui";

export default {
  components: {
    CrossLine,
    CrossItem
  },
  methods: {
    login() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style lang="scss">
.mine {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  .top {
    flex-direction: column;
    display: flex;
    .info {
      background-color: #06c1ae;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      .avatar-wrapper {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 70px;
        height: 70px;
        margin-left: 10px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .name-wrapper {
        display: flex;
        flex-direction: column;
        height: 0px;
        margin-top: 35px;
        .name {
          font-size: 14px;
          color: #fff;
        }
        .desc {
          font-size: 10px;
          color: #fcfefe;
        }
      }
    }
    .operation {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      i {
        margin-top: 10px;
        margin-right: 15px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .important {
    width: 100%;
  }
  .mine-item {
    margin-top: 10px;
  }
  .status {
    background-color: #fff;
    border-radius: 10px;
    margin-left: 10px;
    margin: 10px;
    padding: 10px;
    .status-top {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      .button {
        margin-right: 10px;
        height: 20px;
        float: right;
        font-size: 10px;
        border-radius: 20px;
      }
      .status-title {
        margin-left: 10px;
        font-size: 10px;
        flex: 1;
      }
    }
    .status-bottom {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      .status-item {
        width: 33%;
        font-size: 10px;
        text-align: center;
      }
    }
  }
}
</style>
