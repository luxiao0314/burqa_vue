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
                    <div v-for="tagItem in item.comics">
                        <img :src="tagItem.cover" class="tag-img">
                    </div>
                </div>
            </div>

            <div v-if="item.comicType == 15" class="popular-works">
                <div class="works-title-item">
                    <div class="works-title">{{item.itemTitle}}</div>
                    <div class="works-des">{{item.description}}</div>
                </div>
                <popular-works-item v-for="works in item.comics" :key="works.cover" :data="works" />
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import PopularWorksItem from "@/components/novel/view/popular-works-item";
export default {
  components: {
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
        this.galleryItems = res.galleryItems;
        this.comicLists = res.comicLists;
      });
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
</style>

