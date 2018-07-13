<template>
    <div class="page">
        <form action="/">
            <van-search v-model="value" placeholder="海贼王" show-action @cancel="onCancel" @search="onSearch" class="search">
                <!-- <div slot="action" @click="onSearch" v-if="value!=''" class="search-text">搜索</div> -->
            </van-search>
        </form>

        <div class="refresh" v-if="value==''">
            <div class="search-text">大家都在搜</div>
            <img slot="icon" src="../../assets/img/refresh.png" class="refresh-img" @click="refresh" />
        </div>

        <cross-line/>

        <div class="tag" v-if="value==''">
            <mt-button type="primary" size="small" class="button" v-for="(item,index) in hotItems" :key="index" @click="push(item.comic_id)">
                {{item.name}}
            </mt-button>
        </div>

        <div v-for="item in searchList" v-if="showSearchList && value!=''&&!isOnSearch">
            <div class="search-name" @click="push(item.comic_id)">{{item.name}}</div>
            <cross-line/>
        </div>

        <search-result-page :data="value" v-if="isOnSearch && value!=''&&!showSearchList" />
    </div>
</template>

<script>
import { Search } from "vant";
import { Button } from "mint-ui";
import CrossLine from "@/components/widget/cross-line";
import SearchResultPage from "@/components/novel/search-result-page";
export default {
  components: {
    [Search.name]: Search,
    [Button.name]: Button,
    CrossLine,
    SearchResultPage
  },
  created() {
    this.getData();
  },
  data() {
    return {
      value: "",
      hotItems: [],
      searchList: [],
      comics: [],
      showSearchList: false,
      isOnSearch: false
    };
  },
  watch: {
    //观察数据变化之后,在做请求
    value: function(newVal, oldVal) {
      this.value = newVal;
      this.getSearchList();
      this.isOnSearch = false;
      this.showSearchList = true;
    }
  },
  methods: {
    onSearch() {
      this.showSearchList = false;
      this.isOnSearch = true;
    },
    getSearchList() {
      this.get("v3/appV3_3/ios/phone/search/relative", {
        inputText: this.value
      }).then(res => {
        this.searchList = res.returnData;
      });
    },
    onCancel() {
      this.$router.back();
    },
    refresh() {
      this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/search/hotkeywordsnew").then(res => {
        this.hotItems = res.returnData.hotItems;
      });
    },
    push(comicId) {
      this.$router.push({
        path: "/comics-detail",
        query: { data: comicId + "" }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background-color: white;
  .search {
    display: flex;
    .search-text {
      padding: 10px;
    }
  }
  .refresh {
    padding: 10px;
    display: flex;
    flex-direction: row;
    .search-text {
      font-size: 12px;
      flex: 1;
      color: #434144;
    }
    .refresh-img {
      height: 15px;
      width: 15px;
    }
  }
  .tag {
    padding: 5px;
  }
  .button {
    color: darkcyan;
    margin: 5px;
    border-radius: 20px;
    height: 18px;
    font-size: 10px;
    background: powderblue;
  }
  .search-name {
    padding: 10px;
    font-size: 12px;
  }
}
</style>


