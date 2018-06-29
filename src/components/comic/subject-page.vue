<template>
      <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item + ''"/>
      </van-list>

</template>

<script>
import { List } from "vant";
export default {
  components:{
    [List.name] : List,

  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? "0" + text : text);
          console.log = list;
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.list = [];
        this.finished = false;
        this.refreshing = false;
        window.scrollTo(0, 10);
      }, 1000);
    }
  }
};
</script>

