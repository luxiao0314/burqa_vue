<template>
  <div class="page">

    <div class="header">
      <i class="icon-arrow_lift" @click="back"></i>
    </div>

    <img :src="comic.wideCover" v-if="comic.wideCover !=null" class="img-bg">
    <img :src="comic.cover" v-else class="img-bg">

    <div class="item">
      <div class="comic-name">{{comic.name}}</div>
      <div class="item-tag">
        <div class="author-name" @click="pushAuthor()">{{author.name}}</div>
        <div v-for="item in comic.classifyTags">
          <mt-button type="primary" size="small" class="button" @click="push(item)">
            {{item.name}}
          </mt-button>
        </div>
      </div>

      <van-tabs type="line" swipeable :duration="1" class="tab" :line-width="50">
        <van-tab :title="'详情'">
          <comic-tab-detail-page :comicdata="comic" />
        </van-tab>
        <van-tab :title="'目录'">
          <comic-tab-directory-page :chapterlist="chapter_list" />
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import { Button } from "mint-ui";
import { Tab, Tabs } from "vant";
import CrossLine from "@/components/widget/cross-line";
import ComicTabDetailPage from "@/components/novel/view/comic-tab-detail-page";
import ComicTabDirectoryPage from "@/components/novel/view/comic-tab-directory-page";
export default {
  components: {
    CrossLine,
    ComicTabDetailPage,
    ComicTabDirectoryPage,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      comicid: this.$route.query.data,
      comic: Object,
      author: Object,
      otherWorks: [],
      chapter_list: []
    };
  },
  created() {
    this.getData();
    this.$root.eventHub.$on("refresh", target => {
      this.comicid = target;
      this.getData()
    });
  },
  methods: {
    getTags(tags) {
      var tag_tags = "";
      if (tags != null) {
        tags.forEach(element => {
          tag_tags += element + " ";
        });
      }
      return tag_tags;
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/comic/detail_static_new", {
        comicid: this.comicid
      }).then(res => {
        this.comic = res.returnData.comic;
        this.chapter_list = res.returnData.chapter_list;
        this.author = res.returnData.comic.author;
        this.otherWorks = res.returnData.otherWorks;
      });
    },
    back() {
      this.$router.back();
    },
    push(item) {
      this.$router.push({
        path: "/common",
        query: { argValue: item.argVal, argName: item.argName }
      });
    },
    pushAuthor() {
      this.$router.push({
        path: "/author-page",
        query: { otherWorks: this.otherWorks, author: this.author }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  .header {
    padding: 10px;
    width: 100%;
    position: fixed;
  }
  img {
    width: 100%;
  }
  .item {
    padding: 10px;
    .item-tag {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      .comic-name {
        font-size: 20px;
        font-weight: bold;
      }
      .author-name {
        flex: 1;
        font-size: 12px;
        color: darkcyan;
      }
      .button {
        color: darkcyan;
        margin-left: 10px;
        border-radius: 20px;
        height: 18px;
        font-size: 10px;
        background: powderblue;
      }
    }
  }
}
</style>


