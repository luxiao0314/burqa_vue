<template>
    <van-pull-refresh v-model="refresh" @refresh="onRefresh">
        <van-list v-model="loadmore" :finished="finished" @load="onLoad">
            <div v-for="item in list">
                <news-item :data="item" />
            </div>
        </van-list>
    </van-pull-refresh>
</template>

<script>
import { List, PullRefresh } from "vant";
import NewsItem from "@/components/news/view/news-item";

export default {
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    NewsItem
  },
  created() {
    this.getData();
  },
  data() {
    return {
      list: [],
      refresh:false,
      loading: false,
      finished: false
    };
  },
  methods: {
      onRefresh() {
      this.getData(false);
    },
    onLoad() {
      this.getData(true);
    },
    getData(loadmore) {
      if (loadmore) {
        this.loading = true;
      }
      this.get("/v3/appV3_3/ios/phone/comic/todayRecommend").then(res => {
        this.list = res.returnData.dayDataList[0].dayItemDataList;
        this.refresh = false;  
        this.loading = false;
        if (list.length == 0) {
          this.finished = true;
        }
      });
    }
  }
};
</script>

