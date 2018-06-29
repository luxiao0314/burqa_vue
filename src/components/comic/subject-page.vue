<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad">
    <subject-item/>
  </van-list>
</template>

<script>
import axios from "axios";
import { List, Cell, Dialog } from "vant";
import SubjectItem from "@/components/comic/view/subject-item";

export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    SubjectItem
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
      axios
        .get("/api/novel/rank/0/0/0.json")
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? "0" + text : text);
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

