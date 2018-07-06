<template>
  <div class="news-list">
    <!-- <span>{{data.timeStamp | formatDate}}</span> -->
    <div class="title">{{data.weekDay}}</div>
    <div v-for="item in data.dayItemDataList">
      <div v-if="item.type == 2" class="list-item">
        <div class="list-title">{{item.comicListTitle}}</div>
        <div v-for="listItem in item.dayComicItemList">
          <news-list-item :data="listItem" @itemClick="push(listItem.comicId)" />
        </div>
      </div>
      <div v-else>
        <img :src="item.cover" class="img" @click="push(item.comicId)" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../utils/date.js";
import NewsListItem from "@/components/news/view/news-list-item";
export default {
  components: {
    NewsListItem
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    push(comicId) {
      this.$router.push({
        path: "/comics-detail",
        query: { data: comicId + "" }
      }); //comicId为int类型.直接传递为空
    }
  }
};
</script>

<style lang="scss">
.news-list {
  flex-direction: row;
  overflow: hidden;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.title {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  display: flex;
  flex-direction: row;
}
.img {
  margin-bottom: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.list-title {
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
}
.list-item {
  padding: 10px;
  border-radius: 10px;
  background-color: white;
}
</style>



