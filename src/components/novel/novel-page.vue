<template>
  <div class="novel-page">
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(image, index) in galleryItems" :key="index">
          <img :src="image.cover" class="banner-img" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div v-for="item in comicLists">
      <!--排行,vip,订阅等-->
      <div v-if="item.comicType == 11">
        <div class="tag-item">
          <div v-for="(tagItem,index) in item.comics">
            <img :src="tagItem.cover" class="tag-img" @click="tabClick(index)">
          </div>
        </div>
      </div>
      <!--超人气作品-->
      <div v-else-if="item.itemTitle == '超人气作品'" class="popular-works" @click="more">
        <div class="works-title-item">
          <div class="works-title">{{item.itemTitle}}</div>
          <div class="works-des">{{item.description}}
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <popular-works-item v-for="subItem in item.comics" :key="subItem.cover" :data="subItem" />

      </div>
      <!--新作推送-->
      <div v-else class="popular-works">
        <div class="works-title-item">
          <div class="works-title">{{item.itemTitle}}</div>
          <div class="works-des">{{item.description}}
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <div v-for="(subItem,index) in item.comics">
          <common-item v-if="subItem.cover.includes('ubig') && index == 0" :data="subItem" />
          <common-item-count v-else :data="subItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import PopularWorksItem from "@/components/novel/view/popular-works-item";
import CommonItem from "@/components/novel/view/common-item";
import CommonItemCount from "@/components/novel/view/common-item-count";
import CrossLine from "@/components/widget/cross-line";
export default {
  components: {
    CommonItem,
    CrossLine,
    CommonItemCount,
    PopularWorksItem
  },
  created() {
    this.getData();
  },
  data() {
    return {
      galleryItems: [],
      comicLists: []
    };
  },
  methods: {
    getData() {
      this.get("/v3/appV3_3/ios/phone/comic/getDetectList").then(res => {
        this.galleryItems = res.returnData.galleryItems;
        this.comicLists = res.returnData.comicLists;
      });
    },
    more() {
      this.$toast("more");
    },
    tabClick(index) {
      if (index == 0) {
        this.$router.push({ path: "/rank" });
      } else if (index == 1) {
        this.$router.push({ path: "/vip" });
      } else if (index == 2) {
        this.$router.push({ path: "/subscibe" });
      }
    }
  }
};
</script>

<style lang="scss">
.swipe-wrapper {
  width: 100%;
  height: 220px;
}
.banner-img {
  width: 100%;
}
.tag-item {
  display: flex;
  flex-direction: row;
}
.tag-img {
  width: 100%;
}
.popular-works {
  flex: 1;
  background-color: white;
}
.works-title-item {
  margin-top: 10px;
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
.novel-page {
  margin-bottom: 20px;
}
</style>

