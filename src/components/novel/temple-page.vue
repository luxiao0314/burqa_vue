<template>
    <div>
        <van-pull-refresh v-model="refresh" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" @load="onLoad">
                <div v-for="(item,index) in list">
                    <rank-list-item :data="item" />
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
    onRefresh() {
      this.getData();
    },
    onLoad() {
      //   this.loading = true;
      // this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/list/getRankComicList", {
        page: this.page,
        type: this.type,
        period: this.period
      }).then(res => {
        this.list = res.comics;
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

