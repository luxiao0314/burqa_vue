<template>
  <div>
    <van-pull-refresh v-model="refresh" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div v-for="(item,index) in list">
          <rank-list-item :data="item" @itemClick="push(item.comic_id)" />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import RankListItem from "@/components/novel/view/rank-list-item";

import { List, PullRefresh } from "vant";
export default {
  components: {
    RankListItem,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  props: {
    type: {
      type: Number
    }
  },
  data() {
    return {
      list: [],
      refresh: false,
      loading: false,
      finished: false,

      page: 1,
      period: "week"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    push(comicId) {
      this.$router.push({
        path: "/comics-detail",
        query: { data: comicId + "" }
      }); //comicId为int类型.直接传递为空
    },
    refreshData(period) {
      this.refresh = true;
      this.period = period;
      this.page = 1;
      this.getData();
    },
    onRefresh() {
      this.refresh = true;
      this.page = 1;
      this.getData();
    },
    onLoad() {
      this.loading = true;
      this.page++;
      this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/list/getRankComicList", {
        page: this.page,
        type: this.type,
        period: this.period
      }).then(res => {
        this.refresh = false;
        this.loading = false;
        if (res.returnData != null && res.returnData.comics.length != 0) {
          if (this.refresh) {
            this.list = res.returnData.comics;
          } else {
            this.list.splice(this.list.length, 0, ...res.returnData.comics);
          }
        } else {
          this.finished = true;
        }
      });
    }
  }
};
</script>

