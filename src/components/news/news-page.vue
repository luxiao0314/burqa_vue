<template>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div v-for="item in list">
            <news-item :data="item" />
        </div>
    </van-list>
</template>

<script>
import { List, Cell, Dialog } from "vant";
import NewsItem from "@/components/news/view/news-item";

export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    NewsItem
  },
  created() {
    this.getData();
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    getData() {
      this.get("/v3/appV3_3/ios/phone/comic/todayRecommend")
        .then(res => {
            this.list = res.returnData.dayDataList[0].dayItemDataList;
        })
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {}
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

