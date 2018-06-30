<template>
  <div class="new-page">
    <van-pull-refresh v-model="refresh" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div v-for="item in list">
          <news-list :data="item" />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { List, PullRefresh } from "vant";
import NewsList from "@/components/news/view/news-list";

export default {
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    NewsList
  },
  created() {
    this.getData();
  },
  data() {
    return {
      list: [],
      refresh: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    onRefresh() {
      this.getData(false);
    },
    onLoad() {
      this.loading = true;
      // this.getData();
    },
    getData() {
      this.get("/v3/appV3_3/ios/phone/comic/todayRecommend").then(res => {
        this.list = res.returnData.dayDataList;
        this.refresh = false;
        this.loading = false;
        if (this.list.length == 0) {
          this.finished = true;
        }
      });
    }
  }
};
</script>


