<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad">
    <div v-for="item in list" >
      <subject-item :data="item"/>
    </div>
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
        .get("/api/subject/0/0.json?channel=ios&version=2.4.7")
        .then(res => {
          this.list = res.data
        })
        .catch(err => console.log(err));
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {


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

